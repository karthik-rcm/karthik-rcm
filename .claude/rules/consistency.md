# Match the Existing Pattern

This repo is the public evidence trail for a certification + case-study journey. Its whole value is that someone (recruiter, client, your future self) can skim it and trust what they see. If `aif-c01/notes/d1.md` is terse Markdown bullets and `aif-c01/notes/d3.md` is a giant prose essay, the repo looks half-baked even if the content is solid. Consistency is what makes the evidence trail readable — and therefore credible.

**Scope: every recurring artifact in this repo.** Notes, flashcards, practice questions, exam-log rows, weekly STUDY_LOG entries, case-study sections, lab write-ups, docs in `docs/`. If something appears more than once, it has a convention, and new instances match it.

## The conventions (current state)

### `STUDY_LOG.md` entries

```
## Week N — YYYY-MM-DD (theme)

**Hours:** X.X
**What I covered:**
- bullet
- bullet

**Confidence snapshot:**
| Domain | Score |
|--------|-------|
| ... | ... |

**Blockers / risks:**

**Next week target:**
```

Week 0 is the canonical example. Match it exactly — don't reorder sections, don't rename headers, don't add new top-level sections per week.

### `aif-c01/exam-log.md` rows

One row per practice attempt, in the existing table. Columns: `#, Date, Source, Score, D1, D2, D3, D4, D5, Time, Notes`. Domain columns are per-domain % (or raw correct/total). "Weak areas" list updated after each attempt.

### Notes files (`aif-c01/notes/*.md`)

When the first notes file gets written, **its shape becomes the convention.** Posture for v1:

- **Markdown.** Headings for sub-domains, bullets for facts, code blocks for AWS CLI snippets or policy JSON.
- **Plain language, not lecture notes.** "Bedrock charges per input + output token, prices vary by model" — not a transcribed slide.
- **One file per exam-guide sub-domain**, named after the sub-domain (e.g. `d3-1-foundation-model-selection.md`), not by date or "session-1.md".
- **End with a "Gotchas" section** — the 3-5 things AWS phrases in confusing ways, the trap answers in practice exams, the HIPAA-relevant caveats.

When notes file #2 gets written, match #1. If a different shape genuinely fits better, **say so before writing** and decide whether to retro-migrate #1 or document the divergence.

### Flashcards (`aif-c01/flashcards/*.md`)

V1 sets the convention. Proposed shape (subject to first-flashcard review):

```
Q: <question>
A: <answer>
Domain: D<n>
Source: <exam guide section, video timestamp, practice exam #>
```

Plain text Markdown, one Q/A per block, separated by `---`. Anki-importable later — keep the format mechanically parseable, no decorative formatting.

### Practice questions (`<cert>/practice-questions/*.md`)

The `/quiz` skill writes these. Naming: `YYYY-MM-DD-<topic-or-domain>.md`. File shape is codified in [.claude/skills/quiz/SKILL.md](../skills/quiz/SKILL.md) — top-level metadata (cert, scope, score, time, pass/fail), per-sub-domain scoring table, weak-areas list, then each question with stem → 4 options → Karthik's answer + correct answer + explanation + notes-file source link.

Match the official exam format of the relevant cert (AIF-C01 / MLA-C01: single-answer MCQ unless multi-answer is required; CHP: occasional "all of the above" / "none of the above"). First file in a `<cert>/practice-questions/` folder sets the in-folder convention; subsequent files match.

### Case-study language (`case-study-ar-triage/narrative.md`)

- **No marketing language.** No "revolutionary," "cutting-edge," "transformed." Plain factual statements.
- **Numbers over adjectives.** "AR 90+ dropped 38%" beats "AR significantly improved."
- **HIPAA-clean** (see CLAUDE.md sanitization rules).
- **Past tense for what happened, present tense for what the system does.** "We deployed X. The agent ingests 835s and ranks claims by recoverability."

### `docs/` files

See the `docs/README.md` for the folder's purpose and naming conventions. In short: plans, drafts, and decisions live in `docs/`, in dated Markdown files with a clear front-of-document header (title, status, owner, date). Match the shape of the first doc that gets written.

### Commit messages

Already specified in CLAUDE.md: subject ≤ 72 chars, imperative, body explains why, Co-Authored-By trailer. Don't re-litigate per commit.

## Rules

- **Discover the pattern before adding the second instance.** Before writing the second notes file, the second flashcard set, the second weekly log entry, read the first one and match its shape. If you can't find an existing pattern (greenfield concern), say so explicitly before inventing.
- **Match exactly. No "small improvements" on the side.** If `STUDY_LOG.md` Week 0 uses `**Hours:** X.X`, Week 1 uses `**Hours:** X.X` — not `**Hours logged:** X.X` or `**Time:** Xh`. Diverging "to be clearer" creates two ways to do the same thing.
- **If the existing pattern is genuinely wrong, surface it.** Don't sneak a migration into the current session. Say "the v1 shape of flashcards is making them hard to import — propose we migrate all of them in a single pass next session" and let Karthik decide.
- **One pattern per artifact type.** One way to log a week. One flashcard format. One notes-file shape. No "this one's special."
- **Greenfield = simplest pragmatic shape.** When you write v1 of any artifact in this repo, the v1 *becomes* the convention. Don't over-engineer — no YAML frontmatter, no taxonomies, no folders-of-folders. The first notes file is the most-skimmable Markdown you can make. The first flashcard file is the most Anki-friendly plain text. Future files copy that.

## When the repo is already inconsistent

If you find two competing patterns (some flashcards in shape A, some in shape B), **stop and surface it.** Name the files and the rough counts. Karthik decides which is canonical; you don't silently pick. The inconsistency itself is a finding worth fixing in its own session, not papering over.

## What this rule does NOT cover

- Content quality (a well-formatted but factually wrong note is still wrong — see `thinking.md`).
- HIPAA / sanitization (covered in CLAUDE.md).
- One-off scratch files (e.g. `raw-notes.md` during a brain dump). Scratch files are exempt; only files that survive into the committed evidence trail get the consistency check.
