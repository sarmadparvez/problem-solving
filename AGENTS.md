# Project Overview

This repository is a personal collection of coding problems solved in TypeScript. Its purpose is
**coding practice** — sharpening problem-solving and data-structures/algorithms skills.

This file is the single source of truth for project conventions. Claude Code reads it via
`CLAUDE.md` (which imports it with `@AGENTS.md`), and GitHub Copilot CLI reads `AGENTS.md` natively
as its primary custom instructions. There is no per-tool copy to keep in sync.

## How I Work On Problems

The intended human workflow is **solve first, ask AI later**:

1. A problem (pasted in by the user, from any source) is captured as a spoiler-free statement.
2. I attempt the solution myself, unaided, to build problem-solving skills.
3. When I want help, I ask an AI assistant to work out the approach (so I can still code it myself)
   or to implement it for me.

Because of this, the problem statement in `problems/<slug>.md` must **never** contain the algorithm
or the solution — that would defeat the practice. The worked-out approach (intuition, algorithm,
dry run, complexity) lives in `solutions/<slug>.md`.

## Workflows (AI-assisted)

These workflows are defined once as Agent Skills in `.claude/skills/<name>/SKILL.md`. Agent Skills
is an open standard, so the **same** skill files are picked up by both Claude Code and GitHub
Copilot CLI (and Copilot in VS Code). No per-tool duplication:

- **`create-problem [slug]`** — captures a problem (pasted in by the user) as a **spoiler-free**
  statement in `problems/<slug>.md` (title, description, function signature, examples only). If the
  slug is omitted it is derived from the title. Does **not** implement or hint at a solution.
- **`create-solution <slug>`** — the "work out the approach" step. Reads `problems/<slug>.md` and
  writes the approach (intuition, algorithm, a visual dry run, complexity, pitfalls) to
  `solutions/<slug>.md`, so I can understand it and implement the code myself. **Never writes
  TypeScript** — no `src/` code.
- **`implement-solution <slug>`** — the "have AI write the code" step. Implements `src/<slug>.ts`
  and tests (`tests/<slug>.test.ts`) from the approach in `solutions/<slug>.md` (falling back to
  `problems/<slug>.md` if there is none), then runs `npm test`. If I already attempted
  `src/<slug>.ts`, it reviews/optimizes that instead of overwriting it.
- **`test-problem <slug>`** — the "validate my own attempt" step. Writes comprehensive **black-box**
  tests (`tests/<slug>.test.ts`) derived only from `problems/<slug>.md` — examples, edge cases, and
  adversarial cases — then runs them against `src/<slug>.ts` and reports pass/fail. Never reads or
  changes the solution code.
- **`reset-implementation <slug>`** — the "re-attempt from scratch" step. Comments out the existing
  `src/<slug>.ts` implementation (kept in-file for reference, pushed below a whitespace gap) and
  leaves a placeholder function with the same signature — complexity hints stripped — so I can solve
  it again without seeing my old answer. Touches only `src/<slug>.ts`.
- **`revert-implementation <slug>`** — the opposite of `reset-implementation`. Restores the original
  `src/<slug>.ts` from the commented reference block the reset left at the bottom of the file and
  drops the placeholder stub. Targeted — reconstructs from the file itself, so it leaves other
  uncommitted changes untouched (no repo-wide `git reset`). Touches only `src/<slug>.ts`.

## Folder Structure

Each problem is a set of files across four parallel directories, linked by a shared kebab-case
`<slug>`:

- `/problems/<slug>.md`: The **spoiler-free problem statement** — title, description, function
  signature, and example inputs/outputs. No algorithm, no solution. Copy `problems/template.md` when
  adding a new problem. If a statement already exists, use it as the spec to implement against.
- `/solutions/<slug>.md`: The **worked-out approach** — intuition, algorithm explanation, a visual
  dry run, complexity, and pitfalls. Authored by `create-solution` (before coding) as the learning
  artifact and the spec that `implement-solution` codes from. No TypeScript. Copy
  `solutions/template.md`.
- `/src/<slug>.ts`: The solution code. One problem per file, default-exported. The leading JSDoc is
  concise (title, one-line description, Time/Space complexity, example) — the full write-up lives in
  `solutions/`.
- `/tests/<slug>.test.ts`: Jest tests for the problem, same slug with a `.test.ts` suffix. Cover
  typical cases, edge cases, and error handling.

## Libraries and Frameworks

- **TypeScript** for all code implementation
- **Node.js** runtime environment
- **npm** for package management
- **Jest** for testing (with `ts-jest` for TypeScript support)

## Coding Standards

### Syntax and Formatting
- Use semicolons at the end of each statement
- Use single quotes for strings
- Use arrow functions for function expressions
- Use camelCase for variable and function names
- Use PascalCase for class names and interfaces
- Use 2 spaces for indentation

### Type Annotations
- Always specify return types for functions
- Use explicit type annotations for complex data structures
- Prefer interfaces over type aliases for object shapes

## Coding Practices

### Algorithm Design
- Write simple, readable solutions first
- Optimize for efficiency with low time and space complexity
- Include time and space complexity comments for each solution
- Consider edge cases and handle them appropriately

### Code Organization
- One problem per file
- Export the main solution function as default
- Use descriptive variable and function names

### Documentation
- Give each solution a concise leading JSDoc: problem title, a one-line restated description,
  Time/Space complexity, and an example usage
- The full algorithm write-up (approach, steps, walkthrough) is the canonical `solutions/<slug>.md`,
  not the JSDoc and never the spoiler-free `problems/<slug>.md`

### Dry-run visualizations
Every solution write-up (`solutions/<slug>.md`) includes a **dry run**: a concrete example input traced step by step.
Choose the representation that best mirrors the problem's data structure — **do not default to a
table**. A table is best only when the state is a few scalars per step with no spatial shape. Match
the form to the shape:

- **Array / string with pointer markers** (`L`, `R`, `mid`, `i`, `j`) — two pointers, sliding window,
  binary search, partitioning.
- **Interval bars on a number line** — interval / scheduling problems.
- **ASCII tree diagram** — binary trees, BSTs, tries; annotate traversal order or node values.
- **Recursion / call tree** — recursion, backtracking, divide-and-conquer, memoized DP; show the
  branches and the values returned back up.
- **Linked list with arrows** (`a → b → c → ∅`) — linked-list problems; show `prev`/`curr`/`next` moves.
- **Graph sketch + visited/queue/stack** — BFS/DFS and other graph traversals.
- **Grid / matrix** — 2D traversal, flood fill, 2D DP; show cells filling in (dependency arrows for DP).
- **Stack / queue column** — monotonic stack, BFS queue; show pushes and pops per step.
- **State table** — only for a handful of scalar variables per step (e.g. a running hash map, index DP).

Combine forms when it helps (e.g. an array diagram plus a short table), and prefer clarity over
completeness. The goal is a visual that is easy to picture and remember.

## File Naming Convention

- Use kebab-case for file names (e.g., `two-sum.ts`, `binary-search.ts`)
- Reuse the same `<slug>` across all four directories — it is the key that links a problem's
  statement, approach write-up, solution code, and tests

## Test Organization

- Write tests for each problem in a separate file
- Place all test files in the `/tests` directory
- Name test files as `<slug>.test.ts`
- Default-import the solution via a relative path, e.g. `import twoSum from '../src/two-sum';`
- Use one top-level `describe('<functionName>', ...)` with multiple `it(...)` cases
- Use `.toBe(...)` for primitive returns and `.toEqual(...)` for arrays/objects
- Cover typical cases, edge cases, and error handling

## Running Tests

- Install dependencies: `npm install`
- Run all tests: `npm test`

## Reference Example

The cleanest end-to-end example to model new problems on is the `binary-search` set:
`problems/binary-search.md`, `src/binary-search.ts`, `tests/binary-search.test.ts`, and
`solutions/binary-search.md`.
