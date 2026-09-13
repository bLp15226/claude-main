# Faber — video intake: Anthony Eclipse, "I Tried Selling Digital Products ($0-$1,000)"
## Production techniques (mostly already ours) + the ethics case study

> **PROVENANCE: VIDEO SOURCE.** Speaker: **Anthony Eclipse** — dropshipping YouTuber; sells a
> paid 1:1 e-commerce mentorship (pitched 16:39), an affiliate AI store builder, and carries a
> 3-year AutoDS channel sponsorship (disclosed on camera 09:13).
> Published: 2026-07-20. Runtime 18:43. URL: https://www.youtube.com/watch?v=XPgffiRhtZM
> Extracted 2026-08-04. **Transcript only — no frames sampled.**
> **ROUTED 2026-08-04 per Aurelius ruling.**
> Transcript archived (canonical copy):
> `../../scriptor/references/sources/video-XPgffiRhtZM-eclipse-ai-digital-product-72h-transcript.txt`
> STATED/INFERENCE classification applied throughout.
>
> **DEDUP: NEW.** ID, URL, speaker and title grepped tree-wide — no hits. This is a new
> speaker to the stack.
>
> **This file carries** the production chain (§1), the test-quality bar (§2), and — per the
> ruling — **the named ethics case study (§3), which is the substantial artifact here.** The
> ad script routed to Scriptor; the problem-phrase search method to Augur; the niche-selection
> anti-pattern to Beowulf.

---

## 1. The production chain — checked against what we already hold

**STATED · PLATFORM MECHANICS · ASSERTED** [12:11–13:06]. As narrated: reference photo
sourced → figure generated → script split **by line** → each line animated as a separate ~10s
720p clip at an image-to-video tool → a **human editor** assembles the clips into the finished
ad.

**Verdict: almost entirely already covered.** Grepped `SKILL.md`, `brief-templates.md` and all
six existing `faber-video-*.md` files on `image-to-video`, `animate`, `per-line`, `line by
line`, `clip`, `editor`, `stitch`:

- **Clips out, not finished video** — `faber-video-karolis-ai-ugc.md:98` (§2.4): *"Output is
  clips, not finished video. Every demo ends the same way — save the clips, stitch."* The
  editor step here is the same step, done by a person instead of a tool.
- **Character consistency across clips** — `brief-templates.md:147–149`, already held with its
  dual-use warning attached.
- **Last-frame continuity chaining** — `brief-templates.md:144–146`.

**The one detail not already stated:** the split unit is **one script line per clip**, which
is what makes the assembly step necessary at all. Karolis's entry establishes that clips come
out; it does not name the line as the natural cut point. This is thin — a sentence, not a
technique — and is proposed at low priority accordingly.

> **The tool name is NOT recorded here.** The transcript renders it "clean 3.0 turbo" [12:39],
> which is an auto-caption artifact of some other product name. **Unverified — do not repeat
> it as fact anywhere.** The technique is vendor-independent regardless, per this skill's
> standing practice of recording content-neutral techniques rather than vendors.

## 2. The quality bar — "good enough to test"

**STATED · PERSUASION · ASSERTED** [13:34]. On his own finished ad: not the highest quality,
but good enough to put into the campaign. The bar applied is *sufficient to generate a read*,
not *polished*.

**Coverage check:** grepped `SKILL.md` and `brief-templates.md` on `polish`, `production
value`, `rough`, `ship it`, `highest quality`, `good enough`, `let the data`. The only
`polish` hits (`SKILL.md:187, 249`) are about Faber not writing finished **copy** — a
lane-boundary rule, unrelated to asset production values. **No coverage of a production-value
threshold for test creative.**

**Distinguish this carefully from the Karolis quality bar, which we rejected.** Karolis's
stated success criterion was that the synthetic presenter be *indistinguishable from a real
customer* (`faber-video-karolis-ai-ugc.md:46–48`) — that is a bar on **deception**, and it was
rejected on that basis. Eclipse's bar is on **finish**: a legitimately-produced asset may ship
rough because the test, not the polish, decides. **These are opposite kinds of claim and must
not be conflated when either is cited.**

**INFERENCE (PHC synthesis):** a low finish bar interacts directly with this skill's existing
bloat guard. If rough assets are cheap, the constraint on how many variations get made is the
budget's ability to give each meaningful spend — which is already the guard's job
(`legatus-meta-ads/references/diagnostic-taxonomy.md:236`: at $50/day PHC supports 7 live ads
total). Cheap production does not raise that ceiling. Worth stating so the bar is not read as
permission to flood.

## 3. ETHICS CASE STUDY — "names the line out loud, then steps over it"

**Filed as a named case study per the 2026-08-04 ruling, not merely as rejection lines.** All
three rejections below are confirmed. The pattern connecting them is the reason this earns a
section: **the speaker demonstrates accurate awareness of each ethical boundary at the moment
he crosses it.** That is a distinct and recognisable failure shape, and it is more useful to
future intake than three isolated rejections would be.

### 3.1 Watermark-stripped competitor creative — REJECTED

[11:43] Two of the three launched creatives were other creators' TikTok videos, downloaded
through a third-party tool that removes the watermark, then run as paid ads.

The tell is verbatim: *"I don't want to infringe on her copyright, but uh you got to read
between the lines a bit here if you're a viewer."* He identifies the legal category correctly,
declines to resolve it, and delegates the inference to the audience.

**Why rejected:** commercial use of another creator's work without licence. **The watermark
removal is the aggravating element** — it has no function except to conceal provenance, which
converts an arguable grey area into a deliberate one.

**Conflict with existing doctrine, resolved in doctrine's favour:** `brief-templates.md:132–138`
holds the line as *"several performers in, an original build out"* — pattern, not replica.
Downloading the finished asset is the precise thing that rule exists to prohibit. **No change
proposed; the rule already covers this by name.**

**Second-order consequence worth recording:** two thirds of this video's reported result rests
on assets PHC could not lawfully have run. That is an independent reason the performance
numbers do not transfer to us, separate from their sample size.

### 3.2 Non-consensual likeness synthesis — REJECTED

[12:11] A real mother's photograph was located via Pinterest search and used as the reference
from which the ad's presenter was generated.

**Rejected on two independent grounds**, and the independence matters:

1. **Likeness.** An identifiable real person's appearance was used as the basis for commercial
   advertising without consent. This ground holds regardless of what the figure says.
2. **Fabricated presenter.** `brief-templates.md:124` — *"fabricating a presenter is refused"* —
   and `SKILL.md:145–148`.

**Boundary detail preserved rather than smoothed, because it is genuinely interesting:** the
script as delivered is a **spokesperson read**, not a testimonial. The figure says *"this is
for you,"* never *"this worked for me."* It makes no first-person experience claim. Under the
letter of the FTC Consumer Reviews Rule reasoning that underpins our rule, a non-testimonial
synthetic presenter is a weaker case than Karolis's synthetic reviewer.

**It does not rescue this instance** — ground 1 is untouched by the distinction, and
`brief-templates.md:124` refuses the fabricated presenter as such rather than only the
fabricated testimonial. **But the distinction should be preserved rather than flattened**, so
that a future case turning on it is reasoned rather than pattern-matched. This is now the
**third** source to trip this rule (Karolis 2026-07-22, Blackie, Eclipse 2026-08-04) and the
first where the synthetic figure makes no experience claim.

### 3.3 Selling unread, safety-adjacent AI-generated advice — REJECTED

[03:58] A 28-to-32-page infant-sleep guide, generated in roughly two prompts, sold at $24.99,
which the seller states on camera he did not read: *"I did not read all 32 pages of this, not
a chance in hell."*

**Rejected.** This is a **product-integrity** failure, not a copy-integrity one, which is why
it sits outside the usual banned-tactics list and needs stating explicitly. Infant sleep is
safety-adjacent territory — sleep positioning, night-weaning, and cry-it-out protocols are
exactly the content where wrong guidance reaches a baby. The seller cannot stand behind a
single claim in his own product.

**PHC relevance:** the brand ethos is "feel like family, not a transaction." This is its
precise inverse, and it is the rejection most likely to be waved through on the grounds that
"it's only a PDF."

### 3.4 Flagged, not rejected

A **30-day guarantee on an instantly-downloaded file** [13:26], never revisited in the video.
Legitimate only if honoured without friction. `scriptor-doctrine-consumer-psychology.md:174`
already governs: a guarantee PHC cannot service is a fabricated claim. Held for whenever
refund-policy doctrine is built.

### 3.5 Negative finding — recorded deliberately

**Nothing else tripped the filter.** No countdown, no fake stock counter, no invented review,
no fabricated price anchor, no manufactured urgency of any kind. The ad sells on the problem
and the terms.

This is recorded because the case study would be misleading without it. A source can be
disqualifying on sourcing and clean on persuasion, and treating "bad source" as "reject
everything" would have cost us the ad structure that routed to Scriptor.

---

## 4. Proposed skill changes

**RULED 2026-08-04 by Aurelius.** Outcomes recorded below per the report-to-skill drift-log rule. Coverage verdicts produced by the step-4
grep before these were written.

| # | Proposal | Coverage verdict | Status |
|---|---|---|---|
| FE-1 | Add a **test-creative finish bar** to `brief-templates.md` production notes: a legitimately-produced asset may ship at low production value because the test decides, with the explicit caveat that cheap production does **not** raise the bloat-guard ceiling on live-ad count. | **NEW — verified gap.** Grepped `SKILL.md` + `brief-templates.md` on `polish`, `production value`, `rough`, `ship it`, `highest quality`, `good enough`, `let the data`. Only `polish` hits are the Faber-doesn't-write-copy lane rule (`SKILL.md:187, 249`), unrelated. | **APPLIED v1.3.0** — caveat preserved verbatim per the ruling |
| FE-2 | Record §3 as a **named case study** — "identifies the ethical line out loud, then steps over it" — as recognition material for future intake. | **NEW as a pattern.** The three constituent rules all exist; what does not exist anywhere in the tree is a named shape for a source that demonstrates awareness at the moment of crossing. Grepped `case study`, `pattern`, `recognition`, `aware` across `faber-*`, no equivalent. | **APPLIED v1.3.0** — §3 of this file is the case study |
| FE-3 | Preserve in `brief-templates.md` the **spokesperson-vs-testimonial distinction** (§3.2): the fabricated-presenter refusal stands on its own footing, independent of whether the figure makes an experience claim — so a future non-testimonial synthetic presenter is refused by the presenter rule, not by the testimonial rule. | **EXTENSION.** `brief-templates.md:124` and `SKILL.md:145–148` both already refuse; neither states which of the two grounds is doing the work. Third instance of this rule firing; first with no experience claim. | **APPLIED v1.3.0** |
| FE-4 | Note the **line-per-clip** split as the natural cut point in a multi-clip assembly. | **EXTENSION** of `faber-video-karolis-ai-ugc.md:98` (clips out, not video), which does not name the cut unit. Thin. | **DECLINED** (ruled: an observation, not doctrine) |
| FE-5 | *No change* to the fabricated-presenter refusal. | **WITHDRAWN — ALREADY COVERED.** Third confirmation. `brief-templates.md:124`, `SKILL.md:145–148`. No re-litigation. | **NO CHANGE NEEDED** — filed as-is per the coverage grep |
| FE-6 | *No change* to "pattern, not replica." | **WITHDRAWN — ALREADY COVERED.** `brief-templates.md:132–138` covers downloaded competitor assets by name. | **NO CHANGE NEEDED** — filed as-is per the coverage grep |
| FE-7 | *No change* to character consistency / last-frame chaining / clips-not-video. | **WITHDRAWN — ALREADY COVERED.** `brief-templates.md:144–149`, `faber-video-karolis-ai-ugc.md:75–98`. | **NO CHANGE NEEDED** — filed as-is per the coverage grep |
