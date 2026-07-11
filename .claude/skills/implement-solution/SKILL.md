---
name: implement-solution
description: Implement src/<slug>.ts and tests/<slug>.test.ts from the approach in solutions/<slug>.md (falling back to problems/<slug>.md if there is no write-up yet), then run npm test.
argument-hint: <slug>
---

# Implement Solution

Turn a worked-out approach into code. Implement `src/<slug>.ts` and its tests from the approach in
`solutions/<slug>.md`. See `AGENTS.md` for project conventions. Model new files on the
`binary-search` set.

## Input

- `$1` — the kebab-case `<slug>` (e.g. `valid-parentheses`).

## Steps

1. Read `solutions/<slug>.md` (the approach to implement). If it does not exist, fall back to
   `problems/<slug>.md` and implement the best readable solution at optimal complexity. If neither
   exists, stop and suggest `/create-problem <slug>`.
2. Check whether `src/<slug>.ts` already exists:
   - **If it exists** (the user's own attempt): review and optimize it. Explain any correctness bugs
     and complexity improvements. Do not silently rewrite it — preserve the user's structure where
     reasonable and describe the changes you make.
   - **If it does not exist**: implement the approach from `solutions/<slug>.md`.
3. Write `src/<slug>.ts`:
   - Concise leading JSDoc: problem title, one-line restated description, Time/Space complexity, and
     an example usage. (The full approach/dry run lives in `solutions/<slug>.md`, not here.)
   - Solution as a typed `const <fnName> = (...) => { ... }` arrow function.
   - End with `export default <fnName>;`.
4. Write `tests/<slug>.test.ts` (expected outputs derived from the problem spec, not from what the
   code happens to return). If it already exists (e.g. from a prior `/test-problem <slug>` run), tell
   the user and confirm before overwriting it:
   - `import <fnName> from '../src/<slug>';`
   - One `describe('<fnName>', ...)` with multiple `it(...)` cases covering the spec examples, edge
     cases (empty input, single element, negatives, no-match, etc.), and adversarial cases that try
     to break the solution.
   - `.toBe(...)` for primitives, `.toEqual(...)` for arrays/objects.
5. Run `npm test` and report the results.

## Rules

- Implement the approach described in `solutions/<slug>.md`; do **not** rewrite that write-up (that
  is `/create-solution`'s job).
- Keep the problem statement in `problems/<slug>.md` spoiler-free.
- Follow the coding standards in `AGENTS.md` (semicolons, single quotes, 2-space indent, camelCase,
  explicit return types, one default export per file).
