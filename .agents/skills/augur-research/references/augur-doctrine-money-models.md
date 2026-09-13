# Augur Doctrine — Money Models Synthesis

**Source basis:** Conceptual synthesis of Alex Hormozi's money-model methodology (Acquisition.com; publicly taught framework). This is NOT an extraction of *$100M Money Models* — the book is in copyright and the uploaded file was an unauthorized copy, which was not read. This file distills the framework in original language, filtered through PHC ethics and reconciled with the existing doctrine stack (Halbert, Maslen, Hopkins, Schwartz, consumer-psychology module).

**Standing rule:** Where any tactic here conflicts with PHC ethics (no fake urgency, no fabricated testimonials, no manufactured social proof, honest reason-why for every deadline or discount), PHC ethics wins. Conflicts are flagged inline with ⚠️.

**Team routing note:** This doctrine sits at the Augur/Quaestor seam. Augur uses it to *diagnose and design* offer structures during research; the math sections (§2, §6) are Quaestor's founding doctrine the day that general is forged. Cross-load it then — don't duplicate it.

---

## §1. The Core Thesis: A Money Model, Not an Offer

An offer is one deal. A **money model** is the *deliberate sequence* of offers a customer moves through, engineered around one governing question:

> **How much gross profit does one new customer produce in the first 30 days, and does it exceed what it cost to get them?**

The strategic prize is **customer-financed acquisition (CFA)**: when 30-day gross profit per new customer ≥ roughly **2× (CAC \+ COGS)**, every customer pays for the next one *and* the goods, before any credit-card float comes due. Ad spend stops being a bet and becomes a flywheel — growth is no longer capped by the household-funds firewall (which for PHC is absolute) or by external cash.

**Why this is the right lens for PHC specifically:** Ben's financial floor rule (household never funds the business) means PHC *must* grow out of its own margin. CFA isn't an optimization for PHC; it's the only legal route to scale. Every product-page, email, and ad decision Augur evaluates should be scored against 30-day gross profit per customer, not just conversion rate.

**The four prongs.** A complete money model has up to four layers, added in order, one at a time:

1. **Attraction offer** — wins the *first* transaction, cheaply  
2. **Upsell** — maximizes profit *at the moment of purchase*  
3. **Downsell** — recovers the sale that was about to walk  
4. **Continuity** — converts one-time buyers into recurring revenue

You do not build all four at once. You build one, make it work, add the next. (§5 sequences this against PHC's staged goals.)

---

## §2. The Governing Math (PHC-translated)

Definitions Augur must use consistently:

- **CAC** — total ad \+ acquisition cost ÷ new customers acquired  
- **Landed cost** — product \+ shipping \+ extras (PHC's existing definition)  
- **Gross profit (GP)** — revenue − landed cost of everything shipped  
- **30-day GP** — GP from a cohort's first 30 days: first order \+ upsells \+ repeat orders inside the window  
- **CFA threshold** — 30-day GP ≥ 2× (CAC \+ landed cost of first order)

**PHC's structural head start:** the standing pricing rule (sell at 3× landed cost) means a first order alone yields GP \= 2× landed cost. So the CFA condition collapses to something Augur can check on one line:

> **A product self-funds when 30-day GP per customer ≥ 2× CAC \+ 2× landed cost — i.e., when (2 × landed) \+ upsell GP \+ repeat GP ≥ 2 × (CAC \+ landed), which simplifies to: upsell \+ repeat GP within 30 days must cover 2×CAC − 0 when the base order already covers 2×landed. Practical form: *CAC ceiling ≈ (30-day GP per customer) ÷ 2\.***

**Worked reference example** (Augur should emit one of these per researched product):

- VeloCurl-class item, landed $12 → priced $36 → first-order GP $24  
- Quantity bump takes 15% of buyers to 2 units → \+$3.60 avg GP  
- Thank-you-page upsell (attach-rate 10%, GP $15) → \+$1.50 avg GP  
- 30-day GP/customer ≈ $29 → **CAC ceiling ≈ $14.50** for full CFA  
- If blended CAC runs $20, the model isn't broken — it's *incomplete*: the gap is closed by raising AOV (better upsell) or adding a repeat trigger, not by discounting the front end.

**New required field in every Augur product brief:** `money_model_math:` — landed, price (3× check), projected AOV levers, 30-day GP estimate, implied CAC ceiling, and verdict (self-funding / gap of $X / dead on arrival).

---

## §3. Prong One — Attraction Offers (winning the first sale)

The attraction offer's job is not profit. Its job is to convert a stranger at the lowest credible friction, so the *rest* of the model can work. Mechanism families, with PHC translation:

**3.1 Discount-with-honest-reason.** Entry discount justified by a true cause. PHC already owns the best one in ecommerce: the Founding 50 launch. "You're early, we're new, the discount is the payment for your trust" is a Hopkins-grade honest reason-why. ✓ Passes ethics as-is.

**3.2 Buy-X-get-Y.** Bundling generosity instead of cutting price. Protects the luxury register — a black-and-gold brand should *add* value, not mark itself down. Preferred over raw % discounts for PHC. Maps directly to the standing quantity-discount bump (the only allowed pre-purchase offer).

**3.3 Giveaways as list-builders.** Run a real giveaway; everyone who enters but doesn't win gets a genuine consolation offer. Compatible with the Omnisend Coming Soon pipeline — a launch giveaway feeding the nurture sequence is clean, *provided* the prize is real, the odds aren't misrepresented, and the consolation offer has an honest frame ("you didn't win the flagship — here's founding pricing instead"). ⚠️ Gate: no fake winner counts, no manufactured entry numbers.

**3.4 Free-plus-shipping / loss-leader entry.** ⚠️ Handle with tongs. It works mechanically, but it attracts deal-seekers, erodes the luxury register, and the "free" framing collapses if shipping is padded to hide margin (that's a dishonest price, which fails the ethics screen outright). Verdict for PHC: **do not deploy** unless a specific product line (likely Fur Babies or Kids consumables) shows a proven repeat-purchase engine that monetizes the back end. Augur may model it; Legatus may not run it without explicit approval.

**3.5 Win-your-money-back challenges.** Native to gyms/info, not dropship ecommerce. Archived as a pattern, not a play.

**Diagnostic rule for Augur's Ad Library research:** when mining a winning page (per the established methodology — multiple concurrent creatives, sustained), *name the attraction offer class* they're running. Operator discipline plus a cheap front-end is the most common signature of a page that's actually printing.

---

## §4. Prong Two & Three — Upsells and Downsells (the money is after "yes")

**4.1 The moment of maximum trust is the second after purchase.** The customer has decided; risk perception is at its floor. This is why PHC's standing architecture — *pre-purchase limited to quantity bump, everything else post-purchase on the thank-you page* — is already the doctrinally correct shape. This module deepens it rather than changing it.

**4.2 Upsell selection logic.** The best upsell answers "what makes the thing I just bought work better, faster, or longer?" — not "what else do we sell?" Complement beats catalog-adjacent. For VeloCurl: heat-protectant or a travel case, not SatinShear. Augur's product briefs must now include `upsell_candidates:` ranked by *functional adjacency*, with landed cost and GP per attach.

**4.3 Anchoring inside the upsell.** Present the premium bundle first, the single add-on second. Honest anchoring (real products at real prices) passes ethics; ⚠️ decoy items priced never-to-sell purely to distort perception do not. If PHC wouldn't be comfortable if a customer actually bought the anchor, it's a decoy — kill it.

**4.4 Downsells.** When the customer declines, offer a smaller true version, not pressure: fewer units, the accessory alone, or a payment split (Shop Pay installments is the clean ecommerce implementation — same price, easier terms, zero ethical exposure). ⚠️ Never re-present the same offer with a countdown. A declined offer may be *followed*, once, by a genuinely different structure; it may not be *repeated louder*.

**4.5 The rollover pattern.** Applying a declined offer's value toward a different purchase ("your discount carries to the bundle instead") is honest if stated plainly and the math is real.

---

## §5. Prong Four — Continuity, and the Sequencing Doctrine

**5.1 Continuity in physical ecommerce \= consumables \+ replenishment.** Subscription is only honest where the product genuinely depletes: Fur Babies (treats, litter accessories), Beauty & Wellness (refills), Kitchen (filters, pods). Augur must tag every researched product `continuity_potential: none / replenishment / true-subscription` — this tag materially changes the 30-day GP model and therefore the CAC ceiling.

**5.2 Honest continuity mechanics that pass the screen:** real savings for subscribing (stated %), skip/cancel anytime surfaced *prominently* (burying cancellation is manufactured friction — fails ethics), bonus-for-commitment where the bonus is real. ⚠️ Fails the screen: trial-to-billing traps, cancellation mazes, "free" trials that quietly convert.

**5.3 Sequencing against PHC's staged goals.** Prongs are added one at a time, and PHC's stage dictates the order:

- **Stage 1 (→ $10K/mo sales):** Attraction only, executed excellently. Founding 50 \+ quantity bump. Measure everything (Hopkins' keyed-returns constitution applies — every offer variant is a test with a scoreboard).  
- **Stage 2 (sales holding, → $10K/mo profit):** Thank-you-page upsell goes from placeholder to engineered system (§4.2 selection logic, real attach-rate data). This is where the CAC ceiling rises without touching price.  
- **Stage 3:** Downsell/installments layer, then continuity on whichever products earned the `replenishment` tag with actual reorder data — not projected data.  
- Gate discipline: a prong is "working" when its metric is stable for 30 days, not when it's built. Same gating logic as Censor (60 days of real data before analytics doctrine activates).

**5.4 Level-up rule.** When a money model hits its CAC ceiling profitably, the next move is *raising the ceiling* (better model) before *raising spend* (more ads). Legatus proposes budget; this doctrine is the check that approves it.

---

## §6. Ethics Screen — Full Verdict Table

| Mechanism | Verdict | Condition |
| :---- | :---- | :---- |
| Honest-reason discount (launch, founding, overstock) | ✓ | Reason must be true and stated |
| Buy-X-get-Y / quantity bump | ✓ | Standing PHC rule already |
| Real giveaway → consolation offer | ✓ | Real prize, real odds, no fake counts |
| Thank-you-page upsell | ✓ | Standing PHC rule already |
| Honest anchor bundle | ✓ | Anchor must be genuinely sellable |
| Payment-split downsell | ✓ | Same price, easier terms |
| Rollover credit | ✓ | Plainly stated, real math |
| Subscribe & save | ✓ | Only on true consumables; easy cancel |
| Free-plus-shipping | ⚠️ hold | Only if shipping is the real cost; register risk |
| Countdown on a declined offer | ✗ | Fake urgency — banned |
| Decoy pricing | ✗ | Manufactured perception — banned |
| Trial-to-billing traps / cancel mazes | ✗ | Banned |
| Scarcity claims without true inventory limits | ✗ | Banned (honest low-stock display from live Shopify counts is fine) |

**Optimizer-drift note:** Money-model thinking is the highest-pressure doctrine in the stack — it is *explicitly about extracting more per customer*, which is exactly where drift happens. Any external feedback (including ChatGPT's) proposing a mechanism from the ✗ rows gets logged to the drift checklist, not debated.

---

## §7. Augur Integration Protocol

**File placement:** `.claude/skills/augur/references/augur-doctrine-money-models.md`

**Load order in Augur reasoning:** market/awareness diagnosis (Schwartz) → persona \+ appeal estimation (Augur v2 capabilities) → **this module** (offer architecture \+ money\_model\_math) → ethics/optimizer-drift gate last.

**New required fields in every Augur product/niche brief:**

1. `money_model_math:` — per §2 (landed, price, AOV levers, 30-day GP, CAC ceiling, verdict)  
2. `attraction_offer_class:` — which §3 family fits, with register check  
3. `upsell_candidates:` — ranked by functional adjacency, GP per attach  
4. `continuity_potential:` — none / replenishment / true-subscription  
5. `prohibited_scan:` — §6 table checked, drift events logged

**Ad Library extension:** competitor teardowns now name the *money model*, not just the creative — attraction class, visible upsell path, continuity play. A page running great creative on a broken model is a worse signal than mediocre creative on a self-funding model.

**Cross-references (do not duplicate content):**

- Honest reason-why, specificity, testing constitution → Master Report III (Hopkins)  
- Awareness/sophistication staging → Schwartz framework doc  
- Persuasion craft for the offer copy itself → Halbert/Maslen/Scriptor stack  
- Weekly goal → daily steps calendaring against the $10K milestones → Pedersen App Business section, once live

**Quaestor hand-off:** on forge day, Quaestor inherits §2 and §6 verbatim as founding doctrine and owns the live math; Augur retains the research-time application.

---

*Original synthesis — no source text read or reproduced. Doctrine subject to the standing ethics rules and the optimizer-drift checklist without exception.*  
