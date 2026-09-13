# FILED 2026-07-29 — disposition (Grant Zuco / AI dropship store teardown)

> **STATUS: ROUTED** (resolved across three passes, 2026-07-29). Four doctrine files filed
> — Scriptor, Augur, Faber, **Centurion**. Item 3 resolved by a split ruling and fully
> filed. **One chunk still HELD:** supplier sourcing (item 6, Beowulf not built). Three
> items logged as **open questions only**. One item routed **out of the skill stack** to app
> build work. This staging folder stays until Beowulf exists.
>
> **UPDATE — pass 3 (2026-07-29, item 3 resolved).** Ben ruled the cart/checkout chunk
> **split**, then authorised the Centurion half after the roster was reported verbatim from
> `CLAUDE.md` for a third time (Centurion: *Built and installed*, "store health, checkout
> integrity"; Vesta: *Sketched only*, customer-care lane, nothing on disk).
> - Offer/AOV merchandising → **FILED** at `scriptor/references/scriptor-video-zuco-ai-dropship-teardown.md`
>   §2A (free-shipping threshold, catalogue depth, cart-drawer gap statement, upsell
>   placement). Proposals S-9…S-11.
> - Customer-experience integrity → **FILED** at
>   `centurion-store-health/references/centurion-video-zuco-ai-dropship-teardown.md`
>   (undeliverable shipping promise, broken review control, Shop Pay, mobile-first audit
>   sequencing, build-once-rotate as out-of-lane, §4.4 checkout customisation as an open
>   question). Proposals CZ-1…CZ-8. **Coverage verified against
>   `store-health-methods.md`:** zero existing hits for shipping/lead-time/delivery,
>   interactive-control testing, mobile/viewport, or Shop Pay — and the existing add-to-cart
>   check tests the **default variant only**, which is the exact blind spot the sticky-ATC
>   defect occupies.

> **PROVENANCE.** Speaker: Grant Zuco — YouTube ecom creator; sells the "Ecom Automated"
> mentorship, owns the spy tool used in the teardown, affiliate-links AutoDS.
> Title: "This AI Shopify Brand Is Making Millions With Claude". Published 2026-07-21.
> Runtime 28:33. URL: https://www.youtube.com/watch?v=XVA3HprcRzc · Extracted 2026-07-29.
> Auto-captions **plus frames** sampled at 10 timestamps (480p format ceiling).
> Transcript archived (canonical copy):
> `../../../scriptor/references/sources/video-XVA3HprcRzc-zuco-ai-dropship-teardown-transcript.txt`

---

## Roster verification performed before filing (ruling precondition)

Ben's roster picture disagreed with the intake report on two names. Checked against
disk, `CLAUDE.md`, and `INDEX.md` on 2026-07-29. **Disk wins, per the ruling.**

| Name | Ben's understanding | Actual | Evidence |
|---|---|---|---|
| **Beowulf** | live (product scouting) | **NOT BUILT** | No `beowulf*` folder in `.claude/skills/`. `CLAUDE.md:56` — "staged, not yet installed." `legatus-meta-ads/SKILL.md` declares a handoff to `beowulf-product-scouting` and labels it "still staged." Every tree hit is a *mention* in another file, never a skill. |
| **Centurion** | possibly retired or folded | **BUILT AND LIVE, v1.0.0** | `centurion-store-health/` holds `SKILL.md`, `CHANGELOG.md`, `store-health-methods.md`, 4 examples. `INDEX.md:61` lists v1.0.0. `CLAUDE.md:48` lists it under *Built and installed*, owning "store health, checkout integrity." Holds a symmetric joint-alert contract with Legatus. |
| **Vesta** (Ben's guess for item 3) | live owner of checkout friction | **NOT BUILT, and not the owner** | No folder, no skill. `CLAUDE.md:64` lists it under *Sketched only*, lane = **customer care**, charter = karbo doctrine §2.7. Checkout integrity belongs to Centurion by charter, not Vesta. |

**Consequence:** the intake report was right on both names and Ben's picture was wrong
in opposite directions — Beowulf less built than remembered, Centurion more.

---

## Disposition

| # | Chunk | Destination | Outcome |
|---|---|---|---|
| 1 | Anxiety-reduction cluster — size chart, model reference, returns placement, on-body imagery | `scriptor/references/scriptor-video-zuco-ai-dropship-teardown.md` §1 | **FILED** |
| 2 | Page architecture, above-fold order, buyer-state model, naming | same file, §2 | **FILED** |
| 3 | Cart/AOV/checkout/Shop Pay + broken review control | Centurion | **HELD — one question outstanding, see below** |
| 4 | Launch curve / duplication / Day-3 budget raise | Legatus | **RULED — NO CHANGE.** Open question logged. |
| 5 | Spy-tool method + direct-traffic objection | `augur-research/references/augur-video-zuco-ai-dropship-teardown.md` §1 | **FILED** (objection included, as ruled) |
| 6 | Supplier lookup / price variance / margin / AutoDS MCP | Beowulf | **HELD — Beowulf not built; waits, per ruling** |
| 7 | Knockoff / IP / image-rights exposure | Augur file §4 | **FILED as a risk note, not a doctrine rule** |
| 8 | Sticky ATC variant-selector defect | **Out of the skill stack** — app build work | **FLAGGED** (background task raised) |
| 9 | Creative-complexity heuristic | Scriptor §3 (primary) + Faber §2 (cross-note) | **FILED both** |
| 10 | Third-party TikTok creative harvesting | — | **REJECTED, not staged.** Open question logged. |
| 11 | Dupe-arbitrage + saturation model | Augur file §3 | **FILED**, with revisit-for-Beowulf note |
| 12 | AI-artifact tells as QA checklist | `faber-creative-flywheel/references/faber-video-zuco-ai-dropship-teardown.md` §1 | **FILED** |
| 13 | Checkout customisation claim ("$2,500/mo") | — | **NO ACTION.** Open question logged. |
| 14 | Intake-frame question | — | **RESOLVED** by ruling; see standing rule below |

Transcript archived once, canonically, under Scriptor (largest share). The Augur and
Faber files carry relative pointers to it.

---

## HELD — item 3, one question outstanding

**The check contradicts the guess, so this is not mine to resolve.** Ben's ruling held
item 3 "pending Centurion/Vesta clarification" and named Vesta as his expectation. The
clarification says Centurion is live and owns checkout integrity by charter, while Vesta
is unbuilt and scoped to customer care.

His standing decision rule ("disk wins if these disagree") points to **Centurion**. But
the `/watch` routing guard requires surfacing a roster disagreement rather than silently
picking a side, and there is a real substantive question underneath the roster one:

- **§4.9 (broken "show more reviews" control)** is unambiguously Centurion — it is
  literally "can a customer complete a purchase / not just does the store look fine."
- **§4.1–4.6 (free-shipping thresholds, catalogue depth for AOV, cart-drawer gap
  messaging, upsells)** is arguably **merchandising and offer construction**, which is
  closer to Scriptor's lane than to store-health auditing. Filing it to Centurion on the
  strength of the word "cart" may put offer mechanics in an auditor's file.

**Question for Ben:** file all of item 3 to Centurion, or split it — integrity defects
(§4.9, and §4.4 as an open question) to Centurion, offer/AOV merchandising (§4.1–4.6) to
Scriptor? Nothing filed either way until this comes back.

---

## HELD — item 6, no question needed

Beowulf confirmed not built. Ruling is explicit: "if Beowulf isn't actually live, this
waits rather than going anywhere else." The cluster stays in `extraction.md` §6.3–6.6.
A pointer-only holding note is recorded at Augur file §2, explicitly marked *not Augur
doctrine*. Possible overlap with the already-staged `karolis-ai-ugc-maxfusion-mcp` and
`hampton-claude-meta-connector` intakes should be checked when Beowulf is built.

---

## OPEN QUESTIONS — logged, nothing filed

**OQ-1 — TikTok Day-3 edit window (ruling item 4).** The source raises budgets on
two-day-old campaigns; Legatus's checklist states "Day 1-3: no edits to a newly launched
ad set" (`diagnostic-taxonomy.md:381`). **Ruled: no Legatus change.** The duplication
cadence already matches taxonomy L77, so there is nothing new there; the edit-window
point is TikTok-specific and Legatus is scoped to Meta's learning phase, and one data
point does not justify grafting a TikTok rule onto a Meta doctrine file.
**Revisit only if PHC actually runs TikTok spend.**

**OQ-2 — Third-party creative licensing (ruling item 10).** Harvesting existing organic
video of a product as ad creative is unresolved on rights, and the source never raises
the question. Not baked into Faber. If revisited it needs a licensing/permission step
attached.

**OQ-3 — Shopify checkout customisation below Plus (ruling item 13).** The source claims
custom checkout normally requires Shopify Plus at "like $2,500 a month" and that a
third-party app achieves it otherwise. **Unverified** — his account of checkout
extensibility is loose and may describe a platform he does not understand. Nothing
filed. If item 3 goes to Centurion, this travels as an open question, never as a
mechanic.

---

## Routed out of the skill stack — item 8

The sticky-add-to-cart variant-selector defect is a literal build defect, not doctrine: a
sticky ATC bar without variant selectors adds the *default* variant, so the buyer
receives the wrong size or colour. Ruled to PHC's live product-page rebuild work
(VeloCurl / SatinShear) rather than to any general. **A background task has been raised
to check whether PHC's current sticky ATC drops variant data.** Not filed to a skill.

---

## Standing rule adopted from this intake

**Off-frame video auto-redirect.** If a pasted video turns out not to match the frame it
was submitted under, `/watch` redirects the staging path itself and flags the mismatch in
the brief, rather than forcing the content into the wrong queue or stopping. Established
by ruling 2026-07-29 on this intake (submitted under a side-project frame, contained no
side-project content). **No change to the `/watch` prompt required** — the behaviour is
already what the command did.

---

## Proposals raised (all PROPOSED, none applied)

- **Scriptor S-1 … S-8** — five applied-class, one modified (naming as a note), two
  **DECLINED**: the offer stack as already covered in three existing references, and all
  performance claims as provisional.
- **Augur A-1 … A-8** — six applied-class, one modified (moat argument labelled as PHC
  synthesis), one **DECLINED** (supplier cluster, held for Beowulf).
- **Faber FZ-1 … FZ-6** — three applied-class including the representation test as a hard
  gate, one modified (explanation-burden as a light cross-note), two **DECLINED**
  (TikTok harvesting rejected; no-fabricated-proof already covered).

**No `SKILL.md` was modified by this intake.** All 14 ethics rejections approved,
including the three keep-mechanic/reject-intent splits (clear returns statement,
us-vs-them block structure, AI-artifact tells).
