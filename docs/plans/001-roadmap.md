# Roadmap — Build-Anchored AI-Agent Certification Track

**Status:** Active
**Owner:** Karthik
**Date:** 2026-05-30 (study progress + foundation-first order; supersedes the 2026-05-15 cert-FOMO version)
**Type:** plan
**Decision of record:** [docs/decisions/002-build-anchored-cert-track.md](../decisions/002-build-anchored-cert-track.md)

---

## 1. The shape of this plan

**The spine is a build, not a syllabus.** Karthik is taking **PractiHR from ~2% AI to a target of 60–80% of routine HR labor handled by agents**, behind human approval gates. That build is the lab where every certification domain gets exercised for real, and it is the source of the public case study.

Certs ride on the build. They are sequenced for **durable credibility** — a cert that stays recognized for ~2 years, then move to the next:

| # | Cert | Role | Why | Validity |
|---|------|------|-----|----------|
| 1 | **AWS AI Practitioner (AIF-C01)** | On-ramp | Fast at his level, early badge, unlocks 50%-off voucher for MLA | 3 yrs |
| 2 | **AWS ML Engineer – Associate (MLA-C01)** | **Anchor** | Credible + universally recognized; certifies his actual Bedrock/MLOps runtime | 3 yrs |
| 3 | **Claude Certified Architect – Foundations (CCA-F)** | Next | The agentic credential; by then mature, and the build satisfies its hands-on bar | TBD (new, Mar 2026) |

**Parked:** CHP (HIPAA) — Karthik lives HIPAA daily; not his credibility gap. Revive only if a deal demands.
**Parked:** HITRUST, GH-600, AHIMA CHPS, generic AI-agent badges (per the original plan's "skipped" list).

**Time budget:** 3–5 hrs/week (light, realistic alongside PractiCons workload).
**Pacing principle:** after the cert stack, **every quarter ships one new public case study, not one new cert.** Case studies are the durable engine; certs are scaffolding.

---

## 2. The build = the lab (how certs map to PractiHR)

The PractiHR autonomy build runs advisory-first → graduate one action at a time (full design lives with the PractiHR repo). Each stage exercises cert domains directly, so study and shipping are the same motion:

| Build stage (PractiHR) | Capability learned | Cert domains exercised |
|---|---|---|
| Summarize 30/60/90 feedback | structured output, summarization | AIF D2/D3 · CCA Prompt/Structured Output |
| Policy/handbook Q&A from source docs | **RAG, grounding** | AIF D3 · MLA D2 · CCA Context/Reliability |
| Onboarding task orchestration | **agent loop, tool use** | MLA D3 · CCA Agentic Architecture, Tool Design/MCP |
| Eval harness + monitoring before autonomy | **evaluation, drift, monitoring** | MLA D4 · CCA Context/Reliability |
| Audit + approval rails | responsible AI, governance | AIF D4/D5 · MLA D4 |

The books in `docs/` (and `~/Downloads/AI_Foundation/`) are the reference library for this build: *Building Agentic AI Systems*, *Building LLMs for Production*, *Hands-On LLMs*, *LLM Engineer's Handbook*, *Designing ML Systems*, *Build an LLM from Scratch*.

---

## 3. Cert 1 — AWS AI Practitioner (AIF-C01)

### Exam blueprint

| Domain | Weight |
|--------|--------|
| 1. Fundamentals of AI and ML | 20% |
| 2. Fundamentals of GenAI | 24% |
| 3. **Applications of Foundation Models** | **28%** |
| 4. Guidelines for Responsible AI | 14% |
| 5. Security, Compliance, Governance for AI | 14% |

**Format:** 65 questions, 90 min, pass 700/1000.

### Study order (actual: foundation-first)
The roadmap originally proposed points-optimal D3→D2→D1→D4→D5 (biggest weight first). **Karthik chose foundation-first D1→D2→D3→D4→D5** — build the conceptual base before the heavy application domain. Deliberate divergence, not drift; the D3.1 RAG lesson written 2026-05-29 stays valid and was merged into the full D3 notes.

- **Done (Domain Review courses + own-words notes):** D1 (3 files), D2 (3 files), D3 (4 files; 3.1 merges the earlier RAG lesson).
- **Remaining:** D4 (Responsible AI) + D5 (Security/Governance) transcripts → notes; then the learning stages (visual-kt + deep discussion + quiz) across all domains; hold the 80% timed-mock booking gate.

### Official resources (free)

**Register / blueprint:**
- Exam overview + registration — https://aws.amazon.com/certification/certified-ai-practitioner/
- Exam guide — https://docs.aws.amazon.com/aws-certification/latest/examguides/ai-practitioner-01.html

**Skill Builder — study content (the actual teaching material):**
- **Exam Prep Plan** (the self-paced learning plan: 19 trainings, Domain 1–5 Review videos + Practice) — https://skillbuilder.aws/learning-plan/3NRN71QZR2/exam-prep-plan-aws-certified-ai-practitioner-aifc01--english/FBV4STG94B
- The teaching content is the **"Domain N Review"** courses (1h30m instructor videos each). Study order per §3: D3 → D2 → D1 → D4 → D5. Do each domain's **"Practice"** (questions/flashcards) right after its Review.
- ⚠️ NOT the "Exam Prep *Overview*"/*Summary* (5–15 min orientation, no teaching content).
- ⚠️ NOT "Exam Prep: AWS Certified AI Practitioner" listed as **Classroom Training** — those are paid, instructor-led, scheduled partner sessions. Wrong type.

**Skill Builder — practice/tests (save for the booking gate, limited attempts):**
- Official Practice Question Set (~20 Q, free) — https://skillbuilder.aws/learn/4URFGY63KV/official-practice-question-set-aws-certified-ai-practitioner--aifc01--english/FVG43Y1PAX
- Official Pretest — https://skillbuilder.aws/learn/W84113F8EE/official-pretest-aws-certified-ai-practitioner--aifc01--english/XWVNE9Z36F
- Official Practice Exam (full length) — https://skillbuilder.aws/learn/PWGBM4E8ZM/official-practice-exam-aws-certified-ai-practitioner-aifc01--english/B1MF12M4GE

### Study loop (this repo)
`/aiprof <topic>` (sourced lesson) → `/brainstorm <topic>` (Socratic) → `/quiz aif-c01 <topic>` (MCQs). Each in a fresh session. Sources cited only from `docs/sources.md`.

---

## 4. Cert 2 — AWS ML Engineer Associate (MLA-C01) — the anchor

50% discount unlocked after passing AIF-C01. Directly maps to the PractiHR runtime (Bedrock, deployment, monitoring).

### Exam blueprint

| Domain | Weight |
|--------|--------|
| 1. Data Preparation for ML | 28% |
| 2. ML Model Development | 26% |
| 3. Deployment & Orchestration of ML Workflows | 22% |
| 4. ML Solution Monitoring, Maintenance & Security | 24% |

**Format:** 65 questions, 170 min, pass 720/1000. ~65% industry pass rate.

### Build-aligned emphasis
- D3 (Deployment & Orchestration) ↔ onboarding task orchestration agent.
- D4 (Monitoring & Security) ↔ the eval harness + drift monitoring before autonomy graduation.
- Bedrock fine-tuning / RAG ↔ the policy Q&A agent.

### Official resources (free)
- Exam overview — https://aws.amazon.com/certification/certified-machine-learning-engineer-associate/
- Exam guide PDF — https://d1.awsstatic.com/training-and-certification/docs-machine-learning-engineer-associate/AWS-Certified-Machine-Learning-Engineer-Associate_Exam-Guide.pdf
- AWS exam-prep classroom — https://aws.amazon.com/training/classroom/exam-prep-aws-certified-machine-learning-engineer-associate-mla-c01/

---

## 5. Cert 3 — Claude Certified Architect – Foundations (CCA-F) — next

Anthropic's first official credential (launched March 2026). The agentic cert. Sequenced last on purpose: durability proves out, and the PractiHR build supplies the hands-on prerequisite.

> ⚠️ **Verify before booking.** The details below are corroborated across multiple third-party guides, not a single Anthropic spec page. Confirm live format, price, and access terms on Anthropic's own site (sources in `docs/sources.md`) before scheduling.

### Exam blueprint (as reported)

| Domain | Weight |
|--------|--------|
| Agentic Architecture & Orchestration | 27% |
| Prompt Engineering & Structured Output | 20% |
| Claude Code Configuration & Workflows | 20% |
| Tool Design & MCP Integration | 18% |
| Context Management & Reliability | 15% |

**Format (reported):** ~60 questions, 120 min, proctored, closed-book. **Cost:** $99/attempt (free during early-access window).
**Prereq (reported):** ~6 months hands-on with Claude API / Agent SDK / Claude Code / MCP — satisfied by the PractiHR build.
**Access:** currently via the **Claude Partner Network** (free to join for orgs bringing Claude to market; GravitasHC likely qualifies). This is the entry path — confirm before relying on it.

### Warm-up (free, start anytime)
- **Anthropic Academy** — free courses + completion certificates mapped to the CCA domains (Claude Code, API, MCP, Agent Skills). On-ramp while building.

---

## 6. Cost summary

| Item | USD |
|------|-----|
| AIF-C01 exam | $100 |
| MLA-C01 exam (50% off after AIF) | $75 |
| CCA-F exam | $99 (free in early-access window) |
| Practice material (Tutorials Dojo etc., optional) | ~$15–30 |
| AWS sandbox usage | ~$20 |
| **Total** | **~$310–325** |

Tactics: pass AIF → AWS auto-grants 50% off MLA; watch Skill Builder promo vouchers; Anthropic Academy is free; get GravitasHC into the (free) Partner Network for CCA-F early access.

---

## 7. Tracking

| Milestone | Status | Notes |
|---|---|---|
| Re-anchor roadmap to build-anchored track | ✅ | 2026-05-29, decision 002 |
| AIF-C01 D1 (AI/ML fundamentals) — notes | ✅ | 2026-05-30; d1-1/2/3, full Domain Review course |
| AIF-C01 D2 (GenAI fundamentals) — notes | ✅ | 2026-05-30; d2-1/2/3, full Domain Review course |
| AIF-C01 D3 (Applications of FMs) — notes | ✅ | 2026-05-30; d3-1/2/3/4, 3.1 merges the earlier RAG lesson |
| AIF-C01 D4 (Responsible AI) — notes | ☐ | next transcript to capture |
| AIF-C01 D5 (Security/Compliance/Governance) — notes | ☐ | |
| AIF-C01 learning stages (visual-kt + discussion + quiz, all domains) | ☐ | notes ≠ readiness; deep discussion is the gate |
| **AIF-C01 PASSED** | ☐ | unlocks MLA 50% voucher; book only after 80%+ timed mock |
| MLA-C01 D1–D4 | ☐ | build-aligned |
| **MLA-C01 PASSED** | ☐ | the anchor |
| GravitasHC → Claude Partner Network | ☐ | CCA-F access path |
| **CCA-F PASSED** | ☐ | the next one |
| PractiHR onboarding-autonomy case study (public) | ☐ | the durable engine |

---

## 8. Decision log

- 2026-05-15 — Original plan: certs as FOMO insurance, AIF → CHP → MLA, AR Triage case study first. *(Superseded.)*
- 2026-05-29 — Re-anchored to a **build-anchored** track: PractiHR autonomy build is the spine/lab; certs sequenced for durable credibility **AIF → MLA → CCA-F**; CHP parked; AR Triage case study reframed toward PractiHR onboarding autonomy. See [decision 002](../decisions/002-build-anchored-cert-track.md).
- 2026-05-30 — Switched AIF-C01 study order to **foundation-first (D1→D2→D3→D4→D5)** over the points-optimal D3-first. Captured Domain Review courses + own-words notes for D1, D2, D3 in one session. Built the `/visual-kt` study skill + Professor Claude teaching rule. Deep-discussion/quiz stages deferred behind transcript capture — flagged as the real readiness gate (notes ≠ teach-cold).

---

*Last updated: 2026-05-30 · Plan owner: Karthik Ramesh · Strategic advisor: Claude*
