// Response Instructions + Write For Me — backend

let activeInstruction = '';
let instructionEnabled = false;
let savedPresets = {};
let savedWfmDir = '';
let savedDrafts = [];
let savedRiMode = 'simple';
let savedSimple = {};
let savedTemplates = {};
let wfmIncludePreset = false;

const DEFAULT_TEMPLATES = {
  system_prompt: `You are a creative fiction ghostwriter in an ongoing novel-style roleplay between {{user}} and {{char}}.
Write the next in-character narrative response from the perspective of {{user}}.

CRITICAL RULES:
- Output ONLY the raw story prose. NEVER include thinking notes, explanations, conversational filler, or meta-commentary.
- Match the established literary tone, narrative pacing, and scene setting exactly.
- Preserve established character pronouns (e.g. if {{user}} or {{char}} is male, use he/him; never default to they/them if established).
- Do NOT use script-asterisk actions (*sighs*). Write in novel prose.`,
  rewrite_prompt: `### Recent Story Excerpt:
{{context}}

### User Draft:
{{draft}}

### Direction:
{{direction}}

[Output raw story reply now]:`,
  scratch_prompt: `### Recent Story Excerpt:
{{context}}

### Direction:
{{direction}}

[Output raw story reply now]:`
};

// ─── Storage ──────────────────────────────────────────────────────────────────
async function loadState(userId) {
  try {
    const raw = await spindle.storage.read(`state_${userId ?? 'default'}.json`);
    const parsed = JSON.parse(raw);
    activeInstruction  = parsed.instruction   ?? '';
    instructionEnabled = parsed.enabled       ?? false;
    savedPresets       = parsed.presets       ?? {};
    savedWfmDir        = parsed.wfm_direction ?? '';
    savedDrafts        = parsed.saved_drafts  ?? [];
    savedRiMode        = parsed.ri_mode       ?? 'simple';
    savedSimple        = parsed.simple        ?? {};
    savedTemplates     = parsed.templates       ?? { ...DEFAULT_TEMPLATES };
    wfmIncludePreset   = parsed.wfm_include_preset ?? false;
  } catch (_) {
    savedTemplates = { ...DEFAULT_TEMPLATES };
  }
}

async function persistState(userId) {
  try {
    await spindle.storage.write(`state_${userId ?? 'default'}.json`, JSON.stringify({
      instruction:   activeInstruction,
      enabled:       instructionEnabled,
      presets:       savedPresets,
      wfm_direction: savedWfmDir,
      saved_drafts:  savedDrafts,
      ri_mode:            savedRiMode,
      simple:             savedSimple,
      templates:          savedTemplates,
      wfm_include_preset: wfmIncludePreset,
    }));
  } catch (_) {}
}

function renderTemplate(tpl, vars) {
  return tpl
    .replace(/\{\{user\}\}/g, vars.user || 'User')
    .replace(/\{\{char\}\}/g, vars.char || 'Companion')
    .replace(/\{\{context\}\}/g, vars.context || '(None)')
    .replace(/\{\{draft\}\}/g, vars.draft || '(None)')
    .replace(/\{\{direction\}\}/g, vars.direction || 'Continue the scene naturally.');
}

// ─── Frontend Messages ────────────────────────────────────────────────────────
spindle.onFrontendMessage(async (payload, userId) => {
  if (!payload) return;

  if (payload.type === 'ri:load') {
    await loadState(userId);
    spindle.sendToFrontend({
      type: 'ri:state',
      state: {
        instruction:        activeInstruction,
        enabled:            instructionEnabled,
        presets:            savedPresets,
        wfm_direction:      savedWfmDir,
        saved_drafts:       savedDrafts,
        ri_mode:            savedRiMode,
        simple:             savedSimple,
        templates:          savedTemplates,
        wfm_include_preset: wfmIncludePreset,
      },
    }, userId);
  }

  if (payload.type === 'ri:update') {
    activeInstruction  = payload._active_instruction ?? payload.instruction ?? activeInstruction;
    instructionEnabled = payload.enabled       ?? instructionEnabled;
    savedPresets       = payload.presets       ?? savedPresets;
    savedWfmDir        = payload.wfm_direction ?? savedWfmDir;
    savedDrafts        = payload.saved_drafts  ?? savedDrafts;
    savedRiMode        = payload.ri_mode       ?? savedRiMode;
    savedSimple        = payload.simple        ?? savedSimple;
    savedTemplates     = payload.templates          ?? savedTemplates;
    wfmIncludePreset   = payload.wfm_include_preset ?? wfmIncludePreset;
    await persistState(userId);
  }

  if (payload.type === 'ri:generate') {
    const direction = payload.direction?.trim() || '';
    const userInput = payload.userInput?.trim() || '';
    const charName = payload.charName || 'the companion';
    const personaName = payload.personaName || 'the user';
    const contextSnippet = payload.contextSnippet?.trim() || '';

    try {
      const connections = await spindle.connections.list(userId);
      const conn = connections?.find(c => c.is_default) ?? connections?.[0];
      if (!conn) throw new Error('No connection profile found in Lumiverse settings.');

      const tpls = { ...DEFAULT_TEMPLATES, ...savedTemplates };
      const vars = {
        user: personaName,
        char: charName,
        context: contextSnippet,
        draft: userInput,
        direction: direction || 'Continue the scene naturally.'
      };

      // ─── Fetch preset blocks if enabled ──────────────────────────────────
      const presetMessages = [];
      if (wfmIncludePreset && conn.preset_id) {
        try {
          const preset = await spindle.presets.get(conn.preset_id);
          if (preset?.prompt_order?.length) {
            for (const block of preset.prompt_order) {
              if (!block.enabled || !block.content?.trim() || block.marker) continue;
              presetMessages.push({
                role: block.role === 'assistant' ? 'assistant' : 'system',
                content: block.content.trim(),
              });
            }
          }
        } catch (err) {
          spindle.log.warn('Could not fetch preset blocks:', err?.message);
        }
      }

      const systemMessage = renderTemplate(tpls.system_prompt, vars);
      const userPromptTemplate = userInput ? tpls.rewrite_prompt : tpls.scratch_prompt;
      const userMessage = renderTemplate(userPromptTemplate, vars);

      // preset blocks → ghostwriter system prompt → user prompt
      const messages = [
        ...presetMessages,
        { role: 'system', content: systemMessage },
        { role: 'user',   content: userMessage },
      ];

      const result = await spindle.generate.quiet({
        type: 'quiet',
        userId,
        connection_id: conn.id,
        messages,
        parameters: { max_tokens: 600, temperature: 0.8 },
        reasoning: { source: 'off' },
      });

      let rawText = result?.content ?? '';

      // Strip think tags & meta-chatter
      rawText = rawText.replace(/<think>[\s\S]*?<\/think>/gi, '').trim();
      rawText = rawText.replace(/^(The user wants me to|Here is the response|Certainly|Here's a draft)[^\n]*\n+/i, '').trim();

      spindle.sendToFrontend({ type: 'ri:draft', text: rawText }, userId);
    } catch (err) {
      spindle.log.error('RI Generation failed:', err);
      spindle.sendToFrontend({ 
        type: 'ri:draft', 
        text: '', 
        error: err?.message || 'Generation error' 
      }, userId);
    }
  }
});

// ─── Prompt Interceptor ───────────────────────────────────────────────────────
spindle.registerInterceptor(async (messages) => {
  if (!instructionEnabled || !activeInstruction.trim()) return messages;
  const injected = { role: 'system', content: `[Response Instructions]\n${activeInstruction.trim()}` };
  let lastUserIdx = -1;
  for (let i = messages.length - 1; i >= 0; i--) {
    if (messages[i].role === 'user') { lastUserIdx = i; break; }
  }
  const at = lastUserIdx === -1 ? messages.length : lastUserIdx;
  return [...messages.slice(0, at), injected, ...messages.slice(at)];
}, 10);

spindle.log.info('Response Instructions loaded!');

await loadState('default');
