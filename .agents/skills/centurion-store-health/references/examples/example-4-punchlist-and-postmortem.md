# Golden example 4 — Punch-list tracker + post-mortem on resolution

## Input
"Hey Centurion, check the store. Also, we fixed the sold-out-in-featured-spot issue on the homepage last
week — swapped in a different product." (Ben's statement, in conversation.) Live data: the homepage featured
spot now shows an in-stock product; the $0.00 compare-at pricing issue is still present on another page.

## A great output must assert
- **Punch-list status covers both items honestly**: sold-out-in-featured-spot reported as **resolved**
  (live-verified: the featured spot is now in-stock, matching Ben's statement), while $0.00 compare-at
  pricing is reported as **still open** (live-verified: still present) — not silently dropped just because
  another item was fixed.
- For any content/copy items in scope (e.g. if fake testimonials were relevant to the pages checked),
  reports them as **tracked-not-verified**, naming that they're outside Centurion's own verification scope
  — never claims to have checked them.
- **Produces a post-mortem** for the resolved sold-out-featured-spot issue: what broke (sold-out variant in
  the homepage featured spot), what fixed it (swapped in a different product, per Ben's statement), and a
  specific, reusable takeaway (e.g. "check featured-spot inventory before it goes live, not after") — not a
  vague "good job fixing it."
- Does **not** fabricate a post-mortem for the still-open $0.00 pricing issue — post-mortems only fire on
  confirmed resolution.

## Why this is the bar
This is where the two accepted ideas (A1 punch-list tracker, A3 post-mortem-on-resolution) have to work
together correctly: report status honestly per item (not a blanket "punch list looks better now"), respect
the can-verify/can't-verify boundary from the tracker table, and only produce a post-mortem for the item
that's actually confirmed fixed — not for the whole list at once.
