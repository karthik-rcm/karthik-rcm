# Study Log — Karthik Ramesh

Weekly entries against [the study plan](docs/plans/007-ai-fde-study-plan.md): AI agent engineering, taught from official cloud docs.

> **🧭 Where we are right now**
>
> | Field | Value |
> |---|---|
> | **Current focus** | **AI agent engineering, taught from official cloud docs** per [plan 007](docs/plans/007-ai-fde-study-plan.md). Next: finish Session 0 (decision 003, exam-log note, name-guard hook), then Session 1, the agent loop from scratch on a free local model. |
> | **Cert sequence** | **Retired 2026-10-30**: AIF-C01, MLA-C01, CCA-F and the parked CHP. Old roadmap kept in [the archive](docs/plans/archive/001-roadmap.md). |
> | **Active lesson** | Session 1, the agent loop. Chapter 1 now lives in `fde-field-book/` (built 2026-10-31); Foundry Local not yet installed. |
> | **Last updated** | 2026-10-31 |
>
> **This block is the source of truth for "where we are."** Every session must read this, then read the matching section of [docs/plans/007-ai-fde-study-plan.md](docs/plans/007-ai-fde-study-plan.md), *before* engaging with the request. Drift from the roadmap is the failure mode this gate prevents. Update this block whenever scope shifts.

**Time budget:** 3-5 hrs/week (light — realistic alongside PractiCons workload)
**Spine:** PractiHR autonomy build (the lab). Certs ride on it; each domain is exercised by a real build stage.
**Re-anchor date:** 2026-05-29 (build-anchored track begins)

---

## Confidence scale

1 = Never seen the material
2 = Read once, can't recall
3 = Can recognize, can't produce
4 = Can produce with reference open
5 = Can teach it cold

---

## Week 0 — 2026-05-15 (Pre-flight)

**Hours:** 0.5 (planning + repo setup)
**What I covered:**
- Reviewed the full 16-week plan with Claude
- Scaffolded `aif-c01/` and `case-study-ar-triage/` folders
- Decided: keep study artifacts in profile repo (public, learning-in-public signal)

**Confidence snapshot:**
| Domain | Score |
|--------|-------|
| AIF-C01 D1 (AI/ML fundamentals) | 2 |
| AIF-C01 D2 (GenAI fundamentals) | 3 |
| AIF-C01 D3 (Foundation models) | 3 |
| AIF-C01 D4 (Responsible AI) | 2 |
| AIF-C01 D5 (AI Security/Governance) | 2 |
| CHP (HIPAA all domains) | 4 |
| MLA-C01 (all domains) | 2 |

**Blockers / risks:** None. PractiCons workload is the main competing demand.

**Next week target:** Draft AR Triage case study narrative + sanitize numbers.

---

## 2026-05-29 — Re-anchor + first lesson

**Hours:** ~1.0 (strategy re-anchor + first AIF-C01 lesson)
**What I covered:**
- Re-anchored the whole track from "certs as FOMO insurance" to **build-anchored**: PractiHR autonomy build is the spine/lab (decision 002).
- New cert sequence locked: **AIF-C01 → MLA-C01 → CCA-F**; CHP parked.
- Discovered + scoped Anthropic's CCA-F (agentic cert, Mar 2026) as the eventual "next" cert.
- Rewrote `001-roadmap.md`, reset this block, added Anthropic/CCA-F sources to `docs/sources.md`.
- `/aiprof` lesson 1 delivered: **AIF-C01 D3.1 — RAG + foundation-model app design** → `aif-c01/notes/d3-1-rag-and-foundation-model-app-design.md`.

**Confidence snapshot:** unchanged (lesson received, not yet internalized — confidence updates after `/brainstorm`).

**Blockers / risks:** None. PractiCons workload remains the competing demand.

**Next target:** `/brainstorm d3-1-rag-and-foundation-model-app-design` to internalize, then `/quiz aif-c01 rag`.

---

## 2026-05-30 — AIF-C01 Domain 1 Review (complete)

**Hours:** ~2.5 (transcript-driven notes for all of Domain 1)
**What I covered:**
- Completed the Skill Builder **Domain 1 Review** course end to end (completion stamped 2026-05-30) — all three task statements, 17 lessons.
- Wrote three own-words notes files from the video transcripts (transcripts saved to gitignored `scratch/`):
  - `aif-c01/notes/d1-1-ai-concepts-terminology.md` — AI/ML/DL nesting, inference, data types, learning styles, overfitting/underfitting/bias, neural nets + transformers/LLMs.
  - `aif-c01/notes/d1-2-practical-use-cases.md` — when to use AI vs rule-based (deterministic vs probabilistic), ML problem types, the full AWS managed AI service catalog, real-world case studies.
  - `aif-c01/notes/d1-3-ml-development-lifecycle.md` — the 6-stage pipeline/lifecycle, AWS data + training + deploy services, four SageMaker inference options, drift + MLOps, evaluation metrics (confusion matrix, precision/recall/F1, AUC/ROC, MSE/RMSE/MAE), business metrics.
- Built an interactive ML-lifecycle HTML visual (`scratch/visuals/ml-lifecycle.html`, gitignored — promote on OK).
- Added AWS `/what-is/` concept explainers as a citeable AIF-C01 tier in `docs/sources.md` (with an explicit carve-out from the marketing-page exclusion).

**Confidence snapshot:**
| Domain | Score | Δ |
|--------|-------|---|
| AIF-C01 D1 (AI/ML fundamentals) | 3 | ↑ from 2 — notes complete, not yet quiz-proven under timed conditions |
| AIF-C01 D2 (GenAI fundamentals) | 3 | — |
| AIF-C01 D3 (Foundation models) | 3 | — |
| AIF-C01 D4 (Responsible AI) | 2 | — |
| AIF-C01 D5 (AI Security/Governance) | 2 | — |

**Blockers / risks:** D1 confidence is "lessons received," not internalized. Exam-pressure underperformance is the known risk — D1 is not locked until a timed `/quiz` proves it. Don't book on course-completion alone.

**Next week target:** `/brainstorm` the three D1 notes to internalize, then timed `/quiz aif-c01` per task statement. Then start Domain 2 (Generative AI Fundamentals).
