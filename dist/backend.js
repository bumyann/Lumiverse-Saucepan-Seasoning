// Response Instructions + Write For Me — backend

// generationType values the interceptor can receive. Anything unknown is treated as "apply".
const SCOPE_KEYS = ['normal', 'continue', 'regenerate', 'swipe', 'impersonate', 'quiet'];
const DEFAULT_SCOPE = Object.fromEntries(SCOPE_KEYS.map(k => [k, true]));

let activeInstruction = '';   // what the interceptor injects (composed simple text or custom text)
let customInstruction = '';   // the Custom-mode textarea, kept separate so Simple mode can't clobber it
let instructionEnabled = false;
let scope = { ...DEFAULT_SCOPE };
let savedWfmDir = '';
let savedDrafts = [];
let savedRiMode = 'simple';
let savedSimple = {};
let savedTemplates = {};
let wfmIncludePreset = false;
let wfmPresetId = null;
let savedRiPresets = [];
let savedWfmDirPresets = [];

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
    activeInstruction  = parsed.active_instruction ?? parsed.instruction ?? '';
    customInstruction  = parsed.custom_instruction ?? parsed.instruction ?? '';
    instructionEnabled = parsed.enabled       ?? false;
    scope              = { ...DEFAULT_SCOPE, ...(parsed.scope ?? {}) };
    savedWfmDir        = parsed.wfm_direction ?? '';
    savedDrafts        = parsed.saved_drafts  ?? [];
    savedRiMode        = parsed.ri_mode       ?? 'simple';
    savedSimple        = parsed.simple        ?? {};
    savedTemplates     = { ...DEFAULT_TEMPLATES, ...(parsed.templates ?? {}) };
    wfmIncludePreset   = parsed.wfm_include_preset ?? false;
    wfmPresetId        = parsed.wfm_preset_id      ?? null;
    savedRiPresets     = parsed.ri_presets         ?? [];
    savedWfmDirPresets = parsed.wfm_dir_presets    ?? [];
  } catch (_) {
    savedTemplates = { ...DEFAULT_TEMPLATES };
  }
}

async function persistState(userId) {
  try {
    await spindle.storage.write(`state_${userId ?? 'default'}.json`, JSON.stringify({
      active_instruction: activeInstruction,
      custom_instruction: customInstruction,
      enabled:            instructionEnabled,
      scope,
      wfm_direction:      savedWfmDir,
      saved_drafts:       savedDrafts,
      ri_mode:            savedRiMode,
      simple:             savedSimple,
      templates:          savedTemplates,
      wfm_include_preset: wfmIncludePreset,
      wfm_preset_id:      wfmPresetId,
      ri_presets:         savedRiPresets,
      wfm_dir_presets:    savedWfmDirPresets,
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

// ─── Chat context for Write For Me ────────────────────────────────────────────
// Reads the real chat instead of scraping the page. Returns null if anything is
// unavailable (missing permission, no open chat) so the caller can fall back to
// the snippet the frontend scraped.
async function buildChatContext(userId, fallbackChar, fallbackPersona) {
  try {
    const chat = await spindle.chats.getActive(userId);
    if (!chat?.id) return null;

    const [character, persona, messages] = await Promise.all([
      chat.character_id ? spindle.characters.get(chat.character_id, userId).catch(() => null) : null,
      spindle.personas.getActive(userId).catch(() => null),
      spindle.chat.getMessages(chat.id),
    ]);

    const charName = character?.name || fallbackChar;
    const personaName = persona?.name || fallbackPersona;

    const recent = (messages ?? [])
      .filter(m => m.role !== 'system' && m.content?.trim() && !m.extra?.hidden)
      .slice(-6);
    if (!recent.length) return null;

    const context = recent
      .map(m => `${m.role === 'user' ? personaName : charName}: ${m.content.trim().slice(0, 1200)}`)
      .join('\n\n');

    return { charName, personaName, context };
  } catch (err) {
    spindle.log.warn('Chat context unavailable, using page snippet:', err?.message);
    return null;
  }
}

// ─── Frontend Messages ────────────────────────────────────────────────────────
spindle.onFrontendMessage(async (payload, userId) => {
  if (!payload) return;

  if (payload.type === 'ri:load') {
    await loadState(userId);
    let presetList = [];
    try {
      const { data } = await spindle.presets.list({ limit: 50, userId });
      presetList = (data ?? []).map(p => ({ id: p.id, name: p.name }));
    } catch (_) {}
    spindle.sendToFrontend({
      type: 'ri:state',
      state: {
        instruction:        customInstruction,
        enabled:            instructionEnabled,
        scope,
        wfm_direction:      savedWfmDir,
        saved_drafts:       savedDrafts,
        ri_mode:            savedRiMode,
        simple:             savedSimple,
        templates:          savedTemplates,
        default_templates:  DEFAULT_TEMPLATES,
        wfm_include_preset: wfmIncludePreset,
        wfm_preset_id:      wfmPresetId,
        preset_list:        presetList,
        ri_presets:         savedRiPresets,
        wfm_dir_presets:    savedWfmDirPresets,
      },
    }, userId);
  }

  if (payload.type === 'ri:update') {
    if (payload._active_instruction !== undefined) activeInstruction = payload._active_instruction ?? '';
    if (payload.instruction !== undefined)         customInstruction = payload.instruction ?? '';
    if (payload.scope)                             scope = { ...DEFAULT_SCOPE, ...payload.scope };
    instructionEnabled = payload.enabled       ?? instructionEnabled;
    savedWfmDir        = payload.wfm_direction ?? savedWfmDir;
    savedDrafts        = payload.saved_drafts  ?? savedDrafts;
    savedRiMode        = payload.ri_mode       ?? savedRiMode;
    savedSimple        = payload.simple        ?? savedSimple;
    savedTemplates     = payload.templates          ?? savedTemplates;
    wfmIncludePreset   = payload.wfm_include_preset ?? wfmIncludePreset;
    wfmPresetId        = payload.wfm_preset_id      ?? wfmPresetId;
    savedRiPresets     = payload.ri_presets         ?? savedRiPresets;
    savedWfmDirPresets = payload.wfm_dir_presets    ?? savedWfmDirPresets;
    await persistState(userId);
  }

  if (payload.type === 'ri:generate') {
    const direction = payload.direction?.trim() || '';
    const userInput = payload.userInput?.trim() || '';
    let charName = payload.charName || 'the companion';
    let personaName = payload.personaName || 'the user';
    let contextSnippet = payload.contextSnippet?.trim() || '';

    try {
      const connections = await spindle.connections.list(userId);
      const conn = connections?.find(c => c.is_default) ?? connections?.[0];
      if (!conn) throw new Error('No connection profile found in Lumiverse settings.');

      const chatCtx = await buildChatContext(userId, charName, personaName);
      if (chatCtx) {
        charName = chatCtx.charName;
        personaName = chatCtx.personaName;
        contextSnippet = chatCtx.context;
      }

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
      if (wfmIncludePreset && wfmPresetId) {
        try {
          const preset = await spindle.presets.get(wfmPresetId, userId);
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
        parameters: { max_tokens: 800, temperature: 0.8 },
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
spindle.registerInterceptor(async (messages, context) => {
  if (!instructionEnabled || !activeInstruction.trim()) return messages;

  // Respect the "Applies to" selection. Unknown/missing types fall through and apply.
  const type = context?.generationType;
  if (type && scope[type] === false) return messages;

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
