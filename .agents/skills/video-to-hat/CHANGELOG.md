# Changelog — video-to-hat

## v1.0.0 — 2026-07-19
Initial install. Written directly following house conventions.

**Why it exists:** Ben continuously feeds in videos with new advertising/e-commerce knowledge. The `watch`
skill breaks a video down; nothing connected that breakdown to the PHC skill that should own the knowledge.
The two prior video sessions did this ad-hoc, and the second one ran away — a breakdown request turned into
an unrequested multi-file build session because no checkpoint existed between "here's what's new" and
"files edited."

**The wedge is the gate.** Routing and diffing were already being done correctly by hand; the missing piece
was a hard stop for approval before any file is touched. That's step 5, and it's the reason this exists as
a skill rather than a habit.

- Five-step pipeline: breakdown (precondition) → route → diff → **GATE** → apply + staleness sweep.
- `/watch` alone never triggers it. The pipeline only runs when Ben asks to route/apply.
- **Default outcome is no change.** "Already covered" and "covered better" are successful results. Encoded
  as both an integrity rule and an anti-pattern, because the failure mode is a pipeline that manufactures
  an edit from every video.
- Routing table across all 8 installed hats, plus explicit "none" and "→ skill-forge" outcomes.
  Multi-hat routing is normal — the last Meta ads course split across Legatus, Faber, and Vigil.
- Five diff buckets including **covered better** (the hat's existing version wins — a real and frequent
  outcome, observed on the first video reviewed) and **contradicts** (never silently overwritten; Ben
  decides).
- **Scale check** — mandatory. Source material is overwhelmingly from agencies running many accounts at
  high spend; PHC is one store. Thresholds that classify everything, statistical tests that fire daily at
  low volume, and agency monitoring cadences all failed this check in practice during the second video
  review.
- **Evidence check** — mechanism / practice / anecdote. A creator's revenue claim is never encoded as a
  threshold. Every adopted number is labeled a placeholder until PHC's own data replaces it.
- **Staleness sweep** after applying — added because changing Legatus's output format in v1.1.0 silently
  invalidated its five golden examples, which weren't caught until a manual pass afterward. Now checked
  automatically: golden examples, sibling skills reading the changed definitions, frontmatter description,
  INDEX.md.
- CHANGELOG entries must record **what was deliberately not adopted and why**, so rejected ideas don't get
  re-litigated on the next similar video.
- Build tool, not a PHC team member — no Roman rank, no brand voice, same category as
  `shopify-theme-editor`.

**Not yet exercised** — the pipeline has not been run end-to-end on a fresh video. Its first real test is
the next one Ben pastes.
