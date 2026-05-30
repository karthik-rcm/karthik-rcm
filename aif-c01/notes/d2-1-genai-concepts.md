# Basic Concepts of Generative AI

**Exam-guide ref:** AIF-C01 — Domain 2 (Fundamentals of Generative AI) — Task 2.1
**Status:** Notes from Skill Builder video (own words — pending internalization via `/brainstorm`)
**Lesson date:** 2026-05-30
**Source:** Skill Builder "Domain 2 Review", Task 2.1 Lessons 1–5 (transcript in gitignored scratch/domain-2)
**Covers:** All 5 lessons. L1: what gen AI is, prompt/completion, in-context learning. L2: tokenizer → embeddings → transformer/self-attention. L3: pre-training, unimodal vs multimodal, diffusion. L4: gen-AI tasks + use cases. L5: the foundation-model lifecycle.

## Plain-English statement

Generative AI is a **subset of deep learning** that *creates new content* (text, image, audio, video, code) instead of classifying or predicting from existing data. It runs on **foundation models** — huge transformer neural nets with billions of parameters, pre-trained on vast unlabeled data. You feed a **prompt**, the model returns a **completion** by repeatedly guessing the next **token**. Everything in this task hangs off that: tokens, embeddings, the transformer that powers it, and the lifecycle for taking a model from idea to production.

## The vocabulary (Lesson 1)

- **Generative AI** — subset of deep learning; generates *new* original content. Contrast with traditional AI, which classifies/predicts.
- **Foundation model (FM)** — large, complex neural net, billions of parameters learned in **pre-training**. More parameters → more memory → more advanced tasks. Use as-is or **fine-tune**.
- **Prompt** — the input you send the model (text for LLMs; also image/video/other modalities). Passed in at **inference** time.
- **Completion** — the model's output. It's a *guess of the next word/token*.
- **Token** — a discrete unit (a word/character chunk). The model works in tokens, not raw text.
- **In-context learning** — putting **examples** of the task *inside the prompt* (in the context window) to steer the model — no retraining. Comes in **zero-shot** (no examples), **one-shot** (one), **few-shot** (several).
- **Prompt engineering** — crafting the prompt to get a better completion.
- Models compute in **statistics + linear algebra** (probability, loss functions, matrix multiplication) — ML works in numbers, not raw text/images.

## The engine: tokenizer → embeddings → transformer (Lesson 2)

This is the densest concept block in the exam. The chain:

1. **Tokenizer** — converts human text into a vector of **token IDs** (input IDs). Each ID = a token in the model's **vocabulary**.
2. **Vector** — an ordered list of numbers representing features of an entity, *and* a location in a space (think: a cell located by row+column in a spreadsheet). Closer in the space = more similar in meaning.
3. **Embedding** — the numerical vector representation of a token that captures its **semantic meaning** (works for text, image, video, audio). Similar things sit close together in vector space.
4. **Transformer** — the core of gen AI (2017 paper *"Attention Is All You Need"*). Encoder + decoder, multiple layers.
   - **Self-attention** — the key innovation. Weighs the importance of different parts of the input when generating each output token → captures **long-range dependencies** RNNs couldn't. (Mechanically: query/key/value vectors, dot products → attention weights. *Exam doesn't need the math.*)
   - **Positional encoding** — encodes each token's position so the model understands word order, without recurrence.

**Exam mercy:** AWS explicitly says you *don't* need the low-level transformer math. Know the vocabulary and the intuition: tokens → embeddings → self-attention → completion.

## Pre-training, unimodal vs multimodal, diffusion (Lesson 3)

- **Pre-training** — model learns a deep statistical representation of language from **vast unlabeled data** (GB→PB). This is **self-supervised learning**; weights update to minimize the **loss**. Needs heavy compute + **GPUs**. Only ~1–3% of tokens survive after data-quality curation.
- **Bigger = more capable** — larger models often work *without* extra in-context learning or fine-tuning. But training them is hard + expensive.
- **Unimodal** — one modality. LLMs are unimodal (text in, text out).
- **Multimodal** — multiple modalities (image, video, audio). Tasks: image captioning, visual question answering, text-to-image. Models: DALL-E, Stable Diffusion, Midjourney.
- **Diffusion models** — learn to *reverse a noising process*. Start with random noise → iteratively de-noise → coherent output. Three components to know: **forward diffusion, reverse diffusion, stable diffusion**. *Stable Diffusion* works in a reduced **latent space**, not pixel space. Advantages over GANs/VAEs: higher quality, more diversity, more stable + easier to train. Examples: Stable Diffusion (image), Whisper (speech), AudioLM (audio).

## Generative tasks + use cases (Lesson 4)

LLMs handle many tasks *without* fine-tuning: **text generation/rewriting** (adapt to an audience), **summarization**, information extraction, Q&A, classification, harmful-content detection, translation, recommendations, marketing, chatbots, search, **code generation**.

AWS content-creation tools: **Bedrock + Titan** (text/image/audio FMs), **SageMaker + Amazon Q Developer** (code, formerly CodeWhisperer), **Sumerian** (3D content).

Architectures to know: **GANs, VAEs, transformers** — each has tradeoffs; pick by objective + dataset.

## The foundation-model lifecycle (Lesson 5) — exam-named, memorize the order

> **data selection → model selection → pre-training → fine-tuning → evaluation → deployment → feedback**

Key moves within it:
- **Define scope narrowly first** — many tasks vs one specific task (e.g. named entity recognition). Specific scope saves time + compute.
- **First decision:** train from scratch vs start from a base model.
- **Adaptation ladder (cheap → expensive):** prompt engineering / in-context learning → **fine-tuning** (a *supervised* process) → **RLHF** (reinforcement learning from human feedback — aligns the model to human preferences).
- **Evaluation runs throughout** — highly iterative. Recommended order: prompt-engineer → evaluate → fine-tune → re-evaluate.
- **LLM fundamental limits** (hard to fix by training alone): **hallucinations** (inventing info) and weak **complex reasoning/math**.

## Gotchas

- **Generative AI ⊂ deep learning ⊂ ML ⊂ AI.** It *creates*; traditional AI *classifies/predicts*. A question contrasting "generate new content" vs "classify existing data" is testing this line.
- **Token ≠ word.** A token is a chunk (word/sub-word/character). Pricing and context windows are counted in tokens, not words.
- **Embedding = meaning as a vector; closeness = similarity.** If a question says "captures semantic meaning" or "similar items are near each other," that's embeddings/vector space.
- **Self-attention is THE transformer innovation** — weighing input parts to capture long-range context. It's what beat RNNs. Don't attribute it to RNNs/CNNs.
- **Pre-training is self-supervised on unlabeled data; fine-tuning is supervised.** Two different phases, two different data needs. Easy to swap — don't.
- **In-context learning (zero/one/few-shot) changes nothing in the model** — it's just examples in the prompt. Fine-tuning *does* change the model (weights). The exam tests this distinction hard.
- **Diffusion: Stable Diffusion works in latent space, not pixel space.** And diffusion beats GANs/VAEs on stability + quality + diversity.
- **Foundation-model lifecycle order is exam-named** — data selection → model selection → pre-training → fine-tuning → evaluation → deployment → feedback. Memorize it.
- **Hallucination is a fundamental limit, not a bug you train away.** The fix is grounding (RAG) or checking against an authoritative source — not "more training."
- **RLHF is fine-tuning *for alignment* (human preferences), using reinforcement learning.** Don't confuse it with ordinary supervised fine-tuning for task performance.
