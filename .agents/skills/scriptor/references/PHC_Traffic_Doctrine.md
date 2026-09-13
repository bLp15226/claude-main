> **⚠ VOICE RULING 2026-07-23 — CONFESSION REGISTER RETIRED (for PHC *copy*).** The Scriptor row's "Brand-as-Attractive-Character voice" and any copy-application of the confession story are superseded: PHC copy now sells transaction-trust — concrete, specific, plain. Authority: `scriptor/SKILL.md` → Voice. **⚠ OPEN QUESTION — NOT ruled on:** Part 5's Master Show ("Confession & Build" as Herald's serialized content pillar) is organic-content strategy, not sales copy; Ben's ruling as transmitted covered Scriptor's register, and his message truncated mid-sentence at "Doctrine changes." Herald's locked pillar is FLAGGED pending Ben — do not act either way from this banner.

# PHC Traffic Doctrine v0.1
### Traffic Secrets (Brunson, 2020), translated for Premier Haven Co. — plus a live audit of the Meta accounts
*Companion to `PHC_Product_Page_Skeleton_v0.1.md`. DotCom Secrets tells you what to do when they arrive. This tells you how they arrive.*

---

## PART 0 — LIVE AUDIT (read this before anything else)

I pulled the Meta accounts. Two findings, one of them urgent.

### Finding 1: The pixel is not tracking anything that matters. 🔴

Two datasets sit on the Premier Haven Co. ad account:

| Dataset | Created | Last fired | Status |
|---|---|---|---|
| **Pixel 7** (`787961757205720`) | May 2025 | **Jul 7, 2026** | Firing |
| **Premier Haven Co.** (`1074335818168118`) | Jul 2025 | **Never** | Dead |

The pixel with PHC's name on it has never fired once. A legacy pixel is quietly doing all the work.

Worse — the events on the live pixel, last 7 days:

**PageView: 66. That's it.**

No `ViewContent`. No `AddToCart`. No `InitiateCheckout`. **No `Purchase`.**

**What this means:** you cannot run a conversion campaign. Meta's algorithm optimizes toward an event it has seen before. It has never seen a PHC purchase. If you launch a Sales campaign tomorrow, Meta has nothing to optimize toward, so it will spend your money finding people who click — not people who buy. You would burn $200 and learn nothing about the product, because the test was never capable of measuring the product.

**Fix before any dollar of spend:** get the Shopify → Meta channel wired to the *correct* pixel, confirm `ViewContent`, `AddToCart`, `InitiateCheckout`, and `Purchase` all fire, then place a test order yourself and watch the Purchase event land. Kill or ignore the dead branded pixel; don't run two.

*This is Centurion's job and Centurion missed it. Add pixel-health to the store-health skill.*

### Finding 2: Six ad accounts, and account hygiene is now a real risk.

- **Kidz Premier** — `DISABLED`. Flagged for unusual activity, all ads paused.
- **Premier Haven** — active, own business, has payment method.
- **Premier Haven Co.** — active, under Del Bosque business, has payment method.
- **Haven** — active, under Del Bosque business, has payment method.
- **testerr** — active, no payment method.
- One unnamed account, active, MCP not enabled.

Three near-identically-named live PHC accounts under two businesses, plus one already-disabled account on the same user. I know the history and I know why they were set up that way. But that history is exactly why the next ban is the expensive one. **Consolidate to one account before you scale spend, not after.** Running the same creative from three accounts is a pattern Meta reads, and the disabled Kidz Premier account is a flag already sitting on the profile.

*Candidate role for Praetorian: account hygiene and ban-risk guard.*

---

## PART 1 — The Book in One Sentence

**Traffic already exists. You do not create it. You find where your dream customer is already congregating, and you throw hooks.**

That's the whole thesis, and it's the correct one. Brunson's three types of traffic, from Secret #4–5:

- **Traffic you EARN** ("work your way in") — organic, borrowed audiences, publishing. Free. Slow. Yours.
- **Traffic you CONTROL** ("buy your way in") — paid ads. Fast. Rented. Disappears when the card declines.
- **Traffic you OWN** — email, SMS, followers. Free forever. The only asset that survives a slap.

Everything earned and everything controlled must be converted into traffic you own, or you're renting a business.

---

## PART 2 — Hook, Story, Offer (the diagnostic instrument)

This is the most useful thing in the book and it costs nothing to adopt tonight.

> **If any campaign, page, ad, or email isn't working, it is always the hook, the story, or the offer.**

- **Hook** — the thing that stops the scroll. First 3 seconds. Image, headline, sound, a weird object.
- **Story** — what earns the right to make the offer. Increases perceived value, builds connection to the Attractive Character.
- **Offer** — what she gets if she acts. If she isn't acting, the offer isn't good enough.

**Why this matters for PHC specifically:** it's the same three-part structure as the product page skeleton. Blocks 1–3 are the Hook. Blocks 4–7 are the Story. Blocks 8–14 are the Offer. **The ad and the page are the same argument at two lengths.** If the ad's hook and the page's hero don't match, she bounces, and you'll blame the product.

**Diagnostic rule for every failed test:**
- Low CTR → the **hook** is broken. Nothing else. Don't touch the page.
- Good CTR, high bounce → the **story** is broken, or the ad promised something the page doesn't deliver.
- Good time-on-page, no purchase → the **offer** is broken. Bundle it, sweeten it, or the price is wrong.

Never fix all three at once. You'll learn nothing.

---

## PART 3 — The Dream 100 (PHC's version)

Chet Holmes's idea, and Brunson's best chapter. He found 167 buyers who controlled 95% of the spend, ignored everyone else, and went from #15 to #1.

**The reframe you need:** you don't chase 100 customers. You chase **100 people who already own your dream customer's attention.** Then you either work your way into their audience, or buy your way in.

For PHC, per collection, list by name:
- Instagram / TikTok accounts she already follows
- YouTube channels she watches
- Podcasts she listens to
- Facebook groups she's in
- Subreddits, forums, Pinterest boards
- Email newsletters she opens
- Google search terms she types when she's in pain
- Competitor brands she's already bought from

**Start with one collection.** Not six. Brunson's Dream 100 became a Dream 736 over a year — but it started as a list of names he wrote down before he had a product to sell.

*This is Augur's job, and it's a better first assignment than sub-niche research: name 100 congregations for one PHC collection.*

---

## PART 4 — The Break-Even Funnel, and Why It Doesn't Work Here Yet

This is the part of the book where physical goods break, and it's the most important math in this document.

Brunson: *"If you have a funnel that is break even or profitable, then you don't have an advertising budget."* Every ad dollar comes straight back. Then you scale to $25K/day.

That's true. It's also built on 90%-margin info products with a $97/mo continuity backend.

**Run PHC's numbers instead:**

```
AOV (single product)              $35
Gross margin @ 35%                $12.25 contribution per order

Cold Meta traffic, new brand:
  CPM                             ~$25
  CTR                             ~1%      →  CPC ≈ $2.50
  Landing page conversion         ~1.5%    (generous for an unknown brand)
  ---------------------------------------------------
  CAC                             ≈ $167 per customer
```

**$12.25 of margin against $167 of acquisition cost.** That's a 13x gap. Even at a heroic 3% conversion, you're at $83 CAC. Still 7x under water.

**Conclusion, stated plainly: PHC cannot profitably buy cold Meta traffic to a single $35 product. Not with better creative. Not with better targeting. The arithmetic doesn't bend.**

Three levers, and you need at least two:
1. **Raise AOV.** Bundle to $80–120. The bump and the offer stack from the page skeleton exist for exactly this reason.
2. **Raise margin.** Which means pricing power, which means brand, which means time.
3. **Sell to traffic you own.** Where CAC is zero and the $12.25 is pure profit, and where a customer buys three times, not once.

**And here's the line that should reorder tonight's plan:** Brunson ran **zero paid ads for the first ten years** of his companies. He worked his way in. He built the list. He only bought traffic once his funnel could break even.

We had this backwards. **Earn before you buy.**

---

## PART 5 — Work Your Way In (what PHC should actually be doing)

Your constraint is money, not time-in-evenings. That's precisely the profile for earned traffic.

**The Master Show.** Brunson's rule: pick **one** channel and publish consistently. Not three. He recommends the platform you already consume most, because you understand its grammar. His first 45 podcast episodes were bad — and nobody was listening, which was the point. You don't find your voice in public; you find it before anyone shows up.

For PHC, the Master Show writes itself. **Confession & Build** is already one of your content pillars. The pivot story is a serialized narrative: *I built an ecommerce store the fast way. I filled it with fake reviews. Here's me tearing it down and rebuilding it in public.* That is a show. People will watch a brand get built honestly.

Note what this does: it makes the founder's story the top of the funnel *and* the story block on every product page *and* the About page. One asset, three jobs.

**The Funnel Hub** (Secret #16). Your site becomes the place all earned traffic lands and converts to owned. Top third of every page: give me an email. The styling guide, the ritual card, the early-access list.

**Traffic you own.** Omnisend is already chosen and free. Brunson's rule of thumb — roughly $1/month per subscriber — is an info-product number, don't take it literally. But directionally: **the list is the only PHC asset that a Meta ban cannot touch.** Given your history, that isn't a nice-to-have. That's insurance.

---

## PART 6 — Meta vs. Google (you asked)

They are different instruments and the difference is **intent**.

| | Meta / Instagram | Google Search |
|---|---|---|
| Mode | **Interruption.** She wasn't looking for you. | **Intent.** She typed the problem. |
| Needs | A hook that stops the scroll | A keyword with volume |
| Copy starts with | Problem or desire (cold) | Product (she's product-aware) |
| PHC status | Pixel broken, 3 accounts, ban history | Not set up |

**Google Search is not available to PHC yet, and it's not close.** Nobody searches "VeloCurl." Brand keywords have zero volume for a brand nobody knows. Generic keywords ("automatic curling iron") are dominated by Amazon, Ulta, and Dyson, and the CPCs will make the Meta math above look cheap.

**Google Shopping / Performance Max is the real Google play — later.** It requires (a) a clean Merchant Center product feed, and (b) conversion data to optimize against. You have neither. Come back after the pixel has 30 days of real Purchase events.

**Available on Google right now, for $0:** Merchant Center **free listings**. Get the Shopify feed clean and submitted. Costs nothing, no ad spend, and it forces the product data hygiene you'll need anyway.

**Brunson's Secret #14 — "After the Slaps and Snaps"** — is the argument for never being single-channel, and he's right. But you can't diversify across zero working channels. Get one working. Then diversify.

---

## PART 7 — The Marketing Army, Mapped

Traffic Secrets is really an org chart. Here's PHC's, with the gaps named.

| Roman | Traffic Secrets function | Status | Next assignment |
|---|---|---|---|
| **Aurelius / Imperator** | Strategy, Hook-Story-Offer diagnosis | Live | Sign-off on every brief states 4 lines: the one dominant desire, the awareness stage, the sophistication stage, and which rejected tactics were checked-and-absent. Can't write those 4 → not ready. |
| **Augur** | Dream 100 — find the congregations | Live | Deliverable becomes a **phrasebook + a stage call**, not a report: away-from-pain / toward-pleasure phrase lists, desire scored on intensity/staying-power/scope, sophistication-stage per category. |
| **Beowulf** | Reverse-engineer competitor hooks (Meta Ad Library) | Live | Five-variable recon; a product isn't test-ready until 4 of 5 are known from live competitor evidence. Model **structure only** — funnel shape, price points — never copy/appeals. |
| **Scriptor** | Hooks + story copy | Live | Rejected-tactics list baked in as hard constraints. Run the claim through Schwartz's verbalization patterns → 15–20 headline candidates per product. Brand-as-Attractive-Character voice. |
| **Herald** | The Master Show — publishing, earned traffic | Live | **Promote to primary.** Every post carries a capture offer (list join / vote) — reach without capture is a miss. |
| **Legatus** | Buy your way in — paid | Live, propose-only | **Stand down** until pixel + AOV support the math. Proposals include breakeven-CPA derivation (price − landed cost = ceiling) and the kill line. Never raids retargeting to extend a cold test. |
| **Centurion** | Store + pixel health | Live | **Add pixel-event monitoring — it missed this.** Extend to follow-up-funnel machinery: retargeting audiences populating, Omnisend events firing, block-level scroll analytics. |
| **Artifex** | Creative production (hooks are visual) | Queued | Build it. Unit of output = an **audition set**: 4–6 genuinely different hook concepts per product, cheap enough to kill five without pain. |
| **Praetorian** | Account hygiene, ban-risk, consolidation | Queued | Build it. Standing weekly metric: % of reachable audience that's **owned (email) vs. rented (social/ad accounts)**. That ratio trending up is the real ban-proofing. |

Note the promotion and the demotion. Legatus was the glamour role. Herald is the one that matches PHC's actual constraint.

---

## PART 8 — Tonight's Checklist, Reordered

1. **Fix the pixel.** Correct dataset, all four events firing, verified with a live test order. Nothing else happens until this is done.
2. **Decide on account consolidation.** One PHC ad account. Pick it.
3. **VeloCurl landed cost.** Still the gate — and now the number that tells us whether *any* paid test is honest.
4. **Bundle math.** What gets AOV from $35 to $90? Bump + next-thing + set. Without this, cold traffic is theater.
5. **Augur runs the Dream 100** for one collection.
6. **Herald picks the channel.** One. The one you already consume.

Ads are step 6, not step 1. The book agrees with me on this one; Brunson just buried it in chapter 9.

---

## APPENDIX — SEQUENCE DOCTRINE (relocated from classics §2.4, 2026-07-23)

**Email sequences are designed as a chain: one job per letter, each ending with a pull toward the next.** (The Coming Soon 4-parter runs on this.) Relocated here because it is Brunson-lineage sequence doctrine — DotCom Secrets' Soap Opera Sequence — and this is the Brunson file in the stack; the 470-page Collier primary contains no letter-chain sequencing, so its old home under Collier was a mis-attribution. **PHC synthesis note:** the one-job-per-letter compression is our operating restatement of the Soap Opera Sequence pattern, not a verbatim Brunson rule; no DotCom Secrets primary file exists in references/ yet, so treat the attribution itself as unverified-secondhand until one lands.
