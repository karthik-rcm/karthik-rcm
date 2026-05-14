# 005 — Month 3: CHP Passed

**Status:** Pending (starts Jul 18, 2026)
**Owner:** Karthik
**Dates:** Jul 18 – Aug 22, 2026 (Weeks 10-14)
**Type:** plan
**Roadmap ref:** Weeks 6-8 in [001-roadmap.md](001-roadmap.md), stretched to 5 weeks for 3-5 hrs/week budget

---

## Month-end gate

**CHP PASSED with score ≥ 80%.** (Pass is ~70%; "flying colors" target is 85%+.)

## Cert facts

- **Exam:** 60–100 questions, 90–120 minutes, $199 (self-study tier), delivered online by HIPAA Academy / ecfirst
- **Pass:** ~70%
- **Flying colors target:** 85%+
- **Coverage:** Administrative Simplification, Privacy Rule, Security Rule (admin/physical/technical safeguards), Transaction & Code Sets, Breach Notification
- **Your advantage:** ~90% of this material is already in your head from shipping RLS, AES-256, PHI workflows in PractiApp / RCMToolKit. CHP closes the *formal regulatory* gap, not the practical one.
- **Prep stack:** HHS HIPAA pages (free, the actual regulation) + NIST 800-66 + HIPAA Academy self-study + `/aiprof` + `/brainstorm` + `/quiz` skills

---

## Weekly checkpoints

### W10 — Jul 18 – 24: AIF-C01 badge posted + CHP start

- **Goal:** post AIF-C01 badge to LinkedIn (applied-RCM framing, not "I got a badge"). Start CHP — Administrative Simplification + Transaction & Code Sets (your known knowledge gap).
- **Deliverable:** LinkedIn badge post live; 2 notes files in `chp/notes/`
- **Acceptance:** Badge on LinkedIn profile; Admin Simplification confidence: 1 → 3
- **Book CHP exam now** for Aug 21 or 22 — HIPAA Academy scheduling is less flexible than AWS, lock the date early

### W11 — Jul 25 – 31: Privacy Rule + PractiApp mapping

- **Goal:** Privacy Rule deep dive — uses, disclosures, patient rights, minimum necessary, accounting of disclosures
- **Deliverable:** 2-3 notes files; `chp/practiapp-control-mapping.md` started (maps each PractiApp PHI control to its HIPAA citation)
- **Acceptance:** Privacy Rule confidence: 3 → 4. Mapping doc has ≥ 10 controls mapped.

### W12 — Aug 1 – 7: Security Rule + Breach Notification + first quiz

- **Goal:** Security Rule (admin/physical/technical safeguards) + Breach Notification Rule. Finish PractiApp mapping.
- **Deliverable:** 3 notes files; mapping doc complete; first `/quiz` on CHP material
- **Acceptance:** Security Rule confidence: 3 → 4. First `/quiz` ≥ 75%.

### W13 — Aug 8 – 14: Practice exams + scenarios

- **Goal:** 2 full-length practice exams; scenario-based prep ("you're the HIPAA Officer, walk me through…"); BAA / DPA distinction nailed
- **Deliverable:** 2 practice exams logged in `chp/exam-log.md`; mock-exam run
- **Acceptance:**
  - 2 practice exams ≥ 80%
  - `--mock-exam` ≥ 80%
  - Confidence on BAA, breach notification timing rules: 4+

### W14 — Aug 15 – 21: Final review + sit

- **Goal:** weak-area re-quiz; final review pass
- **Deliverable:** all weak sub-domains re-quizzed
- **Acceptance:** every weak sub-domain ≥ 75% on re-quiz
- **Aug 22:** **CHP EXAM** — pass ≥ 80%

## Gate before sitting the exam

Same as AIF-C01:
1. Last 2 practice exams ≥ 80%
2. `--mock-exam` ≥ 80% within last 7 days
3. No weak sub-domain < 70%

## Risks

- **CHP exam scheduling friction.** HIPAA Academy / ecfirst is less standardized than Pearson VUE. Book in W10, not W13.
- **Material feels familiar so prep is taken lightly.** Knowing how to *do* HIPAA in code is not the same as knowing how HHS *phrases* it in exam questions. The Test Writer lens in `/brainstorm` matters here — exam trap distractors love "required" vs "addressable" safeguards, 30/60/72-hour timing rules, BAA vs DPA.
- **AIF-C01 study burnout bleeds into W10.** Mitigation: W10 is a lighter week intentionally — badge post + Admin Simplification only.

## Saturday session-start prompt (W10)

```
Read STUDY_LOG.md and docs/plans/004-month-3-chp.md.
I just passed AIF-C01. Today's session: post the LinkedIn badge,
then start CHP with Administrative Simplification.

/aiprof hipaa-administrative-simplification
```
