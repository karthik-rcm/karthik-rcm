# 001 — `karthik-rcm` is the public evidence trail, not a portfolio site

**Status:** Active
**Owner:** Karthik
**Date:** 2026-05-15
**Type:** decision

---

## Context

When scaffolding the repo, the question came up: should `karthik-rcm` host a portfolio page, a landing page for the AR Triage case study, or a duplicate of `gravitas-marketing/portfolio.md`?

There are three surfaces that already exist:

1. **`~/Application/Gravitas/`** — the Next.js conversion site at the Gravitas brand. This is where prospects land.
2. **`~/Application/gravitas-marketing/portfolio.md` and `profile.md`** — the source-of-truth bio + portfolio, authored once.
3. **`karthik-rcm`** — the public GitHub profile repo, currently holding `README.md`, the cert plan, and study scaffolding.

A second portfolio in `karthik-rcm` would create two sources of truth and dilute the Gravitas conversion signal.

## Decision

`karthik-rcm` is **the public evidence trail only**:

- Study log (`STUDY_LOG.md`)
- Exam logs (`aif-c01/exam-log.md`, future cert log files)
- Sanitized notes, flashcards, labs (`aif-c01/notes/`, etc.)
- Case-study narrative draft + architecture diagram (`case-study-ar-triage/narrative.md`)

It is **not**:

- A portfolio page
- A landing page for the case study
- A duplicate of `portfolio.md` or `profile.md`
- A marketing surface

## Consequences

- Future case-study **live pages** get added to `~/Application/Gravitas/src/app/` as new routes, linking back to the proof in this repo.
- LinkedIn posts and other marketing copy live in `~/Application/gravitas-marketing/`, not here.
- The `README.md` here stays as crisp public positioning — don't expand into a bio.

## Alternatives considered

- **Build a second portfolio page in this repo.** Rejected: dilutes Gravitas conversion signal, creates two sources of truth.
- **Move the Gravitas portfolio content into this repo for SEO.** Rejected: SEO value is in the Gravitas domain, not a GitHub-pages-served profile repo.
- **Keep the cert plan in `gravitas-marketing` instead.** Rejected: certifications are a *personal credibility* artifact, public on GitHub profile is the right surface.

## How this gets enforced

Codified in `CLAUDE.md` ("What you should NOT do without confirmation") and in the auto-memory at `repo_role.md`. Future sessions in this repo will see those before doing substantive work.
