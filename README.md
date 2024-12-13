# TypeScript Type Coercion Bug

This repository demonstrates a subtle bug in TypeScript related to type coercion in function arguments.  When a function expects a number but receives a string, TypeScript performs implicit type coercion instead of throwing a type error. This can lead to unexpected behavior and runtime errors if not carefully handled.

## Bug Description

The `add` function is defined to accept two numbers and return a number. However, the code passes a string ('5') to this function leading to type coercion.  This unexpected behavior is demonstrated in the `bug.ts` file. The `bugSolution.ts` file provides a solution.

## Reproduction

1. Clone this repository.
2. Compile the TypeScript code using `tsc bug.ts`.
3. Run the JavaScript code using Node.js (or your preferred runtime).

You will observe that the code compiles without errors even though a type mismatch is present, highlighting the subtle nature of this bug.

## Solution

The solution involves enabling strict type checking and using type guards for safer function parameter handling. The `bugSolution.ts` shows how to address this using stricter type checking, preventing this type coercion behavior. 