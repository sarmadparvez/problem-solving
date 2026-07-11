# typescript-snippets

A personal collection of coding problems solved in TypeScript, for **coding practice** — sharpening
problem-solving and data-structures/algorithms skills.

The workflow is **solve first, ask AI later**: capture a problem as a spoiler-free statement, attempt
it yourself, then optionally use AI to work out the approach, implement it, or validate it.
AI assistants (Claude Code and GitHub Copilot CLI) share the same instructions in
[`AGENTS.md`](./AGENTS.md) and the same skills in [`.claude/skills/`](./.claude/skills).

## Prerequisites

- **Node.js 18+** (tested on v24).
- **npm** (ships with Node).

## Setup

```bash
npm install
```

Installs the dev dependencies (TypeScript, Jest, ts-jest, tsx). There are no runtime dependencies.

## Project structure

Each problem is a set of files across four directories, linked by a shared kebab-case `<slug>`:

| Path | Purpose |
|------|---------|
| `problems/<slug>.md`   | The spoiler-free problem statement (description, function signature, examples). |
| `solutions/<slug>.md`  | The worked-out approach — intuition, algorithm, visual dry run, complexity, pitfalls. No code. |
| `src/<slug>.ts`        | The solution code (one default-exported function per file). |
| `tests/<slug>.test.ts` | Jest tests for the solution. |

`problems/` and `solutions/` each contain a `template.md`.

## Running the tests

Solutions are exercised through their tests. Jest picks up `tests/**/*.test.ts` via `ts-jest` (no
build step needed).

```bash
npm test                    # run all tests
npm test binary-search      # run one problem's tests (matches the filename)
npm run test:watch          # re-run tests on file changes
```

`npm test <name>` passes `<name>` to Jest as a filename filter, so `npm test binary-search` runs only
`tests/binary-search.test.ts`. (`npm test -- <name>` works too.)

There are two ways to run a file — pick whichever you prefer.

## Running a `.ts` file directly (no compile)

Run a `.ts` file straight through `tsx` (installed as a dev dependency) — no build step:

```bash
npm run ts src/two-sum.ts
```

`npm run ts` maps to `tsx`, so it also works via `npx tsx src/two-sum.ts`.

> Note: solution files only **export** a function, so running one directly prints nothing — add a
> temporary `console.log` to see output, or just use `npm test` to exercise them.

## Compiling to JavaScript, then running

`npm start` compiles the file you name (plus anything it imports) to `dist/` and runs it — just that
file, not the whole project, so it stays fast no matter how many problems you have:

```bash
npm start two-sum            # compiles src/two-sum.ts → dist/src/two-sum.js, then runs it
npm start src/two-sum.ts     # same — a slug, filename, or src/ path all work
```

To compile the **whole** project instead (e.g. a full type-check), run `tsc` with no file argument
so it reads `tsconfig.json`:

```bash
npx tsc                      # compiles every file into dist/ (mirrors the source tree)
node dist/src/two-sum.js     # then run whichever one you want
```

`dist/` is generated output and is gitignored. Both paths type-check as they compile, so they
surface type errors that the direct `npm run ts` path does not.

## AI-assisted workflow (skills)

Defined once in `.claude/skills/` and shared by Claude Code and GitHub Copilot CLI (Agent Skills open
standard). Invoke as slash commands, in workflow order:

| Command | What it does |
|---------|--------------|
| `/create-problem [slug]`    | Save a pasted problem as a spoiler-free `problems/<slug>.md` (slug derived from the title if omitted). Never writes a solution. |
| `/create-solution <slug>`   | Work out the best approach (intuition, algorithm, visual dry run, complexity, pitfalls) and write it to `solutions/<slug>.md`, so you can understand it and code it yourself. Writes no TypeScript. |
| `/implement-solution <slug>`| Implement `src/<slug>.ts` and `tests/<slug>.test.ts` from the approach in `solutions/<slug>.md` (falls back to `problems/<slug>.md`), then run the tests. |
| `/test-problem <slug>`      | Write comprehensive **black-box** tests from `problems/<slug>.md` alone (examples, edge cases, adversarial cases) and run them against your `src/<slug>.ts`. Never reads or changes your code. |

See [`AGENTS.md`](./AGENTS.md) for the full conventions.

## Adding a problem manually

1. Copy `problems/template.md` to `problems/<slug>.md` and fill in the statement.
2. Optionally work out the approach in `solutions/<slug>.md` (copy `solutions/template.md`).
3. Implement it in `src/<slug>.ts` (default-export the function).
4. Add tests in `tests/<slug>.test.ts` and run `npm test`.
