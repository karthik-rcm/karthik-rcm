# docs/

Consolidated home for plans, drafts, and decision records. The repo's *public-facing summary* artifacts (`README.md`, `STUDY_LOG.md`) live at root; everything else that describes intent, work-in-progress, or rationale lives here.

## Folder map

| Folder | Purpose | Examples |
|---|---|---|
| `plans/` | The master roadmap plus any sub-plans (week sessions, revision passes, exam-prep plans). | `001-roadmap.md`, `002-week1-ar-triage-session.md`, `003-aif-c01-revision.md` |
| `drafts/` | Work-in-progress drafts that aren't yet ready for their final home. Brain-dump scratch files, narrative iterations, post drafts before they migrate to `~/Application/gravitas-marketing/`. | `ar-triage-raw-notes.md`, `aif-c01-summary-draft.md` |
| `decisions/` | Decision records: a choice we made, the alternatives considered, the rationale. So we don't re-litigate three weeks later. | `001-repo-role-public-evidence-trail.md`, `002-defer-chp-folder-until-week-6.md` |

**Top-level files in `docs/`:**

- `sources.md` — authoritative source list. Every URL `/aiprof` is allowed to cite from. Off-list URLs require approval before fetching. The skill enforces this.

## Naming conventions

- **Plans:** `NNN-<slug>.md` — numbered sequentially starting at `001-`, lowercase kebab-case slug. The master roadmap is `001-roadmap.md`. Sub-plans pick up the next number when written. The number never changes once assigned; a superseded plan stays at its number and its status flips to `Superseded`.
- **Drafts:** descriptive slug, no number prefix (these get renamed or moved when they graduate). Add `-vN` if you iterate.
- **Decisions:** `NNN-<slug>.md` — same numbering scheme as plans (their own sequence, starting at `001-`). If a decision gets reversed, write a new ADR that supersedes the old one; don't edit history.

## File shape

Every file in `docs/` starts with this header:

```markdown
# <Title>

**Status:** Draft | Active | Done | Superseded
**Owner:** Karthik
**Date:** YYYY-MM-DD
**Type:** plan | draft | decision
**Supersedes:** (optional — link to the file this replaces)
**Superseded by:** (optional — link to the file that replaced this)

---

<content>
```

Don't skip the header — it's how a quick `ls` + `head` tells us what's live vs. stale.

## When something graduates out of `docs/`

- A `drafts/ar-triage-raw-notes.md` that has been sanitized → its facts migrate into `case-study-ar-triage/narrative.md`. The draft stays here as the historical record (status flips to `Done`).
- A `plans/002-week1-ar-triage-session.md` whose work is finished → status flips to `Done`. Don't delete it; the plan is the record of what was intended vs. what shipped.
- A LinkedIn post draft → moves to `~/Application/gravitas-marketing/` when ready to publish, not before.

## What does NOT belong here

- Study artifacts (notes, flashcards, exam logs, labs) — those live under `aif-c01/`, future `chp/`, future `mla-c01/`.
- Final case-study narrative — that's `case-study-ar-triage/narrative.md`, not a draft.
- Marketing copy or LinkedIn posts — those live in `~/Application/gravitas-marketing/`.
- Anything ephemeral / scratch that won't survive the week — keep it in `/tmp/` or your scratch dir, not here.

The rule of thumb: if a future-you (or a reader of this public repo) would benefit from seeing the file three months from now, it belongs here. If it's noise that's only useful for the next hour, it doesn't.
