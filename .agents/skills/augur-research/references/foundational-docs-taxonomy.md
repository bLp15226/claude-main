# Augur reference: the 6-part taxonomy, the hunt, storage comparison, confidence convention

Referenced by `SKILL.md`'s Workflow (all steps) and Output format. This file holds content too long to
inline in the skill body.

## The hunt — how signal actually gets gathered

Merged in from the former standalone `augur` skill (v2.0.0). This is the *method* behind Workflow step 2.
Before v2.0.0 that step said "gather available signal" with no procedure, which meant it defaulted to
category knowledge — i.e. hypothesis-stage by omission rather than by finding.

**Hunt live. Do not summarize what you already "know" about a category.** Every claim traces to something
actually pulled: a real review, a real forum thread, a real ad running now. If the hunt comes up thin, say
the data is thin — thin real data beats rich fake data, and PHC tore itself down once over exactly this.

**1. Customer language — the phrasebook.** Search where buyers talk unfiltered:
- Reddit threads for the problem (`r/[condition]`, "[problem] reddit")
- Amazon/retailer reviews of competing products — **especially 3-star reviews**, where people say both
  what's wrong and what they actually wanted
- Facebook groups, niche forums, YouTube comment sections
- Pull **literal sentences** — their words, their grammar, their frustration. Not paraphrases. These become
  Scriptor's hooks verbatim. 10-20 real phrases minimum, or flag the data as thin.
- Cluster into **away-from-pain** ("I can't get through a shift without…") and **toward-pleasure** ("I just
  want to…", "the only one that actually…"). Cite where each cluster came from.

**2. Competitor claims — the sophistication read.**
- Search the category's top products and ads. What is every competitor already claiming?
- Meta Ad Library: long-running ads are ads that work. What hook, claim, or mechanism leads?
- The question being answered: *how many competitors got here first, and what have they already promised?*

**3. Congregations — where she already is.**
- Interest-based: the actual subreddits, IG accounts, YouTube channels, FB groups, Pinterest boards
- Search-based: what she types into Google when she's in pain
- Named and specific per platform — not "social media," but real handles and forums

## The six-part taxonomy — precise definitions

Sections 1-4 are the original persistent taxonomy. Sections 5-6 were absorbed from the former `augur` skill
at v2.0.0 — they are what Scriptor's headline strategy and PHC's traffic targeting actually depend on, and
they were the two things the 4-part version couldn't express.

The riskiest conflation is motivations/objections vs. emotional triggers — they sound similar but answer
different questions. Keep them distinct:

The riskiest conflation is motivations/objections vs. emotional triggers — they sound similar but answer
different questions. Keep them distinct:

1. **Audience Profile** — *who* is buying: demographics/psychographics relevant to purchase decisions
   (life stage, household context, shopping occasion — e.g. "buying a gift" vs. "buying for self"), not a
   generic demographic sketch. Answers: "who is this person, in the specific context of buying this
   product?"

2. **Motivations & Objections** — the *rational* case for and against buying: what practical outcome they
   want (motivation) and what practical reason holds them back (objection) — price, uncertainty about fit,
   a competitor comparison, doubt about quality. Answers: "why would they buy this, and what's stopping
   them, in practical terms?"

3. **Emotional Triggers** — the *feeling* driving the decision underneath the rational case: what emotional
   state they're buying toward or away from (pride, relief, belonging, guilt-avoidance) — not a restatement
   of the motivation. Example distinction: a motivation might be "wants a durable gift" (rational); the
   emotional trigger underneath it might be "doesn't want to look thoughtless/cheap in front of family"
   (feeling). If a "trigger" you've written is just the motivation restated with different words, it's not
   actually a trigger yet — dig one level deeper.

4. **Language Patterns** — the *actual words and phrasing* real customers use for this problem/product
   category (not marketing-speak) — useful for Scriptor/Herald to echo authentic language rather than
   generic ad copy. When real reviews/comments exist, prefer verbatim phrasing over paraphrase. This is
   where the hunt's phrasebook lands: the two clusters (away-from-pain / toward-pleasure) with their
   sources cited.

5. **Sophistication Stage** — *how numb the market already is*, stated as a stage 1-5 with evidence from
   the competitor hunt. Cover: which claims are already exhausted in this category, whether a fresh
   mechanism is still available, or whether the market needs identification-led copy instead. Close with an
   explicit recommendation to Scriptor: **mechanism-led, claim-led, or identification-led**.

   **Do not hedge this one.** Scriptor cannot pick a headline strategy without a stage number and a lead
   recommendation — "it depends" makes the whole doc unusable downstream. Commit based on what the hunt
   pulled, and if the evidence is thin, say the stage is a hypothesis-stage call rather than refusing to
   make it. A labeled guess is usable; no call is not.

   Also flag **which desires/claims are writable now vs. blocked** until the product is tested in-house, so
   Scriptor knows the fence line before it starts.

6. **Congregation Map** — *where she already is*, named and specific per platform: interest-based
   congregations (actual subreddits, accounts, groups, boards) and search-based keywords. This is where
   paid and earned traffic gets pointed, so "social media" or "moms on Instagram" is not an answer — real
   handles and real search strings, or an honest note that the hunt didn't surface them.

### Desire read (folded into section 2)

The former `augur` skill scored desires separately. That content belongs in **Motivations & Objections**
rather than a seventh section — but keep its discipline: for the dominant desires, note **intensity** (how
badly it burns), **staying power** (does it renew or satiate), and **scope** (how many share it), then name
the ONE dominant desire Scriptor should lead with, and why.

## Confidence-labeling convention

Exactly two labels, applied per section (not to the doc as a whole, though the doc also gets an overall
read):

- **validated** — backed by real PHC signal (a specific review, comment, or Legatus ad-performance number).
  Always cite the specific signal, not just the label.
- **hypothesis-stage** — no real PHC signal exists yet; reasoned from general category/market knowledge.
  This is the expected state for most of PHC's current catalog (placeholder products, no real spend yet) —
  it's not a failure state, but it must never be presented with the same confidence as validated findings.

## Storage options — a comparison, not a recommendation

Present both when storage is undecided for a given context. This is deliberately Ben's call, not Augur's —
do not pick one on his behalf:

| Option | What it looks like | Trade-off |
|---|---|---|
| **PHC Project knowledge base** | All products' foundational docs live together in one shared space Ben already uses for PHC context. | Easy to browse everything at once; less natural for a single hat to "check the doc for product X" in isolation without searching. |
| **Dedicated file per product** | Each product gets its own foundational-docs file, referenced by name/slug. | Clean 1:1 mapping for Scriptor/Herald/Legatus to pull "the doc for this product"; more files to manage as the catalog grows. |

Neither option is wired into this skill's actual behavior — the workflow just asks and then stays
consistent with whatever Ben picks for that context. If Ben's answer implies a third option entirely, that's
fine too; these two are starting points from the original brief, not an exhaustive menu.

## Post-mortem template (on a launch outcome)

Mirrors Legatus's post-mortem-on-kill and Centurion's post-mortem-on-resolution — applied here to close the
confidence-calibration loop between what a hypothesis-stage doc predicted and what actually happened:

```
Post-mortem — <product>
Predicted (from doc built <date>): <the hypothesis-stage guess — which section(s) it came from>
Actual outcome: <what really happened, per Ben's statement or real Legatus/Centurion data>
Where the research was right: <specific — which part of the hypothesis held up>
Where it needs recalibration: <specific — which part didn't, and what the real signal shows instead>
Confidence-calibration takeaway: <one reusable line — a pattern to weight differently on the next
  hypothesis-stage doc in a similar category, not a generic "be more careful">
```

Only fires when there's an actual outcome to compare against (a real launch result, real ad performance, or
Ben's explicit statement) — never speculatively, and never for a doc that was already fully validated (there's
nothing to calibrate if the research wasn't a hypothesis to begin with).

## Proactive confidence-upgrade behavior

Don't wait to be asked "is this still good?" If, anywhere in the current conversation, it becomes apparent
that new real signal now exists for a product with a hypothesis-stage doc (Ben mentions ads ran, a launch
happened, real numbers exist), flag the refresh opportunity unprompted — a short heads-up, not a full
unsolicited rebuild. This mirrors the reactive staleness check (see the main taxonomy above) but doesn't
require Ben to remember to ask.
