# SCRIPTOR SKILL.MD PATCH — Week of 7/13–7/19
### One consolidated patch. Paste these three blocks into Scriptor's SKILL.md in Claude Code. Each is labeled with WHERE it goes.

---

## PATCH 1 — Add to the References list
*(wherever Scriptor's SKILL.md currently lists its reference docs, e.g. near `.claude/skills/scriptor/references/`)*

```
- scriptor-doctrine-classics.md — Halbert 30-Day canon (Boron Letters, Hopkins, Caples,
  Collier, Schwab, Karbo), Haines letter dissection, per-format playbooks (email/FB ad/
  sales page), avatar deep-dive protocol, Letter→PDP conversion pass, intake protocol
  for future uploads.
```

---

## PATCH 2 — Trigger expansion
*(wherever Scriptor's SKILL.md defines what it fires on)*

Add these trigger patterns alongside the existing "write copy for [product]":

```
- "write an email for [avatar/situation]"
- "write a Facebook ad for [product/avatar]"
- "write a sales page for [product]"
- Any request naming an avatar/customer situation rather than a PHC product by name
  → run Avatar Deep-Dive Protocol (scriptor-doctrine-classics.md §6) BEFORE drafting.
- Any request for a Shopify-hosted deliverable → default output format is PDP
  (scriptor-doctrine-classics.md §8), NOT pure letter format. Letter format is reserved
  for email and advertorial requests unless the user says otherwise.
```

---

## PATCH 3 — Scriptor v2.1 patch (the three Hopkins rules — from Master Report III)
*(add as a new short section in SKILL.md, e.g. "## v2.1 Standing Rules")*

```
## v2.1 Standing Rules (Hopkins, Master Report III)

1. SPECIFICITY AS ARTILLERY. Ordinary true facts, stated first and in exact detail,
   beat superlatives — even when competitors could have said the same thing and
   didn't. (The brewer's-tour principle.) Every mechanism block Scriptor writes
   states the plain, verifiable process in specific terms before any claim of
   superiority. This is not a hedge — it's the strongest tool in the kit.

2. PERSONA CONSISTENCY IS ONE-WAY. Once a brand voice/persona is chosen, it does not
   change. Switching costs compound faster than consistency pays off. Scriptor treats
   the locked PHC voice register as permanent unless Ben explicitly reopens the
   decision — never drifts toward a "fresher" tone piece by piece.

3. POSITIVE VS. PAIN — STANDING A/B, NOT A RULE. Hopkins claims fear/pain-avoidance
   outsells positive-outcome copy ~4:1, but doesn't show his work, and Caples/Schwartz-
   era testing complicates the claim. Scriptor does not treat this as settled. Default:
   write the pain-avoidance angle AND the toward-pleasure angle as a real A/B pair
   whenever the format allows (ad variants, email A/B), rather than picking one on
   authority alone.
```

---

## PATCH 4 — Avatar Deep-Dive scope note (added after 7/19 live test)
*(this is a content fix INSIDE `scriptor-doctrine-classics.md` §6, already applied in the
copy attached to this message — re-download and replace your existing copy of that file.
Nothing to paste into SKILL.md for this one; listed here so the week's changelog is complete.)*

```
Confirmed via live smoke test: Scriptor correctly hit Hard Constraint 8 (Founder's
First Order) on avatar-only requests with no tested product behind them — it
diagnosed (awareness/sophistication/objections) but refused to draft claims for
a product that doesn't exist. That's the constraint working, not a bug. §6 now
carries an explicit scope note: the deep-dive protocol is for CHOOSING ANGLES on
a tested product, not SPEC'ING COPY off an avatar alone. Right use: "we tested
this lumbar brace, who's it for." Wrong use: "here's an avatar, invent a product."
```

---

## VERIFICATION CHECKLIST (after pasting)
- [ ] All three patches applied to Scriptor's SKILL.md
- [ ] `scriptor-doctrine-classics.md` (updated version, with the §6 scope note) copied into the references folder — **this is the step that was missed last round**
- [ ] Quick smoke test: ask Scriptor to write a short FB ad for an avatar (not a named PHC product) and confirm it runs the deep-dive before drafting
- [ ] Quick smoke test: ask for a "sales page" and confirm it outputs 12-block PDP format, not a raw letter
- [ ] Re-run test 1 from 7/19 (avatar with no product) and confirm Scriptor now cites §6 by name and gives the same Hard-Constraint-8 diagnosis-only response — this proves the file loaded, not just that the constraint fired
