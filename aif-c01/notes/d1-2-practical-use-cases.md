# Practical Use Cases for AI

**Exam-guide ref:** AIF-C01 — Domain 1 (Fundamentals of AI and ML) — Task 1.2
**Status:** Notes from Skill Builder video (own words — pending internalization via `/brainstorm`)
**Lesson date:** 2026-05-29
**Source:** Skill Builder "Domain 1 Review", Task 1.2 Lessons 1–5 (transcript in gitignored scratch)
**Covers:** All 5 lessons. L1: when to use AI vs not (cost-benefit, interpretability, deterministic vs probabilistic). L2: ML problem types (classification / regression / clustering / anomaly). L3–4: the AWS managed AI service catalog. L5: real-world case studies.

## Plain-English statement

Two judgment calls and one vocabulary set. **When is AI the right tool** (and when a rule-based system beats it)? **What kind of ML problem is this** (classification vs regression vs clustering vs anomaly)? Then a **catalog of AWS managed AI services** — the exam tests these as "which service for this scenario." Know the catalog cold; that's most of the points in this task.

## When to use AI — and when not (Lesson 1)

**Use AI when:**
- Tasks are **repetitive / tedious** — AI runs all day, every day, no performance drop.
- You must analyze **vast data at high velocity** beyond human capacity.
- **Pattern recognition** is the core need — fraud detection, demand forecasting, reducing waste.

**Don't use AI when:**
- **Cost exceeds benefit.** Training/retraining is resource-heavy. Set dollar targets (fraud/waste reduction), estimate model cost; if cost > savings, don't proceed.
- **You need full transparency / explainability.** Complex neural nets have low **interpretability** — you can't fully explain *why* they predicted what they did. Compliance/regulated decisions (loan approval) may demand transparency.
- **You need determinism.** See below.

### Interpretability vs performance tradeoff
Complex models = higher performance but **lower interpretability**. If transparency is a business/compliance requirement, you must use a **less complex model** → usually **lower performance**. Sometimes the right answer is **no AI at all** — a rule-based system.

### Deterministic vs probabilistic (key exam distinction)
| | **Rule-based system** | **ML model** |
|---|---|---|
| Output for same input | **same every time** = **deterministic** | varies = **probabilistic** |
| Behavior | fixed rules (e.g. credit score > 750 → auto-approve ≤ $10k) | learns, adapts, incorporates randomness |
| When to choose | **determinism required**, full transparency | pattern problems, tolerate probabilistic output |

If determinism is necessary → **rule-based, not ML.**

## ML problem types (Lesson 2)

The decision tree the exam wants you to run:

```
Is the data LABELED (inputs + known target outputs)?
├─ YES → SUPERVISED
│        ├─ target is CATEGORICAL/discrete → CLASSIFICATION
│        │        ├─ 2 mutually exclusive classes → BINARY (disease/not, fish/not-fish)
│        │        └─ several classes → MULTICLASS (doc: religion/politics/finance)
│        └─ target is CONTINUOUS (math) → REGRESSION
└─ NO  → UNSUPERVISED
         ├─ separate into discrete groups → CLUSTERING (customer segments)
         └─ spot rare outliers → ANOMALY DETECTION (failed sensor, fraud)
```

**Regression flavors:**
- **Simple linear regression** — one independent variable (weight → height).
- **Multiple linear regression** — several independent variables (weight + age; house price from bedrooms/baths/sqft).
- **Logistic regression** — predicts **probability of an event, 0 to 1** (0 = unlikely, 1 = max likely). Uses logarithmic functions; one or many independent variables. Examples: heart-disease risk from BMI/smoking/genetics; fraud/not-fraud.
- Both linear and logistic regression need **significant labeled data**.

**Clustering setup:** define the features, pick a **distance function** (similarity measure), specify the **number of clusters**. Members similar within a group, different across groups.

## The AWS managed AI service catalog (Lessons 3–4)

These are **pre-trained, API-accessible, pay-as-you-go** — try these *before* building a custom model. Map scenario → service:

| Service | Domain | What it does | Tell-tale scenario |
|---|---|---|---|
| **Rekognition** | Computer vision | images + video (incl. streaming): face recognition, object detect/label, text-in-image, content moderation | "identify a face / detect objects / filter explicit content in images or video" |
| **Textract** | Document | extract text, **handwriting, forms, tables** from scanned docs (more than OCR) | "pull data out of scanned documents/forms" |
| **Comprehend** | NLP | insights/relationships in text: **sentiment**, **PII detection** (with confidence score + threshold) | "analyze sentiment / find PII in text" |
| **Lex** | Conversational | voice + text bots (Alexa tech): chatbots, IVR call routing | "build a chatbot / replace IVR" |
| **Transcribe** | Speech→text | ASR, 100+ languages, live + recorded; real-time captioning | "transcribe / caption audio" |
| **Polly** | Text→speech | natural speech synthesis (deep learning), dozens of languages; accessibility | "read articles aloud / IVR prompts / visually-impaired access" |
| **Kendra** | Search | ML **intelligent enterprise search**, NLP question understanding | "search internal docs by natural-language question" |
| **Personalize** | Recommendations | personalized recs + customer segmentation (retail/media) | "'you might also like' / recommend products" |
| **Translate** | Translation | 75 languages, context-aware neural translation | "translate text / real-time chat translation" |
| **Fraud Detector** | Fraud | pre-trained fraud models: payments, fake accounts, account takeover | "detect online fraud / fake accounts" |
| **Bedrock** | Generative AI | **fully managed gen-AI**; pick FMs (Amazon/Meta/startups); customize via own data or **knowledge base = RAG**; Titan Image Generator | "build a gen-AI app / use a foundation model" |
| **SageMaker** (family) | Custom ML | when prebuilt services aren't enough: prepare/build/train/deploy custom models, GPU training, real-time endpoints; JumpStart pre-trained starting points | "build/train a custom model / full ML control" |

**Decision ladder (cheap → expensive):** managed AI service (e.g. custom Comprehend classifier) → start from an existing model and fine-tune (Bedrock FM, SageMaker JumpStart) → **train from scratch** (most costly, most security/compliance responsibility).

- **Textract + Comprehend pair up:** Textract extracts text → Comprehend runs sentiment/PII on it.
- **PII removal flow:** Comprehend returns a confidence score per entity; set a **minimum confidence threshold** to auto-remove.

## Real-world case studies (Lesson 5)

Exam tests these as scenario → service. The pattern:

| Company | Problem | Service(s) | Outcome / pattern |
|---|---|---|---|
| **MasterCard** | transaction fraud scoring | **SageMaker** (model), then **gen-AI/LLM** (2024) | 3× more fraud detected, 10× fewer false positives; LLM uses txn history as prompt → +20% |
| **DoorDash** | frustrating touch-tone IVR | **Lex** (NLP voice) | speak instead of press; lower hold times, more self-service |
| **Laredo Petroleum** | monitor 1,300+ oil/gas wells | **SageMaker** + data streaming | real-time sensor monitoring, predictive maintenance, leak detection, less flaring |
| **Booking.com** | booking recs at 150PB scale | **SageMaker** + gen-AI **AI Trip Planner** | NL planner calls recommendation API + reviews → **RAG** |
| **Pinterest** | visual product search (Lens) | **S3** + **Mechanical Turk** + **Ground Truth** + SageMaker | labeled images in S3, frequent retraining on new objects |

## Gotchas

- **Deterministic = rule-based; probabilistic = ML. Same input, same output → rule-based.** If a scenario demands repeatable/identical results or full auditability, the answer is a **rule-based system, not ML.** This is a favorite trap.
- **Interpretability vs performance is a tradeoff, not a free lunch.** Want transparency (regulated loan decisions)? Accept a simpler, lower-performance model. A question implying you get both from a complex neural net is wrong.
- **"AI isn't always the answer."** Cost-benefit gate: if model cost > the savings target, don't build it. The exam rewards the answer that declines AI when it doesn't pay off.
- **Labeled-or-not is the first fork in problem-typing.** Labeled → supervised (then categorical=classification, continuous=regression). Unlabeled → unsupervised (cluster=group, anomaly=outlier). Run this fork first.
- **Binary vs multiclass:** exactly 2 mutually exclusive classes = binary; 3+ = multiclass. Don't call fish/not-fish "multiclass."
- **Logistic regression outputs a probability (0–1), not a category by itself** — it's still *regression* in name even though it's used for classification-style yes/no. Watch the trap that calls it "classification algorithm" without nuance.
- **Match service to modality:** images/video → Rekognition; scanned docs/forms → Textract; text insight/sentiment/PII → Comprehend; speech→text → Transcribe; text→speech → Polly; enterprise search → Kendra; recs → Personalize; translation → Translate; fraud → Fraud Detector; gen-AI → Bedrock; custom model → SageMaker. Mixing these up is the most common D1.2 miss.
- **Textract is "more than OCR"** — it gets forms, tables, handwriting. A question contrasting it with plain OCR wants Textract for structured extraction.
- **Bedrock = managed gen-AI with FMs + RAG; SageMaker = build-your-own custom ML.** Don't swap them. "Foundation model / gen-AI app" → Bedrock. "Train a custom model end-to-end" → SageMaker.
- **Ground Truth + Mechanical Turk = labeling (supervised only).** Pinterest's pattern: S3 stores labeled images, Ground Truth + Mechanical Turk label, retrain frequently.
