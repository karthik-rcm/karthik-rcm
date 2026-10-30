# AI FDE: The Forward Deployed Engineer & Agentic AI Architect

**Status:** Superseded
**Owner:** Karthik
**Date:** 2026-10-30
**Type:** plan
**Superseded by:** [007-ai-fde-study-plan.md](../007-ai-fde-study-plan.md) (2026-10-30). The course was not bought; 007 teaches the same 15 topics from official cloud docs.

---

Udemy course syllabus, captured from the public course page.

## Course facts

- **Subtitle:** The complete roadmap to FDE and AI Architect with Agent Harness Engineering, LangGraph, ADLC, MCP, AWS AgentCore, Evals
- **Created by:** Ed Donner
- **Badges:** Role Play, Hot & New
- **Rating:** 4.8 (732 ratings)
- **Students:** 8,779
- **Last updated:** 10/2026
- **Language:** English
- **Captions:** Arabic, German, 22 more
- **Price:** Subscribe and save, from ₹500.00/month. Course is free with a subscription (terms apply).

## What you'll learn

1. Identify the skills of an AI Architect and Forward Deployed Engineer (FDE) with the roadmap to get there
2. Accelerate delivery with Claude Code and the Agentic Development Lifecycle (ADLC) while staying accountable
3. Apply Harness Engineering to build agents with LangChain, Deep Agents and the Claude Agent SDK
4. Choose between frontier, open-source and local LLMs on intelligence, speed, token cost and privacy
5. Use evals and observability in Langfuse to drive agent architecture decisions and measure business outcomes
6. Give agents long-term memory with Agentic RAG over MCP using vector datastores
7. Deliver production-grade agent workflows in LangGraph with durable state, crash recovery and human in the loop
8. Scale and optimize with agent swarms, LLM as a judge and recursive self-improvement
9. Lead AI initiatives with your clients from discovery and metrics to governance, responsible AI and handover
10. Secure agents against prompt injection and the lethal trifecta with guardrails, policies and AI gateways
11. Create a data and integration architecture for agents with an enterprise context layer and MCP gateway
12. Deploy LangGraph agents to production with AWS Bedrock AgentCore Runtime, Gateway, Policy and Memory

## Related topics

- AI Agents & Agentic AI
- Data Science
- Development

## This course includes

- 1 Role Play
- 21.5 hours on-demand video
- [UNKNOWN: rest of this list not captured. Copy it from the course page.]

## Study plan (15 sessions, in the course's own order)

One session = one course "Day". Lecture numbers point to the full list below.

| # | Week / Day | Theme | Lectures | Items |
|---:|---|---|---|---:|
| 1 | W1 D1 | Setup, first agent loop from scratch, the FDE role | W1 1-8 | 8 |
| 2 | W1 D2 | Frontier LLMs, what an agent is, first claims agent in LangChain | W1 9-18 | 10 |
| 3 | W1 D3 | Coding agents (Claude Code), ADLC, repo hardening, the pilot | W1 19-27 | 9 |
| 4 | W1 D4 | Open and local models, inference hardware, cost per claim | W1 28-37 | 10 |
| 5 | W1 D5 | Harness engineering: Claude Agent SDK vs Deep Agents | W1 38-46 | 9 |
| 6 | W2 D1 | Agent architecture traps, evals, Langfuse observability | W2 1-9 | 9 |
| 7 | W2 D2 | RAG, MCP, short and long-term memory (Qdrant) | W2 10-17 | 8 |
| 8 | W2 D3 | LangGraph durable execution, human in the loop, Supabase | W2 18-26 | 9 |
| 9 | W2 D4 | Agent swarms: dispatcher, fan-out, rate limits, retries | W2 27-33 | 7 |
| 10 | W2 D5 | LLM as a judge, the improver agent, Supabase Auth | W2 34-41 | 8 |
| 11 | W3 D1 | Discovery, governance, responsible AI, AWS account setup | W3 1-9 | 9 |
| 12 | W3 D2 | Agent security, guardrails, gateways, AgentCore Gateway and Cedar | W3 10-19 | 10 |
| 13 | W3 D3 | Enterprise context layer, integrations, AgentCore Memory | W3 20-26 | 7 |
| 14 | W3 D4 | Production on AgentCore Runtime, swarm of 25, human sign-off | W3 27-34 | 8 |
| 15 | W3 D5 | Capstone copilot, handover, AWS teardown, next steps | W3 35-42 | 8 |
| | | | **Total** | **129** |

## How we learn it: build, not just watch

- **Cloud: Azure** (decided 2026-10-30). Weeks 1 and 2 (Sessions 1 to 10) run on free models: Ollama on the Mac, and OpenRouter's free models, as the course itself does. Azure OpenAI is not free (Microsoft Learn, checked 10/30/2026: per-token billing, no always-free tier), so paid Azure calls start in Week 3, where Azure is the lesson. Week 3's AWS Bedrock AgentCore labs get an Azure equivalent, picked from Microsoft Learn docs, never from memory. Pick the Week 3 mapping once, in Session 11: Sessions 12 to 15 build on one hosting, gateway and memory choice, so choosing piece by piece risks parts that don't fit together.
- **No AWS tie-in needed:** the AWS cert track is retired (decision log), so Azure costs no exam practice.
- **Spend guard:** an Azure budget alert goes on in Session 11, before the first paid model call. Session 15 ends with a full teardown and a cost check (W3 lecture 39).
- **Loop per session:** watch the Day's lectures (about 1.5 hours), read the vendor docs for the one new idea, build that piece, write a short lab note in our own words in the chapter's "Your build" block.
- **Docs need approval first:** [`docs/sources.md`](../../sources.md) lists LangChain but not Ollama, OpenRouter, Microsoft Learn, LangGraph, Langfuse, Qdrant or Supabase. Add each, on Karthik's OK, before the session that needs it.
- **Total budget:** 15 sessions at about 4.5 hours (1.5 hours of video, then 3 hours of book work and lab) is about 66 hours, so 13 to 22 weeks at 3 to 5 hours a week.
- **Skim what's already shipped daily:** W1 D3 (Claude Code, repo hardening, pre-commit hooks).
- **Where labs run:** a quick, generic prototype in `fde-field-book/labs/chNN/`, small enough to break and rebuild inside one session. Each lab is modeled on a real RCM product problem (coding suggestions, appeal letters, denial work), with client problems only where they fit. Its data model, prompts and code are our own, never copied from the product or a client. Model calls go to free models in Weeks 1 and 2, and to the Gravitas Azure OpenAI deployment from Week 3. Keys and endpoints come from a gitignored `.env`. Never a client's resources.
- **Promote what works:** a prototype that solves a real RCM product problem becomes a sprint plan in the product's repo, written and reviewed in that repo under its own rules. That is where it meets the product's real code (row-level security, Celery, its AI provider layer). Prototype code is never pasted in as-is.
- **Synthetic data only.** No PHI, no client data, nothing copied from the product's staging or production databases.

### Session 0: retire the old track

- **Goal:** make this course the live plan, so the session-start check reads the right file.
- **Deliverable:**
  - `docs/decisions/003-<slug>.md`: the retirement, the Gravitas tenant, the generic prototype lab base modeled on RCM product problems, superseding decision 002.
  - `docs/plans/001-roadmap.md`: status `Superseded`, `Superseded by:` this file, moved to `docs/plans/archive/`.
  - Repoint every link to the roadmap: `STUDY_LOG.md`, `CLAUDE.md`, `.claude/rules/planning.md` (its session-start protocol reads the roadmap), `docs/README.md`, decision 002, `aif-c01/notes/d3-1-rag-and-foundation-model-app-design.md`. Then run `check-link-depth.sh`.
  - `STUDY_LOG.md` "Where we are" block: current focus is this course, Session 1.
  - `aif-c01/exam-log.md`: one line saying the track retired 10/30/2026. Folder stays in place.
  - `.pre-commit-config.yaml`: a grep hook scoped to `fde-field-book/` that blocks "gravitas", the tenant domain, and the client and product names.
- **Acceptance:** `grep -rn 001-roadmap` finds only archive and history links, and a test commit with "gravitas" in `fde-field-book/` is blocked.
- **Budget:** 1 hour.

### Session 1

- **Goal:** W1 D1, the agent loop from scratch.
- **Deliverable:** a small Python script (about 50 lines) that calls a free model with one tool, written by hand with no framework. The model must support tool calling: pick it from the Ollama or OpenRouter docs at the session.
- **Acceptance:** explain the loop cold: the model asks for a tool, the code runs it, the result goes back, repeat until the model stops asking.
- **Budget:** 4.5 hours.
- **Destination:** `fde-field-book/labs/ch01/`. The lab note is Chapter 1's "Your build" block in 006.
- **Cost:** nothing. No Azure in this session.

### Decision log

- 2026-10-30: The whole earlier cert track retires: AIF-C01, MLA-C01, CCA-F, and the already parked CHP. This course is the live plan. Roadmap 001 is superseded and archived, and decision 003 records why (Session 0).
- 2026-10-30: `aif-c01/` stays in place as evidence. Its exam log gets one line marking the track retired.
- 2026-10-30: A pre-commit grep hook, scoped to `fde-field-book/`, blocks company, client and product names. gitleaks catches secrets, not names. The labs run on the Gravitas tenant and are modeled on client problems.
- 2026-10-30: Weeks 1 and 2 use free models (Ollama, OpenRouter free models). Azure OpenAI has no free tier, so paid Azure calls start in Week 3, and the budget alert moves to Session 11. The cost: free OpenRouter models have tight rate limits, and Azure habits start later.
- 2026-10-30: Week 3's Azure labs run on the Gravitas Azure tenant. Personal/CLAUDE.md's "no `az`" line and the reveal gate both still hold for committed files: no Gravitas tenant, subscription, resource or company name lands in this public repo. Lab code reads them from environment variables.
- 2026-10-30: Labs are a quick generic prototype in `fde-field-book/labs/chNN/`, modeled on real RCM product problems (client workflows where they fit), synthetic data, our own code. Prototypes that prove out become sprint plans in the product's repo under that repo's rules. Karthik chose this over a local worktree of the product: its full stack would eat the lab time, and a prototype can be broken freely. The cost: integration with the product's real code is learned at promotion, not in the labs. Replaces the same day's rulings for the course's own claims project and the local worktree. A deliberate break from [decision 002](../../decisions/002-build-anchored-cert-track.md)'s product-build lab spine.
- 2026-10-30: The book and lab code live in a new top-level `fde-field-book/` folder, approved by Karthik. Lab code goes in `fde-field-book/labs/chNN/`. Lab notes are each chapter's "Your build" block, not a separate file.
- 2026-10-30: Each session budgets about 4.5 hours: 1.5 hours of video, then 3 hours of book work and lab. An Azure lab plus read-through doesn't fit in 1.5 hours from Chapter 8 on. Same number in 006.
- 2026-10-30: The Gravitas team gets the field book as the single HTML file, sent directly by Karthik. No hosted copy. LinkedIn gets one post per Part (3 in all). Details in 006, *Sharing and posts*.
- 2026-10-30: The Udemy course is not bought and no videos are watched. Claude teaches each topic from official cloud documentation (Microsoft, Google Cloud, AWS). A new plan 007 replaces this one, keeping the course's 15-topic order as its outline; this plan is then marked Superseded and archived, and 006 points to 007. How the three clouds split across lessons and labs is still being decided.

## Curriculum

3 sections, 124 lectures, 21h 25m total length.

Legend: (Preview) = free preview on Udemy. (Quiz) = quiz, not a video.

### Week 1: Become an AI Engineer

1. Day 1: Instant Gratification with OpenRouter and Free LLMs (Preview)
2. Day 1: An LLM Solves a Maze: Tool Calling and an Agent Loop from Scratch (Preview)
3. Day 1: The 3-Week Roadmap from AI Engineer to AI Architect to AI FDE (Preview)
4. Day 1: What Is a Forward Deployed Engineer? From Palantir to OpenAI
5. Day 1: The Skills, Tools and Experience You Need to Become an AI FDE
6. Day 1: Environment Setup on Windows and Mac: VS Code, Git, Node and uv
7. Day 1: Clone the UnderCover Repo, Run uv sync and Set Up Your .env File
8. Day 1: Run the Maze Agent Locally in VS Code and Plan Your API Costs
9. Day 2: Recap of Day 1 and Today's Plan for Frontier LLMs and Agents
10. Day 2: From GPT to ChatGPT: 6 Tricks, Tokens, Context Windows and API Costs
11. Day 2: Comparing Frontier LLMs: Artificial Analysis, the Pareto Front and METR
12. Day 2: What Is an AI Agent? Tool Calling, the Harness and Agent Frameworks
13. Day 2: Introducing UnderCover: The Course Project and the Claims Agent Pilot
14. Day 2: Lab Prep: Chat Completions, Structured Outputs and LangChain create_agent
15. Day 2: Exploring UnderCover's Claims Data and the Handlers' Decisions
16. Day 2: Testing GPT-6 Luna, Gemini 3.5 Flash Lite, GPT-6 Sol and Jev on Claims
17. Day 2: Build a Claims Agent with LangChain create_agent and Tools
18. Day 2 Quiz: Frontier LLMs and Agents (Quiz)
19. Day 3: Using a Coding Agent like Claude Code to Build an Agent
20. Day 3: Vibe Coding, the Coding Agent Landscape and the Rise of Claude Code
21. Day 3: Choose and Install a Coding Agent: Claude Code, Codex or OpenCode
22. Day 3: Be the Boss of Your Coding Agent: AGENTS.md and Permission Modes
23. Day 3: Claude Code Working Practices, MCP and the Playwright MCP Server
24. Day 3: The Two Meanings of ADLC and a Tour of the UnderCover Project Brief
25. Day 3: Hardening the Repo: Linters, Type Checks, Tests and a Pre-Commit Hook
26. Day 3: Claude Code Plans the UnderCover Pilot in Phases with Success Criteria
27. Day 3: Testing the Pilot Claude Code Built and Running the Agent on 25 Claims (Preview)
28. Day 4: Inference Basics: GPUs, VRAM, Unified Memory and Memory Bandwidth
29. Day 4: Proprietary, Open-Source and Open-Weight LLMs: Privacy, Cost and Security
30. Day 4: Dense vs Mixture of Experts (MoE) Models and Active Parameters
31. Day 4: Quantization, GGUF, Safetensors and How to Read a Model's Name
32. Day 4: Ollama, LM Studio, vLLM and Choosing Hardware to Run LLMs Locally
33. Day 4: Install Ollama and Chat with Qwen 3.5 and Gemma 4 on Your Own Computer
34. Day 4: OpenRouter Provider Routing, Token Pricing and the Cost per Claim
35. Day 4: Testing DeepSeek, Kimi K3, GLM, MiMo, Nemotron and Mistral on Claims
36. Day 4: Ollama vs OpenRouter vs Cerebras: Comparing Accuracy, Cost and Speed
37. Days 3 and 4 Quiz: Coding Agents, Open Models and Token Cost (Quiz)
38. Day 5: Recap of Open-Weight vs Proprietary Models, Distillation and Token Cost
39. Day 5: Harness Engineering, Context Engineering and Recursive Self-Improvement
40. Day 5: Build or Buy an Agent Harness: LangChain, Deep Agents or Claude Agent SDK
41. Day 5: The Claims Desk Lab: Configure the Claude Agent SDK with a Sub-Agent
42. Day 5: Run the Claude Agent SDK, Then Deep Agents on DeepSeek V4.1 Flash
43. Day 5: Choose Your Branch and Plan UnderCover's Harness with Claude Code
44. Day 5: Build and Run UnderCover's Agent Harness with a Human Code Review
45. Day 5: Refactor the Harness, Improve the Process and Complete Week 1
46. Week 1 Summary Sheet (Document)

### Week 2: Become an AI Architect

1. Day 1: Welcome to Week 2 and a Recap of the Seven Parts of an Agent Harness
2. Day 1: Three Traps to Avoid When Designing an AI Agent Architecture
3. Day 1: When to Add Sub-Agents and When Business Logic Belongs in Code
4. Day 1: Agent Evals, LLM as a Judge, the Confusion Matrix, Precision and Recall
5. Day 1: Scoring the Claims Agent: The Cost of Mistakes and Cohen's Kappa
6. Day 1: Agent Observability with Langfuse: Traces, Experiments and Account Setup
7. Day 1: Tracing a LangChain Agent in Langfuse on UnderCover's Harder Claims
8. Day 1: Scoring the Baseline Agent with Langfuse Datasets and run_experiment
9. Day 1: Business Logic in a Payout Tool: Comparing Experiments in Langfuse
10. Day 2: How RAG Works: Embeddings, Vector Databases and Semantic Search
11. Day 2: Agentic RAG, Research Sub-Agents and Agent-to-Agent Communication
12. Day 2: Retrieval Evals and When to Use RAG, Agentic RAG or Fine-Tuning
13. Day 2: MCP Architecture: Hosts, Clients, Servers, stdio and Streamable HTTP
14. Day 2: MCP Server Parameters, Remote Servers, Common Uses and Trade-Offs
15. Day 2: Short-Term and Long-Term Agent Memory and the Even Harder Claims
16. Day 2: Agentic RAG over MCP: Give an Agent Long-Term Memory with Qdrant
17. Day 2: Comparing the UnderCover Agent with and without Memory in Langfuse
18. Day 3: Durable Execution for AI Agents and an Introduction to LangGraph
19. Day 3: LangGraph Fundamentals: State, Nodes, Fixed and Conditional Edges
20. Day 3: LangGraph Reducers, Super-Steps, Checkpoints and Threads
21. Day 3: Human in the Loop: LangGraph interrupt() and Designing the Human's Step
22. Day 3: Set Up a Free Supabase Postgres Database and the Supabase MCP Server
23. Day 3: From LangChain create_agent to Writing Your Own LangGraph Nodes
24. Day 3: Pause for Approval, Crash the Kernel and Resume a Claim from Supabase
25. Day 3: Plan the Durable Build with Claude Code and the Supabase MCP Server
26. Day 3: Run UnderCover's Durable Build: Dashboard Sign-Off, Payments and Traces
27. Day 4: The Difference Between Agent Teams, Agent Swarms and Agent Fleets
28. Day 4: A LangGraph Dispatcher with No LLM: Fan-Out, Rate Limits and Retries
29. Day 4: Build the Dispatcher with a Stand-In: max_concurrency and RetryPolicy
30. Day 4: Run a Swarm of 5 Claim Agents on GPT-6 Luna and Trace It in Langfuse
31. Day 4: Score the Swarm in Langfuse and Compare 5 Claim Agents with 25
32. Day 4: Add a Swarm of Claim Agents and an Evaluation Scoreboard to UnderCover
33. Week 2 Quiz: Evals, MCP, Durable State and Agent Swarms (Quiz)
34. Day 5: LLM as a Judge, Reference Answers and the Jev Decision Model
35. Day 5: Designing the Improver Agent and Planning Sign-In with Supabase Auth
36. Day 5: Testing Jev as a Judge and Building a Configurable Claim Agent
37. Day 5: Measuring Noise and Building the Improver Agent with Human in the Loop
38. Day 5: Running the Improver, Improving Its Recipe and Setting Up Supabase Auth
39. Day 5: Claude Code Builds Self-Improvement and Supabase Sign-In into UnderCover
40. Day 5: Run Three Improvement Rounds on the [UNKNOWN: title cut off in the screenshot. Copy it from the course page.]
41. Week 2 Summary Sheet (Document)

### Week 3: Become an AI FDE

1. Day 1: Welcome to Week 3 and the Five Phases of the Agent Development Lifecycle
2. Day 1: The FDE Through the Lifecycle and Prioritizing AI Use Cases in Discovery
3. Day 1: Systems Architecture for AI Agents and Three Ways to Host an Agent
4. Day 1: Governance for AI Projects, Agent Autonomy and Managing Many Agents
5. Day 1: Responsible AI, Privacy with LLMs, Accountability, Handover and Adoption
6. Day 1: Role Play with UnderCover's Head of Risk and Compliance (Role Play)
7. Day 1: The Six Steps to Set Up AWS and Your Responsibility for Cloud Costs
8. Day 1: Open an AWS Account, Turn On MFA, Create a Budget and an IAM User
9. Day 1: Configure the AWS CLI and Check Your AWS Setup from Python with boto3
10. Day 2: AI Agent Security Risks: Sandboxes, API Scopes and Prompt Injection
11. Day 2: The Lethal Trifecta for AI Agents and Four Kinds of Safety Guardrails
12. Day 2: API, MCP and Model Gateways and an Overview of AWS Bedrock AgentCore
13. Day 2: How AgentCore Gateway Turns APIs into MCP Tools and Checks Cedar Policies
14. Day 2: Catching a Prompt Injection with Keyword and Model Checks in LangChain
15. Day 2: Claude Code Gets UnderCover Ready for AWS: API Key, Guardrail and OpenAPI
16. Day 2: Setting Up to Deploy on AWS: boto3 vs the Console, Terraform and CDK
17. Day 2: Deploy the UnderCover App to AWS Lambda with a Function URL and API Key
18. Day 2: Create an AgentCore Gateway, Call MCP Tools and Add a Cedar Policy
19. Day 2: Enforce the Cedar Policy, Check CloudWatch and Tear Down the Gateway
20. Day 3: The Enterprise Context Layer: Context Engineering, Atlan and Gartner
21. Day 3: Context Layer Products, AgentCore Memory Strategies and Namespaces
22. Day 3: Enterprise Integrations: Systems of Record, Permissions and MCP Gateways
23. Day 3: Claude Code Adds Gateway Tools, a Context Layer and Memory to UnderCover
24. Day 3: Deploy the Context Layer as an MCP Server on AWS Lambda with IAM Auth
25. Day 3: Two Gateway Targets, Cedar Policy, Context Lookups and AgentCore Memory
26. Day 3: A Returning Customer: Recalling an Earlier Claim with AgentCore Memory
27. Day 4: Agents in Production: Configuration, Secrets and Managed Runtimes
28. Day 4: The AgentCore CLI: Create, Deploy and Invoke a Hello World on AWS
29. Day 4: Tour a LangGraph Agent's Code and Run It Locally with agentcore dev
30. Day 4: Deploy to AgentCore Runtime and Resume a Paused Claim in a New Session
31. Day 4: Claude Code Builds Send Back and Turns the Agent into an AgentCore App
32. Day 4: Deploy the UnderCover Agent to AgentCore Runtime and Run a Swarm of 25
33. Day 4: Human in the Loop on AgentCore Runtime: Sign Off and Send Back a Claim
34. Week 3 Quiz: Autonomy, Security, Context and Production Deployment (Quiz)
35. Day 5: The Capstone Project: An UnderCover Copilot Agent for Claims Handlers
36. Day 5: Build the Copilot with Claude Code and Give It Memory for Each Handler
37. Day 5: The Copilot's LangGraph Graph and Two Agents on AgentCore Runtime
38. Day 5: The Handover Conversation, the Success Criteria and Your Assignment
39. Day 5: The Final Teardown: Delete UnderCover from AWS and Check Your Costs
40. Day 5: Your Skills, FDE Job Postings, Next Steps and Completing the Course
41. Week 3 Summary Sheet (Document)
42. Bonus Lecture: The AI Curriculum (Document)

### Count check

- Captured: Week 1 = 46, Week 2 = 41, Week 3 = 42. Total 129 items.
- Udemy says 124 lectures. 129 minus 4 quizzes minus 1 role play = 124. Counts match, so no lecture is missing.
- One title is incomplete: Week 2 lecture 40. The item is counted; its full name is not captured.
