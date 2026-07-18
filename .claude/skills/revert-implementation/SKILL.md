---
name: revert-implementation
description: Undo a /reset-implementation on src/<slug>.ts — restore the original implementation from the commented-out reference block the reset left at the bottom of the file, discarding the placeholder stub. Targeted (only that one file); no git reset needed. Touches only src/<slug>.ts.
argument-hint: <slug>
---

# Revert Implementation

The opposite of `/reset-implementation`: restore the original solution in `src/<slug>.ts` from the
commented-out reference block that the reset left at the bottom of the file, and drop the placeholder
stub and whitespace gap. This is targeted — it only rewrites `src/<slug>.ts` from its own contents,
so it does **not** disturb any other uncommitted changes (unlike `git reset --hard`). See `AGENTS.md`
for project conventions.

## Input

- `$1` — the kebab-case `<slug>` (e.g. `two-sum`), matching the `src/<slug>.ts` name.

## Steps

1. Read `src/<slug>.ts`. If it does not exist, stop and tell the user there is nothing to revert.
2. Look for the reset divider line:
   `// ─── original implementation (commented out for reference — scroll up to re-implement) ───`
   - **If it is not present**, the file is not in a `/reset-implementation` state — there is no
     preserved original to restore. Stop and tell the user, and (if they want to discard other
     changes anyway) suggest `git checkout src/<slug>.ts` as the git-based fallback. Do not guess.
   - **If it is present**, everything below it is the commented-out original.
3. Reconstruct the original file content from the block below the divider by uncommenting each line:
   - Strip a single leading `// ` (two slashes + one space) from each content line.
   - A line that is exactly `//` becomes an empty line.
   - Strip only the **first** `// ` prefix — leave any later `//` in a line intact (e.g. the
     `// returns [0, 1]` inside the JSDoc example).
4. Overwrite `src/<slug>.ts` with the reconstructed original (the stub, the whitespace gap, and the
   divider are all removed — the file is back to exactly its pre-reset form). Note that this
   discards whatever is currently in the placeholder stub at the top; that is the intent (it is the
   re-attempt being thrown away), and git history still has it if needed.
5. Run `npm test <slug>` — this passes `<slug>` to Jest as a filename filter, so it runs **only**
   `tests/<slug>.test.ts`, not the whole suite. Report the result — the restored original should
   pass. Tell the user the original implementation is back and the reference block has been removed.

## Rules

- **Only touch `src/<slug>.ts`.** Never modify `problems/<slug>.md`, `solutions/<slug>.md`, or
  `tests/<slug>.test.ts`, and never run a repo-wide `git reset`/`git checkout .` — the whole point is
  a targeted revert that leaves other changes alone.
- Reconstruct the original **only** from the commented block this file already contains; do not
  re-derive or rewrite the solution. If the block is missing or looks malformed, stop and report
  rather than guessing.
- Keep the problem statement in `problems/<slug>.md` spoiler-free.
- Follow the coding standards in `AGENTS.md` (semicolons, single quotes, 2-space indent, camelCase,
  explicit return types, one default export per file).
