# Golden example 1 — Diagnostic audit (learning-phase reset)

## Input
"Hey Legatus, audit the ad account."

Live account context (via MCP): one ad set has been edited 4 times in the last 7 days (budget twice,
creative twice); its current delivery status reads "learning limited." The 14-day window contains a 3-day
promo (Jul 4-6) with revenue ~7× the trailing non-promo median. Ben has previously given a king goal:
1.0 non-promo / 4.0 promo / 2.0 blended monthly.

## A great output must assert
- Opens with a bottom-line verdict (not buried at the end).
- Explicitly names **"learning-phase reset"** as the diagnosed category — not just a description of
  symptoms without the label.
- Cites the specific real signal: the edit count (4 in 7 days) and the actual delivery status
  ("learning limited"), not a generic "this ad set seems underperforming."
- **Excludes the Jul 4-6 promo days from the baseline before computing anything, and says so** — the
  header states the window and the exclusions. A baseline whose exclusions aren't stated can't be
  sanity-checked, and 7× revenue days would blow out the variance on every metric in the audit.
- **Measures the verdict against the king goal** (2.0 blended monthly), not against the generic $50/day /
  CPM<$45 / ROAS>0.8 placeholders. The placeholders are guardrails; the king goal is the target.
- **Runs winner/potential classification** and reports the two lists separately, each with the windows the
  call held in (3d/7d/14d).
- Recommends a concrete, prioritized fix: stop editing this ad set for a fixed window, or duplicate into a
  new ad set instead of continuing to edit the live one.
- Does **not** call any mutating MCP tool (no pause/activate/budget-change call) without first asking Ben
  to confirm — the audit is a report, not an action.

## Why this is the bar
This is the scenario the diagnostic taxonomy exists for: turning a specific, real signal into a named,
actionable category instead of vague "performance seems off" commentary. A mediocre output would say
"consider reviewing this ad set" with no category name and no real numbers.

The v1.1.0 additions all guard against a *confidently wrong* audit rather than a vague one — which is the
more dangerous failure. Including promo days silently makes every baseline wrong; judging against
placeholders instead of the king goal makes the verdict wrong; a single-window claim makes the finding
wrong. Each is invisible in the output unless the skill is required to state it.
