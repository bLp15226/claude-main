# Changelog - centurion-store-health

## v1.1.0 - 2026-08-04 (late-filed 2026-07-29 batch)

**LATE-FILED BATCH — read this before reading the version/date sequence.** These proposals were
ruled by Aurelius on **2026-07-29** and filed on **2026-08-04**, six days later. They were
status-flipped to APPLIED on 07-29 but the corresponding edits were never written — a process
failure (label updated, edit never landed) caught by a tree-wide audit on 2026-08-04 that found
**57 affected proposals across 5 generals**, all from the same 07-29 intake session. Every item was
**re-grepped against current doctrine before being written**, per Aurelius's ruling that a verdict
never checked against its destination is an unverified claim wearing an APPLIED label. This is why
there is no 2026-07-29 entry in this file and why the version sequence jumps — **versions are
assigned by filing date, not ruling date**, so this batch sits after the 2026-08-04 Eclipse work
rather than before it.

**Sources:** Zuco AI dropship teardown · AC Hampton "Starting Dropshipping From $0" (both 2026-07-29).
**8 proposals, 8 filed, 0 withdrawn** — all returned clean misses on the re-grep. This is Centurion's
first CHANGELOG.

**Added to `references/store-health-methods.md`:**
- **Shipping-promise deliverability (CZ-1)** on the pre-launch checklist: validate every stated
  delivery window against the current supplier's quoted lead time + dispatch + weekend effect; if the
  supplier's number exceeds the promise, change the promise. A defect class that **surfaces as
  chargebacks rather than as a page problem**, which is why it is a checklist line.
- **Two trigger conditions, not one (CH-1):** the check fires when a delivery window is stated **or
  when one is absent** — an unexamined or missing promise on a dropshipped product is itself the
  finding.
- **The two-instance evidence table (CH-2)** as the argument for checklisting rather than judging: two
  operators skipped the same step in opposite directions.
- **The Beowulf → Centurion → Scriptor lead-time handoff (CH-3).** Scriptor's Redefinition block
  (`PHC_Product_Page_Skeleton.md:129`) already required "how long is shipping — the honest number";
  nothing established that number. CZ-1 is the missing middle link.
- **Audit controls, not layouts (CZ-2)** — click every interactive element including non-purchase
  controls, and test at least one **non-default variant** through add-to-cart. Extension with two named
  holes: non-purchase controls were absent entirely, and the existing ATC line tested the default
  variant only.
- **"A broken control hides its own consequences" (CZ-3)** — the reason "does it matter?" is not
  answerable by inspection: you cannot see the sessions it ended, because those customers left and
  were never counted.
- **Read the traffic split first, audit the dominant viewport first (CZ-4)** as a sequencing
  prerequisite. Cheap, and it reorders the whole pass on a mobile-dominant store.
- **Rejected-tactics record appended (CZ-8):** false statements about **store state** are a distinct
  class from exaggerated marketing claims, and Centurion is the only hat positioned to catch them —
  it reads the store, not the copy describing it.
