# Configuring Prettier with Airbnb Style Guide Rules

To configure Prettier with code formatting rules that align with the Airbnb JavaScript style guide without using ESLint or any additional packages, you can create a `.prettierrc` file with the following settings:

```json
{
  "printWidth": 100,
  "tabWidth": 2,
  "useTabs": false,
  "semi": true,
  "singleQuote": true,
  "quoteProps": "as-needed",
  "jsxSingleQuote": false,
  "trailingComma": "all",
  "bracketSpacing": true,
  "jsxBracketSameLine": false,
  "arrowParens": "always",
  "endOfLine": "lf"
}
```

- `printWidth`: Maximum line length is set to 100 characters.
- `tabWidth`: Indentation with 2 spaces per tab.
- `useTabs`: Spaces are used for indentation (set to `false`).
- `semi`: Semicolons are used at the end of statements.
- `singleQuote`: Single quotes are used for string literals.
- `quoteProps`: Object properties are quoted only when necessary.
- `jsxSingleQuote`: Single quotes are not used for JSX attributes.
- `trailingComma`: Adds trailing commas to arrays and objects.
- `bracketSpacing`: Spaces are added inside object literals.
- `jsxBracketSameLine`: JSX closing bracket is on a new line.
- `arrowParens`: Parentheses are always added to arrow function parameters.
- `endOfLine`: Line endings are set to LF (Unix-style).
