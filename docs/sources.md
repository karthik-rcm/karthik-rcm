# Authoritative Sources

The canonical list of sources `/aiprof` is allowed to cite from. Every claim in a notes file must trace back to one of these URLs via a verified `WebFetch` — no citation without a fetch, no fetch outside this list (without explicit Karthik approval to add it).

**Why a closed list:** the certification evidence trail is only as credible as its sources. A "professor" skill that confidently cites random AWS blog posts or Medium articles is the failure mode this list prevents. Authoritative sources only.

**How to extend:** when `/aiprof` encounters a concept that genuinely needs a source not on this list, it surfaces the gap (*"I'd like to cite https://example.com/x — should I add it to docs/sources.md?"*) and waits for approval. Don't silently cite off-list URLs.

---

## AWS AI Practitioner (AIF-C01)

### Exam-specific
- AWS exam overview — https://aws.amazon.com/certification/certified-ai-practitioner/
- Exam guide (HTML) — https://docs.aws.amazon.com/aws-certification/latest/examguides/ai-practitioner-01.html
- AWS Skill Builder — https://skillbuilder.aws/

### Service docs (cite for any Domain 2-3 concept)
- Amazon Bedrock — https://docs.aws.amazon.com/bedrock/
- Amazon SageMaker — https://docs.aws.amazon.com/sagemaker/
- Amazon Q — https://docs.aws.amazon.com/amazonq/
- AWS Comprehend — https://docs.aws.amazon.com/comprehend/
- AWS Rekognition — https://docs.aws.amazon.com/rekognition/
- AWS Textract — https://docs.aws.amazon.com/textract/
- AWS Transcribe — https://docs.aws.amazon.com/transcribe/

### Responsible AI + governance (Domain 4-5)
- AWS Responsible AI hub — https://aws.amazon.com/ai/responsible-ai/
- AWS AI Service Cards — https://aws.amazon.com/ai/responsible-ai/resources/
- Bedrock Guardrails docs — https://docs.aws.amazon.com/bedrock/latest/userguide/guardrails.html
- AWS Cloud Adoption Framework for AI / ML / GenAI — https://docs.aws.amazon.com/whitepapers/latest/aws-caf-for-ai/aws-caf-for-ai.html

---

## CHP (Certified HIPAA Professional) — HIPAA regulation source-of-truth

### HHS (the regulation itself — always cite HHS for HIPAA claims)
- HIPAA for Professionals (index) — https://www.hhs.gov/hipaa/for-professionals/index.html
- Privacy Rule — https://www.hhs.gov/hipaa/for-professionals/privacy/index.html
- Security Rule — https://www.hhs.gov/hipaa/for-professionals/security/index.html
- Breach Notification Rule — https://www.hhs.gov/hipaa/for-professionals/breach-notification/index.html
- Compliance & Enforcement — https://www.hhs.gov/hipaa/for-professionals/compliance-enforcement/index.html
- Business Associates — https://www.hhs.gov/hipaa/for-professionals/privacy/guidance/business-associates/index.html
- OCR Guidance — https://www.hhs.gov/hipaa/for-professionals/special-topics/index.html

### NIST (HIPAA Security Rule implementation guidance)
- NIST 800-66 Rev 2 (HIPAA Security Rule guidance) — https://csrc.nist.gov/pubs/sp/800/66/r2/final
- NIST 800-53 (Security Controls) — https://csrc.nist.gov/pubs/sp/800/53/r5/upd1/final

### Certification body
- HIPAA Academy CHP — https://hipaaacademy.net/credential-offerings/
- ecfirst — https://ecfirst.com/

---

## AWS ML Engineer Associate (MLA-C01)

### Exam-specific
- AWS exam overview — https://aws.amazon.com/certification/certified-machine-learning-engineer-associate/
- Exam guide PDF — https://d1.awsstatic.com/training-and-certification/docs-machine-learning-engineer-associate/AWS-Certified-Machine-Learning-Engineer-Associate_Exam-Guide.pdf
- AWS exam-prep classroom — https://aws.amazon.com/training/classroom/exam-prep-aws-certified-machine-learning-engineer-associate-mla-c01/

### Architecture references (cite for design/trade-off discussions)
- AWS Well-Architected ML Lens — https://docs.aws.amazon.com/wellarchitected/latest/machine-learning-lens/machine-learning-lens.html
- AWS Well-Architected Framework — https://docs.aws.amazon.com/wellarchitected/latest/framework/welcome.html

### Service docs (cite for any MLA-C01 domain concept)
- SageMaker — https://docs.aws.amazon.com/sagemaker/
- SageMaker Model Monitor — https://docs.aws.amazon.com/sagemaker/latest/dg/model-monitor.html
- SageMaker Pipelines — https://docs.aws.amazon.com/sagemaker/latest/dg/pipelines.html
- SageMaker Feature Store — https://docs.aws.amazon.com/sagemaker/latest/dg/feature-store.html
- AWS Glue — https://docs.aws.amazon.com/glue/
- AWS Glue DataBrew — https://docs.aws.amazon.com/databrew/
- AWS Lake Formation — https://docs.aws.amazon.com/lake-formation/

---

## AI agentic frameworks (case-study + MLA-C01 Domain 3)

- Anthropic Claude API docs — https://docs.anthropic.com/
- Anthropic agent patterns — https://www.anthropic.com/research/building-effective-agents
- Model Context Protocol (MCP) — https://modelcontextprotocol.io/
- LangChain docs — https://python.langchain.com/docs/
- LlamaIndex docs — https://docs.llamaindex.ai/
- OpenAI agents SDK — https://platform.openai.com/docs/agents-sdk

---

## Healthcare AI / RCM context (case-study work)

- CMS AI policy — https://www.cms.gov/about-cms/web-policies-important-links/artificial-intelligence-policy
- ONC (Office of the National Coordinator) — https://www.healthit.gov/topic/artificial-intelligence
- HL7 FHIR (data interop) — https://www.hl7.org/fhir/

---

## Cross-cutting AWS security (cite for Domain 5 AIF-C01, Domain 4 MLA-C01, AR Triage case study)

- AWS Security Best Practices — https://docs.aws.amazon.com/whitepapers/latest/aws-security-best-practices/welcome.html
- AWS HIPAA Eligible Services Reference — https://aws.amazon.com/compliance/hipaa-eligible-services-reference/
- AWS HIPAA Compliance — https://aws.amazon.com/compliance/hipaa-compliance/
- IAM Best Practices — https://docs.aws.amazon.com/IAM/latest/UserGuide/best-practices.html
- KMS Best Practices — https://docs.aws.amazon.com/kms/latest/developerguide/best-practices.html
- CloudTrail — https://docs.aws.amazon.com/awscloudtrail/

---

## GitHub repositories (when code examples are needed)

- AWS Samples — https://github.com/aws-samples
- Anthropic Cookbook — https://github.com/anthropics/anthropic-cookbook
- AWS Bedrock Samples — https://github.com/aws-samples/amazon-bedrock-samples

(Cite specific files, not the org root.)

---

## NOT on this list (deliberately)

These sources are excluded — `/aiprof` must not cite from them, and surfacing them to add later is fine, but they're off by default:

- Medium articles, Dev.to posts, Towards Data Science — quality is uneven, not authoritative for a credential evidence trail.
- AWS Marketing pages (`aws.amazon.com/<service>/` without `/docs/`) — sales copy, not technical truth.
- ChatGPT / Claude / any LLM output — circular citation.
- Generic StackOverflow answers — context-free, not certification-load-bearing.
- Tutorials Dojo / Stephane Maarek practice exam content — paid material, also we don't quote others' practice questions verbatim.
- HIPAA Academy / ecfirst paid course content — paid, not for redistribution.
- YouTube videos — fine for *your* study consumption, but not as a citation source for the notes file. The underlying doc/regulation is what gets cited.
