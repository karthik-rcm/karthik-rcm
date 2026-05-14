# 004 — Month 2: AIF-C01 Passed

**Status:** Pending (starts Jun 13, 2026)
**Owner:** Karthik
**Dates:** Jun 13 – Jul 18, 2026 (Weeks 5-9)
**Type:** plan
**Roadmap ref:** Weeks 3-5 in [001-roadmap.md](001-roadmap.md), stretched to 5 weeks for 3-5 hrs/week budget

---

## Month-end gate

**AIF-C01 PASSED with score ≥ 800 / 1000.** (Pass is 700; "flying colors" target is 850+.)

If the gate isn't met: exam booking gets delayed by 1-2 weeks. Don't sit the exam unless mock-exam scores are consistently ≥ 800.

## Cert facts (locked, no surprises later)

- **Exam:** 65 questions, 90 minutes, $100, delivered by Pearson VUE (online proctored or test center)
- **Pass:** 700 / 1000
- **Flying colors target:** 850+
- **Domain weights:** D1 (20%), D2 (24%), D3 (28%), D4 (14%), D5 (14%)
- **Prep stack:** AWS Skill Builder Exam Prep Plan (free) + AWS service docs (free) + Tutorials Dojo practice exams ($15) + `/aiprof` + `/brainstorm` + `/quiz` skills
- **Optional:** Stephane Maarek Udemy course (~$10 on sale) — only if structured video helps you

---

## Weekly checkpoints

### W5 — Jun 13 – 19: LinkedIn post published + D2 start

- **Goal:** ship the Month-1 LinkedIn post; start AIF-C01 D2 (Fundamentals of GenAI — 24%)
- **Deliverable:** LinkedIn post live; 2-3 notes files in `aif-c01/notes/` covering D2.1, D2.2
- **Acceptance:** D2 confidence: 2 → 4. First `/quiz` on D2 ≥ 70%.
- **Loop per topic:** `/aiprof <topic>` → `/brainstorm <topic>` → log

### W6 — Jun 20 – 26: D3 (heaviest domain — 28%)

- **Goal:** cover Applications of Foundation Models — RAG, fine-tuning, model selection, Bedrock Guardrails, agents
- **Deliverable:** 3-4 notes files for D3 sub-domains
- **Acceptance:** D3 confidence: 2 → 4. `/quiz` on D2+D3 combined ≥ 75%.
- **Watch:** D3 is the densest domain. If confidence is still 3 at week-end, extend D3 by half a week and compress D4 later.

### W7 — Jun 27 – Jul 3: D1 + D4

- **Goal:** D1 (AI/ML fundamentals — 20%) + D4 (Responsible AI — 14%)
- **Deliverable:** 3-4 notes files
- **Acceptance:** D1 + D4 confidence: 2 → 4. `/quiz` ≥ 75%.

### W8 — Jul 4 – 10: D5 + first practice exam

- **Goal:** D5 (Security, Compliance, Governance — 14%); first full-length practice exam
- **Deliverable:** 2-3 D5 notes files; practice exam #1 logged in `aif-c01/exam-log.md`
- **Acceptance:**
  - All 5 domains have notes files
  - Practice exam #1 score ≥ 750
  - Weak areas named in `exam-log.md`

### W9 — Jul 11 – 17: Mock exams + book + sit

- **Goal:** 2 more practice exams; weak-area `/brainstorm` sessions; `--mock-exam` simulation; **book exam for Jul 17 or 18**
- **Deliverable:** 3 total practice exams + 1 mock-exam logged
- **Acceptance:**
  - Last 3 practice exams all ≥ 800 (consistency matters more than single high score)
  - `--mock-exam` ≥ 800
  - No weak sub-domain < 70%
  - **Exam booked**
- **Jul 18:** **AIF-C01 EXAM** — pass ≥ 800

## Gate before booking the exam

All three must be true:
1. Last 3 practice exams average ≥ 800
2. A `--mock-exam` run within the last 7 days hit ≥ 800
3. No weak sub-domain below 70%

If any fail: don't book. Push to W10.

## Risks

- **D3 is heavy and gets compressed.** Mitigation: weekly STUDY_LOG check at end of W6 — if confidence is 3, we extend.
- **Practice exam scores plateau below 800.** Mitigation: `/brainstorm` weak areas via the Test Writer + Examiner lenses; sometimes the gap is trap-distractor recognition, not knowledge.
- **Exam-day nerves drop you 50 points.** Mitigation: "flying colors" target of 850+ means a bad day still lands you at 800.

## Saturday session-start prompt (W5)

```
Read STUDY_LOG.md and docs/plans/003-month-2-aif-c01.md.
I'm starting W5 — first AIF-C01 week.

Today's session: /aiprof bedrock-fundamentals (or D2 sub-topic
you want to start with).
```
