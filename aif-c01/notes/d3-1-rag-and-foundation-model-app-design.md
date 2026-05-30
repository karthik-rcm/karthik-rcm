# RAG + Foundation-Model Application Design

**Exam-guide ref:** AIF-C01 — Domain 3 (Applications of Foundation Models) — Task 3.1
**Status:** Lesson received (`/aiprof` — pending internalization via `/brainstorm`)
**Lesson date:** 2026-05-29
**Sources fetched:** 4 (4 succeeded, 1 failed — exam-guide page rendered as a JS shell, see Sources)

## Plain-English statement

A foundation model ships with broad general knowledge but knows nothing about your private data, and it answers from a fixed snapshot in time. To build a real application you make three design choices: which model to run, how to tune its output with inference parameters, and how to feed it your own data. RAG (Retrieval-Augmented Generation) is the answer to the third: instead of retraining the model, you search your documents at query time and paste the relevant passages into the prompt. The model then answers grounded in your data, with citations you can check.

## The concept

### Choosing a foundation model

> "A foundation model is an Artificial Intelligence model with a large number of parameters and trained on a massive amount of diverse data... Foundation models can generate text or image, and can also convert input into *embeddings*."
> — [Bedrock — Using models, fetched 2026-05-29](https://docs.aws.amazon.com/bedrock/latest/userguide/foundation-models-reference.html)

Selection axes that matter:
- **Output modality** — text, image, or embeddings. Embeddings models are a separate class; you use one to build a knowledge base, then a text model to answer. The console playgrounds don't run inference on embeddings models — that's API-only. [Source 3]
- **Evaluate before committing.** Bedrock has a built-in model-evaluation step "to compare outputs and determine the best model for your use-case." [Source 3]
- **Customization vs. throughput cost.** You can customize (fine-tune) a model, but a customized model requires purchasing **Provisioned Throughput** to use it. [Source 3] That's a real cost signal — fine-tuning isn't free at inference time.

### Inference parameters

These tune the model's output without changing the model. Two families: randomness/diversity, and length. [Source 2]

- **Temperature** — "modulates the probability mass function for the next token. A lower temperature steepens the function and leads to more deterministic responses, and a higher temperature flattens the function and leads to more random responses." [Source 2]
- **Top K** — "The number of most-likely candidates that the model considers for the next token." Top K = 50 → model samples from the 50 most probable next tokens. [Source 2]
- **Top P** (nucleus sampling) — "The percentage of most-likely candidates." Top P = 0.8 → model samples from the smallest set of tokens whose cumulative probability reaches the top 80%. [Source 2]
- **Length controls** — response length (min/max tokens), **penalties** (discourage repetition / frequency / length), and **stop sequences** (model halts when it emits a string you specify). [Source 2]

AWS's own example: prompt "I hear the hoof beats of" with candidates `horses 0.7, zebras 0.2, unicorns 0.1`. High temperature raises the odds of "unicorns"; Top K = 2 drops "unicorns" entirely; Top P = 0.7 keeps only "horses." [Source 2]

### RAG via Knowledge Bases

> "While foundation models have general knowledge, you can further improve their responses by using Retrieval Augmented Generation (RAG). RAG is a technique that uses information from data sources to improve the relevancy and accuracy of generated responses."
> — [Bedrock Knowledge Bases, fetched 2026-05-29](https://docs.aws.amazon.com/bedrock/latest/userguide/knowledge-base.html)

The workflow, in AWS's framing:
1. **Set up a vector store** to index the **vector-embeddings representation** of your data. If you don't bring your own, Bedrock can create an **Amazon OpenSearch Serverless** store for you. [Source 1]
2. **Connect** the knowledge base to a data source (structured or unstructured).
3. **Sync** — ingest the data so changes are immediately accessible.
4. At query time the knowledge base **searches your data**, returns relevant passages, and you **augment your own prompt by feeding the returned relevant information into the prompt.** [Source 1]

Two facts worth holding: RAG responses can **include citations** "so the original data source can be referenced and accuracy can be checked," and a knowledge base can be dropped into a **Bedrock Agents** workflow. [Source 1]

### RAG vs. fine-tuning — the decision boundary

Both inject domain knowledge, but they're different tools:
- **RAG** retrieves at query time. The model weights are untouched. Update the data source and re-sync — the new knowledge is live immediately, no retraining. Best when your knowledge changes often, needs citations, or must stay current. [Source 1]
- **Fine-tuning / customization** bakes patterns into the weights and requires Provisioned Throughput to serve. [Source 3] Best for teaching *style/format/behavior*, not for facts that change weekly.

For most "answer from our documents" apps, RAG is the default. Fine-tuning is for when you need the model to *behave* differently, not just *know* more.

## RCM application

This sub-domain is the exact engineering of the PractiHR autonomy build's first real agent stage: **policy/handbook Q&A from source documents** (see the build→cert map in [001-roadmap.md](../../docs/plans/001-roadmap.md)). That stage is RAG end-to-end — embed the HR handbook + policy docs, retrieve at query time, answer with citations behind an approval gate. The same pattern already exists in RCM as **payer-policy retrieval** (RCMToolKit) — denial workflows that pull the relevant payer rule rather than relying on a model's stale general knowledge. RAG-with-citations is also what makes an answer *defensible* in a compliance setting: you can show the source passage, not just trust the model.

## HIPAA / security posture

- **Privacy and security** is one of AWS's eight responsible-AI dimensions — "Appropriately obtaining, using, and protecting data and models." [Source 4]
- **RAG changes the PHI blast radius.** With RAG, PHI/PII can flow into the prompt at retrieval time even if the base model never trained on it. The data source, the vector store, and the prompt-augmentation step all become PHI-handling surfaces that need encryption, access control, and audit.
- AWS positions **Bedrock Guardrails** to "redact sensitive information" with "consistent safety and privacy controls" across models, and calls out "Protect[ing] sensitive data in RAG applications" as a named responsible-AI practice. [Source 4]
- **Citations are a compliance asset.** The ability to reference the source passage [Source 1] supports the *veracity/robustness* and *transparency* dimensions [Source 4] — you can audit *why* the model said what it said.

## Gotchas

- **RAG ≠ fine-tuning, and the exam tests the boundary.** "Add current company data without retraining + need citations" → RAG. "Change the model's tone/format/behavior" → fine-tuning. The trap answer offers fine-tuning for a problem that's really about fresh, citable facts.
- **Top P vs. Top K are both "diversity" knobs but measure differently.** Top K = a fixed *count* of candidates; Top P = a cumulative *percentage* of the probability mass. Easy to swap on a question.
- **Temperature direction.** Lower = more deterministic (steeper distribution), higher = more random (flatter). For RCM/HR answers you generally want *low* temperature — deterministic, grounded — not creative.
- **Embeddings models are a separate modality.** You need one to build the knowledge base; you can't run them in the console playground (API-only). [Source 3]
- **Fine-tuning carries a Provisioned-Throughput cost** to serve. [Source 3] "Just fine-tune it" is not the cheap default the phrasing implies.
- **Domain 3 is the heaviest domain on AIF-C01** (largest single weighting). [VERIFY: confirm the exact percentage in the exam-guide PDF — the HTML exam-guide URL rendered as a JS shell and did not return task-statement text this session.]

## Skill Builder additions (Task 3.1, full lessons — 2026-05-30)

The `/aiprof` material above covers RAG + inference params from cited docs. The Skill Builder video adds the rest of Task 3.1: how to *choose* a pre-trained model, interpretability vs explainability, the vector-DB service list, and agents.

### Pre-trained model selection criteria
Cost, modality, latency, multilingual, model size, model complexity, customization, input/output length.
- **Cost vs accuracy tradeoff** — e.g. 98% accurate at $100Ks to train vs 97% at $1000s. Depends on requirements; balance training time, cost, performance.
- **Latency / inference speed** — real-time use (self-driving) needs fast inference. A **KNN** model does most work *at inference time* → slow, and bad for high-dimensional problems. Match inference speed to the use case.
- **Architecture by task** — **CNNs** for image recognition, **RNNs** for NLP. Complexity = parameters + layers + operations → affects speed, memory, accuracy. More complex = higher accuracy but more compute/data.
- **Metric choice matters** — accuracy, precision, recall, F1, RMSE, **MAP (mean average precision)**, MAE. Object detection → **MAP** (locate + classify multiple objects). **Accuracy is bad for imbalanced data.** Pick the metric *before* selecting the model.
- **Availability/compatibility** — model hubs (TensorFlow Hub, PyTorch Hub, **Hugging Face**); check framework compatibility, license, docs, maintenance, known issues.

### Interpretability vs explainability (exam distinction)
- **Interpretability = transparency** — explain mathematically (coefficients/formulas) *why* a prediction happened. Only possible if the model is simple.
- **Foundation models are NOT interpretable by design** — too complex, "black boxes."
- **Explainability** — approximate the black box *locally* with a simpler interpretable model. Different from interpretability.
- If interpretability is a hard requirement → use **linear regression or decision trees**, not an FM.

### AWS services that store embeddings in vector databases
Amazon **OpenSearch Service** (+ Serverless vector engine; supports semantic search via BERT embeddings), Amazon **Aurora**, **Redis**, Amazon **Neptune**, Amazon **DocumentDB** (MongoDB compat), Amazon **RDS for PostgreSQL** (**pgvector** extension). A **vector DB requires an ML embedding model** to populate it — the model is a prerequisite. **Knowledge Bases for Amazon Bedrock** = fully managed RAG connecting FMs to your data as embeddings, no FM retraining.

### Agents in multi-step tasks
FMs can answer from pre-trained knowledge but **can't complete real-world tasks** (book a flight, process an order) — those need org-specific data + workflows. **Agents for Amazon Bedrock** orchestrate the prompt→completion workflow: break tasks into steps, generate orchestration logic, **call APIs to take actions**, and invoke knowledge bases to supplement info. An agent = the software layer between user request, FM, and external data/apps.

### Added gotchas
- **KNN does its work at inference time** → slow predictions; wrong for real-time + high-dimensional problems.
- **MAP for object detection, not accuracy.** And accuracy is unreliable on imbalanced datasets (recurring D1/D2/D3 theme).
- **Interpretability ≠ explainability.** Interpretability = inherently understandable (simple models). Explainability = approximating a black box after the fact. FMs get explainability at best, never true interpretability.
- **A vector DB needs an embedding model to fill it** — the ML model is a prerequisite, not an afterthought.
- **Agents = action-taking + orchestration**, not just retrieval. RAG *retrieves*; agents *act* (call APIs). Don't conflate them.

## Sources

1. **[Knowledge Bases for Amazon Bedrock](https://docs.aws.amazon.com/bedrock/latest/userguide/knowledge-base.html)** — fetched 2026-05-29
   - Section: "Retrieve data and generate AI responses with Amazon Bedrock Knowledge Bases"
   - Supports: RAG definition, ingestion/retrieval workflow, OpenSearch Serverless default vector store, citations, agents integration
2. **[Influence response generation with inference parameters](https://docs.aws.amazon.com/bedrock/latest/userguide/inference-parameters.html)** — fetched 2026-05-29
   - Section: "Randomness and diversity" + "Length"
   - Supports: temperature, Top K, Top P, response length, penalties, stop sequences, the horses/zebras/unicorns example
3. **[Using models with Bedrock (foundation models reference)](https://docs.aws.amazon.com/bedrock/latest/userguide/foundation-models-reference.html)** — fetched 2026-05-29
   - Section: intro + "use the model in the following ways"
   - Supports: FM definition, modalities (text/image/embeddings), model evaluation, customization + Provisioned Throughput cost, embeddings playground caveat
4. **[AWS Responsible AI hub](https://aws.amazon.com/ai/responsible-ai/)** — fetched 2026-05-29
   - Section: dimensions of responsible AI + RAG data-protection note
   - Supports: eight responsible-AI dimensions, Guardrails redaction, "protect sensitive data in RAG applications"
   - *Eight dimensions verbatim:* fairness; explainability; privacy and security; safety; controllability; veracity and robustness; governance; transparency.

**Fetch failure:** AIF-C01 exam guide (`https://docs.aws.amazon.com/aws-certification/latest/examguides/ai-practitioner-01.html`) returned only a page title — JS-rendered listing, no task-statement body. Verbatim Task 3.1 wording and the exact Domain 3 percentage are **unconfirmed this session**; verify against the exam-guide PDF before treating them as fetched fact.

## Next moves (for the reader, not for the skill)

- `/brainstorm d3-1-rag-and-foundation-model-app-design` — internalize via Socratic dialogue (7 lenses, incl. Security Officer + Cloud Engineer for the PHI/RAG overlay)
- `/quiz aif-c01 rag` — test recall + recognition once internalized
