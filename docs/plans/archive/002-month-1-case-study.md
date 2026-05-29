# 002 — Month 1: PractiApp Document Intelligence Case Study Shipped

**Status:** Superseded
**Owner:** Karthik
**Dates:** May 16 – Jun 13, 2026 (Weeks 1-4)
**Type:** plan
**Superseded by:** [001-roadmap.md](../001-roadmap.md) via [decision 002](../../decisions/002-build-anchored-cert-track.md) (2026-05-29). Track moved build-first (was case-study-first); case-study subject reframed PractiApp Document Intelligence → PractiHR onboarding-autonomy. The brain-dump → narrative → diagram → ship method below is still good — lift it when the PractiHR case-study week arrives.
**Roadmap ref:** Weeks 1-2 in [001-roadmap.md](../001-roadmap.md), stretched to 4 weeks for 3-5 hrs/week budget

---

## Month-end gate

Sanitized case study **live on the Gravitas site** + **LinkedIn post published**. Public evidence trail in `karthik-rcm/case-study/` shows the work.

If the gate isn't met by Jun 13: extend by 1 week, descope distribution, or formally re-plan in `docs/decisions/`.

## Subject

**PractiApp Document Intelligence module** — Bedrock-powered (Claude Haiku/Sonnet + Nova) document classification + smart OCR for credentialing PDFs. Replaces manual dropdown classification + 40 hardcoded document types with dynamic AI classification, citation verification, and human-in-the-loop confirmation. Multi-tenant on PHI with RLS.

## Why this case study

- **Direct AIF-C01 alignment.** Hits D2 (GenAI fundamentals), D3 (foundation models, RAG-style classification, model selection — Haiku for cheap, Sonnet for hard), D4 (responsible AI — citation verification + human-in-the-loop), D5 (security/governance — multi-tenant RLS on PHI, IAM-scoped Bedrock).
- **Real shipped GenAI on healthcare PHI.** Not aspirational. Already in production.
- **Clean time/effort/money arc.** Manual specialist classification → AI classification = measurable hours/week reclaimed.
- **Drives Gravitas inbound *while* you grind certs.** If you cert-grind first, you have nothing to share when the badge lands. Case study first means: by the time AIF-C01 is in your pocket (Month 2), there's already a public artifact people can read.

---

## Weekly checkpoints

### W1 — May 16 – 22: Raw facts dump

- **Goal:** capture the PractiApp Document Intelligence module's before/after facts into a scratch file
- **Deliverable:** `docs/drafts/case-study-raw-notes.md`
- **Acceptance:** the following 8 fact categories are filled or marked `[UNKNOWN]`:
  1. **Practice profile** (size of credentialing operation: # specialists, # providers credentialed/yr, # docs/yr) — code-named, no client name
  2. **Before** — manual classification workflow: time per doc, error rate, dropped types, audit risk
  3. **Hardcoded-types pain** — 40 hardcoded types, code deployment per new type, classification mismatches
  4. **What was built** (1 paragraph plain English): Bedrock Claude Haiku/Sonnet + Nova → dynamic classification → human confirm → DB-stored types, with citation verification
  5. **After** — AI-assisted classification: time per doc, accuracy, new-type onboarding speed
  6. **Volume** — docs/week per specialist, total monthly volume
  7. **Time horizon** — when the AI module went live, how long to measure before/after
  8. **Headline stat** — the one number that lands in the LinkedIn post (hours/week saved, $/month saved, FTE-equivalents freed, classification accuracy)
- Every line tagged `[KEEP]` / `[RANGE]` / `[REMOVE]` / `[GENERALIZE]`
- One rough architecture sketch (paper photo or excalidraw — completeness over polish): document upload → Lambda → Bedrock classify → DB match → human confirm → stored
- **Time:** 3-5 hours, mostly one voice-to-text brain dump

### W2 — May 23 – 29: First narrative draft

- **Goal:** turn confirmed facts into a sanitized narrative draft
- **Deliverable:** `case-study/narrative.md` — sections: Problem (before), Why existing tools failed, Architecture, Results (after), What I'd do differently, Target reader / CTA
- **Acceptance:**
  - All `[UNKNOWN]` tags from W1 either resolved with verified numbers or accepted as gaps with `[UNVERIFIED]` markers
  - Every number defensible if a stranger asks for the methodology
  - No marketing language ("revolutionary," "cutting-edge"); numbers over adjectives
  - HIPAA-clean: no client name, no city/state that narrows to one practice, no payer name unless story requires it
- **Time:** 3-5 hours

### W3 — May 30 – Jun 5: Clean architecture diagram + narrative tightening

- **Goal:** turn the rough sketch into a publishable diagram; tighten narrative prose
- **Deliverable:** `case-study/architecture.png` (exported from draw.io / excalidraw) + revised `case-study/narrative.md`
- **Acceptance:**
  - Diagram is exportable as PNG, readable at LinkedIn-image resolution
  - Narrative reads end-to-end in under 4 minutes
  - Past tense for what shipped, present tense for what runs (per `consistency.md`)
- **Time:** 3-5 hours

### W4 — Jun 6 – 12: Ship to Gravitas + draft LinkedIn

- **Goal:** publish on Gravitas site; LinkedIn post in draft folder
- **Deliverable:**
  - New route in `~/Application/Gravitas/src/app/` for the case study (live URL)
  - LinkedIn post in `~/Application/gravitas-marketing/drafts/` (or wherever marketing drafts live there)
- **Acceptance:**
  - Gravitas page live and accessible publicly
  - LinkedIn post drafted, framed around applied RCM outcomes (not "I built this thing")
  - Post scheduled or queued for publication early W5 (kicks off Month 2)
- **Time:** 3-5 hours

## What "shipped" means at month-end

- `case-study/narrative.md` finalized
- `case-study/architecture.png` finalized
- Gravitas-site case-study page **live**
- LinkedIn post **published** (or scheduled for Jun 15-16)

## Risks

- **Numbers don't recall cleanly from memory.** W1 ends with `[UNKNOWN]` tags accepted; we don't perfectionist-grind the dump. Better to ship with one fewer stat than miss the month-end gate.
- **Subject picked is too sensitive to sanitize publicly.** If by W2 it's clear sanitization isn't viable, pivot subject and absorb a 1-week delay. Logged in `docs/decisions/`.
- **Gravitas site needs a route I haven't built.** W3 budget reserves 1 hour for Gravitas Next.js scaffolding so W4 isn't blocked.

## Saturday session-start prompt (W1)

```
Read STUDY_LOG.md and docs/plans/002-month-1-case-study.md.
I'm starting W1 — the raw-facts brain dump for the case study.
Engagement code name: [FILL IN BEFORE PASTING]

I'll voice-to-text. Mirror what you hear, ask me to confirm,
then write confirmed facts to docs/drafts/case-study-raw-notes.md
with sanitization tags.
```
