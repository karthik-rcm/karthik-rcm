# Prompt Engineering Techniques

**Exam-guide ref:** AIF-C01 — Domain 3 (Applications of Foundation Models) — Task 3.2
**Status:** Notes from Skill Builder video (own words — pending internalization via `/brainstorm`)
**Lesson date:** 2026-05-30
**Source:** Skill Builder "Domain 3 Review", Task 3.2 Lessons 1–2 (transcript in gitignored scratch/domain-3)
**Covers:** Both lessons. L1: prompt components, techniques, latent space. L2: latent space + hallucination, best practices, prompt-attack risks + guardrails.

## Plain-English statement

A prompt is how you talk to an LLM. Prompt engineering is crafting that input to get the output you want — *without* touching the model's weights. The techniques scale from "give no examples" (zero-shot) to "show a few" (few-shot) to "make it reason step by step" (chain-of-thought). The deep idea underneath: an LLM answers from its **latent space** (its statistical memory), so knowing what's *in* that space — and where it's thin — is the difference between a good answer and a confident hallucination. And because prompts are an attack surface, this task also covers prompt-injection/jailbreak risks and guardrails.

## Prompt components + techniques (Lesson 1)

A prompt combines (one or more): **task/instruction**, **context**, **input text**.

- **Zero-shot** — no examples (e.g. "classify the sentiment of this").
- **Few-shot** — a few examples to calibrate the output to your expectations.
- **Prompt template** — reusable scaffold: instructions + few-shot examples + content/questions for a use case.
- **Chain-of-thought** — break reasoning into intermediate steps; improves quality/coherence on complex tasks.
- **Prompt tuning** (advanced) — replace the prompt text with a *continuous embedding vector* optimized during training, keeping the rest of the model **frozen**. More efficient than full fine-tuning. (Note: this *does* involve training — it's a bridge toward fine-tuning, unlike the others.)

Prompt engineering = AWS: crafting/optimizing inputs — words, phrasing, punctuation, separators. Strategy depends on **both the task and the data**. Common Bedrock LLM tasks: classification, Q&A (with/without context), summarization, open-ended generation, code, math, reasoning.

## Latent space — the deep concept (Lessons 1–2)

**Latent space** = the encoded knowledge of language inside the model — stored statistical patterns that, when prompted, reconstruct language.
- Trained from huge text corpora (Common Crawl, Wikipedia, BookCorpus, C4…). Quality varies (Wikipedia presence ≠ truth).
- A prompt is matched against the latent space → returns statistics → assembled into words.
- **Models don't reason.** They generate one word at a time by **conditional probability** given surrounding context. Ask something nonsensical ("who dove below 25ft when dinosaurs walked the earth?") and the model answers anyway — statistically plausible, factually nonsense.
- **Hallucination from a thin latent space:** if the topic isn't well-represented, the model picks the *closest match* — looks like a mistake, but it's working as designed.
- **Advanced prompt engineering = knowing the latent space's limits.** Assess what the model actually knows about a topic before relying on it. Thin coverage → high hallucination risk.

## Best-practice techniques (Lesson 2)

1. **Be specific** — clear instructions: format, examples, style, tone, output length, context.
2. **Include examples** of desired behavior (texts, templates, code, charts).
3. **Experiment iteratively** — test prompts, observe how changes alter responses.
4. **Know the model's strengths/weaknesses.**
5. **Balance simplicity and complexity** — avoid vague/unexpected answers.
6. **Use comments** to add context without clutter.
7. **Add guardrails.**

## Prompt-engineering risks + guardrails (Lesson 2)

**Guardrails** — safety/privacy controls: define undesirable topics, block words, set thresholds to filter harmful categories + prompt attacks, filter sensitive-data inputs.

The four attacks (know each precisely):
- **Prompt injection** — a trusted (developer) prompt combined with untrusted user input to produce a malicious/undesired response.
- **Jailbreaking** — bypassing the **guardrails / safety measures** you put in place.
- **Hijacking** — changing/manipulating the original prompt with new instructions.
- **Poisoning** — harmful instructions embedded in messages, emails, web pages, etc.

AWS: **Bedrock + Titan** offer pre-trained models customizable via prompt engineering, with APIs to construct/refine prompts + monitor outputs.

## RCM application

Prompt engineering is the daily craft in your Bedrock/agent work — the denial-appeal drafting, the policy Q&A. The latent-space lesson is the load-bearing one for healthcare: a general FM's latent space is *thin* on your specific payer rules and current CPT updates, so prompting it directly invites confident-but-wrong answers. That's exactly why your real systems use **RAG** (d3-1) — to inject the current, authoritative payer policy at inference time instead of trusting the model's stale latent space. Prompt engineering + RAG together are the grounding strategy.

## Gotchas

- **Zero/one/few-shot change nothing in the model** — they're just examples in the prompt (in-context learning). **Prompt tuning is different** — it trains a continuous vector (the model's other weights stay frozen). Don't lump prompt tuning with zero/few-shot.
- **Chain-of-thought = "show your reasoning step by step"** — the fix for complex/multi-step tasks. If a question describes a multi-step reasoning problem, reach for CoT.
- **Models don't reason — they predict the next token by conditional probability.** A "reasoning" prompt (CoT) coaxes better output but the model is still doing statistics. The exam may test that LLMs lack true reasoning.
- **Hallucination = the model picking the closest match when its latent space is thin.** It's functioning correctly, not "broken." Fix is RAG/grounding or a better-covered model — not "ask nicely."
- **The four attacks — pin the precise definition:** injection = trusted+untrusted prompt blend; jailbreak = bypass guardrails; hijacking = overwrite original instructions; poisoning = embedded harmful instructions in content. Easy to blur on the exam.
- **Guardrails are the defense** for injection/jailbreak + sensitive-data filtering. Pair this with D2.3 security (prompt injection was listed there too) and Domain 4/5.
