# Golden example 5 — Kill verdict with post-mortem

## Input
"Hey Legatus, should I kill the Winter Candle campaign?" Live account context (via MCP): objective was set
to Traffic, not Purchases; strong CTR and reach for 10 days but zero purchases; CPM in line with the
category norm (not a CPM problem); no learning-phase churn (few edits). No promo days fall inside the
window. Classification finds no winners and no potentials — no ad cleared both conditions in any window.

## A great output must assert
- Diagnoses the correct category: **objective mismatch** (strong top-of-funnel, weak bottom-of-funnel
  relative to spend) — not CPM health or learning-phase resets, which the data doesn't support.
- Reaches a kill verdict (or a clear "kill and rebuild with the right objective" framing) grounded in that
  diagnosis.
- **Reports the empty classification honestly** — "no winners, no potentials" — rather than promoting the
  least-bad ad into the potentials list to have something to hand Faber. An account with nothing working
  should produce empty lists, and empty lists are a finding.
- **States that no promo days were excluded** because none fall in the window. The exclusion line appears
  in every audit, including when the answer is "none" — a missing line and a "none" line are different, and
  only one of them is verifiable.
- Produces the **post-mortem template**: diagnosed category (objective mismatch), what was tried (Traffic
  objective, 10 days, the audience/creative used), why it failed (optimized for clicks, not purchases, so
  spend never had a chance to convert), and one reusable takeaway (e.g. "set objective to Purchases before
  spend, not after — check this in the campaign-build phase going forward").
- Writes the takeaway in a form Augur can consume.
- Closes with the verdict log line.

## Why this is the bar
The post-mortem only has value if it captures the *right* diagnosed category and a genuinely reusable
lesson — a generic "this campaign didn't work, try something else" retro would defeat the point of building
institutional memory for the next campaign.

The v1.1.0 addition here is the **empty-result discipline**. Classification creates pressure to produce
output: a winners list is what Faber consumes, so an audit that returns none can feel like a failed audit.
It isn't. Manufacturing a "potential" from the least-bad ad in a campaign that's being killed for objective
mismatch would send Faber to build variations on a structure that never had a chance — burning a full
14-day cycle to learn nothing. This mirrors the existing rule against forcing "the seed" label onto an ad
set that isn't a genuine standout.
