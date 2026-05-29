# 002 — Reframe the cert track: build-anchored AIF → MLA → CCA-F (CHP parked)

**Status:** Active
**Owner:** Karthik
**Date:** 2026-05-29
**Type:** decision
**Supersedes:** the cert sequence + philosophy in [001-roadmap.md](../plans/001-roadmap.md) (roadmap rewritten the same day to match this decision)

---

## Context

The original plan ([001-roadmap.md](../plans/001-roadmap.md), 2026-05-15) framed certs as "insurance against FOMO": **AIF-C01 → CHP → MLA-C01**, with an **AR Triage case study** as the week-1 anchor, all studied as separate exam-prep blocks.

Two things changed in the 2026-05-29 session:

1. **The real goal sharpened.** Karthik is taking PractiHR from ~2% AI (assistive text helpers) to a target of **60–80% of routine HR labor handled by agents**, behind human approval gates. That is applied agentic-AI engineering — the thing he actually wants to be good at and certified in.
2. **Anthropic shipped its first official cert.** The **Claude Certified Architect — Foundations (CCA-F)** launched March 2026 — an *agentic* credential (Agentic Architecture & Orchestration 27%, Tool Design & MCP 18%, Prompt/Structured Output 20%, Claude Code 20%, Context/Reliability 15%).

Karthik's stated criterion: **a credible certification that stays recognized for ~2 years, then move on to the next one.**

## Decision

**The spine is the PractiHR autonomy build, not a study syllabus.** The build is the lab where every cert domain gets exercised, and it is the source of the public case study (sanitized).

**Cert sequence: AIF-C01 → MLA-C01 → CCA-F. CHP parked.**

- **AIF-C01** — on-ramp. Fast at Karthik's level, gives an early badge, and unlocks the AWS 50%-off voucher for the next exam.
- **MLA-C01** — the **anchor**. Credible AWS Associate cert (3-year validity → recognized through ~2029), universally read by enterprise procurement, and it certifies his *actual* runtime: Bedrock, deployment, MLOps, monitoring.
- **CCA-F** — the **next one**, deliberately sequenced last. By the time AIF→MLA is done (~4–6 months at 3–5 hrs/wk), CCA-F will be ~a year mature, the developer-tier certs Anthropic announced for 2026 will exist, and the PractiHR build will already satisfy CCA-F's "6 months hands-on" expectation.
- **CHP** — parked. Karthik lives HIPAA daily; it is not his credibility gap. Revive only if a specific deal demands it (consistent with 001's "skipped unless a deal demands").

## Rationale

The criterion is **durable credibility**, not topical fit.

- AWS Associate certs carry **3-year validity** and the strongest procurement recognition — they satisfy the 2-year-recognition requirement directly, and MLA-C01 maps 1:1 to the AWS+Bedrock stack across PractiHR, RCMToolKit, CredixOne, news-agent, AgentPlatform.
- CCA-F is the **best topical fit** (agentic, Claude, MCP) but is **2 months old**. Durability/recognition over a 2-year window is the one axis a brand-new "Foundations" cert cannot yet prove — and that axis is exactly the stated criterion. So CCA-F is the follow-on, not the anchor.

## Alternatives considered

- **CCA-F first (primary).** Rejected *for this criterion*: best topical fit, but durability over 2 years is unproven at 2 months old. Revisit as the next cert once mature.
- **Keep the cert-only roadmap, no build.** Rejected: the build is where the skill, the public case study, and CCA-F's hands-on requirement all come from. Separating them wastes the highest-leverage asset (his daily work).
- **Skip AIF, go straight to MLA.** Rejected: AIF is cheap and fast, unlocks the 50% MLA voucher, and is a low-risk warm-up + early badge.

## Consequences

- **001-roadmap.md rewritten** to the AIF → MLA → CCA-F sequence with the build-as-lab spine. CHP section marked parked.
- **The AR Triage case study is reframed** toward a **PractiHR onboarding-autonomy** case study — the build produces the public evidence directly. (Existing `case-study/` folder repurposed; nothing about the HIPAA/sanitization rules changes.)
- **`docs/sources.md` gains** the Anthropic Academy / CCA-F sources and a local-book-library note (study consumption, not citation).
- **CCA-F access path:** the Claude Partner Network (free to join for orgs bringing Claude to market — GravitasHC likely qualifies). Note this on the roadmap; confirm live terms on Anthropic's site before booking.
- **The agentic-AI work the books cover** (RAG, agent loops, eval) now has a named home: the PractiHR build, tracked here as the public evidence trail.

## How this gets enforced

The rewritten 001-roadmap.md is the master plan the session-start protocol reads. STUDY_LOG's "where we are" block points at this decision. Future sessions orient against both before doing study work.
