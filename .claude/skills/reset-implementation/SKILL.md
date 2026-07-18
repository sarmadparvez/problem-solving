---
name: reset-implementation
description: Blank out an existing src/<slug>.ts so I can re-attempt the problem from scratch — comment out the current implementation (kept in-file for reference, hidden below a whitespace gap) and leave a placeholder function with the same signature to re-implement. Touches only src/<slug>.ts.
argument-hint: <slug>
---

# Reset Implementation

Turn a solved `src/<slug>.ts` back into a blank slate so I can solve it again without seeing my old
answer. The current implementation is **commented out, not deleted** — kept in the same file for
reference but pushed out of view below a whitespace gap — and replaced at the top by an empty
function with the same signature. This is the "re-attempt from scratch" step. See `AGENTS.md` for
project conventions.

## Input

- `$1` — the kebab-case `<slug>` (e.g. `two-sum`), matching the `src/<slug>.ts` name.

## Steps

1. Read `src/<slug>.ts`. If it does not exist, stop and tell the user there is nothing to reset
   (suggest `/implement-solution <slug>` to create it first).
2. **Idempotency guard:** if the file is already reset — the active (uncommented) function body is
   the `throw new Error('Not implemented')` placeholder, or the reset divider (see step 4) is already
   present — tell the user it's already reset and do nothing. Do **not** re-comment a placeholder or
   stack a second gap.
3. From the current file capture, for the default-exported function:
   - the leading JSDoc block,
   - the signature — `const <fnName> = (<params>): <ReturnType> => {`,
   - the `export default <fnName>;` line.
4. Rewrite `src/<slug>.ts` with this content, in order:
   - The captured JSDoc, **with the `Time Complexity:` and `Space Complexity:` lines removed** (keep
     the title, description, `@param`, `@returns`, and `Example`). These are stripped because they
     hint at the optimal approach.
   - The placeholder function: the same signature, with a body of exactly:
     ```ts
       // TODO: implement
       throw new Error('Not implemented');
     ```
   - `export default <fnName>;`.
   - A whitespace gap of ~40 blank lines so the reference below is off-screen when the file opens.
   - The divider comment, on its own line:
     `// ─── original implementation (commented out for reference — scroll up to re-implement) ───`
   - The **entire original file content commented out** line by line with a `// ` prefix (its JSDoc,
     the full implementation, and its `export default` — all inert as comments). This is the
     reference copy; no separate backup file is created (git history also preserves the original).
5. Do **not** run `npm test` — a reset is meant to fail until re-implemented. Tell the user: the
   function is now a stub; `npm test <slug>` (or `/test-problem <slug>`) will fail with
   `Not implemented` until they re-implement it; and the original is preserved commented at the
   bottom of the file (scroll down, or `git checkout src/<slug>.ts` to restore it).

## Rules

- **Only touch `src/<slug>.ts`.** Never modify `problems/<slug>.md`, `solutions/<slug>.md`, or
  `tests/<slug>.test.ts`.
- **Never delete the original — only comment it out.** The commented copy at the bottom is the whole
  point (reference + restore path).
- Strip only the `Time Complexity:` / `Space Complexity:` lines from the placeholder's JSDoc; keep
  the rest so the signature and intent stay clear.
- The placeholder must keep the exact same signature and the `export default <fnName>;` so the file
  still type-checks and its tests still import and run (they'll just fail until re-implemented).
- Keep the problem statement in `problems/<slug>.md` spoiler-free.
- Follow the coding standards in `AGENTS.md` (semicolons, single quotes, 2-space indent, camelCase,
  explicit return types, one default export per file).
