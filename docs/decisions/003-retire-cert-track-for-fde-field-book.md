# 003: Retire the cert track; study agent engineering from official docs

**Status:** Active
**Owner:** Karthik
**Date:** 2026-10-31
**Type:** decision
**Supersedes:** [002-build-anchored-cert-track.md](002-build-anchored-cert-track.md), and the study-artifact list in [001](001-repo-role-public-evidence-trail.md) (exam logs, cert notes, flashcards)

---

## Context

Decision 002 set a build-anchored cert track: AIF-C01, then MLA-C01, then CCA-F, with CHP parked. Notes for AIF-C01 Domains 1 to 5 were written in `aif-c01/`.

On 10/30/2026 the goal changed. Karthik wants to build and ship AI agents the way a forward deployed engineer (FDE) does: on the client's problem, on the client's cloud. His clients run on Azure, Google Cloud and AWS. A Udemy AI FDE course was considered as the syllabus ([archived plan 005](../plans/archive/005-udemy-ai-fde-course.md)) and not bought.

## Decision

**Plan [007](../plans/007-ai-fde-study-plan.md) is the live study plan.** It keeps the course outline's 15-topic order and drops everything else about the course.

- **All certs retire:** AIF-C01, MLA-C01, CCA-F and the parked CHP.
- **Claude teaches from official docs.** Each topic from its own vendor's or project's docs: Microsoft Learn, Google Cloud docs and AWS docs for cloud services, the project's own docs for an open tool. Each with the date checked. No course, no videos.
- **One field book, one chapter per session** ([plan 006](../plans/006-ai-fde-field-book.md)), each with a lab prototype in `fde-field-book/labs/chNN/`.
- **Free first.** Sessions 1 to 10 run on free local models (Foundry Local on the Mac). Azure labs start in Session 11, on Karthik's business tenant, behind a budget alert. Google Cloud and AWS are covered by a comparison table per topic, not by labs.
- **Labs are generic prototypes of real RCM product problems.** Synthetic data, our own code. A prototype that proves out becomes a sprint plan in that product's repo, under its rules.
- **Microsoft Agent Framework** (Python) for the labs from Session 2.

## Rationale

- **Official docs over a course.** Models, prices and vendor features change monthly. A chapter drafted from docs checked that day is current; a recorded course is not.
- **Three clouds in tables, one cloud in labs.** Clients use all three, so each topic gets compared. Labs on one cloud mean one account, one budget and one teardown.
- **Free local models first.** Azure OpenAI has no free tier. Ten sessions on a local model cost nothing and teach the same loop.
- **Agent Framework.** It runs on Foundry Local in the free sessions, has workflow checkpoints and human sign-off for Session 8, and moves to Azure in Session 11 without a framework change (Microsoft Learn, checked 10/30/2026).

## Alternatives considered

- **Keep the cert track (002).** Retired: the goal is building and shipping agents, which 007's labs exercise directly.
- **Buy the Udemy course.** Not bought: Claude teaches the same topics from official docs.
- **Hands-on labs on all three clouds.** Rejected: three accounts, three budgets and three teardowns for the same lesson.
- **A local worktree of the real product as the lab base.** Rejected: its full stack would eat lab time. Integration with real code is learned when a prototype is promoted.
- **LangGraph as the framework.** Not chosen: Agent Framework covers the same checkpoints and human sign-off, and is documented on Microsoft Learn alongside the Azure services the paid labs use. LangGraph is still taught by name where the course used it (Chapter 8).

## Consequences

- **Archived:** the cert roadmap (001-roadmap) and plan 005, moved to `docs/plans/archive/`.
- **Removed:** `aif-c01/`. Its notes stay in git history.
- **Retired skills:** `/aiprof`, `/visual-kt` and `/quiz`. `/brainstorm` stays and writes into the chapter's file.
- **Repointed:** CLAUDE.md, the consistency, planning and professor rules, `docs/README.md` and `docs/sources.md` now point at the field book.
- **The engineering toolkit is out of this repo.** It is a study repo; the commit hooks keep file cleanup, the secret scan and a name guard.
- **Decision 002's product-build lab spine ends.** Labs are generic prototypes instead.

## How this gets enforced

The session-start protocol reads `STUDY_LOG.md`'s "Where we are" block, which points at plan 007. The name-guard commit hook (007, Session 0) blocks client and product names in this public repo, read from a gitignored list.
