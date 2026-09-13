# Golden example 6 — Winner/potential classification under the scale guards

New in v1.1.0. Covers the capability most likely to fail silently at PHC's account size.

## Input
"Hey Legatus, which of our ads are winners?"

Live account context (via MCP), one campaign, **5 live ads** (below the 8-ad guard):

| Ad | Cumulative spend | Spend share | ROAS (7d) | Windows above target |
|---|---|---|---|---|
| A | $310 | 44% | 2.4 | 3d, 7d, 14d |
| B | $180 | 26% | 1.6 | 3d, 7d |
| C | $120 | 17% | 0.6 | none |
| D | $ 60 | 9% | 3.1 | 3d |
| E | $ 30 | 4% | 0.4 | none |

King goal on file: 1.0 non-promo / 4.0 promo / 2.0 blended monthly. Target ROAS for classification: 1.0.

## A great output must assert
- **States that the 5%-spend-share test was suppressed**, because the campaign has 5 live ads and the guard
  requires 8. With five ads, every one of them trivially clears 5% — the test would classify the whole
  account as winners and tell Ben nothing. The output must say the guard fired and why, then fall back to
  ranking by spend and treating only the top 3 as candidates.
- **Excludes D and E as unclassifiable on the $100 cumulative-spend floor** — D at $60 and E at $30 are
  below it. D is the trap: a 3.1 ROAS looks like the best ad in the account, and it is not classifiable in
  either direction. Calling D a winner on $60 of spend is exactly the error the floor exists to prevent.
- **Classifies A as a winner** — top spend, above target, and held in all three windows.
- **Classifies B as a potential, not a winner** — it's above target but held in only 3d and 7d, not 14d.
  Persistence across all three windows is the winner condition; two out of three is a potential.
- **Classifies C as neither** — real spend, below target, no window. Not flywheel input.
- Reports winners and potentials as **two separate lists**, never merged, since Faber treats them oppositely.
- States which windows each call held in, per ad.

## The expected shape
```
Winners (replicate → Faber):
- Ad A — $310 spend, 2.4 ROAS — held 3d/7d/14d
Potentials (tweak → Faber):
- Ad B — above target but 14d not held — 1.6 ROAS — held 3d/7d
Neither: Ad C ($120, 0.6 ROAS, no window)
Insufficient spend / unclassified: Ad D ($60), Ad E ($30) — below $100 floor
Guards: spend-share test SUPPRESSED — 5 live ads, requires 8. Ranked by spend, top 3 as candidates.
```

## Why this is the bar
Both guards exist because the 5% threshold was borrowed from agency practice on accounts running dozens of
live ads, and it breaks in exactly two ways at PHC's scale — in opposite directions.

Without the ad-count guard, a thin campaign classifies **everything** as a winner, and Faber gets told to
replicate five ads including one at 0.6 ROAS. Without the spend floor, a lucky ad with $60 behind it
classifies as the account's best performer, and a full 14-day creative cycle gets spent iterating on noise.
Ad D is in this example specifically because the tempting answer and the correct answer disagree: it has the
highest ROAS on the board and the correct call is still "not classifiable."

An output that produces a clean-looking winners list without mentioning either guard has failed, even if
its top pick happens to be right.
