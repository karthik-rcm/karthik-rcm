---
name: visual-kt
description: Visual Knowledge Transfer — turns a cert domain's own-words notes into one self-contained, tabbed HTML study map that you can open in a browser and learn the whole domain from at once. Two layers — Layer 1 mirrors the notes (vocabulary, tables, recall scaffolding); Layer 2 is the professor's expansion (why-it-works mental models, examiner trap patterns, one-model-collapses-five-facts, and bridges to Karthik's own ~/Application/ codebase). Deep by default. Professor content is visually flagged so the transcript-fact vs. instructional-expansion line stays honest. Scratch-by-default output; promote to the cert's visuals/ folder only on Karthik's OK. Use after notes exist for a domain and you want to see + teach it whole, not just recall it.
disable-model-invocation: false
user-invocable: true
argument-hint: "<cert> <domain-or-topic> [--shallow] [--no-bridge]"
---

# /visual-kt — Visual Knowledge Transfer

You invoke this when a domain's notes already exist and you want the **see-it-whole, teach-it-cold** artifact — one HTML page, tabbed per task statement, that you study from directly. It is the missing fourth stage of the study loop:

- `/aiprof` — gather authoritative material (input)
- `/visual-kt` — **see the whole domain at once + get taught the depth the transcript skips** (synthesis)
- `/brainstorm` — internalize through Socratic dialogue (internalization)
- `/quiz` — prove it under timed conditions (output)

Examples:
- *"`/visual-kt aif-c01 d1`"* — full Domain 1 map, deep by default
- *"`/visual-kt aif-c01 d3 --shallow`"* — transcript mirror only, skip the professor layer
- *"`/visual-kt mla-c01 d2 --no-bridge`"* — deep, but drop the codebase bridges

## Project context

!`echo "🧭 Where we are (from STUDY_LOG.md):" && grep -E "Current focus|Active lesson|Last updated" STUDY_LOG.md 2>/dev/null | head -3 || echo "  STUDY_LOG.md not found — run session-start protocol manually"; echo ""; echo "Repo: $(basename "$(git rev-parse --show-toplevel 2>/dev/null || pwd)")"; echo "Design system (show-me tokens):"; (test -f ~/.claude/skills/show-me/designsystem.html && echo "  ✓ ~/.claude/skills/show-me/designsystem.html" || echo "  ⚠️  show-me designsystem.html missing — fall back to inline tokens"); echo "Sources file:"; (test -f docs/sources.md && echo "  ✓ docs/sources.md present" || echo "  ⚠️  docs/sources.md MISSING"); echo "Notes available:"; (find aif-c01/notes chp/notes mla-c01/notes -maxdepth 2 -type f -name "*.md" 2>/dev/null | head -12) || true`

## What this skill is — and is NOT

**IS:** a teaching + recall artifact built from notes that already exist. It reads the cert's own-words `notes/*.md` for the target domain, then renders a tabbed HTML page that (a) mirrors the notes for recall and (b) adds the professor's depth the source video/transcript skipped.

**IS NOT:**
- Not `/show-me` — that renders a *plan doc* into a UI wireframe for build approval. This renders *study notes* into a learning map. Different input, different purpose.
- Not `/aiprof` — that *fetches and writes notes*. This *consumes* notes already written. If the notes don't exist yet, stop and tell Karthik to run `/aiprof` or the transcript→notes flow first.
- Not a fact-inventor. Layer 1 traces to the notes. Layer 2 is my reasoning, **explicitly flagged as such** — never dressed up as cited fact.

## Non-negotiables

1. **Notes are the prerequisite. No notes, no build.** Read the target domain's `<cert>/notes/*.md` first. If none exist for that domain, refuse and point to `/aiprof` or the transcript→notes flow. This skill never invents the Layer-1 content — it transforms existing notes.

2. **Two layers, visually distinct.**
   - **Layer 1 (from the notes):** vocabulary, tables, diagrams, the recall scaffolding. Renders as normal content (cards, tables, the nesting diagram, clickable reveals).
   - **Layer 2 (professor's expansion):** rendered in the dedicated **`🎓 Professor's note`** style block (the orange-tinted `.profnote` class). This is the honesty marking — a reviewer can always see what's transcript-fact vs. my teaching. **Never blend Layer 2 into Layer 1 unmarked.**

3. **Deep by default.** Every build includes Layer 2 unless `--shallow` is passed. Layer 2 covers only the **load-bearing** concepts (4–6 per task statement), not every term — bloating every definition with a mental model defeats the purpose.

4. **Layer 2 has a fixed shape per concept.** When you expand a concept, hit these beats (skip any that don't apply, don't pad):
   - **Why it works this way** — the mechanism under the definition.
   - **The one mental model** — the single idea that collapses several exam facts into one. State the collapse explicitly ("hold this and these 5 topics become one").
   - **The examiner's trap** — the pattern the exam engineers, *and why they set it*. Exams test boundaries, not definitions.
   - **Your bridge** (unless `--no-bridge`) — tie it to Karthik's real `~/Application/` work (RevenueSphere/RCMToolKit, PractiApp, CredixOne, Bedrock/agent infra, 835/EOB pipelines). This is his unfair advantage: he's already built most of what the exam tests. **Verify the bridge is accurate** — don't flatter. If you're not sure a system does what you'd claim, soften to the general capability or drop the bridge. A wrong bridge is worse than none.

5. **Where a Layer-2 claim is load-bearing and citable, back it from `docs/sources.md`.** The AWS `/what-is/` explainers (overfitting, transformers, LLMs, MLOps) cover most of AIF-C01 D1. A Professor's note making a strong mechanistic claim should be groundable — if it isn't in the sources, mark it as reasoning, not fact.

6. **Self-contained HTML. Zero network.** All CSS inline, no CDN, no `<link>`/`<script src>`, no network fonts (system stack or the show-me design tokens baked in). Must open on a double-click in Chrome. No analytics, no remote calls.

7. **Scratch-by-default output.** Write to `scratch/visuals/<cert>-<domain>-domain-map.html` (gitignored). **Never** write into the committed tree. Promote to `<cert>/visuals/` only on Karthik's explicit OK (public repo — same rule as every visual). After writing, best-effort open it and always print the absolute path.

8. **HIPAA still applies.** Codebase bridges name *capabilities*, never client names, PHI, or fingerprinting numbers. "Your 835 denial pipeline ranks claims by recoverability" is fine. A client name or a real dollar figure is not.

## Design system

Style the page with the **`/show-me` Gravitas tokens** for a consistent branded look — dark stage gradient, orange→pink CTA/accent, glass cards, the tabs pattern, badges, mono type. Read `~/.claude/skills/show-me/designsystem.html` and bake the `:root` token block + component looks **verbatim inline** (no import, no link — the file must be self-contained). If that file is missing, fall back to the inline token set in the reference build.

The reference implementation — the v1 that sets the convention — is `scratch/visuals/d1-domain-map.html` (AIF-C01 Domain 1). Match its structure for every new build.

## Build steps

### 1. Resolve target + read notes
- Parse `<cert>` (aif-c01 / chp / mla-c01) and `<domain-or-topic>` (e.g. `d1`, or a topic slug).
- Find the matching notes: `<cert>/notes/<domain>-*.md` (e.g. `aif-c01/notes/d1-*.md`). Read them **fully** — they are the Layer-1 source of truth.
- If none found, stop: *"No notes for `<cert> <domain>` yet — run `/aiprof` or the transcript→notes flow first. This skill teaches from notes; it doesn't create them."*

### 2. Plan the tabs
- One tab per **task statement** in the domain (1.1, 1.2, 1.3…), plus:
  - a **🗺 Overview** tab (the anchoring diagram + what each task covers), and
  - an **⚡ Exam Traps** tab (every gotcha on one screen, for the morning-of read).
- Map each notes file to its tab. Pull the Layer-1 content (terms, tables, diagrams, the Gotchas section → the traps tab).

### 3. Write Layer 2 (unless `--shallow`)
- For each task statement, pick the **4–6 load-bearing concepts** (the ones the exam leans on + the ones with a real mental-model collapse). Write a `🎓 Professor's note` for each, following the fixed shape in non-negotiable #4.
- Before committing a codebase bridge, sanity-check it against what you actually know exists in `~/Application/` (the operator-capability memory + CLAUDE.md inventory). Soften or drop uncertain bridges.

### 4. Render one self-contained HTML file
- Tabs (sticky), one panel per tab. Plain HTML/CSS/inline-JS — no framework.
- Interactive only where it aids recall: clickable concept-reveals (guess→reveal for active recall), a clickable confusion matrix, clickable pipeline stages. Don't add interactivity that's just motion.
- `🎓 Professor's note` blocks in the distinct `.profnote` style throughout Layer-2 content.
- Header: cert + domain + "built from your own-words notes · 🎓 = professor's expansion, not transcript."
- Footer: which notes files it was built from + "scratch artifact, no network calls."

### 5. Write, open, hand off
```bash
mkdir -p scratch/visuals
OUT_FILE="scratch/visuals/<cert>-<domain>-domain-map.html"
# ...write file...
( explorer.exe "$(wslpath -w "$OUT_FILE")" 2>/dev/null || open "$OUT_FILE" 2>/dev/null || xdg-open "$OUT_FILE" 2>/dev/null ) &
echo "Visual-KT: $(pwd)/$OUT_FILE"
```
- Tell Karthik concisely: what tabs, where the Professor's notes added depth, and that it's scratch — promote to `<cert>/visuals/` on his OK.
- Offer the next loop step: `/brainstorm` to internalize, `/quiz --mock-exam` to prove under time. Hold the booking gate (80%+ on timed mocks).

## When NOT to use
- Notes for the domain don't exist yet → `/aiprof` or transcript→notes first.
- The topic is pure vocabulary with nothing structural or no exam-trap depth → a notes file is enough; the HTML buys little.
- You want to render a *plan* for build approval → that's `/show-me`, not this.
