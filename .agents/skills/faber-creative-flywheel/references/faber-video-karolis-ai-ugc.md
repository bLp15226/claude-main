# AI UGC TOOLING — REJECTION RECORD + SALVAGED TECHNIQUES — KAROLIS (VIDEO INTAKE)

> **PROVENANCE: VIDEO SOURCE.** Speaker: Karolis — YouTube AI-tools creator. The video is a
> promotional tutorial for **Max Fusion**, a third-party AI-video tool that had just shipped a
> Claude MCP; link in description, affiliate status not disclosed. Also shouts out another
> creator posting Max Fusion workflows on X. No course sold.
> Title: "Claude + Gemini Omni Has Changed AI UGC Forever (Full Tutorial)".
> Published: 2026-07-22. Runtime: 9:13. URL: https://youtu.be/tjuvszCfgM0 ·
> Extracted: 2026-07-28.
> Claim-type breakdown: 14 platform-mechanics / 6 persuasion / **0 performance**.
> Evidence tiers: 12 demonstrated (per narration) / 3 claimed / 5 asserted.
> Transcript archived:
> `references/sources/video-tjuvszCfgM0-karolis-ai-ugc-transcript.txt`
> Extraction basis: **auto-generated captions only, no frames.** "Demonstrated" here confirms
> only that the tool performs the action narrated — nothing about whether output performs.
> STATED/INFERENCE classification applied throughout.
> **ROUTED 2026-07-28 per Aurelius ruling.** This file carries the Faber share: the rejection
> record, production techniques, the approve-before-generate pattern, the faceless PAS format,
> structural analysis of top-performing video, and the mascot-boundary rule clarification.
> Faceless format applied to organic + reply-to-comments → Herald. Beat-for-beat remake and the
> third-party-MCP governance question → HELD in staging, flagged not filed.

## READ THIS FIRST

**The video's central use case is generating photoreal AI people who deliver first-person
product testimonials as if they were real customers.** That is an exact-match refusal under
Faber's existing rule (`SKILL.md`, never fabricate a testimonial — *"This includes AI-generated
'UGC' styled to look like a real customer speaking from experience"*). It was already
adjudicated before this video existed.

This file is therefore weighted toward the **rejection record**, with a small set of salvaged
content-neutral techniques. That is the accurate yield from this source, not a failure to
extract. Roughly 70% of the video's runtime is a demonstration of things PHC will not do.

**Nothing in this file establishes that AI-generated creative converts.** See §6.

---

## 1 — REJECTED: the two testimonial formats

Confirmed by Aurelius 2026-07-28. **Not filed as doctrine anywhere in the stack. Not adoptable
in any form.** Recorded here so the rejection is visible to anyone working this source later.

**1.1 REJECTED — AI person delivering a first-person product review.**
A synthetic presenter describes a garment's softness, fit and construction in the register of
someone who owns and wears it. The narrator's stated quality bar is that the presenter *sounds
like a real person* — i.e. **indistinguishability from a real customer is the explicit success
criterion of the format.**

*Reason:* exact match to Faber's standing refusal. An AI-generated person delivering a
testimonial is the precise thing the rule names. The rule explicitly does not bend for "it's
just a test." Also Herald's parallel rule and the FTC Consumer Reviews Rule's treatment of
fabricated endorsements as a civil-penalty offense. PHC's fake-review history is why both rules
exist.

**1.2 REJECTED — fabricated personal anecdote as the hook. The hardest case in the video.**
A synthetic presenter recounts an invented encounter with a neighbour who supposedly complimented
her hair and asked what shampoo she used, then presents the product as the one she has been using.

*Reason:* this is **double fabrication** — a fake testimonial *and* a fake corroborating witness,
stacked. It invents a specific event whose only function is to serve as third-party social proof,
delivered in first person by a person who does not exist, about a product nobody used. It is
strictly worse than 1.1, which at least only fabricates the endorser.

**Refuse this hardest.** Where 1.1 fabricates *who is speaking*, 1.2 also fabricates *what
happened* — manufacturing corroborating evidence rather than merely an opinion.

---

## 2 — Production techniques (content-neutral, salvaged)

These concern **how frames are produced**, not what claim is made. They survive the ethics filter
intact and are vendor-independent — none of them requires Max Fusion.

**2.1 Last-frame continuity chaining.** To make a multi-clip sequence read as continuous, extract
the final frame of clip N and use it as the seed/first frame of clip N+1. Narrated live as the
tool performs it. *STATED · PLATFORM MECHANICS · DEMONSTRATED PER NARRATION.*

Genuinely useful and fully content-neutral — it applies equally to product b-roll, motion work, or
any multi-shot sequence with no person in it.

**2.2 Character consistency via a reusable character-description prompt.** For multi-scene work
featuring the same character, author the character description **once** and inject it into the
generation prompt for every scene. That is what holds appearance and voice stable across clips.
*STATED · PLATFORM MECHANICS · DEMONSTRATED PER NARRATION.*

> **Dual-use warning — record this alongside the technique, not separately.** This is precisely
> the mechanism that turns a one-off fabricated presenter into a **persistent, recurring
> "customer"** across an entire campaign. The technique is neutral; applied to a synthetic
> spokesperson making experience claims it is the engine of §1's violation at scale. If PHC ever
> uses character consistency, it is for a declared mascot (§4) or non-human subject — never for a
> figure positioned as a real customer. INFERENCE.

**2.3 Mascot generation.** The character can be supplied as an uploaded image or generated by the
tool; he notes GPT Image 2 as an alternative source. *STATED · PLATFORM MECHANICS · DEMONSTRATED
PER NARRATION.* See §4 for the boundary that governs mascot use.

**2.4 Output is clips, not finished video.** Every demo ends the same way — save the clips, stitch
them in external editing software. The tool does not deliver a finished asset, despite the
opening's "one prompt → full video" framing. *STATED · PLATFORM MECHANICS · DEMONSTRATED PER
NARRATION.* Worth holding whenever AI-video tooling is scoped for PHC: budget the assembly step.

---

## 3 — The approve-before-generate pattern

The tool's guided flow interrogates before generating — faceless or character, chain clips or
not, simple or complex, narrator voice, aspect format — then produces **a script plus a visual
outline for approval before any clip is generated**, editable by continuing the conversation.
*STATED · PLATFORM MECHANICS · DEMONSTRATED PER NARRATION.*

> **PHC synthesis — this is the one genuinely good design idea in the tooling, and it is
> vendor-independent.** It puts a human gate between cheap text and expensive generation: the
> outline is free to revise, the clips are not. Structurally it is the same move as Faber's own
> brief approval and the Aurelius routing gate in `/watch` — decide on the cheap artifact, commit
> on the expensive one.
>
> Worth adopting as a **principle for any generative creative workflow PHC runs**, independent of
> tool: never generate assets before the brief/outline is approved. Note this also gives the
> ethics filter a natural place to bite — an outline stating "presenter describes using the
> product for months" gets caught at text stage, for free, before any spend. INFERENCE.

---

## 4 — MASCOT BOUNDARY — rule clarification (RULED 2026-07-28)

**Ruled a clarification, not new doctrine. Faber's core refusal was well drafted and stays
untouched — this closes a gap it did not anticipate, it does not rewrite what is there.**

**The gap.** Faber's rule bans AI-generated UGC *"styled to look like a real customer speaking
from experience."* A visibly synthetic mascot is **not** styled to look like a real customer, so
it does not trip the rule as written. But a mascot delivering a first-person *experience* claim
("I've used this for months") is an endorsement voiced by an entity that does not exist — thinner
ice, even though an obvious cartoon is not the FTC's core target.

**THE RULE, as ruled:**

> **A mascot may carry brand claims. A mascot may never carry ownership or experience claims.**

Permitted: product description, brand voice, feature explanation, problem framing, offer terms —
anything a brand says in its own voice, where the mascot is transparently a brand device.

Refused: any first-person claim of having bought, owned, used, tried, or benefited from the
product; any implied personal history with it; any statement that would read as testimony rather
than as advertising.

**The line in one sentence:** a mascot is the *brand talking*, never a *customer talking*.

---

## 5 — The faceless PAS format (RULED to Faber, not Scriptor)

**Ruling rationale, recorded:** PAS (problem-agitate-solve) itself already lives in Scriptor's
doctrine from the Schwartz/Halbert material. What is new in this source is the **faceless
execution pattern** — a video production template, not a copy principle. Same logic as Blackie's
three-beat structure. Scriptor does not need a doctrine entry for it.

**5.1 The format.** Voiceover over product visuals with **no person on screen at any point**. The
demo's structure: open by naming several specific failure states of the customer's current
situation, escalate to a felt need, pivot to the idea of a reset, introduce the product, close on
one differentiating formulation claim. *STATED · PERSUASION PRINCIPLE · ASSERTED.*

**5.2 Why this one clears the ethics filter cleanly.** Nobody appears. Nobody claims to own or
have used the product. There is no testimonial content of any kind — the ad is the brand speaking
in its own voice about a problem and a product. It clears Faber's rule **on the rule's own
wording**, not by exception.

**5.3 Why it matters structurally for PHC.** It is a direct answer to a standing constraint:
Herald enforces a hard no-Ben-on-camera rule, which removes the most common source of authentic
video presence. A faceless narrated format produces video creative that needs **no presenter at
all** — neither a founder who won't appear nor a fabricated person who mustn't.

**That is the real find in this video**, and it is worth more than the tooling it was
demonstrated with. The organic application of the same insight is Herald's — see
`herald-social/references/herald-video-karolis-faceless-organic.md`.

**5.4 Caveat.** Zero evidence is offered that this format performs. See §6.

---

## 6 — Structural analysis of top-performing video (RULED to Faber)

**Ruling rationale, recorded — and the distinction from Blackie's Ad Library ruling matters:**
Ad Library validation is market/product research, and **Augur owns "is this profitable."**
Analyzing what makes a video's *structure* work is creative research feeding production, and
**Faber owns "how do I build one that performs."** Different question, different owner, same
underlying tool surface.

**6.1 The workflow.** In the tool: open a flow → add a research node → choose Meta Ads or TikTok
→ keyword search → filter by country, sort by most-liked / relevance / recency → returns top
videos with view, like and comment counts. Save one → pass it to a "content analyzer" node → get
back a structural outline of that video. *STATED · PLATFORM MECHANICS · DEMONSTRATED PER
NARRATION.*

**6.2 What Faber takes from it — the abstraction, not the vendor.** The transferable practice is:
**derive structure from what is demonstrably working in a category, then build to that structure
with your own product and your own claims.** Concretely, for a brief that means identifying the
pattern across several top performers — beat ordering, pacing, where the product enters, how the
problem is framed — rather than starting from a blank page or from PHC's own untested instincts.

This is a legitimate and long-standing creative-research practice. It requires no particular tool;
the Meta Ad Library alone supports it, and PHC already has Library access through Augur's lane and
Legatus's connector.

**6.3 THE RULE — pattern, not replica.**

> **Analyse structure. Never replicate a specific creator's execution beat-for-beat.**
>
> **RULE as of 2026-07-28.** Promoted from a held staging flag by Aurelius ruling — see §6.4 for
> why. Faber extracts structure *across multiple* performers to inform an original build.
> Reproducing one identified creator's specific creative is out of scope, whatever tool offers it.

What the Karolis video actually does with its extracted outline is remake **one specific named
creator's video** beat-for-beat with a different product, and the narrator praises the result for
taking the original's storytelling. That is reproducing an identified creator's creative, not
learning from a pattern across many.

Three grounds, in order of how much they should weigh:

1. **The reciprocity test.** PHC would object to this being done to its own ads. A tactic that
   fails that test does not enter the stack.
2. **Derivative-work exposure.** Copying the substance and sequence of a specific identified work
   is a materially different legal posture from building to a genre convention.
3. **It is worse creative practice anyway.** A replica inherits another brand's avatar, offer and
   proof — none of which are PHC's — so it optimises for someone else's customer.

**6.4 Why this became a rule — two independent vendors, ten days apart.**

Held as a staging flag when first encountered here (2026-07-28), on the reading that it might be
one creator's overreach. It was then observed again the same day in an unrelated intake:
**AC Hampton's sponsored tool ships an "ad decoder"** that takes any competitor ad or social post,
analyses it frame by frame, and rebuilds the concept around the user's product
(`../../legatus-meta-ads/references/legatus-video-hampton-claude-connector.md` §7.2).

> **Aurelius, 2026-07-28:** two unrelated vendors shipping frame-by-frame competitor rebuilds as a
> **headline feature** is enough signal that this is becoming standard practice in the market PHC
> watches. It will keep appearing in future intake, and **re-flagging it as an ad-hoc held item
> every time is worse than simply having the rule.**
>
> This formalises a principle already applied twice rather than introducing a new one — the
> "pattern, not replica" language was set at the Karolis ruling and held again at Hampton.

**Practical test when the distinction is unclear:** could the source creator watch PHC's ad and
recognise it as *theirs*? If yes, it is a replica. Structure borrowed across several performers
does not produce that recognition; one video rebuilt shot-for-shot does.

---

## 7 — CALIBRATION: this source contains zero performance data

**No ROAS. No CTR. No hook rate. No spend, conversions, or A/B result** — not for the generated
creatives, not for the tool, not for any format. The only numbers shown are generation times and
third-party view/like counts *inside the research tool*, which are other people's organic metrics,
not results attributable to anything produced here.

> **This is the single most important calibration note on this source.** The video demonstrates
> **production capability only.** Every efficacy claim in it — "very strong UGC strategy," "you'll
> never struggle with content ideas," the implied cost and time savings — is ASSERTED with nothing
> behind it. Nothing here establishes that AI-generated creative *converts*, or that the faceless
> format outperforms anything.
>
> Per Axis 1, **no threshold, no format preference, and no budget decision may be derived from
> this source.** It answers "can this be made?" and is entirely silent on "does it work?" Anything
> PHC adopts from here enters as an untested production option, to be judged by PHC's own account
> data via Legatus's classification. INFERENCE.

---

## 8 — Stated tooling figures (low confidence, recorded for completeness)

Generation times: ~5 minutes for the simple talking-head and the faceless ad; under 10 minutes for
the character talking-head and the remake. *CLAIMED.* Unverifiable, and each excludes the manual
stitching step in §2.4. The count of "12 most popular UGC formats" is the creator's own
categorisation, not an industry taxonomy. *CLAIMED.*

---

## PROPOSED SKILL CHANGES — Faber

**RULED AND ACTIONED 2026-07-28 — Faber v1.2.0.** Status per row below, per the report-to-skill drift-log rule.

| # | Proposal | Rationale | Status |
|---|---|---|---|
| FK-1 | Add the **mascot boundary** (§4) as an addendum to the existing fabricated-testimonial refusal: *a mascot may carry brand claims, never ownership or experience claims.* Place it with the existing rule, marked as a clarification. | Ruled 2026-07-28. Closes a gap the core rule did not anticipate without rewriting it. | **APPLIED v1.2.0** - SKILL.md, as an addendum nested under the existing fabricated-testimonial rule; core rule unchanged |
| FK-2 | Add the **faceless PAS video template** (§5) to `references/brief-templates.md`, noting explicitly that it requires no presenter and therefore answers the no-Ben-on-camera constraint. Flag as untested — no performance evidence exists. | Ruled to Faber. The highest-value item in the source. | **APPLIED v1.2.0** - brief-templates.md -> Structure B, faceless PAS, flagged UNTESTED |
| FK-3 | Add **approve-before-generate** (§3) as a standing principle for any generative creative workflow: outline approved at text stage before any asset is generated. | §3. Vendor-independent, and gives the ethics filter a cheap place to bite. | **APPLIED v1.2.0** - SKILL.md integrity rule + anti-pattern |
| FK-4 | Add **structural analysis of top performers** (§6) as a named brief-input practice, with the pattern-not-replica line stated inline. | Ruled to Faber; the Augur/Faber split is "is this profitable" vs. "how do I build one that performs." | **APPLIED v1.2.0 (deduplicated)** - brief-templates.md -> Structural analysis as a brief input. Defers to FK-6 in SKILL.md for the hard line rather than restating it, per the ruling. |
| FK-5 | Add **last-frame chaining** and **character consistency** (§2) as production notes, with the dual-use warning attached inline to the latter rather than in a separate section. | §2.2. A technique whose main real-world use is the thing we refuse should carry its guard rail in the same block. | **APPLIED v1.2.0** - brief-templates.md -> Production notes, dual-use warning inline |
| FK-6 | Add **pattern, not replica** (§6.3) to `SKILL.md` as a standing rule: analyse structure across multiple performers, never replicate a specific creator's execution beat-for-beat. Include the recognition test from §6.4. | **RULED a rule 2026-07-28** after a second independent vendor shipped the tactic. Currently stated in this reference file only; a rule that governs future intake belongs in the skill body. | **APPLIED v1.2.0 - PROMOTED TO SKILL.md** integrity rules, incl. the recognition test + anti-pattern. No longer reference-file-only. |
| — | **No change to Faber's core fabricated-testimonial rule.** | Verified against `SKILL.md` during extraction — it already covers §1.1 and §1.2 by name and needed no revision. FK-1 is an addendum, not an edit to it. | **NO CHANGE NEEDED** |
