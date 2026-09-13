# Changelog — vigil-ads-monitor

## v1.0.0 — 2026-07-19
Initial install. Written directly following house conventions (not routed through Skill Forge — novelty
checked manually against the installed library).

**Wedge:** `legatus-meta-ads` is attended and on-demand — Ben asks, Legatus answers and decides. Nothing
covered the unattended case: something running on a schedule that notices a problem before Ben thinks to
look. Vigil owns recurring/scheduled monitoring and has **no verdict authority and no mutating power at
all**, which is what keeps it from collapsing back into Legatus.

**Source:** Meta Ads course transcript (Sam Piliero / The Moonlighters, ~52 min), reviewed 2026-07-19.
Adopted scheduled digests and statistical anomaly detection; recalibrated both for PHC's scale.

- **Dual gate on anomalies (significance AND materiality)** — the source uses a bare 2-standard-deviation
  test. That's calibrated to an agency running 236 ad accounts; at PHC's single-store daily volume, ROAS
  and CPA variance is large enough that a bare 2σ test fires most days. A monitor that cries wolf trains
  Ben to ignore the channel, which is worse than no monitor — and Legatus already carries an explicit rule
  that false urgency is worse than silence given Ben's account-ban history. Vigil therefore requires both
  2σ **and** a materiality floor (≥$25 daily spend affected, or ≥25% move on a ≥$100 baseline).
- **Insufficient-baseline reporting** — under $100 cumulative spend, no deviation is computed at all.
- **Cadence default once daily**, not the source's 4x/day. Weekly deeper pass. Raise only if Ben asks and
  spend justifies it.
- Reads Legatus's definitions (king goal, winner/potential thresholds, scale guards, promo exclusion)
  rather than restating them — divergent definitions between the watcher and the decider would guarantee
  contradictory outputs.
- **Never diagnoses.** Reports movement with numbers, windows, and baseline; naming a cause is Legatus's.
  This is the boundary most at risk of drift, so it's both an integrity rule and an anti-pattern.
- **Never mutates the account under any circumstances** — not even with confirmation. An unattended process
  shouldn't hold that power; mutation stays with Legatus behind Ben's in-turn go-ahead.
- Explicit failed-pass output format — a silent failure reading as "nothing to report" is the most
  dangerous possible output from a monitor.
- Reports good anomalies (ROAS spikes, CPM collapses) in the same pass as bad ones.
- Joint Legatus + Centurion escalation when ad-side signals look healthy but conversion is down, triggering
  the existing symmetric contract rather than adjudicating it.

**Not yet verified live** — no scheduled pass has run against the real account, and no king goal is on file
yet. The digest is not meaningful until Ben supplies one.
