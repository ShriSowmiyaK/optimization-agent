# Copilot instructions for optimization-agent

This project is intended to be used only through the custom Copilot agent `optimization-agent`.

When working in this repository, treat the task as an optimization workflow for JavaScript A/B testing variation wrappers.

Use the following files as context:
- README.md for the high-level instructions
- input.js for the source code to analyze
- output.js for the final result location

When asked to optimize code in this repo:
1. Read README.md and input.js.
2. Review the code for dead code, redundant logic, unsafe DOM usage, repeated queries, and maintainability issues.
3. Preserve behavior exactly.
4. Return a response with exactly two sections:
   - Architectural Feedback
   - Optimized Code Block
5. write the final 2 sections to output.js.