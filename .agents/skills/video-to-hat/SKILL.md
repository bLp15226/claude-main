---
name: video-to-hat
version: 1.0.0
description: Routes knowledge from a watched video into the right PHC skill — the pipeline between "/watch broke down this video" and "the relevant hat actually knows it now." Runs breakdown → route to the owning hat → diff against what that hat already covers → HARD GATE for Ben's approval → apply with version bump and changelog. Default outcome is no change; a video whose content is already covered correctly produces zero edits. Use for "route this video", "which hat is this for", "apply this to Legatus", "does this change anything for us", or any follow-up after /watch asking where new knowledge belongs. Do NOT use for the video breakdown itself (that's the /watch skill — this runs after it), for building a brand-new skill from scratch (that's skill-forge), or for any request that isn't about updating PHC's skills from source material.
handoffs_to: legatus-meta-ads, scriptor, herald-social, centurion-store-health, augur-research, faber-creative-flywheel, vigil-ads-monitor, shopify-theme-editor
expects_from: watch
---

# video-to-hat — Source Material → Skill Updates

Ben continuously feeds in videos with new advertising, copy, and e-commerce knowledge. This skill is the
pipeline that gets the genuinely-new parts into the right hat and keeps everything else out.

**This is a build tool, not a PHC team member.** No Roman rank, no brand voice, no decision authority of
its own — same category as `shopify-theme-editor`.

The core discipline: **the default outcome is no change.** A system that finds something to update in every
video is not learning, it's accumulating noise. Most videos should end at step 3 with "already covered."

## When to use

- After `/watch`, when Ben asks where the content belongs: "route this", "which hat is this for",
  "does this change anything", "apply this to Legatus"
- Ben names a hat directly: "add this to Scriptor"
- A breakdown surfaced something that clearly belongs somewhere and Ben asks what to do with it

**Do NOT use when:**
- The request is to watch/summarize a video — that's the `watch` skill. This runs *after* it, and only on
  request. **`/watch` alone never triggers this pipeline.**
- The request is to create a brand-new skill from an idea — that's `skill-forge`.
- Ben is asking a question about a video's content rather than asking to apply it.

## Workflow

### 1. Breakdown (precondition)

The video must already be broken down — via `/watch` or already in context. Do not re-run `/watch` if the
transcript is already in the conversation.

### 2. Route — which hat owns this?

| Video content | Hat |
|---|---|
| Meta ads mechanics, diagnostics, scaling, campaign structure, budgets | `legatus-meta-ads` |
| Copywriting, headlines, offers, sales pages, email sequences | `scriptor` |
| Organic social, content pillars, posting strategy | `herald-social` |
| Store speed, checkout, trust signals, CRO mechanics | `centurion-store-health` |
| Customer research, avatars, market/audience analysis | `augur-research` |
| Creative production, ad iteration, briefs, creative testing | `faber-creative-flywheel` |
| Monitoring, alerting, reporting cadence, digests | `vigil-ads-monitor` |
| Shopify theme code, Liquid, storefront implementation | `shopify-theme-editor` |
| Genuinely new territory no hat covers | → `skill-forge`, not this skill |
| Interesting but changes nothing | **none — a normal, expected result** |

**Multi-hat is common and fine.** One video routinely splits across hats — the last Meta ads course landed
in Legatus (diagnostics/thresholds), Faber (creative loop), and Vigil (monitoring). Route each finding to
its owner separately rather than forcing one video into one hat.

**Boundary rule:** a finding goes to the hat that *owns the decision*, not the hat that mentions the topic.
Ad creative thresholds are Legatus's (it classifies); creative production method is Faber's (it builds).

### 3. Diff — what is genuinely new?

For each candidate finding, read the target hat's `SKILL.md` **and** its `references/` files before
claiming anything is new. Then sort every finding into exactly one bucket:

- **Already covered** — the hat has it. Say so and move on. No edit.
- **Covered better** — the hat's existing version is more disciplined than the video's. Say so explicitly
  and keep the existing version. This is a real and frequent outcome.
- **Genuinely new** — absent from the hat, and survives the scale check below.
- **Contradicts** — the video disagrees with something the hat already asserts. **Never silently
  overwrite.** Surface both positions, say which has better support, and let Ben decide.
- **Rejected** — new, but shouldn't be adopted. State why.

### 4. Scale and evidence checks — before anything is called an addition

Both checks are mandatory. Most rejected findings fail one of them.

**Scale check.** Most source material comes from agencies running many accounts at high spend. PHC is one
store. Ask explicitly: does this threshold/cadence still work at PHC's volume? Common failures:

- Statistical tests that fire constantly at low daily volume
- Spend-share thresholds that classify everything when there are few live ads
- Monitoring frequencies calibrated to hundreds of accounts
- Minimum spends that assume a budget PHC doesn't run

If it doesn't transfer directly, **adapt it and document the adaptation** — don't adopt it raw and don't
discard it silently.

**Evidence check.** Label what each claim actually is:

- **Mechanism** — how a platform works. Usually adoptable if verified.
- **Practice** — what an experienced operator does. Adoptable as a labeled placeholder.
- **Anecdote** — "this made me $3,600." Never encoded as a threshold. Single unverified results from
  monetized content are not evidence.

Any number entering a skill is labeled as a generic placeholder until PHC's own data replaces it.

### 5. 🛑 GATE — propose, then stop

**Never edit a skill file before Ben's explicit go-ahead in that same turn.** This gate exists because
skipping it is exactly how a video breakdown once turned into an unrequested multi-file build session.

The proposal must show, before any file is touched:
- Which hat(s), and which version bump (patch / minor)
- Each addition, with its **video timestamp** as source
- Each rejection, with the reason
- Every file that would change, including downstream staleness (step 6)
- Total scope in one line, so "that's more than I wanted" is an easy answer

Then **stop and wait.** A general "yes, apply it" covers the changes as proposed — it is not standing
consent for anything discovered mid-edit. If something new surfaces during application, stop and ask again.

### 6. Apply — and check what went stale

On explicit go-ahead:

1. Edit `SKILL.md` and any `references/` files.
2. **Bump the version.** Patch = clarification, no behavior change. Minor = new capability. Update the
   `version:` field and the frontmatter `description` if triggers or lanes changed.
3. **Write a CHANGELOG entry** naming the source video (title, creator, duration, review date), what was
   added, and — importantly — **what was deliberately not added and why.** The rejections are as valuable
   as the additions; without them the same rejected idea gets re-litigated on the next similar video.
4. **Staleness sweep.** Changing a skill's output format or thresholds silently invalidates its golden
   examples and any sibling skill that reads its definitions. Check and report:
   - Does this hat have `references/examples/`? Do they still match the new output format?
   - Do other skills reference this hat's definitions? (Faber and Vigil both read Legatus's.)
   - Did the frontmatter `description` need updating for new trigger phrases or lane boundaries?
   - Does `INDEX.md` need the new version and summary?
5. Report what changed and what's now stale but unfixed.

## Integrity rules

- **Never edit a skill file without Ben's explicit go-ahead in that same turn.** The gate is the entire
  point of this skill.
- **Default to no change.** "Already covered" and "covered better" are successful outcomes. A pipeline that
  produces an edit from every video is manufacturing work.
- **Never re-add what a hat already covers**, even when the video states it more confidently. Check the
  reference files, not just `SKILL.md` — content lives in both.
- **Never encode an anecdote as a threshold.** Single unverified results from monetized content are
  marketing, not data.
- **Never adopt a threshold without the scale check.** Agency numbers applied to a single store are the
  most common way a "improvement" makes a hat worse.
- **Never silently resolve a contradiction.** Surface both positions and let Ben decide.
- **Always cite the video timestamp** for each claimed addition, so any change can be traced back and
  re-checked against the source.
- **Always run the staleness sweep** after applying. An output-format change that leaves golden examples
  demonstrating the old format is a silent regression.
- **Never route to a hat that doesn't own the decision** just because it mentions the topic.

## Output format

**Routing report (step 2-4, before the gate):**
```
Source: <title> — <creator> — <duration> — reviewed <date>

Routing:
  <hat> ← <findings, one line each>
  <hat> ← <…>
  Unrouted: <findings belonging to no hat, or "none">

Diff vs. <hat> (v<current>):
  Already covered:  <item> — <where it lives>
  Covered better:   <item> — <how the existing version is stronger>
  Genuinely new:    <item> [<timestamp>] — <evidence type> — <scale-check result>
  Contradicts:      <item> — <both positions> — YOUR CALL
  Rejected:         <item> — <why>
```

**Proposal (the gate):**
```
PROPOSED — nothing written yet.

<hat> v<current> → v<new>
  + <addition> [<timestamp>]
  + <addition> [<timestamp>]
  Files: SKILL.md, references/<file>, CHANGELOG.md
  Downstream staleness: <examples / sibling skills / INDEX>, or "none"

Not adopting: <item> — <why>

Scope: <n> files across <n> skills.
Apply? Nothing is written until you say go.
```

**Post-apply:**
```
Applied — <hat> v<new>
  Changed: <files>
  Stale and fixed: <what>
  Stale and NOT fixed: <what — flagged for later>
  Still placeholder: <any threshold not yet backed by PHC data>
```

**No-change outcome:**
```
No changes needed. <hat> already covers <the substantive content>.
Notable: <anything worth knowing that still doesn't warrant an edit>
```

## Anti-patterns to avoid

- Editing any file before the gate.
- Treating "no changes needed" as a failed run.
- Finding something to add in every video because an empty result feels unhelpful.
- Adopting a threshold from an agency source without checking whether it works at one store's volume.
- Encoding a creator's revenue claim as a real number.
- Re-adding content that already lives in the target hat's reference files because only `SKILL.md` was read.
- Overwriting an existing rule the video contradicts, instead of surfacing the disagreement.
- Applying changes and skipping the version bump or changelog.
- Leaving golden examples demonstrating an output format the skill no longer produces.
- Expanding scope mid-application because something else looked worth fixing.
- Forcing a multi-hat video into a single hat, or routing to whichever hat mentions the topic rather than
  the one that owns the decision.
