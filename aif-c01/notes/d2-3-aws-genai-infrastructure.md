# AWS Infrastructure & Technologies for Generative AI

**Exam-guide ref:** AIF-C01 — Domain 2 (Fundamentals of Generative AI) — Task 2.3
**Status:** Notes from Skill Builder video (own words — pending internalization via `/brainstorm`)
**Lesson date:** 2026-05-30
**Source:** Skill Builder "Domain 2 Review", Task 2.3 Lessons 1–2 (transcript in gitignored scratch/domain-2)
**Covers:** Both lessons. L1: AWS advantages, transfer learning, the 3-layer gen-AI stack + security. L2: pricing/cost tradeoffs, Bedrock/JumpStart/Titan/PartyRock, vector databases.

## Plain-English statement

Most teams won't train or host their own LLM — too expensive. AWS sells you the layers instead: **chips and compute** at the bottom, **model access (Bedrock, SageMaker)** in the middle, **applications** on top. This task is the AWS service map for building gen AI — what each service does, how the infrastructure stays secure + highly available, and the **cost tradeoffs** (host-it-yourself vs pay-per-token).

## Why build on AWS (Lesson 1)

- **Advantages:** accessibility, lower barrier to entry, efficiency, cost-effectiveness, speed to market, meeting business objectives.
- **Transfer learning** — fine-tune a *pre-trained* model on a new dataset instead of training from scratch → accurate models with **smaller data + less time**. The model already "knows" general things; it just maps them to your new data.
- **SageMaker JumpStart** — pre-built projects/quick builds (datasets, models, algorithms, solutions) on industry best practices.
- **CAF-AI** (Cloud Adoption Framework for AI/ML/Gen AI) — strategy guide for your AI journey.

## The three-layer gen-AI stack (Lesson 1) — exam structure

| Layer | What's there | Examples |
|---|---|---|
| **Bottom** — build/train infra | chips + compute for training/inference, guardrails; price-vs-performance | **Nitro System**, **Inferentia**, **Trainium**, GPU instances (P4/P5/G5/G6) |
| **Middle** — model access + tooling | access all models, build + scale gen-AI apps; train/tune FMs | **Bedrock**, **SageMaker** |
| **Top** — applications | apps using LLMs/FMs to write code, generate content, derive insights, act | dashboards, **RAG** apps, prompt-engineering FMs |

- **AWS Nitro System** — specialized hardware + firmware enforcing security: **no one can access your workloads/data** on EC2 (incl. Inferentia/Trainium/GPU instances). Securing AI infra = **zero access** to model weights + processed data by anyone unauthorized.

## Security: the 3 components + the AI-specific threats (Lesson 1)

- **Three critical components of any AI system: input, model, output.** Protect each with policies, standards, roles.
- **AI-specific vulnerabilities:** **prompt injection**, **data poisoning**, **model inversion**. Risks: privacy breaches, data manipulation, abuse, compromised decisions.
- Controls: encryption, MFA, continuous monitoring, alignment to frameworks.

## Cost + pricing (Lesson 2)

Two LLM pricing models:
- **Host on your own infra** — pay for compute + maybe a license fee; you own infrastructure investment + maintenance.
- **Pay-by-token** — priced by tokens processed (a token = a char/word, or a pixel; input *and* output count). How vendors price API calls. AWS pay-by-token **adds scalability**.

- **AWS Global Infrastructure** — Regions, Availability Zones, edge locations → high availability + fault tolerance (globally / regionally / AZ-resilient).
- **Cost discipline:** JumpStart models need **GPUs** — **delete endpoints when idle**, follow cost-monitoring. Bedrock is **pay-for-what-you-use, no time-based commitment**.

## The key AWS gen-AI services (Lesson 2)

- **Amazon Bedrock** — managed service, access many FMs via **API**: AWS-curated + third-party (**Cohere, Stability AI**). Build gen-AI apps at scale without building FMs from scratch. Can **import custom weights** + serve on-demand.
  - **Playgrounds** — experiment running inference against different base FMs to pick the best fit; the chosen model sets which **inference parameters** you can tune.
  - **Model evaluation** — built-in comparison to pick the right model.
- **Amazon Titan** — Amazon's own general-purpose FM, good for text generation.
- **SageMaker JumpStart** — model hub; deploy/fine-tune FMs, get to production at scale.
- **PartyRock** — a playground *built on Bedrock* for learning gen-AI fundamentals (playlists, trivia, recipes).
- **Vector databases** — store data as **embeddings** (vectors), compressed + indexed for advanced (similarity) search. The backbone of RAG.

## Gotchas

- **Three-layer stack — know which layer a service is in.** Chips (Nitro/Inferentia/Trainium/GPU) = bottom. Bedrock/SageMaker = middle. Your app/RAG = top.
- **Bedrock = managed API access to *many* FMs (incl. third-party); SageMaker = build/host your own.** "Access Cohere/Stability/Titan via API, no infra" → Bedrock. "Train/host a custom model" → SageMaker/JumpStart.
- **Pay-by-token vs self-host is the core cost question.** Pay-by-token = scalable, no infra burden, pay per use (Bedrock). Self-host = infra + license cost + maintenance. Tokens count input *and* output.
- **Inferentia = inference chip, Trainium = training chip.** The names tell you which. Both are Nitro-based; Nitro = the security layer (zero access to your data).
- **Delete idle SageMaker/JumpStart endpoints** — they run on GPUs and bill continuously. Classic cost-trap question.
- **AI-specific threats: prompt injection, data poisoning, model inversion.** Map them: injection = malicious prompt; poisoning = corrupt training data; inversion = extract training data/weights from outputs.
- **PartyRock is for *learning*, built on Bedrock — not a production service.** Don't pick it as a production deployment answer.
- **Embeddings in a vector DB = the RAG backbone.** Connects to D2.1 embeddings and the orphaned d3-1 RAG notes.
