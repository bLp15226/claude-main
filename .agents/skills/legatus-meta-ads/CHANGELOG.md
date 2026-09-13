# Changelog — legatus-meta-ads

## v1.3.0 — 2026-07-28
Minor — largest single update to date: account architecture (an area Legatus previously had no doctrine
on at all), plus a measurement-integrity rule, two new computed quantities, and one new shared definition.
No breaking changes.

Routed through the `/watch` **Aurelius routing gate** — four videos ingested 2026-07-28, staged, briefed,
ruled by Ben, then filed. 13 of 17 proposals applied here; 4 were withdrawn on verification as already
covered (see the note at the end of this entry).

**Sources:** Blackie, "I Tried Dropshipping From Scratch For 7 Days" (12:29, 2026-07-27) · Piliero,
"The Only Facebook Ads Video You Need in 2026" (35:55, 2026-07-26) · Hampton, "The NEW Way To Run Facebook
Ads With Claude in 2026" (15:58, 2026-06-30). Per-claim provenance in `references/legatus-video-*.md`.

**Added — account architecture** (`references/diagnostic-taxonomy.md`; new section):
- **Four-campaign model** — prospecting CBO and retention as cores, retargeting and scale optional, with
  the retargeting *trigger condition* (engaged-audience overspend) rather than the campaign as default.
- **Swim-lane separation** as the load-bearing rule: retention revenue flatters prospecting efficiency when
  merged. New integrity rule forbids quoting a blended figure as an acquisition number.
- **`avatar_concept_pack#` ad set naming** and concept grouping, for ad-set-level spend control. **The
  source's pack *cadence* (4–8 ads, new pack every 1–3 weeks) was REJECTED** — re-derived against Faber's
  bloat guard, $50/day supports 7 live ads total, fewer than one pack. The rejection is stated inline with
  the naming convention so the two never separate.
- **Campaign blueprint defaults** — purchase event, CBO, proven-vs-broad head-to-head, hook-variation
  creative. Wired into Workflow mode 2.
- **Variant discipline** — 2–3 genuinely distinct primary texts/headlines, never paraphrases; framed as the
  in-ad analogue of the bloat guard.

**Added — measurement integrity:**
- **Attribution window + the bid-strategy trap** — switching to a ROAS goal silently narrows ad-set
  attribution to 7-day click only, making before/after comparisons across the change invalid. New integrity
  rule and anti-pattern. Legatus previously had no attribution-window doctrine.
- **Segment breakdowns — observe, don't cut.** Excluding a weak age/placement band shrinks the delivery
  pool permanently for a cosmetic reporting gain; use value rules to shade bids instead, tested in an
  isolated ad set. Volume-gated: the don't-cut rule applies now, the value-rule mechanics wait for volume.
- **Creator benchmarks are not evidence** — worked example showing published ROAS falling 4–6× as spend
  rises across one source's own three accounts, plus the rule that agreement between two creators in one
  niche may be a shared upstream source counted twice, not corroboration.

**Added — computed quantities:**
- **Break-even ROAS**, `price ÷ (price − landed cost − processing)`, with the processing term mandatory —
  omitting it understates break-even by ~5.6 points (1.46 vs 1.54 on the worked example), exactly where
  scale/hold calls are made. Explicitly distinct from the early-stage ROAS floor.
- **Daily budgets overshoot** — plan cash at ~1.25× the set budget. The source's 35% figure was
  deliberately **not** encoded; it exceeds Meta's documented allowance and could not be verified.

**Added — shared definition:**
- **Hook rate**, owned by Legatus, read (not restated) by `faber-creative-flywheel`, same arrangement as
  Vigil. **No PHC threshold** — two data points from one ad set is not a distribution.

**Added — connector safety** (`SKILL.md` Setup):
- Official-connector-only, with an **unverified** claim recorded that unofficial connectors drew
  account-level enforcement in early 2026. Marked unconfirmed; migrates to `praetorian` if ever built.
- Permission scope: reads may be always-allow, writes never auto-approved, and blanket
  "all current and future ad accounts" authorisation is called out as a real decision.

**Explicitly ruled NO CHANGE** (recorded so the reasoning survives):
- **Scaling range stays 1.2×–1.5×.** Three of four sources leaned more aggressive; none showed a
  post-scale observation window. Pattern-watch table now lives in
  `references/legatus-video-blackie-7day-dropship.md` §3.2 — append future instances there.
- **Faber's bloat guard unchanged.** The Piliero pack cadence collides with it; the guard was derived from
  that same speaker's own earlier death-loop warning. When a source contradicts himself, the version with
  the safety mechanism wins.
- **CPM ceiling, ATC floor, five-category taxonomy and 7-day cadence unchanged.** A second source matched
  them exactly, but shared-jargon echo could not be excluded. Thresholds keep placeholder status.
- **No new Centurion routing** — the existing joint-alert contract already covers checkout/trust.

**Withdrawn on verification — 4 proposals found already covered, not applied:** a low-spend outlier guard
(already in the scale guards' $100 minimum-spend floor, "never as a winner on a lucky day"); purchase-event
-only optimisation (the settings chain already states the algorithm optimises for the chosen event and
nothing else, and to prefer the standard purchase event); a 48h early ROAS gate (the KPI block already
carries a 0.8 ROAS floor labelled "early-stage test threshold, not a steady-state profitability target");
and a $50/day budget floor (already the KPI block's minimum daily spend to evaluate a test). These were
proposed on a faulty gap analysis and withdrawn before application rather than added as duplicates.

## v1.2.0 — 2026-07-19
Minor — new diagnostic mechanism and one guarded framework. First update routed through the
`video-to-hat` pipeline (proposed at the gate, applied on explicit go-ahead).
Source: "How The Facebook Ad Algorithm Actually Works (And How To Beat It)" — Sam Piliero — 12:55.
- **Volume/value model** [02:40] — *mechanism*. Under highest-volume-or-value bidding, Meta optimizes for
  exactly two things: can the ad scale (volume) and can it do so efficiently (value). Adds a nameable
  diagnostic state, **"volume without value"** — an ad spending heavily and returning badly isn't random
  waste, it's the algorithm judging it scalable and failing it on efficiency. Also supplies the missing
  rationale for the v1.1.0 winner definition: spend share *is* the volume test, target ROAS *is* the value
  test, which is why an ad needs both.
- **Settings chain** [03:34] — *mechanism*. Bid strategy → ad-set performance goal (which defines what
  "value" means) → conversion event. Category 3 previously operated only at the objective level; an account
  can have the right objective and be misconfigured underneath it. Diagnostic step 4 now checks both.
- **Custom conversion event warning** [04:27] — *practice*. Standard purchase events carry Meta's
  cross-advertiser training data; custom events learn from scratch, costing time and spend first.
- **Learning-limited framing nuance** [07:47] — the status alone is not a defect and historically signals
  *don't pause*. The diagnosable problem is the churn pattern, not the label. Category 1 now requires the
  edit history before flagging — previously Legatus could flag the status itself and thereby invite the
  pausing cycle that causes the real problem.
- **Funnel-depth model + scale-attribution check** [08:41] — the significant and most carefully guarded
  addition. Explicitly labeled **FRAMEWORK, not verified Meta mechanism**. The model says later spend
  reaches further up-funnel to slower-converting buyers, so a post-scale ROAS decline can be normal market
  capture. Legatus previously had no scale-attribution concept at all and could kill a campaign behaving as
  expected.
  - **The model inverts at PHC's scale, and this is why it's gated.** At low spend, delivery is almost
    entirely bottom-of-funnel, so a ROAS decline here is *less* likely to be funnel depth and *more* likely
    to be a genuine problem. Unguarded, it hands Legatus a sophisticated-sounding universal excuse that is
    almost always false at PHC's volume and would suppress correct kill verdicts.
  - Gated behind **four required conditions**: a real scale event, spend above a plausibility floor,
    corroborating evidence (reach expansion / CPM rise / frequency *not* spiking — a frequency spike means
    saturation, the opposite explanation), and **usable exactly once per campaign**. If any condition
    fails, funnel depth must not be mentioned at all — naming and dismissing it still plants the excuse.
  - The $100/day plausibility floor is **explicitly unsourced** — no reliable public threshold exists for
    where funnel progression becomes material. Labeled a conservative placeholder everywhere it appears.
- Not adopted: the agency's scaling results ($800k → $8.9M, 987%) — anecdote from monetized content, never
  encoded as a threshold. Also declined a Vigil-side scale-event flag, which would push a
  report-only skill toward diagnosis.
- Staleness sweep: no output-format change, so the six golden examples remain valid. Frontmatter
  description unchanged (no trigger or lane change). Version and INDEX updated.

## v1.1.0 — 2026-07-19
Minor — new diagnostic capability, no breaking changes to existing modes. Sourced from a second Meta Ads
course transcript (Sam Piliero / The Moonlighters, ~52 min), reviewed against v1.0.1 for genuine novelty;
items already covered by v1.0.1 were deliberately not re-added.
- **ATC rate floor (>3%) added to KPI thresholds** — closes a real hole: category 4 (checkout/trust vs. ad
  problem) was defined in terms of ATC rate "looking normal" with no number defining normal. Category 4 now
  requires citing the real rate against the floor.
- **King goal** — new account-level context block (non-promo / promo / blended monthly target), supplied by
  Ben and never invented. Verdicts are measured against it when present. Added as a hard integrity rule:
  judging an account against the wrong goal is the most likely way Legatus misleads.
- **Winner/potential classification** — systematic two-class sort across every ad (winner = ≥5% campaign
  spend AND at/above target ROAS → replicate; potential = one condition but not both → tweak). Distinct
  from category 5 "the seed," which stays a single-standout diagnostic instinct. Feeds
  `faber-creative-flywheel` as two separate lists.
- **PHC scale guards** — the 5% spend-share test is agency practice on accounts with dozens of live ads; at
  PHC's scale it classifies everything as a winner. Added a mandatory 8-live-ad minimum before the test
  applies and a $100 cumulative-spend floor below which an ad is unclassifiable.
- **Multi-window evaluation (3/7/14-day)** — no classification, diagnosis, or trend claim off a single day;
  persistence across windows is the signal, and outputs must name which windows a finding held in.
- **Promo-period exclusion** — drop days at ≥5× trailing non-promo median revenue from all baseline math,
  and always report what was excluded. Promo days both hide real anomalies and manufacture fake ones.
- Lane boundaries added for the two new sibling skills: unattended/scheduled monitoring → `vigil-ads-monitor`,
  creative production → `faber-creative-flywheel`. Frontmatter updated (`handoffs_to` +faber,
  `expects_from` +vigil).
- Diagnostic-audit output format extended with baseline/king-goal header and winner/potential blocks.
- **Golden examples refreshed to v1.1.0** (all 5 updated, 1 added — 6 total). They were written against
  v1.0.1's output format and had gone stale the moment the format changed:
  - **1 (diagnostic audit)** — added promo exclusion, king-goal measurement, classification, multi-window.
  - **2 (campaign build)** — added the ATC placeholder and a second required ask for the king goal. Notes
    that a plausible king goal is *easier* to invent than a plausible budget, which makes it the more
    dangerous silent default.
  - **3 (Centurion boundary)** — now requires citing the real ATC rate (5.1%) against the 3% floor by
    number, and adds an **inverted case** (ATC 1.4% → ad-side, no Centurion alert) so a skill that routes
    every conversion complaint to Centurion regardless of data can't pass.
  - **4 (seed/scale/self-diff)** — added the multi-window gate on the scale decision, plus an explicit
    **seed ≠ winner** section. v1.1.0 created a real conflation risk between a judged single standout and a
    computed systematic sort; the two drive different actions (protect vs. replicate) and the same ad set
    is often both.
  - **5 (kill post-mortem)** — added **empty-result discipline**. Classification creates pressure to
    produce a winners list for Faber; an audit returning none is a finding, not a failed audit. Promoting
    the least-bad ad would send Faber to burn a 14-day cycle on a structure that never had a chance.
  - **6 (classification under scale guards)** — NEW. Covers the capability most likely to fail silently at
    PHC's size, with a worked 5-ad table (arithmetic recomputed, shares sum to 100%). Ad D is deliberately
    the trap: highest ROAS on the board (3.1) at $60 spend, and the correct call is still "not
    classifiable." Tests both guards in opposite failure directions — without the ad-count guard a thin
    campaign classifies everything as a winner; without the spend floor, noise classifies as the best ad.
- Not re-added (already covered in v1.0.1, re-confirmed against the new source): connector setup, permission
  hygiene (insights allow / mutations approve), learning-phase resets, CPM health, objective mismatch, the
  propose-never-execute rule. The source's own closing warning about AI-bloated ad accounts as a "death
  loop" independently validates the existing human-filter rule; no change needed.

## v1.0.1 — 2026-07-03
Patch — frontmatter-only, no behavior change.
- Added `expects_from: centurion-store-health` to make the joint checkout/trust alert relationship
  symmetric on paper (it was already symmetric in practice — both skills' Integrity rules describe the
  alert as simultaneous, not sequential). Found during `centurion-store-health`'s Verify cross-skill
  consistency check. No trigger, workflow, or output changes; Trigger Arena and golden examples unaffected
  (re-confirmed, not re-run — nothing behavioral changed).
- Rollback snapshot of v1.0.0 kept at `.claude/_forge/legatus-meta-ads/versions/1.0.0/`.

## v1.0.0 — 2026-07-03
Initial install via Skill Forge (full route, auto mode).
- Live Meta Ads diagnostic + media-buying advisor, connected via Meta's official Ads MCP connector
  (mcp.facebook.com/ads) — not a CSV/screenshot export tool.
- Named 5-category diagnostic taxonomy (learning-phase resets, CPM health, objective mismatch,
  checkout/trust, "the seed") — all 5 fully defined; "the seed" resolved from Ben's own Meta Ads source
  transcript at the final install gate.
- Four request modes: diagnostic audit, campaign build, cadence/status check, compliance watch.
- 7-day management cadence as a literal checklist; scaling math (1.2x-1.5x increments, max once per 3 days)
  always shown worked with real numbers.
- Post-mortem-on-kill template (feeds a future Augur hat), week-over-week verdict-log self-diff — both
  accepted from the ideation menu at the final gate.
- Hard integrity rule: never calls a mutating MCP tool without Ben's explicit in-turn confirmation.
- `handoffs_to: centurion-store-health, herald-social` / `expects_from: augur-research,
  beowulf-product-scouting` — declared as an intended contract; none of the four are installed yet (staged
  briefs only in `.claude/_forge/`).
- Verify: Trigger Arena precision/recall/F1 = 1.0 on the testable should-fire/near-miss set (no local
  installed neighbor exists yet for a true collision test); 5/5 golden examples passing.
