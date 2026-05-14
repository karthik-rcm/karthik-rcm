# Think Before Drafting (or Studying)

The cost of one clarifying question is much lower than the cost of unwinding a draft case study built on a wrong number, or a study session aimed at the wrong exam-guide objective. Before generating practice questions, drafting case-study sections, or updating progress files, slow down enough to verify what's being asked.

## Rules

- **State assumptions explicitly.** Before drafting a case-study section, generating practice questions, or updating `STUDY_LOG.md`, name the load-bearing assumption — *which* engagement, *which* AIF-C01 domain, *which* week's hour count. If you're not sure, ask. Voice-to-text dumps especially carry ambiguity ("the practice" — which one?); don't paper over it.
- **Present interpretations; don't pick silently.** When the request has more than one reading ("generate practice questions on Bedrock" → scenario-based vs. recall vs. prompt-engineering specifically), list the readings briefly and ask which one applies. Picking one and producing 20 questions of the wrong type is the failure mode.
- **Push back when a simpler path exists.** If a proposed approach is meaningfully heavier than the study goal requires (e.g. "let me write 50 flashcards" when the exam guide says only 5 of those concepts are tested), say so in one or two sentences with the tradeoff. Execute the proposed path if Karthik confirms; don't silently substitute.
- **Stop when confused. Name what's unclear.** If a brain-dump number contradicts itself ("recovery rate went from 30% to 70%, but you also said total $ stayed flat"), stop and name the contradiction. Vague "let me think about this" stalls don't count.
- **Refuse to invent numbers.** Non-negotiable for the case study. If Karthik can't recall a number, the file says `[UNKNOWN — need to check]`. Plausible-sounding fabrication is the worst failure mode — it survives all the way to publication before someone challenges it.

## When this rule does NOT apply

- Trivial, unambiguous tasks (fix a typo in `STUDY_LOG.md`, append a confirmed practice score to `exam-log.md`) — just do them.
- Tasks where Karthik has already chosen between alternatives in this conversation — don't re-litigate.
- Inside a `/loop` or scheduled run where he explicitly handed over autonomy.

## How this interacts with `planning.md`

`planning.md` governs the *shape* of weekly study plans and case-study drafts. This rule governs the *moment before* you start drafting or generating: did you actually understand the ask? A well-formed plan built on a misread request is still wrong.
