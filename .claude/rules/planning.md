# Planning Rules

A 3-5 hr/week solo study effort doesn't need OKRs, sprints, story points, or epic emojis — that's ceremony for production software. But it does need explicit acceptance criteria, measurable outcomes, and no narrative mush. This file sets the shape.

## Session-start protocol — MANDATORY before doing substantive work

**Before engaging with any substantive request in this repo, follow this protocol. No exceptions.** This rule exists because drifting from the roadmap is the failure mode that wastes session time, scaffolds the wrong thing, and embarrasses everyone. The protocol is the gate against drift.

1. **Read [`STUDY_LOG.md`](../../STUDY_LOG.md)** — specifically the "Where we are right now" block at the top. It names the current week and the current focus. This is the source of truth for *where in the journey we are*.
2. **Read the matching section of [`docs/plans/001-roadmap.md`](../../docs/plans/001-roadmap.md)** — find the week-range or cert-section the STUDY_LOG points to. This is the source of truth for *what we're supposed to be doing*.
3. **State the orientation back to Karthik in one line** before engaging — *"You're in Week 1-2 per the roadmap, current focus is the case-study deliverable, subject not yet picked. Continuing."* This makes the orientation visible so Karthik can correct it if STUDY_LOG is stale.
4. **Only then engage with the request.**

**When the user request doesn't match where we are** (e.g. Karthik asks for AIF-C01 study material in Week 1 when the roadmap says case study first), surface the mismatch rather than silently doing what was asked: *"Roadmap says Week 1-2 is the case study, not AIF-C01. Pulling forward intentionally, or did you mean to update the focus?"*

**What does NOT need this protocol:** trivial off-roadmap requests (fix a typo, answer a quick factual question, explain a previous output, format a file). Use judgment — if the work changes a study artifact or progresses a cert, run the protocol. If it doesn't, skip it.

## The planning shape

Every weekly study session, case-study deliverable, or cert milestone is structured as:

**Goal → Deliverable → Acceptance → Time budget**

Not "study Bedrock for a few hours." Instead:

- **Goal:** Cover AIF-C01 Domain 3 (Foundation Models) section 3.1 (selection criteria)
- **Deliverable:** 15 flashcards in `aif-c01/flashcards/d3-foundation-models.md` + a notes file
- **Acceptance:** Can explain in plain English when to pick Claude vs Titan vs Llama 3, with one HIPAA-relevant trade-off named
- **Time budget:** 1.5 hours

The roadmap in `docs/plans/001-roadmap.md` provides the *Goal* level (4-month directional plan, three certs, public case study). Weekly entries in `STUDY_LOG.md` are where Deliverable + Acceptance + Time-actual get tracked. Sub-plans (a focused multi-day session, a revision pass before an exam) get their own numbered file in `docs/plans/` using the naming convention defined in `docs/README.md`.

## Rules

- **No vague study sessions.** "Read about Bedrock" is not a session plan. "Read AWS Bedrock developer guide chapters 1-3 and write 10 flashcards on inference parameters" is. If Karthik proposes a vague session, restate it in Goal/Deliverable/Acceptance/Budget form before he starts.
- **Acceptance criterion is producible, not consumable.** "Read the docs" is consumption — easy to fake, impossible to verify. "Write 10 flashcards" or "explain X in 3 sentences in `notes/`" is production — there's an artifact, and the artifact's quality is visible.
- **Time estimates in hours, not weeks.** A 16-week plan run at 3-5 hrs/week is really ~60-80 hours total. Track in hours so the budget is real. Calendar weeks are for the master plan; hours are for the session.
- **Every deliverable has a destination file.** A note exists or it doesn't. "I covered IAM policies" with no file in `aif-c01/notes/` did not happen. The file is the proof of work.
- **Confidence scores update at session close.** When a session ends, update the relevant domain's confidence score in `STUDY_LOG.md` if it shifted. Confidence is the lightweight signal that tells us whether to slow down on a domain or move on.
- **Defer scaffolding until needed.** Don't create `chp/` or `mla-c01/` folders until Karthik is in week 6 or week 9. Don't pre-fill `notes/` with empty domain files. Empty folders and stub files are noise that makes real work harder to see.

## Case-study planning

The AR Triage case study is the one deliverable that warrants a heavier plan-shape — it has multiple sections, sanitization passes, and distribution surfaces. Use this skeleton in `case-study-ar-triage/`:

```
## Sections
- [ ] Problem (before) — facts confirmed, [SANITIZE] tags resolved
- [ ] Why existing tools failed — facts confirmed
- [ ] Agent architecture — diagram drafted, diagram cleaned
- [ ] Results (after) — facts confirmed, all numbers defensible
- [ ] What I'd do differently — retrospective drafted
- [ ] Target reader / CTA — written

## Distribution
- [ ] PDF version
- [ ] Architecture diagram (final)
- [ ] LinkedIn post — long-form (in ~/Application/gravitas-marketing/)
- [ ] LinkedIn post — +1 week follow-up (in ~/Application/gravitas-marketing/)
- [ ] Gravitas site case-study page (in ~/Application/Gravitas/src/app/)
- [ ] 6-min Loom walkthrough
```

Each row gets checked when the artifact exists AND has been reviewed for HIPAA leakage. A checked row whose underlying file still says `[UNKNOWN]` is a lie — don't check it.

## When the user hands over a vague plan

If Karthik says "let's do some studying this weekend" or "I want to draft the case study," restructure it into Goal/Deliverable/Acceptance/Budget *before* starting work. Surface the restructured shape for sign-off. This protects both sides: he reviews a plan in the shape he expects, and you have explicit acceptance criteria to work against.

## Out of scope

- No OKRs, KRs, epics, stories, story points, or sprint emojis. The study plan itself is the OKR equivalent (the cert is the Objective; passing the exam is the KR), and weekly Deliverables are the equivalent of stories. Don't recreate the ceremony.
- No estimates in "S/M/L". Hours are concrete enough for solo work.
- No UI test recipes — there's no application to test.
