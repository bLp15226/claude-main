# Faber reference: brief templates and the iteration/variation split

Referenced by `SKILL.md`'s Workflow step 3. This file holds the templates and the reasoning behind the
winner-vs-potential split that's too long to inline.

## Why winners and potentials get opposite treatment

A **winner** has a proven structure. Its hook, format, offer framing, and avatar fit are all working
together, and you don't know which of them is carrying the result. Changing several at once destroys the
information. So winners get **narrow iteration**: preserve the structure, move one element, run it.

A **potential** has one half of the equation working. Either it earns spend but misses the target (the
audience wants it, the economics don't work) or it hits the target but can't earn spend (the economics
work, almost nobody sees it). Neither is a structure worth protecting. So potentials get **wide
variation**: change the angle, the format, or the avatar substantially, because the goal is to find the
unlock rather than to defend a result you don't have yet.

Getting this backwards — narrowly iterating an unproven ad, or wildly varying a proven one — is the most
expensive mistake in the loop. It burns a full 14-day cycle and produces no learning.

## Winner brief template (narrow iteration)

```
WINNER ITERATION — <source ad id>

Why it qualified: <spend share>% of campaign spend, <ROAS> vs. target <x>
                  Held in: <3d / 7d / 14d>
Concept:          <named Augur avatar> + <angle: the problem/solution pairing>
                  → reaches: <who this creative will actually be delivered to>
Preserved:        <the structural elements that must NOT change — format, offer framing,
                  proof structure, pacing>
Testing:          <the ONE element being moved this iteration>
Variations:       V1 — <the one change>
                  V2 — <a different single change>
                  V3 — <optional third single change>
Brand constraint: <which guideline shaped or limited the concept>
Proof used:       <real proof only — cite the source, or "none — angle carries it">
Handoff:          <Scriptor for copy | creator for production | MCP for generation>
```

**Rule of thumb:** if you can't state what stayed the same, it's not an iteration — it's a new ad wearing a
winner's name.

## Potential brief template (wide variation)

```
POTENTIAL VARIATION — <source ad id>

Why it qualified: <which condition it met — ≥5% spend but missed target
                  | hit target but <5% spend>
                  Held in: <3d / 7d / 14d>
Diagnosis:        <which half is broken — reach or economics — and the read on why>
Concept:          <named Augur avatar> + <angle: the problem/solution pairing>
                  → reaches: <who this creative will actually be delivered to>
                  (may deliberately differ from the source ad's concept — for a
                  potential, shifting the avatar is often the unlock itself)
Changing:         <the substantial shift: angle / format / avatar / offer framing>
Testing:          <the ONE variable this variation is meant to isolate>
Variations:       V1 — <substantially different approach>
                  V2 — <a different substantial approach>
                  V3 — <optional third>
Brand constraint: <which guideline shaped or limited the concept>
Proof used:       <real proof only — cite the source, or "none — angle carries it">
Handoff:          <Scriptor for copy | creator for production | MCP for generation>
```

## Video script brief template

Used when the source ad is video and a new script is needed. Pull the source ad's transcript first — the
existing script is the evidence, not a starting guess.

```
VIDEO SCRIPT BRIEF — off <source ad id>

Source transcript: <pulled | unavailable — say which>
What worked in it:  <the specific beat/hook/claim carrying the result, if identifiable>
Concept:            <named Augur avatar> + <angle>
                    → reaches: <who this creative will actually be delivered to>
Hook directions:    1. <direction, not finished copy>
                    2. <direction>
                    3. <direction>
Shot list:          <beat-by-beat, with what must be visible in each>
Must appear:        <required call-outs, disclaimers, brand marks>
Must NOT appear:    <fabricated testimonial framing, unsubstantiated claims,
                    anything the brand guidelines exclude>
Runtime target:     <seconds>
Handoff:            Scriptor for the actual words → creator/MCP for production
```

## Named video structures

*Added v1.2.0. Two structures worth naming, both usable inside the Video script brief template above.*
**Neither restates the fill constraints** — the `Must NOT appear:` line above and "The proof rule, stated
once" below govern what may fill these beats, and they are not repeated here on purpose.

### Structure A — the three-beat (hook → identification → resolution)

*Source: Blackie 2026-07-27. Observed on a winning ad; the structure is adopted, the ad's content is not.*

| Beat | Runtime | Job |
|---|---|---|
| 1 | 0–3s | A **broad, unresolved** opening line that raises a question it doesn't answer. Breadth is the design goal — the wider the set of people who want the answer, the better the beat works. |
| 2 | 3–6s | **Identification.** A second person in a comparable situation, narrowing from "anyone curious" to "the person this is for." |
| 3 | — | **Product as the resolution** to the state beats 1–2 created — not a feature list. |

Curiosity gap → identification → solution. Beat 1 buys attention broadly, beat 2 spends it on the right
person, beat 3 converts the state into a product.

> **⚠ The ad this was extracted from is ethically rejected in full** — it filled beats 1 and 2 with
> fabricated first-person bereavement. **The structure travels; that content does not.** Beat 1 does not
> have to be a personal anecdote to be broad and unresolved — a question, an observation, a problem
> statement or a demonstration all work. See the proof rule below for what may fill these beats.

### Structure B — faceless PAS (no presenter at all)

*Source: Karolis 2026-07-22.* **UNTESTED — no performance evidence exists for this format.** It enters as
an available option, not a recommendation.

Voiceover over product and lifestyle visuals, **no person on screen at any point**: name several specific
failure states of the viewer's current situation → escalate to the felt need → pivot to the idea of a reset
→ introduce the product with one differentiating claim.

**Why it earns a place in this file:** PHC has a standing structural problem in video — the founder will not
appear on camera (Herald's hard constraint), and fabricating a presenter is refused. **A faceless format
needs no presenter at all**, so it resolves the gap without touching either rule rather than seeking an
exception to one. The organic application of the same point is Herald's; this entry is the paid template.

## Structural analysis as a brief input

*Added v1.2.0. Source: Karolis 2026-07-22.*

Derive structure from what is demonstrably working in a category — beat ordering, pacing, where the product
enters, how the problem is framed — **across several top performers**, then build to that structure with
PHC's own product, avatar and claims. This is a legitimate and long-standing creative-research practice and
needs no particular tool; the Meta Ad Library alone supports it.

> **Pattern, not replica.** The hard line and the recognition test live in `SKILL.md`'s integrity rules —
> read them there, they are not restated here. In short: several performers in, an original build out.

### The operative boundary — where analysis ends (FH-1, FH-2, FO-2)

*Ruled 2026-07-29, filed 2026-08-04 post-grep. Late-filed batch; see the CHANGELOG note for v1.4.0.
Extension of the pattern-not-replica rule above, which forbids without saying where analysis stops.*

> **Screenshots may inform what you build; they may not become what you ship.**

And its companion, which resolves the ambiguity a source can walk straight into — complying at one
layer while violating at another:

> **Compose from the pattern; do not edit the artefact.**

Calibration pair:

| Doing this | Verdict |
|---|---|
| Reading six top performers, extracting the shared beat order, building your own asset to it | **Allowed** — this is the practice |
| Taking one performer's asset and changing the text, the product, or the colour on it | **Refused** — that is editing the artefact |

**The brief must state that copy is regenerated, not adapted (FH-2).** Any brief borrowing structure
carries this line explicitly. **The prompt is not the safeguard — the practice is.** A brief that
says "make it different" while handing over a source asset has not protected anything.

**Single-source formula cloning is excluded (FH-4)** even where the decomposition below is adopted.
Decomposing one performer into axes and then rebuilding that same performer with substitutions is
replication with extra steps.

**Style-and-structure transfer onto your own subject (FO-3)** is the positive counterpart, and it is
stated because a rule that only forbids gives the operator no next action: take the *manner* — beat
order, pacing, register, framing — and apply it to PHC's own product, avatar and claims. *(Labelled
PHC synthesis.)*

**Evidence base (FO-1).** Niche quilting is the third logged instance of this rule, and the first to
arrive with frame-verified data rather than assertion. It strengthens the rule; it does not change
it. Full table in `faber-video-oneperson-faceless-youtube.md` §1.1–1.2.

### The three axes for reading and briefing short-form ads (FH-3)

*Ruled 2026-07-29, filed 2026-08-04. **Filed in part** — see the withdrawal note below.*

Read and brief a short-form ad along three named axes:

1. **Hook** — the opening that buys the next two seconds.
2. **Visual proof** — what the viewer is shown, as distinct from what they are told.
3. **Pacing** — cut rhythm and how fast the beats arrive.

The value is the shared vocabulary: "this ad's problem is pacing, not hook" is actionable in a way
that "it didn't work" is not.

> **WITHDRAWN — ALREADY COVERED.** The second half of FH-3 as originally ruled — *"vary one axis at a
> time and name it in the brief"* — was withdrawn on 2026-08-04 after the coverage grep, and
> re-ruled by Aurelius the same day. The WINNER ITERATION template above already encodes it:
> `Testing: <the ONE element being moved this iteration>` and `V1 — <the one change>`, with pacing
> and proof structure already named in `Preserved:`. One-variable-at-a-time is not merely covered —
> it is built into the form Faber fills out. Recorded rather than silently dropped.

## Production notes

*Added v1.2.0. Source: Karolis 2026-07-22.* Content-neutral techniques, vendor-independent.

- **Last-frame continuity chaining.** For a multi-clip sequence that must read as continuous, extract the
  final frame of clip N and use it as the seed frame of clip N+1. Applies equally to product b-roll and
  motion work with no person in it.
- **Finish bar for test creative.** *Added v1.3.0. Source: Eclipse 2026-07-20.* A legitimately-produced
  asset may ship at **low production value** — rough cut, visible seams, not the highest quality — because
  the test decides, not the polish. Do not hold a variation back for finish alone.
  > **The caveat is the point, and it does not get trimmed.** Cheap production does **not** raise the
  > bloat-guard ceiling on live-ad count. The constraint on how many variations run has never been how
  > hard they are to make — it is the budget's ability to give each one meaningful spend
  > (`legatus-meta-ads/references/diagnostic-taxonomy.md:236`: at $50/day PHC supports 7 live ads total).
  > A low finish bar makes each asset cheaper; it does not make the ceiling higher. Read as permission to
  > flood, this rule does damage.
  >
  > **Not to be confused with the rejected Karolis bar** (`faber-video-karolis-ai-ugc.md:46–48`), whose
  > stated success criterion was that a synthetic presenter be *indistinguishable from a real customer*.
  > That is a bar on **deception** and was rejected. This is a bar on **finish**, and applies only to
  > assets that are legitimate to begin with. Opposite kinds of claim — never cite one for the other.
- **Character consistency.** For multi-scene work featuring the same character, author the character
  description **once** and inject it into every scene's generation prompt — that is what holds appearance
  and voice stable across clips.
  > **Dual-use warning, stated here rather than elsewhere on purpose:** this is precisely the mechanism that
  > turns a one-off fabricated presenter into a **persistent recurring "customer"** across a campaign. The
  > technique is neutral; applied to a synthetic figure making experience claims it is the engine of the
  > thing Faber refuses. Use it for a declared mascot (within the mascot addendum's limits) or a non-human
  > subject — never for a figure positioned as a real customer.

## Platform constraints on the asset itself

*Added v1.2.0. Source: Piliero 2026-07-26.*

**Advantage+ creative enhancements — the rule, which outlives the toggle names:**

> **If it alters the media, off. If it only enhances around the media, on.**

Off: cropping, colour change, video conversion, animation, visual and product touch-ups, generated
backgrounds, music, brightness. On: overlays and dynamic overlays, dynamic description, text improvements,
enhanced CTA, summaries, relevant comments, reveal-details-over-time, spotlights.

The specific toggles change constantly and this list is **perishable** — the heuristic is the durable part.
**The Faber-specific reason, which the source doesn't give and which is the stronger one:** letting the
platform alter the media means the asset *served* is not the asset *briefed*, so the winner/potential
classification feeding the next cycle measures something Faber did not produce and cannot deliberately
reproduce. The flywheel depends on those being the same object.

**⚠ UNVERIFIED — single-asset composition spec.** One practitioner reports that Meta now requires a single
**16×9 asset, vertical, with a 4×5 safe zone**, rather than per-placement uploads. If accurate this is a
**briefing-time** constraint: the subject, product and any text must sit inside the narrower safe area from
the moment the shot is framed, and it belongs on the `Shot list:` line above.
**Not binding until confirmed** against Meta's own advertising documentation or the live upload flow via the
connector. Two grounds for caution: it is one practitioner's account, and the report was two days old at
extraction — a genuinely new change is also the most likely thing to be described imprecisely.

## Hook rate — read Legatus, don't restate it

*Added v1.2.0.* Hook rate is a **Legatus-owned shared definition** (`legatus-meta-ads/references/
diagnostic-taxonomy.md` → "Hook rate"), the same arrangement Vigil has. Faber reads it.

What Faber needs in one line: it is the creative-quality leading indicator that predicts which variation
the algorithm will fund — **with no PHC-validated threshold yet.** Do not brief against a hook-rate target
until Legatus derives one from PHC's own account; report PHC's own creatives against each other instead.

## The proof rule, stated once

Every template has a `Proof used:` line and it is not optional. Ad creative makes claims, and PHC's
history makes this a live risk rather than a theoretical one.

- **Real proof** = an actual customer review, an actual result with a citable source, an actual
  before/after with the real inputs. Cite where it came from.
- **Not proof** = an AI-generated person describing an experience, a composited "typical customer," a
  plausible-sounding statistic, a review rewritten from a competitor's, a result claim with no source.
- If a concept needs social proof and none exists, the correct move is a **different angle** — product
  demonstration, founder-build story, mechanism explanation — not manufactured proof.

The FTC Consumer Reviews Rule attaches civil penalties to fabricated endorsements, and a generated
spokesperson delivering testimony is the clearest possible case. This applies to test creative exactly as
much as to production creative.

> **Which ground is doing the work — read this before reasoning about a new case.** *Added v1.3.0.
> Source: Eclipse 2026-07-20, third instance of this rule firing.*
>
> The refusal rests on **two independent grounds**, and collapsing them produces wrong answers at the edge:
>
> 1. **The fabricated-presenter ground.** A synthetic figure presented as a person is refused **as such** —
>    `SKILL.md:145–148` and the faceless-format entry above (*"fabricating a presenter is refused"*). This
>    ground does not depend on what the figure says.
> 2. **The fabricated-testimonial ground.** A figure making a first-person experience claim is an
>    endorsement, which is the FTC case stated above.
>
> **The edge case, which has now actually occurred:** a synthetic presenter delivering a *spokesperson
> read* — "this is for you," "there's a 14-night plan" — makes **no experience claim** and is therefore
> NOT caught by ground 2. It is still refused, by ground 1. Two of the three sources that have tripped this
> rule (Karolis 2026-07-22, Blackie) were testimonial cases; Eclipse 2026-07-20 was not.
>
> **A likeness problem is a third, separate matter** and survives both: generating a figure from an
> identifiable real person's photograph is a consent issue regardless of the script. Never let a
> non-testimonial script be read as clearing that.

## The AI-asset QA gate (FZ-1, FZ-2, FZ-3)

*Ruled 2026-07-29, filed 2026-08-04 post-grep. Late-filed batch. Faber routes generation to external
tools and had **no artefact-review step at all** before this — verified absent by grep on 2026-08-04.*

**A production-time gate, run on every generated asset before it is used.** Not a style opinion —
a defect check.

**Ordering rules, and they matter for cost (FZ-2):**

1. **Audit the background first.** Six of the seven common tells are background failures — warped
   architecture, repeated texture, nonsense text on signage, impossible shadows, melted hardware,
   objects merging into each other. The subject is where the model spent its effort; the background
   is where it didn't.
2. **Review generated assets as a set, not one at a time.** One class of failure — the same face,
   the same room, the same lighting recurring across what should be independent shots — is visible
   only in aggregate and invisible per-asset.

*(Ordering is PHC synthesis; it makes the checklist meaningfully cheaper to run.)*

**Checklist:** hands and fingers · text and signage · background architecture and repetition ·
shadow and reflection consistency · product-surface fidelity (the thing being sold must be
photographically correct even where the scene is not) · cross-asset repetition · **the
representation test.**

> ### The representation test — a hard gate, distinct from the quality checks (FZ-3)
>
> **Does the asset depict what the customer actually receives?**
>
> This is not a quality question and it does not pass by looking good. An asset that is flawless and
> shows a product PHC does not ship — a different colourway, an included accessory that isn't
> included, a size or finish that doesn't exist — **fails**, and fails harder than one with six
> fingers.
>
> **This is the boundary that makes the QA checklist adoptable at all.** Without it the checklist
> reads as permission for the practice it was extracted from: generating attractive product imagery
> untethered from the actual item. With it, the checklist is what it should be — a floor on
> honesty first and craft second.

## Cycle log (carry forward between cycles)

Faber is stateless between sessions. Every cycle ends with a log line so the next cycle can diff:

```
Faber cycle log — <date> — cycle <n> — <n> briefs (<w> winner / <p> potential)
  Tested: <variables> | Guard: <n> of <max> slots used | Re-classify: <date>
```

On the next cycle, diff against this line explicitly. If no prior log is available, **ask Ben** rather
than assuming this is the first cycle ever run — same "ask, don't invent" rule Legatus uses for the king
goal and the verdict log.
