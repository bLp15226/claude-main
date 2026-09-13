# DELTA EXTRACTION — PILIERO "M4 SYSTEM" ACCOUNT STRUCTURE (VIDEO INTAKE)

> **PROVENANCE: VIDEO SOURCE.** Speaker: Sam Piliero, The Moonlighters (agency; sells agency
> services and a paid community — context only, per the standing rule not to discount a method
> for its pitch). Title: "The Only Facebook Ads Video You Need in 2026". Published: 2026-07-26.
> Runtime: 35:55. URL: https://youtu.be/6P5M8yvXx1g · Extracted: 2026-07-28.
> Claim-type breakdown: 35 platform-mechanics / 6 persuasion / 7 performance.
> Evidence tiers: 22 demonstrated (per narration) / 8 claimed / 18 asserted.
> Transcript archived: `sources/transcript-piliero-m4-account-structure.md`.
> Extraction basis: **auto-generated captions only, no frames.** The video is largely a live
> ads-manager walkthrough, so "demonstrated per narration" here means he narrates clicking a
> setting on screen — the setting paths are credible, the *outcomes* are not visually confirmed.
> STATED/INFERENCE classification applied throughout.
> **STATUS: FILED 2026-07-28 per Aurelius ruling — THIS COPY IS SUPERSEDED.** Do not work from
> this file. The ruled destinations hold the live doctrine; see `FILED-disposition.md` in this
> folder for the full disposition table. Retained only as the pre-ruling record.

## ⚠ DEDUP: THIRD PILIERO SOURCE — THIS IS A DELTA EXTRACTION

The Step 0.5 dedup guard fired on the **speaker key**. Video ID, URL and title were all clean —
this is a genuinely new video, not a re-upload. Ben ruled on 2026-07-28 to proceed as a **delta
extraction**: diff every claim against the existing Piliero adjudication, mark anything already
settled, and re-propose none of it.

**Prior Piliero ingestions (the settled ledger):**

| Source | Reviewed | Produced |
|---|---|---|
| ~52-min Meta Ads course (`0Z6Rgo6iiUA`) | 2026-07-19 | Vigil v1.0.0, Faber v1.0.0, Legatus v1.1.0 |
| same source, redundant re-watch | 2026-07-23 | Corroboration record only; 6 proposals HELD by Ben |
| "How The Facebook Ad Algorithm Actually Works" (12:55) | 2026-07-19 | Legatus v1.2.0, Faber v1.1.0 |

**§0 below lists what is already adjudicated and is deliberately NOT re-proposed.** Everything
from §1 onward is the delta.

---

## §0 — ALREADY ADJUDICATED (present in this video, NOT re-proposed)

Recorded so a future reader can see these were recognised and consciously skipped, not missed.

| Claim in this video | Prior status |
|---|---|
| Andromeda: the ads *are* the targeting; calling out an avatar is what gets that avatar delivered | **ADOPTED** — Faber v1.1.0. Recorded there as a *targeting* error, not a messaging one |
| Concept = avatar + angle as the unit of an ad set | **ADOPTED** — Faber v1.1.0, the "concept" unit |
| Creative flywheel: launch → wait → analyze → identify winners → iterate | **ADOPTED** — Faber v1.0.0 |
| Winners = top-spending ads that hit the KPI | **ADOPTED** — Legatus v1.1.0 (≥5% campaign spend **AND** at/above target ROAS) |
| Bid strategy → performance goal → conversion event as a settings chain | **ADOPTED** — Legatus v1.2.0 |
| Highest-volume-or-value bidding and the volume/value model | **ADOPTED** — Legatus v1.2.0 |
| Competitor templates as creative inspiration ("steal like an artist") | **ADOPTED in bounded form** — Faber's structural analysis, with the *pattern-not-replica* line set by the Karolis ruling 2026-07-28. See §7.3 — his framing actually sits on the correct side of that line |
| Account bloat / the "death loop" | **DERIVED** — Faber's bloat guard was built from his own earlier unguarded warning. See §2.4, where this video's advice now **collides with the guard it produced** |

---

## §1 — Account architecture (NEW — Legatus currently has no structure doctrine at all)

Verified 2026-07-28: `legatus-meta-ads/SKILL.md` and `references/diagnostic-taxonomy.md` contain
**zero** coverage of campaign architecture — no prospecting, retention, retargeting or scale
campaign concepts. This is a genuine gap, not a re-tread.

**Two core campaigns, two optional.** *STATED · PLATFORM MECHANICS · ASSERTED (the architecture) +
DEMONSTRATED PER NARRATION (the build).*

1. **Prospecting CBO — the core.** New-customer acquisition only. Purchasers excluded. Contains
   the "packs" (§2).
2. **Retention — the other core.** All past purchasers. Winning ads, evergreen, sales, promos,
   upsells/downsells; deliberately few ad sets so frequency stays high and buyers see the brand
   repeatedly. Built by duplicating prospecting, removing the purchaser exclusion, and pointing
   one or two ad sets at `purchase_180days` and `purchase_alltime` custom audiences.
3. **Retargeting — optional.** His reasoning is the useful part: retargeting mostly already
   happens *inside* prospecting, so a separate campaign is only warranted when audience-segment
   reporting shows you **overspending on engaged audiences** — then you pull it out. Contents:
   FB/IG engagers, 30–60 day site visitors, 90-day+ ATC/initiate-checkout. Creative leans on
   objections, sales and offers.
4. **Scale — optional, top of account.** A single broad ad set holding roughly five of the very
   best ads in the account. Its only function is to force more spend against proven winners.

**1.1 The load-bearing idea: separate swim lanes.** The stated reason for splitting prospecting
from retention is knowing that new-customer money is genuinely distinct from repeat-buyer money.
Blended into one campaign, retention revenue flatters prospecting efficiency and the account
looks healthier than the acquisition engine actually is.

> **PHC synthesis — this is the most important structural idea in the video, and it is
> scale-independent.** PHC currently has no such separation doctrine. Blended reporting is one of
> the easiest ways for a single-store account to believe acquisition works when repeat purchases
> are carrying it. INFERENCE.

**1.2 Retention as the profit centre.** He asserts most e-commerce businesses do not make money on
the first purchase and that retention is where the margin actually lives.
*STATED · PLATFORM MECHANICS · ASSERTED, no data shown.* Plausible and widely held, but this
source offers nothing to support it — and PHC's own repeat-purchase rate is unknown, so it cannot
be assumed. **Hypothesis, not doctrine.**

---

## §2 — The pack system (NEW — and it collides with Faber's bloat guard)

**2.1 The mechanic.** Ad sets are "packs," named `avatar_concept_pack#`. Each pack holds **4–8
ads** built around one concept. New packs launch on a **regular drumbeat — every one to three
weeks**, and stack up over time. *STATED · PLATFORM MECHANICS · ASSERTED.*

**2.2 Why he says it works — two distinct claims.**
- **Budget migration.** No single pack does anything special; the effect comes from *continual
  addition*, which forces CBO to reallocate budget toward the best-performing ad sets over time.
- **Control.** Grouping by concept gives ad-set-level spend control. Run everything in one
  campaign and one ad set and the only levers are pause an ad or launch an ad.

The second is the stronger argument and does not depend on account size.

**2.3 Ad set spending limits — the 20% testing cap.** *STATED · PLATFORM MECHANICS · ASSERTED.*
- Set each new pack's **average daily minimum = target CPA** (dollar value).
- **Hard rule: if target CPA exceeds 20% of total budget, switch to percentage and cap at 20%.**
  Stated flatly: never test with more than 20% of total budget.
- **Run the minimum for 7 days only**, then return and unselect it. His claim: removing it does
  **not** reset learning — it simply stops forcing spend. A winner keeps spending because it is
  already above the floor; a loser dies instead of continuing to draw budget.

The design intent: spend as much as possible on proven ads and as little as possible on testing.

> **PHC applicability — the 20% rule has a hard budget floor built into it.** For the dollar-value
> version to work as designed, total daily budget must be **at least 5× target CPA**:
>
> | Target CPA | Minimum daily budget for the rule to function | Otherwise minimum caps at |
> |---|---|---|
> | $15 | $75/day | $15 |
> | $25 | $125/day | $25 |
> | $40 | $200/day | $40 |
>
> Below that, every new pack is capped at 20% of budget and may not receive enough daily spend to
> produce a readable result. PHC synthesis, INFERENCE — arithmetic, not his claim.

**2.4 ⚠ DIRECT CONFLICT — the pack drumbeat versus Faber's bloat guard.**

Faber's guard: `(daily budget × 14) ÷ $100 classification floor − live ads = new variations
allowed`. Re-derived against Piliero's stated pack sizes:

| PHC daily budget | Max live ads supportable | = packs of 4 | = packs of 8 |
|---|---|---|---|
| $50 | 7.0 | 1.8 | **0.9** |
| $100 | 14.0 | 3.5 | 1.8 |
| $150 | 21.0 | 5.2 | 2.6 |
| $200 | 28.0 | 7.0 | 3.5 |

**At $50/day, PHC's entire account supports fewer live ads than a single pack at the top of his
4–8 range.** At $100/day it supports under two. The "new pack every one to three weeks, stacking
over time" cadence is **structurally unavailable at PHC's budget** — following it would breach the
bloat guard within two or three cycles.

> **Which source has the stronger basis? Existing doctrine, decisively — and this is
> Piliero-versus-Piliero, not Piliero-versus-PHC.** Faber's bloat guard was *derived from this
> same speaker's own "death loop" warning* in the earlier course, which shipped no mechanism to
> prevent the problem it named. His structural advice here (stack packs relentlessly) runs
> directly into his own warning, and PHC already resolved that tension in favour of the guard.
> Nothing in this video argues for loosening it; the video does not mention account bloat at all.
>
> **The transferable half survives.** The *naming convention* (`avatar_concept_pack#`), the
> *grouping-by-concept* principle, and the *ad-set-level control* argument all work at one pack.
> It is only the cadence and the stacking that are scale-gated. PHC synthesis, INFERENCE.

---

## §3 — Campaign and ad set settings (NEW, mostly scale-independent)

*All STATED · PLATFORM MECHANICS · DEMONSTRATED PER NARRATION unless noted.*

**3.1 Starting budget** — minimum 1× target CPA. He explicitly declines to set it for the viewer,
noting it must be what you can afford to lose. *ASSERTED.*

**3.2 Conversion event — always purchase, essentially never ATC or initiate-checkout.** His
mechanism: optimise for add-to-cart and you get many add-to-carts and few purchases; optimise for
initiate-checkout and you get people dropping at the last step. Meta delivers what you ask for.
*ASSERTED.*

> Distinct from the already-adopted Legatus v1.2.0 note, which covered **custom versus standard**
> events. This covers **which standard event**. New, scale-independent, and directly checkable
> against PHC's live account.

**3.3 Attribution — use the maximum window.** Enable 7-day click, 1-day engagement, 1-day view.
Rationale: feed the campaign the most signal; narrower views remain available in reporting.

**3.4 ⚠ Changing bid strategy silently changes attribution.** Switching a campaign to a ROAS goal
drops the ad-set attribution setting from 7-day click / 1-day view / 1-day engaged to **7-day
click only**. He flags this explicitly as a trap.

> **PHC synthesis — this is the highest-value gotcha in the video and it applies at any budget.**
> A silent attribution change makes before-and-after comparisons across a bid-strategy switch
> invalid: measured performance drops purely from the narrower window, with no change in reality.
> An operator would very plausibly read that as the new bid strategy failing and revert. Legatus
> currently has **no attribution-window doctrine at all** (verified 2026-07-28 — its only
> attribution content is the unrelated scale-attribution check). INFERENCE.

**3.5 Audience and placements — fully broad.** Advantage+ audience may stay on. **He states he has
tested both and has no statistical significance either way.** Placements fully broad, everything
enabled.

> Credit where due: an unusually honest admission in a genre that rarely makes them, and it should
> be preserved if this is adopted — the *setting* is a recommendation, the *comparison* is
> explicitly unproven.

**3.6 Ad-level settings.** Unselect multi-advertiser ads. Personalised destinations he now mostly
turns off, though he allows it either way for accounts with many product pages. Browser add-ons
mostly off. *ASSERTED — presented as preference, not mechanism.*

**3.7 Retention audience hygiene.** When building the retention custom audiences, **unselect "use
as a suggestion"** so the audience definition stays narrow. Stated as important and easy to miss.

---

## §4 — Creative asset spec change (NEW — actionable now, at any scale)

**4.1 The single-asset requirement.** Per this source, Meta recently changed asset handling: you
can no longer upload separate creatives per placement size. Instead upload **one 16×9 asset,
vertical, with a 4×5 safe zone**, and Meta renders it across formats. He calls this a significant
change nobody is discussing. *STATED · PLATFORM MECHANICS · DEMONSTRATED PER NARRATION.*

> **PHC synthesis — verify before adopting, then treat as a production constraint.** If accurate
> this changes how every PHC video and image ad must be framed at the point of creation, not in
> post: the composition has to survive cropping to 4×5 while being delivered as 16×9. That is a
> **briefing-time constraint** — a brief that ignores it produces assets that crop badly in feed.
> Flagged as unverified against Meta's own documentation; this is one practitioner's account of a
> recent change, and the video is two days old. INFERENCE.

**4.2 Catalog interaction.** Meta can now show an individual uploaded ad alongside catalog
products, so product media fields (headline, primary text, description) should be filled even for
manually uploaded ads. Carousel and collection display can be toggled off if that presentation is
unwanted.

**4.3 Advantage+ creative enhancements — a clean heuristic.** His rule:
**if it alters the media, off; if it only enhances around the media, on.**

- **Off:** cropping, colour change, video conversion, animation, visual touch-ups, product
  touch-ups, generated backgrounds, music, brightness adjustment.
- **On:** overlays and dynamic overlays, dynamic description, text improvements, enhanced CTA,
  show summaries, relevant comments, reveal-details-over-time, spotlights.

He notes these options change constantly and the rule matters more than the list.
*STATED · PLATFORM MECHANICS · ASSERTED.*

> **PHC synthesis.** The heuristic transfers even when the specific toggles do not, which is what
> makes it worth keeping — a list of 2026 checkbox names will rot within months. It also has an
> independent PHC rationale the video does not give: letting Meta alter the media silently
> undermines any creative test, because the asset being served stops being the asset that was
> briefed. INFERENCE.

**4.4 Text volume.** Two to three primary texts, two to three headlines, one description (or
none). They must be **genuinely different**, not numbered variants of one line. Enable optimised
text per person. CTA: shop now for e-commerce, sometimes learn more.
*STATED · PERSUASION PRINCIPLE · ASSERTED.*

---

## §5 — Deep dives: observe, do not cut (NEW — and counterintuitive)

**5.1 The breakdowns.** Primary: age, gender, platform, placement. Secondary: day of week, time of
day. *DEMONSTRATED PER NARRATION.*

**5.2 The rule that matters — do NOT cut underperforming segments.** His explicit warning: the
instinct on seeing an underperforming age band is to exclude it, and doing so **loses money and
loses scale potential**. Permitted responses are only (a) observe and (b) apply value rules.
*STATED · PLATFORM MECHANICS · ASSERTED.*

> **PHC synthesis — genuinely counterintuitive and worth capturing.** Legatus has no
> segment-exclusion doctrine today (verified — its exclusion rules concern promo days in
> baselines, an unrelated matter). The underlying logic: broad delivery is what lets the algorithm
> find pockets of performance, and hard exclusions shrink the pool permanently in exchange for a
> cosmetic improvement in a segment report. Unproven here — asserted with no data — but it points
> the opposite way from the obvious move, which is exactly the kind of claim worth recording.
> INFERENCE.

**5.3 Value rules — the alternative to cutting.** A 2026 Meta feature. Advertiser settings → value
rules → create rule set → e.g. decrease bid 10–20% for an underperforming age band. Applied at ad
set level. His framing: the aim is not to kill the segment but to "chill it out" — spend less
there unless it returns better. *DEMONSTRATED PER NARRATION.*

**5.4 Test value rules in an isolated ad set.** Take the account's best performers, duplicate into
a **new** ad set, and apply the value rule only there — so the rule is the single changed variable.
*STATED · PLATFORM MECHANICS · ASSERTED.* Methodologically sound; a rule applied in place is
unmeasurable.

**5.5 Day-of-week spend concentration.** Concentrate budget on the days that historically return
best and pull back on weak days, shown via a per-day spend/purchase report.

> **PHC applicability — this whole section is volume-gated.** Segment and day-of-week reads
> require enough conversions per cell to distinguish signal from noise. At PHC's volume most cells
> will hold single-digit conversions, where apparent differences are noise. **§5.2's "don't cut"
> rule transfers immediately and costs nothing; §5.3–5.5 need volume PHC does not have yet.**
> INFERENCE.

---

## §6 — Cost controls (NEW — but explicitly gated far above PHC's scale)

**6.1 What they are.** Cost caps, bid caps and target-ROAS goals all restrict Meta to spending
fully only when hitting the result you set. He notes Meta overruns these targets regularly.

**6.2 The spend gate.** He recommends introducing cost controls only above roughly **$100,000**
in spend. *ASSERTED.* **Three orders of magnitude above PHC.** Recorded for completeness, not
adoption.

**6.3 ⚠ Never run cost/bid caps and highest-volume simultaneously.** His mechanism, and it is a
subtle one: the capped campaign cherry-picks the cheapest, best conversions while the
highest-volume campaign is left feeding the top of funnel. The cap looks excellent, highest-volume
looks terrible, and **both readings are artefacts of running them together.**
*STATED · PLATFORM MECHANICS · ASSERTED.*

> Worth keeping even though PHC is far below the spend gate, because the failure mode is a
> *measurement* trap, not a spending one — it produces a confidently wrong verdict about which
> campaign type works. INFERENCE.

**6.4 Setting the cap.** Set cost-per-result goal equal to break-even cost per result, or to
target if better than break-even is required. Do not fiddle by a few dollars trying to squeeze
Meta.

**6.5 His own caveat.** Cost controls are a **stability tool, not a fix** — they will not repair a
broken account, and capped campaigns can spend nothing on some days, which he notes damages
operations.

---

## §7 — Creative doctrine (mostly adjudicated; one new item)

**7.1 ALREADY ADOPTED** — the Andromeda targeting-through-creative model and the avatar/concept
unit. See §0. Not re-proposed.

**7.2 NEW — "good ads do four things."** A named four-part structure:
1. **Call out an avatar** so the viewer registers "this is talking to me."
2. **Educate that avatar on the problem** — make them register it as a real problem.
3. **Position the product's mechanism as the *unique* solution** to that problem.
4. **Deliver an offer** with a value exchange that is urgent and limits risk.

*STATED · PERSUASION PRINCIPLE · ASSERTED.*

> **PHC synthesis.** Steps 1–3 are orthodox and align with the Scriptor stack's existing
> problem-mechanism-solution material. Step 4's "urgent" is the one to watch: nothing in the video
> suggests fabricating urgency, but PHC's standing rule requires an **honest reason-why** behind
> any deadline or scarcity. Adopted only with that constraint attached. See §8.

**7.3 Flywheel refinements (the adopted flywheel, with new detail).** Analysis window stated as
**7–14 days** after launch, using **incremental attribution**, before judging. Competitor
templates: if a competitor runs a template repeatedly, that repetition is itself the evidence it
works — use it as inspiration.

> **Note the alignment with the Karolis ruling.** On 2026-07-28 the line was set at
> **pattern, not replica**. Piliero's framing — templates and concepts a competitor runs
> *repeatedly*, used as *inspiration* — sits on the correct side of that line, unlike the Karolis
> source's beat-for-beat remake of one identified video, which was held. Independent corroboration
> that the line was drawn in a sensible place. PHC synthesis.

---

## §8 — Ethics filter

**Nothing rejected.** Unusually clean relative to the two prior intakes this week: no fabricated
testimonials, no fake reviews, no manufactured scarcity, no fake price anchoring, no synthetic
customers.

**One item flagged, not rejected — "urgent" in §7.2 step 4.** The four-part ad structure calls for
an offer that is urgent and limits risk. He never suggests manufacturing the urgency, so this does
not trip PHC's fake-urgency rule. But adopting the structure verbatim without PHC's honest
reason-why requirement would leave a gap where a fabricated deadline could enter. **Attach the
constraint if the structure is adopted.**

**One item flagged for brand fit, not ethics — retention frequency.** The retention campaign
deliberately concentrates few ad sets to drive high frequency against past purchasers. Normal
practice, and he explicitly cautions against "smashing people too hard" and says to watch
frequency. Noted only because repeatedly re-hitting existing customers sits in tension with
"feel like family, not a transaction." Ben's call, not a filter violation.

---

## §9 — Performance claims (all provisional; PHC data governs)

**9.1 The three proof accounts, re-derived.**

| Account | Spend (30d) | Revenue | ROAS |
|---|---|---|---|
| A | $7,900 | ~$54,800 | 6.94 |
| B | $27,000 | ~$256,500 | 9.50 |
| C | $1,800,000 | $2,900,000 | **1.61** |

*CLAIMED / DEMONSTRATED PER NARRATION (dashboards described, not visually confirmed).*

> **PHC synthesis — the framing does not survive re-derivation.** All three are presented as
> uniform proof that "this system works for all shapes and sizes." But **efficiency falls by
> roughly 4–6× as scale rises**: 6.94 and 9.50 at small and mid scale, 1.61 at $1.8M. The
> seven-day figure for account C (~$1M → $1.5M) is 1.50, lower still.
>
> This is not evidence the system fails — ROAS declining with scale is expected and unremarkable.
> **It is evidence that the headline small-account ROAS figures should not be read as what the
> system delivers.** The video invites exactly that reading by presenting the three side by side
> without noting the pattern. INFERENCE — arithmetic from his own stated figures.

**9.2 The flagship client, re-derived.** First month with the agency: $18,000 spend → $29,000
revenue = **1.61 ROAS**. Current month, first eight days: ~$1M spend → ~$1.7M Meta-attributed
revenue = **1.70 ROAS** (he separately cites ~$3.5M "actual Shopify revenue," a different and
larger figure).

> **The growth story is a spend story, not an efficiency story.** Spend rose roughly 55× while
> ROAS moved 1.61 → 1.70 — essentially flat. His stated claim ("every single month we've increased
> their total revenue") is true and is about revenue, but the natural inference — that the system
> made the account *more efficient* — is not supported by his own numbers. To his credit he adds
> that results like that are abnormal. Also note the Meta-attributed vs. Shopify figures differ by
> roughly 2×, so any ROAS quoted from this account is ambiguous as to source. INFERENCE.

**9.3 Credentials.** Ten years, 100+ businesses, prior work at a large agency and named consumer
brands, current agency clients named. *CLAIMED, unverifiable, context only.* Per the standing rule
this neither validates nor discounts the mechanics.

**9.4 His own evidence claim.** He states everything shared publicly comes from real data and that
he is not guessing. Set against §3.5, where he explicitly says a tested comparison produced no
statistical significance — the admission is a point in favour of the claim, not against it.

---

## Candidate routes (NOT rulings — for Aurelius)

Roster verified against disk 2026-07-28, unchanged from the two prior intakes this session; on-disk
roster agrees with CLAUDE.md; no discrepancy to surface.

| Chunk | Candidate | Confidence |
|---|---|---|
| §1 account architecture, swim-lane separation, retargeting trigger | **Legatus** | Confident — verified as a genuine gap; Legatus has no structure doctrine at all |
| §2 pack system + 20% testing cap + the bloat-guard collision | **Legatus** *and* **Faber** | **Ambiguous ownership of the resolution.** The structure is Legatus's; the guard it collides with is Faber's. Could be a Legatus entry that defers to Faber's guard, or a Faber note that constrains a Legatus structure |
| §3 settings, conversion event, attribution window, §3.4 bid-strategy trap | **Legatus** | Confident |
| §5 breakdowns, observe-don't-cut, value rules | **Legatus** | Confident |
| §6 cost controls | **Legatus** | Confident on owner; note it is gated ~3 orders of magnitude above PHC — may warrant recording as reference-only |
| §4.1 16×9 / 4×5 safe-zone asset spec | **Faber** *or* **Legatus** | **Ambiguous** — a production constraint on how assets are made (Faber) but also an ads-manager upload mechanic (Legatus). Leans Faber on the Blackie/Karolis precedent that production templates go there |
| §4.3 Advantage+ enhancement heuristic | **Faber** *or* **Legatus** | **Ambiguous** — same split; it is a setting in the ads manager that governs what happens to creative |
| §4.4 text volume and variant discipline | **Scriptor** *or* **Faber** | **Ambiguous** — recurring split. Note the precedent: you have twice ruled structural/production templates to Faber while leaving copy principles with Scriptor. This one is closer to copy than the prior two |
| §7.2 "good ads do four things" | **Scriptor** *or* **Faber** | **Ambiguous** — same recurring split; steps 1–3 overlap existing Scriptor doctrine, step 4 needs the honest-reason-why constraint |
| §9 performance claims + both re-derivations | **Legatus** | Confident, as calibration context |

## Proposals

**None yet — deliberately.** Per the Aurelius routing gate, proposals are produced at step 10 after
Ben returns a routing ruling. Nothing here has been applied to any SKILL.md.

**Advance notice of the likely shape:** this is the largest genuine delta of the three sources this
session, because it covers account structure — an area Legatus was verified to have no doctrine on
at all. The main tension to rule on is §2.4, where the source's headline system exceeds PHC's
budget capacity by construction.
