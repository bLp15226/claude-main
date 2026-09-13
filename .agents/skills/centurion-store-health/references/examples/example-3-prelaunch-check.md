# Golden example 3 — Pre-launch check with real PHC punch-list items

## Input
"Hey Centurion, run a pre-launch check on the Aurelia throw blanket before we start ads."

Context: the product's featured variant is sold out; its compare-at price shows $0.00; its collection URL
is an auto-generated slug.

## A great output must assert
- Walks the pre-launch checklist as an actual checklist (from `references/store-health-methods.md`), not
  free-form prose.
- Tests the add-to-cart → checkout flow specifically for this product.
- **Catches all three known-pattern issues present**: the sold-out featured variant, the broken $0.00
  compare-at price, and the auto-generated collection URL — named specifically, not glossed over.
- States exactly which pages/data were checked.
- Ends with a clear **go/no-go** verdict — given three real issues found, this should be a clear "no-go
  until fixed," not a soft "looks mostly fine."

## Why this is the bar
This scenario uses PHC's own real, previously identified punch-list items rather than generic hypothetical
checks — the checklist only has value if it actually catches the specific things this store has already
been shown to break on. A mediocre output would run a generic "everything looks fine" check without
matching against these known patterns at all.
