# Augur doctrine — competitive reads, cheap instruments, and their limits

> **LATE-FILED BATCH.** Ruled by Aurelius **2026-07-29**; filed **2026-08-04**, post-coverage-grep.
> These proposals were status-flipped to APPLIED on 07-29 but the corresponding edits were never
> written — a process failure caught by a tree-wide audit on 2026-08-04 (label updated, edit never
> landed; 57 proposals across 5 generals were affected). Every item below was re-grepped against
> current doctrine on 2026-08-04 before being written here. **Filed under Augur v2.3.0** — the
> version this batch would originally have claimed (v2.2.0) was consumed by the Eclipse intake
> earlier the same day, so sequencing follows filing date, not ruling date.
>
> **Sources:** AC Hampton, "Starting Dropshipping From $0" (2026-07-29 intake) · "One Person
> Business", "Claude AI + YouTube = $30,845 in 30 Days" (2026-07-29) · Zuco, AI dropship teardown
> (2026-07-29). Per-claim provenance in the matching `augur-video-*.md` files.

---

## 1. The organic-purchase gate (AH-1, AH-2)

*Second instrument on the existing kill-switch doctrine
(`augur-doctrine-customer-conversations.md:147`), which already holds the principle and the
"cheap truth beats expensive hope" framing. This is a new instrument, not new doctrine.*

**The gate:** before authorising paid spend on a candidate, require evidence that someone will buy
it **without** paid traffic — an organic post, a warm-list offer, a marketplace listing that
converts. The conversation gate and the organic-purchase gate answer different questions and cost
different amounts.

**Instrument ranking — the load-bearing part:**

> **The conversation gate kills cheaply; the organic-purchase gate authorises spending.**

A conversation gate (talking to people, reading reviews, reading forums) is cheap enough to run on
every candidate and is used to **eliminate**. An organic-purchase gate costs real time and is used
to **authorise**. Running them in the wrong order — trying to authorise with conversations, or
trying to eliminate with a two-week organic test — wastes the cheaper instrument's advantage.

**The slow-gate caveat (AH-2) — attached here deliberately, not filed separately.**
**A candidate sitting in the organic-purchase gate has not failed.** Absence of an organic sale
after two quiet weeks is absence of evidence, not evidence of absence: the post may not have been
seen, the offer may not have been made properly, the audience may not have been present. Read the
gate as *not yet authorised*, never as *killed*. Only the conversation gate kills.

## 2. Competitor-URL insight (AH-3)

*Extension. Augur's existing methods all work from customer artefacts; this adds a weaker class
with its ranking stated up front.*

Reading a competitor's own pages — their product copy, their FAQ, their objection handling — is a
**fast first-pass hypothesis generator**. It is cheap and it surfaces candidate objections and
angles quickly.

> **Seller artefact versus customer artefact — the caution that makes this usable.** A competitor's
> page tells you what *the seller believes* the customer objects to. A review corpus tells you what
> the customer *actually* said. These are different evidence classes and they are not
> interchangeable.
>
> **Precedence rule: the review corpus wins.** Where a competitor page and real customer language
> disagree, the customer language governs and the page reading is discarded, not averaged in.

Findings sourced this way enter as **hypothesis-stage** and are labelled as such, per the standing
confidence rule.

## 3. The competitor store read (A-1)

*The ordering is the useful part, not the method.*

When reading a competitor's storefront for signal, rank what you trust:

1. **Mobile/desktop traffic split** — structural, hard to fake, and it reorders the whole audit
   (see §7).
2. **Engagement proxies** — review counts and dates, question volume, content cadence.
3. **Revenue estimates** — last, and never on their own. See the tool-provenance rule in `SKILL.md`.

Reading them in the reverse order — starting from a revenue estimate and rationalising backwards —
is how a vendor's guess becomes a PHC assumption.

## 4. Competitor-convention scanning (A-4)

*Cheap, transferable, and it is how the strongest finding in the Zuco source was located.*

**Features that *all* rivals carry are visible only in aggregate.** Looking at one competitor shows
you their choices; looking at six shows you the category's *conventions* — and a convention that
every rival honours is either (a) a genuine customer requirement, or (b) a shared blind spot that
nobody has tested. Both are worth knowing and neither is visible from a single store.

Run it as a gap-find: list what every store in the set does, then ask which items are load-bearing
and which are inherited.

## 5. The saturation reading (A-5)

**Multiple stores selling one SKU with shared supplier photography indicates a closed window.**
Not "a competitive market" — a *closed* one. Identical imagery means every seller is drawing on the
same supplier asset pack, which means none has invested in differentiation, which means price is
the only remaining axis.

Directly usable in PHC product research, and it pairs with Beowulf's saturation read rather than
replacing it — Beowulf decides whether the product gets a slot; this is the signal it reads.

## 6. Risk notes — not doctrine rules (AO-6, A-7, AO-4)

*Ruled precisely this way: "a note, not a doctrine rule."*

**6.1 The legal-exposure flag (A-7).** Where a source's method carries legal exposure — likeness,
copyright, regulated claims — Augur **notes it in the report** rather than adopting or refusing it.
Augur is a research hat; it does not hold the ethics veto. The note travels; the judgement is
Aurelius's.

**6.2 The legal-exposure pile (AO-6) — second data point logged, with its trigger.**
Two instances is not a pattern worth building a general around. **A third instance is the trigger
to revisit** whether Praetorian (account hygiene / ban-risk, currently unbuilt) should be stood up.
Instances logged to date:

| # | Source | Exposure |
|---|---|---|
| 1 | Zuco teardown (2026-07-29) | Fabricated store-state claims |
| 2 | "One Person Business" (2026-07-29) | Fabricated safety claim + thumbnail-image copying |

> **Third instance not yet reached as of 2026-08-04.** Note that the Eclipse (2026-07-20) and
> Suzuki (2026-07-22) intakes both carry exposure findings; whether either counts toward this
> trigger is a ruling, not an inference, and has not been made. **Do not silently increment this
> table.**

**6.3 The frames-required calibration note (AO-4).** Transcript-only extraction of a
screen-recorded source would have adopted both of the "One Person Business" source's errors as
stated. **Frames are not optional for screen-recorded sources** — they are what makes the
evidence-versus-narration rule (`SKILL.md`, integrity rules) runnable at all. Where frames are
unavailable, the correct disposition is **UNVERIFIABLE**, not "verified" and not "contradicted."
