# Training & Fine-Tuning Foundation Models

**Exam-guide ref:** AIF-C01 — Domain 3 (Applications of Foundation Models) — Task 3.3
**Status:** Notes from Skill Builder video (own words — pending internalization via `/brainstorm`)
**Lesson date:** 2026-05-30
**Source:** Skill Builder "Domain 3 Review", Task 3.3 Lessons 1–2 (transcript in gitignored scratch/domain-3)
**Covers:** Both lessons. L1: pre-training vs fine-tuning, catastrophic forgetting, PEFT/LoRA/ReFT, the fine-tuning taxonomy. L2: data prep for fine-tuning + AWS data-prep services + continuous pre-training.

## Plain-English statement

Three ways to put knowledge into a model: **pre-training** (teach it language from scratch — huge, expensive, unlabeled, self-supervised), **fine-tuning** (adapt a pre-trained model to your task — smaller, labeled, supervised), and **continuous pre-training** (keep feeding it broad new data over time). Full fine-tuning rewrites every weight and is costly — so the exam cares about the cheaper **parameter-efficient** methods (PEFT, LoRA) and the big risk of naive fine-tuning: **catastrophic forgetting**.

## Pre-training vs fine-tuning (Lesson 1)

| | **Pre-training** | **Fine-tuning** |
|---|---|---|
| Data | huge, **unstructured/unlabeled** | smaller, **labeled** examples |
| Learning | **self-supervised** | **supervised** |
| Cost | millions of GPU-hours, TB–PB, trillions of tokens | far less |
| Purpose | learn language fundamentals + capabilities | adapt to a specific task/domain |

- **Instruction-based fine-tuning** — labeled examples to improve performance on specific tasks.
- **Catastrophic forgetting** — fine-tuning on a single task rewrites the original weights → improves that task but **degrades other tasks**. Decide if it matters: if you only need one task reliably, you may not care.

## Efficient fine-tuning methods (Lesson 1) — exam-heavy

- **Full fine-tuning** — updates *every* parameter. Needs extra GPU memory (optimizer, gradients, activations) per parameter → high compute cost.
- **PEFT (Parameter-Efficient Fine-Tuning)** — **freeze the original weights**, train a small number of task-specific **adapter layers**. Much less compute/memory.
- **LoRA (Low-Rank Adaptation)** — popular PEFT technique. Freezes the FM's weights, injects new trainable **low-rank matrices** into each transformer layer. PEFT + LoRA modify **weights** but not **representations**.
- **ReFT (Representation Fine-Tuning)** — freezes the base model, learns task-specific interventions on **hidden representations** (semantic info, like embeddings). Based on the linear-representation hypothesis (concepts live in linear subspaces).
- **Multitask fine-tuning** — train on examples for *multiple* tasks at once → instruction-tuned model good at many tasks. Needs lots of data, but **mitigates catastrophic forgetting** (it's not narrowing to one task).
- **Domain adaptation fine-tuning** — adapt an FM to a domain with **limited domain-specific data**; handles jargon/technical terms. (Answer to "what fine-tuning adapts weights to domain-specific data?") JumpStart supports it for text-generation models.
- **RLHF (Reinforcement Learning from Human Feedback)** — fine-tune with human-preference data → align to human preferences (the 3 H's). The alignment tool, distinct from task fine-tuning.

## Data preparation for fine-tuning (Lesson 2)

The fine-tuning loop: take training prompts → model generates completions → compare completion distribution vs the **training label** → compute **loss** between token distributions → update weights. Repeat over batches. Evaluate on the **validation** set (validation accuracy); final check on the **test** set (test accuracy). Standard **train/validation/test split**.

AWS data-prep services (match the need to the tool):
| Need | Service |
|---|---|
| Low-code prep + feature engineering | **SageMaker Canvas** |
| Scale (big data) | Apache Spark/Hive/Presto via **SageMaker Studio + EMR** |
| Serverless ETL | **AWS Glue** interactive sessions |
| SQL prep | **JupyterLab** in SageMaker Studio |
| Feature discovery + storage | **SageMaker Feature Store** |
| **Bias detection** | **SageMaker Clarify** (imbalance, labeling bias by gender/race/age) |
| Data labeling | **SageMaker Ground Truth** |

## Continuous pre-training (Lesson 2)

Keep pre-training on broad new data over time → model gets more powerful, handles out-of-domain data better, accumulates knowledge. In **Bedrock**, continued pre-training customizes **Titan Text Express / Titan Text Lite** with your own **unlabeled** data in a secure managed environment. (Gen-AI output is non-deterministic → pick metrics/benchmarks that evaluate capability + guard against harmful output.)

## RCM application

The PractiHR autonomy build will face exactly the fine-tune-vs-RAG-vs-prompt decision. The catastrophic-forgetting lesson is the practical warning: fine-tuning a model hard on one RCM task (say denial classification) can quietly break its general ability. For most "know our current payer rules" needs, RAG (d3-1) beats fine-tuning — cheaper, no forgetting, citable. Fine-tuning earns its place only for *behavior/style* (e.g. always produce appeals in your house format) — and even then, **PEFT/LoRA** over full fine-tuning to keep cost + forgetting down. **SageMaker Clarify** for bias detection maps directly onto your HIPAA/fairness obligations.

## Gotchas

- **Pre-training = unlabeled + self-supervised; fine-tuning = labeled + supervised.** Continuous pre-training = unlabeled, ongoing. Three phases, don't blur the data/supervision type.
- **Catastrophic forgetting is THE fine-tuning risk** — single-task fine-tuning degrades other tasks. **Multitask fine-tuning** and **PEFT** mitigate it (PEFT freezes the originals).
- **PEFT/LoRA freeze the original weights and train small add-ons** — that's why they're cheap and forgetting-resistant. Full fine-tuning updates everything (expensive, forgetting-prone).
- **LoRA modifies weights (low-rank matrices); ReFT modifies representations (hidden states).** The names tell you: Low-Rank Adaptation vs Representation Fine-Tuning.
- **RLHF is for alignment (human preferences), not task accuracy.** Pair with D2.2's 3 H's. Don't confuse with supervised task fine-tuning.
- **Clarify = bias detection; Ground Truth = labeling; Feature Store = feature reuse.** Recurring SageMaker service-matching trap.
- **Domain adaptation fine-tuning uses *limited* domain data** — the answer when a question says "adapt to our jargon with a small specialized dataset."
