# Tailwind CSS @apply Directive Order Issue

This repository demonstrates a common issue encountered when using Tailwind CSS's `@apply` directive, especially within frameworks like Next.js or Nuxt.js.  The problem arises from the order in which `@apply` directives are processed, potentially resulting in unexpected style overrides or incorrect application of styles.

## Problem
The `bug.js` file showcases a scenario where multiple `@apply` directives, each applying a different utility class, are used. Due to the order of application, some styles might be unintentionally overwritten, leading to incorrect rendering.  This issue is particularly problematic when complex styles and multiple utility classes are involved.

## Solution
The `bugSolution.js` file provides a solution to this problem.  This might involve restructuring the CSS classes, reorganizing the `@apply` directives, using more specific classes, or adopting alternative techniques to achieve the desired styling.

## Reproduction
1. Clone this repository.
2. Install dependencies (if any are required).
3. Run the application (instructions might vary depending on the framework used).
4. Observe the incorrect styling in the initial implementation and the correct styling after applying the solution.

## Contributing
Contributions are welcome! Please open an issue or submit a pull request if you have improvements or additional scenarios to add.