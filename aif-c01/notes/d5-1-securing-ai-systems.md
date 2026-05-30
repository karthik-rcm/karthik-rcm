# Securing AI Systems

**Exam-guide ref:** AIF-C01 — Domain 5 (Security, Compliance, Governance) — Task 5.1
**Status:** Notes from Skill Builder video (own words — pending internalization via `/brainstorm`)
**Lesson date:** 2026-05-30
**Source:** Skill Builder "Domain 5 Review", Task 5.1 Lessons 1–6 (transcript in gitignored scratch/domain-5)
**Covers:** All 6 lessons. L1: shared responsibility, IAM, root/MFA. L2: policies, least privilege, groups, roles. L3: federation, Identity Center, CloudTrail, S3 Block Public Access, Role Manager. L4: encryption, KMS, Macie, VPC. L5: AI-specific attacks + mitigations + Model Monitor. L6: artifact tracking for governance.

## Plain-English statement

Securing AI on AWS is mostly the same security you already run — **shared responsibility, IAM least-privilege, encryption, VPC isolation, audit logging** — plus a layer of **AI-specific attacks** (poisoning, adversarial inputs, model inversion, prompt injection) and **reproducibility tracking** for compliance. For you this is the most familiar domain; the exam just wants the AWS service names attached to practices you already enforce in PractiApp/PractiHR.

## Shared Responsibility + IAM (Lessons 1–2)

- **Shared Responsibility Model:** AWS = "security **of** the cloud" (data centers, hardware, host OS, virtualization). Customer = "security **in** the cloud" (config, data, access, encryption). **The split shifts by service** — EC2-hosted model = you own OS/patches/scaling; SageMaker Serverless = AWS handles it.
- **IAM** — global service, manage users + permissions via **JSON policies**. **Least privilege** = grant only what's needed.
- **Root user** — unlimited, can't be restricted. Lock it down (strong password, MFA, delete access keys), use only for billing/account tasks; do everyday work as an IAM admin user.
- **MFA** — beyond single-factor; needed even with a strong password.
- **IAM groups** — assign policies by job function; users↔groups many-to-many; **groups can't nest**. Attach policies to groups.
- **IAM roles** — assumable identity giving **temporary, expiring credentials** (better than long-lived user keys). Used by users, AWS services, or federated users; each has a **trust policy**.
- **Policy types:** identity-based (on users/groups/roles) + resource-based (e.g. S3 bucket policy). Permissions are the union; **an explicit deny overrides any allow.**

## Identity, audit, data protection (Lesson 3)

- **Identity federation** — authenticate via an external IdP (Active Directory) → temporary AWS creds.
- **IAM Identity Center** — central user/permission management across **multiple accounts** (workforce identities, permission sets, role-based temp creds). **AWS recommends it over plain IAM.**
- **CloudTrail** — logs all API calls (who/what/when/source IP) to S3. Captures all SageMaker calls **except invoking endpoints**.
- **S3 Block Public Access** — block public access at bucket or **account** level; account-level overrides any bucket policy/ACL.
- **SageMaker Role Manager** — pre-built IAM role personas: **data scientist**, **MLOps** (no S3 data access), **SageMaker compute**.

## Encryption + network isolation (Lesson 4)

- **At rest + in transit** on all services. Client-side vs server-side; **S3/DynamoDB/SageMaker encrypt by default** (service-owned keys).
- **AWS KMS** — your own keys, controlled by IAM policy → extra layer (read access to a bucket is useless without KMS decrypt permission). Customer-managed keys control rotation/policy/enable-disable.
- **TLS/HTTPS** on all endpoints. SageMaker **distributed-training inter-node traffic is unencrypted by default** (enabling it slows deep-learning training).
- **Amazon Macie** — ML/pattern-matching to find **PII in S3**, inventories bucket access/encryption. Remove PII from training data at ingestion.
- **VPC** — SageMaker Studio/notebooks get default internet access (exfiltration risk). Best practice: launch in **your own VPC**, use **VPC-only mode** + **VPC interface endpoints (PrivateLink)** to keep traffic private.

## AI-specific attacks + mitigations (Lesson 5)

| Attack | What it is |
|---|---|
| **Data poisoning** | attacker corrupts *training data* (mislabel fraud as not-fraud) → model misclassifies |
| **Adversarial inputs** | subtle *input* tweaks cause misclassification (modified face image) — no training access needed |
| **Model inversion** | probe outputs to *reconstruct training data* or clone the model |
| **Prompt injection** | malicious prompt instructions to override the template / extract data |

**Mitigations:** least privilege + block public access, encrypt artifacts, limit model access (block reverse-engineering), validate/inspect inputs (detect injection patterns), don't over-expose output, train on adversarial inputs, retrain frequently, keep a validation set, scan data for anomalies, investigate prediction drift.

- **SageMaker Model Monitor** — continuous production monitoring for **data drift + anomalies**; baselines vs current; stats to Studio + **CloudWatch** alerts. **Data-quality** monitoring needs **data capture** enabled; **model-quality** monitoring compares inferences to **Ground Truth** labels.

## Artifact tracking for reproducibility/governance (Lesson 6)

Regulatory reproducibility = version everything: code (GitHub/CodeCommit), datasets (S3 prefixes), containers (ECR), training-job metadata (SageMaker auto-tracks).
- **Model Registry** — catalog model versions in groups; status pending/approved/rejected; deploy from registry.
- **Model Cards** — immutable record of intended use, risk, training, eval; export to PDF.
- **ML Lineage Tracking** — auto graph of the end-to-end workflow; query relationships (which models used a dataset).
- **Feature Store** — central feature repo, point-in-time queries, feature lineage.
- **Model Dashboard** — central portal aggregating Model Monitor + Model Cards; find threshold violations (quality, bias, explainability).

## RCM application

This domain *is* your daily job, relabeled. Shared responsibility, IAM least-privilege, KMS encryption, VPC isolation, CloudTrail audit — you enforce all of it in PractiApp/PractiHR for HIPAA. The AI-specific layer is the genuinely new part: **model inversion** is a real PHI risk (an attacker reconstructing training data from a model trained on claims), which is *another* argument for RAG-over-fine-tuning. **Model Monitor + drift detection** maps onto the PractiHR autonomy build's "eval harness before graduating an action." **Macie finding PII in S3** is exactly the gate you'd want before any claim data becomes training data.

## Gotchas

- **Explicit deny always wins.** Union of allows across identity + resource policies, but any explicit deny overrides. The most-tested IAM rule.
- **Roles = temporary creds (good); user/group keys = long-lived (riskier).** Hardcoded long-lived keys leaking in code is the classic failure → use roles.
- **Shared responsibility shifts by service.** EC2 = more customer responsibility; serverless/managed = less. Don't give one fixed answer.
- **The four AI attacks — pin each:** poisoning = training data; adversarial = input manipulation; inversion = reconstruct training data/model from outputs; injection = malicious prompt. (Injection also appeared in D2.3/D3.2.)
- **S3/SageMaker encrypt by default with service keys; KMS = your keys + IAM-controlled.** KMS is the "extra layer" answer when bucket access alone shouldn't grant data access.
- **CloudTrail logs everything except SageMaker endpoint *invocations*.** Specific exam carve-out.
- **IAM Identity Center is AWS's recommended user management (esp. multi-account), over plain IAM users.**
- **Model Monitor needs data capture (data quality) and Ground Truth labels (model quality).** Two different setups.
