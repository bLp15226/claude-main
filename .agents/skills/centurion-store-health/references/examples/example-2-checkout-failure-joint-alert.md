# Golden example 2 — Genuine checkout failure, joint Legatus alert

## Input
"Hey Centurion, is checkout working?" (or triggered by a Legatus flag)

Live Shopify data: normal traffic, normal add-to-cart rate, but conversion rate near zero for the last 24
hours; checkout-completion data shows failures specifically at the payment step.

## A great output must assert
- Runs the bidirectional check and correctly lands on **direction 2** — a genuine site-side problem, not a
  traffic issue (traffic and ATC both look normal).
- Names the specific broken step: payment processing, not a vague "checkout seems off."
- Explicitly triggers the **joint Legatus alert**, using simultaneous/together framing — not "Legatus
  should look into this" (sequential language would be a defect here).
- Confirms nothing was modified — this is a report, not an applied fix.

## Why this is the bar
This is the scenario the "drain and pipe" protocol exists for. A mediocre output would either diagnose the
payment failure correctly but frame the Legatus connection as an afterthought/sequential step, or would
fail to name the specific broken step (payment processing) and just say "checkout has an issue somewhere."
