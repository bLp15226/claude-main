# ACCOUNT ARCHITECTURE + OPERATIONAL CADENCE — PILIERO M4 (VIDEO INTAKE, DELTA)

> **PROVENANCE: VIDEO SOURCE.** Speaker: Sam Piliero, The Moonlighters (agency; sells agency
> services and a paid community — context only, per the standing rule not to discount a method
> for its pitch). Title: "The Only Facebook Ads Video You Need in 2026". Published: 2026-07-26.
> Runtime: 35:55. URL: https://youtu.be/6P5M8yvXx1g · Extracted: 2026-07-28.
> Claim-type breakdown (full video): 35 platform-mechanics / 6 persuasion / 7 performance.
> Evidence tiers (full video): 22 demonstrated (per narration) / 8 claimed / 18 asserted.
> Transcript archived:
> `references/sources/video-6P5M8yvXx1g-piliero-m4-account-structure-transcript.txt`
> Extraction basis: **auto-generated captions only, no frames.** The video is largely a live
> ads-manager walkthrough — "demonstrated per narration" means he narrates clicking a setting on
> screen. Setting paths are credible; outcomes are not visually confirmed.
> STATED/INFERENCE classification applied throughout.
> **ROUTED 2026-07-28 per Aurelius ruling.** This file carries the Legatus share: account
> architecture, the pack structure, the attribution-window gotcha, breakdown/value-rules guidance,
> cost-control conflicts, variant/text volume discipline, and performance calibration.
> Asset spec + Advantage+ enhancement rule → Faber. "Good ads do four things" → Scriptor.

## ⚠ THIRD PILIERO SOURCE — THIS IS A DELTA

The `/watch` Step 0.5 dedup guard fired on the **speaker key**; video ID, URL and title were all
clean, so this is a genuinely new video rather than a re-upload. Ben ruled 2026-07-28 to proceed
as a **delta extraction**.

| Prior Piliero source | Reviewed | Produced |
|---|---|---|
| ~52-min Meta Ads course (`0Z6Rgo6iiUA`) | 2026-07-19 | Vigil v1.0.0, Faber v1.0.0, Legatus v1.1.0 |
| same source, redundant re-watch | 2026-07-23 | Corroboration record only; 6 proposals HELD |
| "How The Facebook Ad Algorithm Actually Works" (12:55) | 2026-07-19 | Legatus v1.2.0, Faber v1.1.0 |

**Already adjudicated and present in this video — deliberately NOT re-proposed:** Andromeda
targeting-through-creative and the avatar/concept unit (Faber v1.1.0); the creative flywheel
(Faber v1.0.0); winners as top-spending ads hitting KPI (Legatus v1.1.0); the bid strategy →
performance goal → conversion event chain and the volume/value model (Legatus v1.2.0); competitor
templates as bounded inspiration (Faber, with the pattern-not-replica line set 2026-07-28); and
the account-bloat warning, which produced Faber's guard — see §2.4.

**Novelty verified, not assumed:** on 2026-07-28 `SKILL.md` and `references/diagnostic-taxonomy.md`
were grepped and contain **zero** coverage of campaign architecture (no prospecting, retention,
retargeting or scale concepts) and **zero** attribution-window doctrine. Both are real gaps.

---

## 1 — Account architecture: two core campaigns, two optional

*STATED · PLATFORM MECHANICS · ASSERTED (architecture) + DEMONSTRATED PER NARRATION (the build).*

1. **Prospecting CBO — core.** New-customer acquisition only; purchasers excluded. Holds the packs
   (§2).
2. **Retention — core.** All past purchasers. Winning ads, evergreen creative, sales, promos,
   upsells/downsells. Deliberately few ad sets so frequency stays high against known buyers. Built
   by duplicating prospecting, dropping the purchaser exclusion, and pointing one or two ad sets at
   `purchase_180days` and `purchase_alltime` custom audiences. Budget starts low and works up while
   watching frequency.
3. **Retargeting — optional.** The useful part is the trigger condition rather than the campaign:
   retargeting mostly already happens *inside* prospecting, so a separate campaign is warranted
   only when audience-segment reporting shows **overspend on engaged audiences** — at which point
   you pull it out of prospecting. Contents: FB/IG engagers, 30–60 day site visitors, 90-day+
   ATC/initiate-checkout. Creative leans on objections, sales and offers.
4. **Scale — optional, top of account.** A single broad ad set holding roughly five of the very
   best ads in the account. Sole function: force additional spend against proven winners.

### 1.1 The load-bearing idea — separate swim lanes

The stated reason for splitting prospecting from retention is to keep new-customer money
distinguishable from repeat-buyer money.

> **PHC synthesis — this is the most important structural idea in the video and it is
> scale-independent.** Blended into one campaign, retention revenue flatters prospecting
> efficiency: the account reports a healthy blended ROAS while the acquisition engine underneath
> may be underwater. For a single store this is one of the easiest ways to believe acquisition
> works when repeat purchases are carrying it. **This costs nothing to adopt at any budget and is
> the highest-value item in §1.** INFERENCE.

### 1.2 Retention as the profit centre — hypothesis, not doctrine

He asserts most e-commerce businesses do not profit on the first purchase and that retention is
where margin lives. *ASSERTED, no data shown.* Widely held and plausible, but this source offers
nothing to support it and **PHC's own repeat-purchase rate is unknown**, so it cannot be assumed.
Recorded as a hypothesis to test against PHC's data, not as a basis for allocating budget.

### 1.3 Scale campaign — note the alternative scaling path

The scale campaign forces spend onto winners by **relocating them into a dedicated broad ad set**,
rather than by raising the budget of the ad set they already live in. Legatus's existing scaling
math (1.2×–1.5× increments, `references/diagnostic-taxonomy.md`) models only the latter. Recorded
as an observation — **not a proposed change**, and gated by the same evidence standard: this source
shows no post-scale window either. PHC synthesis, INFERENCE.

---

## 2 — The pack system

### 2.1 Structure — ADOPTED

Ad sets are "packs," named `avatar_concept_pack#`, each holding one concept.
*STATED · PLATFORM MECHANICS · ASSERTED.*

**What is adopted, per the 2026-07-28 ruling: the naming convention and the concept-grouping
principle.** Both work at a single pack and require no particular budget. Grouping by concept is
what creates ad-set-level control — his stronger argument, and one that does not depend on account
size: run everything in one campaign and one ad set and the only available levers are pausing an
ad or launching one.

### 2.2 Pack sizing and cadence — REJECTED for PHC

His stated parameters: **4–8 ads per pack**, new packs launched on a **drumbeat every one to three
weeks**, stacking over time. The claimed mechanism is that continual addition forces CBO to
migrate budget toward the best-performing ad sets.

### 2.3 Testing cap — recorded, with its budget floor

Set each new pack's average daily minimum to **target CPA**; if that exceeds **20% of total
budget**, switch to percentage and cap at 20%. Run the minimum for **7 days only**, then remove it
— his claim is that removing it does not reset learning, it only stops forcing spend, so a winner
continues (already above the floor) and a loser dies. *ASSERTED.*

> **The 20% rule has a hard budget floor built into it.** For the dollar-value version to work as
> designed, total daily budget must be **at least 5× target CPA**:
>
> | Target CPA | Minimum daily budget for the rule to function |
> |---|---|
> | $15 | $75/day |
> | $25 | $125/day |
> | $40 | $200/day |
>
> Below that threshold every new pack is capped at 20% of budget and may never receive enough
> daily spend to produce a readable result. PHC synthesis, INFERENCE — arithmetic, not his claim.

### 2.4 ⚠ RULED 2026-07-28 — stacking cadence REJECTED, Faber's bloat guard UNCHANGED

**The collision.** Faber's guard:
`(daily budget × 14) ÷ $100 classification floor − live ads = new variations allowed`.
Re-derived against his stated pack sizes:

| PHC daily budget | Max live ads supportable | = packs of 4 | = packs of 8 |
|---|---|---|---|
| $50 | 7.0 | 1.8 | **0.9** |
| $100 | 14.0 | 3.5 | 1.8 |
| $150 | 21.0 | 5.2 | 2.6 |
| $200 | 28.0 | 7.0 | 3.5 |

At **$50/day, PHC's entire account supports fewer live ads than a single pack at the top of his
4–8 range.** At $100/day it supports under two. The stacking cadence is **structurally unavailable
at PHC's spend** — following it would breach the bloat guard within two or three cycles.

**Aurelius's ruling, recorded per the drift-log rule:**

> Faber's bloat guard is **correct as-is; no change**. The four-campaign pack structure is real
> architecture worth having on record (§2.1), but the resolution stays exactly where it already
> lives.
>
> Reasoning: **this is Piliero contradicting himself, not Piliero contradicting PHC.** Faber's
> guard was *derived from this same speaker's own "death loop" warning* in the earlier course —
> a warning that named the problem and shipped no mechanism to prevent it. This video's stacking
> cadence walks straight into that warning without acknowledging it; the video does not mention
> account bloat at all. **When a source contradicts himself, the version with the safety mechanism
> wins over the version without one.**
>
> Same shape as the Blackie 1.2×–1.5× scaling ruling (2026-07-28), except cleaner — there, both
> sides were weakly evidenced and the call was close. Here it is not a close call.

**Net effect:** pack naming and concept-grouping adopted; sizing and stacking cadence explicitly
rejected as structurally unavailable at PHC's spend, per Faber's existing guard.

---

## 3 — Campaign and ad set settings

*All STATED · PLATFORM MECHANICS · DEMONSTRATED PER NARRATION unless noted.*

**3.1 Starting budget** — minimum 1× target CPA. He explicitly declines to set it for the viewer,
noting it must be what the business can afford to lose. *ASSERTED.*

**3.2 Conversion event — always purchase; essentially never ATC or initiate-checkout.** Mechanism:
Meta delivers what you optimise for. Optimise to add-to-cart and you get many add-to-carts and few
purchases; optimise to initiate-checkout and you get people dropping at the final step.
*ASSERTED.*

> **⚠ CORRECTED 2026-07-28 — SUBSTANTIALLY ALREADY COVERED. Proposal P-5 was withdrawn, not
> applied.** The original text called this "new" on the grounds that Legatus v1.2.0 covered only
> **custom versus standard** events while this covers **which standard event**. That distinction is
> real but the gap was not: the settings chain in `diagnostic-taxonomy.md` already states the
> algorithm "optimizes for **whatever event you choose and nothing else**," that picking
> initiate-checkout "will happily drive initiate-checkouts that never purchase," and to **"prefer
> the standard purchase event."**
>
> The only element genuinely absent was **add-to-cart being named alongside initiate-checkout** —
> too thin to justify an edit. Recorded as independent corroboration of an existing rule (Hampton
> asserts the same thing), which is a legitimate outcome.

**3.3 Attribution — use the maximum window.** Enable 7-day click, 1-day engagement, 1-day view, to
feed the campaign maximum signal; narrower views remain available in reporting afterwards.

**3.4 ⚠ Changing bid strategy silently changes attribution.** Switching a campaign to a ROAS goal
drops the ad-set attribution setting from 7-day click / 1-day view / 1-day engaged to **7-day click
only**. He flags this explicitly as a trap.

> **PHC synthesis — the highest-value gotcha in the video, and it applies at any budget.** A silent
> attribution change makes before-and-after comparisons across a bid-strategy switch **invalid**:
> measured performance falls purely because the window narrowed, with no change in underlying
> reality. An operator would very plausibly read that as the new bid strategy failing and revert —
> a wrong decision caused entirely by a measurement artefact.
>
> Legatus had **no attribution-window doctrine at all** before this intake (verified 2026-07-28;
> its only prior attribution content is the unrelated scale-attribution check). INFERENCE.

**3.5 Audience and placements — fully broad.** Advantage+ audience may stay on. **He states he has
tested both and has no statistical significance either way.**

> Preserve that admission if this is adopted: the *setting* is a recommendation, the *comparison*
> is explicitly unproven by his own account. An unusually honest disclosure for the genre.

**3.6 Ad-level settings.** Unselect multi-advertiser ads. Personalised destinations he now mostly
turns off, though he allows either way for accounts with many product pages. Browser add-ons mostly
off. *ASSERTED — offered as preference, not mechanism.*

**3.7 Retention audience hygiene.** When building retention custom audiences, **unselect "use as a
suggestion"** so the audience definition stays narrow. Easy to miss and silently widens targeting.

---

## 4 — Variant and text volume discipline (RULED to Legatus)

**Ruling rationale, recorded:** volume and cadence questions — how many variants, how often — are
**operational testing cadence**, the same family as the pack system, and were ruled here rather
than to Scriptor alongside the copywriting framework. The principle-level copywriting content from
this video went to Scriptor separately (`scriptor/references/scriptor-video-piliero-four-part-ad.md`).

**The parameters.** Two to three primary texts, two to three headlines, one description (or none).
Enable optimised text per person. CTA: shop now for e-commerce, sometimes learn more.
*STATED · ASSERTED.*

**The discipline that matters — variants must be genuinely different.** Not numbered restatements
of one line. The point of running three primary texts is to test three distinct propositions; three
paraphrases of the same claim consume the same delivery budget and return no information.

> **PHC synthesis — this pairs directly with the bloat guard.** Both are the same underlying error
> in different places: producing variation that cannot generate a readable result. A near-duplicate
> text variant is bloat inside the ad, exactly as a surplus ad is bloat inside the campaign.
> INFERENCE.

---

## 5 — Deep dives: observe, do not cut

**5.1 The breakdowns.** Primary: age, gender, platform, placement. Secondary: day of week, time of
day. *DEMONSTRATED PER NARRATION.*

**5.2 The rule — do NOT cut underperforming segments.** His explicit warning: the instinct on
seeing an underperforming age band is to exclude it, and doing so **loses money and loses scale
potential**. Permitted responses are only (a) observe and (b) apply value rules.
*STATED · ASSERTED.*

> **PHC synthesis — counterintuitive, transfers at any budget, costs nothing.** The underlying
> logic: broad delivery is what allows the algorithm to find pockets of performance, and a hard
> exclusion shrinks the eligible pool permanently in exchange for a cosmetic improvement in a
> segment report. Unproven here — asserted with no data — but it points opposite to the obvious
> move, which is precisely the kind of claim worth recording.
>
> Legatus had no segment-exclusion doctrine before this intake (verified — its existing exclusion
> rules concern promo days in baselines, an unrelated matter). INFERENCE.

**5.3 Value rules — the alternative to cutting.** A 2026 Meta feature. Advertiser settings → value
rules → create rule set → e.g. decrease bid 10–20% on an underperforming age band; applied at ad
set level. His framing: the aim is not to kill the segment but to spend less there unless it
returns better. *DEMONSTRATED PER NARRATION.*

**5.4 Test value rules in an isolated ad set.** Duplicate the account's best performers into a
**new** ad set and apply the value rule only there, so the rule is the single changed variable.
*ASSERTED.* Methodologically sound — a rule applied in place is unmeasurable.

**5.5 Day-of-week spend concentration.** Concentrate budget on historically best-returning days,
pull back on weak ones.

> **Volume gate on §5.3–5.5.** Segment and day-of-week reads require enough conversions per cell to
> separate signal from noise. At PHC's volume most cells will hold single-digit conversions, where
> apparent differences are noise. **§5.2 transfers immediately; §5.3–5.5 need volume PHC does not
> have yet.** INFERENCE.

---

## 6 — Cost controls (gated far above PHC's scale)

**6.1 What they are.** Cost caps, bid caps and target-ROAS goals restrict Meta to spending fully
only when achieving the result set. He notes Meta overruns these targets regularly.

**6.2 The spend gate.** He introduces cost controls only above roughly **$100,000** in spend.
*ASSERTED.* **Three orders of magnitude above PHC.** Recorded for completeness, not adoption.

**6.3 ⚠ Never run cost/bid caps alongside highest-volume.** Mechanism: the capped campaign
cherry-picks the cheapest, best conversions while the highest-volume campaign is left feeding top
of funnel. The cap looks excellent, highest-volume looks terrible, and **both readings are
artefacts of running them together.** *ASSERTED.*

> Worth keeping despite the spend gate, because the failure mode is a **measurement** trap rather
> than a spending one — it produces a confidently wrong verdict about which campaign type works.
> That failure is available at any budget the moment two bid strategies run side by side.
> INFERENCE.

**6.4 Setting the cap.** Set cost-per-result goal to break-even cost per result, or to target if
better than break-even is required. Do not fiddle by a few dollars trying to squeeze Meta.

**6.5 His own caveat.** Cost controls are a **stability tool, not a fix** — they will not repair a
broken account, and capped campaigns can spend nothing on some days, which he notes damages
operations.

---

## 7 — Performance calibration

*All figures CLAIMED or DEMONSTRATED PER NARRATION; none verified. Per Axis 1 they stay provisional
until PHC's own account confirms or kills them, and **no threshold in any skill may be set from
them.***

**7.1 The three proof accounts, re-derived.**

| Account | Spend (30d) | Revenue | ROAS |
|---|---|---|---|
| A | $7,900 | ~$54,800 | 6.94 |
| B | $27,000 | ~$256,500 | 9.50 |
| C | $1,800,000 | $2,900,000 | **1.61** |

> **The framing does not survive re-derivation.** All three are presented as uniform proof that the
> system "works for all shapes and sizes." But **efficiency falls roughly 4–6× as scale rises**:
> 6.94 and 9.50 at small and mid scale, 1.61 at $1.8M. Account C's seven-day figure (~$1M → $1.5M)
> is 1.50, lower still.
>
> This is **not** evidence the system fails — ROAS declining with scale is expected and
> unremarkable. It is evidence that **the headline small-account figures must not be read as what
> the system delivers.** The video invites exactly that reading by presenting the three side by
> side without noting the pattern. INFERENCE — arithmetic from his own stated figures.

**7.2 The flagship client, re-derived.** First month with the agency: $18,000 → $29,000 = **1.61
ROAS**. Current month, first eight days: ~$1M → ~$1.7M Meta-attributed = **1.70 ROAS**. He
separately cites ~$3.5M "actual Shopify revenue," roughly 2× the Meta-attributed figure.

> **The growth story is a spend story, not an efficiency story.** Spend rose roughly 55× while ROAS
> moved 1.61 → 1.70 — essentially flat. His stated claim ("every month we've increased their total
> revenue") is true and is about revenue; the natural inference that the system made the account
> *more efficient* is not supported by his own numbers. To his credit he volunteers that results
> like that are abnormal. Note also that the ~2× gap between Meta-attributed and Shopify revenue
> makes any ROAS quoted from this account ambiguous as to source. INFERENCE.

**7.3 Credentials.** Ten years, 100+ businesses, prior agency work and named consumer brands,
current clients named. *CLAIMED, unverifiable, context only.* Per the standing rule this neither
validates nor discounts the mechanics above.

---

## 8 — Ethics filter

**Nothing rejected.** No fabricated testimonials, no fake reviews, no manufactured scarcity, no
fake price anchoring, no synthetic customers.

### 8.1 Calibration note for future audits — the filter did not go soft

> **Recorded at Ben's instruction 2026-07-28.** This is the **first of three video intakes this
> session where the ethics filter came back genuinely empty.** The two prior sources both produced
> hard rejections:
>
> - **Blackie (2026-07-28)** — fabricated social proof on a zero-customer store; fabricated
>   bereavement testimony carrying the winning creative.
> - **Karolis (2026-07-28)** — AI presenter delivering a first-person product review; a fabricated
>   personal anecdote functioning as double fabrication (fake testimonial + fake witness).
>
> An empty result here reflects the **source**, not a relaxation of the screen. The same filter,
> applied by the same process on the same day, rejected content in two of three sources. Logged so
> a future audit reading this file in isolation does not infer that screening was skipped or
> loosened.

### 8.2 One flag, adopted conditionally — routed to Scriptor

His four-part ad framework closes on an offer that is "urgent and limits risk." He never suggests
manufacturing the urgency, so this does not trip PHC's fake-urgency rule. **Ruled 2026-07-28:
adopt only with PHC's honest-reason-why constraint attached — logged as a Scriptor conditional,
not a blanket adoption.** See `scriptor/references/scriptor-video-piliero-four-part-ad.md`.

### 8.3 One watch item, no action — retention frequency

The retention campaign deliberately concentrates few ad sets to drive **high frequency** against
past purchasers. Normal e-commerce practice, and he explicitly cautions against "smashing people
too hard" and says to watch frequency.

**Ruled 2026-07-28: logged as a watch item, not an action.** Recorded because repeatedly re-hitting
existing customers sits in tension with PHC's "feel like family, not a transaction" ethos. Nothing
to do unless and until PHC runs a retention campaign; revisit then.

---

## PROPOSED SKILL CHANGES — Legatus

**RULED AND ACTIONED 2026-07-28 — Legatus v1.3.0**, per the report-to-skill drift-log rule. Status
per row below. `SKILL.md` and `references/diagnostic-taxonomy.md` were modified by this batch.

| # | Proposal | Rationale | Status |
|---|---|---|---|
| P-1 | Add **account architecture** (§1) as new doctrine: the four-campaign model, with the prospecting/retention **swim-lane separation** as the load-bearing rule and the retargeting **trigger condition** (only when engaged-audience overspend appears). | Verified gap — Legatus had zero structure doctrine. §1.1 is scale-independent and prevents blended reporting flattering acquisition. | **APPLIED v1.3.0** — `diagnostic-taxonomy.md` → "Account architecture"; swim-lane integrity rule + anti-pattern |
| P-2 | Add the **attribution-window rule** (§3.3) and, as a hard integrity check, the **bid-strategy-changes-attribution trap** (§3.4): never compare performance across a bid-strategy change without confirming the attribution window held. | Verified gap. The trap produces a confidently wrong verdict from a pure measurement artefact. | **APPLIED v1.3.0** — `diagnostic-taxonomy.md` → "Attribution window and the bid-strategy trap"; + integrity rule + anti-pattern |
| P-3 | Add **observe-don't-cut** (§5.2) as segment guidance, with value rules (§5.3–5.4) recorded as the alternative and explicitly **volume-gated** for PHC. | Verified gap; counterintuitive; §5.2 costs nothing at any budget. | **APPLIED v1.3.0** — `diagnostic-taxonomy.md` → "Segment breakdowns — observe, don't cut"; + integrity rule + anti-pattern |
| P-4 | Add the **pack naming convention and concept-grouping principle** (§2.1) — `avatar_concept_pack#`, one concept per ad set, for ad-set-level control. | Ruled adopted 2026-07-28. Works at a single pack; no budget dependency. | **APPLIED v1.3.0** — `diagnostic-taxonomy.md` → Account architecture, with the cadence rejection stated INLINE beside the naming convention |
| P-5 | Add **purchase-event-only** optimisation (§3.2) to the settings chain already in v1.2.0. | Distinct from the adopted custom-vs-standard note; scale-independent. | **WITHDRAWN 2026-07-28 — SUBSTANTIALLY COVERED.** The settings chain already states the algorithm optimises for "whatever event you choose and nothing else", that initiate-checkout drives ICs that never purchase, and to "prefer the standard purchase event." Only add-to-cart was unnamed — too thin to warrant a change. **LIGHTER TREATMENT APPLIED v1.3.0:** add-to-cart now named alongside initiate-checkout in the existing settings-chain bullet. No new section. |
| P-6 | Add **variant discipline** (§4): 2–3 genuinely distinct primary texts / 2–3 headlines, never paraphrases, framed as the in-ad analogue of the bloat guard. | Ruled to Legatus as operational testing cadence. | **APPLIED v1.3.0** — `diagnostic-taxonomy.md` → Account architecture / "Variant discipline"; + anti-pattern |
| P-7 | Record **cost-control conflicts** (§6.3) — never run caps alongside highest-volume — as a measurement-integrity rule, flagged as reference-only given the $100k spend gate. | The failure mode is available at any budget once two bid strategies run side by side. | **APPLIED v1.3.0** — `diagnostic-taxonomy.md` → "Cost controls", marked REFERENCE ONLY |
| P-8 | Record the **performance calibration** (§7) — specifically that his ROAS figures fall 4–6× with scale and that the flagship client's growth was spend, not efficiency. | Guards against a future reader importing 6.94 ROAS as an achievable benchmark. | **APPLIED v1.3.0** — `diagnostic-taxonomy.md` → "Why these stay placeholders — creator benchmarks are not evidence"; + integrity rule + anti-pattern |
| — | **No change to Faber's bloat guard. Pack sizing and stacking cadence rejected.** | **RULED 2026-07-28** — see §2.4. Source contradicts himself; the version with the safety mechanism wins. | **RULED — NO CHANGE** |
| — | **No change to Legatus's 1.2×–1.5× scaling math.** The scale campaign (§1.3) is recorded as an observed alternative path, not a proposed mechanism. | Same evidence standard as the Blackie ruling — no post-scale observation window in this source either. | **RULED — NO CHANGE** |
