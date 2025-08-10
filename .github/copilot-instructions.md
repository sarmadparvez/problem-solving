# Project Overview

This project contains different programming problems solved in TypeScript.

## Folder Structure

- `/src`: Contains the source code for different problems
    - Each problem should have its own file with descriptive naming

- `/requirement-descriptions`: Problem descriptions for reference. When creating a new problem, copy the template from this directory and fill in the details.
    - If the problem description already exists, use it as a reference to implement the solution.
    - Each problem description must include:
        - A clear problem statement
        - Function signature
        - Example inputs and outputs for the problem

- `/tests`: Contains test files for each problem
    - Test files use the same descriptive naming as in `/src`, with `.test.ts` suffix
    - Each test file should cover typical cases, edge cases, and error handling

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
- Include problem description as comments at the top of each file
- Export the main solution function as default
- Use descriptive variable and function names

### Documentation
- Add JSDoc comments for public functions
- Include example usage in comments
- Document algorithm approach and complexity analysis

## File Naming Convention

- Use kebab-case for file names (e.g., `two-sum.ts`, `binary-search.ts`)
- Include problem number or identifier if applicable
- Group related problems in subdirectories

## Test Organization

- Write tests for each problem in a separate file.
- Place all test files in the `/tests` directory
- Name test files as `<problem-name>.test.ts`
- Use Jest with `ts-jest` for running TypeScript tests
- Cover typical cases, edge cases, and error handling in tests

## Running Tests

- Install dependencies: `npm install`
- Run all tests: `npm test`
