# AI Concepts & Terminology

**Exam-guide ref:** AIF-C01 — Domain 1 (Fundamentals of AI and ML) — Task 1.1
**Status:** Notes from Skill Builder video (own words — pending internalization via `/brainstorm`)
**Lesson date:** 2026-05-29
**Source:** Skill Builder "Domain 1 Review", Task 1.1 Lessons 1–5 (transcript in gitignored scratch)
**Covers:** All 5 lessons of Task 1.1. L1: AI/ML/DL definitions + nesting, inference, capability/use-case catalog. L2: how ML training works (features, parameters, inference) + four data types and storage. L3: model artifacts + deployment, real-time vs batch inference, the three learning styles. L4: model quality problems — overfitting, underfitting, noise, bias, fairness. L5: deep learning + neural networks, traditional ML vs deep learning, transformers + LLMs/generative AI.

## Plain-English statement

AI is the broad field of getting computers to do things we associate with human thinking — learning, recognizing, creating. ML is one approach inside AI: learn the rules from data instead of being programmed with them. Deep learning is one kind of ML that stacks layers of neural networks. The three nest: **AI ⊃ ML ⊃ Deep Learning.** Everything past that in this lesson is a catalog of *what AI does* (forecast, detect anomalies, see images, read language, generate content) — vocabulary the exam tests by example.

## The nesting (the one thing worth drawing in your head)

```
AI            field of CS: solve cognitive problems, derive meaning from data
 └─ ML        learn from data + algorithms, accuracy improves with more data
     └─ Deep Learning   layered neural networks, brain-inspired (speech, vision)
```

- **AI** — field of computer science aimed at cognitive problems (learning, creation, image recognition). Goal: a self-learning system that derives meaning from data.
- **ML** — branch of AI/CS. Uses data + algorithms to imitate how humans learn; accuracy improves as it trains on large datasets. Finds patterns, makes predictions. Example: product recommendation for an online shopper.
- **Deep learning** — a *type* of ML. Layers of neural networks, inspired by the human brain. Strong at speech recognition and recognizing objects in images.

## Core terms

- **Inference** — a prediction the model makes. Key framing AWS uses: an inference is "basically an educated guess" — the result is **probabilistic**, not certain. (This is exam-bait — see Gotchas.)
- **Regression analysis** — technique where the model processes historical / **time-series data** to predict future values. Example: forecasting how many customers a store will have on a future day, to staff for it.
- **Anomaly detection** — because AI learns the expected pattern, it can flag a *deviation* from it. Example: call-center volume follows a predictable daily shape; a sudden drop (app went offline) is an anomaly AI flags to IT.

## What AI does — the capability catalog (tested by example)

The exam likes to give you a scenario and ask which capability it is. Map them:

| Capability | What it does | Tell-tale example from the lesson |
|---|---|---|
| **Forecasting / regression** | predict future values from history | staffing for predicted customer count; taxi pre-positioning; demand forecasting |
| **Anomaly detection** | flag deviation from learned pattern | fraud (MasterCard); call-volume drop → IT alert |
| **Computer vision** | process images/video — identify, classify, detect, monitor, recognize faces | scratch detection (red box); missing capacitor on a circuit board; X-ray reading |
| **Machine translation** | language → language, meaning-aware (not word-for-word) | real-time English↔Spanish support chat |
| **NLP** | understand, interpret, *and generate* human language | Alexa; hotel-booking chatbot |
| **Generative AI** | create original content — text, images, video, music | Bedrock prompt "generate a song from these lyrics" → full song |

## Industry/use-case examples worth remembering

- **Medical** — read X-rays/scans, assist diagnosis; CDC predicts outbreaks + allocates resources.
- **Manufacturing** — computer vision on assembly lines for quality; sensor data → predictive maintenance (fix before failure).
- **Retail / media** — recommendations from history (Discovery = content recs; TicketTek = event recs); targeted promos that avoid spamming.
- **Finance** — anomalous-transaction fraud detection (MasterCard).
- **HR** — screen resumes, match candidates to roles.

## How ML training actually works (Lesson 2)

ML = developing algorithms and statistical models that perform complex tasks **without explicit instructions** — it learns the rules from data instead of being coded with them. The loop:

1. Start with a **mathematical algorithm** that takes inputs → produces an output.
2. Feed it **known data** made of **features** (the columns in a table, or the pixels in an image).
3. The model's job: find the correlation between input features and the known expected output (when one is available).
4. **Training = adjusting internal parameter values** until the model reliably reproduces the expected output.
5. A trained model then makes predictions on **new data it never saw in training** — that's **inference**.

**Linear-regression worked example** (the lesson's anchor): predict height from weight. Equation `h = mw + b` — `w` is the independent variable (input), `h` the dependent variable (output). `m` (slope) and `b` (intercept) are the **model parameters**, adjusted iteratively during training. "Best fit" = the parameter values that **minimize the errors**, where error = distance between each data point and the line. Training done → model infers a person's height from their weight.

- **features** = the inputs (table columns / image pixels).
- **parameters** = the internal values training tunes (e.g. `m`, `b`). Don't confuse the two — features are data you supply, parameters are what the model learns.

## The four data types and where they live

| Type | What it is | Examples | Stored / queried in | Feature source |
|---|---|---|---|---|
| **Structured** | rows in a table with columns; easiest to process | CSV, relational DBs | Amazon RDS, Amazon Redshift; queried with **SQL** | columns = features |
| **Semi-structured** | doesn't fully follow tabular rules; elements can have different or missing attributes | JSON (key-value pairs) | Amazon **DynamoDB**, Amazon **DocumentDB** (MongoDB-compatible) | key-value pairs |
| **Unstructured** | no data model, can't be tabled | images, video, text, social posts | object storage = Amazon **S3** | derived from objects via processing, e.g. **tokenization** |
| **Time series** | records labeled with a **timestamp**, stored sequentially; for predicting future trends | microservice metrics (memory, CPU %, TPS) | Amazon **S3** (can get large) | the timestamped sequence |

**S3 is the through-line.** Whatever the source type, for *model training* the data gets **exported into Amazon S3**. S3 is the primary training-data source: stores any type, low cost, virtually unlimited capacity.

- **Tokenization** = breaking text into individual units (words/phrases) — the technique that turns unstructured text into features.

## From trained model to deployed model (Lesson 3)

Training produces **model artifacts** = trained parameters + a **model definition** (how to compute inferences) + other metadata. Artifacts are normally stored in **S3**. To deploy: package the artifacts with **inference code** (the software that implements the model by reading the artifacts) → a deployable model.

### Two hosting options for inference

| | **Real-time inference** | **Batch inference** |
|---|---|---|
| Shape | persistent **endpoint**, always available | scheduled/offline **batch job** |
| Best for | low latency, high throughput, sustained request flow | large data available upfront, results can wait |
| Compute | resources **always running** | resources run only during the batch, then **shut down** |
| Cost angle | pay for always-on | more **cost-effective** when you can wait |
| Example | live request → quick inference back | monthly inventory forecast from historical sales → report |

The discriminator: **always-on endpoint (real-time)** vs. **spin-up, process, shut-down (batch)**.

### The three learning styles

| Style | Labeled data? | What it does | AWS hook / example |
|---|---|---|---|
| **Supervised** | **Yes** — pre-labeled (input *and* desired output) | learns to map input → known output; e.g. image classification (fish / not-fish) | labeling is the bottleneck → **SageMaker Ground Truth** (uses **Mechanical Turk** crowdsourcing) |
| **Unsupervised** | **No** | finds patterns, clusters, groups; no specified outputs | anomaly detection (failing oil-well sensor), clustering network traffic for security; easy setup, can also clean/prep data |
| **Reinforcement** | **No** (but has a goal) | agent takes actions in an environment, learns by **trial and error**, rewarded for moving toward the goal | **AWS DeepRacer** — car = agent, track = environment, action = move forward, goal = finish efficiently |

**Key distinction the lesson hammers:** unsupervised and reinforcement *both* run without labels, but —
- **Unsupervised** has **no specified output** at all. It just finds structure.
- **Reinforcement** has a **predetermined end goal**. It explores, but explorations are continuously validated/improved to raise the probability of reaching that goal. It must sometimes take non-rewarding actions to keep learning (exploration vs. exploitation).

Supervised output note: classification gives a **probability** (e.g. "probability this image is a fish"), not a hard yes/no — inferences aren't always accurate.

## Model quality problems (Lesson 4)

### Overfitting vs underfitting — the fit spectrum

```
UNDERFIT  ────────────  SWEET SPOT  ────────────  OVERFIT
too little training /     model generalizes        too much training /
too little data           well to new data         memorized noise
bad on BOTH train         good on train            great on TRAIN,
  and new data            AND new data             bad on NEW data
```

- **Overfitting** — model performs **better on training data than on new data**. It fit the training data *too well*, so a slightly different input (the "fish out of water") gets a low probability. Causes: training too long → the model starts emphasizing **noise** (unimportant features). **Fix: train on more diverse data.**
- **Underfitting** — model **can't find a meaningful relationship** between input and output. Gives inaccurate results on **both** training data and new data. Causes: not trained long enough, or dataset too small.
- **The sweet spot** — data scientists tune **training time** to sit between the two: long enough to not underfit, not so long it overfits. Training-time is the dial.
- **Noise** = unimportant features the model wrongly latches onto. Over-training amplifies noise → a form of overfitting.

### Bias and fairness

- **Bias** = disparities in model performance **across different groups** — results skewed for or against an outcome for a particular class.
- **Root cause is the data.** Loan-approval example: if training data has no approved applications from "25-year-old women in Wisconsin," the model learns to reject that group even when income/job-history would qualify them. Quality depends on **data quality + quantity**.
- **Fixes:**
  - Data scientists can **adjust the weight** of features introducing noise — e.g. **remove gender** from the model's consideration entirely.
  - **Identify fairness constraints up front** (age, sex discrimination) *before* building the model.
  - **Inspect training data** for bias, and **continually evaluate** model results for fairness (not a one-time check).

## Deep learning, neural networks & generative AI (Lesson 5)

### How a neural network is built

Deep learning = ML that uses **neural networks**, modeled on the brain (neurons → software **nodes**). Structure:

```
INPUT layer  →  HIDDEN layers (several)  →  OUTPUT layer
  features         nodes assign weights        prediction
                   per feature
   ────────────  forward flow: input → output  ────────────►
   ◄──  training: compare predicted vs actual, adjust weights to minimize error  ──
```

- Each **node autonomously assigns weights** to each feature.
- Information flows **forward** (input → output) to make a prediction.
- **During training**: compute the difference between predicted and actual output, then **repeatedly adjust the neurons' weights to minimize the error.** (Same minimize-error idea as linear regression in L2, but learned across layers.)

### Traditional ML vs deep learning — when to use which

| | **Traditional ML** | **Deep learning** |
|---|---|---|
| Algorithm | statistical algorithms | statistical algorithms **+ neural networks** |
| Best data | **structured + labeled** | **unstructured** (images, video, text) |
| Feature work | you select/extract features | **self-learns features** — extracts them on its own |
| Example tasks | classification, recommendation, **churn prediction** | image classification, NLP, **sentiment analysis** |
| Cost | lower | **significantly higher** infra (needs millions of examples) |

Key line: **both use statistical algorithms, but only deep learning uses neural networks.** Deep learning's win is auto feature-extraction; its cost is compute. The choice is driven by **the type of data** you need to process.

Why deep learning took off: the *concept* is old, but the **compute wasn't viable until low-cost cloud computing**. Now NNs are the standard approach to computer vision.

### Generative AI & transformers

- Gen AI = **deep learning models pre-trained on extremely large datasets** of text strings (called **sequences**).
- They use **transformer neural networks**: turn an **input sequence (the prompt)** into an **output sequence (the response)**.
- **Key transformer advantage:** plain neural networks process a sequence **one word at a time (sequentially)**; transformers process it **in parallel** → faster training, much bigger datasets usable.
- **LLMs** contain **billions of features** capturing broad human knowledge → very flexible: summarize long articles, generate human-like text, translate, write stories/poetry, even write code.
- AWS hooks: **Amazon Bedrock** (managed gen-AI), **PartyRock** (`partyrock.aws`) — free build-your-own-AI-app sandbox.

## Gotchas

- **Inference = probabilistic, not deterministic.** AWS frames it as "an educated guess." If a question implies AI gives a guaranteed/exact answer, that's the trap — outputs are probabilistic.
- **AI ⊃ ML ⊃ Deep Learning is a strict nesting, and the exam tests the direction.** Deep learning is a *subset* of ML; ML is a *subset* of AI. "All deep learning is ML" is true; "all ML is deep learning" is false. Don't let a distractor flip it.
- **NLP includes generation, not just understanding.** The lesson says "understand, interpret, *and generate*." Easy to mis-scope NLP as input-only and confuse it with generative AI. NLP is the broader language capability; chatbots/Alexa sit on it.
- **Regression is tied to time-series / historical data here.** If a scenario says "predict a future number from past values," reach for regression/forecasting — not classification, not anomaly detection.
- **Computer vision is the umbrella for detect/classify/recognize-faces/monitor** — a scenario naming any of those on images/video is CV, even if it doesn't say "computer vision."
- **Generative AI is framed as "the next step" beyond traditional AI** — creates *original* content. The discriminator vs. the rest of the catalog: those analyze/predict; generative *produces* new artifacts.
- **Features vs. parameters — don't swap them.** Features are the *inputs you supply* (columns, pixels). Parameters are the *internal values training adjusts* (slope `m`, intercept `b`). A question that calls the learned values "features" is wrong.
- **S3 is the training-data answer regardless of source type.** Structured lives in RDS/Redshift, semi-structured in DynamoDB/DocumentDB — but for *training*, it all exports to S3. If a question asks "where do you put data to train," the answer is S3, not the source DB.
- **Match the data type to its store (common distractor pairing):** JSON/key-value → DynamoDB or DocumentDB (semi-structured), *not* RDS. RDS/Redshift + SQL → structured. Images/video/text objects → S3 (unstructured). Timestamped sequential → time series.
- **Semi-structured ≠ unstructured.** Semi-structured (JSON) still has structure — keys/attributes — they're just inconsistent/optional. Unstructured (image, raw text) has *no* data model at all. The "different or missing attributes" phrasing signals semi-structured.
- **Training adjusts parameters to *minimize error*; inference is on *unseen* data.** Two traps: (1) error = distance between data points and the fitted line, minimized during training; (2) inference by definition runs on data the model did *not* see in training.
- **Real-time vs batch is decided by latency tolerance + cost, not data size alone.** Always-on endpoint = real-time (low latency, pay for idle). Spin-up/shut-down job = batch (cheaper, but you wait). "Results can wait / runs on a schedule" → batch. "Quick response per request" → real-time.
- **Supervised needs labels; unsupervised and reinforcement do not.** The label question is the fastest classifier. Pre-labeled input+output → supervised. No labels, just find structure → unsupervised. No labels but a goal + reward → reinforcement.
- **Unsupervised vs reinforcement — the differentiator is the goal, not the labels.** Both are label-free. Unsupervised has *no specified output*; reinforcement has a *predetermined end goal* it explores toward. Anomaly detection / clustering → unsupervised. Agent + environment + reward → reinforcement.
- **SageMaker Ground Truth + Mechanical Turk = the labeling answer, and labeling only matters for *supervised* learning.** If a question pairs Ground Truth with unsupervised/reinforcement, that's the trap — those don't need labels.
- **Anomaly detection shows up twice — pin it to unsupervised here.** L1 listed anomaly detection as a capability; L3 says unsupervised learning is "commonly used for anomaly detection." For a learning-style question, anomaly detection → unsupervised.
- **Model artifacts ≠ deployable model.** Artifacts (trained parameters + model definition + metadata, in S3) only become deployable when packaged with **inference code**. A question implying artifacts alone serve requests is wrong.
- **Overfitting vs underfitting — read the train-vs-new gap.** Good on training, bad on new = **overfit** (memorized, incl. noise). Bad on *both* = **underfit** (never learned the relationship). The discriminator is the *gap* between training and new-data performance.
- **Overfitting fix = more diverse data; underfitting fix = more training/data.** Don't swap them. "Add diverse examples" → overfit. "Train longer / bigger dataset" → underfit. And training *too* long itself causes overfitting (noise) — that's the tension behind the "sweet spot."
- **Noise = unimportant features, and over-training amplifies it → overfitting.** If a question says the model "emphasizes unimportant features" or "fits training data too well," that's noise/overfitting.
- **Bias is a *data* problem, surfacing as group disparity.** The fix isn't a better algorithm — it's better/more-representative data, dropping/down-weighting offending features (e.g. gender), and defining fairness constraints up front. Fairness checking is **continual**, not one-time.
- **Only deep learning uses neural networks.** Both traditional ML and DL use statistical algorithms — the neural network is the DL-only discriminator. A question saying "traditional ML uses neural networks" is wrong.
- **Structured/labeled → traditional ML; unstructured → deep learning.** Churn from tabular history = traditional ML. Image/text/sentiment = deep learning. The data type drives the choice.
- **Deep learning self-extracts features; that's its headline advantage — and its cost is compute.** "Don't need to hand-select features" → deep learning. But it needs millions of examples and costs significantly more. Don't pick DL when traditional ML on structured data would be cheaper and sufficient.
- **Transformers ≠ plain neural networks: parallel vs sequential.** The exam-relevant transformer fact is **parallel sequence processing** (faster training, bigger datasets). Plain NNs go one word at a time. Prompt = input sequence, response = output sequence.
- **Generative AI is built *on* deep learning (transformers).** The nesting extends: AI ⊃ ML ⊃ Deep Learning ⊃ (transformers → LLMs → generative AI). Gen AI isn't a separate branch from ML — it's a deep-learning application.
