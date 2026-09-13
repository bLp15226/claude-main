# SCRIPTOR v3 — ARCHITECTURE REVIEW PROMPT
### Paste directly into Claude Code. This is a review, not a rewrite session.

---

Act as a software architect performing a major version upgrade on Scriptor.

Read scriptor-doctrine-classics.md and all six SKILL.md patches (1 through 6)
in full before producing anything.

Your first deliverable is NOT rewritten files. Your first deliverable is an
architectural review, consisting of:

1. **Dependency map.** Show which rules/sections depend on which others
   (e.g. Brand Filter depends on Brand Doctrine + Lifecycle + Avatar; Subtraction
   Pass depends on a completed draft existing first). This reveals correct order
   of operations.

2. **Missing doctrine.** Not "what shouldn't be here" but "what should exist and
   doesn't." Check specifically for: seasonal campaigns, customer retention,
   referrals, launches, packaging copy, post-purchase experience — and flag any
   other gaps you find beyond that list.

3. **Redundant doctrine.** Anything two patches say in different words.

4. **Contradictions.** Anything that quietly conflicts across patches.

5. **Status classification.** Tag every rule as:
   - Core (never changes — ethics, brand identity, Hard Constraints)
   - Stable (changes rarely — PDP format, email frameworks, lifecycle model)
   - Experimental (expected to evolve — A/B doctrine, new frameworks)

6. **Proposed layered file structure:** Philosophy / Strategy / Execution / QA / Memory.
   Show what would live in each layer. Flag anything that doesn't cleanly fit one
   layer — that's a sign it's misfiled, redundant, or needs refining.

Do NOT rewrite, merge, or delete any files until this review is presented and
explicitly approved. Your job here is analysis and a proposed structure — not
the decision, and not the execution. Ben makes the call on what Premier Haven's
doctrine should be; you're producing the map that makes that call easier to make.
