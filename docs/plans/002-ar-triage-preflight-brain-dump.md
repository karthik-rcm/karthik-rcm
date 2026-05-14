# 002 — AR Triage Pre-flight Brain Dump

**Status:** Active
**Owner:** Karthik
**Date:** 2026-05-16 (tomorrow)
**Type:** plan
**Roadmap ref:** Week 1 — AR Triage case study ([docs/plans/001-roadmap.md](001-roadmap.md))

---

## Goal

Capture the raw facts of one real RCM engagement into a sanitization-tagged scratch file, so the Saturday narrative-drafting session writes from confirmed facts instead of stalling on "wait, what were the numbers?"

## Deliverable

`docs/drafts/ar-triage-raw-notes.md` — confirmed facts only, every line tagged for sanitization (`[KEEP]` / `[RANGE]` / `[REMOVE]` / `[GENERALIZE]`). One rough hand-drawn or excalidraw architecture sketch saved separately (path TBD).

## Acceptance

- Engagement is picked (one, not a composite) and code-named — never client-identified
- Eight fact categories are filled or explicitly tagged `[UNKNOWN — need to check]`:
  1. Practice profile (providers, specialty band, payer-mix shape)
  2. AR aging before (90+ $ ballpark, claim count, avg days)
  3. Manual triage before (FTE count, hours/week, what they did)
  4. Recovery rate before
  5. What I built (1-paragraph plain English)
  6. AR aging after
  7. Time horizon (months between before / after)
  8. Headline stat — the one number I'm proudest of
- Every line has a sanitization tag — no untagged content survives the session
- One architecture sketch exists (paper photo or excalidraw export). Diagram quality is "complete," not "pretty"

## Time budget

**30 minutes.** Hard cap. If we're at 30 and acceptance isn't met, log the gap in STUDY_LOG.md as Week 1 spillover and stop — don't push to 45.

## Protocol

Voice-to-text brain dump → Claude mirrors clean bullets → Karthik confirms or corrects → Claude writes confirmed facts to `docs/drafts/ar-triage-raw-notes.md`. Rules:

1. **No client name. Ever.** Code-name only.
2. **Claude won't invent numbers.** Unknown → `[UNKNOWN — need to check]`.
3. **Claude won't smooth gaps.** Plausible-sounding fabrication is the worst failure mode.
4. **Tag-as-you-go, don't rewrite.** Sanitization rewriting happens Saturday.

## Out of scope (do NOT do tomorrow)

- Writing the actual case-study narrative — that's Saturday
- Clean architecture diagram — Saturday redraws the rough sketch
- LinkedIn post drafting — lives in `~/Application/gravitas-marketing/`, much later
- Updating `case-study-ar-triage/narrative.md` — Saturday work, raw-notes feeds it

## Saturday handoff

After tomorrow's session ends, the next session's first step is:

```
Read docs/drafts/ar-triage-raw-notes.md, then start drafting
case-study-ar-triage/narrative.md section by section, asking me to
resolve [UNKNOWN] tags and approve sanitized phrasings.
```

That's the bridge between this 30-min dump and Saturday's deeper work.

## Confidence baseline (update at session close)

Track in [STUDY_LOG.md](../../STUDY_LOG.md) Week 1 entry. The relevant signal: not a domain confidence score, but "can I defend every number in the raw-notes file under scrutiny?" Y/N.
