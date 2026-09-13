# Legatus reference: diagnostic taxonomy, 7-day cadence, scaling math

Referenced by `SKILL.md`'s Workflow (all four modes) and Output format sections. This file holds the
content too long to inline in the skill body.

## How the algorithm decides — volume and value

Mechanism, not practice. Everything below follows from it, so read it before the taxonomy.

Under the **highest volume or value** bid strategy, Meta optimizes for exactly two things:

- **Volume** — can this ad scale? Can it absorb spend and keep delivering?
- **Value** — can it do that efficiently, returning as much as possible per dollar?

**The single most useful consequence:** an ad that spends heavily and returns badly is not a random
failure. The algorithm has decided it is *scalable* — it cleared the volume test and failed the value
test. That is a specific, nameable state, and it explains a pattern that otherwise looks like the platform
wasting money on purpose. Name it when you see it: **"volume without value."**

A true winner clears both. This is also the mechanism behind the winner/potential classification below —
spend share is the volume test, target ROAS is the value test, which is why an ad needs both to qualify.

### The settings chain

Three settings connect, and a mismatch anywhere breaks the chain:

```
Campaign bid strategy (highest volume or value)
    └─ "value" half is defined by → Ad set performance goal
           (maximize number of conversions | maximize value of conversions)
              └─ measured against → Conversion event (purchase, in ~all cases)
```

- **Performance goal** sets what "value" means. Most PHC-shaped brands want *maximize number of
  conversions*; *maximize value of conversions* optimizes toward revenue per purchase instead.
- **Conversion event** — the algorithm optimizes for **whatever event you choose and nothing else**. Pick
  initiate-checkout and it will happily drive initiate-checkouts that never purchase; pick **add-to-cart**
  and it will drive add-to-carts that never check out. Both are upstream proxies, and optimizing to either
  buys the proxy instead of the sale. *(add-to-cart named v1.3.0 — two independent sources state the same
  mechanism.)*
- **Prefer the standard purchase event.** Standard events carry Meta's cross-advertiser training data;
  a **custom conversion event has to learn from scratch**, which costs time and spend before it optimizes
  well. Only use a custom event when there's a specific reason, and flag the learning cost when it appears.

Category 3 (objective mismatch) below operates at the objective level. This chain is a layer deeper — an
account can have the right objective and still be misconfigured underneath it. Check both.

### Attribution window — and the bid-strategy trap

*Added v1.3.0 (P-2), source: Piliero M4 — `legatus-video-piliero-m4-account-structure.md` §3.3–3.4.*

**Default to the maximum attribution window:** 7-day click, 1-day engagement, 1-day view. The wider the
window, the more conversion signal the campaign is fed. Narrower views remain available in reporting
afterwards, so nothing is lost by opening it.

> **⚠ THE TRAP — changing bid strategy silently changes attribution.**
> Switching a campaign to a ROAS goal drops the ad-set attribution setting from 7-day click / 1-day view /
> 1-day engaged down to **7-day click only**. Nothing announces this.
>
> **Consequence:** measured performance falls purely because the window narrowed, with no change in
> underlying reality. A before-and-after comparison across a bid-strategy change is therefore **invalid by
> default** — and the natural reading of the drop is "the new bid strategy is failing," which produces a
> revert that was never warranted.
>
> **Rule: never compare performance across a bid-strategy change without first confirming the attribution
> window held.** If it changed, say so and treat the two periods as unmeasurable against each other rather
> than reporting a delta.

## The five-category diagnostic taxonomy

Every real finding in a diagnostic audit maps to exactly one of these. Name the category explicitly in the
output — don't just describe symptoms without labeling which category they belong to.

1. **Learning-phase resets** — an ad set keeps re-entering Meta's learning phase because it's being edited
   too often (budget, creative, or audience changes each reset the count). Signal: delivery status shows
   "learning limited" or "learning," combined with a high edit count in a short window. Fix direction: stop
   editing for a fixed window (typically 3-7 days), or duplicate into a new ad set instead of editing the
   live one.

   **"Learning limited" on its own is not a defect.** It does not mean the ad set can't perform, can't
   spend, or is broken — it means delivery is less *steady* than an active-stage ad set. Historically it's
   a signal to the advertiser **not to pause**. The diagnosable problem is the churn pattern (repeated
   edits/relaunches resetting the count before stability is ever reached), not the status label. Do not
   flag a learning-limited ad set as a category-1 finding without the accompanying edit history — the fix
   for a merely-learning ad set is patience, and calling it a problem invites exactly the pausing cycle
   that causes the real one.
2. **CPM health** — cost per thousand impressions is elevated relative to what the account/category should
   see. Signal: CPM trending up without a corresponding audience-quality or seasonal explanation. Distinguish
   from a market-wide seasonal spike (BFCM, Q4 holiday) before treating it as an account-specific problem —
   check whether the timing lines up with a known high-demand period first.
3. **Objective mismatch** — the campaign objective doesn't match what's actually being optimized for (e.g.
   optimizing for traffic when the real goal is purchases). Signal: strong top-of-funnel metrics (clicks,
   reach) with weak bottom-of-funnel results (purchases, ROAS) relative to spend.
4. **Checkout/trust vs. ad problem** — conversion is down but the ad-side signals (CTR, CPM, ATC rate) look
   normal or healthy. This is the traffic-vs-conversion check from `SKILL.md`'s Workflow step 1.2 — when it
   fires, this is Centurion's territory jointly, not a pure ads diagnosis. **Decide this with the ATC floor
   below, citing the real rate** — ATC above the floor with weak purchases means downstream; ATC below it
   means the creative isn't landing and it's ad-side.
5. **"The seed"** — the one thing already working in an otherwise messy or unprofitable account: a specific
   audience + creative pairing that's producing a real signal, flagged explicitly and named before touching
   anything else. Source (Ben's Meta Ads transcript, verbatim): *"He opened up with the bottom line telling
   me that the account wasn't profitable yet but the trend was going in the right direction and he said that
   there was one specific ad set that was working which was the [audience] paired with [the winning
   creative]. So he flagged that as a seed and the signal was worth building around from there."* This is a
   **diagnostic instinct, not a rigorous test**: in any audit, look for the single ad set/combination that's
   outperforming the rest even if the account overall isn't profitable yet, name it explicitly as "the seed"
   in the output, and frame every subsequent recommendation around protecting and scaling that thing rather
   than chasing new, unrelated tests. If no such signal exists yet (everything is genuinely undifferentiated
   or underperforming), say so plainly — don't manufacture a seed where the data doesn't support one.

## Recognizing "the seed" — worked pattern

- Look across ad sets/ads in the account for one that stands out on a real metric (ROAS, CTR, or cost per
  purchase) relative to its siblings, even in an account that's net-unprofitable overall.
- Once found, name the exact audience + creative pairing driving it (not just "ad set #4").
- The recommendation for the seed is protection-first: don't edit it (avoid a learning-phase reset — see
  category 1), and prioritize scaling budget toward it over launching new, unrelated tests.
- If a diagnostic finds no standout — every ad set is roughly equally (under)performing — say there's no
  seed yet rather than forcing the label onto the least-bad option.

## KPI thresholds (generic placeholders — not yet confirmed for PHC)

These are starting figures from general media-buying practice, not PHC-specific targets. Always label them
as placeholders in any output until Ben's own account has enough real spend history to replace them:

- Minimum daily spend to evaluate a test meaningfully: **$50/day**
- CPM ceiling before flagging as a health concern: **under $45**
- ROAS floor before flagging as underperforming: **above 0.8** (early-stage test threshold, not a
  steady-state profitability target — see the timing note below)
- Add-to-cart rate floor before treating the ad side as the problem: **above 3%**

The ATC floor is the number that decides **category 4**. Below it, the creative isn't landing and the
problem is ad-side. Above it with weak purchases, the problem is downstream — that's the joint Centurion
alert. Without this threshold, category 4 rests on a vibe; don't diagnose category 4 without citing the
actual ATC rate against it.

### Timing note — when the early-stage floor is read

*Added v1.3.0, source: Hampton §2.*

Legatus reads the early-stage ROAS floor at **Day 3, gated on cumulative spend** ("first real read — spend
≥ minimum threshold? If not, hold and wait, don't judge yet" — 7-day cadence below). An outside source
gates the same 0.8 figure at a fixed **48 hours** instead.

**Legatus's construction stays.** Elapsed time is the weaker gate: 48 hours at $20/day and 48 hours at
$200/day are not the same evidence, and a fixed clock will judge an underspent campaign that has not yet
earned a read. **Spend-gating is the more conservative and more correct trigger** at PHC's volume, where
underspend is the normal case rather than the exception.

Recorded because the distinction is real and someone comparing PHC's cadence against outside advice will
notice Legatus reads later. That is deliberate — say so rather than treating it as a lag to close.

### Why these stay placeholders — creator benchmarks are not evidence

*Added v1.3.0 (P-8), sources: Piliero M4 §7, Hampton §4 — see those reference files.*

A creator's quoted ROAS never becomes a PHC target, and one specific failure mode makes this concrete:
**published account figures fall sharply as spend rises.** A worked example from a real source, re-derived
from that source's own stated numbers:

| Account | 30-day spend | Revenue | ROAS |
|---|---|---|---|
| A | $7,900 | ~$54,800 | 6.94 |
| B | $27,000 | ~$256,500 | 9.50 |
| C | $1,800,000 | $2,900,000 | **1.61** |

All three were presented side by side as uniform proof one system "works for all sizes." Efficiency
actually falls **4–6×** across them. In the same source, a flagship client moved 1.61 → 1.70 ROAS while
spend rose ~55× — **a spend story, not an efficiency story.**

**Two rules follow.** Never import a headline ROAS figure from a small demo account as an achievable
benchmark. And when a source shows several accounts, check whether efficiency is *stable* across them
before treating any single figure as representative.

Separately: **corroboration between creator sources is weaker than it looks.** Two operators in the same
niche quoting the same threshold may share an upstream source rather than have independently derived it —
one belief counted twice. Agreement between creators does not promote a placeholder to a confirmed number.
Only PHC's own account history does that.

## The king goal (account-level context, supplied by Ben — never assumed)

Every threshold above is a *guardrail*. The **king goal** is the single account-level target the whole
account is judged against, and it usually differs by period. Ask Ben for it; never invent it.

```
King goal — <account>:
  Non-promo ROAS target: <x>
  Promo ROAS target: <x>
  Blended target over the full month: <x>   ← the one that actually matters
```

**Why this exists:** an account can look structurally unprofitable week-to-week and be performing exactly
to plan, because the weekly view doesn't know the business runs on promo spikes or on a deliberately low
new-customer acquisition ROAS. Reporting that cites weekly ROAS without the blended monthly king goal will
confidently reach the wrong conclusion. If Ben hasn't given a king goal for the account yet, say so in the
output rather than silently falling back to the generic placeholders.

## Account architecture (campaign-level structure)

*Added v1.3.0 (P-1, P-4, P-6, H-4), sources: Piliero M4 §1–§4, Hampton §3 — see those reference files.*

### The four-campaign model

Two core campaigns, two optional:

1. **Prospecting (CBO) — core.** New-customer acquisition only; purchasers excluded.
2. **Retention — core.** Past purchasers only. Winners, evergreen, sales, promos, upsells. Deliberately few
   ad sets so frequency stays meaningful against known buyers. Budget starts low and works up while
   watching frequency.
3. **Retargeting — optional.** Most retargeting already happens *inside* prospecting. Build a separate
   campaign **only when audience-segment reporting shows overspend on engaged audiences** — then pull it
   out of prospecting. That trigger condition is the useful part, not the campaign itself.
4. **Scale — optional.** A single broad ad set holding a handful of the account's very best ads, whose only
   function is to force additional spend against proven winners.

### The load-bearing rule — swim-lane separation

> **Prospecting and retention money must stay separately measurable.**

Blended into one campaign, retention revenue **flatters prospecting efficiency**: the account reports a
healthy blended ROAS while the acquisition engine underneath may be underwater. For a single store this is
one of the easiest ways to believe acquisition works when repeat purchases are carrying it.

This is scale-independent and costs nothing to maintain. **When reporting on acquisition performance, state
which campaigns the figure covers** — a ROAS quoted across both lanes is not an acquisition number.

### Ad set naming and concept grouping

Name ad sets `avatar_concept_pack#` — one concept per ad set. The grouping is what creates **ad-set-level
spend control**; with everything in a single campaign and ad set, the only available levers are pausing an
ad or launching one.

> **⚠ The naming convention was adopted; the cadence that came with it was REJECTED.**
> The source pairs this structure with 4–8 ads per pack and a new pack every 1–3 weeks, stacking over time.
> **That cadence is structurally unavailable at PHC's spend and must not be applied.** Re-derived against
> Faber's bloat guard `(daily budget × 14) ÷ $100 − live ads`: at **$50/day PHC supports 7 live ads total —
> fewer than one pack at the top of that range**; at $100/day, under two packs.
>
> Ruled 2026-07-28: Faber's bloat guard stands unchanged. The source contradicts himself — the guard was
> derived from his own earlier "death-loop" warning, which this structure walks into without acknowledging.
> **When a source contradicts himself, the version carrying the safety mechanism wins.**
> Full record: `legatus-video-piliero-m4-account-structure.md` §2.4.

### Campaign blueprint defaults

When building a campaign (SKILL.md Workflow mode 2), these are the structural starting points — all
labeled as starting points, not confirmed PHC settings:

- **Objective:** sales, purchase conversion event (see the settings chain above).
- **Structure:** CBO, so budget migrates to the best ad set automatically rather than by hand.
- **Ad set test:** head-to-head — the proven winning audience against **broad** (no interest filters, age
  and country only). This tests the operator's hypothesis against the algorithm; cut the loser fast.
- **Creative:** the proven format as a base, plus variations differing on the **opening hook**.

### Variant discipline (the in-ad analogue of the bloat guard)

Run **2–3 primary texts and 2–3 headlines**, one description or none.

> **They must be genuinely distinct propositions, never paraphrases of one line.** Three restatements of
> the same claim consume the same delivery budget as three real tests and return no information.

This is the same failure the bloat guard prevents, one level down: **a near-duplicate text variant is bloat
inside the ad, exactly as a surplus ad is bloat inside the campaign.** Neither guard substitutes for the
other. Note also the adjacent structural rule from the same sources — **campaign proliferation resets the
learning phase** (category 1), so consolidating onto what works beats launching alongside it.

## Winner / potential classification

Runs across every ad in the account. Distinct from "the seed" (category 5): the seed is a single standout
found during a diagnostic, this is a systematic two-class sort that drives two *different* actions.

| Class | Condition | Action |
|---|---|---|
| **Winner** | spend share ≥ **5% of campaign spend** AND at/above target ROAS | **Replicate** — tight iterations of what already works |
| **Potential** | ≥5% spend but *missing* target ROAS **— or —** at/above target ROAS but <5% spend | **Tweak** — wider variation, one variable at a time |
| Neither | below both | Leave alone or cut; not flywheel input |

Winners and potentials both feed `faber-creative-flywheel`, but with opposite creative briefs: winners get
narrow iteration (protect what works), potentials get broad variation (find the unlock). Do not collapse
the two classes into one "good ads" list — the whole point is that they get treated differently.

### Scale guards (PHC-specific — these matter more here than in a large account)

The 5% threshold is borrowed from agency practice on accounts with dozens of live ads. At PHC's scale it
breaks in two ways, so both guards are mandatory:

- **Minimum ad count:** with fewer than **8 live ads in the campaign**, the 5% spend-share test is
  meaningless (everything clears it). Below that count, rank by spend and treat only the top 3 as
  classification candidates, and say explicitly that the spend-share test was skipped for lack of ads.
- **Minimum spend floor:** an ad with less than **$100 cumulative spend** is not classifiable in either
  direction, regardless of ROAS. Report it as "insufficient spend" — never as a winner on a lucky day, and
  never as a loser on an unlucky one.

## Hook rate (shared definition — Faber reads this, does not restate it)

*Added v1.3.0 (L-1), source: Blackie — `legatus-video-blackie-7day-dropship.md` §4.*

**Definition.** The share of impressions that keep watching past the opening moments of a video ad — how
well a creative's first seconds hold attention. It is a **creative-quality leading indicator, not an
outcome metric.**

**Why Legatus owns it.** Hook rate predicts which creative the algorithm will fund, so it belongs with the
other shared definitions Legatus owns (king goal, winner/potential, scale guards, promo exclusion).
`faber-creative-flywheel` **reads this definition rather than restating it** — the same arrangement Vigil
already has. One source of truth, so a threshold derived later propagates everywhere at once.

> **NO PHC THRESHOLD EXISTS. Do not invent one.**
> The observed pattern — one creative at 75% absorbing nearly all budget while one at 35% starved — is two
> data points from a single ad set on a single product. That is not a distribution. "75% good / 35% weak"
> is one operator's characterisation, not a validated band.
>
> **Hook rate enters as a metric to start reading**, with any threshold to be derived from PHC's own
> account once history allows. Report the number and the comparison between PHC's own creatives; do not
> grade it against an external figure.

**The corollary matters more than the metric right now.** In the observed case the starved creative had
produced a sale at roughly **$1 CPA on $1 of spend** — the best-looking line item in the account that
morning — and the algorithm was right to defund it. **A standout metric resting on trivial spend is noise.**
This is already enforced by the minimum spend floor in the scale guards above; hook rate simply gives a
second reason the same ad was correctly ignored.

## Multi-window evaluation (3 / 7 / 14 day)

**Never classify, diagnose, or scale off a single day.** Every winner/potential call and every anomaly is
evaluated against three rolling windows at once:

- **3-day** — recent movement, noisiest
- **7-day** — the working read
- **14-day** — the stable baseline

**Persistence across all three windows is the signal.** An ad that's a winner in all three is a genuine
winner. An ad that's a winner only in the 3-day is a spike — say so and wait. Always state which windows a
finding held in; a claim that doesn't name its window is not a finding.

## Segment breakdowns — observe, don't cut

*Added v1.3.0 (P-3), source: Piliero M4 §5 — see that reference file.*

Breakdowns worth reading: **age, gender, platform, placement** as the primary set; **day of week and time
of day** as a secondary layer.

> **⚠ Do NOT exclude an underperforming segment.** The instinct on seeing a weak age band is to cut it.
> Cutting **loses money and loses scale potential**: broad delivery is what lets the algorithm find pockets
> of performance, and a hard exclusion shrinks the eligible pool permanently in exchange for a cosmetic
> improvement in a segment report.

Two permitted responses, and only two:

1. **Observe.** Record the pattern; do not act on it in isolation.
2. **Apply a value rule** — shade the bid down 10–20% on the weak segment rather than removing it. The aim
   is to spend less there unless it returns better, not to kill it.

**If a value rule is tested, isolate it:** duplicate the best performers into a **new** ad set and apply the
rule only there, so the rule is the single changed variable. A value rule applied in place is unmeasurable.

> **Volume gate — this section is mostly not yet actionable at PHC.** Segment and day-of-week reads need
> enough conversions per cell to separate signal from noise. At PHC's volume most cells hold single-digit
> conversions, where apparent differences are noise. **The don't-cut rule applies immediately and costs
> nothing; the value-rule mechanics wait for volume PHC does not have yet.** Say which of the two is in play
> rather than presenting a segment read as actionable when the cells are too thin to support it.

## Promo-period exclusion (run before computing any baseline)

Promo days distort every baseline they're included in — they inflate the mean and blow out the standard
deviation, which both hides real anomalies and manufactures fake ones.

- **Exclusion rule:** drop any day with revenue **≥5× the trailing non-promo median** from all baseline
  math (anomaly baselines, winner/potential classification, CPM trend, ROAS averages).
- Exclude the promo day itself **and** any day Ben identifies as part of the same promo window (ramp-up and
  hangover days are also non-representative).
- **Always report what was excluded** — "baseline computed over 14 days, 3 promo days excluded (Jul 4-6)."
  A baseline whose exclusions aren't stated can't be sanity-checked.
- Promo periods still get analyzed — separately, against the promo ROAS target from the king goal. Excluded
  from the baseline is not the same as ignored.

## 7-day management cadence (checklist, not prose)

Run as a literal checklist against the account/campaign in question — this is deliberately mechanical, not
a judgment call each time:

- [ ] Day 1-3: no edits to a newly launched ad set (avoid re-triggering learning phase)
- [ ] Day 3: first real read — spend ≥ minimum threshold? If not, hold and wait, don't judge yet.
- [ ] Day 4-5: check CPM against the ceiling; exclude promo days from the baseline first, then check for a
  seasonal explanation before flagging
- [ ] Day 5-6: check objective-vs-actual-result alignment (objective mismatch category)
- [ ] Day 7: full read — run winner/potential classification across the 3/7/14-day windows, apply the
  traffic-vs-conversion check against the ATC floor, and produce the hold/scale/kill verdict measured
  against the king goal (not the generic placeholders, if a king goal has been given)
- [ ] Any day: if `ads_get_errors` or `ads_catalog_get_diagnostics` return a real live-blocking issue, that
  overrides the weekly rhythm — surface it immediately rather than waiting for day 7

## Funnel depth and the scale-attribution check

**Evidence label: FRAMEWORK, not verified Meta mechanism.** This is a widely-held conceptual model of how
spend distributes across awareness stages, not documented platform behavior. Treat it as a hypothesis that
must earn its use each time — never as an established fact that explains away a bad result.

**The model:** your first ad dollars reach the people closest to purchase (brand-aware, bottom of funnel).
As spend increases, delivery necessarily reaches further up — product-aware, then merely problem-aware
strangers who don't yet know a solution exists. Those people convert more slowly. So a ROAS decline during
a scale-up can be normal market capture rather than failure, and the correct response to the accompanying
turbulence is **patience**, not pausing.

### Why this is dangerous at PHC's scale — read before applying it

The model inverts at low spend, and adopting it naively makes Legatus worse rather than better.

At PHC's spend level, delivery is almost entirely **bottom-of-funnel**. The account likely never pushes
deep enough for meaningful funnel progression to occur. Which means a ROAS decline here is **less** likely
to be funnel depth and **more** likely to be a genuine problem.

Left unguarded, this framework hands Legatus a universal excuse — *"ROAS is down because we're reaching
earlier-stage buyers"* — that sounds sophisticated, is almost always false at PHC's volume, and would
suppress exactly the kill verdicts the account needs. **It is far more likely to cause a wrong verdict here
than a right one.** Hence the gate below.

### The scale-attribution check (all four conditions required)

Before funnel depth may be offered as an explanation for a ROAS decline, **all** of these must hold. If any
one fails, diagnose the decline normally and do not mention funnel depth:

1. **A real scale event occurred** in or just before the window — a material budget increase, not drift.
2. **Spend is above the plausibility floor.** Placeholder: **$100/day sustained**. This number is *not
   sourced* — no reliable public threshold exists for where funnel progression becomes material, and it is
   a deliberately conservative guess pending PHC's own data. Label it as such whenever it's used, and
   replace it as soon as real history allows.
3. **Corroborating evidence is present**, not just an assumption. The mechanism leaves fingerprints —
   require at least one:
   - Reach expanded materially against the prior window (delivery genuinely went further)
   - CPM rose (buying less-qualified impressions, consistent with reaching up-funnel)
   - Frequency did **not** spike. A frequency spike indicates *saturation* — the same people seeing the ad
     repeatedly — which is the opposite explanation and points to fatigue, not funnel depth.
4. **It has not already been used once for this campaign.** Funnel depth may defer a verdict **exactly
   once**. If ROAS is still down in the following window, the explanation is spent — diagnose normally and
   do not re-invoke it. An excuse that renews indefinitely is not a diagnosis.

When the check passes, say so explicitly and show which evidence carried it — "deferring the kill call one
window: budget went $60→$120 on Jul 12, reach +180%, CPM +$4, frequency flat. Funnel-depth explanation
used once; it is not available again for this campaign."

When the check fails, **do not mention funnel depth at all.** Naming it and then dismissing it still plants
the excuse.

### Budget-increment implication

Small increments (+10%) shift delivery only slightly up-funnel; large jumps move it substantially. This is
an independent reason the 1.2×-1.5× increments below are the right size — a large jump buys a lot of
slow-converting top-funnel impressions at once, which is what produces the alarming post-scale dip that
gets healthy campaigns killed.

## Break-even ROAS (compute before any scale verdict)

*Added v1.3.0 (L-2), source: Blackie — `legatus-video-blackie-7day-dropship.md` §2.*

Before a scale verdict, know the ROAS below which the product loses money:

```
break-even ROAS = price ÷ (price − landed cost − processing)
```

**The processing term is not optional.** The commonly-quoted version of this formula nets only COGS and
inbound shipping, which understates break-even. Worked, on a real example:

| | |
|---|---|
| Price | $39.98 |
| Landed cost (product + inbound shipping) | $12.54 |
| Payment processing (~2.9% + $0.30) | $1.46 |
| **Contribution margin** | **$25.98** |
| Break-even ROAS **without** processing | 1.46 |
| Break-even ROAS **with** processing | **1.54** |

**The gap is 5.6 ROAS points, and it sits exactly where scale/hold decisions are made** — the band where an
operator believes they are scaling a winner and are in fact scaling a break-even product. Refunds,
chargebacks and app/platform costs push it higher still; fold them in when known.

**Distinct from the ROAS floor** in the KPI thresholds above. That floor is an early-stage test gate.
Break-even is a profitability boundary computed from the actual product economics. Do not conflate them,
and never quote break-even ROAS without showing the inputs.

## Daily budgets overshoot — plan cash at ~1.25×

*Added v1.3.0 (L-4), source: Blackie §1.4.*

Meta routinely spends **above** the set daily budget on a given day, rebalancing across the calendar week.
**Plan cash against roughly 1.25× the set daily budget, not 1.0×.**

Treat this as a cash-planning note, not a diagnostic finding — a single day over budget is expected
behaviour, not an anomaly, and should not be reported as one. **No specific overshoot percentage is encoded
here on purpose:** the source observed ~35% on one ad set, which exceeds Meta's documented 25% daily
allowance and could not be verified. The phenomenon is real; that magnitude is not.

## Cost controls — cost caps, bid caps, tROAS

*Added v1.3.0 (P-7), source: Piliero M4 §6. **REFERENCE ONLY — above PHC's current scale.***

Cost caps, bid caps and target-ROAS goals restrict Meta to spending fully only when it can hit the result
set. The source introduces them only above roughly **$100,000 in spend** — three orders of magnitude above
PHC. **Nothing here is currently actionable; it is recorded so the trap below is known before PHC arrives.**

> **⚠ Never run cost/bid caps alongside highest-volume at the same time.**
> The capped campaign cherry-picks the cheapest, best conversions while the highest-volume campaign is left
> feeding top of funnel. **The cap looks excellent, highest-volume looks terrible, and both readings are
> artefacts of running them together** — neither reflects the merit of either bid strategy.

This is a **measurement-integrity** rule, not a spending one, which is why it is worth holding well before
the spend gate: the failure produces a confidently wrong verdict about which campaign type works, and it is
available at any budget the moment two bid strategies run side by side.

Two further notes if caps are ever used: set the cost-per-result goal to break-even cost per result (or to
target if better than break-even is required) and **do not fiddle by a few dollars** trying to squeeze the
platform; and treat caps as a **stability tool, not a fix** — they will not repair a broken account, and a
capped campaign can spend nothing on some days, which damages operations.

## Scaling math (hard numbers, sourced as noted)

When the verdict is "scale," apply this template rather than picking a number by feel:

```
new daily budget = current daily budget × increment (1.2 to 1.5)
```

- Increment range: **1.2×-1.5×** per scaling event — sourced from the same general media-buying practice as
  the KPI placeholders above, not PHC-specific data. Prefer the low end (1.2×) for a first scale, the high
  end (1.5×) only once a campaign has proven stable through at least one prior scale.
- Frequency cap: **no more than once every 3 days** — scaling faster than this re-triggers learning-phase
  resets, which undoes the improvement being chased.
- Always show the math in the output (`references/diagnostic-taxonomy.md` scaling template → `SKILL.md`
  Output format), not just the resulting number, so Ben can sanity-check it.

**Worked example:** current daily budget $60, ad set stable through one prior scale (use the high end) →
$60 × 1.5 = **$90/day**, not sooner than 3 days after the last change. Fill in the account's real numbers
the same way every time — never state a new budget without showing this line.

## Post-mortem template (on a kill verdict)

When a cadence/status check ends in "kill," produce a short retro in this shape — written so it's easy to
copy into Augur's foundational docs later, even though Augur doesn't exist as a live skill yet:

```
Post-mortem — <ad set / campaign name>
Diagnosed category: <one of the five, or "no clear category — genuinely inconclusive">
What was tried: <objective, audience, creative, budget history in one line>
Why it failed: <the specific real signal that drove the kill call>
Reusable takeaway: <one line Augur or a future campaign could act on>
```

Keep it short — this is a structured retro, not a full report. Skip this template entirely for hold/scale
verdicts; it only fires on kill.

## Week-over-week verdict log (for the self-diff behavior)

Legatus is stateless between separate sessions — it has no database, so "remembering" last week's verdict
depends on either the current conversation's history or Ben supplying it. Every cadence/status-check output
ends with a one-line, copy-pasteable log entry:

```
Verdict log — <date> — <ad set/campaign> — <HOLD|SCALE|KILL> — <one-line reason>
```

The next time a cadence check runs for the same ad set/campaign: if a prior verdict log line is available
in the current conversation, diff against it explicitly ("last time: HOLD, this time: SCALE — because X
changed"). If none is available, **ask Ben for last week's verdict** rather than assuming this is the first
check ever run — same "ask, don't invent" rule as the test-budget ceiling.
