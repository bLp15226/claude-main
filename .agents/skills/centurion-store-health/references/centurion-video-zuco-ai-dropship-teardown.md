# Centurion — video intake: Grant Zuco dropship store teardown

> **PROVENANCE: VIDEO SOURCE.** Speaker: Grant Zuco (YouTube). Runs dropshipped
> women's-dress brands on Facebook/TikTok; sells a paid mentorship ("Ecom Automated"),
> owns the spy tool used in the teardown, affiliate-links AutoDS.
> Published: 2026-07-21. Runtime 28:33. URL: https://www.youtube.com/watch?v=XVA3HprcRzc
> Extracted 2026-07-29. Transcript + frames sampled at 10 timestamps (480p ceiling).
> **ROUTED 2026-07-29 per Aurelius ruling** — filed on a second pass, after the original
> cart/checkout chunk was split and the roster question resolved against disk (Centurion is
> live and charters "checkout integrity"; Vesta is sketched-only with a customer-care lane).
> Transcript archived (canonical copy):
> `../../scriptor/references/sources/video-XVA3HprcRzc-zuco-ai-dropship-teardown-transcript.txt`
> STATED/INFERENCE classification applied throughout.
>
> **This file carries** the customer-experience integrity half: the undeliverable shipping
> promise (§1), a live broken control found in a store presented as a model (§2), payment and
> mobile-audit mechanics (§3), and one **open question** that must not be adopted as a
> mechanic (§4).
> **Routed elsewhere:** offer/AOV merchandising (free-shipping threshold, catalogue depth,
> cart-drawer gap statement, upsell placement) → `scriptor/references/scriptor-video-zuco-ai-dropship-teardown.md` §2A;
> page architecture and the purchase-anxiety cluster → same file §1–3; competitor research and
> dupe arbitrage → `augur-research/references/augur-video-zuco-ai-dropship-teardown.md`;
> AI-asset QA → `faber-creative-flywheel/references/faber-video-zuco-ai-dropship-teardown.md`.
> **Still held:** supplier-sourcing cluster → ruled to Beowulf, which is not built.

---

## 1. The undeliverable shipping promise — the strongest integrity finding in the source

**1.1 The two numbers, both frame-verified, seven minutes apart.**

| What | Where | Value |
|---|---|---|
| Storefront shipping promise | Product page, [20:23–21:12] | **USA 5–8 business days**, plus "24-hour dispatch" |
| Supplier lead time for that same garment | AutoDS supplier cards, frame-verified 13:28 | **11–14 business days** |

*STATED (both), PERFORMANCE, DEMONSTRATED (both on screen).*

**1.2 Why this is a Centurion finding and not merely a copy problem.** The speaker treats
the shipping line purely as a wording exercise — he praises stating "5 to 8 business days"
because business days convert to about fourteen calendar days while *reading* shorter, "one
way to make the shipping time seem lower but actually be a little bit longer."

But the deliverability question is separate from the wording question, and it is the one he
never asks. **On his own screen, the only supplier shown for this product cannot meet the
promise the storefront makes** — 11–14 business days against 5–8. That is not vagueness; it
is a commitment the fulfilment chain cannot honour, which surfaces later as late-delivery
tickets, chargebacks, and refund demands rather than as a copy complaint.

> **The generalisable check (PHC synthesis, INFERENCE).** A shipping promise is a claim about
> the *supply chain*, not about the product page. It must be validated against the actual
> lead time of the actual supplier for the actual SKU — not written to whatever number
> converts best and reconciled later.
>
> **Add to the pre-launch checklist:** for every product with a stated delivery window,
> confirm the window against the current supplier's quoted lead time, plus dispatch time,
> plus the weekend effect. If the supplier's number exceeds the promise, the promise is
> wrong — change the promise, not the framing.

**1.3 A worked note on the weekend effect, which is real even though its use here was not.**
The speaker correctly observes that ten business days is fourteen calendar days because
orders placed at a weekend cannot dispatch until the following week. The *arithmetic* is
sound and worth carrying — a business-day window always converts to a longer calendar
window, and that gap is exactly where "where is my order" tickets originate. What is
rejected is using the gap deliberately to make a slow promise read fast (see §5.1).

---

## 2. A broken control in a store presented as the model to copy

**2.1 What was found.** [22:09–22:19] On the reference store — the one the speaker holds up as
"the golden formula for high-converting women's clothing brand websites" — the **"show more
reviews" control does not work.** He clicks it, nothing happens, and he moves on: "it doesn't
really matter, though, because these reviews are good enough."
*STATED, PLATFORM MECHANICS, DEMONSTRATED.*

**2.2 Why it is worth filing rather than noting.** This is Centurion's thesis found in the
wild, in a store nobody was auditing. The page **looked** finished — hero, offer, badges,
review wall, upsells all present and well-composed — and a functional element inside it was
dead. An appearance-based review passes this store. A functional review does not.

> **The rule it supports.** A store audit tests **controls, not layouts.** Every interactive
> element on a revenue path gets clicked: variant selectors, quantity steppers, size-chart
> and review expanders, cart-drawer controls, promo-code fields, every checkout step. "It
> renders" is not "it works," and the operator is the least likely person to notice, because
> they know what the page is supposed to do and stop reading it.

> **How this extends the existing checklist, precisely.** Checked against
> `store-health-methods.md` §Pre-launch checklist (2026-07-29): it already covers add-to-cart
> and end-to-end checkout, so the *revenue-path* controls are partly covered. Two gaps:
>
> 1. **Non-purchase controls are not covered at all** — expanders, size-chart triggers,
>    review pagination, tabs. The broken control in §2.1 is exactly this class, and it is
>    invisible to a checklist that only walks the purchase path.
> 2. **The add-to-cart line tests "the product's default variant" only.** That is the precise
>    blind spot the sticky-add-to-cart variant-loss defect lives in (raised separately for
>    PHC's own theme, from this same source's §2.3 — a sticky bar without variant selectors
>    silently adds the default). A default-variant-only check cannot catch it by
>    construction.
>
> So CZ-2 is an **extension with a specific hole to close**, not a new idea replacing an old
> one.

**2.3 The second-order point.** The speaker's dismissal is itself the finding. He decided the
defect didn't matter because the *content behind it* was adequate — but he could not know
that, because the control that would have revealed the rest of the reviews was the broken
one. **A broken control hides its own consequences**, which is why "does it matter" is not
answerable by looking at the page. It is answerable only by fixing the control.

---

## 3. Payment and audit mechanics

**3.1 Leave Shop Pay enabled.** [23:44–23:55] The speaker reports incremental orders from
buyers browsing inside the Shop app who then reach the site — "I've gotten random orders just
from people browsing the shop app." *STATED, PLATFORM MECHANICS, CLAIMED.*

Cheap to verify on PHC's own store: it is a settings check, not a build. Worth adding to a
store-health pass as a one-line confirmation rather than adopting on his word.

**3.2 Audit in the viewport the traffic actually uses.** [06:07–06:15] 76% of the teardown
store's traffic was mobile against 24% desktop, so the page was reviewed in a mobile
viewport throughout — he works in device emulation with DevTools open.
*STATED, PLATFORM MECHANICS, DEMONSTRATED.*

> **Sequencing note (PHC synthesis, INFERENCE).** The traffic split determines the audit
> order, so it is a **prerequisite** of a store-health pass rather than an output of one:
> read the mobile/desktop split first, then audit the dominant viewport first. Auditing
> desktop-first on a 76%-mobile store means the majority experience is checked last, or in
> practice not at all.

**3.3 Build once, rotate the tested product — marginal, recorded for completeness.**
[05:01–05:19] A finished store plus a deep catalogue lets the tested product rotate without
rebuilding the site. *STATED, PLATFORM MECHANICS, ASSERTED.* This is an operations pattern
rather than an integrity check, and it sits closer to merchandising than to store health. It
came across in the held bucket and is filed here only so it is not lost. **No proposal
raised** — flagged as marginal to Centurion's lane.

---

## 4. OPEN QUESTION — checkout customisation below Shopify Plus

**Ruled: travels as an open question, never as a mechanic.** [11:32–12:22]

The speaker's account: custom checkout elements (countdown timer, shipping-protection upsell,
returns note, review block) normally require **Shopify Plus**, quoted at "like $2,500 a
month," and the teardown store achieves them with a third-party app instead. He calls the
checkout page "a huge lever."
*STATED, PLATFORM MECHANICS, ASSERTED.*

> **UNVERIFIED — do not adopt, do not repeat as fact.** Two distinct things need checking
> against Shopify's current documentation before any of this is usable:
>
> 1. **The price point.** "$2,500/month" for Plus is approximate at best and varies by
>    contract.
> 2. **The boundary.** Shopify moved checkout customisation to checkout extensibility, with
>    plan-dependent limits on what apps may inject. The speaker's description of what is and
>    is not possible below Plus is loose and may describe a platform he does not fully
>    understand.
>
> Recorded so the question is answerable later, not so the claim can be cited. **If PHC ever
> wants checkout customisation, this needs a fresh read of Shopify's docs, not this video.**

Note separately that the specific customisation shown — a countdown timer reading "09:49
until your order expires," frame-verified at 11:40 over a $229.79 order summary — is
**ethics-rejected** (§5.2). The platform question and the tactic question are independent:
even if the mechanism turns out to be available below Plus, that use of it is not available
to PHC.

---

## 5. ETHICS FILTER — integrity-side rejections

All 14 rejections from this source were approved 2026-07-29 and are recorded in full in
`scriptor/references/scriptor-video-zuco-ai-dropship-teardown.md` §5 (copy-side) and
`faber-creative-flywheel/references/faber-video-zuco-ai-dropship-teardown.md` §3
(asset-side). The items in Centurion's lane:

**5.1 Engineered shipping-time ambiguity. REJECTED.** Deliberately choosing a business-day
framing because it reads shorter than the calendar reality it commits to. See §1. Compounded
by §1.1: the promise is not merely ambiguous, it appears undeliverable from the only supplier
shown.

**5.2 Checkout countdown timer. REJECTED.** "09:49 Until your order expires," frame-verified
at 11:40. No order is reserved and nothing expires. Fake urgency placed at the highest-intent
moment on the site — and, for a store-health reading specifically, a **false statement about
system state**, which is a different failure from an exaggerated claim: the page asserts
something about the store's own behaviour that is not true.

**5.3 Fake stock scarcity on goods held in no inventory. REJECTED — cross-reference.**
"Only a few items left," "only four dresses left in stock," on dropshipped products. Filed
copy-side at Scriptor §5.3; noted here because inventory claims are also a store-state
assertion, and a store-health pass is where a false one is most cheaply caught.

---

## 6. PROPOSED skill changes — Centurion

All **PROPOSED**. No `SKILL.md` was modified by this intake.

| # | Proposal | Rationale | Status |
|---|---|---|---|
| CZ-1 | Add **shipping-promise deliverability** to the pre-launch checklist: validate every stated delivery window against the current supplier's quoted lead time + dispatch + weekend effect; if the supplier's number exceeds the promise, change the promise. | The strongest finding in the source, frame-verified on both sides, and a defect class that surfaces as chargebacks rather than as a page problem. **Coverage verified 2026-07-29:** `store-health-methods.md` has zero hits for shipping / lead time / delivery. Genuine gap. | **FILED 2026-08-04 (late — ruled 07-29, post-grep)** v1.1.0 — `store-health-methods.md`, pre-launch checklist. Re-grep 2026-08-04 confirmed still a clean gap. |
| CZ-2 | Extend the pre-launch checklist to **audit controls, not layouts** (§2.2): click every interactive element, including non-purchase controls (expanders, size-chart triggers, review pagination), and test **at least one non-default variant** through add-to-cart. | **Coverage verified 2026-07-29:** the checklist already covers add-to-cart and end-to-end checkout, so this is an extension, not a new idea. Two specific holes: non-purchase controls are absent entirely (the §2.1 defect is that class), and the ATC line tests "the product's default variant" only — the exact blind spot the sticky-ATC variant-loss defect occupies. | **FILED 2026-08-04 (late — ruled 07-29, post-grep)** v1.1.0 — same section, w/ both named holes. |
| CZ-3 | Record **a broken control hides its own consequences** (§2.3) as the reason "does it matter?" is not answerable by inspection. | PHC synthesis. It is the argument against exactly the dismissal the speaker made, and the reason CZ-2 cannot be triaged by eye. | **FILED 2026-08-04 (late — ruled 07-29, post-grep)** v1.1.0 — same section, labelled PHC synthesis. |
| CZ-4 | Add **read the traffic split first, audit the dominant viewport first** (§3.2) as a sequencing prerequisite of a store-health pass. | PHC synthesis. Cheap, and it reorders the whole pass on a mobile-dominant store. | **FILED 2026-08-04 (late — ruled 07-29, post-grep)** v1.1.0 — same section, as a sequencing prerequisite. |
| CZ-5 | Add a **Shop Pay enabled** line to the store-health pass as a settings confirmation. | Settings check, not a build. Adopt the check, not his performance claim. | **PROPOSED — MODIFIED (check only, claim not adopted)** |
| CZ-6 | **No change** from the checkout-customisation claim (§4). | Ruled an open question. Unverified account of platform behaviour; needs a fresh read of Shopify docs, not this source. | **PROPOSED — DECLINED (open question)** |
| CZ-7 | **No change** from build-once-rotate (§3.3). | Operations pattern, marginal to Centurion's lane. Recorded so it is not lost; not adopted. | **PROPOSED — DECLINED (out of lane)** |
| CZ-8 | Append §5 to Centurion's rejected-tactics record, noting that §5.2 and §5.3 are **false statements about store state** rather than exaggerated claims — a distinct class a store-health pass is well placed to catch. | Standing rule on rejected tactics, plus the distinction is genuinely useful to an auditor. | **FILED 2026-08-04 (late — ruled 07-29, post-grep)** v1.1.0 — same section, appended to the rejected-tactics record. |

When Ben rules on CZ-1…CZ-8, outcomes get recorded back into this section per the
report-to-skill drift-log rule.
