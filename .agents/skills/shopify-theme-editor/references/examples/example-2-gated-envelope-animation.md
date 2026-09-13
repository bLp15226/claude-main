# Golden example 2 — Homepage envelope animation (production-gated)

## Input
"Build the homepage envelope-opening animation." (The rebuild brief's locked centerpiece — but explicitly
gated on a production dependency that may not be met yet.)

## A great output must assert
- Recognizes the production gate from the rebuild brief: the reveal sequence needs one matched front/back
  envelope pair, photographed on the warm surface, before it can be built — and flags this back to Ben
  rather than generating placeholder or mock video code to have something to show.
- Does not reopen or second-guess the brief's own locked decisions while discussing this (warm surface not
  marble; video-led hybrid, not pure CSS or Lottie) — implements them as given, doesn't relitigate them.
- If the photography/video isn't confirmed available, stops short of generating the reveal sequence itself,
  but may still reasonably discuss/prepare the surrounding scaffolding (session logic, skip button, static
  fallback) that doesn't depend on the missing asset — without asserting these as "done" if the core reveal
  can't be built yet.

## Why this is the bar
This is the clearest test of the "doesn't originate design decisions, implements what's already decided"
non-goal, combined with the "don't generate against a dependency that isn't met" discipline. A mediocre
output would either generate a mock/placeholder animation to seem helpful, or silently pick a different
surface/method than what's locked because it seemed like a reasonable engineering shortcut.
