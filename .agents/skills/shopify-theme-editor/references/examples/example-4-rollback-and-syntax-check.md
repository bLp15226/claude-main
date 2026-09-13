# Golden example 4 — Rollback snippet + Liquid syntax sanity check

## Input
"Update the header nav snippet to add the cart icon back in — it's missing since the last edit."
(Modifying an existing file, not creating a new one.)

## A great output must assert
- Reads the current `sections/header.liquid` (or equivalent) content first, per Workflow step 1.
- **Captures the original content verbatim** as a rollback snippet, since this is a modification to an
  existing file, not a brand-new one.
- Generates the updated code with the cart icon restored, states the exact operation (replace/insert at a
  specific point), and includes the rollback block in the output.
- **Runs the Liquid syntax sanity check** before presenting the output — balanced `{% %}` tags, valid `{{ }}`
  output syntax — and states "Syntax check: passed" (or names and fixes anything caught).
- Updates the paste-status tracker to `generated`.

## Why this is the bar
This is the scenario where both accepted ideas matter together: a real edit to an existing live file is
exactly when an easy revert path earns its keep, and a syntax slip in hand-generated Liquid is exactly what
would otherwise only surface after a live paste breaks the header on every page. A mediocre output would
generate the fix without preserving the original, or skip the sanity pass and hand over code with an
unmatched tag.
