# Changelog — herald-social


## v1.2.0 - 2026-08-04 (late-filed 2026-07-29 batch)

**LATE-FILED BATCH — read this before reading the version/date sequence.** These proposals were
ruled by Aurelius on **2026-07-29** and filed on **2026-08-04**, six days later. They were
status-flipped to APPLIED on 07-29 but the corresponding edits were never written — a process
failure (label updated, edit never landed) caught by a tree-wide audit on 2026-08-04 that found
**57 affected proposals across 5 generals**, all from the same 07-29 intake session. Every item was
**re-grepped against current doctrine before being written**, per Aurelius's ruling that a verdict
never checked against its destination is an unverified claim wearing an APPLIED label. This is why
there is no 2026-07-29 entry in this file and why the version sequence jumps — **versions are
assigned by filing date, not ruling date**, so this batch sits after the 2026-08-04 Eclipse work
rather than before it.

**Sources:** AC Hampton "Starting Dropshipping From $0" · "One Person Business" (both 2026-07-29).
**6 proposals, 6 filed, 0 withdrawn** — all returned clean misses on the re-grep.

**New reference file — `references/herald-doctrine-publishing-and-input.md`.** This is Herald's first
`references/` file; the skill carried no reference material before it.

- **Batch-load once, schedule daily (HH-1)** as Herald's default publishing mechanic, naming Meta
  Business Suite → Planner. Verified NEW twice (07-29 and 08-04).
- **Planning output shape changed to a loadable batch (HH-2)** — assets finished and ordered, ready to
  enter a scheduler in one sitting, rather than a list of things to make later. This is the proposal
  that actually changes behaviour; HH-1 alone is a tool note. A list of ideas transfers the remaining
  work back to Ben exactly when his attention is scarcest.
- **The compounding caveat (HH-4)**, attached to both rather than standing alone: **batching makes
  consistency cheap, not results fast.** A scheduler running two weeks proves nothing, and a full
  content calendar is the most available false signal of progress in this lane.
- **"Generic output is a symptom of generic input" (HO-1)** — supply specific outside material before
  drafting rather than relying on category knowledge. Sharpens the Craft pillar, where
  undifferentiated detail is the standing failure.
- **The lead-not-a-fact gate (HO-2)** as a hard precondition on HO-1: any model-surfaced detail is
  traced, hedged, or dropped before publication. **HO-1 is not adoptable without it** — an instruction
  to be more specific, unguarded, is an instruction to invent specifics.
- **The novelty-inverts-verification failure mode (HO-3)**: the more obscure a detail, the harder it
  is to check *and* the stronger the pull to publish it. Treat "I've never heard that before" as a
  verification trigger, not a quality signal.

**Queued, not done:** the verification gate is now held by Herald, Faber and Scriptor in three
wordings; consistency pass flagged 2026-08-04.

## v1.1.0 — 2026-07-28
Minor — one new section, no rule changes. Routed through the `/watch` **Aurelius routing gate**.
Source: Karolis, "Claude + Gemini Omni Has Changed AI UGC Forever" (2026-07-22) — see
`references/herald-video-karolis-faceless-organic.md`.

**Added — "Formats and untested ideas":**
- **Faceless narrated video (H-1).** Satisfies three existing rules at once rather than seeking an
  exception to any: nobody on camera, no presenter making experience claims, no testimonial content. PHC's
  organic video gap was that the founder will not appear and inventing a presenter is refused — **a faceless
  format needs no presenter at all.** The production template lives in `faber-creative-flywheel` and is read
  there, not restated. Flagged **untested**, and explicitly noted as *not* a substitute for real customer
  proof: it is brand voice, not testimony.
- **Reply-to-comments-with-video (H-2)** — logged as an **untested idea, not a working tactic**, with a
  named trial condition (comment-reply videos measured against ordinary posts on the same account). The
  source offered zero data of any kind. Any PHC trial uses the presenter-free version; the source's
  fabricated-AI-person execution is refused and does not travel with the tactic.

**Unchanged, explicitly:** the fabricated-testimonial rule and the no-Ben-on-camera constraint. Both held
correctly against this source — the faceless format satisfies them rather than requiring an exception.

## v1.0.0 — 2026-07-03
Initial install via Skill Forge (full route, auto mode).
- PHC's organic social voice — drafts and plans content across the three locked pillars (Confession and
  Build, the Craft, the Vote), grounded in the installed Augur and Legatus skills rather than a static
  configured voice brief.
- Novelty verdict: DIFFERENTIATE, ecosystem overlap ~62/100 (`social-ai-team` and the content-pillar/
  caption-writer pattern). Closest call of the three DIFFERENTIATE-scrutinized skills — the pillar-locking
  wedge is thinner by design (pillar substance intentionally not invented); carried by the live cross-skill
  integration and two hard constraints instead.
- Pulls Augur's Language Patterns + Emotional Triggers (with confidence labels) and Legatus's named
  "the seed" finding when available; flags the gap and proceeds best-effort when neither exists yet.
- Hard integrity rule: never fabricates a customer testimonial — tied explicitly to the FTC Consumer
  Reviews Rule and PHC's own fake-review-wipe history, not generic caution.
- Never depicts or implies Ben on camera (visual only, as approved in grill.md). Ideation idea B3 (broader
  no-ghostwritten-voice guard) was caught mid-Verify as unauthorized scope (Build had added it without
  acceptance) and removed before install — available for a future `revise` pass if wanted.
- No references/ asset — an explicit call, not a default: a pillar-definition file would mean inventing
  unsourced brand-strategy content. Pillar substance intentionally left undefined; the skill pulls it from
  Ben's existing context or asks, matching its own anti-fabrication ethos applied to itself.
- `expects_from: augur-research, legatus-meta-ads` — no `handoffs_to` (Herald is the terminal consumer in
  this fan-in relationship; nothing downstream reads from it in this roster).
- Verify: Trigger Arena precision/recall/F1 = 1.0, including a real collision test against both installed
  `legatus-meta-ads` and `augur-research` (6/6 correctly routed away from Herald); 3/3 golden examples
  passing.
