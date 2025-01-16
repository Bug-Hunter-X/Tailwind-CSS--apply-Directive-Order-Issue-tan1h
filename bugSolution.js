The solution involves careful consideration of the order of `@apply` directives and potentially refactoring the CSS classes.  Instead of relying on the order, you can opt for more explicit and specific Tailwind classes, potentially improving maintainability.  For example, instead of relying on `@apply` for complex styles, consider composing classes, prioritizing specificity in your CSS rules, or utilizing layers in your Tailwind configuration to control the order of application.  This addresses the unpredictable behavior caused by `@apply`'s order sensitivity.