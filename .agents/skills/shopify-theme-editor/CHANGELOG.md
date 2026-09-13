# Changelog — shopify-theme-editor


## v1.1.0 - 2026-08-04
Minor - one substantial addition to `references/shopify-theme-structure.md`, one to `SKILL.md`'s rollback
step. No breaking changes. Routed through the `/watch` **Aurelius routing gate**. 4 proposals produced,
**3 applied, 1 withdrawn by the pre-proposal coverage grep**.

**Source:** Anthony Eclipse, "I Tried Selling Digital Products ($0-$1,000)" (2026-07-20). Per-claim
provenance in `references/shopify-theme-editor-video-eclipse-ai-digital-product-72h.md`.

**Added to `references/shopify-theme-structure.md` - `templates/`:**
- **Alternate templates (SE-T1).** A page type can carry more than one template: `product.<suffix>.json`
  alongside the default `product.json`, assigned per-product from the product admin. **The rule this
  creates:** a bespoke layout for ONE product belongs in a new alternate template, never in the shared
  default - editing the default changes every product page in the store. The prior entry described
  `templates/` as "one per page *type*", which is the default-variant-only framing and is exactly what
  made the hole visible.
- **Click path (SE-T2).** Edit code -> `templates/` -> Add a new template file -> name -> replace scaffold ->
  Save; assignment is a separate step from the product's own admin page. **Marked narrated-not-frame-verified**
  per the ruling - the source was transcript-only, so nobody should mistake it for confirmed UI behaviour.

**Added to `SKILL.md` - step 1 (read current state / rollback):**
- **When the target is a NEW file, the reversible state lives outside it (SE-T3).** A brand-new file has no
  prior contents, so the rollback rule looks inapplicable and gets skipped - but for a new alternate product
  template the thing that changed the storefront is the **product's template assignment**. Record what the
  product was assigned to before; reverting means reassigning, not deleting. Also: pasting a whole template
  into a new file is a **replace** of Shopify's scaffold, not an append.

**Withdrawn before ruling, by the coverage grep:**
- Paste-status tracking and the pre-flight syntax check (`SKILL.md:59, 62-69`) already cover JSON templates
  unchanged. No new rule needed.

## v1.0.0 — 2026-07-03
Initial install via Skill Forge (full route, auto mode).
- A build-tool workflow for generating Shopify theme code (Liquid/CSS/JS) in an environment where the
  connector can only read the live theme, never write to it. Explicitly NOT part of the PHC persona roster —
  no Roman rank, no brand voice, no decision-making authority.
- Always reads current theme state via the connector before generating anything, avoiding stale-assumption
  bugs.
- Packages output file-per-asset matching Shopify's real Online Store 2.0 theme structure (sections/
  snippets/templates/layout/config/assets/locales), with an explicit replace/insert/append operation for
  every file — never left ambiguous.
- Tracks paste status within-session (generated → pasted → confirmed-live). Confirmed-live requires either
  a successful `claude-in-chrome` check against the real live URL, or Ben's explicit confirmation — never
  assumed. Matches the anti-fabrication discipline already established across `legatus-meta-ads`,
  `augur-research`, `centurion-store-health`, and `herald-social` in this project.
- Rollback-snippet capture (ideation A2, accepted at the final gate) — the original content of any file
  being replaced/modified is preserved verbatim, giving a one-paste-away revert path.
- Liquid syntax sanity check (ideation B4, accepted) — a basic balanced-tags/valid-syntax pass before
  packaging, catching typos before a live paste rather than after.
- Novelty verdict: PROCEED, local overlap 10/100 (the lowest of any skill in this project). Ecosystem scan
  was incomplete due to a `WebSearch` session limit — estimated low-risk given the pattern's narrow
  operational specificity, explicitly endorsed by Ben as acceptable rather than re-scanned.
- No `handoffs_to`/`expects_from` — composes with nothing in the PHC roster.
- Verify: Trigger Arena precision/recall/F1 = 1.0, confirmed (not assumed) against all 4 installed roster
  skills; 4/4 golden examples passing, grounded in the real PHC website rebuild workload (password page,
  the gated homepage envelope animation, header-nav live verification, a rollback/syntax-check scenario).
