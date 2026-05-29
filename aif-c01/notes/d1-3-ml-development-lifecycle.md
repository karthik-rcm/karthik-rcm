# The ML Development Lifecycle

**Exam-guide ref:** AIF-C01 — Domain 1 (Fundamentals of AI and ML) — Task 1.3
**Status:** Notes from Skill Builder video (own words — pending internalization via `/brainstorm`)
**Lesson date:** 2026-05-29
**Source:** Skill Builder "Domain 1 Review", Task 1.3 Lessons 1–7 (transcript in gitignored scratch)
**Visual:** `scratch/visuals/ml-lifecycle.html` (gitignored scratch — built 2026-05-29; promote to `aif-c01/visuals/` on Karthik's OK). Pipeline stages + AWS services per stage + the iterative loop.
**Covers:** All 7 lessons. L1: pipeline overview + business goal + model-sourcing ladder. L2: collect/prep data + AWS data services. L3: train/tune/evaluate. L4: deploy + four inference options. L5: monitor + drift + MLOps. L6: MLOps repos/orchestration + classification metrics. L7: AUC/ROC, regression metrics, business metrics.

## Plain-English statement

The ML pipeline runs from a **business goal** to a **deployed, monitored model**, and it's a **lifecycle** — you loop back and retrain forever. Six stages: define the problem → collect/prep data → train → tune/evaluate → deploy → monitor. Each stage has AWS services attached (mostly SageMaker). Two heavy exam areas live here: the **four SageMaker inference options** and the **evaluation metrics** (confusion matrix, precision/recall/F1, AUC, MSE/RMSE/MAE). Plus **drift** and **MLOps**.

## The pipeline (and why it's a *lifecycle*)

```
① Business goal → ② Collect & prep data → ③ Train → ④ Tune & evaluate → ⑤ Deploy → ⑥ Monitor
                              ▲                                                          │
                              └──────────────  retrain on drift / new data  ────────────┘
```

Models are **dynamic**: retrained with new data, evaluated against performance *and* business metrics, monitored for drift/bias, rebuilt as needed. Parts (or all) repeat after deployment — that's why it's a lifecycle, not a one-shot pipeline.

## ① Define the business goal (Lesson 1)

- Start with a **clear problem + business value**, measured against **specific success criteria**. No success criteria → can't evaluate the model or even decide if ML is right.
- Align stakeholders. Target must be **achievable with a clear path to production**.
- Decide if ML is even the right approach (vs rule-based — see D1.2). Weigh accuracy, **cost, scalability**. Start with the **simplest solution**; add complexity only if needed. Do a **cost-benefit analysis** before proceeding.

### Model-sourcing ladder (cheap → expensive — exam favorite)
1. **Managed AI service** (pay-as-you-go, fully trained + hosted). Many allow customization — e.g. **Comprehend custom classifier** with your categories/data.
2. **Start from an existing model and fine-tune** — **Bedrock** foundation model fine-tuned with your data via **transfer learning**; **SageMaker JumpStart** pre-trained CV/NLP models (fine-tune via incremental training = **transfer learning**). Big cost/time savings vs scratch.
3. **Train from scratch** — most difficult, most costly, **most security/compliance responsibility.**

## ② Collect & prepare data (Lesson 2)

- Know the data source + whether it's **streaming or batch**. Configure **ETL (extract, transform, load)** into a centralized repo. Process must be **repeatable** (frequent retraining).
- **Labeling is often the longest step** — accurate labels rarely already exist.
- **Data prep = preprocessing + feature engineering.** EDA (exploratory data analysis) with viz tools; data wrangling. Filter/repair missing/anomalous values; **mask/remove PII**.
- **Data split: ~80% train / 10% evaluation / 10% final test.**
- **Feature selection:** keep only features relevant to minimizing error; combining features reduces count → less memory/compute.

### AWS data services
| Service | Role |
|---|---|
| **AWS Glue** | fully managed **ETL**; discovers data, generates transform/load code; built-in transforms (drop dupes, fill missing, split); reads relational/warehouse/streaming (MSK/Kafka, Kinesis) |
| **Glue Data Catalog** | stores **metadata only** (location + schema + runtime metrics), *not* the source data; **crawlers** auto-detect schema via classifiers |
| **Glue DataBrew** | **visual, no-code** data prep; 250+ transforms; **recipes** to reuse steps; data-quality rule sets + profiling |
| **SageMaker Ground Truth** | build labeled datasets; **active learning** auto-labels what it can, humans do the rest (**Mechanical Turk** 500k+ workers, or private workforce) |
| **SageMaker Canvas / Data Wrangler** | visual data prep/featurize; 300+ transforms, no code |
| **SageMaker Feature Store** | centralized **feature repository** + metadata; create/share/reuse features |

## ③ Train, tune, evaluate (Lesson 3)

- **Training** updates **parameters/weights** so inference matches expected output — **iterative**: each pass shifts weights in a direction that **lowers error**. Stops at a set number of iterations *or* when error change drops below a target.
- **Experiments** = run many training jobs in parallel with different algorithms/settings → best-performing solution.
- **Hyperparameters** = *external* params set by the data scientist **before** training (e.g. number of neural layers/nodes). Best values found only by experimentation. (Don't confuse with parameters/weights, which the model *learns*.)

### SageMaker training services
- **Training job** — runs your code on managed ML instances. You specify: S3 training-data URL, compute, output bucket for artifacts, **algorithm via a Docker image in ECR** (SageMaker-provided or custom), and hyperparameters.
- **SageMaker Experiments** — group/compare training runs, find best model.
- **Automatic Model Tuning (AMT)** = **hyperparameter tuning** — runs many jobs over hyperparameter ranges, picks values that maximize a metric you choose (e.g. **AUC** for a binary classifier). Stops when N jobs stop improving the metric.

## ④ Deploy — the four inference options (Lesson 4)

Inference code + artifacts ship as a **Docker container** (runs on AWS Batch, ECS, EKS, Lambda, EC2…). Self-managed = you handle patching, scaling, routing, security. **SageMaker hosting** removes that overhead: point it at artifacts in **S3** + Docker image in **ECR**, pick an inference option.

| Option | Latency | Persistent? | Best for |
|---|---|---|---|
| **Real-time** | immediate, interactive | yes — always-on endpoint | sustained traffic, live responses (gen-AI) |
| **Serverless** | real-time-ish | no — **Lambda**, no provisioning | traffic with idle gaps; pay only when running |
| **Asynchronous** | queued | scales **to zero** | **large payloads, long processing**; no charge when idle |
| **Batch transform** | offline, you wait | no | **large datasets (GB+)**, no endpoint needed |

REST API pattern: client `POST`s input → endpoint → compute running the model → response. Common AWS shape: **API Gateway → Lambda** running the model.

## ⑤ Monitor + drift + MLOps (Lessons 5–6)

Performance degrades over time (data quality, model quality, bias). Monitoring: capture data → compare to training baseline → rules detect issues → alert. For most models a **scheduled retrain (daily/weekly/monthly)** is enough.

- **Data drift** = the **input data distribution** shifts vs training data.
- **Concept drift** = the **properties of the target variable** change.
- Either → performance degradation.
- **SageMaker Model Monitor** — schedules data collection from endpoints, detects changes vs baseline, results to **SageMaker Studio** + **CloudWatch** → alarms → remedial action (e.g. auto-retrain).

### MLOps
Software-engineering best practices applied to ML: automate manual tasks, test code before release, auto-respond to incidents. **Everything is versioned — including training data.** Benefits: productivity, repeatability, reliability, **auditability/compliance** (prove exactly how a model was built + deployed), data/model quality (bias policies, drift tracking).

| MLOps service | Role |
|---|---|
| **SageMaker Pipelines** | orchestrate SageMaker jobs, reproducible pipelines; SDK or JSON; **conditional branches**; track lineage |
| **SageMaker Model Registry** | centralized repo for **trained models + history** |
| **SageMaker Feature Store** | repo for **feature definitions** |
| **AWS Step Functions** | visual drag-and-drop **serverless workflows** across AWS services |
| **Apache Airflow / Amazon MWAA** | open-source workflow authoring in Python; **MWAA** = managed (no infra to run) |

## Evaluation metrics (Lessons 6–7)

### Confusion matrix (classification)
Summarizes a classifier vs test data. Fish example:

| | **Actual: fish** | **Actual: not fish** |
|---|---|---|
| **Predicted: fish** | True Positive (TP) | False Positive (FP) |
| **Predicted: not fish** | False Negative (FN) | True Negative (TN) |

### Classification metrics (all from the matrix)
- **Accuracy = (TP + TN) / total.** Example: (25+40)/100 = 0.65. **Bad for imbalanced data** — if 90% are fish, "predict fish always" scores 90%.
- **Precision = TP / (TP + FP).** Minimize **false positives** (don't flag a legit email as spam).
- **Recall = TP / (TP + FN).** Minimize **false negatives** (don't miss a disease). Also called **sensitivity / true positive rate**.
- **Precision-recall tradeoff** — can't max both. Catching every diseased person (high recall) flags more healthy people (lower precision).
- **F1 score** — single metric balancing precision + recall; use when **both matter**.
- **False positive rate = FP / (FP + TN).** **True negative rate = TN / (FP + TN).**

### AUC / ROC (probabilistic binary classifiers, e.g. logistic regression)
- A **threshold** turns a probability into a class (threshold 0.6 → ≥60% confident = fish).
- **ROC curve** = true positive rate vs false positive rate across increasing thresholds. Higher threshold → fewer FPs, more FNs.
- **AUC = area under the ROC curve** — aggregate performance across **all** thresholds. **0–1; 1 = perfect, 0.5 = random.**

### Regression metrics (error = distance from fitted line to actual)
- **MSE (mean squared error)** — average of squared errors. Always positive, smaller = better. **Emphasizes outliers** (squaring).
- **RMSE (root MSE)** — √MSE. **Units match the target** (inches, not square inches) → easier to read. Also outlier-sensitive.
- **MAE (mean absolute error)** — average of absolute errors. **Does NOT emphasize large errors** — use when outliers shouldn't dominate.

### Business metrics
Quantify the model's value to the business: cost reduction, % increase in users/sales, customer-feedback improvement. Estimate **risk/cost of errors** (lost sales). After production: collect data, compare actuals vs the business goal and vs the initial cost-benefit model → **ROI**. Use **AWS cost allocation tags** + **Cost Explorer** to find a project's actual AWS spend.

## Gotchas

- **It's a *lifecycle*, not a one-way pipeline.** The loop back to retraining (driven by monitoring/drift) is the whole point. A question framing ML as deploy-and-done is wrong.
- **Parameters/weights are *learned*; hyperparameters are *set before training*.** Layers/nodes count = hyperparameter. Weights = parameters the training loop adjusts. **AMT tunes hyperparameters**, not weights.
- **Four inference options — match by the discriminator:** persistent live = **real-time**; no-provisioning + idle gaps = **serverless** (Lambda); large payload / long job / scale-to-zero = **asynchronous**; big offline dataset, OK to wait = **batch transform**.
- **Accuracy lies on imbalanced data.** If a question stresses class imbalance, the right metric is **precision/recall/F1**, not accuracy.
- **Precision vs recall — pin the cost of the error.** Cost of a **false positive** high (spam-flagging good email, blocking a good transaction) → **precision**. Cost of a **false negative** high (missing a disease, missing fraud) → **recall**. Both matter → **F1**.
- **Recall = sensitivity = true positive rate.** Three names, one metric — the exam swaps them.
- **AUC is for probabilistic binary classifiers and 0.5 = random.** Tied to **logistic regression** and **ROC**. A 0.5 AUC isn't "half right," it's worthless (coin flip).
- **MSE/RMSE emphasize outliers; MAE doesn't.** Want outliers to dominate (costly big errors) → MSE/RMSE. Want them not to → **MAE**. RMSE's edge over MSE is **interpretable units**.
- **Glue Data Catalog stores metadata only, not data.** Crawlers write schema/location; source data stays put (usually lands in S3 after ETL).
- **Transfer learning = fine-tune a pre-trained model on your data** (JumpStart, Bedrock). It's the middle rung of the sourcing ladder — cheaper than scratch, more custom than a managed service.
- **Data drift (inputs shift) ≠ concept drift (target's properties shift).** Both degrade performance; the exam may ask you to name which.
