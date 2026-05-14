# CLAUDE.md — karthik-rcm

Repo-local instructions. Loaded automatically when Claude Code runs in this directory. Cross-project conventions (PractiCons tracker, Cognito flow, operator identity) live in `~/.claude/CLAUDE.md` — do NOT duplicate them here.

## 💰 Value framing — time, effort, money

Every case study, narrative, post, or buyer-facing story we write revolves around three outcomes: **save time, save human effort, save money.** Nothing else. People care about those three — not "elegant architecture," not "modern stack," not "AI-powered" as a feature.

When drafting:
- Lead with the time/effort/money outcome, not the technology.
- The technology (Bedrock, RAG, agents) is the *how*, never the *what*.
- Every claim needs a number — hours saved per week, FTE-equivalents freed, $ recovered, $ avoided.
- "AI-powered" alone is not a value proposition. "Cuts denial-appeal drafting from 20 min to 2 min" is.

If a draft drifts into stack-flexing or feature-listing, push back: "what's the time/effort/money number behind this?"

## 💬 Conversation style — not a newsletter

Karthik wants conversation, not walls of text. Keep responses tight.

- **Default to short.** Most replies are 1-5 lines. A paragraph is fine; three paragraphs needs a reason.
- **One question at a time when probing.** Don't stack 6 questions in a single message — ask the most load-bearing one, get the answer, proceed.
- **No tables, headers, or bullet-lists unless the content actually needs structure.** A comparison of 4 options needs a table; a yes/no question doesn't.
- **No "here's what I'll do" preambles.** Just do it (or ask the one thing blocking you).
- **No closing summary of what was just said.** The user read it.
- **Skip section headers in short replies.** `## What I did` for a 3-line answer is overkill.

Long responses are reserved for: deliberate plan documents, file content being written, or when Karthik explicitly asks for depth. Default is terse.

## 🧭 Before you do anything substantive — session-start protocol

**This repo is anchored on a roadmap. Every session orients against the roadmap before engaging.** The protocol is a hard gate, not a suggestion — drift from the roadmap is the failure mode that wastes session time and scaffolds the wrong thing.

1. **Read [`STUDY_LOG.md`](STUDY_LOG.md)** — the "Where we are right now" block at the top names the current week and current focus. Source of truth for *where we are*.
2. **Read the matching section of [`docs/plans/001-roadmap.md`](docs/plans/001-roadmap.md)** — the week-range or cert-section STUDY_LOG points to. Source of truth for *what we should be doing*.
3. **State orientation back to Karthik in one line** — *"You're in Week N per the roadmap, current focus is X. Continuing."* If STUDY_LOG is stale or the request doesn't match the current focus, surface the mismatch instead of silently doing what was asked.
4. **Only then engage.**

Trivial off-roadmap requests (typo fix, format a file, answer a quick factual question) skip the protocol — use judgment. If the work changes a study artifact or progresses a cert, run the protocol. Full rule lives in [`.claude/rules/planning.md`](.claude/rules/planning.md).

## Behavioral rules — read these first

Three rules files live in `.claude/rules/` and apply to every session in this repo. Read them before doing substantive work:

- [.claude/rules/thinking.md](.claude/rules/thinking.md) — slow down before drafting; refuse to invent numbers; state assumptions explicitly
- [.claude/rules/planning.md](.claude/rules/planning.md) — every study session is Goal → Deliverable → Acceptance → Time-budget; no vague sessions
- [.claude/rules/consistency.md](.claude/rules/consistency.md) — one convention per artifact type; v1 sets the pattern; match exactly

## Repo-local skills

Three repo-local skills live at `.claude/skills/`. They form a clean three-stage study loop — each does one job, none overlap:

| Stage | Skill | Job | Output |
|---|---|---|---|
| Input | [`/aiprof`](.claude/skills/aiprof/SKILL.md) | Pull authoritative sources via verified `WebFetch`, synthesize a structured lesson. Every claim cites a fetched URL from [`docs/sources.md`](docs/sources.md). No fetch, no citation. | First notes file on a topic (`<cert>/notes/<topic>.md`) |
| Internalization | [`/brainstorm`](.claude/skills/brainstorm/SKILL.md) | Socratic dialogue through seven lenses: **knowledge family** (Examiner, Test Writer, Student) + **real-world family** (Enterprise CEO + SA, Security Officer / HIPAA Officer, Cloud Engineer, Cybersecurity). Fires 2-4 lenses per round. Converges when Karthik can teach cold + clears HIPAA/security posture if PHI is involved. `--drill` for structured tutoring. | Extends the notes file with understanding + gotchas; optional flashcards |
| Output | [`/quiz`](.claude/skills/quiz/SKILL.md) | Generates exam-format MCQs *only* from notes Karthik has studied, with trap distractors. Scores, identifies weak sub-domains. `--mock-exam` for timed full-exam simulation. | `<cert>/practice-questions/<dated>.md` + row in `<cert>/exam-log.md` + STUDY_LOG update |

**Typical loop on a topic:** `/aiprof bedrock-guardrails` → `/brainstorm bedrock-guardrails` → `/quiz aif-c01 bedrock-guardrails`. Each in a fresh session — that's how the artifacts stay sharp.

**Source list:** every URL `/aiprof` is allowed to cite lives in [`docs/sources.md`](docs/sources.md). Off-list URLs require explicit approval before fetching.

---

## What this repo is

`karthik-rcm` is Karthik Ramesh's **public evidence trail** for the 16-week AI Healthcare Certification plan (AIF-C01 → CHP → MLA-C01) plus the AR Triage case study. It is **not** a portfolio site, landing page, or bio destination.

**Three-surface split — do not collapse:**

| Surface | Purpose | Path |
|---|---|---|
| Conversion site | Prospect-facing. New case-study pages get added here as routes. | `~/Application/Gravitas/` |
| Portfolio + bio source of truth | Authored once, referenced everywhere. | `~/Application/gravitas-marketing/{portfolio,profile}.md` |
| **Public evidence trail (this repo)** | Study log, exam log, sanitized notes, case-study narrative + diagrams. | `~/Application/karthik-rcm/` |

Do NOT scaffold `portfolio.md`, `profile.md`, `bio.md`, a landing page, or marketing copy inside this repo. LinkedIn posts and marketing drafts live in `~/Application/gravitas-marketing/`.

---

## Study plan context

The roadmap is in [docs/plans/001-roadmap.md](docs/plans/001-roadmap.md). Key facts that shape every session:

- **Time budget:** 3-5 hrs/week (light). Adjusted timeline ~28-32 weeks, not the 16 the plan was sized for.
- **Start date:** 2026-05-16 (Week 1 = AR Triage case study).
- **Sequence:** AR Triage case study (wks 1-2) → AIF-C01 (wks 3-5) → CHP (wks 6-8) → MLA-C01 (wks 9-16).
- **Folders are created when the week arrives.** Don't pre-scaffold `chp/` or `mla-c01/` — adds noise. They get created when Karthik reaches week 6 and week 9 respectively.

The value of certs is the **combination**: passed exam + public proof + applied case study + buyer-translated outcome. This repo only owns the "public proof" slice.

---

## HIPAA + sanitization rules — non-negotiable

The AR Triage case study (and any future case study) draws on real RCM engagements. Karthik does NOT name clients. The following are banned from anything that gets committed to this repo:

- **Client name** — ever. No "the Texas group," no initials, no parent company.
- **City or state** if it narrows to a single practice
- **Specialty** if combined with size it identifies the practice
- **Payer name** unless the story genuinely requires it (and even then, generalize first — "a major commercial payer")
- **Provider names, NPI, TIN, EIN, MRN, claim numbers, dates of service**
- **Exact $ amounts that could fingerprint the practice** — convert to ranges or % deltas
- **Internal product names** that aren't public

When extracting facts from Karthik's brain-dumps:
- **Mirror back what he said in clean bullets before writing to a file.** Get confirmation.
- **Never invent numbers.** If he says "AR was bad," the file does not say "$2.3M in 90+." It says `[UNKNOWN — need to check]`.
- **Never smooth over gaps.** Plausible-sounding fabrication is the failure mode to avoid.
- **Flag anything that smells like PHI or a fingerprint as you write it**, not after.

---

## The case-study brain-dump workflow

Standard protocol when Karthik is dumping facts (often via voice-to-text):

1. **He talks.** May be rambling, out of order, with `[inaudible]` or transcription noise.
2. **You restate** the facts you heard as clean bullets. No interpretation, no smoothing. "Here's what I heard — did I get this right?"
3. **He confirms or corrects.** Fast.
4. **You write to `case-study-ar-triage/raw-notes.md`** with only confirmed facts. Anything unconfirmed → `[UNKNOWN]` or omitted.
5. **You challenge weak spots:** "You said 40% recovery improvement — is that defensible if someone asks for the methodology?"
6. **Tag sanitization needs inline:** `[KEEP]`, `[RANGE]`, `[REMOVE]`, `[GENERALIZE]`. Don't rewrite during the dump — tag now, rewrite later.

---

## Operator capability — use it

Karthik has shipped most of what the certifications cover. Before asking generic questions or drafting from scratch, **read from `~/Application/`** to ground the work in what actually exists:

- `RCMToolKit` (RevenueSphere), `PractiApp`, `CredixOne` — RCM production code, denial workflows, 835/EOB pipelines, payer policy retrieval
- `PractiApp`, `PractiHR` — RLS policies, field-level AES-256 encryption, audit logs, BAA-relevant workflows (huge overlap with CHP exam)
- `Gravitas`, `Gravitas-Pulse`, `gravitasinvoice` — Gravitas products + agent architecture
- `AgentPlatform` — Bedrock / agent infra, useful as MLA-C01 lab base

Caveat: the inventory above is current as of 2026-05-15. Don't quote specific file paths or function names without `grep`-ing to confirm they still exist — internals drift within weeks.

---

## What you (Claude) should do without being asked

- **Update `STUDY_LOG.md`** at the end of any session where Karthik logged study hours or completed deliverables. Append, don't rewrite past weeks.
- **Update `aif-c01/exam-log.md`** when he reports a practice-exam score. New row per attempt, weak areas extracted.
- **Flag drift** if you notice the AR Triage narrative starts smelling like marketing copy (vague claims, no numbers, hero language). Push back toward defensible facts.
- **Refuse PHI.** If Karthik accidentally pastes something with a client name, NPI, MRN, etc., stop and flag it before it lands in a file or commit.

---

## What you should NOT do without confirmation

- Commit or push (always confirm first — this is a public repo on his GitHub profile).
- Create new top-level folders. The structure is deliberate; new folders need a reason.
- Pre-scaffold `chp/`, `mla-c01/`, or speculative subdirectories. Wait for the week.
- Copy `portfolio.md`, `profile.md`, headlines, or any marketing content from `~/Application/gravitas-marketing/` into this repo. The redirect is intentional.
- Add a landing page, hero section, or "about me" expansion. The existing README.md is the positioning — don't dilute it.

---

## Commit style

- Subject ≤ 72 chars, imperative ("Add", "Remove", "Update")
- Body explains the *why* in 1-2 sentences, not the *what* (diff shows the what)
- Always include the `Co-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>` trailer when you authored the change
- Never amend pushed commits. New commit instead.

---

## Repo structure

```
karthik-rcm/
├── README.md                              Public positioning (recruiter/client-facing)
├── STUDY_LOG.md                           Weekly progress + confidence scores
├── CLAUDE.md                              This file — repo-local Claude instructions
├── .claude/
│   ├── rules/                             Behavioral rules (thinking, planning, consistency)
│   └── skills/
│       ├── aiprof/                        AI Healthcare Professor — verified-fetch lessons
│       ├── brainstorm/                    Socratic study skill (7 lenses)
│       └── quiz/                          Exam-format MCQs, scored, weak-area tracking
├── docs/                                  Plans, drafts, decisions — see docs/README.md
│   ├── README.md                          Folder map + naming conventions
│   ├── sources.md                         Authoritative source list — /aiprof cites only from here
│   ├── plans/                             NNN-<slug>.md (e.g. 001-roadmap.md)
│   ├── drafts/                            Work-in-progress drafts (brain-dumps, iterations)
│   └── decisions/                         NNN-<slug>.md decision records (ADR-style)
├── aif-c01/                               AIF-C01 study artifacts (weeks 3-5)
│   ├── exam-log.md
│   ├── notes/
│   ├── practice-questions/
│   ├── flashcards/
│   └── labs/
└── case-study-ar-triage/                  AR Triage case study (weeks 1-2)
    └── narrative.md
```

`chp/` and `mla-c01/` folders get created when those weeks arrive (week 6, week 9). Don't pre-scaffold.

## Quick reference — file roles

| File / folder | Role | Update cadence |
|---|---|---|
| `README.md` | Public positioning. Recruiter/client-facing. | Rare — only when positioning shifts |
| `STUDY_LOG.md` | Weekly progress + confidence scores. | Weekly |
| `docs/plans/001-roadmap.md` | Master 16-week roadmap (3 certs + case study). | Rare — only when cert sequence changes |
| `docs/plans/NNN-*.md` | Sub-plans (sessions, revision passes). | Per planning session |
| `docs/drafts/*.md` | Brain-dumps, narrative iterations, in-flight drafts. | Per drafting session |
| `docs/decisions/NNN-*.md` | Decision records — what we chose and why. | Per non-obvious decision |
| `docs/sources.md` | Authoritative source list `/aiprof` cites from. | When a new source needs adding (with approval) |
| `aif-c01/exam-log.md` | Practice + real exam attempts. | Per attempt |
| `aif-c01/notes/` | Domain notes. | Per study session |
| `aif-c01/practice-questions/` | Generated practice Qs. | Per generation pass |
| `aif-c01/flashcards/` | Anki-format flashcards. | Per topic |
| `aif-c01/labs/` | AWS sandbox lab notes + IaC. | Per lab |
| `case-study-ar-triage/narrative.md` | Sanitized case study draft. | Wks 1-2, then maintained |
