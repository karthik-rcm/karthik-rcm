# AI FDE Field Book

**Status:** Draft
**Owner:** Karthik
**Date:** 2026-10-30
**Type:** plan

---

A companion book for the Udemy course in [005-udemy-ai-fde-course.md](005-udemy-ai-fde-course.md). 15 chapters, one per course Day, each written in its own file and built into one shareable HTML file. We build each chapter, read it together, then go deep on the nuances. Reusable by a team. Each chapter can also become a LinkedIn post.

## Goal

- **Goal:** turn the 21.5-hour course into a book we can learn from, teach from and share.
- **Deliverable:** one self-contained HTML file with a table of contents, 3 Parts and 15 chapters, built from one source file per chapter. Every structural idea gets an interactive picture.
- **Acceptance:** for each chapter, Karthik explains its core idea cold and finishes its lab on Azure.
- **Budget:** about 3 hours per chapter of Karthik's time (read together, nuances, lab). 15 chapters, about 45 hours.

## How each chapter gets made

1. **Build.** Claude drafts the chapter in its own file: topic sections, interactive pictures, lab spec. Vendor docs are checked live while writing, never from memory. Claude then rebuilds the book and checks it in light and dark.
2. **Read together.** Karthik reads it. Claude flags the 2 or 3 ideas most worth going deep on.
3. **Teach the nuances.** Professor mode: short turns, RCM analogies, where it breaks, what the examiner or the client will probe. Good insights go back into the chapter.
4. **Lab.** Karthik builds the chapter's lab on Azure with synthetic data.
5. **Post (optional).** One LinkedIn draft from the chapter.

Build chapter N just before Karthik watches Day N, not all 15 up front. Model names, prices and vendor features change monthly, and the read-together step is the quality gate.

## How the book is built

One source file per chapter, stitched into one HTML file. Editing chapter 5 touches one small file, and readers still get a single file that opens offline.

```
<book folder>/
  shell.html            page frame and the full 15-chapter contents list
  book.css              the theme, light and dark, shared by every chapter
  book.js               theme button, contents highlighting
  chapters/
    00-front.html       how to read this book
    01-agent-loop.html  one file per chapter, added as we go
  build.py              stitches it all into the finished book
fde-field-book.html     the finished book: the only file anyone opens or shares
```

- **Build step:** `python3 build.py` reads `shell.html`, inlines `book.css` and `book.js`, and inserts the chapter files in filename order. Standard library only, no packages. Claude runs it after every chapter edit.
- **Contents list:** lives in `shell.html`. A chapter's entry switches from "coming soon" to section links when its file lands.
- **No clashes between chapters:** every element ID in a chapter starts with its number (`ch01-next`, `ch05-stage`). Each chapter's script is wrapped so its variables stay inside it.
- **The finished file is the one we commit and share.** Source and output are committed together, so the book on GitHub always matches its sources.
- **Migration:** Chapter 1 moves from the current single file (`scratch/visuals/fde-course-map.html`) into this layout before Chapter 2 is built. The result must look and behave the same as today in light and dark. The old single file is retired after that.

## Chapter shape (Chapter 1 sets it)

- **Header:** chapter number, course Day, the Day's theme, a one-sentence lede.
- **Topic sections** (N.1, N.2, ...): one per idea, mapped to lecture numbers. A picture only where the idea is structural.
- **Professor's notes:** RCM bridges and production reality, marked as our reasoning.
- **Check yourself:** 3 to 5 questions with click-to-reveal answers.
- **Your build:** Goal, Deliverable, Acceptance, Budget, Status.
- **Sources:** the official docs each chapter's code was checked against, with the date.

## House rules

- **Our words only.** No lecture transcripts, no course screenshots. The book credits the course and points readers to it.
- **Synthetic data only.** Made-up claim IDs and results. Real denial codes (CARC) are fine; they are public.
- **Azure.** Part 3's AWS chapters get Azure equivalents. Candidates below are unverified until checked on Microsoft Learn at chapter time.
- **No client names, no PHI, no fingerprinting numbers**, same as the rest of this repo.
- **Its own look.** Indigo and amber on a dot grid, Space Grotesk and IBM Plex fonts, light and dark. Not borrowed from any company website, so the public copy stays neutral.

## Outline

Lecture numbers point to the curriculum in [005](005-udemy-ai-fde-course.md). Quizzes and summary sheets are not mapped. "Picture" lists the planned interactive visual.

### Part 1 · Week 1: Foundations

**Chapter 1. The agent loop, from scratch** (W1 D1, lectures 1-8). Status: drafted.
- 1.1 Watch the loop run (1-2). Picture: built, 3 scenarios.
- 1.2 What the model actually sees: the tool menu (2). Built.
- 1.3 The FDE role: engineer to architect to FDE (3-5). Picture: role ladder with skills per rung.
- 1.4 Setup and planning API cost (6-8). Azure checklist: resource, model deployment, `az login`, keyless auth.
- Lab: the 50-line loop on Azure OpenAI, Responses API, one tool.

**Chapter 2. Frontier LLMs and your first claims agent** (W1 D2, lectures 9-17)
- 2.1 Tokens, context windows and API cost (10). Picture: cost-per-claim calculator.
- 2.2 Comparing frontier models: the Pareto front (11). Picture: cost vs quality scatter.
- 2.3 What an agent is: tools, harness, framework (12). Picture: layer diagram.
- 2.4 Structured outputs (14). Picture: free text vs schema-checked JSON.
- 2.5 First claims agent with LangChain `create_agent` (13, 15-17).
- Lab: `create_agent` on an Azure OpenAI deployment, 2 tools, 10 synthetic claims, 2 models compared.

**Chapter 3. Coding agents and the ADLC** (W1 D3, lectures 19-27). Light chapter: Karthik ships this daily.
- 3.1 The coding agent landscape (19-21).
- 3.2 Being the boss: AGENTS.md and permission modes (22-23).
- 3.3 The two meanings of ADLC (24). Picture: lifecycle diagram.
- 3.4 Hardening a repo (25).
- 3.5 Planning a pilot in phases with success criteria (26-27).
- Lab: Claude Code plans the claims pilot in phases with success criteria.

**Chapter 4. Open and local models, cost per claim** (W1 D4, lectures 28-36)
- 4.1 Inference hardware: GPU, VRAM, memory bandwidth (28). Picture: "will this model fit?" calculator.
- 4.2 Proprietary vs open-weight: privacy, cost, security (29). HIPAA angle.
- 4.3 Dense vs mixture of experts (30). Picture: router picking experts per token.
- 4.4 Quantization and reading a model's name (31). Picture: model-name decoder.
- 4.5 Running models locally (32-33).
- 4.6 Cost per claim across providers (34-36). Picture: monthly cost calculator.
- Lab: one local model with Ollama vs one Azure deployment on synthetic claims: accuracy, cost, speed.

**Chapter 5. Harness engineering** (W1 D5, lectures 38-45)
- 5.1 Open vs proprietary recap and distillation (38).
- 5.2 Harness engineering and context engineering (39). Picture: the seven parts of a harness.
- 5.3 Build or buy: LangChain, Deep Agents, Claude Agent SDK (40). Comparison table.
- 5.4 Sub-agents (41-42). Picture: main agent hands a task to a sub-agent with its own context.
- 5.5 Building a harness with human code review (43-45).
- Lab: Claude Agent SDK with one sub-agent on a claims desk. Claude model access on Azure: confirm at chapter time.

### Part 2 · Week 2: Real agents

**Chapter 6. Architecture traps, evals and observability** (W2 D1, lectures 1-9)
- 6.1 Three architecture traps; when logic belongs in code (2-3).
- 6.2 Evals: confusion matrix, precision, recall (4). Picture: denial predictor with a threshold slider.
- 6.3 The cost of mistakes and Cohen's kappa (5). Picture: agreement calculator.
- 6.4 Observability: traces and experiments (6-9). Picture: trace tree.
- Lab: Langfuse traces and a dataset experiment on the claims agent.

**Chapter 7. RAG, MCP and memory** (W2 D2, lectures 10-17)
- 7.1 How RAG works (10). Picture: 2D embedding space, query finds neighbors.
- 7.2 Agentic RAG and research sub-agents (11).
- 7.3 RAG vs agentic RAG vs fine-tuning (12). Picture: decision tree.
- 7.4 MCP: hosts, clients, servers, transports (13-14). Picture: animated message flow.
- 7.5 Short-term and long-term memory (15-17).
- Lab: long-term memory over MCP. Qdrant or Azure AI Search: decide at chapter time.

**Chapter 8. LangGraph, durable execution, human in the loop** (W2 D3, lectures 18-26)
- 8.1 Durable execution (18). Picture: crash, then resume from the last checkpoint.
- 8.2 State, nodes, fixed and conditional edges (19). Picture: graph stepper.
- 8.3 Reducers, super-steps, checkpoints, threads (20).
- 8.4 Human in the loop with `interrupt()` (21). Picture: claim pauses for sign-off.
- 8.5 Postgres persistence and the durable build (22-26).
- Lab: a claim workflow that pauses for approval, survives a killed process and resumes. Supabase or Azure Database for PostgreSQL: decide at chapter time.

**Chapter 9. Agent swarms** (W2 D4, lectures 27-32)
- 9.1 Teams vs swarms vs fleets (27).
- 9.2 A dispatcher with no LLM: fan-out, rate limits, retries (28-29). Picture: 25 claims fanning out, a rate-limit error and a retry.
- 9.3 Running and scoring a swarm (30-32).
- Lab: 5, then 25 claim agents against Azure OpenAI quota limits.

**Chapter 10. LLM as a judge and the improver agent** (W2 D5, lectures 34-40)
- 10.1 LLM as a judge with reference answers (34, 36).
- 10.2 Measuring noise (37). Picture: same judge run 10 times, see the spread.
- 10.3 The improver agent with a human in the loop (35, 37-40). Picture: improve, score, approve loop.
- 10.4 Sign-in for the app (35, 38-39).
- Lab: a judge plus 3 improver rounds. Supabase Auth or Microsoft Entra ID: decide at chapter time.

### Part 3 · Week 3: Production

**Chapter 11. Discovery, governance, responsible AI** (W3 D1, lectures 1-9)
- 11.1 The five ADLC phases and the FDE's role in each (1-2). Picture: timeline.
- 11.2 Prioritizing use cases in discovery (2). Picture: value vs effort grid with RCM use cases.
- 11.3 System architecture and three ways to host an agent (3).
- 11.4 Governance and autonomy levels (4). Picture: autonomy ladder.
- 11.5 Responsible AI, privacy, accountability, handover (5-6).
- 11.6 Cloud setup, Azure version of the AWS steps (7-9).
- Lab: Azure budget alert, least-privilege identity, a Python check of the setup.

**Chapter 12. Agent security, guardrails, gateways** (W3 D2, lectures 10-19)
- 12.1 Security risks: sandboxes, API scopes, prompt injection (10).
- 12.2 The lethal trifecta and four kinds of guardrails (11). Picture: toggle 3 capabilities, watch the risk light up.
- 12.3 API, MCP and model gateways (12-13). Picture: request path through a gateway.
- 12.4 Catching a prompt injection (14).
- 12.5 Policy as code (13, 18-19).
- 12.6 Deploying a tool API (15-17).
- Lab: Azure candidates to confirm: Functions for Lambda, API Management as the gateway, Content Safety Prompt Shields for injection.

**Chapter 13. The enterprise context layer** (W3 D3, lectures 20-26)
- 13.1 Context layer and context engineering (20-21).
- 13.2 Memory strategies and namespaces (21, 26).
- 13.3 Enterprise integrations: systems of record, permissions, MCP gateways (22). RCM: practice management system, clearinghouse, payer portals.
- 13.4 A context layer as an MCP server (23-25).
- Lab: a context MCP server on Azure with identity-based auth. Memory store: confirm at chapter time.

**Chapter 14. Agents in production** (W3 D4, lectures 27-33)
- 14.1 Configuration, secrets, managed runtimes (27).
- 14.2 Deploy and invoke (28-30).
- 14.3 Resume a paused claim in a new session (30).
- 14.4 A swarm of 25 in production with sign-off and send-back (31-33).
- Lab: Azure candidates to confirm: Foundry Agent Service or Container Apps for hosting, Key Vault for secrets.

**Chapter 15. Capstone and handover** (W3 D5, lectures 35-40)
- 15.1 Capstone: a copilot for billers with per-user memory (35-37).
- 15.2 The handover conversation and success criteria (38).
- 15.3 Teardown and cost check (39).
- 15.4 Skills, job market, next steps (40).
- Lab: the biller copilot, then a full teardown with a cost check.

## Sharing and posts

- **Team copy:** the book is written for any reader with RCM context, not only Karthik. Where it lives and how it is shared is open below.
- **LinkedIn:** drafts live in `~/Application/gravitas-marketing/`, not this repo. Every post leads with time, effort or money, and every number comes from our own labs.

## Open

- Which team gets the book, and how: a private web link or the HTML file?
- Where the book folder lives. Recommended: a new top-level `fde-field-book/` folder, since this repo's rules need Karthik's OK for any new top-level folder. The other option is `scratch/visuals/fde-field-book/` with a `.gitignore` exception, which keeps committed work inside a folder named "scratch".
- LinkedIn cadence: one post per chapter or one per Part?
