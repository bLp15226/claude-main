# Premier Haven Co. — Master Email Template

The reusable "skeleton" every PHC email inherits. Build the frame once, fill it
forever — the same way we built the product-page skeleton. This is what makes PHC
recognizable in the inbox: welcome, Founding 50, launch, seasonal — all the same frame.

> **House aesthetic — LOCKED.** Every PHC email is an *elegant scorched letter*: warm
> aged-tan parchment, a fine dark char (sooty, luxury — not campfire) bleeding off all
> four edges, dark-sepia serif body (never pure black), gold reserved for the brand name /
> dividers / the single emphasized line, and the PHC gold crest logo on a black wax-seal
> plaque at the foot. This feel is
> not chosen per email — it lives in the skeleton, so **every template inherits it
> automatically.** Don't rebuild the frame for a new send; only fill the slots. To evolve
> the look, retune the generators in `assets/` and regenerate — every email updates at once.

## Files

| File | What it is |
|------|-----------|
| `phc-email-template.html` | **The blank skeleton.** Start every new email from a copy of this. |
| `phc-welcome-email.html` | **Filled example** — the founding-charter welcome letter poured into the slots. Reference, don't edit for a new send. |
| `assets/` | All nine image assets — **already generated and provided** (see below). Includes `gen-burn.js` / `gen-assets.js`, the scripts that made them. |

---

## The art (all generated — nothing to source)

Every image is **already in `assets/`**, generated procedurally (dependency-free Node,
no Canva step). The email previews and ships as-is. The two generator scripts live in
`assets/` so you can re-tweak colors/roughness and regenerate any time:
`node assets/gen-burn.js assets` and `node assets/gen-assets.js assets`.

| Filename | What it is | Size | Status |
|----------|-----------|------|--------|
| `assets/phc-parchment-aged.png` | **The letter background** — your real `Charred Letter Template.png`, lightened for text legibility + downscaled. Fixed sheet (no-repeat); long letters fade to the cream fallback, Outlook shows cream. | 640 × 1138 | ✅ from your texture |
| `assets/phc-parchment-bg.png` | Seamless cream parchment tile — now only the **outer backdrop** behind the card (tiles both axes) | 600 × 600 | ✅ generated |
| `assets/phc-corner-left.png` | Top-**left** gold corner flourish (scroll terminals + red/teal accent dots), transparent | 300 × 300 (shown 150) | ✅ generated |
| `assets/phc-corner-right.png` | Top-**right** flourish — mirror of the left | 300 × 300 | ✅ generated |
| `assets/phc-logo.png` | **The real PHC logo** (transparent gold crest + wordmark), sits on the black footer plaque | ~1280px wide | ✅ in place |
| `assets/phc-wax-seal.png` | ~~Red wax seal, embossed "P"~~ — **superseded by the real logo above.** File kept but no longer referenced. | 200 × 200 | ⚠️ retired |
| `assets/phc-edge-left.png` | **Charred left-edge strip**, vertically seamless, tiles down the whole letter | 28 × 1200 | ✅ generated |
| `assets/phc-edge-right.png` | Charred **right**-edge strip | 28 × 1200 | ✅ generated |
| `assets/phc-edge-top.png` | Charred **top**-edge strip, tiles horizontally | 1200 × 28 | ✅ generated |
| `assets/phc-edge-bottom.png` | Charred **bottom**-edge strip | 1200 × 28 | ✅ generated |

**Want a more photographic look?** Any of these is a drop-in swap — keep the exact
filename and replace the PNG (e.g. a Canva "Florentine vine-scroll corner" or a
photoreal "scorched paper edge"). The generated set is a solid, on-brand floor, not a
ceiling. The corners in particular are a clean geometric flourish — tasteful, but if you
want true Renaissance vine-scroll, that's the one worth swapping.

### Two honest notes on the visuals

1. **The edge strips must match their display size (they're 28px because email can't
   scale background images).** If you swap in your own, keep the width (left/right) or
   height (top/bottom) at 28px, or the feathered burn won't blend at the card seam.

2. **Corners sit in a top band, not overlapping the text.** True corner-overlap needs
   absolute positioning, which email clients strip. So the two ornaments live in the top
   row — left- and right-aligned — framing the top corners, the email-safe reading of
   the vision.

3. **The scorched edges are edge-strip images, not a CSS effect.** A real burn can't be
   faked with CSS in email — Outlook strips gradients and box-shadows, and there's no
   reliable edge-masking. So the card is framed on **all four sides** by narrow table
   cells that **tile a charred-paper strip** (left/right tile vertically, top/bottom tile
   horizontally) around the full letter, however long it runs. **Graceful fallback:** if
   the images don't load (or a client blocks them), each strip cell falls back to a solid
   dark-char color (`#3a2c17`), so the edges still read as burnt bands rather than
   breaking.

### Hosting the images

Inline `src="assets/..."` works for local preview only. **For real sends, images must
live on a public URL** (your Shopify CDN, Cloudflare, Imgur, or your ESP's own image
host). Before sending: upload the four PNGs, then find-and-replace `assets/` with your
hosted base URL, e.g. `https://cdn.premierhaven.co/email/`.

---

## How to build a new email (the whole workflow)

1. **Copy** `phc-email-template.html` → `phc-<name>-email.html` (e.g. `phc-founding50-email.html`).
2. **Fill the six slots** (that's all you touch — never edit the frame):

   | Slot | What goes in it | Length |
   |------|-----------------|--------|
   | `{{PREHEADER}}` | Hidden inbox-preview text. No pitch. | ~40–90 chars |
   | `{{HEADER}}` | Small uppercase kicker under the corners | 2–5 words |
   | `{{TITLE}}` | The letter's title / decree heading | short line |
   | `{{BODY}}` | The letter. Wrap each paragraph in the `phc-body-p` pattern (below). | as needed |
   | `{{EMPHASIS_LINE}}` | The **one** gold line per email | one line |
   | `{{CLOSING}}` | Sign-off (default: "We're Premier. / Welcome to your Haven.") | 1–3 lines |

3. **Also replace** `{{UNSUBSCRIBE_URL}}` and the `[Company address here]` line in the
   footer (legally required for bulk email — CAN-SPAM).
4. **Test before sending** (see checklist below).

### Body paragraph pattern

Each paragraph in `{{BODY}}` should use this exact wrapper so mobile scaling works:

```html
<p class="phc-body-p" style="margin:0 0 18px 0;">Your paragraph text here.</p>
```

To bold a phrase in deep sepia (like "43 products, gone."):

```html
<strong style="color:#3a2c17;">your phrase</strong>
```

### The emphasis line is portable

The gold emphasis block is a self-contained `<tr>`. In the blank template it sits
**after** the body as the default position. But the "one gold line" often belongs
**mid-letter** (in the welcome email, "Family, not a transaction." lands in the middle).
To move it: cut the entire `<!-- EMPHASIS LINE -->` `<tr>...</tr>` block and paste it
between two `<tr>` body blocks wherever the line should fall. `phc-welcome-email.html`
shows exactly this — the body is split into part 1 (confession) and part 2 (the ask)
with the emphasis block between them.

**One gold line per email.** That's the rule. If everything is emphasized, nothing is.

---

## Design tokens (keep every email consistent)

| Token | Hex | Used for |
|-------|-----|----------|
| Parchment fallback | `#f3e9d2` | Card background (shows when texture image fails) |
| Body backdrop | `#efe6d0` | Area around the card |
| Sepia ink | `#48381f` | Body text — **never pure black** |
| Deep sepia | `#3a2c17` | Titles, bolded phrases |
| Muted gold | `#9c7c3c` | Dividers, wordmark rule |
| Readable gold | `#8a6a2e` | Gold text (kickers, emphasis line) — darkened so it's legible on cream |
| Border/hairline | `#d8c9a3` | Card border, emphasis rules |
| Muted red | `#8c3b2e` | Accent (lives mainly in the corner ornament art) |
| Teal | `#2f6b6b` | Accent (lives mainly in the corner ornament art) |

**Font stack (web-safe — no calligraphy web fonts, they won't load):**
```
Georgia, "Palatino Linotype", Palatino, Garamond, "Times New Roman", serif
```
The handwritten/calligraphy feel comes from the **corner ornaments and wax seal art**,
not the type. The body stays a readable classic serif on purpose.

---

## Why it's built this way (the email-safe rules)

Real HTML email ≠ web HTML. This template obeys the constraints that keep it rendering
in Gmail, Outlook, and Apple Mail:

- **Table-based layout, all styles inline.** The `<style>` block in the head is
  *progressive enhancement only* (media queries + dark mode). Clients that strip it —
  many do — still get the full inline-styled frame.
- **Ghost tables** (`<!--[if mso]>`) force the 600px width in Outlook, which ignores
  `max-width`.
- **Background image + solid `bgcolor` fallback.** Where the parchment texture can't
  load (notably Outlook desktop, which won't tile a CSS background), the client shows
  clean cream `#f3e9d2`. Graceful degradation by design — not a bug.
- **Web-safe serif stack**, single-column, fluid-hybrid → collapses cleanly on phones.
- **Hidden preheader** controls the inbox preview snippet.

### Pre-send test checklist

- [ ] All 8 images uploaded to a public host; `assets/` paths swapped for hosted URLs.
- [ ] `{{UNSUBSCRIBE_URL}}` and company address filled in (legally required).
- [ ] Sent a test to a **Gmail** address, an **Outlook** address, and viewed on an
      **iPhone** (Apple Mail) — the three that matter most.
- [ ] Confirmed it reads correctly with **images turned off** (alt text + cream
      fallback should still look intentional).
- [ ] Preview text shows the `{{PREHEADER}}` line, not the first body sentence.
- [ ] Only **one** gold emphasis line in the email.

> Tip: paste the final HTML into a tester (Litmus, Email on Acid, or the free
> [Gmail/Outlook preview in Mailchimp/Klaviyo]) before a real send. Rendering bugs
> hide until you see the actual clients.

---

## The point

Build the frame once, fill it forever. Every PHC email pours into this same parchment
letter — so the inbox learns to recognize us on sight. Same discipline as the
product-page skeleton: consistency is the asset.
