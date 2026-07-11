---
name: create-problem
description: Capture a coding problem (pasted in by the user) as a spoiler-free statement in problems/<slug>.md. Use when the user wants to add a new problem to solve. Creates ONLY the problem statement — never the solution.
argument-hint: [slug] — then paste the problem statement (slug optional; derived from the title if omitted)
---

# Create Problem

Capture a coding problem, pasted in by the user, as a **spoiler-free** description so the user can
attempt it themselves first. See `AGENTS.md` for project conventions.

## Inputs

- The problem statement — pasted into the message by the user (the usual way to invoke this). If no
  statement was provided, ask the user to paste it rather than guessing it.
- `$1` — an optional kebab-case `<slug>` override (e.g. `valid-parentheses`). If omitted, derive the
  slug from the problem title: drop any leading number (`2. Add Two Numbers` → `add-two-numbers`),
  then kebab-case it. Match the existing convention — no numeric prefix in the slug.

## Steps

1. Determine the `<slug>` (from `$1` or derived from the title) and state which slug you're using.
   If `problems/<slug>.md` already exists, stop and tell the user (don't overwrite an existing
   statement).
2. Copy `problems/template.md` and fill it in:
   - `# Title` — the problem's title.
   - `## Description` — a clear, self-contained restatement of the problem (constraints included).
   - `## Function Signature` — a `typescript` fenced arrow-function stub with typed params and
     return type, using a camelCase function name derived from the slug.
   - `## Example Inputs and Outputs` — the examples from the problem (use `### Example N` blocks with
     bold **Input:**/**Output:**, or a Markdown table for tabular inputs).
3. Write the result to `problems/<slug>.md`.

## Rules

- **Do NOT implement, sketch, or hint at a solution.** No algorithm explanation, no complexity
  analysis, no approach notes. The whole point is for the user to solve it unaided.
- Create only the statement file. Do **not** create `src/<slug>.ts`, `tests/<slug>.test.ts`, or
  `solutions/<slug>.md`.
- After writing, remind the user of the next steps: attempt `src/<slug>.ts` yourself; run
  `/create-solution <slug>` to work out the approach first; `/implement-solution <slug>` to have AI
  write the code; `/test-problem <slug>` to validate your attempt.
