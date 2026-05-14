# AR Triage Case Study — Narrative

**Status:** Draft (Week 1)
**Target publish date:** 2026-05-30 (end of Week 2)
**Sanitization checklist:** [ ] Client name removed [ ] Real $ amounts ranged/percentaged [ ] PHI scrubbed [ ] Payer names generalized where needed

---

## 1. The problem (before)

_RCM operations context. AR aging queue size, manual triage workflow, hours/week burned, recovery rate baseline._

- Practice profile: _N providers, $X annual revenue, payer mix_
- AR aging: _$X in 90+ buckets, Y claims sitting_
- Manual triage cost: _Z hours/week across N specialists_
- Recovery rate baseline: _X% on 90+_

## 2. Why existing tools failed

_Clearinghouse reports, PM-system worklists, generic RPA — why none of them solved this._

## 3. The agent architecture

_The actual system I built. Diagram goes in architecture.drawio._

- **Ingestion:** 835/EOB + claim status + payer policy docs
- **Ranking model:** features used, recoverability score, queue ordering
- **Appeal-letter generation:** payer-specific templates, denial-code routing
- **HIPAA controls:** RLS, field-level AES-256, audit log
- **Human-in-the-loop:** specialist review checkpoints, override workflow

## 4. Results (after)

_Sanitized metrics. Use ranges or percent deltas, not absolutes if sensitive._

- AR 90+ reduced by _X%_ in _N_ months
- Specialist throughput up _X claims/hour → Y claims/hour_
- Recovery rate on prioritized queue: _X% → Y%_
- Time-to-first-touch: _X days → Y hours_

## 5. What I'd do differently

_Honest retrospective. Builds credibility more than the wins do._

## 6. Who this is for

_Target reader: RCM director / practice CFO / health system VP Revenue. Call to action: book a 30-min review of their AR aging._

---

## Distribution checklist

- [ ] PDF version (gated download)
- [ ] Architecture diagram (draw.io / excalidraw export)
- [ ] LinkedIn post — long-form (in `linkedin-posts/`)
- [ ] LinkedIn post — 2nd hit at +1 week (in `linkedin-posts/`)
- [ ] Landing page with email gate
- [ ] 6-min Loom walkthrough
