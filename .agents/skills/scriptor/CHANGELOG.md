# Changelog — scriptor


## v2.7.2 - 2026-08-05

**Naming collapsed to ONE name: "Founder's 50."** Ruled by Ben 2026-08-05. It covers **both the
list and the offer** — there is no longer a separate name for the list someone joins and the
group they join.

**Retired, do not reintroduce:**
- **"Premier Perks Club"** — retired earlier the same day (see v2.7.0). Repo-only; never live.
- **"The Haven List"** — the list name in the live welcome email. Retired.
- **"The Founding 50"** — the offer name in the live welcome email. Retired in favour of
  **"Founder's 50"** (apostrophe-s, not "Founding").

**Four names for two things, collapsed to one name for one thing.** A future session finding any
of the three retired names in a doctrine file, a draft, or the live Omnisend account should treat
it as stale and swap it, not preserve it as a distinction.

> **⚠ The collapse breaks a structure the live welcome email depends on — flagged to Ben, not
> fixed here.** That email uses the two names as **two tiers**: everyone joins *The Haven List*,
> and *"you may become part of The Founding 50"* as a subset. Collapsing the names removes the
> distinction, so a straight find-and-replace produces "as part of the Founder's 50 … you may
> become part of the Founder's 50." **One tier has to go.** Exact line-level rewrite handed to
> Ben; Omnisend deliberately not edited.

**Also applied:** The Haven page CTA "Get on the list" → **"Join the Founder's 50."**

**Copy fix, same pass:** the page's opening paragraph read *"tools that work the way the spec
sheet says"* — which contradicted its own curation section four paragraphs later (*"a
manufacturer's spec sheet is proof under a promise. It is never the promise"*). Replaced with
*"tools that do what they're for without a workaround."* Worth noting as a pattern: the spec-sheet
line is doctrine's own phrasing (HARD CONSTRAINT #8) and it got reused as *praise* in the same
piece that later uses it as a *limit*. A phrase that means one thing in doctrine can invert its
meaning in copy — check reuse of doctrine language for exactly this.

**Back burner, recorded so it isn't lost** (Ben, 2026-08-05 — note, don't fix): the live welcome
email closes with *"More is coming soon"* and **nothing is built behind it.** Omnisend holds one
enabled automation (Welcome) and zero campaigns; Emails 2–4 of `PHC_Nurture_Sequence_v2.md` do
not exist. Anyone who signs up today receives one email and then silence. Separate work item.

## v2.7.1 - 2026-08-05

**Packaging status corrected across doctrine: "brand design intent" → "available via TeemDrop,
deferred pending a proven winner"** (Ben, 2026-08-05).

**What was actually wrong.** The envelope, wax seal and thank-you card were written throughout
`PHC_Product_Page_Skeleton.md` in the register of things that exist — sitting in the offer stack,
supplying the Redefinition answer, illustrating the Day-one block, listed as a compounding brand
code. Nothing labelled them as unbuilt. **The correct status is: custom packaging is a paid
service TeemDrop offers, it has not yet been discussed with them, and the spend is deferred until
a winning product justifies it.** Orders ship in supplier packaging; PHC has no physical
touchpoint on the parcel.

**This is a stale-value failure, and worth naming as one** — the doctrine didn't lie, it just
never got updated, and every reader after the fact inherited a plan as though it were an
inventory. It surfaced only because The Haven brief asked for a sensory arrival section and the
packaging constraint forced a check.

**Edited — 9 locations, all now pointing at one canonical status note (Block 17):**
`PHC_Product_Page_Skeleton.md` — Block 17 (rewritten as the status note) · the envelope/unboxing
paragraph under the block list · Block 4 Day-one (the "matte black, gold crest" example is now
flagged as the thing not to write) · Block 6 Redefinition (packaging removed as an available
answer) · Block 12 offer stack + guardrail (**new named error: the phantom stack** — listing
undelivered packaging as stack value is the price-float error in a harder-to-spot form) · the
per-product YAML `offer_stack` · the Parables list · the seasonal-envelope note · the
before-first-page checklist (now: photograph the parcel as TeemDrop actually sends it — which
also produces the evidence for whether the packaging spend is worth making) · the order-form-bump
row. Plus `scriptor-doctrine-consumer-psychology.md` — the wax seal removed from the brand-codes
list, since a code that exists only in doctrine builds no familiarity.

**One distinction recorded because it will otherwise keep recurring:** the wax seal **is** live
as a visual motif (CSS/SVG on the password page) and stays. What doesn't exist is wax on a
parcel. Motif on a screen is honest design; any sentence implying the customer receives one is
not. The two read identically in doctrine and are opposites in fact.

**Unchanged:** the arrival section stays off The Haven page until packaging actually ships. The
page shipped at 367 words on two surfaces (curation + belonging).

## v2.7.0 - 2026-08-05 (same day as v2.6.0 — reverts it)

**The v2.6.0 Haven-page carve-out is reverted.** Ruled by Ben 2026-08-05, hours after
documenting it and before anything shipped. The Haven page was re-briefed to a forward-looking
spine — what the store does *for* the reader, across three experience surfaces (the curation,
the arrival, the belonging) — with the founding act **cut entirely: not compressed, not
softened, absent.** No fabricated-reviews reference, no catalog cull, no past practices, no
"we're different from the scammy stores" comparison. The page never looks backward.

**Net effect on doctrine: the 2026-07-23 transaction-trust register governs every surface
again, with no exception.** The v2.6.0 entry below is kept rather than deleted — the reasoning
in it (statement-against-interest is the only proof device that works at sophistication stage
5) is still sound copywriting doctrine and will be relevant to whoever rules the open question
below. It is superseded as *policy*, not withdrawn as *analysis*.

**⚠ Two conflicts SURFACED, deliberately NOT patched.** Ben's instruction was explicit: surface,
don't resolve. Cutting the confession from one page collides with two records asserting it
brand-wide, and both outrank a single page:
1. **The confession is recorded as PHC's differentiator**, not as one page's device —
   `PHC_Product_Page_Skeleton.md:61, :179, :209`, `scriptor-doctrine-consumer-psychology.md:110`,
   `PHC_Master_Report_Copywriting_Craft.md:53`. `:179` states it flatly: *"that is true, it is
   differentiated, and no competitor can copy it."*
2. **Herald's pillar 1 is "Confession and Build"** — a **locked** pillar name
   (`herald-social/SKILL.md:15`, `INDEX.md:45`), one third of the organic social architecture,
   explicitly tied to the fake-review wipe. Herald's lane, Ben's ruling.

Scriptor's operating position until ruled is the narrow one: the founding act is off The Haven
page, and **no wider inference is drawn in either direction.** No doctrine file was edited on
the strength of a single page's re-brief.

**Also surfaced — an unrelated stale-value contradiction found while checking the above.** The
catalog-cull numbers disagree across doctrine: `PHC_Product_Page_Skeleton.md:179` says 69 → 26
(43 deleted); `PHC_Nurture_Sequence_v2.md:105` says 43 → 26 (17 deleted). They agree only on
the endpoint. Live Shopify on 2026-08-05: **26 active, 51 total** — matching neither starting
figure. At most one of the two is right. Not corrected here (it depends on the ruling above),
but it must be settled before either number is ever published again.

**Edited:** `SKILL.md` — version 2.6.0 → 2.7.0; the carve-out subsection replaced with a
revert notice carrying the open-question block. The locked register itself is untouched, as it
was in v2.6.0.

**Naming ruling — "Premier Perks Club" is RETIRED** (Ben, 2026-08-05). It was the original
setup for what became the Founder's 50 — one thing under two names. The Haven page uses
**Founder's 50** only.

**⚠ Naming state does NOT agree across surfaces — read Omnisend before writing the name again.**
Checked live 2026-08-05 via the Omnisend connector (read-only):
- **Live welcome email says "The Founding 50"** — not "Founder's 50", which is what the repo
  and every recent brief use. Two names for one thing, again, on the two surfaces that are
  actually shipping.
- **Live welcome email calls the list "The Haven List"** — a name that appears nowhere in the
  repo and is arguably better than the generic "the list" the page currently uses.
- **"Premier Perks Club" is NOT in the live email.** It exists only in
  `PHC_Nurture_Sequence_v2.md:31`, whose own Flag 4 already warned that its Email 1 copy
  differs from the live version. That warning was correct; the file is stale, not the account.

**⚠ The nurture sequence is not built.** The Omnisend account holds **two** automations —
Welcome (enabled) and Product Abandonment (disabled) — and **zero** campaigns. Emails 2, 3 and 4
of `PHC_Nurture_Sequence_v2.md` (the Confession, What We're Building, the Founder's 50) do not
exist in any form. Any copy that hands an offer off to "the sequence" is currently pointing at
something that has not been made. Not corrected here — it is a build task, not a doctrine one.

## v2.6.0 - 2026-08-05 *(SUPERSEDED by v2.7.0 the same day — see above)*

**Documented carve-out to the transaction-trust register — scoped to one URL, explicitly not
a re-lock.** Ruled by Ben 2026-08-05 while commissioning "The Haven," the manifesto page
replacing About Us on `premierhavenco.store`.

**The conflict that forced the ruling:** the brief asked for the deleted-reviews founding act
as the structural spine of a page, while `SKILL.md`'s Voice section (locked 2026-07-23) bans
the origin narrative and the deleted-reviews story as positioning outright. Drafting to the
brief without recording the exception would have been register drift of exactly the kind
Hopkins's one-way persona rule (v2.1 rule 2) exists to prevent — the third register in six
weeks, arrived at by accretion.

**What was ruled:** The Haven page is the **single** surface where the founding act is told.
PDPs, ads, email, and social stay transaction-trust without exception — no compressed
version of the story anywhere else. The *Haven Collective* voice (warm, recruiting, "we"/"you",
no founder, no first-person singular) is licensed to that one URL and does not spread.

**The reasoning, recorded so it isn't re-litigated:** the deleted-reviews story is a statement
against interest — the only proof device that still works at sophistication stage 5, where a
bare "we're honest" claim is dead on arrival. Its power depends on being told once, on a page
the reader chose to open. Repeated across the catalog it inverts into a brand performing its
integrity instead of describing its transaction. One surface is the mechanism, not a compromise.

**Standing constraints re-affirmed as governing that page in full:** no existing-customer-base
claim (community is an invitation while PHC has no meaningful sales) · no live catalog count
unless re-verified against Shopify same-day · no selection-process claim beyond what actually
happens · HARD CONSTRAINT #2 — Founder's 50 may be named, but its cap is carried by the
nurture sequence, never asserted on the page.

**Ben's two revisions on the delivered draft, both tightening against the same constraints:**
the hard-cap sentence ("fifty places that exist exactly once… it's arithmetic") was cut from
the page on his call, leaving Founder's 50 named only; the catalog count stayed out despite
being verified live that day (26 active of 51 total — the "26" in `PHC_Nurture_Sequence_v2.md`
checks out against the live store as of 2026-08-05).

**Edited:** `SKILL.md` — version 2.5.0 → 2.6.0; new subsection "Carve-out — The Haven page"
appended to the Voice section, immediately after the consistency note. The locked register
itself is unchanged.



## v2.5.0 - 2026-08-04 (late-filed 2026-07-29 batch)

**LATE-FILED BATCH — read this before reading the version/date sequence.** These proposals were
ruled by Aurelius on **2026-07-29** and filed on **2026-08-04**, six days later. They were
status-flipped to APPLIED on 07-29 but the corresponding edits were never written — a process
failure (label updated, edit never landed) caught by a tree-wide audit on 2026-08-04 that found
**57 affected proposals across 5 generals**, all from the same 07-29 intake session. Every item was
**re-grepped against current doctrine before being written**, per Aurelius's ruling that a verdict
never checked against its destination is an unverified claim wearing an APPLIED label. This is why
there is no 2026-07-29 entry in this file and why the version sequence jumps — **versions are
assigned by filing date, not ruling date**, so this batch sits after the 2026-08-04 Eclipse work
rather than before it.

**Sources:** AC Hampton "Starting Dropshipping From $0" · "One Person Business" · Zuco AI dropship
teardown (all 2026-07-29). **16 proposals, 16 filed, 0 withdrawn — but two were reframed on the
re-grep and one was refiled to a better home.**

**New reference file — `references/scriptor-doctrine-0729-batch.md`,** carrying: the store-is-a-closer
element filter (SH-1) · failed-prior-solution as a required brief input (SH-2) · anti-generic
self-rejection supplied *before* generation, plus approve-every-line (SH-3) · the naming brief,
category-adjacency test and anti-perfectionism sequencing (SH-5) · purchase-anxiety enumeration (S-1)
with fit-and-sizing disclosure (S-2) and returns-adjacent-to-CTA (S-3, mechanic only — the source's
forgetfulness rationale recorded as rejected) · the creative-complexity heuristic (S-5, explicitly
subordinate to the sophistication diagnosis) · the negative-framing title formula with its hard
substantiation guardrail (SO-2) · and the banned-tactics appends (SH-8, SO-6, S-7).

**Reframed on the 2026-08-04 re-grep, and re-ruled by Aurelius the same day:**
- **S-9 / S-10, the AOV threshold mechanism — downgraded NEW → EXTENSION.** The AOV lane was already
  populated: `PHC_Product_Page_Skeleton.md:132` (bundle as the ethical AOV raiser), **`:161` — "Free
  shipping over $X" already on the trust bar** — and `PHC_Traffic_Doctrine.md:135, :207` (bump +
  next-thing + set). The bare threshold existed. Filed as the specific hole instead: **pairing the
  threshold with depth**, the **closable-with-something-wanted guardrail**, and stating the gap in the
  cart drawer. Claiming NEW here would have repeated exactly the false-novelty error that triggered
  this audit.
- **SO-5, the verification gate — reframed to EXTENSION with a cross-reference.** A
  **claim-verification gate** already existed at `PHC_Master_Report_Scientific_Advertising.md:69`,
  attributed there to *Centurion*. The concept was present; Scriptor-side ownership was not.

**Refiled to a better home:**
- **SO-1, decide the monetisation goal before drafting** — ruled as a standalone pre-draft decision,
  but the re-grep found `scriptor-doctrine-collier.md:224`, a 13-item pre-write checklist already
  governing "before drafting any PHC letter, email, or PDP", none of whose items was the monetisation
  goal. **Filed as item 14 on that checklist** rather than as a freestanding rule, with the
  **retrofit** failure mode named.

**Queued, not done:** the verification gate is now held by Scriptor, Faber and Herald in three
different wordings. Aurelius flagged a consistency pass on 2026-08-04 as a small drift risk to close
later. Recorded so it is not forgotten.

## v2.4.0 - 2026-08-04
Minor - one addition to `SKILL.md`'s four-part ad check, one to `references/PHC_Product_Page_Skeleton.md`.
No breaking changes. Routed through the `/watch` **Aurelius routing gate** (Eclipse intake staged, briefed,
ruled, filed). 6 proposals produced, **2 applied, 1 declined, 3 withdrawn by the pre-proposal coverage grep**.

**Source:** Anthony Eclipse, "I Tried Selling Digital Products ($0-$1,000)" (2026-07-20). Per-claim
provenance in `references/scriptor-video-eclipse-ai-digital-product-72h.md`.

**Added to `SKILL.md` - four-part ad check:**
- **Compression under ~20 seconds (SE-1).** All four jobs still run at roughly one sentence each; none is
  dropped or merged, and the exit line may carry the CTA and a benefit restatement together. Compression is
  achieved by specificity, not omission. A short draft missing a job is a defect, not a format constraint.

**Added to `references/PHC_Product_Page_Skeleton.md` - BLOCK 15:**
- **Complementary to *what* (SE-3).** The order-form bump's complement is selected by **adjacency to the
  problem, not the product category** - same occasion or same bad night, not the same catalog aisle. Closes
  a real ambiguity: the block said "complementary" without saying complementary to what.

**Declined:**
- **SE-2** - a timestamped-scene note for step 2. Texture on an already-covered device (the mental movie,
  `consumer-psychology.md:171`, `collier.md:106`). Ruled: keep the stack lean.

**Withdrawn before ruling, by the mandatory coverage grep - recorded because the novelty claims would have
been wrong:**
- The source's five-beat ad structure maps onto the existing four-part check with **no new job and no new
  ordering** (`SKILL.md:78-88`). It is not a new structure.
- Post-purchase upsell placement is already fixed to the thank-you page (`consumer-psychology.md:158`,
  `collier.md:145`), and ours names the bump as the only pre-purchase branch. The source merely conforms.
- The ad's urgency-free close is an existing instance of `SKILL.md:96-97`'s fallback, not a new rule.

> **⚠ ENTRIES BELOW v2.3.0 ARE RECONSTRUCTED, NOT CONTEMPORANEOUS.**
> This changelog was created 2026-07-28, long after the work it records. Scriptor shipped without a
> `version` field or a changelog while the other four skills had both — the gap was flagged during the
> 2026-07-28 video-intake batch and closed the same day.
>
> **Reconstruction basis:** the skill's own `## v2.1` / `## v2.2` section headers, dated banners inside
> `references/*.md`, and the roster line in `CLAUDE.md`. **Git was no help** — `.claude/` has a single
> squashed commit ("Initial backup", 2026-07-26) covering everything, so no per-change history exists.
> **Dates and ordering below are inferred from file content and may not be exact.** Where a date is
> attested inside a file it is marked *(attested)*; otherwise it is an estimate.

---

## v2.3.0 — 2026-07-28
*Contemporaneous entry — the first written as the change was made.*

Minor — one new framework in the skill body, plus the version field and this changelog. No breaking
changes. Routed through the `/watch` **Aurelius routing gate** (four videos ingested 2026-07-28: staged,
briefed, ruled, filed). Source: Piliero, "The Only Facebook Ads Video You Need in 2026" (2026-07-26) — see
`references/scriptor-video-piliero-four-part-ad.md`.

- **The four-part ad check (SP-1)** — a compact draft-check for **ad copy**: call out an avatar → educate
  on the problem → position the mechanism as the *unique* solution → deliver an offer. Placed after the
  12-block anatomy with an **explicit scope boundary**: this governs ad creative, the 12-block anatomy
  governs product pages, and agitation appearing in both is not a reason to merge them. Ruled narrowed to
  ad-copy scope specifically so the two structures stay separate.
  - **The urgency constraint is inline, not a footnote** — deliberately, so it cannot become separable from
    the requirement it qualifies. Step 4's urgency must rest on a real reason-why; absent one, the step is
    satisfied by the risk-limiting half alone and urgency is dropped. This **applies** HARD CONSTRAINT #2
    rather than extending it, and where the two meet the banned-tactics list governs.
- **Avatar callout drives delivery (SP-2)** — a closing note recording that under Andromeda the callout
  *is* the targeting, so a draft with no clear addressee is a targeting problem before it is a copy problem.
  Cross-references `faber-creative-flywheel` v1.1.0 rather than restating the mechanism.
- **Added `version: 2.3.0`** to the frontmatter and created this changelog, bringing Scriptor in line with
  Legatus, Faber, Herald and Augur.

**Unchanged, explicitly:** the banned-tactics list. It already governed step 4 and needed no revision.

**Version-number reasoning:** normalised from the two-part `v2.2` the skill was internally at, to three-part
semver matching the rest of the roster. See the note at the bottom of this file.

---

## v2.2 — 2026-07-23 *(attested)* — RECONSTRUCTED

The largest single revision in the reconstructed history, and the most confidently dated: 2026-07-23 banners
appear at the top of ten reference files.

- **Boron Letters standing rules added** to the skill body as the `## v2.2 Standing Rules` block. The
  companion file records "all §5 items resolved, **applied to SKILL.md v2.2**" *(attested)*, which is the
  primary evidence for the version number.
- **⚠ VOICE RULING — the Confession register was RETIRED** and replaced by the **TRANSACTION-TRUST
  REGISTER**, locked by Ben. This is the single biggest drift correction in the reconstructed history: it
  invalidated PHC-application passages across the entire doctrine stack rather than one file, and was
  handled by banner-stamping every affected reference file in place instead of rewriting them. The
  deleted-reviews story specifically was retired as PHC proof.
- **Master Report numbering (I–IV) retired** *(attested)* — filenames became the identifiers. Legacy
  numbering still appears inside older files (e.g. a "Master Report III" cross-reference in the 07-13 patch)
  and should be read as historical.
- **Doctrine intakes:** Collier (*intake date 2026-07-23, attested*), Karbo, Sugarman, consumer psychology,
  Hopkins (life/biography). Each carries the retired-register banner, so all predate or coincide with the
  ruling.
- **Boron verification ledger updated** per Ben, against physical copies.

## v2.1 — ~2026-07-19 — RECONSTRUCTED (date estimated)

- **Hopkins standing rules added** as the `## v2.1 Standing Rules` block, sourced to
  `PHC_Master_Report_Scientific_Advertising.md`. Specificity-as-artillery and the associated Hopkins
  discipline enter here.
- **Consolidated SKILL.md patch, "Week of 7/13–7/19"** — a three-block patch adding the classics canon to
  the references list among other changes. The date range is attested in the filename; whether it landed at
  v2.1 or spanned into v2.2 is **not determinable** from the files.

## v2.0 — pre-2026-07-03 — RECONSTRUCTED (date estimated)

- **The v2 drop-in upgrade** (`SCRIPTOR_v2_Copywriting_Skill.md`, self-described as a drop-in upgrade to the
  existing skill). This is where the current architecture comes from: the **two diagnoses** run before
  writing (awareness stage, sophistication stage), the **12-block page anatomy**, the **headline engine**
  (15–20 candidates per product via Schwartz verbalization patterns), and the **HARD CONSTRAINTS** list.
- **Foundational doctrine stack:** Breakthrough Advertising, Scientific Advertising, the Copywriting Craft
  report, the Traffic doctrine, the Halbert canon (`scriptor-doctrine-classics.md`, "PHC Copy Doctrine II"),
  and the product-page skeleton.
- **Applied outputs** produced through the upgraded skill, e.g. `PHC_Nurture_Sequence_v2.md`.

## v1.x — pre-2026-07-03 — RECONSTRUCTED (no detail recoverable)

Original Scriptor install. **CLAUDE.md dates the skill "pre-2026-07-03" without further precision, and no
v1-era artifact survives in `references/`.** Recorded as a placeholder so the numbering isn't misread as
starting at v2.

---

## Notes on this reconstruction

**On the version number — why 2.3.0 and not 1.0.0.** Three independent sources agree the skill was already
at **v2.2** before today:

1. `SKILL.md`'s own section headers — `## v2.1 Standing Rules (Hopkins…)` and `## v2.2 Standing Rules
   (Boron Letters…)`.
2. `references/scriptor-doctrine-halbert-boron.md` — "all §5 items resolved, **applied to SKILL.md v2.2**."
3. `CLAUDE.md`'s roster of record — "Scriptor … **v2.2 as of 07-23**."

Starting a fresh changelog at 1.0.0 would have contradicted all three and erased the doctrine work already
shipped. Today's additions are new capability with no breaking change, so: **v2.2 → 2.3.0**, normalised to
three-part semver to match the other four skills.

**`references/scriptor-v3-architecture-review-prompt.md` is not a shipped version.** It is a review prompt
proposing a v3 architecture — a plan, not a release. Scriptor is not at v3 and this changelog does not treat
it as such.

**Two items requested for backfill could not be verified and were NOT recorded as history.** A "Collier
inversion" and a "Karbo phantom rule" were named as drift corrections to include. Grepping the full Scriptor
tree for `inversion`, `inverted`, `phantom`, `retract*`, `corrected`, `reversed` and `superseded` returned no
such rules — the only hits are incidental (a "bigger/smaller/inverted" product-mutation list in the Karbo
file; a "guilt-engineered reply devices" *rejected tactic* in the Boron file). **Neither exists under those
labels.** The drift correction that *is* attested is the 2026-07-23 voice ruling recorded under v2.2. Writing
the two named items in would have manufactured history to match a recollection, which is the failure this
changelog exists to prevent.

**Known gap, not fixed here.** Scriptor's frontmatter still has no `handoffs_to` / `expects_from` keys, which
Legatus, Faber, Herald and Augur all declare. Scriptor is a declared handoff *target* for Faber and Augur but
does not declare its own edges. Flagged, not changed — adding lane declarations is a scope decision, not a
formatting fix.
