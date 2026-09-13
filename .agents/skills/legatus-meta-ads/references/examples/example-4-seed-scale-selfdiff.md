# Golden example 4 — "The seed," scaling math, and week-over-week self-diff

## Input
"Hey Legatus, weekly check-in on the Aurelia throw blanket campaign. Last week's call was HOLD, CPM was
borderline." Live account context (via MCP): the account overall is still below the king goal, but one ad
set — Coastal Home audience paired with the "Cozy Morning" creative — has meaningfully better ROAS than its
siblings **in all three windows (3d/7d/14d)**; current daily budget on that ad set is $60, and it has
already been through one prior stable scale.

## A great output must assert
- **Names "the seed" explicitly**: the Coastal Home audience + "Cozy Morning" creative pairing, called out
  by name — not just "one ad set is doing better."
- **States that the seed held across all three windows.** A pairing that only leads in the 3-day window is
  a spike, and the correct call there is to wait, not to scale.
- Frames the recommendation around protecting and scaling that pairing rather than launching new,
  unrelated tests, even though the account overall isn't profitable yet.
- **Diffs against last week's verdict** ("last time: HOLD... this time: ...") using the HOLD verdict Ben
  supplied, rather than treating this as a first-ever check.
- If recommending scale, shows the actual worked math: $60 × 1.5 (high end, since it's already through one
  prior stable scale) = $90/day, not sooner than 3 days after the last change — the number is never stated
  without the formula behind it.
- Closes with a one-line verdict log entry Ben can reuse next week.

## The seed is not the same thing as a winner (must not be conflated)
v1.1.0 added winner/potential classification, which creates a live risk of collapsing two distinct concepts.
A correct output keeps them separate:

- **The seed** (category 5) — a *diagnostic instinct*. The single standout pairing in an account that isn't
  working overall. There is at most one, it's found by judgment, and the response is **protection**: don't
  edit it, don't reset its learning phase, point budget at it.
- **Winner/potential** — a *systematic sort* across every ad against fixed thresholds. There can be many of
  each, membership is computed not judged, and the response is **replication** via Faber.

The same ad set can be both, and often is. An output that reports the seed *as* "the winner," or that skips
the seed because classification already produced a winners list, has lost the distinction — the seed drives
what Legatus protects, the winners list drives what Faber builds.

## Why this is the bar
This is where several separately-accepted ideas meet: the "the seed" definition has to actually change
behavior (not just exist in a reference file nobody reads), the scaling math has to be shown worked with
real numbers, the self-diff has to use the prior verdict Ben supplied, and the multi-window rule has to gate
the scale decision. A mediocre output would recommend "scale it a bit" with no math, no named seed, no
window check, and no acknowledgment of last week's call.
