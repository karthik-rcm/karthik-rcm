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
2. **Read the matching section of [`docs/plans/007-ai-fde-study-plan.md`](docs/plans/007-ai-fde-study-plan.md)**: the session STUDY_LOG points to. Source of truth for *what we should be doing*.
3. **State orientation back to Karthik in one line** — *"You're in Week N per the roadmap, current focus is X. Continuing."* If STUDY_LOG is stale or the request doesn't match the current focus, surface the mismatch instead of silently doing what was asked.
4. **Only then engage.**

Trivial off-roadmap requests (typo fix, format a file, answer a quick factual question) skip the protocol — use judgment. If the work changes a study artifact or progresses a cert, run the protocol. Full rule lives in [`.claude/rules/planning.md`](.claude/rules/planning.md).

## Behavioral rules — read these first

Four rules files live in `.claude/rules/` and apply to every session in this repo. Read them before doing substantive work:

- [.claude/rules/professor.md](.claude/rules/professor.md) — **you are Professor Claude**, Karthik's personal AIOps/MLOps professor; teach past the transcript, have fun, build an engineer not an exam-passer
- [.claude/rules/thinking.md](.claude/rules/thinking.md) — slow down before drafting; refuse to invent numbers; state assumptions explicitly
- [.claude/rules/planning.md](.claude/rules/planning.md) — every study session is Goal → Deliverable → Acceptance → Time-budget; no vague sessions
- [.claude/rules/consistency.md](.claude/rules/consistency.md) — one convention per artifact type; v1 sets the pattern; match exactly

## Repo-local skill

One repo-local skill lives at `.claude/skills/`:

- [`/brainstorm`](.claude/skills/brainstorm/SKILL.md): Socratic dialogue through seven lenses, 2 to 4 per round. Converges when Karthik can teach the idea cold, and clears HIPAA and security posture when PHI is involved. Folds what was learned into the chapter's source file in `fde-field-book/chapters/`. `--drill` for structured tutoring.

**The study loop is plan 007's.** See *How each session works* in [`docs/plans/007-ai-fde-study-plan.md`](docs/plans/007-ai-fde-study-plan.md): Claude drafts the chapter from official docs, Karthik reads it, deep dive, three-cloud table, lab, close out. `/brainstorm` is the deep-dive step when an idea needs more than one conversation. `/aiprof`, `/visual-kt` and `/quiz` were retired with the cert track on 10/30/2026.

**Source list:** every docs site a chapter cites is listed in [`docs/sources.md`](docs/sources.md). A site cited for the first time gets a row on Karthik's OK.

### Visualize complex topics with HTML — selectively

When a concept is **structural or relational** — a RAG pipeline, an agent loop, embedding space, where Bedrock Guardrails sit between user and model, a dense book chapter's data flow — build a single self-contained HTML file that draws it. Seeing the whole structure at once is how it lands in memory; prose flattens it. Same rule when decoding books: if a chapter's argument is a flow, a hierarchy, or a comparison, diagram it.

**Be picky. This is the exception, not the default.** Most of AIF-C01 is vocabulary and judgment calls ("fine-tune vs RAG") with nothing to draw — forcing a diagram there is wasted motion that slows the loop. Use HTML only when the topic is genuinely spatial/relational.

- **Test before building:** would the visual help Karthik *redraw it from memory and teach it cold*? If not, it's decoration — skip it. Recall, not art.
- **One self-contained `.html` file** — inline CSS/JS, no build step, opens in a browser directly. Interactive (expand/animate/step-through) only when interactivity aids understanding; otherwise a clean static diagram.
- **Scratch by default, promote the keepers.** Build visuals in a scratch location outside the committed tree (`/tmp/` or a gitignored dir). They're learning aids, not evidence. Only promote one into the repo (into the field book, `fde-field-book/`) if it's genuinely good enough to be public proof — and only on Karthik's OK, since this is a public repo.
- **HIPAA still applies.** A visual built off case-study material follows the same sanitization rules as everything else — no client names, no PHI, no fingerprinting numbers.

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

The live plan is [docs/plans/007-ai-fde-study-plan.md](docs/plans/007-ai-fde-study-plan.md) (since 2026-10-30; the cert track below is retired and kept for history, see [the archived roadmap](docs/plans/archive/001-roadmap.md)). Key facts from the retired track:

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
│       └── brainstorm/                    Socratic study skill (7 lenses)
├── docs/                                  Plans, drafts, decisions — see docs/README.md
│   ├── README.md                          Folder map + naming conventions
│   ├── sources.md                         Official docs sites chapters may cite
│   ├── plans/                             NNN-<slug>.md (e.g. 007-ai-fde-study-plan.md)
│   ├── drafts/                            Work-in-progress drafts (brain-dumps, iterations)
│   └── decisions/                         NNN-<slug>.md decision records (ADR-style)
├── fde-field-book/                        The book and its labs (plan 006)
│   ├── shell.html, book.css, book.js      Page frame, shared theme, shared script
│   ├── chapters/                          One source file per chapter (00-front, 01-agent-loop, ...)
│   ├── labs/                              chNN/ per chapter: synthetic data, our own code
│   ├── build.py                           python3 build.py stitches the book
│   └── fde-field-book.html                The finished book: the only file anyone opens
└── case-study-ar-triage/                  AR Triage case study (weeks 1-2)
    └── narrative.md
```

The cert notes that lived in `aif-c01/` were removed on 10/30/2026 and remain in git history.

## Quick reference — file roles

| File / folder | Role | Update cadence |
|---|---|---|
| `README.md` | Public positioning. Recruiter/client-facing. | Rare — only when positioning shifts |
| `STUDY_LOG.md` | Weekly progress + confidence scores. | Weekly |
| `docs/plans/007-ai-fde-study-plan.md` | Live study plan: 15 agent-engineering sessions from official cloud docs. | Per session (status) and per decision |
| `docs/plans/NNN-*.md` | Sub-plans (sessions, revision passes). | Per planning session |
| `docs/drafts/*.md` | Brain-dumps, narrative iterations, in-flight drafts. | Per drafting session |
| `docs/decisions/NNN-*.md` | Decision records — what we chose and why. | Per non-obvious decision |
| `docs/sources.md` | Official docs sites chapters may cite. | When a new source needs adding (with approval) |
| `fde-field-book/chapters/` | One source file per chapter, built into `fde-field-book.html` (plan 006). | Per session |
| `fde-field-book/labs/chNN/` | Each chapter's lab prototype. | Per session |
| `case-study-ar-triage/narrative.md` | Sanitized case study draft. | Wks 1-2, then maintained |
