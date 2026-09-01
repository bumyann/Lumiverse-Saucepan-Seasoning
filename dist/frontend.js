// Response Instructions + Write For Me — frontend

const IC = {
  ri:     `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><line x1="10" y1="9" x2="8" y2="9"/></svg>`,
  wfm:    `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m21.64 3.64-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72Z"/><path d="m14 7 3 3"/><path d="M5 6v4"/><path d="M19 14v4"/><path d="M10 2v2"/><path d="M7 8H3"/><path d="M21 16h-4"/><path d="M11 3H9"/></svg>`,
  gear:   `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/><circle cx="12" cy="12" r="3"/></svg>`,
  folder: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/></svg>`,
  trash:  `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2"/><line x1="10" y1="11" x2="10" y2="17"/><line x1="14" y1="11" x2="14" y2="17"/></svg>`,
  close:  `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>`,
  save:   `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"/></svg>`,
  saved:  `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"/><path d="m9 10 2 2 4-4"/></svg>`,
  list:   `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="8" y1="6" x2="21" y2="6"/><line x1="8" y1="12" x2="21" y2="12"/><line x1="8" y1="18" x2="21" y2="18"/><line x1="3" y1="6" x2="3.01" y2="6"/><line x1="3" y1="12" x2="3.01" y2="12"/><line x1="3" y1="18" x2="3.01" y2="18"/></svg>`,
  prev:   `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"/></svg>`,
  next:   `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"/></svg>`,
  gen:    `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>`,
  use:    `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>`,
};

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

export function setup(ctx) {
  let state = {
    instruction: '', enabled: false, presets: {}, wfm_direction: '', saved_drafts: [],
    ri_mode: 'simple',
    simple: { own: '', length: '', style: '', speak_for: '', intimacy: '', pacing: '', narration: '' },
    templates: { ...DEFAULT_TEMPLATES },
    wfm_include_preset: false,
    wfm_preset_id: null,
    preset_list: [],
    ri_presets: [],
    wfm_dir_presets: [],
  };
  let panelOpen = false, activeTab = 'ri';
  let drafts = [], draftIdx = 0, generating = false;
  let wfmView = 'generate';

  // ─── Styles ──────────────────────────────────────────────────────────────────
  const removeStyle = ctx.dom.addStyle(`
    #ri-toolbar {
      display: flex; align-items: center; gap: 4px;
      padding: 4px 8px; flex-shrink: 0; box-sizing: border-box;
      border-top: 1px solid var(--lumiverse-border);
    }
    .ri-icon-btn {
      display: inline-flex; align-items: center; justify-content: center;
      width: 28px; height: 28px; border-radius: 5px;
      border: 1px solid transparent; background: transparent;
      color: var(--lumiverse-text-dim); cursor: pointer; flex-shrink: 0;
      position: relative; transition: background 0.13s, color 0.13s, border-color 0.13s;
    }
    .ri-icon-btn:hover { background: var(--lumiverse-fill); color: var(--lumiverse-text); }
    .ri-icon-btn.ri-on {
      border-color: var(--lumiverse-accent); color: var(--lumiverse-accent);
      background: color-mix(in srgb, var(--lumiverse-accent) 12%, transparent);
    }
    .ri-dot {
      position: absolute; top: 4px; right: 4px;
      width: 5px; height: 5px; border-radius: 50%;
      background: var(--lumiverse-accent); box-shadow: 0 0 4px var(--lumiverse-accent);
      display: none;
    }
    .ri-icon-btn.ri-enabled .ri-dot { display: block; }
    #ri-divider { width: 1px; height: 16px; background: var(--lumiverse-border); margin: 0 2px; flex-shrink: 0; }

    #ri-panel {
      overflow: hidden; max-height: 0; opacity: 0;
      transition: max-height 0.22s ease, opacity 0.16s ease;
      background: var(--lumiverse-fill); border-top: 1px solid var(--lumiverse-border); flex-shrink: 0;
    }
    #ri-panel.ri-open { max-height: 480px; opacity: 1; }

    .ri-header {
      display: flex; align-items: center; gap: 5px;
      padding: 6px 10px; border-bottom: 1px solid var(--lumiverse-border);
      font-size: 10.5px; font-weight: 700; letter-spacing: 0.07em;
      text-transform: uppercase; color: var(--lumiverse-text-muted);
    }
    .ri-header-icon { display: flex; align-items: center; opacity: 0.7; }
    .ri-header-title { flex: 1; }
    .ri-hbtn {
      display: inline-flex; align-items: center; justify-content: center;
      width: 22px; height: 22px; border-radius: 4px; background: none; border: none;
      color: var(--lumiverse-text-dim); cursor: pointer;
      transition: color 0.12s, background 0.12s;
    }
    .ri-hbtn:hover { color: var(--lumiverse-text); background: var(--lumiverse-fill-subtle); }
    .ri-hbtn.ri-on { color: var(--lumiverse-accent); }

    .ri-toggle { position: relative; width: 28px; height: 15px; flex-shrink: 0; cursor: pointer; }
    .ri-toggle input { opacity: 0; width: 0; height: 0; position: absolute; }
    .ri-toggle-track {
      position: absolute; inset: 0; border-radius: 8px;
      background: var(--lumiverse-fill-subtle); border: 1px solid var(--lumiverse-border);
      transition: background 0.18s, border-color 0.18s;
    }
    .ri-toggle input:checked ~ .ri-toggle-track {
      background: color-mix(in srgb, var(--lumiverse-accent) 30%, transparent);
      border-color: var(--lumiverse-accent);
    }
    .ri-toggle-thumb {
      position: absolute; top: 2px; left: 2px; width: 9px; height: 9px;
      border-radius: 50%; background: var(--lumiverse-text-dim); transition: transform 0.18s, background 0.18s;
    }
    .ri-toggle input:checked ~ .ri-toggle-thumb { transform: translateX(13px); background: var(--lumiverse-accent); }

    .ri-body { padding: 8px 10px; display: flex; flex-direction: column; gap: 7px; max-height: 400px; overflow-y: auto; }

    .ri-ta {
      width: 100%; box-sizing: border-box; resize: vertical;
      background: var(--lumiverse-fill-subtle); border: 1px solid var(--lumiverse-border);
      border-radius: var(--lumiverse-radius); color: var(--lumiverse-text);
      font-size: 12px; font-family: inherit; padding: 6px 9px; outline: none;
      transition: border-color 0.14s;
    }
    .ri-ta:focus { border-color: var(--lumiverse-accent); }
    #ri-instr-ta { min-height: 72px; }
    #ri-dir-ta   { min-height: 40px; }

    .ri-label {
      font-size: 10px; text-transform: uppercase; letter-spacing: 0.06em;
      color: var(--lumiverse-text-dim); margin-bottom: 3px; font-weight: 600;
    }
    .ri-preview {
      background: var(--lumiverse-fill-subtle); border: 1px solid var(--lumiverse-border);
      border-radius: var(--lumiverse-radius); padding: 6px 9px;
      font-size: 12px; color: var(--lumiverse-text-muted);
      max-height: 64px; overflow-y: auto; white-space: pre-wrap; word-break: break-word;
    }

    .ri-draft-nav {
      display: flex; align-items: center; justify-content: center; gap: 6px;
      font-size: 11.5px; color: var(--lumiverse-text-muted);
    }
    .ri-nav-btn {
      display: inline-flex; align-items: center; justify-content: center;
      width: 24px; height: 24px; border-radius: 4px; background: none; border: none;
      color: var(--lumiverse-text-dim); cursor: pointer; transition: color 0.12s, background 0.12s;
    }
    .ri-nav-btn:hover { color: var(--lumiverse-text); background: var(--lumiverse-fill-subtle); }
    .ri-nav-btn:disabled { opacity: 0.28; cursor: default; pointer-events: none; }

    .ri-draft-box {
      background: var(--lumiverse-fill-subtle); border: 1px solid var(--lumiverse-border);
      border-radius: var(--lumiverse-radius); padding: 7px 9px;
      font-size: 12.5px; color: var(--lumiverse-text);
      max-height: 120px; overflow-y: auto; white-space: pre-wrap; word-break: break-word;
      display: none;
    }
    .ri-draft-box.ri-visible { display: block; }

    .ri-wfm-actions { display: flex; gap: 6px; align-items: center; }
    .ri-btn {
      display: inline-flex; align-items: center; justify-content: center; gap: 5px;
      padding: 5px 10px; border-radius: var(--lumiverse-radius);
      font-size: 12px; font-family: inherit; cursor: pointer;
      transition: background 0.13s, border-color 0.13s; line-height: 1; flex: 1;
    }
    .ri-btn-gen {
      border: 1px solid var(--lumiverse-border);
      background: var(--lumiverse-fill-subtle); color: var(--lumiverse-text-muted);
    }
    .ri-btn-gen:hover:not(:disabled) { background: var(--lumiverse-fill); color: var(--lumiverse-text); }
    .ri-btn-use {
      border: 1px solid var(--lumiverse-accent);
      background: color-mix(in srgb, var(--lumiverse-accent) 14%, transparent);
      color: var(--lumiverse-accent);
    }
    .ri-btn-use:hover:not(:disabled) { background: color-mix(in srgb, var(--lumiverse-accent) 26%, transparent); }
    .ri-btn:disabled { opacity: 0.38; cursor: default; }

    .ri-save-draft-btn {
      display: inline-flex; align-items: center; justify-content: center;
      width: 24px; height: 24px; border-radius: 4px; background: none; border: none;
      color: var(--lumiverse-text-dim); cursor: pointer; transition: color 0.12s, background 0.12s;
    }
    .ri-save-draft-btn:hover { color: var(--lumiverse-accent); background: var(--lumiverse-fill-subtle); }
    .ri-save-draft-btn:disabled { opacity: 0.28; cursor: default; pointer-events: none; }

    .ri-status { font-size: 11px; color: var(--lumiverse-text-dim); text-align: center; min-height: 13px; }

    .ri-wfm-tabs { display: flex; gap: 3px; }
    .ri-wfm-tab {
      display: inline-flex; align-items: center; gap: 4px;
      padding: 2px 8px; border-radius: 4px; font-size: 11.5px;
      background: none; border: none; color: var(--lumiverse-text-dim);
      cursor: pointer; transition: color 0.12s, background 0.12s; font-family: inherit;
    }
    .ri-wfm-tab:hover { color: var(--lumiverse-text); background: var(--lumiverse-fill-subtle); }
    .ri-wfm-tab.ri-on { color: var(--lumiverse-accent); background: color-mix(in srgb, var(--lumiverse-accent) 10%, transparent); }

    .ri-saved-list { display: flex; flex-direction: column; gap: 4px; max-height: 220px; overflow-y: auto; }
    .ri-saved-item {
      background: var(--lumiverse-fill-subtle); border: 1px solid var(--lumiverse-border);
      border-radius: var(--lumiverse-radius); padding: 6px 9px; font-size: 12px;
      color: var(--lumiverse-text); white-space: pre-wrap; word-break: break-word;
      max-height: 60px; overflow: hidden; position: relative;
    }
    .ri-saved-item-actions { display: flex; gap: 4px; margin-top: 4px; }
    .ri-saved-act {
      display: inline-flex; align-items: center; gap: 3px;
      background: none; border: 1px solid var(--lumiverse-border); border-radius: 3px;
      color: var(--lumiverse-text-muted); font-size: 11px; font-family: inherit;
      cursor: pointer; padding: 1px 6px; transition: color 0.12s, border-color 0.12s;
    }
    .ri-saved-act:hover { color: var(--lumiverse-accent); border-color: var(--lumiverse-accent); }
    .ri-saved-del:hover { color: #f87171; border-color: #f87171; }
    .ri-empty { font-size: 11.5px; color: var(--lumiverse-text-dim); padding: 8px 4px; text-align: center; }

    .ri-mode-tabs { display: flex; gap: 2px; padding: 5px 10px 0; border-bottom: 1px solid var(--lumiverse-border); }
    .ri-mode-tab {
      padding: 3px 10px; border-radius: 4px 4px 0 0; font-size: 11.5px; font-family: inherit;
      background: none; border: 1px solid transparent; border-bottom: none;
      color: var(--lumiverse-text-dim); cursor: pointer; transition: color 0.12s, background 0.12s;
    }
    .ri-mode-tab:hover { color: var(--lumiverse-text); }
    .ri-mode-tab.ri-on { color: var(--lumiverse-accent); background: var(--lumiverse-fill); border-color: var(--lumiverse-border); }
    .ri-simple-body { padding: 8px 10px; display: flex; flex-direction: column; gap: 10px; max-height: 260px; overflow-y: auto; }
    .ri-field { display: flex; flex-direction: column; gap: 4px; }
    .ri-field-label { font-size: 10px; text-transform: uppercase; letter-spacing: 0.07em; color: var(--lumiverse-text-dim); font-weight: 600; }
    .ri-chips { display: flex; flex-wrap: wrap; gap: 4px; }
    .ri-chip {
      padding: 2px 10px; border-radius: 20px; font-size: 11.5px; font-family: inherit;
      border: 1px solid var(--lumiverse-border); background: transparent;
      color: var(--lumiverse-text-muted); cursor: pointer; transition: color 0.12s, border-color 0.12s, background 0.12s;
    }
    .ri-chip:hover { border-color: var(--lumiverse-accent); color: var(--lumiverse-text); }
    .ri-chip.ri-on {
      border-color: var(--lumiverse-accent); color: var(--lumiverse-accent);
      background: color-mix(in srgb, var(--lumiverse-accent) 12%, transparent); font-weight: 600;
    }
    .ri-simple-ta {
      width: 100%; box-sizing: border-box; min-height: 44px; resize: vertical;
      background: var(--lumiverse-fill-subtle); border: 1px solid var(--lumiverse-border);
      border-radius: var(--lumiverse-radius); color: var(--lumiverse-text);
      font-size: 12px; font-family: inherit; padding: 5px 8px; outline: none; transition: border-color 0.14s;
    }
    .ri-simple-ta:focus { border-color: var(--lumiverse-accent); }
    .ri-composed-preview { font-size: 11px; color: var(--lumiverse-text-dim); font-style: italic; padding: 4px 0 0; min-height: 14px; line-height: 1.4; }

    .ri-help-text { font-size: 10.5px; color: var(--lumiverse-text-dim); line-height: 1.4; }

    .ri-lib-view {
      display: none; flex-direction: column; gap: 0;
    }
    .ri-lib-view.ri-visible { display: flex; min-height: 200px; }
    .ri-lib-header {
      display: flex; align-items: center; gap: 5px;
      padding: 5px 10px; border-bottom: 1px solid var(--lumiverse-border);
      font-size: 10.5px; font-weight: 700; letter-spacing: 0.07em;
      text-transform: uppercase; color: var(--lumiverse-text-muted);
    }
    .ri-lib-header-title { flex: 1; }
    .ri-lib-body { padding: 8px 10px; display: flex; flex-direction: column; gap: 7px; max-height: 360px; overflow-y: auto; }
    .ri-lib-save-row { display: flex; gap: 5px; align-items: center; }
    .ri-lib-name-input {
      flex: 1; background: var(--lumiverse-fill-subtle); border: 1px solid var(--lumiverse-border);
      border-radius: var(--lumiverse-radius); color: var(--lumiverse-text);
      font-size: 12px; font-family: inherit; padding: 4px 8px; outline: none;
      transition: border-color 0.14s;
    }
    .ri-lib-name-input:focus { border-color: var(--lumiverse-accent); }
    .ri-lib-save-btn {
      display: inline-flex; align-items: center; gap: 4px;
      padding: 4px 10px; border-radius: var(--lumiverse-radius);
      font-size: 12px; font-family: inherit; cursor: pointer;
      border: 1px solid var(--lumiverse-accent);
      background: color-mix(in srgb, var(--lumiverse-accent) 14%, transparent);
      color: var(--lumiverse-accent); white-space: nowrap;
      transition: background 0.13s;
    }
    .ri-lib-save-btn:hover { background: color-mix(in srgb, var(--lumiverse-accent) 26%, transparent); }
    .ri-lib-list { display: flex; flex-direction: column; gap: 4px; }
    .ri-lib-item {
      background: var(--lumiverse-fill-subtle); border: 1px solid var(--lumiverse-border);
      border-radius: var(--lumiverse-radius); padding: 6px 9px;
      display: flex; flex-direction: column; gap: 4px;
    }
    .ri-lib-item-name {
      font-size: 12px; font-weight: 600; color: var(--lumiverse-text);
      white-space: nowrap; overflow: hidden; text-overflow: ellipsis;
    }
    .ri-lib-item-preview {
      font-size: 11px; color: var(--lumiverse-text-dim);
      overflow: hidden; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical;
    }
    .ri-lib-item-actions { display: flex; gap: 4px; }
    .ri-lib-act {
      display: inline-flex; align-items: center; gap: 3px;
      background: none; border: 1px solid var(--lumiverse-border); border-radius: 3px;
      color: var(--lumiverse-text-muted); font-size: 11px; font-family: inherit;
      cursor: pointer; padding: 1px 6px; transition: color 0.12s, border-color 0.12s;
    }
    .ri-lib-act:hover { color: var(--lumiverse-accent); border-color: var(--lumiverse-accent); }
    .ri-lib-del:hover { color: #f87171; border-color: #f87171; }
    .ri-lib-empty { font-size: 11.5px; color: var(--lumiverse-text-dim); padding: 8px 4px; text-align: center; }

    .ri-wfm-option {
      display: flex; align-items: center; gap: 7px;
    }
    .ri-wfm-option-label {
      font-size: 11.5px; color: var(--lumiverse-text-muted);
    }
    #ri-preset-select {
      width: 100%; box-sizing: border-box;
      background: var(--lumiverse-fill-subtle); border: 1px solid var(--lumiverse-border);
      border-radius: var(--lumiverse-radius); color: var(--lumiverse-text);
      font-size: 12px; font-family: inherit; padding: 5px 8px; outline: none;
      transition: border-color 0.14s; cursor: pointer;
    }
    #ri-preset-select:focus { border-color: var(--lumiverse-accent); }
    #ri-preset-select:disabled { opacity: 0.4; cursor: default; }
    #ri-preset-picker { display: none; }
  `);

  function getComposerInput() {
    const inputArea = document.querySelector('[data-component="InputArea"], [class*="inputArea"], [class*="composer"]');
    if (inputArea) {
      const candidates = inputArea.querySelectorAll('textarea');
      for (const el of candidates) {
        if (!el.closest('#ri-panel')) return el;
      }
    }
    const allTextareas = document.querySelectorAll('textarea');
    for (const el of allTextareas) {
      if (!el.closest('#ri-panel')) return el;
    }
    return null;
  }

  // ─── Toolbar ──────────────────────────────────────────────────────────────────
  function buildToolbar() {
    const el = document.createElement('div');
    el.id = 'ri-toolbar';
    el.innerHTML = `
      <button class="ri-icon-btn" id="ri-btn-ri" title="Response Instructions">
        ${IC.ri}<span class="ri-dot"></span>
      </button>
      <div id="ri-divider"></div>
      <button class="ri-icon-btn" id="ri-btn-wfm" title="Write For Me">${IC.wfm}</button>
      <button class="ri-icon-btn" id="ri-btn-tpl" title="Edit Prompt Templates">${IC.gear}</button>
    `;
    el.querySelector('#ri-btn-ri').onclick  = () => togglePanel('ri');
    el.querySelector('#ri-btn-wfm').onclick = () => togglePanel('wfm');
    el.querySelector('#ri-btn-tpl').onclick = () => togglePanel('tpl');
    return el;
  }

  // ─── Panel ────────────────────────────────────────────────────────────────────
  function buildPanel() {
    const el = document.createElement('div');
    el.id = 'ri-panel';
    el.innerHTML = `
      <!-- TAB 1: RI -->
      <div id="ri-tab-ri">
        <div class="ri-header">
          <span class="ri-header-icon">${IC.ri}</span>
          <span class="ri-header-title">Response Instructions</span>
          <label class="ri-toggle" title="Enable">
            <input type="checkbox" id="ri-chk">
            <span class="ri-toggle-track"></span>
            <span class="ri-toggle-thumb"></span>
          </label>
          <button class="ri-hbtn" id="ri-preset-btn" title="Presets">${IC.folder}</button>
          <button class="ri-hbtn" id="ri-clear-btn" title="Clear">${IC.trash}</button>
          <button class="ri-hbtn" id="ri-close-ri"  title="Close">${IC.close}</button>
        </div>
        <div class="ri-mode-tabs">
          <button class="ri-mode-tab ri-on" id="ri-mode-simple">Simple</button>
          <button class="ri-mode-tab" id="ri-mode-custom">Custom</button>
        </div>

        <div class="ri-simple-body" id="ri-simple-body">
          <div class="ri-field">
            <div class="ri-field-label">Your own instructions</div>
            <textarea class="ri-simple-ta" id="ri-simple-own" placeholder="Anything else? e.g. {{companion}} loses his memories"></textarea>
          </div>
          <div class="ri-field">
            <div class="ri-field-label">Length</div>
            <div class="ri-chips" data-field="length">
              <button class="ri-chip ri-on" data-val="">Default</button>
              <button class="ri-chip" data-val="short">Short</button>
              <button class="ri-chip" data-val="medium">Medium</button>
              <button class="ri-chip" data-val="long">Long</button>
              <button class="ri-chip" data-val="essay">Essay</button>
              <button class="ri-chip" data-val="ramble">Ramble</button>
            </div>
          </div>
          <div class="ri-field">
            <div class="ri-field-label">Style</div>
            <div class="ri-chips" data-field="style">
              <button class="ri-chip ri-on" data-val="">Default</button>
              <button class="ri-chip" data-val="first person">First Person</button>
              <button class="ri-chip" data-val="second person">Second Person</button>
              <button class="ri-chip" data-val="third person">Third Person</button>
              <button class="ri-chip" data-val="text messaging style">Text Messaging</button>
            </div>
          </div>
          <div class="ri-field">
            <div class="ri-field-label">Speak For</div>
            <div class="ri-chips" data-field="speak_for">
              <button class="ri-chip ri-on" data-val="">Default</button>
              <button class="ri-chip" data-val="companion only">Companion only</button>
              <button class="ri-chip" data-val="both characters">Both</button>
            </div>
          </div>
          <div class="ri-field">
            <div class="ri-field-label">Intimacy</div>
            <div class="ri-chips" data-field="intimacy">
              <button class="ri-chip ri-on" data-val="">Default</button>
              <button class="ri-chip" data-val="platonic">Platonic</button>
              <button class="ri-chip" data-val="romantic">Romantic</button>
              <button class="ri-chip" data-val="sexual">Sexual</button>
              <button class="ri-chip" data-val="explicit">Explicit</button>
            </div>
          </div>
          <div class="ri-field">
            <div class="ri-field-label">Story Pacing</div>
            <div class="ri-chips" data-field="pacing">
              <button class="ri-chip ri-on" data-val="">Default</button>
              <button class="ri-chip" data-val="slow">Slow</button>
              <button class="ri-chip" data-val="fast">Fast</button>
            </div>
          </div>
          <div class="ri-field">
            <div class="ri-field-label">Narration vs Dialogue</div>
            <div class="ri-chips" data-field="narration">
              <button class="ri-chip ri-on" data-val="">Default</button>
              <button class="ri-chip" data-val="narration-focused">Narration</button>
              <button class="ri-chip" data-val="balanced narration and dialogue">Balanced</button>
              <button class="ri-chip" data-val="dialogue-focused">Dialogue</button>
            </div>
          </div>
          <div class="ri-composed-preview" id="ri-composed-preview"></div>
        </div>

        <div class="ri-body" id="ri-custom-body" style="display:none;">
          <textarea class="ri-ta" id="ri-instr-ta" placeholder="Write response instructions here… injected into the next prompt."></textarea>
        </div>

        <!-- RI Preset Library (inline swap) -->
        <div class="ri-lib-view" id="ri-lib-view">
          <div class="ri-lib-header">
            <span class="ri-lib-header-title">Instruction Presets</span>
            <button class="ri-hbtn" id="ri-lib-back" title="Back">${IC.close}</button>
          </div>
          <div class="ri-lib-body">
            <div class="ri-lib-save-row">
              <input class="ri-lib-name-input" id="ri-lib-name" placeholder="Preset name…" />
              <button class="ri-lib-save-btn" id="ri-lib-save">${IC.save} Save current</button>
            </div>
            <div class="ri-lib-list" id="ri-lib-list"></div>
          </div>
        </div>
      </div>

      <!-- TAB 2: WFM -->
      <div id="ri-tab-wfm" style="display:none;">
        <div class="ri-header">
          <span class="ri-header-icon">${IC.wfm}</span>
          <span class="ri-header-title">Write For Me</span>
          <div class="ri-wfm-tabs">
            <button class="ri-wfm-tab ri-on" id="ri-wfm-tab-gen">${IC.wfm} Generate</button>
            <button class="ri-wfm-tab" id="ri-wfm-tab-saved">${IC.list} Saved</button>
          </div>
          <button class="ri-hbtn" id="ri-wfm-lib-btn" title="Direction Presets">${IC.folder}</button>
          <button class="ri-hbtn" id="ri-close-wfm" title="Close">${IC.close}</button>
        </div>

        <!-- WFM Direction Library (inline swap) -->
        <div class="ri-lib-view" id="ri-wfm-lib-view">
          <div class="ri-lib-header">
            <span class="ri-lib-header-title">Direction Presets</span>
            <button class="ri-hbtn" id="ri-wfm-lib-back" title="Back">${IC.close}</button>
          </div>
          <div class="ri-lib-body">
            <div class="ri-lib-save-row">
              <input class="ri-lib-name-input" id="ri-wfm-lib-name" placeholder="Preset name…" />
              <button class="ri-lib-save-btn" id="ri-wfm-lib-save">${IC.save} Save current</button>
            </div>
            <div class="ri-lib-list" id="ri-wfm-lib-list"></div>
          </div>
        </div>

        <div class="ri-body" id="ri-wfm-gen">
          <div>
            <div class="ri-label">Your message</div>
            <div class="ri-preview" id="ri-preview">(empty)</div>
          </div>
          <div class="ri-draft-nav">
            <button class="ri-nav-btn" id="ri-prev" title="Previous draft">${IC.prev}</button>
            <span id="ri-draft-label">No drafts</span>
            <button class="ri-nav-btn" id="ri-next" title="Next draft">${IC.next}</button>
            <button class="ri-save-draft-btn" id="ri-save-draft" title="Save this draft" disabled>${IC.save}</button>
          </div>
          <div class="ri-draft-box" id="ri-draft-box"></div>
          <div>
            <div class="ri-label">Instruction</div>
            <textarea class="ri-ta" id="ri-dir-ta" placeholder="e.g. 'act shy', 'confess feelings', 'change the subject'…"></textarea>
          </div>
          <div class="ri-wfm-option">
            <label class="ri-toggle" title="Include active preset prompt blocks in generation context">
              <input type="checkbox" id="ri-wfm-preset-chk">
              <span class="ri-toggle-track"></span>
              <span class="ri-toggle-thumb"></span>
            </label>
            <span class="ri-wfm-option-label">Include preset context</span>
          </div>
          <div id="ri-preset-picker">
            <select id="ri-preset-select">
              <option value="">— select a preset —</option>
            </select>
          </div>
          <div class="ri-wfm-actions">
            <button class="ri-btn ri-btn-gen" id="ri-gen">${IC.gen} Generate</button>
            <button class="ri-btn ri-btn-use" id="ri-use" disabled>${IC.use} Use this</button>
          </div>
          <div class="ri-status" id="ri-status"></div>
        </div>

        <div class="ri-body" id="ri-wfm-saved" style="display:none;">
          <div class="ri-saved-list" id="ri-saved-list"></div>
        </div>
      </div>

      <!-- TAB 3: PROMPT TEMPLATES -->
      <div id="ri-tab-tpl" style="display:none;">
        <div class="ri-header">
          <span class="ri-header-icon">${IC.gear}</span>
          <span class="ri-header-title">Prompt Templates</span>
          <button class="ri-hbtn" id="ri-reset-tpl-btn" title="Reset to Defaults">${IC.trash}</button>
          <button class="ri-hbtn" id="ri-close-tpl" title="Close">${IC.close}</button>
        </div>
        <div class="ri-body">
          <div class="ri-help-text">
            Custom variables: <code>{{user}}</code>, <code>{{char}}</code>, <code>{{context}}</code>, <code>{{draft}}</code>, <code>{{direction}}</code>
          </div>
          <div class="ri-field">
            <div class="ri-field-label">System Directive</div>
            <textarea class="ri-ta" id="ri-tpl-system" style="min-height:90px;"></textarea>
          </div>
          <div class="ri-field">
            <div class="ri-field-label">Rewrite / Enhance Template (When Draft Exists)</div>
            <textarea class="ri-ta" id="ri-tpl-rewrite" style="min-height:75px;"></textarea>
          </div>
          <div class="ri-field">
            <div class="ri-field-label">Scratch Generation Template (When Draft is Blank)</div>
            <textarea class="ri-ta" id="ri-tpl-scratch" style="min-height:75px;"></textarea>
          </div>
        </div>
      </div>
    `;

    // RI wiring
    const ta  = el.querySelector('#ri-instr-ta');
    const chk = el.querySelector('#ri-chk');
    ta.oninput   = () => { state.instruction = ta.value; push(); };
    chk.onchange = () => { state.enabled = chk.checked; refreshRiBtn(); push(); };
    el.querySelector('#ri-clear-btn').onclick = () => {
      if (state.ri_mode === 'custom') {
        state.instruction = '';
        if (ta) ta.value = '';
      } else {
        state.simple = { own: '', length: '', style: '', speak_for: '', intimacy: '', pacing: '', narration: '' };
        applySimpleToUI();
      }
      state.enabled = false;
      if (chk) chk.checked = false;
      refreshRiBtn(); push();
    };

    el.querySelector('#ri-mode-simple').onclick = () => setRiMode('simple');
    el.querySelector('#ri-mode-custom').onclick  = () => setRiMode('custom');

    el.querySelectorAll('.ri-chips').forEach(group => {
      group.querySelectorAll('.ri-chip').forEach(chip => {
        chip.onclick = () => {
          group.querySelectorAll('.ri-chip').forEach(c => c.classList.remove('ri-on'));
          chip.classList.add('ri-on');
          state.simple[group.dataset.field] = chip.dataset.val;
          updateComposedPreview();
          push();
        };
      });
    });

    el.querySelector('#ri-simple-own').oninput = (e) => {
      state.simple.own = e.target.value;
      updateComposedPreview();
      push();
    };

    el.querySelector('#ri-close-ri').onclick  = closePanel;
    el.querySelector('#ri-close-wfm').onclick = closePanel;
    el.querySelector('#ri-close-tpl').onclick = closePanel;

    // RI Library wiring
    function showRiLib() {
      const simpleBody = el.querySelector('#ri-simple-body');
      const customBody = el.querySelector('#ri-custom-body');
      const modeTabs   = el.querySelector('#ri-mode-tabs');
      const libView    = el.querySelector('#ri-lib-view');
      // show lib first, then hide bodies — prevents panel from collapsing mid-transition
      if (libView)    libView.classList.add('ri-visible');
      if (simpleBody) simpleBody.style.display = 'none';
      if (customBody) customBody.style.display = 'none';
      if (modeTabs)   modeTabs.style.display   = 'none';
      renderRiLib();
    }
    function hideRiLib() {
      const libView = el.querySelector('#ri-lib-view');
      if (libView) libView.classList.remove('ri-visible');
      // restore mode tabs and correct body
      const modeTabs = el.querySelector('#ri-mode-tabs');
      if (modeTabs) modeTabs.style.display = '';
      setRiMode(state.ri_mode, true);
      // make sure panel stays open
      document.getElementById('ri-panel')?.classList.add('ri-open');
    }
    function renderRiLib() {
      const list = el.querySelector('#ri-lib-list');
      if (!list) return;
      list.innerHTML = '';
      const presets = state.ri_presets ?? [];
      if (!presets.length) {
        list.innerHTML = `<div class="ri-lib-empty">No saved presets yet.<br>Set up your instructions and hit Save.</div>`;
        return;
      }
      presets.forEach((p, i) => {
        const item = document.createElement('div');
        item.className = 'ri-lib-item';
        item.innerHTML = `
          <div class="ri-lib-item-name">${esc(p.name)}</div>
          <div class="ri-lib-item-preview">${esc(p.text)}</div>
          <div class="ri-lib-item-actions">
            <button class="ri-lib-act ri-lib-load">Load</button>
            <button class="ri-lib-act ri-lib-rename">Rename</button>
            <button class="ri-lib-act ri-lib-del">${IC.trash}</button>
          </div>`;
        item.querySelector('.ri-lib-load').onclick = () => {
          state.instruction = p.text;
          state.ri_mode = 'custom';
          const ta = document.getElementById('ri-instr-ta');
          if (ta) ta.value = p.text;
          hideRiLib();
          setRiMode('custom');
          push();
        };
        item.querySelector('.ri-lib-rename').onclick = () => {
          const newName = prompt('Rename preset:', p.name);
          if (newName?.trim()) {
            state.ri_presets[i].name = newName.trim();
            push(); renderRiLib();
          }
        };
        item.querySelector('.ri-lib-del').onclick = () => {
          state.ri_presets.splice(i, 1);
          push(); renderRiLib();
        };
        list.appendChild(item);
      });
    }
    el.querySelector('#ri-preset-btn').onclick = showRiLib;
    el.querySelector('#ri-lib-back').onclick = hideRiLib;
    el.querySelector('#ri-lib-save').onclick = () => {
      const text = getActiveInstruction();
      if (!text.trim()) return;
      const nameInput = el.querySelector('#ri-lib-name');
      const name = nameInput?.value?.trim() || `Preset ${(state.ri_presets?.length ?? 0) + 1}`;
      if (!state.ri_presets) state.ri_presets = [];
      state.ri_presets.push({ name, text });
      if (nameInput) nameInput.value = '';
      push(); renderRiLib();
    };

    // WFM Direction Library wiring
    function showWfmLib() {
      el.querySelector('#ri-wfm-gen').style.display  = 'none';
      el.querySelector('#ri-wfm-saved').style.display = 'none';
      el.querySelector('#ri-wfm-lib-view').classList.add('ri-visible');
      renderWfmLib();
    }
    function hideWfmLib() {
      el.querySelector('#ri-wfm-lib-view').classList.remove('ri-visible');
      setWfmView(wfmView);
    }
    function renderWfmLib() {
      const list = el.querySelector('#ri-wfm-lib-list');
      if (!list) return;
      list.innerHTML = '';
      const presets = state.wfm_dir_presets ?? [];
      if (!presets.length) {
        list.innerHTML = `<div class="ri-lib-empty">No saved presets yet.<br>Write a direction and hit Save.</div>`;
        return;
      }
      presets.forEach((p, i) => {
        const item = document.createElement('div');
        item.className = 'ri-lib-item';
        item.innerHTML = `
          <div class="ri-lib-item-name">${esc(p.name)}</div>
          <div class="ri-lib-item-preview">${esc(p.text)}</div>
          <div class="ri-lib-item-actions">
            <button class="ri-lib-act ri-lib-load">Load</button>
            <button class="ri-lib-act ri-lib-rename">Rename</button>
            <button class="ri-lib-act ri-lib-del">${IC.trash}</button>
          </div>`;
        item.querySelector('.ri-lib-load').onclick = () => {
          state.wfm_direction = p.text;
          const ta = document.getElementById('ri-dir-ta');
          if (ta) ta.value = p.text;
          hideWfmLib();
        };
        item.querySelector('.ri-lib-rename').onclick = () => {
          const newName = prompt('Rename preset:', p.name);
          if (newName?.trim()) {
            state.wfm_dir_presets[i].name = newName.trim();
            push(); renderWfmLib();
          }
        };
        item.querySelector('.ri-lib-del').onclick = () => {
          state.wfm_dir_presets.splice(i, 1);
          push(); renderWfmLib();
        };
        list.appendChild(item);
      });
    }
    el.querySelector('#ri-wfm-lib-btn').onclick = showWfmLib;
    el.querySelector('#ri-wfm-lib-back').onclick = hideWfmLib;
    el.querySelector('#ri-wfm-lib-save').onclick = () => {
      const text = (document.getElementById('ri-dir-ta')?.value ?? '').trim();
      if (!text) return;
      const nameInput = el.querySelector('#ri-wfm-lib-name');
      const name = nameInput?.value?.trim() || `Preset ${(state.wfm_dir_presets?.length ?? 0) + 1}`;
      if (!state.wfm_dir_presets) state.wfm_dir_presets = [];
      state.wfm_dir_presets.push({ name, text });
      if (nameInput) nameInput.value = '';
      push(); renderWfmLib();
    };

    // WFM Wiring
    el.querySelector('#ri-wfm-tab-gen').onclick   = () => setWfmView('generate');
    el.querySelector('#ri-wfm-tab-saved').onclick = () => setWfmView('saved');
    el.querySelector('#ri-dir-ta').oninput = (e) => { state.wfm_direction = e.target.value; };
    el.querySelector('#ri-wfm-preset-chk').onchange = (e) => {
      state.wfm_include_preset = e.target.checked;
      const picker = document.getElementById('ri-preset-picker');
      if (picker) picker.style.display = e.target.checked ? 'block' : 'none';
      push();
    };
    el.querySelector('#ri-preset-select').onchange = (e) => {
      state.wfm_preset_id = e.target.value || null;
      push();
    };
    el.querySelector('#ri-gen').onclick     = generate;
    el.querySelector('#ri-use').onclick     = () => { if (drafts[draftIdx]) insertDraft(drafts[draftIdx]); };
    el.querySelector('#ri-prev').onclick    = () => { if (draftIdx > 0) { draftIdx--; renderDraftNav(); } };
    el.querySelector('#ri-next').onclick    = () => { if (draftIdx < drafts.length - 1) { draftIdx++; renderDraftNav(); } };
    el.querySelector('#ri-save-draft').onclick = () => {
      const text = drafts[draftIdx];
      if (!text) return;
      if (!state.saved_drafts.includes(text)) {
        state.saved_drafts = [text, ...state.saved_drafts];
        push();
      }
      const btn = el.querySelector('#ri-save-draft');
      btn.innerHTML = IC.saved;
      setTimeout(() => { btn.innerHTML = IC.save; }, 1200);
    };

    // Template Wiring
    const tplSys = el.querySelector('#ri-tpl-system');
    const tplRew = el.querySelector('#ri-tpl-rewrite');
    const tplScr = el.querySelector('#ri-tpl-scratch');

    tplSys.oninput = () => { state.templates.system_prompt = tplSys.value; push(); };
    tplRew.oninput = () => { state.templates.rewrite_prompt = tplRew.value; push(); };
    tplScr.oninput = () => { state.templates.scratch_prompt = tplScr.value; push(); };

    el.querySelector('#ri-reset-tpl-btn').onclick = () => {
      state.templates = { ...DEFAULT_TEMPLATES };
      tplSys.value = state.templates.system_prompt;
      tplRew.value = state.templates.rewrite_prompt;
      tplScr.value = state.templates.scratch_prompt;
      push();
    };

    return el;
  }

  function setWfmView(view) {
    wfmView = view;
    document.getElementById('ri-wfm-gen').style.display   = view === 'generate' ? 'flex' : 'none';
    document.getElementById('ri-wfm-saved').style.display = view === 'saved'    ? 'flex' : 'none';
    document.getElementById('ri-wfm-tab-gen').classList.toggle('ri-on',   view === 'generate');
    document.getElementById('ri-wfm-tab-saved').classList.toggle('ri-on', view === 'saved');
    if (view === 'saved') renderSavedList();
  }

  function renderSavedList() {
    const container = document.getElementById('ri-saved-list');
    if (!container) return;
    container.innerHTML = '';
    if (!state.saved_drafts.length) {
      container.innerHTML = `<div class="ri-empty">No saved drafts yet.<br>Generate one and hit ${IC.save} to save it.</div>`;
      return;
    }
    state.saved_drafts.forEach((text, i) => {
      const wrap = document.createElement('div');
      wrap.innerHTML = `
        <div class="ri-saved-item">${esc(text)}</div>
        <div class="ri-saved-item-actions">
          <button class="ri-saved-act">${IC.use} Use</button>
          <button class="ri-saved-act ri-saved-del">${IC.trash} Delete</button>
        </div>
      `;
      wrap.querySelector('.ri-saved-act:not(.ri-saved-del)').onclick = () => insertDraft(text);
      wrap.querySelector('.ri-saved-del').onclick = () => {
        state.saved_drafts.splice(i, 1);
        push();
        renderSavedList();
      };
      container.appendChild(wrap);
    });
  }

  function renderDraftNav() {
    const label    = document.getElementById('ri-draft-label');
    const useBtn   = document.getElementById('ri-use');
    const prevBtn  = document.getElementById('ri-prev');
    const nextBtn  = document.getElementById('ri-next');
    const saveBtn  = document.getElementById('ri-save-draft');
    const draftBox = document.getElementById('ri-draft-box');
    if (!label) return;

    if (!drafts.length) {
      label.textContent = 'No drafts';
      [useBtn, prevBtn, nextBtn, saveBtn].forEach(b => b && (b.disabled = true));
      if (draftBox) draftBox.classList.remove('ri-visible');
      return;
    }
    label.textContent = `Draft ${draftIdx + 1} / ${drafts.length}`;
    if (useBtn)  useBtn.disabled  = false;
    if (saveBtn) saveBtn.disabled = false;
    if (prevBtn) prevBtn.disabled = draftIdx === 0;
    if (nextBtn) nextBtn.disabled = draftIdx === drafts.length - 1;
    if (draftBox) {
      draftBox.textContent = drafts[draftIdx];
      draftBox.classList.add('ri-visible');
    }
  }

  // ─── Generate ────────────────────────────────────────────────────────────────
  function generate() {
    if (generating) return;
    generating = true;
    const genBtn = document.getElementById('ri-gen');
    const status = document.getElementById('ri-status');
    if (genBtn) { genBtn.disabled = true; genBtn.innerHTML = '…'; }
    if (status) status.textContent = 'Generating…';

    const ta = getComposerInput();
    const currentInput = ta?.value?.trim() || '';

    const charHeader = document.querySelector('[class*="characterName"], [class*="_title_"], header h1, header h2, [data-component="CharacterTitle"]');
    const charName = charHeader?.innerText?.trim() || 'the companion';

    const personaHeader = document.querySelector('[class*="personaName"], [class*="_persona_"], [data-component="PersonaSelector"], [aria-label*="persona" i]');
    const personaName = personaHeader?.innerText?.trim() || 'User';

    const proseNodes = document.querySelectorAll('[class*="prose"], [class*="markdown"], [class*="messageContent"], [class*="bubble"]');
    const snippets = [];
    Array.from(proseNodes).slice(-4).forEach(node => {
      const text = node.innerText?.trim();
      if (text && text.length > 5 && !text.includes('Response Instructions')) {
        snippets.push(text.slice(0, 500));
      }
    });

    ctx.sendToBackend({
      type: 'ri:generate',
      direction: state.wfm_direction?.trim() || '',
      userInput: currentInput,
      charName: charName,
      personaName: personaName,
      contextSnippet: snippets.join('\n\n---\n\n')
    });
  }

  function insertDraft(text) {
    const ta = getComposerInput();
    if (ta) {
      const nativeSetter = Object.getOwnPropertyDescriptor(window.HTMLTextAreaElement.prototype, 'value')?.set;
      if (nativeSetter) {
        nativeSetter.call(ta, text);
      } else {
        ta.value = text;
      }
      ta.dispatchEvent(new Event('input', { bubbles: true }));
      ta.dispatchEvent(new Event('change', { bubbles: true }));
      ta.focus();
    }
    closePanel();
  }

  function updatePreview() {
    const ta = getComposerInput();
    const preview = document.getElementById('ri-preview');
    if (preview) {
      preview.textContent = ta?.value?.trim() || '(empty)';
    }
  }

  function togglePanel(tab) {
    if (panelOpen && activeTab === tab) { closePanel(); return; }
    activeTab = tab;
    panelOpen = true;
    document.getElementById('ri-panel')?.classList.add('ri-open');
    document.getElementById('ri-tab-ri').style.display  = tab === 'ri'  ? 'block' : 'none';
    document.getElementById('ri-tab-wfm').style.display = tab === 'wfm' ? 'block' : 'none';
    document.getElementById('ri-tab-tpl').style.display = tab === 'tpl' ? 'block' : 'none';
    if (tab === 'wfm') { updatePreview(); setWfmView(wfmView); }
    refreshBtns();
  }

  function closePanel() {
    panelOpen = false;
    document.getElementById('ri-panel')?.classList.remove('ri-open');
    refreshBtns();
  }

  function refreshRiBtn() {
    const btn = document.getElementById('ri-btn-ri');
    if (!btn) return;
    btn.classList.toggle('ri-on',      panelOpen && activeTab === 'ri');
    btn.classList.toggle('ri-enabled', state.enabled);
  }
  function refreshBtns() {
    refreshRiBtn();
    document.getElementById('ri-btn-wfm')?.classList.toggle('ri-on', panelOpen && activeTab === 'wfm');
    document.getElementById('ri-btn-tpl')?.classList.toggle('ri-on', panelOpen && activeTab === 'tpl');
  }

  function applyStateToUI() {
    const ta  = document.getElementById('ri-instr-ta');
    const chk = document.getElementById('ri-chk');
    const dir = document.getElementById('ri-dir-ta');
    const tplSys = document.getElementById('ri-tpl-system');
    const tplRew = document.getElementById('ri-tpl-rewrite');
    const tplScr = document.getElementById('ri-tpl-scratch');

    const presetChk    = document.getElementById('ri-wfm-preset-chk');
    const presetSelect = document.getElementById('ri-preset-select');
    const presetPicker = document.getElementById('ri-preset-picker');

    if (ta)        ta.value          = state.instruction;
    if (chk)       chk.checked       = state.enabled;
    if (dir)       dir.value         = state.wfm_direction;
    if (presetChk) presetChk.checked = state.wfm_include_preset ?? false;

    if (presetPicker) presetPicker.style.display = (state.wfm_include_preset) ? 'block' : 'none';

    if (presetSelect && state.preset_list?.length) {
      const current = presetSelect.value;
      presetSelect.innerHTML = '<option value="">— select a preset —</option>';
      for (const p of state.preset_list) {
        const opt = document.createElement('option');
        opt.value = p.id;
        opt.textContent = p.name;
        presetSelect.appendChild(opt);
      }
      // restore saved selection, fallback to first preset if none saved
      presetSelect.value = state.wfm_preset_id || current || '';
      if (!presetSelect.value && state.preset_list.length) {
        presetSelect.value = state.preset_list[0].id;
        state.wfm_preset_id = state.preset_list[0].id;
      }
    }

    const t = state.templates ?? DEFAULT_TEMPLATES;
    if (tplSys) tplSys.value = t.system_prompt ?? DEFAULT_TEMPLATES.system_prompt;
    if (tplRew) tplRew.value = t.rewrite_prompt ?? DEFAULT_TEMPLATES.rewrite_prompt;
    if (tplScr) tplScr.value = t.scratch_prompt ?? DEFAULT_TEMPLATES.scratch_prompt;

    setRiMode(state.ri_mode ?? 'simple', true);
    applySimpleToUI();
    refreshRiBtn();
  }

  function applySimpleToUI() {
    const s = state.simple ?? {};
    const own = document.getElementById('ri-simple-own');
    if (own) own.value = s.own ?? '';
    document.querySelectorAll('.ri-chips').forEach(group => {
      const val = s[group.dataset.field] ?? '';
      group.querySelectorAll('.ri-chip').forEach(chip => {
        chip.classList.toggle('ri-on', chip.dataset.val === val);
      });
    });
    updateComposedPreview();
  }

  function setRiMode(mode, silent) {
    state.ri_mode = mode;
    document.getElementById('ri-simple-body').style.display = mode === 'simple' ? 'flex' : 'none';
    document.getElementById('ri-custom-body').style.display = mode === 'custom' ? 'flex' : 'none';
    document.getElementById('ri-mode-simple')?.classList.toggle('ri-on', mode === 'simple');
    document.getElementById('ri-mode-custom')?.classList.toggle('ri-on', mode === 'custom');
    if (!silent) push();
  }

  const SIMPLE_MAP = {
    length: {
      short:  'Keep your response brief and concise.',
      medium: 'Write a moderate length response.',
      long:   'Write a long, detailed response.',
      essay:  'Write a lengthy, essay-style response with thorough detail.',
      ramble: 'Write a lengthy, rambling response — don\'t cut yourself short.',
    },
    style: {
      'first person':        'Narrate in first person.',
      'second person':       'Narrate in second person, addressing the user as "you".',
      'third person':        'Narrate in third person.',
      'text messaging style':'Write in a casual text messaging style — short messages, no prose.',
    },
    speak_for: {
      'companion only':   'Only write dialogue and actions for your character. Do not write for the user.',
      'both characters':  'Write dialogue and actions for both your character and the user.',
    },
    intimacy: {
      platonic:  'Keep the tone platonic. Avoid romantic or sexual content.',
      romantic:  'Keep the tone romantic and emotionally intimate.',
      sexual:    'Sexual content is permitted.',
      explicit:  'Explicit sexual content is permitted. Do not fade to black.',
    },
    pacing: {
      slow: 'Use a slow pace — linger on details, emotions, and atmosphere.',
      fast: 'Use a fast pace — keep things moving, minimize dwelling.',
    },
    narration: {
      'narration-focused':                  'Focus on narration and description over dialogue.',
      'balanced narration and dialogue':    'Balance narration and dialogue equally.',
      'dialogue-focused':                   'Focus on dialogue over narration and description.',
    },
  };

  function composeSimple() {
    const s = state.simple ?? {};
    const parts = [];
    for (const [field, map] of Object.entries(SIMPLE_MAP)) {
      const val = s[field];
      if (val && map[val]) parts.push(map[val]);
    }
    if (s.own?.trim()) parts.push(s.own.trim());
    return parts.join(' ');
  }

  function updateComposedPreview() {
    const el = document.getElementById('ri-composed-preview');
    if (!el) return;
    const composed = composeSimple();
    el.textContent = composed || 'No instructions set — all fields are default.';
  }

  function getActiveInstruction() {
    if ((state.ri_mode ?? 'simple') === 'simple') return composeSimple();
    return state.instruction;
  }

  function push() {
    ctx.sendToBackend({ type: 'ri:update', ...state, _active_instruction: getActiveInstruction() });
  }

  const unsubMsg = ctx.onBackendMessage((payload) => {
    if (payload.type === 'ri:state') {
      state = { saved_drafts: [], templates: { ...DEFAULT_TEMPLATES }, wfm_include_preset: false, wfm_preset_id: null, preset_list: [], ri_presets: [], wfm_dir_presets: [], ...state, ...payload.state };
      applyStateToUI();
      ctx.sendToBackend({ type: 'ri:update', ...state });
    }
    if (payload.type === 'ri:draft') {
      generating = false;
      const genBtn = document.getElementById('ri-gen');
      const status = document.getElementById('ri-status');
      if (genBtn) { genBtn.disabled = false; genBtn.innerHTML = `${IC.gen} Generate`; }
      if (payload.error) { if (status) status.textContent = `Error: ${payload.error}`; return; }
      drafts.push(payload.text);
      draftIdx = drafts.length - 1;
      if (status) status.textContent = '';
      renderDraftNav();
    }
  });

  function attachComposerListener() {
    const composer = getComposerInput();
    if (composer && !composer._ri_listening) {
      composer._ri_listening = true;
      composer.addEventListener('input', () => {
        if (panelOpen && activeTab === 'wfm') {
          updatePreview();
        }
      });
    }
  }

  function mount() {
    if (document.getElementById('ri-toolbar')) return;
    const slot      = document.querySelector('[data-spindle-mount="chat_composer_above"]');
    if (!slot) return;
    const inputArea = slot.closest('[data-component="InputArea"]');
    if (!inputArea) return;
    const inputRow  = inputArea.querySelector('[class*="_inputRow_"]');
    if (!inputRow) return;

    const toolbar = buildToolbar();
    const panel   = buildPanel();
    inputArea.insertBefore(panel, inputRow);
    inputArea.insertBefore(toolbar, inputRow);

    attachComposerListener();
    ctx.sendToBackend({ type: 'ri:load' });
  }

  const obs = new MutationObserver(() => { 
    if (!document.getElementById('ri-toolbar')) mount(); 
    attachComposerListener();
  });
  obs.observe(document.body, { childList: true, subtree: true });
  mount();

  return () => {
    obs.disconnect(); unsubMsg(); removeStyle();
    document.getElementById('ri-toolbar')?.remove();
    document.getElementById('ri-panel')?.remove();
  };
}

function esc(s = '') { return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;'); }
