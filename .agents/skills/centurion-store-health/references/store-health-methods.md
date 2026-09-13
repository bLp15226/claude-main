# Centurion reference: pre-launch checklist, diagnostic method, spot-check method

Referenced by `SKILL.md`'s Workflow (all four phases). This file holds content too long to inline in the
skill body.

## Bidirectional traffic-vs-conversion diagnostic method

The core trap this skill exists to catch, and its mirror:

1. Pull sessions (traffic) and conversion rate for the relevant window, compared to a recent baseline.
2. **Direction 1 — traffic collapse disguised as a conversion problem:** sessions dropped sharply, but
   conversion rate held steady or improved. Total sales look bad, but the site/checkout is working fine —
   the real problem is upstream (traffic/targeting), not the store. Don't go looking for a checkout bug
   that isn't there.
3. **Direction 2 — the mirror case:** traffic and add-to-cart rate look normal, but conversion rate itself
   dropped. This is likely a genuine site-side problem (checkout, payment, trust) — continue to the health
   check.
4. If both directions look ambiguous (nothing clearly explains the drop), say so explicitly rather than
   forcing a verdict either way — this is exactly the case worth flagging for a joint look with Legatus
   rather than guessing.

## WebFetch spot-check method

Centurion does not crawl the whole site. It checks the specific pages relevant to the request (storefront
home, the product page in question, the cart/checkout page) via `WebFetch`:

- **Broken-link signal:** a non-200 response (404, 500, etc.) on a fetch.
- **Speed proxy:** response latency from the fetch — a rough signal only, not a true Core Web Vitals
  measurement. Report it as an approximate figure, not a precise Lighthouse-style score.
- **Appears broken vs. confirmed broken:** a single failed fetch could be a transient network blip, not a
  real defect. Retry once. Only report something as "confirmed broken" after a repeat failure or a
  consistent bad status code; a single failure that doesn't repeat is "appears broken — worth a manual
  check," not a confirmed defect.
- Always name the exact pages checked in the output. Never let a 2-3 page spot-check read like a full-site
  audit.

## Pre-launch checklist (literal checklist, not prose)

Run against the specific product before any ad spend begins:

- [ ] Product page loads (via WebFetch spot-check) with a normal status code
- [ ] Add-to-cart works for the product's default variant
- [ ] Checkout flow completes end-to-end (via connector data on recent completions, or a described manual
      walkthrough if Ben has run one)
- [ ] No sold-out variant is sitting in a featured/hero spot for this product
- [ ] Compare-at pricing isn't broken (e.g. showing $0.00 instead of a real "was" price)
- [ ] The product/collection URL isn't a raw auto-generated slug where a clean one was intended
- [ ] Payment processing status is healthy (no known processor issues at check time)

These specific checks (sold-out-in-featured-spot, broken $0.00 compare-at, auto-generated URLs) come from
PHC's own previously identified site punch list — they're real, recurring failure patterns for this store,
not generic hypothetical checks.

## Known PHC issue patterns (context, not exhaustive)

- **Sold-out inventory in a featured spot:** a variant or product with zero inventory left visible/featured
  prominently — technically "works" but wastes the featured placement and can look broken to a shopper.
- **Broken $0.00 compare-at pricing:** the "compare at" (strikethrough) price showing as $0.00 instead of a
  real prior price, which reads as a data-entry bug, not a real discount.
- **Auto-generated collection URLs:** raw Shopify-generated slugs where a clean, intentional URL was
  expected — not a functional break, but worth flagging as a punch-list item during a pre-launch pass.

Note: content-authenticity issues (e.g. fake or placeholder testimonials) and generic non-brand copy are
**not** part of this checklist — those are Scriptor's/trust-content concerns, not functional integrity, per
`SKILL.md`'s exclusions.

## Punch-list tracker

## Shipping-promise deliverability, control auditing, and pass ordering

> **LATE-FILED BATCH.** Ruled by Aurelius **2026-07-29**; filed **2026-08-04**, post-coverage-grep.
> Status-flipped to APPLIED on 07-29 but never written — a process failure caught by a tree-wide
> audit on 2026-08-04 (57 proposals, 5 generals). Re-grepped against current doctrine before writing;
> all items below returned clean misses. **Filed under Centurion v1.1.0.**
> Sources: Zuco AI dropship teardown · AC Hampton "Starting Dropshipping From $0" (both 2026-07-29).

### CZ-1 / CH-1 — Shipping-promise deliverability (pre-launch checklist)

**Validate every stated delivery window against the current supplier's quoted lead time + dispatch
time + weekend effect. If the supplier's number exceeds the promise, change the promise.**

The strongest finding in the Zuco source, frame-verified on both sides. This is a defect class that
**surfaces as chargebacks and disputes rather than as a page problem**, which is why it belongs on a
checklist and not in a judgement call — nothing on the page looks wrong.

> **Two trigger conditions, not one (CH-1).** The check fires when a delivery window **is stated**
> *or* **when one is absent.** An unexamined or missing delivery promise on a dropshipped product is
> itself the finding — silence is not safety, it just moves the expectation-setting to the customer's
> imagination.

**Why this is a checklist line rather than a judgement call (CH-2).** Two operators, two sources,
same step skipped in opposite directions:

| Source | Failure |
|---|---|
| Zuco teardown | Delivery window **stated**, never validated against supplier lead time |
| Hampton | Delivery window **absent entirely** on a dropshipped product |

Two operators skipping the same step in opposite directions is the argument for checklisting it.

### CH-3 — The Beowulf → Centurion → Scriptor lead-time handoff

Documented here on Centurion's side. Scriptor's **Redefinition** block
(`scriptor/references/PHC_Product_Page_Skeleton.md:129`) already requires *"how long is shipping —
the honest number."* **Nothing in the tree established that number.** The copy rule existed; the
verification half did not.

The chain: **Beowulf** verifies supplier lead time at scouting → **Centurion** validates the stated
promise against it at pre-launch (CZ-1) → **Scriptor** writes the honest number into Redefinition.
CZ-1 is the missing middle link.

### CZ-2 — Audit controls, not layouts

Extend the pre-launch checklist: **click every interactive element**, including non-purchase
controls — expanders, size-chart triggers, review pagination, tab switches — and **test at least one
non-default variant through add-to-cart.**

*Coverage note (verified 2026-07-29, re-verified 2026-08-04): the checklist already covers
add-to-cart and end-to-end checkout, so this is an extension with two specific holes named:*

1. **Non-purchase controls are absent from the checklist entirely.** The Zuco §2.1 defect sits in
   exactly that class.
2. **The existing add-to-cart line tests the product's default variant only** — which is precisely
   the blind spot the sticky-ATC variant-loss defect occupies.

> **CZ-3 — why "does it matter?" is not answerable by inspection.** *(PHC synthesis.)*
> **A broken control hides its own consequences.** You cannot see the sessions it ended, because the
> customers who hit it left and were never counted. This is the argument against the exact dismissal
> the source's speaker made, and the reason CZ-2 cannot be triaged by eye — the cheap-looking
> judgement call ("that expander probably doesn't matter") is unavailable, because the evidence that
> would settle it is the evidence the defect destroyed.

### CZ-4 — Read the traffic split first, audit the dominant viewport first

*(PHC synthesis.)* Before running a store-health pass, **read the mobile/desktop traffic split, then
audit the dominant viewport first.** Cheap, and it reorders the entire pass on a mobile-dominant
store — which most PHC-adjacent stores are. Auditing desktop first on a 78%-mobile store spends the
attention budget on the minority experience.

### CZ-8 — Rejected-tactics record: false statements about store state

Appended to Centurion's rejected-tactics record. The Zuco §5.2 and §5.3 items are **false statements
about store state** rather than exaggerated marketing claims — a claim that a feature exists, that
stock is limited, or that an integration is live when it is not.

**This is a distinct class and a store-health pass is unusually well placed to catch it**, because
Centurion is the only hat that reads the actual store state rather than the copy describing it.

---

PHC's known open site issues, from the site audit recorded in `PHC_Session_Handoff.md` (2026-07-03). Tracked
here for visibility across checks — but tracking is **conversation-scoped**, not file-persisted: this table
is the baseline as of the audit date, not a live database. Centurion reflects updates from what Ben tells it
in conversation (this session or one visible in context), not by editing this file during normal use.

| Item | Centurion can verify? | Baseline status (2026-07-03) |
|---|---|---|
| Age gate showing incorrectly | **No** — needs a manual check in Shopify admin; app installations aren't queryable via the current connector permissions | Open — cause unknown |
| Sold-out inventory in featured spots | **Yes** — pre-launch checklist / health check | Open |
| Fake testimonials | **No** — content-authenticity, not functional integrity (see `SKILL.md` exclusions) | Open — flag for a Scriptor-lane review, don't diagnose here |
| Broken $0.00 compare-at pricing | **Yes** — pre-launch checklist / health check | Open |
| Generic non-brand homepage copy | **No** — copy quality, Scriptor's lane | Open — flag for a Scriptor-lane review, don't diagnose here |
| Auto-generated collection URLs | **Yes** — pre-launch checklist / health check | Open |
| Placeholder social links | **Yes** — broken-link check via WebFetch | Open |

When a check touches any of these items: for a "Yes" item, confirm current status live and report it
plainly (open / resolved). For a "No" item, report it as tracked-not-verified and name which hat should
confirm it instead — don't attempt to verify it and don't silently drop it from the report either.

## Post-mortem template (on confirmed resolution)

Mirrors Legatus's post-mortem-on-kill, applied here when a previously-flagged issue (a punch-list item or a
joint Legatus alert) is confirmed resolved — written so it's easy to carry into Augur's foundational docs
later:

```
Post-mortem — <issue>
What broke: <specific finding>
How long it was open: <if known from context, else "not tracked">
What fixed it: <if Ben stated it, else "not specified">
Reusable takeaway: <one line — a specific, actionable lesson, not a generic platitude>
```

Only fires when a check actually confirms resolution (live-verified for a "Yes" item, or Ben's explicit
statement for anything else) — never speculatively.
