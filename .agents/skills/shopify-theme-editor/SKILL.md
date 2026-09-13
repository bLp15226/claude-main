---
name: shopify-theme-editor
version: 1.1.0
description: Shopify Theme Editor Workflow treats PHC's read-only Shopify connector as a first-class workflow problem — it reads the live theme's current state before generating any Liquid/CSS/JS (avoiding stale-assumption bugs), packages output file-per-asset matching Shopify's real theme structure with an explicit replace/insert/append operation, and tracks paste status (generated → pasted → confirmed-live, verified via a real browser check when connected) so nothing silently falls through the gap between "Codex wrote it" and "it's actually live." Use for "build the [section] for the theme", "update the [snippet]", "package this for me to paste into Shopify". Do NOT use for pure design/brand decisions with no code output yet (that's conversation, or Herald's/Scriptor's lane), or for product/inventory data changes reachable via existing write-capable Shopify GraphQL tools (those already work directly, no packaging needed). This is a build tool, not a PHC team member — no brand voice, no decision-making authority; it implements what's already been decided.
---

# Shopify Theme Editor Workflow

This skill makes generating Shopify theme code safe and trackable in an environment where the connector can
only read the live theme, never write to it. Every change is generated against real current state, packaged
unambiguously, and tracked until it's actually confirmed live — not just handed over and forgotten.

**Explicit non-goal:** this is a build tool, not a PHC team member. It has no Roman rank, no brand voice, no
decision-making authority. It implements design/content decisions that have already been made — it doesn't
originate them.

## When to use

- "Build the [section] for the theme"
- "Update the [snippet]"
- "Package this for me to paste into Shopify"
- Any task from the website rebuild (or elsewhere) that will produce Liquid, CSS, or JS destined for
  Shopify's Edit Code

**Do NOT use when:**
- The task is pure design or brand direction with no code output yet — that's just conversation, or
  Herald's/Scriptor's lane depending on content type. This skill implements decisions; it doesn't make them.
- The task is a product or inventory data change reachable via existing write-capable Shopify GraphQL
  tools — those already work directly, no packaging needed.
- The request is for ad creative, organic content, or brand copy — Legatus's/Herald's/Scriptor's lane
  entirely.

## Workflow

### 1. Read current theme state first
Before generating anything, read the live theme's current state via the connector — the relevant file(s),
their current content, and how they fit into the theme's structure. State plainly what was found. Never
generate against an assumed or remembered state; the connector read is the only source of truth.

For any file being replaced or modified (not a brand-new file), **capture its current content verbatim** —
this becomes the rollback snippet in step 2's output, so Ben always has a one-paste-away revert path if the
new code causes a problem.

> **When the target is a NEW file, the reversible state lives outside it.** *Added v1.1.0. Source: Eclipse
> 2026-07-20.* A brand-new file has no prior contents, so the rollback rule above looks inapplicable and gets
> skipped — but the change is still reversible-or-not depending on something else. For a new **alternate
> product template** (`product.<suffix>.json`, see `references/shopify-theme-structure.md`), the thing that
> actually changed the storefront is the **product's template assignment**, not the file. **Record what the
> product was assigned to before**, and treat that as the rollback note. Reverting means reassigning the
> product, not deleting the file.
>
> Note also that pasting a whole template into a newly created file is a **replace** — of the scaffold
> Shopify pre-fills — not an append. State it that way, per the operation rule below.

### 2. Generate & package
Write the code for each affected file, matching Shopify's real theme structure (see
`references/shopify-theme-structure.md` for where each kind of change belongs — sections, snippets,
templates, layout, config, assets, locales). For every file, state the exact operation:
- **Replace** — the whole file's contents change.
- **Insert** — new content goes at a specific, named location (e.g. "after the `{% schema %}` block," "inside
  the `<nav>` element").
- **Append** — new content is added to the end.

Never leave the operation ambiguous — an unclear instruction risks Ben overwriting more of the live theme
than intended when he pastes.

**Before finalizing, run a basic Liquid syntax sanity check** on every generated block: matching `{% %}` tags
(every `{% if %}` has an `{% endif %}`, every `{% for %}` has an `{% endfor %}`, schema blocks are balanced),
valid `{{ }}` output syntax, and recognizable filter syntax. This is a sanity pass, not a full Liquid parser
— but it catches the kind of typo that would otherwise only surface after Ben pastes it and Shopify rejects
or half-renders the page. If something looks off, fix it before presenting the output, not after.

### 3. Track paste status
Maintain a running table for the current session: each file's status is `generated`, `pasted` (Ben has said
so), or `confirmed-live` (verified — see step 4). Update it every time status changes. This tracking is
within-session only for now — cross-session persistence isn't needed at current build volume; revisit only
if that changes.

### 4. Verify live
Once Ben says a file has been pasted, attempt to verify it actually rendered:
- If `Codex-in-chrome` is connected, navigate to the real live URL and check the change is actually there.
  Mark the file `confirmed-live` only if this check actually succeeds.
- If the browser isn't connected, or the check itself fails or is inconclusive, **ask Ben to confirm
  manually** — never mark something `confirmed-live` on an assumption or because checking felt unnecessary.

## Integrity rules

- **Always read current theme state before generating.** No exceptions — generating against a stale or
  assumed picture is the exact failure mode this skill exists to prevent.
- **Never leave a paste operation ambiguous.** Replace, insert (with exact location), or append — always
  one of the three, stated explicitly.
- **Never claim "confirmed live" without a real check or Ben's explicit word.** A `Codex-in-chrome` check
  that actually succeeded, or Ben directly saying so — nothing else counts.
- **Never make design or brand decisions.** Implement what's already been decided (e.g. a rebuild brief's
  own locked calls). If a request seems to reopen something already decided, flag the tension to Ben rather
  than silently complying or silently overriding it.
- **Doesn't touch product/inventory data.** Existing write-capable tools already handle that directly.
- **No brand voice, no persona, no decision authority.** This skill speaks in plain build-tool terms, not a
  PHC character voice.
- **Captures a rollback snippet for every file being replaced or modified.** The original content is
  preserved verbatim before generating new code — never generate a replacement without one, unless the file
  is brand-new.
- **Runs a Liquid syntax sanity check before presenting output.** Balanced tags, valid output/filter syntax
  — fix issues before packaging, don't hand Ben code you haven't sanity-checked.

## Output format

```
Read: <file(s) checked> — <what was found>

File: <real Shopify path, e.g. sections/phc-envelope-hero.liquid>
Operation: <replace | insert at <location> | append>
```code```
Syntax check: <passed | fixed: <what was wrong>>

[If replacing/modifying an existing file:]
Rollback (original content, in case you need to revert):
```original code```

Paste-status tracker:
| File | Status | Last updated |
|---|---|---|
| <path> | generated \| pasted \| confirmed-live | <this session> |

[When verifying a paste:]
Verification: <Codex-in-chrome confirmed at <URL> | not connected/inconclusive — please confirm manually>
```

## Anti-patterns to avoid

- Generating code without reading current theme state first.
- Leaving the paste operation ambiguous ("just add this somewhere").
- Claiming something is confirmed live without an actual check or Ben's word.
- Reopening an already-locked design decision while implementing it (or silently complying with a request
  that contradicts one) instead of flagging the tension.
- Speaking or acting like a brand-voice persona instead of a plain build tool.
- Replacing/modifying an existing file without capturing its original content as a rollback snippet first.
- Handing over generated Liquid without a basic syntax sanity check — mismatched tags or broken filter
  syntax should be caught before packaging, not discovered after Ben pastes it.
