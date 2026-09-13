# shopify-theme-editor — video intake: Anthony Eclipse, "I Tried Selling Digital Products"

> **PROVENANCE: VIDEO SOURCE.** Speaker: **Anthony Eclipse** — dropshipping YouTuber; sells a
> paid 1:1 e-commerce mentorship, an affiliate AI store builder, and carries a 3-year AutoDS
> sponsorship (disclosed on camera).
> Published: 2026-07-20. Runtime 18:43. URL: https://www.youtube.com/watch?v=XPgffiRhtZM
> Extracted 2026-08-04. **Transcript only — no frames sampled**, which matters here: the
> click path below is reconstructed from narration, not read off the screen.
> **ROUTED 2026-08-04 per Aurelius ruling.**
> Transcript archived (canonical copy):
> `../../scriptor/references/sources/video-XPgffiRhtZM-eclipse-ai-digital-product-72h-transcript.txt`
> STATED/INFERENCE classification applied throughout.
>
> **DEDUP: NEW.** ID, URL, speaker and title grepped tree-wide — no hits.
>
> **This file carries** the alternate-product-template technique only. Everything else from
> this source routed to Scriptor, Faber, Augur, Beowulf, or was held unrouted.

---

## 1. A whole product page delivered as one alternate template file

**STATED · PLATFORM MECHANICS · DEMONSTRATED per narration** [06:22].

Click path as narrated: Shopify admin → **Online Store** → theme **⋯** menu → **Edit code** →
`templates/` → **Add a new template file** → name it **`product.<name>.json`** → clear the
scaffold Shopify pre-fills → paste the generated JSON → **Save**.

What arrives in that single paste: the page's copy, its section order, and its collapsible
tabs. What does **not** arrive and is still set by hand afterwards in the theme customizer:
fonts and colours [06:56].

The speaker explicitly contrasts this with his own prior method — pasting each section
individually through the customizer — and names the gain as **time, not quality** [05:59].
That framing is worth preserving; nothing here produces a better page, only a faster one.

## 2. Why this is not already in our reference — the gap, stated precisely

`references/shopify-theme-structure.md:15–16` currently describes `templates/` as:

> one per page *type* (`index.json`, `product.json`, `collection.json`, `password.json`, etc.
> in Online Store 2.0's JSON template format — these compose sections together for that page
> type)

**That is the default-variant-only description.** It is correct as far as it goes and it is
exactly what makes the hole visible: Online Store 2.0 also supports **alternate templates** —
additional files named `product.<suffix>.json` that sit alongside `product.json` and are
assigned to individual products from the product admin's theme-template selector. Our
reference does not mention that a page type can have more than one template, so a request to
build a bespoke layout for one product would currently route to editing the shared
`product.json` — which changes **every** product page in the store.

**Grep run before this claim was written**, across `SKILL.md`, `CHANGELOG.md`,
`references/shopify-theme-structure.md` and `references/examples/`, on five phrasings:
`alternate template`, `custom template`, `product.<name>.json`, `assign … template`, `template
suffix`. **Zero hits on any of them.** The files searched are real and non-empty — the same
grep returns 27+ hits for `template` generally, so the absence is a genuine gap and not an
empty-file artifact.

## 3. Operational cautions — PHC-specific, ours not the source's

**INFERENCE (PHC synthesis).** The source narrates this as a clean win. Three things it does
not mention that bear on how we would package it:

1. **"Delete all of the text there. Not important."** [06:42] The scaffold Shopify pre-fills
   in a new template file is a working default. Clearing it is fine when the paste is a
   complete template; it is destructive if the paste turns out to be a fragment. Under this
   skill's existing rule that no paste operation may be ambiguous (`SKILL.md:79`), a
   whole-file template paste is a **replace** of a newly created empty file — which should be
   stated as such rather than left as "delete this, paste that."
2. **The rollback snippet still applies.** This skill's step-2 rollback rule (`SKILL.md:41`)
   is easy to skip when the target file is new and therefore has nothing to roll back to. The
   real rollback risk is not the file — it is the **template assignment on the product**. Note
   what the product was set to before.
3. **A JSON template that fails to parse takes the page down.** The existing pre-flight syntax
   check (`SKILL.md:59`) already covers this and is more valuable here than for a Liquid
   section, because the failure surfaces on a live product page rather than in the editor.

## 4. Not adopted from this source

**The two branding prompts themselves** [05:29–06:01] were gated behind a description link and
never shown on screen. Nothing about their contents is recorded here, and none of the output
quality claims can be assessed. The *technique* is the deliverable; the prompts are not.

**The AI store builder** [04:15] is an affiliate placement. Noted for provenance only — this
file makes no claim about it.

---

## 5. Proposed skill changes

**RULED 2026-08-04 by Aurelius.** Outcomes recorded below per the report-to-skill drift-log rule. Coverage verdict produced by the step-4
grep before these were written.

| # | Proposal | Coverage verdict | Status |
|---|---|---|---|
| SE-T1 | Extend `references/shopify-theme-structure.md:15–16`'s `templates/` entry to state that a page type may carry **alternate templates** — `product.<suffix>.json` alongside `product.json`, assigned per-product from the product admin — and that a bespoke single-product layout belongs in a new alternate template, never in the shared default. | **EXTENSION** — and the near-miss names the hole exactly. The existing line covers the default variant only ("one per page *type*"). Five alternative phrasings grepped tree-wide across a verified non-empty file, zero hits. | **APPLIED v1.1.0** |
| SE-T2 | Add to the same entry the narrated click path (Edit code → `templates/` → Add a new template file → name → replace scaffold → Save), so the packaging output can reference where the paste goes. | **EXTENSION**, dependent on SE-T1. Mark as **narrated, not frame-verified** if adopted. | **APPLIED v1.1.0** — marked narrated/not-frame-verified per the ruling |
| SE-T3 | Add a line to the packaging rules: a whole-file template paste is a **replace of a newly created empty file**, and the rollback note should capture the product's **prior template assignment**, not just file contents. | **EXTENSION** of `SKILL.md:41` (rollback) and `SKILL.md:79` (no ambiguous operation). Both exist; neither anticipates a new-file target where the reversible state lives outside the file. | **APPLIED v1.1.0** |
| SE-T4 | *No change* to the paste-status tracker or the pre-flight syntax check. | **WITHDRAWN — ALREADY COVERED.** `SKILL.md:59, 62–69` already handle both, and apply to a JSON template unchanged. | **NO CHANGE NEEDED** — filed as-is per the coverage grep |
