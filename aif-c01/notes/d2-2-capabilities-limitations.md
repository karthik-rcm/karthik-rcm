# Capabilities & Limitations of Generative AI

**Exam-guide ref:** AIF-C01 — Domain 2 (Fundamentals of Generative AI) — Task 2.2
**Status:** Notes from Skill Builder video (own words — pending internalization via `/brainstorm`)
**Lesson date:** 2026-05-30
**Source:** Skill Builder "Domain 2 Review", Task 2.2 Lessons 1–3 (transcript in gitignored scratch/domain-2)
**Covers:** All 3 lessons. L1: advantages + limits, the memory limitation. L2: fine-tuning, hallucinations, the 3 H's, interpretability, ROUGE/BLEU. L3: model selection factors + business metrics.

## Plain-English statement

Gen AI is a **general-purpose technology** — cheap and fast to build many applications, *but* it can't do everything. It hallucinates, it has no memory between prompts, and the most capable models are the least explainable. This task is about that balance: where gen AI wins (advantages), where it fails (limits + risks), how you *measure* it (ROUGE/BLEU, business KPIs), and how you *pick* a model.

## Advantages + the core limits (Lesson 1)

- **Advantages:** adaptability, responsiveness, **simplicity**. Traditional AI was complex + expensive; gen AI makes apps cheaper + faster to build.
- **The 10-year-old test** (handy heuristic): *could a 10-year-old follow the prompt and do the task?* Read an email and decide if it's a complaint → yes, so an LLM can. Write about a brand-new AWS service with no info → no — *unless* you give it the source material in the prompt. The model can only work with what it knows or what you put in context.
- **Memory limitation:** an LLM does **not** remember earlier conversations — "like asking a different child for each task." Prompting alone can't teach it your business/style over time. **Fine-tuning** can.

## Fine-tuning, hallucinations, the 3 H's (Lesson 2)

- **Instruction fine-tuning** — further training so the model better understands human prompts + gives more natural responses.
- **Bad behaviors** (from training on raw internet text): toxic/aggressive language, dangerous info, and **hallucinations** — confidently inventing wrong information (e.g. confidently repeating disproven health advice instead of refuting it). **Mitigation: verify against an authoritative source.**
- **The 3 H's — helpfulness, honesty, harmlessness** — the responsible-AI principles (deep-dive in Domain 4). **RLHF** (fine-tuning with human feedback) aligns models to these, cuts toxicity + incorrect info.

## Interpretability (Lesson 2)

The performance ↔ interpretability tradeoff (same idea as D1.2): the more interpretable, the easier to understand *why* it predicted — but simpler models often perform worse (can't capture non-linear interactions).
- **Intrinsic analysis** — interpret *low-complexity / simple* models directly.
- **Post hoc analysis** — interpret *any* model (including complex neural nets) after training; often model-agnostic. Done at a **local** level (one data point) or **global** level (overall behavior).

## Evaluation metrics for LLMs (Lesson 2)

- Traditional ML output is **deterministic** → use **accuracy** (fraction correct).
- LLM output is **non-deterministic** + language-based → harder to score ("I drink coffee" vs "I do not drink coffee" — needs a structured automated measure).
- **ROUGE** (Recall-Oriented Understudy for Gisting Evaluation) → evaluate **summarization** vs human reference summaries.
- **BLEU** (Bilingual Evaluation Understudy) → evaluate **translation** vs human translations.
- (More on both in Task 3.4.)

## Model selection + business metrics (Lesson 3)

- **Selection factors:** model type, performance, requirements, capabilities, constraints, **compliance**.
- FMs generate text/chat, images, code, video, embeddings. Data-generation model families: **VAEs, GANs, autoregressive** — each has tradeoffs by data complexity/quality.
- FMs specialize: **Stable Diffusion** (image), **GPT-4** (language). Trained on huge **unlabeled** broad data → much larger than traditional ML; used as the **baseline starting point**.
- **Enterprise reality:** must integrate with existing systems (databases, **ERP, CRM**), needs skilled staff + compute, and output quality drives adoption.
- **Output-quality metrics:** relevance, accuracy, coherence, appropriateness → user satisfaction.
- **Efficiency metrics:** task completion rate, reduction in manual effort, low error rate.
- **Business KPIs:** cross-domain performance, efficiency, conversion rate, average revenue per user, accuracy, **customer lifetime value (CLTV)**, ROI.

## Gotchas

- **Hallucination = confidently wrong, not "no answer."** The danger is the *confidence*. Fix is grounding/verification (authoritative source, RAG), not "train harder."
- **LLMs are stateless between prompts.** No memory of past conversations. Persistence comes from fine-tuning (or feeding history/context back in) — not from the model "remembering."
- **Prompting can't teach business specifics; fine-tuning can.** If a question asks how to make a model adopt your style/domain permanently → fine-tuning. If it's "give it examples right now" → in-context learning.
- **ROUGE = summaries, BLEU = translation.** The mnemonic: **R**OUGE → **R**ecall → summa**r**ization; BLEU → Bilingual → translation. Don't swap them.
- **Performance vs interpretability is a tradeoff** — the more accurate complex model is the *less* explainable one. Same trap as D1.2; compliance/regulated use may force the simpler, lower-performance model.
- **Intrinsic = simple models only; post hoc = any model (incl. complex).** Post hoc is also where local-vs-global lives.
- **FMs train on UNLABELED data and are general-purpose baselines.** Don't describe an FM as "trained on a specific labeled task dataset" — that's the fine-tuned/traditional-ML picture.
- **The 3 H's = helpfulness, honesty, harmlessness**, and **RLHF** is the technique that instills them. Expect this paired with Domain 4 responsible-AI questions.
