# Transparent & Explainable Models

**Exam-guide ref:** AIF-C01 — Domain 4 (Guidelines for Responsible AI) — Task 4.2
**Status:** Notes from Skill Builder video (own words — pending internalization via `/brainstorm`)
**Lesson date:** 2026-05-30
**Source:** Skill Builder "Domain 4 Review", Task 4.2 Lessons 1–2 (transcript in gitignored scratch/domain-4)
**Covers:** Both lessons. L1: transparency = interpretability + explainability, the performance + security tradeoffs. L2: transparency tools (Service Cards, Model Cards, Clarify/Shapley), human-centered AI (A2I, RLHF).

## Plain-English statement

**Transparency** = how well stakeholders can understand a model. It has two flavors: **interpretability** (you can see *how* it works — only simple models) and **explainability** (you can describe *what* it does without seeing inside — works on any model, black-box). Pushing for transparency costs you two things: **performance** (simple models are weaker) and **security** (an open model is easier to attack). AWS gives you documentation (Service Cards, Model Cards) and tooling (Clarify/Shapley, A2I, RLHF) to land the right balance.

## Interpretability vs explainability (Lesson 1) — the core distinction

| | **Interpretability** | **Explainability** |
|---|---|---|
| Question | *How* does it work? | *What* is it doing? |
| Sees inside? | **Yes** — inner mechanisms | **No** — treats model as **black box** |
| Which models | only **simple** (linear regression, decision trees) | **any** model (observe inputs→outputs) |
| Use | document how mechanisms drive output | answer "why was this flagged/rejected?" — often enough for business |

- **Linear regression** (slope/intercept) and **decision trees** (rules) are interpretable. **Neural nets** are not — like the brain, you can't trace thoughts to neurons.
- **If interpretability is a hard regulatory/business requirement → pick an interpretable model** (and accept lower performance). Otherwise explainability usually suffices.

## The two tradeoffs of transparency (Lesson 1)

1. **Performance** — low-complexity = easy to interpret but weaker. (Word-by-word lookup translation is interpretable but not fluent; a context-aware neural net is fluent but opaque.) More transparency → usually less performance.
2. **Security/safety** — *lack* of transparency has advantages. Transparent models are **more attackable** (hackers see the inner workings, find vulnerabilities, reverse-engineer). Opaque models limit attackers to what outputs reveal. Transparency may also require sharing training-data details → privacy concern. **Secure model artifacts** when transparent.

## Transparency tools (Lesson 2)

- **Open source (GitHub)** — maximizes transparency (inner workings open, diverse contributors → less bias, issues caught). But some companies block it for **safety** reasons → prefer proprietary.
- **AI Service Cards** — responsible-AI docs for **AWS-hosted** models (you only touch APIs). Cover intended use, limitations, design choices, best practices. Exist for Rekognition (faces), Textract (IDs), Comprehend (PII), and **Titan Text** in Bedrock.
- **SageMaker Model Cards** — document the lifecycle of **models you build** (design→train→eval); auto-populate training details, datasets, containers.
- **SageMaker Clarify explainability:**
  - **Shapley values** → feature attributions: each feature's contribution to a prediction (top-impact bar chart).
  - **Partial dependence plot (PDP)** → how predictions change as one feature varies (e.g. age).

## Human-centered AI (Lesson 2)

Design AI that prioritizes human needs/values; interdisciplinary (psychologists, ethicists, domain experts); **enhance humans, not replace them.**
- **Amazon Augmented AI (A2I)** — human review of inference *samples*. Route **low-confidence** inferences to humans before the client; feedback re-trains the model. Also review *random* predictions to **audit**. Own reviewer pool or **Mechanical Turk**; configurable reviewers-per-prediction. Example: review low-confidence Rekognition explicit-content calls.
- **RLHF** — make LLMs truthful/harmless/helpful by putting human feedback in the reward function. Train a **reward model**: humans rank multiple responses to a prompt → preferences train the reward model → it predicts a human's score → the LLM refines for max reward. Collect preferences via **SageMaker Ground Truth**.

## RCM application

This is your terrain twice over. **Interpretability-vs-explainability**: a denial-prediction model is a black box, so you'd lean on **explainability** (Clarify/Shapley: "denied because these top features") — *and* in a regulated payer dispute, that explanation is the defensible artifact. **A2I is the human-approval gate** the PractiHR autonomy build is built around — low-confidence agent actions route to a human before execution, exactly A2I's pattern. **RLHF + Ground Truth** is how you'd align an HR/RCM assistant to your house standards. The safety-vs-transparency tradeoff is real for you: a fully transparent model exposes your proprietary logic.

## Gotchas

- **Interpretability = see inside (simple models only); explainability = black-box, any model.** *Every* model can be explained; only simple ones are interpretable. The most-tested D4 distinction.
- **Transparency has TWO costs: performance AND security.** The security one is counter-intuitive — *less* transparency is *safer* (harder to attack/reverse-engineer). Don't only cite the performance tradeoff.
- **AI Service Cards = AWS's models (API-only); Model Cards = your models.** Don't swap them. Service Cards exist for Rekognition/Textract/Comprehend/Titan Text.
- **Shapley values = per-feature contribution; PDP = how prediction varies with one feature.** Both are Clarify explainability outputs.
- **A2I routes LOW-CONFIDENCE inferences to humans (and random ones for audit).** It's the human-in-the-loop service — the exam pairs it with approval gates + quality control.
- **RLHF needs a separate reward model trained on human preference rankings.** Ground Truth collects the rankings. Pair with D2/D3 RLHF (alignment to the 3 H's).
- **Interpretability is the answer when "regulation requires full transparency."** That forces a simpler, lower-performance model — the exam's classic transparency-requirement scenario.
