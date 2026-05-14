---
name: quiz
description: Generates exam-format multiple-choice questions from notes Karthik has actually studied, scores his answers, identifies weak sub-domains, and logs results to practice-questions/ + exam-log.md + STUDY_LOG.md. Default 10 questions. Use this when you think you know a concept and want to verify under exam conditions.
disable-model-invocation: false
user-invocable: true
argument-hint: "<cert> [topic-or-domain] [-n <count>] [--mock-exam]"
---

# /quiz — test what you actually know

You invoke this when you think you've internalized a topic and want to verify under exam conditions. The skill reads the notes files you've actually studied (so the test is on *your* material, not random AWS trivia), generates exam-format MCQs with trap distractors, scores your answers, identifies weak sub-domains, and logs results.

Examples:

- *"`/quiz aif-c01`"* — pull from all AIF-C01 notes, 10 questions
- *"`/quiz aif-c01 bedrock-guardrails -n 15`"* — 15 questions on a specific topic
- *"`/quiz chp privacy-rule -n 20`"* — CHP privacy rule, 20 questions
- *"`/quiz aif-c01 --mock-exam`"* — full 65-question simulation, exam timing

This skill is **output-side** — testing. Pair with `/aiprof` (input/gathering) and `/brainstorm` (internalization) for the full study loop.

## Project context

!`echo "Repo: $(basename "$(git rev-parse --show-toplevel 2>/dev/null || pwd)")" && echo "Notes coverage:" && for cert in aif-c01 chp mla-c01; do count=$(find $cert/notes -maxdepth 2 -type f -name "*.md" 2>/dev/null | wc -l); echo "  $cert: $count notes file(s)"; done && echo "Most-recent practice attempts:" && (find aif-c01/practice-questions chp/practice-questions mla-c01/practice-questions -maxdepth 2 -type f -name "*.md" 2>/dev/null | sort -r | head -3) || true`

## How the skill runs

**Step 1 — Frame the test (≤ 30 seconds, prose).**

- Confirm the cert, topic scope, question count, and mode.
- Default question count: 10 for topic-scoped, 20 for domain-scoped, 65 for `--mock-exam`.
- Default mode: open-book practice. `--mock-exam` switches to closed-book + timed simulation matching the real exam (AIF-C01 = 90 min for 65 questions, MLA-C01 = 170 min for 65, CHP = 90-120 min for 60-100).
- **Refuse to quiz on topics with no notes file.** If Karthik invokes `/quiz aif-c01 sagemaker-pipelines` and there's no `aif-c01/notes/*sagemaker*pipelines*.md`, surface it: *"No notes file on SageMaker pipelines in aif-c01/. Did you mean to `/aiprof` first, or quiz a different topic?"* The whole point is to test what he's studied, not what he hasn't.

**Step 2 — Read the notes.**

- Read every notes file in scope: the specific topic file, or all files in the cert's `notes/` folder, or the relevant sub-domain files.
- Identify the load-bearing facts, decision boundaries, gotchas, and HIPAA/security caveats. These are the question targets.
- **Don't quiz on facts not in the notes.** If a fact is core to the exam but absent from Karthik's notes, surface it: *"Bedrock cross-region inference is on the AIF-C01 exam blueprint but missing from your notes. Skip it in this quiz, or pause to `/aiprof` first?"*

**Step 3 — Generate the questions.**

Each question follows the AWS / HIPAA Academy exam format:

```
### Q<n>

<Scenario or question stem — 2-4 sentences, RCM-flavored when natural>

A. <Option 1>
B. <Option 2>
C. <Option 3>
D. <Option 4>

[For multi-answer questions: "Select TWO." — only when the official format requires it]
```

**Distractor quality is non-negotiable.** This is what separates a useful quiz from a meaningless one:

- **Trap distractors must sound plausible to someone who half-understands the concept.** Not "obviously wrong" — exam-realistic. Apply the Test Writer lens from `/brainstorm`.
- **Distractors must come from adjacent concepts the notes cover.** If the notes mention Bedrock Guardrails AND Bedrock Agents, distractors can confuse the two. If a concept isn't in the notes, it can't be in a distractor — the test stays scoped to what Karthik has studied.
- **No "all of the above" / "none of the above" unless the source exam format actually uses them.** AWS exams rarely do; CHP uses them more.
- **Match the exam's specific traps.** AWS loves: terminology overload (the same word meaning different things across services), confusing IAM vs SCP, conflating fully-managed vs serverless, encryption-at-rest vs in-transit. CHP loves: BAA vs DPA, covered entity vs business associate, required vs addressable safeguards, 30-day vs 60-day vs 72-hour timing rules.

**Mix the difficulty:**

- ~40% straightforward recall ("which service does X?")
- ~40% scenario-based application ("a healthcare client wants Y — which service?")
- ~20% trap-rich edge cases ("which of these is NOT...")

**Match the exam's domain weighting** when generating a domain-scoped or full-mock quiz. AIF-C01 D3 is 28% of the exam, so a 10-question quiz should have ~3 questions on D3 (rounded to the nearest integer).

**Step 4 — Administer the quiz.**

Two modes:

- **Default (open-book practice):** Print all N questions at once. Karthik answers in a single message (e.g., `1. B  2. C  3. A...`). You score after the full submission. This is faster and lets him refer to notes — useful when learning.
- **`--mock-exam`:** Print one question at a time. Wait for the answer. Don't reveal correct/incorrect until the full quiz is done. Track elapsed time. Surface a timer warning if pace falls behind exam-required throughput.

In either mode, **never reveal the correct answer in the question stem** (e.g., don't make the correct answer obviously longer than distractors, don't accidentally hint).

**Step 5 — Score and explain.**

After Karthik submits, write the results file at `<cert>/practice-questions/YYYY-MM-DD-<topic-or-domain>.md`:

```markdown
# Quiz: <topic> — YYYY-MM-DD

**Cert:** <aif-c01 | chp | mla-c01>
**Scope:** <topic or domain>
**Questions:** N
**Mode:** open-book | mock-exam
**Time taken:** MM:SS (mock-exam only)
**Score:** X / N (P%)
**Pass threshold:** 70% (AIF-C01: 700/1000, CHP: ~70%, MLA-C01: 720/1000)
**Result:** PASS | FAIL

## Score by sub-domain

| Sub-domain | Correct / Total | % |
|---|---|---|
| D2 — Fundamentals of GenAI | 3 / 4 | 75% |
| D3 — Foundation Models | 2 / 3 | 67% |
| D5 — Security & Governance | 3 / 3 | 100% |

## Weak areas (< 70%)

- D3 Foundation Models — specifically <concept Karthik missed> (Q4, Q7)
- <next gap>

## Questions

### Q1 — <topic tag>

<Question stem>

A. <Option>
B. <Option>
C. <Option>  ← Correct
D. <Option>

**Your answer:** B
**Correct answer:** C
**Explanation:** <Why C is correct. Why B is the trap (cite the adjacent concept it confuses with). Cite the notes file the question came from.>
**Source:** [aif-c01/notes/d3-2-bedrock-guardrails.md](../notes/d3-2-bedrock-guardrails.md)

### Q2 — ...
```

**Step 6 — Update exam-log and STUDY_LOG.**

- Append a row to `<cert>/exam-log.md` matching the existing table shape (#, Date, Source, Score, per-domain breakdown, Time, Notes). "Source" for this attempt is `/quiz <topic>`.
- Update the "Weak areas" section of `exam-log.md` if any new weak sub-domains surfaced.
- Append (don't overwrite) to the current week's `STUDY_LOG.md` entry: hours spent, score, and confidence-score delta on the relevant domain(s). The confidence delta is yours to assign honestly — a 60% on a quiz is not a confidence 4.

**Step 7 — Recommend next move.**

Based on the score:

- **All correct (100%):** *"Solid. Move on or stretch further? Options: (a) raise the difficulty — try the next sub-domain, (b) run `--mock-exam` to test under timed conditions, (c) write a flashcard for the trickiest question you got right."*
- **Pass (70-99%):** *"Pass. Weak area: <X>. Want to `/brainstorm <X>` to close the gap, or `/aiprof <X>` if your notes are thin?"*
- **Fail (<70%):** *"Below pass. Recommend `/brainstorm` on <weak-area-1> and <weak-area-2> before re-quizzing. The notes file may also need extension — consider `/aiprof <weak-area>` if the concept isn't fully covered."*

## Process lenses (always apply)

- **`thinking.md`** — refuse to invent facts. If you can't generate a correct-with-defensible-explanation question on a concept, skip the concept. Don't fabricate a question whose "correct answer" you can't tie to the notes file or an authoritative source.
- **`consistency.md`** — match the existing practice-questions file shape (defined above). First file in a cert's `practice-questions/` folder sets the convention.
- **`planning.md`** — quiz is a Goal/Deliverable/Acceptance/Time-budget event. Goal: test recall on X. Deliverable: scored results file. Acceptance: weak areas named, exam-log row appended. Time budget: 15-30 min for a 10-question open-book, 90+ min for a mock exam.

## Discussion rules

- **Don't hint during scoring.** If Karthik asks "is Q5 B?", say: *"Submit your full answer set first — I'll explain after."*
- **Push back on score inflation.** If Karthik says "I knew that one, just clicked wrong" — acknowledge but don't change the score. The exam doesn't give partial credit for "I knew it really."
- **Surface meta-patterns.** If three questions in a row fail on the same boundary (e.g. confusing IAM Roles vs IAM Users), call it out: *"Three failures on IAM role-vs-user terminology — that's a notes gap, not a recall gap. Consider `/aiprof iam-fundamentals` before re-quizzing."*
- **Never re-use questions from a previous quiz on the same notes set without permission.** Karthik might be memorizing question patterns instead of concepts. If you generate from the same notes file twice, vary the scenarios.

## Mock-exam mode (`--mock-exam`)

Specifics:

- **Full official question count** for the cert (AIF-C01: 65, MLA-C01: 65, CHP: 60 default — confirm with Karthik).
- **Full official time limit** (AIF-C01: 90 min, MLA-C01: 170 min, CHP: 90 min default).
- **One question at a time** — Karthik types the answer letter, you confirm receipt and move to next.
- **No notes access enforced by Karthik's honesty.** The skill can't actually prevent him from looking, but the file header records mode = `mock-exam` so the score is comparable to a real attempt.
- **Domain weighting strictly matches the official blueprint.** AIF-C01 mock: 13 questions D1, 16 D2, 18 D3, 9 D4, 9 D5.
- **Time-awareness messaging.** After Q33 (halfway): *"Halfway. Elapsed: 42 min of 90."* No coaching beyond pacing.
- **Score on the official scale.** AIF-C01: x/1000 (pass 700). MLA-C01: x/1000 (pass 720). CHP: x/100 (pass ~70).
- **The mock-exam result is the most important data point in `exam-log.md`.** It's what tells Karthik whether he's ready for the real thing. Treat it accordingly — don't grade on a curve.

## When NOT to use this skill

- **No notes file on the topic.** Test what he's studied, not what he hasn't. Redirect to `/aiprof`.
- **He's still mid-brainstorm.** `/quiz` is for after internalization. Quizzing too early just confirms ignorance — not useful signal.
- **He wants to learn material.** Use `/aiprof`. `/quiz` tests; it doesn't teach.
- **The "test" he wants is a flashcard drill.** Flashcards are a `/brainstorm` artifact, not a quiz. `/quiz` is exam-format MCQ, not Q/A drill.
- **Inside a `/loop` or scheduled run.** Autonomy handed over — don't pause to administer a quiz.

## Anti-patterns (things this skill must NOT do)

- **Generate questions on facts not in the notes.** That tests Karthik's general AWS knowledge, not his study material. The whole point is to surface gaps between *what he studied* and *what he can recall under pressure*.
- **Fabricate "correct answers" you can't trace to a source.** Every correct answer must trace to a notes-file claim (which traces to a `/aiprof` citation) or be flagged `[VERIFY]` for Karthik to check.
- **Build distractors that are obviously wrong.** Lazy distractors make the quiz useless — Karthik scores 100% on pattern-matching, not understanding.
- **Hint during scoring or reveal before submission.** Defeats the test.
- **Inflate the confidence score after a passing quiz.** A 70% on a 10-question quiz is not a confidence-5 signal. Confidence updates conservatively.
- **Re-use the same questions across attempts without varying scenarios.** Encourages memorizing questions instead of understanding concepts.
- **Skip the `<cert>/exam-log.md` update.** The log is the durable record of every practice attempt; missing rows means missing data for "am I ready for the real exam."

## Handoff (where the skill stops)

After writing the results file and updating logs, output exactly:

```
Quiz results: <path>
Score: <X/N> (<P%>)  | <PASS/FAIL>
exam-log.md updated.
STUDY_LOG.md updated: Week <N>, +<X.X> hours, confidence delta <D-level>: <before>→<after>

Weak areas: <list, or "none — all >= 70%">

Next moves (separate sessions):
  1. /brainstorm <weak-area>   — close the gap via Socratic dialogue
  2. /aiprof <weak-area>       — if notes are thin
  3. /quiz <topic> --mock-exam — re-test under exam conditions when ready

This skill is done.
```
