# Video doctrine extraction — Karolis, AI UGC via Max Fusion MCP + Claude

> **PROVENANCE: VIDEO SOURCE.** Speaker: Karolis — YouTube AI-tools creator (~22k views on this
> upload). The video is a promotional tutorial for **Max Fusion**, a third-party AI-video tool that
> has just shipped a Claude MCP; link in description (affiliate status not disclosed), plus a
> shout-out to another creator posting Max Fusion workflows on X. No course sold.
> Published: 2026-07-22. URL: https://youtu.be/tjuvszCfgM0. Extracted: 2026-07-28.
> Claim-type breakdown: 14 platform-mechanics / 6 persuasion / **0 performance**.
> Evidence tiers: 12 demonstrated (per narration) / 3 claimed / 5 asserted.
> Transcript archived: `sources/transcript-karolis-ai-ugc-maxfusion-mcp.md`.
> STATED/INFERENCE classification applied throughout.
> **STATUS: FILED 2026-07-28 per Aurelius ruling — THIS COPY IS SUPERSEDED.** Do not work from
> this file. The ruled destinations hold the live doctrine; see `HELD-flags-not-filed.md` in this
> folder for the full disposition table and the two held flags. Retained only as the pre-ruling
> record of what was extracted before routing.

**Transcript-only extraction.** No frames pulled. "DEMONSTRATED PER NARRATION" here means the
speaker narrates an on-screen UI action — it confirms the tool *does the thing*, nothing about
whether the output performs.

**Read this first — the honest bottom line.** The video's central use case is **generating
photoreal AI people who deliver first-person product testimonials as if they were real customers.**
That is a named, exact-match refusal in PHC's installed doctrine (Faber SKILL.md:145–150), not a
new judgment call. What survives the ethics filter is small: two content-neutral production
techniques, one legitimate ad format, and one open boundary question. This file is therefore
weighted toward the rejection record rather than toward adoptable doctrine — that is the accurate
yield, not a failure to extract.

---

## Theme 1 — The tooling stack and how the workflow runs

**1.1 The stack.** Max Fusion (third-party AI-video tool) exposes an **MCP endpoint** that connects
to Claude via Settings → MCP → paste URL → connect. Video generation is routed to a chosen model;
the video uses Google's "Omni" model. Output is produced by chatting with Claude rather than
operating the tool's own UI. *STATED · PLATFORM MECHANICS · DEMONSTRATED PER NARRATION.*

**1.2 The MCP auto-installs Claude skills.** Stated explicitly and repeated: installing the Max
Fusion MCP causes "multiple Claude skills" to be "automatically installed," including a named
"Vox style creation" skill. *STATED · PLATFORM MECHANICS · DEMONSTRATED PER NARRATION.*

> **PHC synthesis — flag this on operational grounds, independent of the ethics problem.** PHC's
> entire skill stack is hand-authored, versioned, changelogged, and governed by a roster guard that
> exists specifically because an unverified roster nearly caused a wrongful purge (CLAUDE.md,
> 2026-07-23). A third-party MCP that writes skills into that same directory on install is a
> direct collision with that governance model — not because Max Fusion is presumed hostile (no
> evidence either way), but because auto-installed skills would be un-reviewed, un-versioned, and
> invisible to the INDEX.md discipline. **If Ben ever trials this tool, the skills it installs
> should be treated as untrusted third-party content and reviewed before use.** INFERENCE.

**1.3 The prompt-template pattern.** He supplies bracket-fill templates for "the 12 most popular
UGC video formats," each with a model selector. Workflow: pick template → fill brackets with
product details, *or* skip the details entirely and drop a product image. If the product is hard
to describe, drop the image into Claude and have it write the description first, then feed that
forward. *STATED · PLATFORM MECHANICS · DEMONSTRATED PER NARRATION.*

**1.4 The guided-question flow.** For the Vox-style skill, Claude interrogates before generating:
faceless or mascot · chain clips with last-frame continuity · simple or complex mode · narrator
voice gender · aspect format. It then produces a **script plus a visual outline for approval before
any clip is generated**, and the outline is editable by continuing the chat.
*STATED · PLATFORM MECHANICS · DEMONSTRATED PER NARRATION.*

> **PHC synthesis — the approve-the-outline-before-generating pattern is the one genuinely good
> design idea in the tooling.** It puts a human gate between cheap text and expensive generation.
> That is structurally the same move as the Aurelius routing gate in `/watch` and Faber's own brief
> approval. Worth noting as a pattern, independent of this vendor. INFERENCE.

**1.5 Output is clips, not a finished video.** Every one of the four demos ends the same way: save
the clips locally, **stitch them together in external editing software**. The tool does not
deliver a finished asset. *STATED · PLATFORM MECHANICS · DEMONSTRATED PER NARRATION.* Worth
holding against the implied "one prompt → full video" framing in the opening.

**1.6 Stated generation times.** ~5 minutes for the simple talking-head and the Vox-style ad;
"less than 10 minutes" for the character talking-head and the remake. *CLAIMED.* Unverifiable,
and excludes the manual stitching step.

---

## Theme 2 — Production techniques (content-neutral, separable from the use case)

These are the techniques that survive the ethics filter intact, because they concern *how frames
are produced*, not *what claim is made*.

**2.1 Last-frame continuity chaining.** To make a multi-clip sequence look continuous, the last
frame of clip N is extracted and used as the seed/first frame of clip N+1. He narrates this
happening live ("Claude's extracting the frame and generating the second clip").
*STATED · PLATFORM MECHANICS · DEMONSTRATED PER NARRATION.* This is a real, general technique for
AI video and is not tied to this vendor.

**2.2 Character consistency via a reusable character-description prompt.** For multi-scene work
featuring the same character, a separately-authored character description is written once and
injected into a master generation prompt for every scene, which is what holds voice and appearance
stable across clips. *STATED · PLATFORM MECHANICS · DEMONSTRATED PER NARRATION.*
**Note the dual use:** this is exactly the mechanism that makes a fabricated spokesperson
*persistent and believable across a campaign*, which is what elevates the ethics problem below from
a one-off fake to a manufactured recurring "customer."

**2.3 Mascot generation.** The character can be an uploaded existing image or generated by the tool
(he also mentions GPT Image 2 as an alternative source). *STATED · PLATFORM MECHANICS ·
DEMONSTRATED PER NARRATION.*

---

## Theme 3 — The four formats demonstrated, and where each lands on the ethics filter

| # | Format | What it is | Filter result |
|---|---|---|---|
| 1 | Single-prompt talking head | AI person reviews a garment in first person from apparent ownership | **REJECTED** — §5.1 |
| 2 | "Vox style" faceless narrated ad | Voiceover over product visuals; no person on screen, no ownership claim | **PASSES** — §4.1 |
| 3 | Mascot version of #2 | Obviously-synthetic character on screen delivering the same script | **OPEN QUESTION** — §5.3 |
| 4 | "Authentic style" talking head | AI person delivers a fabricated personal anecdote as lived experience | **REJECTED, hardest case** — §5.2 |

---

## Theme 4 — What is adoptable

**4.1 The faceless problem-agitate-solution ad format.** Demo #2's script is a clean PAS
voiceover: it opens by naming three specific failure states of the customer's current situation,
escalates to a felt need, pivots to a reset, then introduces the product and one differentiating
formulation claim. No person appears, nobody claims to own or have used the product, and there is
no testimonial content of any kind. *STATED · PERSUASION PRINCIPLE · ASSERTED.*

> **PHC synthesis — this is the format worth Ben's attention, for two reasons.** First, it clears
> Faber's rule on the rule's own wording (see §5.4). Second, it sidesteps **Herald's hard
> no-Ben-on-camera constraint** — PHC has a standing structural problem that its founder will not
> appear on camera, and a faceless narrated format is a direct answer to it. The format is also
> vendor-independent; nothing about PAS voiceover requires Max Fusion. INFERENCE.

**4.2 Structural analysis of top-performing content.** The research flow: open a Max Fusion flow →
research node → choose Meta Ads or TikTok → keyword search → sort by most-liked / relevance /
recency → returns top videos with views, likes, comments → save one → pass it to a "content
analyzer" node → get a structural outline of that video. *STATED · PLATFORM MECHANICS ·
DEMONSTRATED PER NARRATION.*

> **PHC synthesis — separate the two halves.** Extracting *structure* from what is working in a
> niche is legitimate competitive research and is already something Augur does natively against the
> Meta Ad Library. What the video actually does with it is different: it feeds the outline back to
> Claude to produce a **remake of one specific creator's video with a different product**, and the
> narrator praises it for taking "the actual storytelling from the original video." That is
> reproducing an identified creator's specific creative, not learning from a pattern across many.
> **The structural-analysis half is adoptable; the beat-for-beat remake of a named video is a
> distinct concern** — derivative-work exposure and, separately, it is the kind of thing PHC would
> object to if done to its own ads. Flagged, not folded into doctrine. INFERENCE.

**4.3 Reply-to-comments-with-video as an organic tactic.** He describes replying to comments with
a short video as "a very strong UGC strategy" that yields "unlimited content ideas." *STATED ·
PERSUASION PRINCIPLE · ASSERTED, with zero evidence offered.* The **tactic** is real and is
Herald's lane; the video's execution of it (a fabricated person answering the comment) is not.

---

## Theme 5 — REJECTED TACTICS (ethics filter, PHC standing rules)

**5.1 REJECTED — AI-generated person delivering a first-person product review.**
Demo #1 is a synthetic woman describing a top's softness, fit, and hem detailing in the register of
someone who owns and wears it. The narrator's stated quality bar is that "she talks about the
product generally sounds like a real person" — i.e. **indistinguishability from a real customer is
the explicit success criterion.**
**Reason:** Faber SKILL.md:145–150 — *"Never fabricate a testimonial, review, customer quote, or
result claim… This includes AI-generated 'UGC' styled to look like a real customer speaking from
experience… an AI-generated person delivering a testimonial is exactly that. This rule does not
bend for 'it's just a test.'"* Also Faber's anti-patterns list (:218) and Herald SKILL.md:60.
Exact-match refusal. **Not adoptable in any form.**

**5.2 REJECTED — fabricated personal anecdote as the hook. The hardest case in the video.**
Demo #4 opens with a manufactured lived-experience story: the synthetic presenter recounts being
stopped by a neighbour in her building's elevator who asked what shampoo she uses because her hair
smelled good, framing the product as the one she has been using every wash.
**Reason:** this is not merely a synthetic presenter — it is a **fabricated specific event invented
to function as third-party social proof**, delivered in first person by a person who does not
exist, about a product nobody used. It is simultaneously a fake testimonial and a fake
corroborating witness. Under the FTC Consumer Reviews Rule fabricated endorsements are a
civil-penalty offense, and PHC has a fake-review history that is precisely why the rule was
written into Faber and Herald. **Not adoptable. This is the format the video promotes most
enthusiastically and it is the one PHC must refuse most firmly.**

**5.3 OPEN QUESTION, not rejected — the mascot format (§Theme 3 #3).**
A visibly-synthetic mascot delivering the PAS script is *not* "styled to look like a real customer
speaking from experience," so it does not trip Faber's rule on that rule's own wording. But if a
mascot delivers a first-person *experience* claim, it becomes an endorsement voiced by a
non-existent entity — thinner ice, even though an obvious cartoon is not the FTC's core target.
**This is a genuine boundary Ben has not yet ruled on**, and it is the most useful open question
this video surfaces. Recommend an explicit ruling: *mascots may carry brand claims but never
first-person experience or ownership claims* — or whatever Ben prefers.

**5.4 NOT a conflict — existing doctrine already governs, and is correctly scoped.**
Per the standing rule I must name which source has the stronger basis where a video contradicts
doctrine. **There is no genuine contradiction to adjudicate here.** Faber's rule is not a vague
prohibition on AI video; it is precisely scoped to *"AI-generated 'UGC' styled to look like a real
customer speaking from experience."* That wording bans demos #1 and #4 by name while leaving demo
#2 (faceless, no person, no ownership claim) untouched. The rule was well drafted and needs no
revision on account of this video. The only thing it does not resolve is the mascot case (§5.3).
Stated plainly so this is not mistaken for a doctrine challenge that needs weighing.

---

## Theme 6 — Performance claims: there are none

**This video contains zero performance data.** No ROAS, no CTR, no hook rate, no spend, no
conversions, no A/B result — not for the generated creatives, not for the tool, not for the
formats. The only numbers shown are (a) generation times and (b) third-party view/like/comment
counts *inside the research tool*, which are other people's organic metrics, not results attributable
to anything produced here.

> **PHC synthesis — this is the single most important calibration note on this source.** The video
> demonstrates **production capability only**. Every efficacy claim in it — "very strong UGC
> strategy," "you'll never struggle with content ideas," the implied cost/time savings — is
> ASSERTED with nothing behind it. Nothing here establishes that AI-generated UGC *converts*.
> Under Axis 1 no threshold, no format preference, and no budget decision may be derived from this
> source. It answers "can this be made?" and is silent on "does it work?" INFERENCE.

---

## Candidate routes (NOT rulings — for Aurelius)

Roster verified against disk 2026-07-28 (same check as the Blackie intake, unchanged):
`augur-research`, `centurion-store-health`, `faber-creative-flywheel`, `herald-social`,
`legatus-meta-ads`, `scriptor`, `shopify-theme-editor`, `video-to-hat`, `vigil-ads-monitor`
installed; on-disk roster agrees with CLAUDE.md; no discrepancy to surface.

| Chunk | Candidate | Confidence |
|---|---|---|
| §5.1–5.2 rejection record; §2 production techniques; §1.4 approve-before-generate pattern | **Faber** | Confident — Faber owns creative production and already owns the rule these violate. Value is largely as a **worked example attached to an existing rule**, not new doctrine. |
| §5.3 mascot boundary question | **Faber** | Confident on owner; needs Ben's ruling on substance before it can be written as doctrine. |
| §4.1 faceless PAS format (paid creative) | **Faber** *or* **Scriptor** | **Ambiguous** — same split as the Blackie three-beat structure: format template (Faber) vs. copy structure (Scriptor). Recommend routing both consistently, whichever way you rule. |
| §4.1 faceless format as an answer to the no-Ben-on-camera constraint (organic) | **Herald** | Confident *if* you want the organic implication captured; Herald owns that constraint. Note this crosses Herald's stated "no paid creative" boundary, so it is the organic half only. |
| §4.3 reply-to-comments-with-video tactic | **Herald** | Confident — organic social, Herald's lane. Zero evidence behind it, so it enters as an untested idea, not doctrine. |
| §4.2 structural analysis of top performers | **Augur** *or* **Faber** | **Ambiguous** — research method (Augur, which already hunts the Ad Library) vs. brief input (Faber). Same ambiguity as the Blackie Ad Library chunk; ruling them together would be consistent. |
| §4.2 beat-for-beat remake of a named creator's video | **No clear owner** | Derivative-work concern. Nearest sketched lane is Praetorian (account safety / risk), unbuilt. Recommend `_staging/unrouted/` absent a ruling. |
| §1.2 third-party MCP auto-installing Claude skills | **No clear owner** | Not an ads problem, so not Praetorian's ban-risk charter either. This is skill-stack governance — arguably belongs with the roster-guard discipline in CLAUDE.md rather than any general. Flagged for Ben. |

## Proposals

**None yet — deliberately.** Per the Aurelius routing gate, proposals are produced at step 10 after
Ben returns a routing ruling. Nothing here has been applied to any SKILL.md.

**Advance notice of the likely shape**, so the ruling can be made with it in view: the highest-value
output of this intake is probably **not** new doctrine but (a) a worked rejection example appended
to Faber's existing rule, (b) a ruling on the mascot boundary, and (c) the faceless-format note as
a possible answer to the no-Ben-on-camera problem. If Ben's ruling is "nothing here changes
anything," that is a legitimate and expected outcome for this source.
