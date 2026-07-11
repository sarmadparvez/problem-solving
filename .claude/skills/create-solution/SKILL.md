---
name: create-solution
description: Work out the best approach to a problem and write it up in solutions/<slug>.md — intuition, algorithm, a visual dry run, complexity, and pitfalls — so the user can understand it and implement the code themselves. Never writes TypeScript. Use after create-problem, before coding.
argument-hint: <slug>
---

# Create Solution

Work out the best solution to a problem and write it up so the user can understand it, then implement
the code themselves. See `AGENTS.md` for project conventions.

This produces the **approach**, not the TypeScript. Use it after `/create-problem`, before coding
(or before `/implement-solution`).

## Input

- `$1` — the kebab-case `<slug>` (e.g. `merge-intervals`), matching the `problems/<slug>.md` name.

## Steps

1. Read `problems/<slug>.md` (the statement). If it does not exist, stop and suggest
   `/create-problem <slug>` first.
2. Explain the approach in the chat, then write it to `solutions/<slug>.md` from
   `solutions/template.md` with these sections:
   - **Intuition** — the key insight and why the approach works; connect it to the problem's shape.
   - **Algorithm Explanation** — the optimal approach, step by step (the logic and steps). Light
     pseudocode is fine.
   - **Dry Run** (required) — trace the approach step by step on a concrete example input, using the
     representation that best fits the data structure (don't default to a table). See "Dry-run
     visualizations" in `AGENTS.md`.
   - **Complexity** — the Time and Space complexity the approach achieves, and why it is optimal.
   - **Pitfalls & Edge Cases** — tricky inputs, boundaries, and common mistakes to watch for.

## Rules

- **Do NOT write `src/<slug>.ts` or `tests/<slug>.test.ts`, and put NO actual TypeScript
  implementation in the write-up** — pseudocode and prose only. The user (or `/implement-solution`)
  writes the code from this.
- Work out the **best** approach: aim for the optimal achievable time/space complexity, described as
  clearly as possible.
- Keep the problem statement in `problems/<slug>.md` spoiler-free — the approach goes in the chat and
  `solutions/<slug>.md`.
