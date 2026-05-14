# Karthik Ramesh — Certification & Personal Brand Plan

**Owner:** Karthik Ramesh
**Focus:** Healthcare RCM × AI / Agentic Systems
**Duration:** 16 weeks
**Total investment:** ~₹35,000–₹40,000
**Goal:** 3 recognized certs + 1 public case study to drive Gravitas pipeline and remove FOMO

---

## Philosophy

Certs are **insurance against FOMO**, not a sales tool. They unlock procurement gates, fill knowledge gaps, and add LinkedIn signal. Real pipeline comes from public case studies. This plan sequences both — case study first, certs after.

After Week 16, **every quarter ships one new public case study, not one new cert.** That's how the brand compounds.

---

## The Three Certs — At a Glance

| # | Cert | Issuer | Prep | Exam Cost | Why |
|---|------|--------|------|-----------|-----|
| 1 | **AWS AI Practitioner (AIF-C01)** | AWS | 2–3 wks | $100 | Easiest, fastest, signals seriousness |
| 2 | **CHP (Certified HIPAA Professional)** | HIPAA Academy / ecfirst | 2–3 wks | $199 | Only HIPAA cert RCM buyers genuinely respect |
| 3 | **AWS ML Engineer Associate (MLA-C01)** | AWS | 6–8 wks | $75* | The real one. Bedrock, SageMaker, MLOps |

*50% discount unlocked after passing AIF-C01.

### Skipped (revisit only if a deal demands)
- **HITRUST CSF Practitioner** ($1,500+) — for enterprise health systems
- **Microsoft GH-600** — blocked in India per beta restrictions
- **AHIMA CHPS** — eligibility requires 2+ years formal privacy role experience
- **Generic AI Agent badges** (LangChain, DeepLearning.AI) — no buyer signal

---

## Full 16-Week Sequence

### Weeks 1–2: AR Triage Case Study

**Goal:** Public artifact based on your portfolio. Drives inbound *while* you study.

- **Week 1:** Draft narrative (problem → agent architecture → results), sanitize numbers, build architecture diagram
- **Week 2:** Landing page + 6-min Loom + LinkedIn post + gated PDF download

**Deliverables:**
- Sanitized case study PDF
- Architecture diagram (draw.io / excalidraw)
- LinkedIn post draft
- Gated landing page

---

### Weeks 3–5: AWS AI Practitioner (AIF-C01)

#### Exam blueprint

| Domain | Weight |
|--------|--------|
| 1. Fundamentals of AI and ML | 20% |
| 2. Fundamentals of GenAI | 24% |
| 3. Applications of Foundation Models | 28% |
| 4. Guidelines for Responsible AI | 14% |
| 5. Security, Compliance, Governance for AI | 14% |

**Format:** 65 questions, 90 min, pass 700/1000.

#### Weekly breakdown
- **Week 3:** Domains 2 + 3 (Bedrock, foundation models, prompt engineering, SageMaker basics)
- **Week 4:** Domains 1, 4, 5 (AI/ML fundamentals, responsible AI, security & governance)
- **Week 5:** Practice exams + schedule + pass

#### Official resources (free)
- Exam overview — https://aws.amazon.com/certification/certified-ai-practitioner/
- Exam guide PDF — https://docs.aws.amazon.com/aws-certification/latest/examguides/ai-practitioner-01.html
- AWS Skill Builder Exam Prep — https://skillbuilder.aws/ (search "AIF-C01")
- AWS Official Practice Question Set — free via Skill Builder

#### Recommended paid resources
- **Stephane Maarek — Ultimate AWS Certified AI Practitioner (Udemy)** ~₹500 on sale — https://www.udemy.com/course/aws-ai-practitioner-certified/
- **Tutorials Dojo Practice Exams** — $15 — https://portal.tutorialsdojo.com/courses/aws-certified-ai-practitioner-aif-c01-practice-exams/

#### Free YouTube
- **freeCodeCamp — AWS Certified AI Practitioner (AIF-C01) Full 15-hour Course** — https://www.youtube.com/results?search_query=freecodecamp+AWS+AI+Practitioner+AIF-C01+full+course
- **Stephane Maarek YouTube channel** — https://www.youtube.com/@StephaneMaarek

#### Claude Code study workflow
Use Claude Code to:
- Generate practice questions per domain (`generate 20 AIF-C01 questions on Bedrock, scenario-based, with explanations`)
- Build flashcards from the exam guide
- Spin up a Bedrock + SageMaker playground project in a sandbox AWS account
- Mock interview yourself on exam scenarios

---

### Weeks 6–8: CHP (Certified HIPAA Professional)

You already know ~90% of this material from shipping 65 RLS policies, AES-256 field-level encryption, and PHI workflows. Focus on closing the formal regulatory gap.

#### Exam blueprint (approximate)
- HIPAA Administrative Simplification
- Privacy Rule Compliance
- Security Rule Standards (admin / physical / technical safeguards)
- Transaction & Code Sets
- Breach Notification

**Format:** 60–100 questions, 90–120 min, ~70% passing.

#### Weekly breakdown
- **Week 6:** HIPAA Administrative Simplification + Transaction & Code Sets (your knowledge gap)
- **Week 7:** Privacy Rule, Security Rule formal structure, Breach Notification workflows
- **Week 8:** Practice scenarios + schedule + pass

#### Official resources
- HIPAA Academy CHP page — https://hipaaacademy.net/credential-offerings/
- ecfirst CHP training — https://ecfirst.com/
- HHS HIPAA full text (free, the source) — https://www.hhs.gov/hipaa/for-professionals/index.html
- HHS Security Rule guidance — https://www.hhs.gov/hipaa/for-professionals/security/index.html
- HHS Privacy Rule guidance — https://www.hhs.gov/hipaa/for-professionals/privacy/index.html
- HHS Breach Notification — https://www.hhs.gov/hipaa/for-professionals/breach-notification/index.html

#### Pricing
- Self-study only: $199 (recommended for your background)
- Self-study + practice tests: ~$249
- Skip the $449–$1,199 bundle. Overkill for someone with your shipping experience.

#### Free YouTube
- **HIPAA Compliance series — search YouTube** — https://www.youtube.com/results?search_query=HIPAA+Certified+Professional+CHP+exam+prep
- **Compliancy Group HIPAA training videos** — https://www.youtube.com/@CompliancyGroup

#### Claude Code study workflow
- Feed Claude Code the HHS HIPAA full text and generate domain-specific quizzes
- Map each PractiApp / Revenue Sphere security control to a HIPAA citation (great real-world reinforcement)
- Generate scenario-based questions: "A BA refuses to sign a BAA. As HIPAA Officer, walk through your actions step by step"

---

### Weeks 9–16: AWS ML Engineer Associate (MLA-C01)

The heaviest cert. Directly maps to Gravitas roadmap (Bedrock agents, SageMaker pipelines, drift detection).

#### Exam blueprint

| Domain | Weight |
|--------|--------|
| 1. Data Preparation for ML | 28% |
| 2. ML Model Development | 26% |
| 3. Deployment & Orchestration of ML Workflows | 22% |
| 4. ML Solution Monitoring, Maintenance & Security | 24% |

**Format:** 65 questions, 170 min, pass 720/1000. ~65% industry pass rate.

#### Weekly breakdown
- **Weeks 9–10:** Domain 1 — Data prep, AWS Glue, DataBrew, Feature Store, feature engineering
- **Weeks 11–12:** Domain 2 — SageMaker training, hyperparameter tuning, model evaluation, Bedrock fine-tuning
- **Weeks 13–14:** Domain 3 — Deployment, endpoints, CI/CD for ML, Bedrock agents, multi-model endpoints
- **Week 15:** Domain 4 — Monitoring, drift detection, SageMaker Model Monitor, security
- **Week 16:** Practice exams + schedule + pass

#### Official resources (free)
- Exam overview — https://aws.amazon.com/certification/certified-machine-learning-engineer-associate/
- Exam guide PDF — https://d1.awsstatic.com/training-and-certification/docs-machine-learning-engineer-associate/AWS-Certified-Machine-Learning-Engineer-Associate_Exam-Guide.pdf
- AWS Skill Builder MLA-C01 Exam Prep Plan — https://skillbuilder.aws/
- AWS classroom prep — https://aws.amazon.com/training/classroom/exam-prep-aws-certified-machine-learning-engineer-associate-mla-c01/

#### Recommended paid resources
- **Frank Kane + Stephane Maarek — AWS Certified Machine Learning Engineer Associate (Udemy)** ~₹500 on sale — https://www.udemy.com/course/aws-certified-machine-learning-engineer-associate-mla-c01/
- **Tutorials Dojo MLA-C01 Practice Exams** — https://tutorialsdojo.com/
- **Coursera Whizlabs Specialization** — https://www.coursera.org/specializations/aws-machine-learning-engineer-associate

#### Free YouTube
- **Stephane Maarek YouTube** — https://www.youtube.com/@StephaneMaarek
- **Frank Kane / Sundog Education** — https://www.youtube.com/@SundogEducation
- **AWS Online Tech Talks (ML track)** — https://www.youtube.com/@AmazonWebServices

#### Claude Code study workflow
- Spin up a Gravitas-relevant project: "Denial prediction agent" using SageMaker + Bedrock
- Use Claude Code to write Terraform / CDK for SageMaker pipelines you'll actually deploy
- Build model monitoring drift dashboards as study artifacts (these become Gravitas demos)
- Generate scenario-based questions on real Gravitas use cases

---

## Cost Summary

| Item | USD | INR (approx) |
|------|-----|-------------|
| AIF-C01 exam | $100 | ₹8,400 |
| AIF-C01 Udemy course (sale) | $7 | ₹600 |
| AIF-C01 Tutorials Dojo practice | $15 | ₹1,300 |
| CHP exam + self-study | $199 | ₹17,000 |
| MLA-C01 exam (50% discount) | $75 | ₹6,300 |
| MLA-C01 Udemy course (sale) | $7 | ₹600 |
| MLA-C01 Tutorials Dojo practice | $15 | ₹1,300 |
| AWS sandbox usage | $20 | ₹1,700 |
| **Total** | **~$438** | **~₹37,000** |

### Cost optimization tactics
1. **AWS retake voucher** — pass AIF-C01, AWS auto-grants 50% off next exam → MLA-C01 drops to $75
2. **AWS Skill Builder promo vouchers** — watch for 50% off AIF-C01 before booking
3. **Udemy on sale only** — never pay full price, courses go to ₹500 routinely
4. **Pearson VUE Chennai centers** — Available, or take online proctored from home

---

## Claude Code Study Stack

Use this repo as your active study workspace. Suggested structure:

```
karthik-cert-prep/
├── CERTIFICATION_PLAN.md          # This file
├── aif-c01/
│   ├── notes/                     # Domain-by-domain notes
│   ├── flashcards/
│   ├── practice-questions/        # Claude-generated
│   ├── labs/                      # Bedrock + SageMaker hands-on
│   └── exam-log.md
├── chp/
│   ├── notes/
│   ├── hhs-text-extracts/         # Annotated HIPAA citations
│   ├── practiapp-control-mapping.md  # Map your existing controls to HIPAA
│   └── practice-questions/
├── mla-c01/
│   ├── notes/
│   ├── labs/                      # SageMaker pipelines, Bedrock agents
│   ├── gravitas-denial-predictor/ # Real Gravitas-relevant project
│   ├── practice-questions/
│   └── exam-log.md
├── case-study-ar-triage/
│   ├── narrative.md
│   ├── architecture.drawio
│   ├── landing-page/
│   └── linkedin-posts/
└── README.md
```

### Claude Code prompts to keep handy

```
# Generate practice questions
Generate 20 AIF-C01 exam-style scenario questions on [Bedrock guardrails],
with 4 options each, correct answer marked, and explanation referencing
the official AWS service docs.

# Build flashcards
From this exam guide section, create Anki-format flashcards covering
every service, parameter, and decision boundary mentioned.

# Map domain to portfolio
Map every Domain 4 (MLA-C01) monitoring requirement to a corresponding
capability I need to build in Gravitas. Output a gap analysis.

# Mock proctor
Quiz me on 10 random MLA-C01 questions, one at a time. Don't reveal the
answer until I commit. Then explain wrong answers in depth.
```

---

## End State at Week 16

- **3 LinkedIn badges:** AWS AI Practitioner, CHP, AWS ML Engineer Associate
- **1 public case study** with sanitized metrics generating inbound for 14+ weeks
- **Real skill upgrades** in Bedrock, SageMaker, MLOps — directly used in Gravitas
- **No FOMO** on cert-flexing — covered cloud AI, healthcare compliance, production ML
- **Pipeline-first habit** — case studies become the durable engine, certs are scaffolding

---

## Reference Links — Master List

### AWS AI Practitioner (AIF-C01)
- https://aws.amazon.com/certification/certified-ai-practitioner/
- https://docs.aws.amazon.com/aws-certification/latest/examguides/ai-practitioner-01.html
- https://skillbuilder.aws/
- https://www.udemy.com/course/aws-ai-practitioner-certified/
- https://portal.tutorialsdojo.com/courses/aws-certified-ai-practitioner-aif-c01-practice-exams/

### CHP (HIPAA)
- https://hipaaacademy.net/credential-offerings/
- https://ecfirst.com/
- https://www.hhs.gov/hipaa/for-professionals/index.html
- https://www.hhs.gov/hipaa/for-professionals/security/index.html
- https://www.hhs.gov/hipaa/for-professionals/privacy/index.html
- https://www.hhs.gov/hipaa/for-professionals/breach-notification/index.html

### AWS ML Engineer Associate (MLA-C01)
- https://aws.amazon.com/certification/certified-machine-learning-engineer-associate/
- https://d1.awsstatic.com/training-and-certification/docs-machine-learning-engineer-associate/AWS-Certified-Machine-Learning-Engineer-Associate_Exam-Guide.pdf
- https://aws.amazon.com/training/classroom/exam-prep-aws-certified-machine-learning-engineer-associate-mla-c01/
- https://www.udemy.com/course/aws-certified-machine-learning-engineer-associate-mla-c01/
- https://www.coursera.org/specializations/aws-machine-learning-engineer-associate

### AWS Documentation (always free, always source of truth)
- Bedrock — https://docs.aws.amazon.com/bedrock/
- SageMaker — https://docs.aws.amazon.com/sagemaker/
- AWS Well-Architected ML Lens — https://docs.aws.amazon.com/wellarchitected/latest/machine-learning-lens/machine-learning-lens.html
- Responsible AI on AWS — https://aws.amazon.com/ai/responsible-ai/

### YouTube channels worth subscribing
- Stephane Maarek — https://www.youtube.com/@StephaneMaarek
- Frank Kane / Sundog Education — https://www.youtube.com/@SundogEducation
- AWS Official — https://www.youtube.com/@AmazonWebServices
- freeCodeCamp (AIF-C01 full course) — https://www.youtube.com/@freecodecamp
- Compliancy Group (HIPAA) — https://www.youtube.com/@CompliancyGroup

---

## Tracking

| Week | Milestone | Status | Notes |
|------|-----------|--------|-------|
| 1 | Case study draft | ☐ | |
| 2 | Case study published | ☐ | |
| 3 | AIF-C01 Domains 2+3 done | ☐ | |
| 4 | AIF-C01 Domains 1,4,5 done | ☐ | |
| 5 | **AIF-C01 PASSED** | ☐ | |
| 6 | CHP Admin + Transaction Sets | ☐ | |
| 7 | CHP Privacy/Security/Breach | ☐ | |
| 8 | **CHP PASSED** | ☐ | |
| 9–10 | MLA-C01 Domain 1 (Data Prep) | ☐ | |
| 11–12 | MLA-C01 Domain 2 (Model Dev) | ☐ | |
| 13–14 | MLA-C01 Domain 3 (Deployment) | ☐ | |
| 15 | MLA-C01 Domain 4 (Monitoring) | ☐ | |
| 16 | **MLA-C01 PASSED** | ☐ | |

---

*Last updated: 2026-05-15*
*Plan owner: Karthik Ramesh*
*Strategic advisor: Claude*
