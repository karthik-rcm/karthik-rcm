# Governance & Compliance for AI Systems

**Exam-guide ref:** AIF-C01 — Domain 5 (Security, Compliance, Governance) — Task 5.2
**Status:** Notes from Skill Builder video (own words — pending internalization via `/brainstorm`)
**Lesson date:** 2026-05-30
**Source:** Skill Builder "Domain 5 Review", Task 5.2 Lessons 1–6 (transcript in gitignored scratch/domain-5)
**Covers:** All 6 lessons. L1: shared responsibility for compliance, AWS Artifact, SOC/ISO. L2: AI regulations (ISO 42001/23894, EU AI Act, NIST AI RMF), risk matrix. L3: compliance services (Audit Manager, Guardrails, Config, Inspector, Trusted Advisor). L4: data governance roles. L5: data quality, Lake Formation, S3 lifecycle. L6: AI governance strategy + scoping matrix.

## Plain-English statement

Compliance is shared too: AWS gets its controls third-party-audited and hands you the reports (**AWS Artifact**); you prove *your* configuration. AI-specific regulation is **emerging** (ISO 42001, EU AI Act, NIST AI RMF) and mostly about **measuring and managing risk**. AWS gives you services to audit/monitor/report (**Audit Manager, Config, Inspector, Trusted Advisor, Guardrails**), data-governance roles + tooling (**Lake Formation, Glue Data Quality, S3 lifecycle**), and a governance strategy anchored on the **scoping matrix** — minimize your scope to minimize your responsibility.

## Compliance + shared responsibility (Lesson 1)

- **Shared responsibility applies to compliance**, not just security. AWS audits its controls; customers **inherit** them and prove their own config.
- **AWS Artifact** — self-service access to third-party auditor reports. Hand them to your auditors → reduces *their* scope to just your processes.
- **Standards:** **SOC 2** (security, availability, processing integrity, confidentiality, privacy); **ISO 27001** (international security management). Use AWS's report/certification as a starting point.
- **Customer Compliance Center** — stories, whitepapers, auditor learning path.

## AI regulations + risk (Lesson 2)

- **ISO 42001 / ISO 23894** (2023) — AI risk assessment/management frameworks. *Recommended, not legally required.*
- **EU AI Act** — first comprehensive AI regulation; **three risk tiers**: **unacceptable → banned** (social scoring, internet-scraped face DBs, workplace emotion inference); **high-risk → strict requirements** (CV-ranking — most systems land here: risk management + data governance + documentation); **other → unregulated.** Like GDPR, likely to become a global standard.
- **NIST AI RMF** — *voluntary*; four functions: **Govern, Map, Measure, Manage.**
- **Risk = likelihood × severity.** Inherent risk → mitigate with controls → **residual risk** remains → overall rating from the highest residual risks.
- **Algorithmic Accountability Act** (US, proposed) — would require impact assessments + transparency (right to know why a loan was denied; bias removal).

## Compliance services (Lesson 3)

| Service | Job | Level |
|---|---|---|
| **Audit Manager** | map requirements → AWS usage, collect evidence, auditor-ready reports (built-in gen-AI + SOC 2 frameworks) | assessment |
| **Bedrock Guardrails** | content filters (hate/insults/sexual/violence), denied topics, **PII reject/redact**; checks prompt + response | application |
| **AWS Config** | inventory + record config changes, evaluate against rules, auto-remediate (SSM); **conformance packs** (incl. AI/ML + SageMaker best practices) | **resource** |
| **Amazon Inspector** | scan apps/containers for vulnerabilities (open EC2 access, vulnerable software) | **application** |
| **Trusted Advisor** | best-practice checks: cost, performance, resilience, security, ops, service limits | account-wide |

## Data governance (Lessons 4–5)

- **Three parts:** curation (manage valuable sources, keep data accurate/clean), discovery+understanding (central **data catalog**), protection (balance privacy/security/access).
- **Roles:** **data owner** (executive, sets policy — who accesses what), **data steward** (business, day-to-day data knowledge), **IT** (tools + systems). Owner sets policy → steward executes under it.
- **Techniques:** data profiling, data catalog, **data lineage** (origin + transformations).
- **Glue DataBrew** — no-code prep with **profiling** (quality rules) + **lineage** views.
- **Glue Data Catalog** — metadata (location/schema); populate via **crawler**. **Glue Data Quality** — rules + ML anomaly detection on cataloged data.
- **Lake Formation** — fine-grained access (**column / row / cell**) for an S3 data lake; Glue Data Catalog checks permissions with Lake Formation before engines (Athena/Glue/EMR/Redshift) get access.
- **S3 storage classes + lifecycle:** Standard (frequent) → Standard-IA / One Zone-IA (infrequent) → Intelligent-Tiering (unknown patterns) → Glacier (archive/compliance). **Lifecycle rules** auto-transition by age and can delete after retention.

## AI governance strategy (Lesson 6)

- Step 1: **identify scope** via the **Generative AI Security Scoping Matrix** — scopes 1–2 (consume third-party apps, least responsibility) → scopes 3–5 (build your own; you own risk classification, threat modeling, access, controls, resilience).
- **Choose solutions left-to-right to minimize scope/responsibility:** fully-trained AI services (Comprehend, Translate) → pre-trained models + RAG (Bedrock) → fine-tune your own (JumpStart).
- Then: **document policies + train employees** by role (data governance, access requests, transparency standards), **monitor** performance/compliance/bias against thresholds, **review + revise** regularly.

## RCM application

This is the domain you could nearly teach. The **scoping-matrix "minimize scope = minimize responsibility"** principle is the strategic spine of the PractiHR build: every step you can do with a managed AWS AI service (Comprehend, Bedrock + RAG) instead of a self-hosted fine-tuned model is *less* governance, legal, and PHI-liability surface. **Lake Formation cell-level access** + **S3 lifecycle to Glacier for retention** is exactly the HIPAA data-lifecycle discipline you run. **Audit Manager's SOC 2 framework** maps to the compliance posture GravitasHC needs for healthcare deals.

## Gotchas

- **Compliance is shared too.** AWS Artifact gives you AWS's audited reports; you still prove your own config. Don't assume "AWS is compliant" covers your workload.
- **EU AI Act three tiers — know the banned examples** (social scoring, scraped face DBs, workplace emotion inference) and that **most systems are "high-risk"** (risk mgmt + governance + docs). Likely a global standard à la GDPR.
- **NIST AI RMF = Govern/Map/Measure/Manage, voluntary.** Risk = likelihood × severity; residual risk = what's left after mitigation.
- **Config = resource level; Inspector = application/container level.** Classic swap trap. Config has conformance packs (AI/ML + SageMaker).
- **Lake Formation = column/row/cell fine-grained access for an S3 data lake** — the answer for granular data-lake permissions.
- **S3 lifecycle: Standard → IA → Glacier, with rules by age; Glacier = compliance/retention archive.** Intelligent-Tiering is for *unknown* access patterns.
- **Data owner sets policy (executive); data steward executes (business).** Don't reverse the roles.
- **Scoping matrix: lower scope (consume) = less responsibility; higher scope (build/fine-tune) = more.** "Minimize scope" is the exam's recommended governance posture — left to right.
- **Guardrails does PII reject/redact + topic blocking on both prompt and response** — the application-level compliance control (recurring across D2.3/D3.2/D4/D5).
