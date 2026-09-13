# HELD — flagged, not filed anywhere (Karolis / Max Fusion intake)

> **STATUS: HELD IN STAGING 2026-07-28 by Aurelius ruling.** Two items. Neither is doctrine,
> neither goes to a general. Item 2 is an **open action item for Ben**, not a routing question.

> **PROVENANCE: VIDEO SOURCE.** Speaker: Karolis — YouTube AI-tools creator; promotional tutorial
> for Max Fusion (third-party AI-video tool with a new Claude MCP), description link, affiliate
> status not disclosed. Title: "Claude + Gemini Omni Has Changed AI UGC Forever (Full Tutorial)".
> Published: 2026-07-22. Runtime: 9:13. URL: https://youtu.be/tjuvszCfgM0 ·
> Extracted: 2026-07-28. Extraction basis: auto-generated captions only, no frames.
> Transcript archived (canonical copy):
> `../../../faber-creative-flywheel/references/sources/video-tjuvszCfgM0-karolis-ai-ugc-transcript.txt`

---

## FLAG 1 — Beat-for-beat remake of a named creator's video

> **⚠ STATUS CHANGED 2026-07-28 — NO LONGER HELD. PROMOTED TO A RULE.**
> A second, unrelated vendor was observed shipping the same tactic as a headline feature (AC
> Hampton's sponsored "ad decoder" — see `legatus-meta-ads/references/legatus-video-hampton-claude-connector.md`
> §7.2). Aurelius ruled that two independent vendors is enough signal this is becoming standard
> practice in PHC's market, and that re-flagging it ad hoc on every future intake is worse than
> having the rule.
>
> **The rule now lives at
> `faber-creative-flywheel/references/faber-video-karolis-ai-ugc.md` §6.3:**
> *analyse structure, never replicate a specific creator's execution beat-for-beat.*
> Proposal FK-6 raises moving it into Faber's `SKILL.md`.
>
> The text below is retained as the original record of why it was flagged. **Flag 2 remains open.**

**Originally ruled a derivative-work / IP concern, not a technique to adopt. Noted here as a flag;
not filed as doctrine anywhere.**

**What the video does.** After extracting a structural outline from one specific, identified
creator's viral video, it feeds that outline back with a different product and generates a remake.
The narrator explicitly praises the result for having taken the original's storytelling and
applied it to another product. The two clips are played back to back in the video, and the
resemblance is the stated point.

**Why this is held rather than adopted.**

1. **It reproduces one identified creator's specific creative**, not a pattern observed across
   many. That is a different act from competitive research, and the difference is the whole
   question — see the contrast below.
2. **Derivative-work exposure.** Copying the substance and sequence of a specific identified work
   is a materially different legal posture from building to a genre convention. No opinion offered
   here on where the line sits; the point is that the video's version is on the wrong side of
   wherever PHC would want to draw it.
3. **The reciprocity test settles it.** PHC would object to this being done to its own ads. A
   tactic that fails that test does not enter the stack.

**The contrast that was ruled and filed.** Faber *did* take structural analysis of top-performing
video (`faber-video-karolis-ai-ugc.md` §6) — deriving structure across **multiple** performers to
inform an original build. The line, as recorded there: **pattern, not replica.** This flag is the
excluded half of that same workflow, held separately so the boundary stays visible.

**No action required.** Recorded so that a future reader of the Faber file who follows the source
does not mistake the video's actual demonstration for the practice Faber adopted.

---

## FLAG 2 — Third-party MCP auto-installing Claude skills → ACTION ITEM FOR BEN

**Ruled: not a content-routing question. A security and governance issue with the skill stack
itself. Not routed to any general.**

**The claim in the video.** Stated explicitly and repeated: installing the Max Fusion MCP causes
"multiple Claude skills" to be **automatically installed**, including a named "Vox style creation"
skill. The narrator presents this as a convenience feature.
*STATED · PLATFORM MECHANICS · DEMONSTRATED PER NARRATION.*

**Why this matters here specifically.** PHC's skill stack is hand-authored, versioned,
changelogged, and governed by a roster guard that exists *because* an unverified roster nearly
caused a wrongful purge of two real skills (CLAUDE.md, 2026-07-23). A third-party MCP that writes
skills into that same directory on install collides directly with that governance model — the
installed skills would be un-reviewed, un-versioned, absent from `INDEX.md`, and indistinguishable
at a glance from hand-authored PHC doctrine.

**No evidence of bad intent, and none is implied.** The concern is structural: un-reviewed content
landing in a directory whose entire value depends on every entry being deliberate.

### Ben's stated action item

> *"I want to see what that MCP installed before we run it again, and we should check it against
> INDEX.md."*

### Baseline check already run (2026-07-28) — findings

A disk-vs-`INDEX.md` diff was run at ruling time. Two results, and the second is the more useful:

**1. Nothing unaccounted-for is present.** Every skill directory on disk is accounted for in
CLAUDE.md's roster of record. There is no evidence any third-party MCP has installed anything into
this stack. (Note: no one has stated that the Max Fusion MCP was ever installed here — the video
was watched, not followed.)

**2. `INDEX.md` is already an incomplete baseline — this predates the video and is worth fixing
before it is relied on as an integrity check.** Present on disk but absent from `INDEX.md`:

| Directory | Status |
|---|---|
| `scriptor/` | **A real, installed, actively-used general — simply missing from INDEX.md.** The most significant gap. |
| `augur/` | Superseded by `augur-research` at v2.0.0 (`SKILL.md.superseded` present). Absence is defensible but undocumented. |
| `_staging/` | Created 2026-07-28 by the `/watch` Aurelius gate. Not a skill; arguably should not be listed. |

**Implication for the action item:** an integrity check that diffs the skills directory against
`INDEX.md` would currently flag Scriptor as an unknown intruder and miss nothing real. **Bringing
`INDEX.md` current is a prerequisite for using it as the tripwire Ben wants.** That is a
recommendation, not a change — `INDEX.md` was not modified.

**Status: OPEN.** Awaiting Ben. Nothing was installed, inspected, or executed in the course of
this intake.

---

## Disposition of this source (filed 2026-07-28)

| Chunk | Destination |
|---|---|
| Rejection record — AI presenter review; fabricated anecdote (double fabrication) | `faber-creative-flywheel/references/faber-video-karolis-ai-ugc.md` §1 |
| Production techniques — last-frame chaining, character consistency (+ dual-use warning), mascot generation, clips-not-video | same file, §2 |
| Approve-before-generate pattern | same file, §3 |
| **Mascot boundary** — brand claims yes, ownership/experience claims never (rule clarification) | same file, §4 |
| Faceless PAS format as a video production template | same file, §5 |
| Structural analysis of top performers — pattern, not replica | same file, §6 |
| Zero-performance-data calibration | same file, §7 |
| Faceless format applied to organic (answers no-Ben-on-camera) | `herald-social/references/herald-video-karolis-faceless-organic.md` §1 |
| Reply-to-comments-with-video — **untested idea, not adopted** | same file, §2 |
| **Beat-for-beat remake of a named creator's video** | **HELD — Flag 1, this file** |
| **Third-party MCP auto-installing skills** | **HELD — Flag 2, this file. OPEN action item for Ben.** |
| Ethics rejections (both) | Confirmed, filed nowhere as doctrine; recorded in the Faber and Herald files |

Transcript archived once, canonically, under Faber; the Herald file points to it rather than
duplicating it.
