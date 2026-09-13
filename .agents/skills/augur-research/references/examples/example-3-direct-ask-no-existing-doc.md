# Golden example 3 — Direct question, no existing doc

## Input
"Hey Augur, who are we actually selling the Aurelia throw blanket to?" (No existing foundational doc exists
for this product yet.)

## A great output must assert
- Checks for an existing doc first and confirms none exists (not just assumes).
- **Runs the hunt before reasoning** — searches live sources (Reddit, 3-star reviews on comparable
  products, the Meta Ad Library) rather than answering from category knowledge. Reports what was actually
  pulled, including "the hunt came up thin" if it did.
- Builds the full **six-part** taxonomy now, not just an answer to the audience-profile question alone —
  producing the persistent artifact is the point, even though Ben's question only named one section.
- **Commits to a sophistication stage (1-5) and a lead recommendation** for Scriptor, labeled
  hypothesis-stage if the evidence is thin — but never hedged into "it depends."
- **Names congregations specifically** — real subreddits, accounts, and search strings, not platform names.
- Cites whatever real signal is actually available for this product, or labels hypothesis-stage honestly if
  none is.
- Asks about storage if it hasn't been decided yet for this product/context.

## Why this is the bar
The tempting shortcut here is answering just the audience-profile question Ben literally asked and stopping
there — but that would produce a one-off answer, not the persistent artifact Scriptor/Herald/Legatus can
later pull from, which is the entire point of the skill existing instead of a bare prompt.

**v2.0.0 adds a second shortcut to guard against:** building all six sections from category knowledge
without searching anything. That produces a complete-looking doc that's hypothesis-stage by *omission*
rather than by honest finding — and because every section carries a label either way, the difference is
invisible in the output unless the hunt is actually reported. The `Hunt:` line exists to make skipping it
visible.
