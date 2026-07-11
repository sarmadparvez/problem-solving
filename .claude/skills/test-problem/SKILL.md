---
name: test-problem
description: Write comprehensive black-box tests for a problem from its problems/<slug>.md statement (NOT from the solution code), then run them against src/<slug>.ts to validate the solution. Use to validate your own attempt. Never reads or changes the solution code.
argument-hint: <slug>
---

# Test Problem

Generate thorough tests **purely from the problem specification** and run them to validate the
solution in `src/<slug>.ts`. This is the "validate my own attempt" step. See `AGENTS.md` for
conventions.

The tests are **black-box**: their inputs and expected outputs are derived only from
`problems/<slug>.md` (the description, function signature, and sample inputs/outputs) and correct
reasoning about the problem — **never** from reading the implementation. This keeps the tests honest
and independent of whatever the code happens to do, so they can actually catch a wrong solution.

## Input

- `$1` — the kebab-case `<slug>` (e.g. `merge-intervals`), matching the `problems/<slug>.md` name.

## Steps

1. Read `problems/<slug>.md` only. If it does not exist, stop and suggest `/create-problem <slug>`
   first. **Do NOT open `src/<slug>.ts`** — you must not let the implementation influence the tests.
2. From the statement, take the function name and parameter/return types from the `## Function
   Signature` section, and the sample inputs/outputs from the `## Example Inputs and Outputs` section.
3. Design a comprehensive set of cases by reasoning about the spec:
   - Every sample input/output from the statement.
   - Typical/representative cases.
   - Edge cases: empty input, single element, min/max sizes, duplicates, negatives, zero, already-
     sorted vs reverse, boundary values, all-equal, no valid answer, etc. (pick those relevant to
     the problem).
   - Adversarial cases meant to **break** the solution: tricky orderings, overlaps/ties, large
     inputs, off-by-one boundaries, and anything the constraints permit but a naive solution mishandles.
   Compute each expected output yourself from the problem definition.
4. Write `tests/<slug>.test.ts`. If it already exists (e.g. from a prior `/implement-solution <slug>`
   run), tell the user it will be replaced with spec-derived black-box tests and confirm before
   overwriting it:
   - `import <fnName> from '../src/<slug>';`
   - One `describe('<fnName>', ...)` with grouped `it(...)` cases (examples, edge cases, adversarial).
   - `.toBe(...)` for primitives, `.toEqual(...)` for arrays/objects.
5. Run `npm test` and report results: state clearly whether the solution in `src/<slug>.ts` **passes
   or fails**, and for any failure show the input, the expected output, and what it returned.

## Rules

- **Never read `src/<slug>.ts` to design tests or decide expected outputs.** Expectations come from
  the problem spec and your own reasoning. (You only reference the function via the import so the
  tests can execute it.)
- **Never modify `src/<slug>.ts` or the solution.** If tests fail, that's a finding to report, not a
  reason to change the code. (To fix or produce the code, use `/implement-solution <slug>`.)
- If `src/<slug>.ts` does not exist yet, still write the tests, but report that there is no solution
  to validate yet.
- Keep the problem statement in `problems/<slug>.md` spoiler-free.
