# Reference: Shopify Online Store 2.0 theme file structure

Referenced by `SKILL.md`'s Workflow step 2. Standard Shopify theme architecture — use this to decide where
a generated change actually belongs, and to name output files the way Shopify itself expects.

## Top-level folders

- **`sections/`** — reusable, schema-driven blocks that merchants can add/reorder/configure via the theme
  customizer (e.g. a hero, an announcement bar, a featured collection). Each has a `{% schema %}` block
  defining its settings. **A new homepage section (e.g. the envelope-opening hero) belongs here** —
  `sections/phc-envelope-hero.liquid`, for example.
- **`snippets/`** — small, reusable pieces of Liquid included elsewhere via `{% render 'snippet-name' %}`.
  No schema of their own; not directly customizer-editable. Use for a reusable component referenced from
  multiple places (e.g. a shared card component, a small icon block).
- **`templates/`** — one per page *type* (`index.json`, `product.json`, `collection.json`, `password.json`,
  etc. in Online Store 2.0's JSON template format — these compose sections together for that page type).

  **A page type can carry more than one template.** *Added v1.1.0. Source: Eclipse 2026-07-20.* Alongside
  the default `product.json`, Online Store 2.0 supports **alternate templates** — additional files named
  `product.<suffix>.json` that sit in the same directory and are assigned to individual products from the
  product admin's theme-template selector. The same applies to `collection.<suffix>.json` and `page.<suffix>.json`.

  > **The rule this creates:** a bespoke layout for ONE product belongs in a **new alternate template**,
  > never in the shared `product.json`. Editing the default changes *every* product page in the store —
  > which is almost never what "build a custom page for this product" means. Check which template the
  > target product is actually assigned to before touching anything.

  **Click path to create one** — *narrated by the source, NOT frame-verified; treat as a guide, confirm
  against the live admin before relying on the exact labels:* Shopify admin → **Online Store** → theme
  **⋯** menu → **Edit code** → `templates/` → **Add a new template file** → name it `product.<suffix>.json`
  → replace the scaffold Shopify pre-fills → **Save**. Assigning it to a product is a separate step, done
  from the product's own admin page, not from the code editor.
  **The password/coming-soon page belongs here** — Shopify has a dedicated `templates/password.json` (or
  the older `password.liquid`, depending on the theme's OS 2.0 adoption level) plus whatever sections it
  composes.
- **`layout/`** — the outermost wrapper(s), most importantly `layout/theme.liquid` — the file that wraps
  every page (contains `<html>`, `<head>`, and the main content placeholder). **Site-wide elements like the
  header nav or a global `<head>` tag typically live in a section rendered from here, but the wrapper itself
  is `layout/theme.liquid`.**
- **`config/`** — `settings_schema.json` (defines theme-wide settings shown in the customizer, e.g. color
  swatches, font pickers) and `settings_data.json` (the merchant's actual saved values for those settings).
  **A new global brand token — a color, a font pairing — usually means adding a setting here**, not
  hard-coding a value directly in a template.
- **`assets/`** — static files: compiled CSS/JS, images, fonts. Referenced via `{{ 'filename.css' | asset_url
  | stylesheet_tag }}` or similar Liquid asset filters, not linked as plain relative paths.
- **`locales/`** — translation/string files (`en.default.json`, etc.) for any text Shopify treats as
  translatable content rather than hard-coded template text.

## Practical mapping for common PHC rebuild tasks

- **Homepage envelope-opening hero (the locked centerpiece)** → a new section in `sections/` (schema-driven,
  so it can hold the seasonal-variant setting swapped via the customizer), rendered from `templates/
  index.json`.
- **Password/coming-soon page** → `templates/password.json` (or `password.liquid`), likely composing a
  small dedicated section for the sealed-envelope visual + email capture field.
- **Header nav** → typically a `sections/header.liquid` (or similarly named) section rendered from
  `layout/theme.liquid`, so it appears on every page.
- **A brand color/font token** → `config/settings_schema.json` (add/update the setting) — not hard-coded
  into individual template files, so it stays a single source of truth the customizer can adjust.
- **Product/collection page structure** (per the rebuild's later build-order phase) → `templates/
  product.json` / `templates/collection.json` plus the sections they compose; the existing SatinShear
  template is the stated reference point for "gold standard" structure to align to black-and-gold.

## What this file does NOT do

This is a structural map, not a design decision-maker. It tells you *where* a piece of code belongs once
its content and behavior have already been decided (by Ben, the rebuild brief, or another hat) — it doesn't
decide *what* the section should look like or contain.
