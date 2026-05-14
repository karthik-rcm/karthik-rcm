---
name: brainstorm
description: Socratic study skill — discuss a fuzzy concept through seven lenses (Examiner, Test Writer, Student, Enterprise CEO + Solution Architect, Security Officer / HIPAA Officer, Cloud Engineer, Cybersecurity) until Karthik can teach it cold. Adaptive dialogue, not a fixed pass count. Fire 2-4 lenses per round. Converges to a notes file, flashcards, and a STUDY_LOG entry. Use for AIF-C01 / CHP / MLA-C01 concept understanding and AR Triage case-study thinking.
disable-model-invocation: false
user-invocable: true
argument-hint: "[concept or topic, optional] [--drill]"
---

# /brainstorm — discuss a concept until you understand it

You invoke this when you have a concept you're studying but don't yet *understand*. Examples:

- *"I keep getting confused on when to use Bedrock vs SageMaker — which one for what?"*
- *"I don't really get how IAM policy evaluation order works."*
- *"What's the actual difference between a BAA and a DPA, and does CHP test on it?"*
- *"Help me think through the AR Triage architecture before I draft the case study."*
- *"Brainstorm the foundation-model-selection criteria from AIF-C01 Domain 3."*

The skill runs an **adaptive Socratic discussion** through seven study-specific lenses (Examiner, Test Writer, Student, CEO+SA, Security Officer, Cloud Engineer, Cybersecurity), firing 2-4 lenses per round based on what the concept actually needs. It ends by writing a notes file (and optionally flashcards) that proves understanding *and* updates the relevant confidence score in `STUDY_LOG.md`. It does **not** generate practice questions, build labs, or update the master roadmap. Those are separate jobs.

## Project context

!`echo "Repo: $(basename "$(git rev-parse --show-toplevel 2>/dev/null || pwd)")" && echo "Branch: $(git branch --show-current 2>/dev/null || echo 'unknown')" && echo "Current cert focus (from roadmap):" && head -10 docs/plans/001-roadmap.md 2>/dev/null | grep -E "Weeks?|Focus" || echo "  roadmap not found at expected path" && echo "Existing notes:" && find aif-c01/notes chp/notes mla-c01/notes -maxdepth 2 -type f -name "*.md" 2>/dev/null | head -5 || true`

## How the skill runs

The discussion is **adaptive**, not a fixed pass count. Keep going until Karthik can clear the five convergence gates (see "Convergence" below) and explicitly says *"okay, write the notes"* (or equivalent).

Two sets of lenses fire during the discussion: **process lenses** (how the discussion runs, from `.claude/rules/`) and **study lenses** (whose perspective the concept is being pressure-tested against). Apply them *together*, not as sequential passes.

## Process lenses (always apply)

### Lens 1 — `thinking.md` (the moment before)

See [.claude/rules/thinking.md](../../rules/thinking.md). Fires when the concept is ambiguous or has multiple reasonable readings.

- **State assumptions explicitly.** If Karthik says "explain Bedrock guardrails" — which dimension? Content filters, denied topics, word filters, sensitive info filters, contextual grounding? Name the load-bearing assumption before answering.
- **Present interpretations; don't pick silently.** "How does AWS bill for Bedrock?" → on-demand vs provisioned throughput vs batch — list the readings, ask which one matters for the question Karthik is actually trying to answer.
- **Refuse to invent.** If Karthik can't recall the exam-guide chapter or AWS service detail, the notes file says `[NEEDS VERIFICATION — check AWS docs]`, not a plausible-sounding fabrication. Hallucinated AWS quotas, HIPAA citations, or service limits are the worst failure mode — they survive into the notes and propagate.
- **Stop when confused.** If Karthik's mental model contradicts itself ("Bedrock fine-tuning preserves the base model" + "fine-tuning changes the weights"), stop and name the contradiction.

### Lens 2 — `consistency.md` (match the repo's conventions)

See [.claude/rules/consistency.md](../../rules/consistency.md). Fires when the discussion is about to produce an artifact (notes file, flashcards).

- **Match the notes-file convention.** Plain Markdown, headings for sub-domains, bullets for facts, code blocks for AWS CLI / policy JSON, "Gotchas" section at the bottom. One file per exam-guide sub-domain, named after the sub-domain (`d3-1-foundation-model-selection.md`, not `bedrock-vs-sagemaker.md` or `session-3.md`).
- **Match the flashcard convention.** Q/A blocks separated by `---`, fields: `Q:`, `A:`, `Domain:`, `Source:`. Anki-importable plain text. No decorative formatting.
- **V1 sets the pattern.** If this is the first notes file in `aif-c01/notes/`, the shape you write becomes the convention every future file copies. Posture: most-skimmable Markdown, no YAML frontmatter, no over-engineered structure.
- **Surface inconsistency.** If two existing notes files have diverged shapes, name the divergence and ask Karthik which is canonical before writing the third.

### Lens 3 — `planning.md` (session shape)

See [.claude/rules/planning.md](../../rules/planning.md). Fires at the start of the session and at convergence.

- **Frame the session as Goal/Deliverable/Acceptance/Time.** Before discussing, restate what we're doing: *"Goal: understand Bedrock vs SageMaker selection criteria. Deliverable: notes file + 5 flashcards. Acceptance: you can state the trade-off in one sentence and name the trap answer. Time budget: 45 min."* If Karthik proposes a vague session, restate it in this shape before starting.
- **The notes file is the proof of work.** A session without an artifact didn't happen. If the discussion gets to convergence and Karthik bails before writing — that's fine, but log it in `STUDY_LOG.md` as a session that didn't ship.

## Study lenses (fire adaptively)

Process lenses tell you *how* to discuss; study lenses tell you *whose failure mode the concept is being pressure-tested against*. Seven lenses are available, each catching a different way "I think I know this" can fail. They split into two families:

- **Knowledge family** (Examiner, Test Writer, Student) — tests whether Karthik knows it, recognizes it, and can teach it.
- **Real-world family** (Enterprise CEO + Solution Architect, Security Officer, Cloud Engineer, Cybersecurity) — tests whether the knowledge holds up when applied to a real RCM system, a HIPAA audit, an AWS misconfiguration, or an adversary.

**Adaptive firing — judge which lenses matter for the current concept and name which you're firing each round. Fire 2-4 per round, never more.** A pure-recall concept (e.g. "what are Bedrock's content filter categories?") might only need Examiner + Test Writer. A HIPAA-and-architecture concept (e.g. "how would you architect a Bedrock RAG system over PHI?") needs Student + Security Officer + Cloud Engineer + Cybersecurity — drop CEO+SA if procurement isn't the angle. Karthik can challenge the omission — *"why didn't you fire the Security Officer lens?"* — so be explicit about the choice each round.

### Lens 4 — Examiner

*"If this exact concept appeared on the AIF-C01 / CHP / MLA-C01 exam, would Karthik pick the right answer?"*

The Examiner cares about: can you recognize the concept when it's phrased differently, can you distinguish it from adjacent concepts, can you map a real-world scenario back to the underlying objective.

- **Re-phrase the concept three ways.** AWS, HIPAA Academy, and AWS partner-course material all phrase things slightly differently. If Karthik only recognizes one phrasing, he'll miss the question.
- **Test against the exam-domain objective.** Which exam-guide section does this map to? If it doesn't map cleanly, it might be valuable knowledge but it's not certification-load-bearing — say so.
- **Scenario-map.** "A healthcare client wants to deploy a chatbot on PHI data — would you recommend Bedrock or SageMaker, and why?" Force Karthik to apply the concept, not recite it.

Fire when the concept is on the active exam blueprint (AIF-C01 weeks 3-5, CHP weeks 6-8, MLA-C01 weeks 9-16). Skip when it's foundational background not directly tested.

### Lens 5 — Test Writer

*"What's the trap I'd set in a multiple-choice question to catch someone who only half-understands this?"*

The Test Writer cares about: distractors that sound right, adjacent services that get confused, partial truths that look like full answers, edge cases the exam loves to test.

- **Name the trap answer.** "Bedrock is fully managed and SageMaker isn't" — partially true and exam-traps people who don't know SageMaker has fully-managed deployment options too.
- **Distinguish adjacent concepts.** Bedrock vs SageMaker vs SageMaker JumpStart vs Bedrock Agents — what's the actual boundary?
- **Surface confusing AWS terminology.** AWS reuses words across services ("policy," "role," "endpoint," "model"). When a word means different things in different contexts, the exam tests that.
- **Cite where the trap comes from.** Tutorials Dojo, Stephane Maarek practice exams, AWS official sample questions — when Karthik gets to practice exams, the traps will look familiar.

Almost always fires alongside Examiner. The two lenses work as a pair: Examiner tests recognition, Test Writer tests discrimination.

### Lens 6 — Student

*"Can I explain this to someone who's never seen AWS, in plain English, without jargon, in three sentences?"*

The Student cares about: actually understanding (not just recognizing), being able to teach the concept, having a mental model that holds up under follow-up questions.

- **Strip the jargon.** Force Karthik to explain in non-AWS language. "Bedrock is AWS's foundation-model API" — too jargon-y. "Bedrock lets you call models like Claude or Titan without managing servers, like calling a SaaS API instead of running it yourself" — that's a student-level explanation.
- **Analogy probe.** What everyday or RCM-ops analogy captures this? "IAM policy evaluation is like a default-deny firewall — explicit allow + no explicit deny." If Karthik can't analogize, he doesn't have a model, he has terminology.
- **Catch the gap.** "You said X. So what about Y?" Probe the boundary cases. When the answer is "uh," that's where to keep digging.
- **Three-sentence test.** At the end of the discussion, ask Karthik to explain the concept in three sentences. If it takes more, it's not internalized yet.

Fires almost always. This is the lens that distinguishes pattern-matching ("I've seen this question type") from understanding ("I get the underlying principle").

### Lens 7 — Enterprise CEO + Solution Architect

*"If this concept came up in a real procurement meeting or architecture review — Gravitas pitching to a health system CTO, an RCM director asking about AI capabilities — would Karthik's answer hold up?"*

The CEO + SA cares about: business consequence, cost, vendor lock-in, real-world trade-offs at scale. (Compliance / PHI / threat dimensions belong to the Security Officer, Cloud Engineer, and Cybersecurity lenses below — keep them separated so each does its own work.)

- **What's the business consequence of getting this wrong?** Lost contract? Procurement-gate failure? Reputational hit with a health-system buyer? "Just an error" is rarely the answer.
- **Cost trade-off.** Most AWS concepts have a cost dimension the exam doesn't test heavily but procurement does. Bedrock on-demand vs provisioned, S3 storage class, NAT gateway egress, SageMaker endpoint hourly cost — name the cost shape.
- **Vendor lock-in / reversibility.** Is this a decision you can undo, or are you committing the client to AWS forever? Bedrock vs OpenAI vs self-hosted Llama is partly a lock-in conversation. Same for managed Postgres vs Aurora vs RDS.
- **Cite a real example from Karthik's portfolio.** "How does this show up in RCMToolKit / PractiApp / Gravitas-Pulse?" The portfolio under `~/Application/` is concrete evidence — use it. (Don't quote specific function names without grep-verifying — internals drift.)

Fires when the concept has a real-world business-judgment dimension. Always fires for AR Triage case-study brainstorms. Skips for pure-recall facts (e.g. "how many tokens is Claude 3 Sonnet's context window?").

### Lens 8 — Security Officer (HIPAA Officer)

*"As the HIPAA Privacy/Security Officer who signed the BAA, does this concept satisfy HIPAA? Where does PHI flow? What gets logged? What triggers breach notification?"*

The Security Officer cares about the **regulation side**: HIPAA Privacy Rule, Security Rule (administrative / physical / technical safeguards), Breach Notification Rule, minimum-necessary standard, accounting of disclosures, patient rights, BAA obligations. The lens asks *"what does HHS / HIPAA Academy expect, and would I sign off on this?"*

- **Where does PHI flow?** Trace it. Source (claim, EOB, patient record) → ingestion → storage → processing → output → audit log. Each hop is a HIPAA decision point. Concepts that touch PHI without a clear flow trace fail this lens.
- **Which Security Rule safeguard does this satisfy?** Administrative (workforce training, sanction policy, access management), Physical (facility access, workstation use, media disposal), or Technical (access control, audit controls, integrity, transmission security). Name the specific safeguard — vague "it's secure" doesn't pass.
- **BAA implications.** Does this concept require a BAA? Is the vendor (AWS / Bedrock / a third-party API) covered? If Karthik can't name whether a service is BAA-eligible, that's a CHP exam gap *and* a real-world procurement gap.
- **Minimum-necessary standard.** Does the system access only what's required? Are we pulling whole patient records when a claim ID would suffice? Over-collection is a HIPAA violation even without a breach.
- **Breach notification trigger.** If this concept failed, would it constitute a breach under HIPAA (unauthorized acquisition, access, use, or disclosure)? What's the 60-day clock implication?
- **Audit trail.** Is the action logged? Who can read the log? Can the log be tampered with? Audit-control technical safeguard is one of the most-tested CHP areas.
- **Patient rights.** Does this concept intersect with right-to-access, right-to-amend, right-to-accounting-of-disclosures, right-to-restrict? Easy to forget on the AI side, but CHP tests heavily.

**Always fires for CHP study (weeks 6-8).** Fires for AIF-C01 Domain 5 (Security, Compliance, Governance — 14% of exam) and MLA-C01 Domain 4 (Monitoring, Maintenance & Security — 24% of exam). Fires for any case-study work that touches PHI (the entire AR Triage narrative). Skips for pure-recall facts that have no PHI dimension.

### Lens 9 — Cloud Engineer

*"How do I actually build this safely in AWS? What's the IAM shape, the encryption posture, the network isolation, the audit pipeline?"*

The Cloud Engineer cares about the **AWS-implementation side**: IAM least-privilege, KMS key management, VPC and subnet isolation, security groups, encryption at rest (SSE-KMS, SSE-S3) and in transit (TLS 1.2+), CloudTrail audit logging, AWS Config rules, GuardDuty findings, Macie for PII detection. The lens asks *"what AWS controls satisfy the requirement, and what's the misconfiguration that would break it?"*

- **IAM shape.** Who/what calls this? What's the principal? What permissions are *just enough*? Beware `*:*` policies, wildcard resources, and role assumption chains that drift toward over-privilege.
- **Encryption posture.** At rest: which KMS key, customer-managed or AWS-managed, key rotation? In transit: TLS version, certificate management, mTLS where required? PHI workloads require customer-managed KMS keys for BAA compliance — name it.
- **Network isolation.** VPC, subnets (public vs private), VPC endpoints (interface vs gateway), Security Groups, NACLs, Transit Gateway. PHI workloads should live in private subnets accessed via VPC endpoints — no internet egress for data planes.
- **Audit pipeline.** CloudTrail (management + data events), CloudWatch Logs (encrypted with KMS), AWS Config (compliance state), GuardDuty (threat findings), Security Hub (aggregation). All ship to a centralized, immutable log archive. Tamper-evident is non-negotiable for HIPAA.
- **AWS service BAA status.** Not every AWS service is BAA-eligible. Bedrock yes (since 2024), SageMaker yes, Lambda yes, certain others no. Know the boundary — using a non-BAA-eligible service for PHI is a procurement-killer.
- **Misconfiguration mode.** What's the obvious-but-deadly mistake? Public S3 bucket, IAM role assumable by `*`, RDS without encryption, CloudTrail not enabled in all regions, Bedrock model invocation logs not configured. The exam loves these.

**Always fires for MLA-C01 (weeks 9-16)** — AWS architecture *is* the exam. Fires for AIF-C01 Domain 5 (security & governance) and the parts of AR Triage that touch infrastructure. Fires for CHP when the discussion crosses from regulation (Security Officer) into implementation. Skips for pure-HIPAA-regulation concepts with no AWS dimension.

### Lens 10 — Cybersecurity

*"What's the threat model? Who's the adversary? How does this fail under attack — not under accident?"*

The Cybersecurity lens cares about the **adversarial side**: threat modeling (STRIDE-ish — Spoofing, Tampering, Repudiation, Information disclosure, Denial of service, Elevation of privilege), attack surface, insider threat, supply-chain risk, AI-specific threats (prompt injection, jailbreaks, model extraction, training-data poisoning, PII leak via model output). The lens asks *"if someone wanted to break this, how would they?"*

- **Who's the adversary?** External attacker, malicious insider, compromised vendor, careless employee, hostile patient/competitor? Different adversaries have different capabilities — name the one that matters here.
- **Attack surface.** What's exposed? API endpoints, public buckets, IAM role assumption paths, third-party integrations, exposed credentials in code/logs/Slack. The bigger the surface, the more places to fail.
- **AI-specific threats.** Prompt injection (user input that hijacks model behavior), jailbreaks (bypassing guardrails), training-data poisoning (if fine-tuning on RCM data), model output PII leak (model regurgitating PHI from training), model extraction (adversary cloning the model via API queries). These are AIF-C01 Domain 5 and MLA-C01 Domain 4 territory, *and* real concerns for any RCM AI product.
- **Insider threat.** What can a disgruntled employee or compromised account do? Especially load-bearing for RCM where employees have legitimate PHI access. Are there break-glass procedures? Just-in-time access? Privileged-action review?
- **Supply chain.** What dependencies (Python packages, container base images, third-party APIs, Hugging Face models) could be compromised? A poisoned package in the data pipeline is a real risk.
- **Blast radius.** If compromised, what's the worst case? One patient record? One tenant? All tenants? Multi-region? Multi-customer (if multi-tenant SaaS)? The blast-radius answer drives the response priority.
- **Detection and response.** How quickly do we *know* about a compromise? What's the response runbook? Are there security playbooks for the obvious threats?

Fires for AIF-C01 Domain 4 (Responsible AI — adversarial robustness is in scope) and Domain 5 (Security). Fires for MLA-C01 Domain 4. Fires for AR Triage case-study brainstorms because real RCM systems are real attack targets. Fires for any concept that introduces a new external interface or third-party dependency. Skips for pure-recall facts with no adversarial dimension.

### How to apply study lenses in a discussion turn

- **Fire 2-4 lenses per round, never more.** Seven lenses available is a lot — the temptation to fire all of them turns analysis into parade. Pick the 2-4 that catch the failure modes that matter for the current round. Name them explicitly: *"Firing Test Writer + Security Officer this round because the concept tests trap distractors and PHI-flow."*
- **Surface the *disagreement* between lenses.** The most useful brainstorming moments are when one lens is satisfied and another is not. The Examiner might be happy ("Karthik can pick the right answer") while the Student lens isn't ("but he can't explain why"). The Cloud Engineer says "use S3 with SSE-KMS" while the Security Officer asks "but who has decrypt permission on that KMS key?" Don't hide the tension — surface it and ask Karthik to adjudicate.
- **Capture resolved tensions in the notes file's "Gotchas" section.** A future-Karthik reading the notes should see *why* the trap is a trap and *what* the lens conflict was, not just the final answer.
- **The HIPAA family (Security Officer + Cloud Engineer + Cybersecurity) often fires together, but each does distinct work.** Security Officer = regulation. Cloud Engineer = implementation. Cybersecurity = adversary. Don't collapse them — a HIPAA-compliant design (Security Officer happy) can still have a misconfigured KMS key (Cloud Engineer flag) and a prompt-injection path (Cybersecurity flag). All three need to land separately.

## Discussion rules

- **Discuss in plain prose, not in notes-file shape, until Karthik signals "write the notes."** Headers, bullet drafts, side-by-side comparisons — fine. Filling in the notes-file skeleton mid-discussion — not yet. Locking the artifact too early kills exploration.
- **One probing question per round when possible.** Stacking five questions in a single message is a stall — ask the most load-bearing one, get the answer, then proceed.
- **Use `AskUserQuestion` for clear forks**, prose for everything else. A fork is "which interpretation?", "Bedrock or SageMaker context?", "do you want the exam framing or the production framing?". Open-ended digging is prose.
- **Verify with citations, don't speculate.** When you claim "AWS documents X this way," cite the doc. When you claim "the AIF-C01 exam guide tests this in Domain N," cite the section. If you can't cite, say `[NEEDS VERIFICATION]`.
- **Push back when Karthik's confidence outruns his answer.** If he says "I get it, let's move on" but his last explanation had a gap, name the gap. The whole point of the skill is to catch the "I think I know this" moment that's actually "I memorized the words."
- **Honor the time budget.** If the session is sized for 45 min and we're at 60 min still on the same concept, name it: *"We're past budget on Bedrock-vs-SageMaker — want to write what we have, drop a `[CONTINUE NEXT SESSION]` flag, and come back?"*

## Drill mode (`--drill`)

If Karthik invokes `/brainstorm --drill <concept>` or asks for "drill me on X" / "tutor me on X" mid-session, switch from free Socratic to a structured loop:

1. **Karthik states what he thinks he knows** (60 seconds, no peeking at notes).
2. **You ask 3-5 probing questions** drawn from the seven lenses (firing the 2-4 that matter for this concept), named per question.
3. **Karthik answers each.**
4. **You summarize:** what's solid, what's shaky, what's wrong.
5. **Drill on the shaky parts** until the next confidence score shift would be honest.
6. **Optional: end with a 3-sentence teach-back** — Karthik explains the concept cold.

Drill mode is more mechanical and harder to fake understanding through. Default to Socratic; fall back to drill when Karthik asks or when the Socratic dialogue has stalled for two rounds.

## Convergence: when to write the notes

You're ready to write the notes file when **all** of these are true:

1. **Plain-English statement.** Karthik can state the concept in one sentence, no jargon, that would make sense to an RCM specialist who's never seen AWS.
2. **Named trap.** Karthik can name one trap answer or common confusion AWS / HIPAA Academy would use against this concept — and explain why it's a trap.
3. **RCM application.** Karthik can name one place this concept shows up in real RCM work (citing a system in `~/Application/`), OR an explicit "no RCM application — pure-exam concept" tag.
4. **CEO/SA defensibility.** If a Gravitas client asked "how would you use this," Karthik has an answer — not a perfect production design, but a defensible posture with named trade-offs (cost, vendor lock-in, business consequence).
5. **HIPAA / security posture** (when the concept touches PHI, security, or AI safety). At least one of the three security lenses (Security Officer, Cloud Engineer, Cybersecurity) has fired and its concerns are either resolved in the notes or captured in "Gotchas." For pure-recall concepts with no HIPAA/security dimension, this gate is satisfied by the explicit tag *"no PHI/security dimension — skipped HIPAA family."*
6. **Honest confidence score.** Karthik's confidence score for this domain has shifted, and the shift is defensible. If he says "5 now" but couldn't pass the teach-back test, it's not a 5. Be willing to say so.

Plus the user signal: Karthik has explicitly or implicitly said *"okay, write the notes."*

If any gate fails, keep discussing or switch to `--drill`.

## Writing the artifact

When ready:

1. **Propose the file path** based on the cert and sub-domain. Examples:
   - AIF-C01 concept → `aif-c01/notes/<sub-domain-slug>.md` (e.g. `d3-1-foundation-model-selection.md`)
   - CHP concept (when week 6+) → `chp/notes/<topic-slug>.md`
   - MLA-C01 concept (when week 9+) → `mla-c01/notes/<sub-domain-slug>.md`
   - Case-study concept → `docs/drafts/<slug>.md`
   - **Always confirm the path before writing.** If the parent folder doesn't exist yet, ask whether to create it (e.g. `chp/notes/` doesn't exist until week 6 — don't pre-scaffold).

2. **Write the notes file** in this shape (matching `consistency.md`'s notes convention):

   ```markdown
   # <Concept name>

   **Exam-guide ref:** <Domain N — section X.Y> (or `n/a` for case-study brainstorms)
   **Confidence (before → after):** N → M
   **Session date:** YYYY-MM-DD
   **Lenses fired:** <comma-separated list, e.g. Examiner, Test Writer, Security Officer, Cloud Engineer>

   ## Plain-English statement

   <One paragraph. No jargon. RCM-specialist-readable.>

   ## The concept

   <Headings for sub-points, bullets for facts, code blocks for AWS CLI / policy JSON / HIPAA citation snippets.>

   ## RCM application

   <One paragraph or bullet list. Cite a system in ~/Application/ if relevant. If pure-exam-only with no real-world RCM application, write "No direct RCM application — pure exam-objective concept" and stop.>

   ## HIPAA / security posture

   <Only present when one or more of the security family (Security Officer / Cloud Engineer / Cybersecurity) fired. Three sub-sections, only the ones that fired:
   - **HIPAA implications** (from Security Officer) — PHI flow, Security Rule safeguard, BAA, breach-notification trigger, minimum-necessary, audit trail.
   - **AWS implementation** (from Cloud Engineer) — IAM shape, encryption posture, network isolation, audit pipeline, misconfiguration mode.
   - **Threat model** (from Cybersecurity) — adversary, attack surface, AI-specific threats, blast radius.
   Omit this section entirely for pure-recall concepts that skipped the security family.>

   ## Gotchas

   <3-5 things AWS or HIPAA Academy phrases in confusing ways, the trap answers, the adjacent-concept boundaries, and lens-conflict resolutions (e.g. "Cloud Engineer says X, Security Officer adds Y caveat").>

   ## Sources

   <AWS docs, HHS pages, exam-guide section, video timestamp, practice-exam #. Every non-obvious claim cites something.>
   ```

3. **Optionally append flashcards.** If 3+ atomic facts came up worth memorizing, append them to `aif-c01/flashcards/<domain-slug>.md` (or the equivalent for the active cert). Match the existing flashcard format. Don't generate a flashcard for *every* sentence — only the ones worth Anki-spacing.

4. **Update `STUDY_LOG.md`.** Append (don't overwrite) the current week's entry with the hours spent in this session and the confidence-score delta. If the week doesn't have an entry yet, create one in the existing shape.

## Handoff (where the skill stops)

After writing the artifact(s), output exactly this nudge and exit. Don't offer to generate practice questions, don't offer to build a lab, don't volunteer the next concept. Those are separate sessions:

```
Notes written to <path>.
Flashcards appended: <count>  (or "none added — pure-concept session")
STUDY_LOG.md updated: Week <N>, +<X.X> hours, confidence <D> went <before>→<after>

Next moves (separate sessions):
  1. Generate practice questions on this concept → start a fresh session and ask
  2. Lab this in an AWS sandbox → fresh session, prompt with the concept + "build a lab"
  3. Move to the next sub-domain → fresh session, /brainstorm <next topic>

This skill is done.
```

### Why fresh sessions, not one long one

- **Brainstorm session** burns context on Socratic dialogue. By convergence, the conversation buffer is full of exploration the next task doesn't need.
- **Practice-question generation** needs a clean window to focus on exam-format trap-distractor generation, not re-litigate the concept.
- **Lab building** needs a clean window for AWS console / Terraform / CDK work without notes-discussion baggage.
- **Drift prevention** — keeping each artifact's session focused means each output is sharper.

## When NOT to use this skill

- **Pure-recall fact lookup.** "What's Claude 3 Sonnet's context window?" — just answer it; don't Socratic-discuss a number you can look up.
- **You already have notes on this concept** and just want them refined — say so; the skill will read the existing file first and adapt the discussion to the gaps rather than re-deriving from zero.
- **You're in the middle of a practice exam.** Finish the exam, log the score in `aif-c01/exam-log.md`, *then* brainstorm the concepts you missed.
- **The concept is from a domain that isn't on the active cert yet.** Don't brainstorm CHP concepts in week 4 — finish AIF-C01 first. Exception: a CHP concept that's load-bearing for the AR Triage case study.
- **You're inside `/loop` or a scheduled run.** Autonomy handed over — don't pause to Socratic-discuss.

## Anti-patterns (things this skill must NOT do)

- **Jump straight to writing notes from a one-line prompt.** That's the failure mode this skill exists to prevent. `/brainstorm bedrock guardrails` gets questions, not a notes file.
- **Skip a load-bearing lens silently.** Each lens catches a different way "I think I know this" fails. Skipping a lens silently means the failure it would have caught is still latent. If you intentionally skip — e.g. skipping the Security Officer for a no-PHI concept — *name the skip* so Karthik can challenge it. The HIPAA family (Security Officer + Cloud Engineer + Cybersecurity) is the highest-stakes skip; default to firing at least one of them whenever PHI is mentioned.
- **Invent AWS service limits, HIPAA citations, or exam-guide section numbers.** If you can't cite, say `[NEEDS VERIFICATION]`. Hallucinated facts in study notes are uniquely destructive — they get re-read and reinforced.
- **Accept "I get it" without the convergence gates passing.** If Karthik says "I'm good" but the Student lens hasn't fired, push back. The skill exists to catch the moment he *thinks* he understands and actually doesn't.
- **Fire all seven lenses ceremonially on every turn.** Performance, not analysis. Fire 2-4 lenses per round that matter for the current concept and name them. Reciting every lens header on every turn is the failure mode this rule prevents.
- **Generate practice questions from inside this skill.** Practice-question generation is a separate session with a different goal (exam-format mimicry, trap-distractor construction). Don't bundle.
- **Confirm a confidence score Karthik can't defend.** If he says "5" but couldn't teach-back, the score is whatever he could actually do, not what he wants it to be.
