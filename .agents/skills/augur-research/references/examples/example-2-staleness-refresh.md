# Golden example 2 — Staleness check with new real signal available

## Input
"Hey Augur, is the research for [product] still good? It's been 3 months and we've run some ads since."

Context: an existing foundational doc exists, built 3 months ago, entirely hypothesis-stage (no real signal
at the time). Legatus has since run ads with real performance data for this product.

## A great output must assert
- Checks the existing doc first (per Workflow step 1) rather than rebuilding blind.
- Notes the doc's age and that it was entirely hypothesis-stage at build time.
- Identifies that real signal now exists (Legatus's ad performance) where it didn't before.
- Recommends refreshing the **specific sections** the new signal actually affects (e.g. audience profile
  and motivations/objections, if that's what the ad data speaks to) rather than declaring the whole doc
  stale or fully fine as a blanket call.
- Names concretely what changed, not just "you should probably update this."

## Why this is the bar
This tests whether staleness-checking is a real, specific process (which sections, what changed, why) or
just a vague "it's been a while, maybe refresh it" — the latter wouldn't earn its keep as a skill behavior.
