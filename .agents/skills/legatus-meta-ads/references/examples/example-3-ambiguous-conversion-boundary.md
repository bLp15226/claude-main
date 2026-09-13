# Golden example 3 — Ambiguous conversion drop (Centurion boundary)

## Input
"Hey Legatus, why isn't this converting?"

Live account context (via MCP): for the campaign in question, CTR and CPM are in line with the account's
own recent baseline, and **ATC rate is 5.1%** — comfortably above the 3% floor. Purchases are well down
against the king goal.

## A great output must assert
- Runs the traffic-vs-conversion check **first**, before proposing any ads-side fix.
- **Cites the actual ATC rate (5.1%) against the 3% floor**, by number. This is the specific test that
  decides category 4 — "the ad-side signals look healthy" is not a diagnosis, it's an impression. An output
  that reaches the right conclusion without citing the rate against the floor does **not** meet the bar.
- Reports plainly that the ad-side signals look healthy — doesn't force a category-1-3 diagnosis onto data
  that doesn't support one.
- Flags that this pattern (ATC above floor, purchases down) is a **checkout/trust issue**, not an ads issue.
- Explicitly triggers/recommends the **joint Centurion alert** rather than either (a) guessing at a
  storefront fix itself, or (b) refusing to answer at all.
- Does not silently stay in its own lane and give an unhelpful non-answer — the boundary is "hand off
  correctly," not "decline to engage."

## The inverted case (must also hold)
Same request, but **ATC rate is 1.4%** — below the floor. The correct output is the opposite: this is
ad-side, the creative isn't landing, and it does **not** trigger the Centurion alert. Testing only the
above-floor direction would let a skill pass that routes every conversion complaint to Centurion regardless
of the data.

## Why this is the bar
This is the scenario that tests Legatus's exclusion boundary under pressure: the natural failure mode is
either overreaching into Centurion's territory (guessing at a checkout fix with no site-health data) or
underreaching (refusing to engage because "that's not my lane"). The correct behavior is the diagnostic
step that tells the two apart, then the joint-alert handoff — matching the "drain and pipe" protocol locked
in both Legatus's and Centurion's briefs.

v1.1.0 makes the deciding step *measurable*. In v1.0.x this boundary rested on a qualitative read of
whether ATC "looked normal," which meant the routing decision between two hats could swing on a vibe. The
floor makes it a number, and the inverted case makes sure the number is actually being consulted rather
than the conclusion being pattern-matched.
