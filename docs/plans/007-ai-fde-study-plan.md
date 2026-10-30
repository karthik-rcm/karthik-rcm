# AI FDE Study Plan: agents, taught from official cloud docs

**Status:** Draft
**Owner:** Karthik
**Date:** 2026-10-30
**Type:** plan
**Supersedes:** [005-udemy-ai-fde-course.md](archive/005-udemy-ai-fde-course.md) and [001-roadmap.md](archive/001-roadmap.md)

---

Learn to build and ship AI agents the way a forward deployed engineer (FDE) does: on the client's problem, on the client's cloud. No course and no videos. Claude teaches each topic from official documentation (Microsoft Learn, Google Cloud docs, AWS docs) through the chapters of the field book in [006](006-ai-fde-field-book.md). The 15-topic order comes from the outline of the Udemy course in 005, which was not bought (now [archived](archive/005-udemy-ai-fde-course.md)).

## Goal

- **Goal:** build agents end to end, from a hand-written loop to a governed production deploy, and explain each choice on Azure, Google Cloud and AWS.
- **Deliverable:** 15 chapters in the field book (006), each with a working lab prototype in `fde-field-book/labs/chNN/`.
- **Acceptance:** per session, Karthik explains the core idea cold, finishes the lab, and fills its "Your build" block with what was built and measured.
- **Budget:** about 3 hours per session (read together, deep dive, lab). 15 sessions is about 45 hours, 9 to 15 weeks at 3 to 5 hours a week. Session 0 is about 1 hour. Claude's chapter drafting happens before the session and is not counted in Karthik's hours.

## How each session works

1. **Draft.** Claude writes the chapter from official docs checked that day, with interactive pictures and a lab spec. Built just before the session, not ahead, because models, prices and features change monthly.
2. **Read together.** Karthik reads it. Claude flags the 2 or 3 ideas most worth going deep on.
3. **Deep dive.** Short turns, RCM examples, where it breaks, what a client will ask.
4. **Three clouds.** One short table: how Azure, Google Cloud and AWS each do this topic, each from its own docs.
5. **Lab.** Karthik builds the prototype in `fde-field-book/labs/chNN/`.
6. **Close out.** Fill "Your build", set the chapter's status in 006, log hours and confidence in `STUDY_LOG.md`, mark the session done here.

## Ground rules

- **Official docs only.** Microsoft Learn, Google Cloud docs, AWS docs, each with the date checked. A topic none of them covers is flagged, never taught from memory. A docs site cited for the first time gets a row in [`docs/sources.md`](../sources.md) on Karthik's OK.
- **Free first.** Sessions 1 to 10 run on free local models (Foundry Local on the Mac). No cloud spend.
- **Azure from Session 11.** Hands-on cloud labs run on Azure, on Karthik's business tenant (named only in the gitignored `.env`). Google Cloud and AWS are covered by the comparison table, not by labs. An Azure budget alert goes on in Session 11 before the first paid call. Each lab uses its own resource group and is deleted after. Session 15 ends with a full teardown and a cost check.
- **Generic prototypes of real problems.** Each lab is modeled on a real problem from an RCM product Karthik works on (coding suggestions, appeal letters, denial work), or a client workflow where it fits. Data model, prompts and code are our own. A prototype that proves out becomes a sprint plan in that product's repo, under its rules.
- **Nothing identifying in this public repo.** No company, tenant, subscription, product or client names, anywhere in the repo, plans included. Tenant and resource names come from a gitignored `.env`. The blocked names live in a gitignored `.name-guard` file, never in a committed file. No code copied from client or product repos. No PHI, synthetic data only.

## Sessions

| # | Topic | Lab | Cost |
|---:|---|---|---|
| 1 | The agent loop from scratch; the FDE role | Hand-written loop, one tool, no framework | Free |
| 2 | Tokens, context, cost; structured output; first claims agent | Agent with 2 tools on 10 synthetic claims, 2 local models compared | Free |
| 3 | Coding agents and the agent development lifecycle (light: done daily) | Claude Code plans a pilot in phases with success criteria | Free |
| 4 | Open vs proprietary models, local inference, quantization, cost per claim | Two local models on accuracy and speed; cloud cost per claim worked from pricing pages | Free |
| 5 | Harness engineering, sub-agents, build vs buy | A main agent hands a task to a sub-agent | Free |
| 6 | Architecture traps, evals (precision, recall, kappa), tracing | An eval set and traces for the claims agent | Free |
| 7 | Retrieval (RAG), MCP, short and long-term memory | Retrieval over synthetic payer policies, exposed as an MCP tool | Free |
| 8 | Durable workflows, checkpoints, human sign-off | A claim that pauses for approval, survives a killed process, resumes | Free |
| 9 | Many agents: fan-out, rate limits, retries | 5, then 25 claim agents with a concurrency cap and retries, against a local stand-in that rejects calls over a set rate (a local model has no rate limit of its own) | Free |
| 10 | LLM as a judge, an improver loop with human approval | A judge plus 3 approved improvement rounds | Free |
| 11 | Discovery, governance, responsible AI, cloud setup | Azure budget alert, least-privilege identity, setup check | Paid |
| 12 | Agent security: prompt injection, guardrails, gateways, policy | Catch an injection; put a gateway and a policy in front of a tool | Paid |
| 13 | The enterprise context layer, integrations, managed memory | A context service as an MCP server with identity-based auth | Paid |
| 14 | Production: configuration, secrets, managed runtime | Deploy the claims agent, run 25, sign off and send back | Paid |
| 15 | Capstone copilot and handover | A biller copilot with per-user memory, then full teardown and cost check | Paid |

Which Azure service backs each paid lab is picked from Microsoft Learn at that session. The Session 11 budget alert only notifies: Azure budgets never stop spending (Microsoft Learn, "Create and manage budgets", checked 10/30/2026), so the per-lab resource group delete stays the real cost control. The amount is open, see *Open*.

### Session 0: retire the old track

- **Goal:** make this the live plan, so the session-start check reads the right file.
- **Deliverable:**
  - `docs/decisions/003-<slug>.md`: retiring the cert track and the Udemy course, Azure labs on Karthik's business tenant, generic prototypes modeled on real RCM product problems, superseding decision 002. Written without company, product or client names.
  - Done 2026-10-30: 001 and 005 superseded and archived, every link repointed, `STUDY_LOG.md` "Where we are" block set to this plan.
  - Done 2026-10-30: `aif-c01/` removed (moved to Trash; committed versions stay in git history). Still to do: update every repo file that points at it: CLAUDE.md, STUDY_LOG.md, docs/README.md, decision 001, `.claude/rules/` (consistency, planning) and `.claude/skills/` (aiprof, brainstorm, quiz, visual-kt).
  - Scrub the uncommitted working copies of 006 and `archive/005` before anything is committed: both name the product and clients today (006 line 69; archive/005 lines 85, 92, 97, 114, 117). Same generic wording as this plan.
  - Reconcile 006 with this plan. 006 still describes the course it replaced: "the 21.5-hour course" and "about 4.5 hours per course Day" with video (Goal, Budget, Decisions), "before Karthik watches Day N", "finishes its lab on Azure" for every chapter (Acceptance, step 4), Ollama and OpenRouter where this plan uses Foundry Local, a Chapter 4 lab with an Azure deployment inside the free sessions, the Claude Agent SDK (Chapter 5) and LangGraph's `interrupt()` (Chapter 8) where this plan now uses Microsoft Agent Framework, and "005's decision log" and "005 Session 0's grep hook" where this plan now owns both.
  - `.gitignore`: add `.name-guard`. Create `.name-guard` locally with one blocked name per line: the client and product names, the tenant domain.
  - `.pre-commit-config.yaml`: a local `name-guard` hook that reads `.name-guard`, checks only the added lines of every staged file (`git diff --cached -U0`), case-insensitive, whole word. It fails closed: a missing or empty `.name-guard` blocks the commit with a message saying to create it. The `.name-guard` list applies repo-wide, not only `fde-field-book/`, because plans and decisions leak names too. Those names never appear in the hook config. The company name is blocked only in added lines under `fde-field-book/`, so the book and labs stay clean while edits to files that already name it (CLAUDE.md, README.md, rules, skills) still commit. It can sit in the hook config, since it is already public in the repo.
  - `docs/sources.md`: rows for the Microsoft Learn Foundry Local and Agent Framework docs, on Karthik's OK, so Session 1 can cite them. Google Cloud docs get their row at the first session that cites them.
- **Acceptance:**
  - `grep -rn` for both old plan file names finds only archive links, history entries and the naming example in `CLAUDE.md`.
  - Decision 003 exists, and `grep -rn "aif-c01/"` outside `docs/plans/archive/` and git history finds nothing.
  - `grep -rnwiFf .name-guard --exclude=.name-guard --exclude-dir=.git .` finds nothing in the working tree.
  - A test commit with a `.name-guard` name in any file is blocked, and a test commit with `.name-guard` moved away is blocked.
  - A test commit adding the company name under `fde-field-book/` is blocked; the same line added to `docs/` commits.
- **Budget:** 1 hour.

### Session 1

- **Goal:** the agent loop from scratch.
- **Deliverable:** a Python script of about 50 lines that calls a free local model with one tool, no framework, in `fde-field-book/labs/ch01/`. The model is one `foundry model list` shows with `tools` in its Task column (Foundry Local CLI, preview, installed with Homebrew on Apple Silicon; Microsoft Learn, checked 10/30/2026). Before the session, Claude moves Chapter 1 from `scratch/visuals/fde-course-map.html` into the book layout (006, *How the book is built*): `shell.html`, `book.css`, `book.js`, `build.py` and `chapters/01-agent-loop.html` with its IDs prefixed `ch1-`.
- **Acceptance:** explain the loop cold: the model asks for a tool, the code runs it, the result goes back, repeat until the model stops asking. The built `fde-field-book.html` shows Chapter 1 looking and behaving as the scratch file did, in light and dark.
- **Budget:** 3 hours. **Cost:** nothing.

## Open

- Monthly Azure budget alert amount for Sessions 11 to 15. Needed before Session 11; Sessions 0 to 10 are not blocked by it. <!-- decision needed: monthly budget alert amount (recommended $50, alerts at 50/80/100% actual plus a forecast alert). Karthik left this undecided on 10/30/2026. -->

## Decision log

- 2026-10-30: The earlier cert track retires in full: AIF-C01, MLA-C01, CCA-F and the parked CHP. `aif-c01/` is removed from the repo; its notes remain in git history.
- 2026-10-30: The Udemy course is not bought and no videos are watched. Claude teaches from official docs. This plan supersedes 005 and keeps its 15-topic order.
- 2026-10-30: Each topic gets a three-cloud comparison (Azure, Google Cloud, AWS), because Karthik's clients run on all three. Hands-on cloud labs run on Azure only: one account, one budget, one teardown.
- 2026-10-30: Sessions 1 to 10 use free local models. Foundry Local runs on macOS (Apple Silicon) and supports tool calling (Microsoft Learn, checked 10/30/2026). Azure OpenAI has no free tier, so paid calls start in Session 11.
- 2026-10-30: Azure labs run on Karthik's business tenant. Nothing identifying it lands in this public repo.
- 2026-10-30: Labs are generic prototypes in `fde-field-book/labs/chNN/`, modeled on real RCM product problems, client workflows where they fit. Chosen over a local worktree of the product: the full stack would eat lab time. Integration with the product's real code is learned when a prototype is promoted to a sprint in that repo. A deliberate break from [decision 002](../decisions/002-build-anchored-cert-track.md)'s PractiHR lab spine.
- 2026-10-30: The book and labs live in a new top-level `fde-field-book/` folder, approved by Karthik. Lab notes are each chapter's "Your build" block.
- 2026-10-30: A pre-commit name-guard hook blocks company, product and client names in added lines anywhere in the repo. The list lives in a gitignored `.name-guard` file, because a list in the committed hook config would publish the names it guards. gitleaks catches secrets, not names.
- 2026-10-30: Labs from Session 2 use Microsoft Agent Framework (Python). It runs on Foundry Local through `FoundryLocalClient` in the free sessions, has workflow checkpoints and human sign-off for Session 8, and moves to Azure in Session 11 without a framework change (Microsoft Learn, checked 10/30/2026). Google's and AWS's own agent kits are covered in the comparison tables only. Chosen over LangGraph, which no cloud vendor documents as its own, and over hand-written loops past Session 1.
- 2026-10-30: The company name is blocked only under `fde-field-book/`. Client and product names stay blocked repo-wide. The repo already names the company in 16 tracked files, and README.md shows a company email address.
- 2026-10-30: The Azure budget alert notifies only. Azure budgets cannot stop spending; the per-lab resource group delete is the cost control.
- 2026-10-30: Session 9 simulates rate limits locally. 006's plan relied on free cloud models' rate limits to make the retry lesson real; a local model has none.
