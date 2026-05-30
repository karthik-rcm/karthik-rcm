# Evaluating Foundation Model Performance

**Exam-guide ref:** AIF-C01 — Domain 3 (Applications of Foundation Models) — Task 3.4
**Status:** Notes from Skill Builder video (own words — pending internalization via `/brainstorm`)
**Lesson date:** 2026-05-30
**Source:** Skill Builder "Domain 3 Review", Task 3.4 Lessons 1–2 (transcript in gitignored scratch/domain-3)
**Covers:** Both lessons. L1: deployment considerations, task-specific metrics (ROUGE/BLEU), benchmarks (GLUE/MMLU/BIG-bench/HELM), AWS eval tools. L2: integration, RAG for grounding, the gen-AI application stack.

## Plain-English statement

Evaluating an FM is harder than traditional ML because the output is **non-deterministic** — you can't just compare to a label. So you use **task-specific metrics** (ROUGE for summaries, BLEU for translation), **standardized benchmarks** (GLUE, MMLU, BIG-bench, HELM), **human review**, or AWS's built-in eval tools (SageMaker Clarify, Bedrock evaluation + BERTScore). The second half is the practical question: how do you *integrate* the model into a real application — the gen-AI stack, and why RAG is the grounding answer for outdated/factual gaps.

## Deployment considerations (Lesson 1)

How will the model function in deployment?
- **Speed / latency** — how fast must completions come? Compute budget? Trade performance for speed/storage?
- Inference challenges on-prem / cloud / **edge**: compute, storage, low-latency.
- **Optimization techniques:** reduce model size (faster load, lower latency — *but* may cut performance); shorter prompts; fewer/smaller retrieved snippets; limit generation via inference parameters. Tradeoff: accuracy vs performance.

## Evaluation metrics + benchmarks (Lesson 1)

Deterministic outputs (traditional ML) → easy metrics (accuracy, RMSE vs labels). Gen-AI output is non-deterministic → **task-specific** metrics:

- **ROUGE** (Recall-Oriented Understudy for Gisting Evaluation) → **summarization**.
- **BLEU** (Bilingual Evaluation Understudy) → **translation**.

**Standardized benchmarks** (compare LLMs without a single task focus):
| Benchmark | What it measures |
|---|---|
| **GLUE** | general language understanding (sentiment, Q&A); generalize across tasks; leaderboard. **SuperGLUE** = harder (multi-sentence reasoning, reading comprehension) |
| **MMLU** (Massive Multitask Language Understanding) | world knowledge + problem-solving (history, math, law, CS) |
| **BIG-bench** (Beyond the Imitation Game) | tasks *beyond* current LLM capability (math, physics, bias, reasoning) |
| **HELM** (Holistic Evaluation of Language Models) | **transparency** — which model is good for a task; combines metrics (summarization, Q&A, sentiment, bias) |

**Human + AWS evaluation:**
- **Human workers** — manually compare responses (incl. JumpStart + non-AWS models).
- **SageMaker Clarify** — evaluate LLMs, create model-evaluation jobs (text FMs from JumpStart).
- **Bedrock evaluation module** — auto-compares responses + computes **BERTScore** (semantic similarity vs a human reference). Good for **faithfulness + hallucination** in text generation.

## Integration + the gen-AI stack (Lesson 2)

**RAG as the grounding answer** — a framework for LLMs to use external data. Fixes: outdated internal knowledge (retrieve fresh data at inference vs costly repeated retraining), weak math, and **hallucinations** (provides context → grounds + improves factuality). Use an **orchestration library** to manage passing user input → LLM → completion.

**The gen-AI application stack** (define business goals + success metrics first, then):
| Layer | Role |
|---|---|
| **Infrastructure** | compute, storage, network to host the LLM + app; secure data across prep/train/inference |
| **Model** | choose the LLM + inference infra; extra storage to collect completions/feedback for fine-tuning/eval; isolate data |
| **Tools/frameworks** | LLM tools, **model hubs** to manage + share models |
| **UI / interface** | website or **REST API**; security for interaction |

Users (humans *or* other systems via APIs) interact with the whole stack.

## RCM application

Evaluation is where the rubber meets HIPAA. **BERTScore for faithfulness/hallucination** is exactly the metric you'd want gating a denial-appeal draft — is the generated appeal *faithful* to the source claim + payer policy, or did it invent a code? The "collect user completions/feedback for later fine-tuning" storage layer is a PHI surface — feedback on real claims is PHI and needs the same isolation as everything else. RAG-for-grounding (d3-1, d3-4) is the recurring answer because in healthcare, *factual + current + citable* beats *fluent*.

## Gotchas

- **ROUGE = summarization, BLEU = translation.** (R→Recall→summa**r**ization; B→Bilingual→translation.) The most-tested metric-matching pair in Domain 3.
- **Benchmarks: match the name to the focus.** GLUE/SuperGLUE = general language understanding; MMLU = broad knowledge + problem-solving; BIG-bench = beyond-current-capability; HELM = transparency/holistic. Expect "which benchmark for X."
- **BERTScore = semantic similarity vs a human reference, for faithfulness/hallucination** — it's a *Bedrock evaluation* feature. Don't confuse with ROUGE/BLEU (n-gram overlap, task-specific).
- **Gen-AI is non-deterministic → accuracy/RMSE don't directly apply.** That's *why* ROUGE/BLEU/benchmarks/human eval exist. A question offering "just use accuracy" for an LLM is the trap.
- **Reducing model size cuts latency but can cut performance** — the core deployment tradeoff. Not a free win.
- **RAG fixes outdated knowledge + hallucination at inference time — cheaper than retraining.** The recurring D3 answer for "keep the model current without retraining."
- **Human evaluation is still valid + sometimes necessary** for non-deterministic output — don't assume everything is automatable.
