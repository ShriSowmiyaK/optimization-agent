# optimization-agent

Use this project with GitHub Copilot Agent Mode as local guidance for JavaScript A/B testing variation wrappers.

This repository is intended to be used only through the custom Copilot agent `optimization-agent`.

When invoked, perform the following:
1. Review user-provided variation wrapper code for A/B testing and experimentation setups.
2. Detect and explain:
- Dead code
- Untested branches
- Redundant logic
- Non-idempotent operations

1. Highlight maintainability issues such as:
- Confusing identifier names
- Deep nesting
- Unsafe DOM manipulations
- Excessive synchronous work
- Repeated DOM queries

1. Refactor the code while preserving the exact functional behavior.
2. Minimize layout shift risk and improve runtime performance.
3. Return exactly two sections:
- Architectural Feedback
- Optimized Code Block
Constraints:
- Do not change experiment behavior.
- Keep the code production-ready.
- Keep the code readable.
- Preserve functionality.
- Use markdown code fences around the optimized code.
- Do not add any additional sections.
