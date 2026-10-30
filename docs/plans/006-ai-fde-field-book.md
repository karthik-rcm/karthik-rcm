# AI FDE Field Book

**Status:** Draft
**Owner:** Karthik
**Date:** 2026-10-30
**Type:** plan

---

The book for the study plan in [007-ai-fde-study-plan.md](007-ai-fde-study-plan.md), taught from official docs with no course or videos. 15 chapters, one per session, each written in its own file and built into one shareable HTML file. We build each chapter, read it together, then go deep on the nuances. Reusable by a team. Each Part ends with one LinkedIn post.

## Goal

- **Goal:** turn plan 007's 15 topics into a book we can learn from, teach from and share.
- **Deliverable:** one self-contained HTML file with a table of contents, 3 Parts and 15 chapters, built from one source file per chapter. Every structural idea gets an interactive picture.
- **Acceptance:** for each chapter, Karthik explains its core idea cold and finishes its lab: on a free local model in Chapters 1 to 10 (Chapter 3 uses Karthik's existing Claude Code plan instead), on Azure from Chapter 11. Proof is the chapter's "Your build" block set to `Status: done`, with what was built and what was measured, and any Azure resources torn down.
- **Budget:** about 3 hours per session (read together, deep dive, lab), as in 007. About 45 hours in all, 9 to 15 weeks at 3-5 hours a week. Claude's drafting is not counted.
- **Roadmap fit:** plan 007 replaces the whole earlier cert track (settled 2026-10-30, see 007's decision log). 007's Session 0 archives the roadmap and updates `STUDY_LOG.md`.

## How each chapter gets made

1. **Build.** Claude drafts the chapter in its own file: topic sections, interactive pictures, lab spec. Official docs are checked live while writing, never from memory: each tool's own vendor or project docs, per 007's ground rules. Claude then rebuilds the book and checks it in light and dark.
2. **Read together.** Karthik reads it. Claude flags the 2 or 3 ideas most worth going deep on.
3. **Teach the nuances.** Professor mode: short turns, RCM analogies, where it breaks, what a client will probe. Good insights go back into the chapter.
4. **Lab.** Karthik builds the chapter's lab with synthetic data: on a free local model (Foundry Local) in Chapters 1 to 10 (Chapter 3 uses Karthik's existing Claude Code plan instead), on Azure from Chapter 11. Every Azure lab runs in its own resource group (`rg-fde-chNN`) and ends with `az group delete` and a look at Cost Management. Things like Azure AI Search, PostgreSQL and API Management bill by the hour while idle, not only per call.
5. **Post (end of each Part only).** After Chapters 5, 10 and 15, one LinkedIn draft built from that Part's measured lab results.

Build chapter N just before session N, not all 15 up front. Model names, prices and vendor features change monthly, and the read-together step is the quality gate.

## How the book is built

One source file per chapter, stitched into one HTML file. Editing chapter 5 touches one small file, and readers still get a single file that opens offline. Offline, the Google Fonts link fails and the page falls back to system fonts; everything else works.

```
fde-field-book/
  shell.html            page frame and the full 15-chapter contents list
  book.css              the theme, light and dark, shared by every chapter
  book.js               theme button, contents highlighting
  chapters/
    00-front.html       how to read this book
    01-agent-loop.html  one file per chapter, added as we go
  labs/
    ch01/               each chapter's prototype: generic, synthetic data, our own code
  build.py              stitches it all into the finished book
  fde-field-book.html   the finished book: the only file anyone opens or shares
```

- **Build step:** `python3 build.py` reads `shell.html`, inlines `book.css` and `book.js`, and inserts the chapter files in filename order. Standard library only, no packages. Claude runs it after every chapter edit.
- **Contents list:** lives in `shell.html`. A chapter's entry switches from "coming soon" to section links when its file lands.
- **No clashes between chapters:** every element ID in a chapter starts with its number, in the form Chapter 1 already uses for its section anchors (`ch1-1`), so `ch1-next`, `ch5-stage`. Each chapter's script is wrapped so its variables stay inside it. Styles only one chapter needs go in a `<style>` inside its file, every rule scoped under that chapter's section (`#ch5 .stage`), so one chapter's CSS cannot restyle another.
- **The finished file is the one we commit and share.** Source and output are committed together, so the book on GitHub always matches its sources.
- **Migration:** Done 2026-10-31: computed styles and positions matched the old file in light, dark and three picture states; old file moved to Trash. Chapter 1 moves from the current single file (`scratch/visuals/fde-course-map.html`) into this layout before Session 1. Its picture's element IDs are not prefixed today (`stage`, `packet`, `b-next`, `narr` and others), so the move renames them to `ch1-` and updates the matching CSS and script lookups. The result must look and behave the same as today in light and dark. The old single file is then retired: moved to Trash, its `.gitignore` exception removed, and the `CLAUDE.md` repo-structure tree updated for the new folder.

## Chapter shape (Chapter 1 sets it)

- **Header:** chapter number, its Part, the Part's theme, a one-sentence lede.
- **Topic sections** (N.1, N.2, ...): one per idea, each naming the course lectures it covers (outline below). A picture only where the idea is structural.
- **Professor's notes:** RCM bridges and production reality, marked as our reasoning.
- **Three clouds:** one short table of how Azure, Google Cloud and AWS each do the chapter's topic, each from its own docs.
- **Check yourself:** 3 to 5 questions with click-to-reveal answers, written by us.
- **Your build:** Goal, Deliverable, Acceptance, Budget, Status.
- **Sources:** the official docs each chapter's code was checked against, with the date. A docs site cited for the first time gets a row in [`docs/sources.md`](../sources.md) in the same change.

## House rules

- **Our words only.** Official docs are cited and linked, never copied. The topic order follows the course outline in archived 005, and the book credits that course in its front matter.
- **Synthetic data only.** Made-up claim IDs and results. Real denial codes (CARC) are fine; they are public.
- **Azure.** Hands-on cloud labs run on Azure; Google Cloud and AWS appear in each chapter's comparison table. Candidates below are unverified until checked on Microsoft Learn at chapter time. Chapters 1 to 10 use free local models on Foundry Local, so they need no Azure. Azure labs start in Chapter 11, on Karthik's business tenant (007's decision log), so nothing committed names the tenant, subscription, company or the `azt` tag. Lab code reads those from environment variables in a gitignored `.env`, and lab steps say "your Azure tenant", never a tag.
- **No client names, no PHI, no fingerprinting numbers**, same as the rest of this repo.
- **Labs are generic prototypes of real problems.** Each lab in `labs/chNN/` is modeled on a real RCM product problem (007's decision log), but its data model, prompts and code are our own. Nothing in this repo names a client or product, or copies their code.
- **Its own look.** Indigo and amber on a dot grid, Space Grotesk and IBM Plex fonts, light and dark. Not borrowed from any company website, so the public copy stays neutral.

## Outline

**No topic is dropped.** Lecture numbers point to the course outline in [archived plan 005](archive/005-udemy-ai-fde-course.md): 129 lectures (Week 1: 46, Week 2: 41, Week 3: 42). Every one maps to a line below, numbered within its Part's week: recaps to a chapter's opening, quizzes to its "Check yourself", summary sheets to a Part recap, the bonus to 15.4. A course tool (OpenRouter, LangChain, LangGraph, Langfuse, Qdrant, Supabase, Cerebras, AWS AgentCore, Cedar) is taught as the concept it stands for, from its own project docs where it has them; the lab uses this plan's chosen tool, and the course's tool is named where it helps. Chapter headings keep the course's week and day (W1 D1) as a cross-reference only. Each chapter's sections and lab are re-specified against official docs when it is built (007, *How each session works*). "Picture" lists the planned interactive visual.

### Part 1 · Week 1: Foundations

**Chapter 1. The agent loop, from scratch** (W1 D1, lectures 1-8). Status: drafted.
- 1.1 Watch the loop run: a first call to a free model, what a model aggregator is, then a model solving a maze with a tool (1-2). Picture: built, 3 scenarios.
- 1.2 What the model actually sees: the tool menu (2). Built.
- 1.3 The FDE role: where it came from (Palantir to OpenAI), engineer to architect to FDE, the skills, tools and experience it takes (3-5). Picture: role ladder with skills per rung.
- 1.4 Setup and planning API cost (6-8). Dev environment: VS Code, Git, Node and uv, dependencies installed, settings in a gitignored `.env` (it holds cloud keys from Chapter 11). Free-model checklist: install Foundry Local, pick one model that `foundry model list` shows with `tools` in its Task column. No Azure until Chapter 11.
- Lab: the 50-line loop on a free local model, one tool, no framework.

**Chapter 2. Frontier LLMs and your first claims agent** (W1 D2, lectures 9-18)
- Opening: recap of Chapter 1 (9).
- 2.1 From GPT to ChatGPT: the six tricks, tokens, context windows and API cost (10). Picture: cost-per-claim calculator.
- 2.2 Comparing frontier models: Artificial Analysis, the Pareto front, METR (11). Picture: cost vs quality scatter.
- 2.3 What an agent is: tools, harness, framework (12). Picture: layer diagram.
- 2.4 Chat completions vs the Responses API, and structured outputs (14). Picture: free text vs schema-checked JSON.
- 2.5 First claims agent with Microsoft Agent Framework (13-17): the claims-review pilot we build through the book, the synthetic claims data and the billers' decisions, models tested on claims, then a prebuilt agent with tools.
- Check yourself: our own questions in place of the course's Day 2 quiz (18).
- Lab: an Agent Framework agent with 2 tools on 10 synthetic claims, 2 local models compared.

**Chapter 3. Coding agents and the ADLC** (W1 D3, lectures 19-27, 37). Light chapter: Karthik ships this daily.
- 3.1 Vibe coding, the coding agent landscape, choosing and installing one (19-21).
- 3.2 Being the boss: AGENTS.md, permission modes, working practices, MCP servers in a coding agent (Playwright MCP) (22-23).
- 3.3 The two meanings of ADLC and reading a project brief (24). Picture: lifecycle diagram.
- 3.4 Hardening a repo: linters, type checks, tests, a pre-commit hook (25).
- 3.5 Planning a pilot in phases with success criteria, then testing it on 25 claims (26-27).
- Check yourself: our own questions in place of the course's Days 3 and 4 quiz, coding-agent half (37).
- Lab: Claude Code plans the claims-review pilot in phases with success criteria. Uses Karthik's existing Claude Code plan; no new spend.

**Chapter 4. Open and local models, cost per claim** (W1 D4, lectures 28-37)
- 4.1 Inference hardware: GPU, VRAM, unified memory, memory bandwidth (28). Picture: "will this model fit?" calculator.
- 4.2 Proprietary vs open-source vs open-weight: privacy, cost, security (29). HIPAA angle.
- 4.3 Dense vs mixture of experts, and active parameters (30). Picture: router picking experts per token.
- 4.4 Quantization, GGUF and safetensors, reading a model's name (31). Picture: model-name decoder.
- 4.5 Running models locally: Ollama, LM Studio, vLLM, Foundry Local, choosing hardware (32-33).
- 4.6 Cost per claim: provider routing, token pricing, open models tested on claims, local vs hosted vs fast-inference providers on accuracy, cost and speed (34-36). Picture: monthly cost calculator.
- Check yourself: our own questions in place of the course's Days 3 and 4 quiz, open-models and token-cost half (37).
- Lab: two local models on synthetic claims, accuracy and speed; cloud cost per claim worked from the providers' pricing pages. The measured hosted comparison comes in Chapter 11's first paid call.

**Chapter 5. Harness engineering** (W1 D5, lectures 38-46)
- 5.1 Open vs proprietary recap, distillation, token cost (38).
- 5.2 Harness engineering, context engineering, recursive self-improvement (39). Picture: the seven parts of a harness.
- 5.3 Build or buy: LangChain, Deep Agents, Claude Agent SDK, Microsoft Agent Framework (40). Comparison table.
- 5.4 Sub-agents: the claims desk (a main agent that triages a claim and routes the work) with a sub-agent, then the same desk on a second harness and an open-weight model (41-42). Picture: main agent hands a task to a sub-agent with its own context.
- 5.5 Building a harness with human code review: plan it, build it, refactor it, improve the process (43-45).
- Part 1 recap: our own one-page summary, in place of the course's Week 1 summary sheet (46).
- Lab: a main agent hands a task to one sub-agent on a claims desk, Agent Framework on a local model.

### Part 2 · Week 2: Real agents

**Chapter 6. Architecture traps, evals and observability** (W2 D1, lectures 1-9)
- Opening: recap of the seven parts of an agent harness (1).
- 6.1 Three architecture traps; when to add sub-agents and when logic belongs in code (2-3).
- 6.2 Evals: LLM as a judge (first look, deep in 10.1), confusion matrix, precision, recall (4). Picture: denial predictor with a threshold slider.
- 6.3 The cost of mistakes and Cohen's kappa (5). Picture: agreement calculator.
- 6.4 Observability: traces on a harder set of synthetic claims built for the eval, datasets and experiments, moving expected-payment logic into a tool and comparing experiments (6-9). Picture: trace tree.
- Lab: an eval set and traces for the claims agent, then two versions run as experiments and compared. Tracing tool: decide at chapter time from official docs.

**Chapter 7. RAG, MCP and memory** (W2 D2, lectures 10-17)
- 7.1 How RAG works: embeddings, vector databases, semantic search (10). Picture: 2D embedding space, query finds neighbors.
- 7.2 Agentic RAG, research sub-agents, agent-to-agent communication (11).
- 7.3 Retrieval evals; RAG vs agentic RAG vs fine-tuning (12). Picture: decision tree.
- 7.4 MCP: hosts, clients, servers, stdio and streamable HTTP; server parameters, remote servers, common uses, trade-offs (13-14). Picture: animated message flow.
- 7.5 Short-term and long-term memory: long-term memory over MCP, then the agent compared with and without it (15-17).
- Lab: retrieval over synthetic payer policies, exposed as an MCP tool, then long-term memory over MCP, compared with and without. Local vector store: decide at chapter time.

**Chapter 8. Durable workflows, checkpoints, human sign-off** (W2 D3, lectures 18-26)
- 8.1 Durable execution, and LangGraph as the course's framework for it, compared with Agent Framework (18). Picture: crash, then resume from the last checkpoint.
- 8.2 Workflow state, steps, fixed and conditional edges; from a prebuilt agent to your own steps (19, 23). Picture: graph stepper.
- 8.3 Shared state and how updates merge (reducers), super-steps, checkpoints, threads (20).
- 8.4 Human sign-off: the workflow pauses on a request and resumes on the reply; designing the human's step (21). Picture: claim pauses for sign-off.
- 8.5 Persistence and the durable build: a database for checkpoints, and a database MCP server so the coding agent can inspect it, pause and crash and resume, planning the build, a sign-off dashboard, the payment posting step and traces (22-26).
- Lab: a claim workflow in Agent Framework that pauses for approval, survives a killed process and resumes. Checkpoints in a local database; which one: decide at chapter time from Agent Framework's checkpoint docs.

**Chapter 9. Agent swarms** (W2 D4, lectures 27-33)
- 9.1 Teams vs swarms vs fleets (27).
- 9.2 A dispatcher with no LLM: fan-out, rate limits, retries, built first against a stand-in with a concurrency cap and a retry policy (28-29). Picture: 25 claims fanning out, a rate-limit error and a retry.
- 9.3 Running and scoring a swarm: 5 agents traced and scored, compared with 25, an evaluation scoreboard (30-32).
- Check yourself: our own questions in place of the course's Week 2 quiz (33).
- Lab: 5, then 25 claim agents against a local stand-in that rejects calls over a set rate (a local model has no rate limit of its own), which makes the retry and rate-limit lesson real.

**Chapter 10. LLM as a judge and the improver agent** (W2 D5, lectures 34-41)
- 10.1 LLM as a judge with reference answers, a strong model as the judge, a configurable claim agent (34, 36).
- 10.2 Measuring noise (37). Picture: same judge run 10 times, see the spread.
- 10.3 The improver agent with a human in the loop: design it, run it, improve its recipe, three improvement rounds (35, 37-40). Picture: improve, score, approve loop.
- 10.4 Sign-in for the app (35, 38-39).
- Part 2 recap: our own one-page summary, in place of the course's Week 2 summary sheet (41).
- Lab: a judge plus 3 improver rounds. Sign-in option: decide at chapter time; it must cost nothing and use no Azure, since Azure starts in Chapter 11.

### Part 3 · Week 3: Production

**Chapter 11. Discovery, governance, responsible AI** (W3 D1, lectures 1-9)
- 11.1 The five ADLC phases and the FDE's role in each (1-2). Picture: timeline.
- 11.2 Prioritizing use cases in discovery (2). Picture: value vs effort grid with RCM use cases.
- 11.3 System architecture and three ways to host an agent (3).
- 11.4 Governance, autonomy levels, managing many agents (4). Picture: autonomy ladder.
- 11.5 Responsible AI, privacy, accountability, handover, adoption; role play: answering a head of risk and compliance (5-6).
- 11.6 Cloud setup on Azure: the six setup steps and who owns cloud cost; account, MFA, budget, a least-privilege identity, the CLI, a model deployment called with keyless auth, a Python check (7-9).
- Lab: Azure budget alert before the first paid model call, least-privilege identity, and a Python check of the setup. First paid call: rerun Chapter 4's claims test on one Azure model deployment and measure accuracy, cost and speed against the local models.

**Chapter 12. Agent security, guardrails, gateways** (W3 D2, lectures 10-19)
- 12.1 Security risks: sandboxes, API scopes, prompt injection (10).
- 12.2 The lethal trifecta and four kinds of guardrails (11). Picture: toggle 3 capabilities, watch the risk light up.
- 12.3 API, MCP and model gateways; how a gateway turns an API into MCP tools; creating a gateway and calling MCP tools through it; AWS AgentCore in the three-cloud table (12-13, 18). Picture: request path through a gateway.
- 12.4 Catching a prompt injection with keyword and model checks (14).
- 12.5 Policy as code: Cedar and its Azure equivalent; create, enforce, check the logs, tear down (13, 18-19).
- 12.6 Deploying a tool API: API key, guardrail and OpenAPI spec; SDK vs portal vs infrastructure as code; a serverless deploy with a URL and key (15-17).
- Lab: Azure candidates to confirm: Functions for Lambda, API Management as the gateway, Content Safety Prompt Shields for injection.

**Chapter 13. The enterprise context layer** (W3 D3, lectures 20-26)
- 13.1 Context layer and context engineering; context layer products and analyst views (20-21).
- 13.2 Memory strategies and namespaces; an earlier claim for the same synthetic patient recalled from memory (21, 26).
- 13.3 Enterprise integrations: systems of record, permissions, MCP gateways (22). RCM: practice management system, clearinghouse, payer portals.
- 13.4 A context layer as an MCP server: gateway tools, managed memory, a serverless deploy with identity-based auth, two gateway targets, a policy, context lookups (23-25).
- Lab: a context MCP server on Azure with identity-based auth. Memory store: confirm at chapter time.

**Chapter 14. Agents in production** (W3 D4, lectures 27-34)
- 14.1 Configuration, secrets, managed runtimes (27).
- 14.2 Deploy and invoke: a hello world through the CLI, touring the agent's code, running it locally (28-30).
- 14.3 Resume a paused claim in a new session (30).
- 14.4 Packaging the agent for the managed runtime, then a swarm of 25 in production with sign-off and send-back (31-33).
- Check yourself: our own questions in place of the course's Week 3 quiz (34).
- Lab: Azure candidates to confirm: Foundry Agent Service or Container Apps for hosting, Key Vault for secrets.

**Chapter 15. Capstone and handover** (W3 D5, lectures 35-42)
- 15.1 Capstone: a copilot for billers with per-user memory, its workflow graph and two agents in the managed runtime (35-37).
- 15.2 The handover conversation and success criteria (38).
- 15.3 Teardown and cost check (39).
- 15.4 Skills, job market, next steps; our own further-reading list from official docs, in place of the course's bonus AI curriculum (40, 42).
- Part 3 recap: our own one-page summary, in place of the course's Week 3 summary sheet (41).
- Lab: the biller copilot, then a full teardown with a cost check.

## Sharing and posts

- **Team copy:** the book is written for any reader with RCM context, not only Karthik. Karthik's team gets the finished `fde-field-book.html` as a file, which Karthik sends by email or Teams after a rebuild. No hosted copy. The book itself names no company (house rules, enforced by the name-guard commit hook from 007 Session 0), so the file carries no public link between `@karthikrcm` and the company.
- **LinkedIn:** one post per Part, 3 in all, after Chapters 5, 10 and 15. Drafts live in Karthik's marketing workspace, not this repo. Every post leads with time, effort or money, and every number comes from our own labs.

## Decisions (all settled 2026-10-30)

- Team and delivery: settled 2026-10-30, Karthik's team, the HTML file sent directly. See *Sharing and posts*.
- Book folder: settled 2026-10-30, top-level `fde-field-book/` (Karthik's OK). See 007's decision log.
- Lab code: settled 2026-10-30, a generic prototype in `fde-field-book/labs/chNN/`. See 007's decision log.
- LinkedIn cadence: settled 2026-10-30, one post per Part. See *Sharing and posts*.
- Cert track: settled 2026-10-30, all earlier certs retired. See 007's decision log.
- Budget: settled 2026-10-30, about 3 hours per session, no video. See Goal.
- Framework: settled 2026-10-30, Microsoft Agent Framework from Chapter 2. See 007's decision log.
- Reveal gate: settled 2026-10-30. Holds because the book names no company and goes out as a file, not a public link.
