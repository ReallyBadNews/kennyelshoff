module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: { jsx: true },
    sourceType: "module",
    ecmaVersion: 6,
    project: "./tsconfig.eslint.json",
  },
  plugins: ["@typescript-eslint", "eslint-plugin-prettier"],
  env: {
    browser: true,
    node: true,
  },
  extends: [
    // "next",
    // "next/core-web-vitals",
    "airbnb",
    "airbnb-typescript",
    "plugin:react/recommended",
    // "plugin:import/recommended",
    "plugin:import/typescript",
    "plugin:@next/next/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:mdx/recommended",
    "prettier",
  ],
  rules: {
    "prettier/prettier": "error",
    "react/prop-types": "off",
    "react/jsx-one-expression-per-line": ["error", { allow: "single-child" }],
    "arrow-body-style": ["error", "always"],
    "react/react-in-jsx-scope": "off",
    "no-console": ["error", { allow: ["warn", "error"] }],
    "import/no-extraneous-dependencies": ["error", { devDependencies: true }],
    "import/prefer-default-export": "off",
    "react/no-danger": "off",
    "react/jsx-props-no-spreading": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "react/jsx-sort-props": [
      "error",
      { callbacksLast: true, shorthandLast: true, reservedFirst: true },
    ],
    "jsx-a11y/anchor-is-valid": [
      "error",
      {
        components: ["NextLink"],
        specialLink: ["href"],
      },
    ],
  },
  overrides: [
    {
      // enable the rule specifically for TypeScript files
      files: ["**/*.ts", "**/*.tsx"],
      rules: {},
    },
    {
      // enable the rule specifically for TypeScript files
      files: ["**/*.js", "**/*.jsx"],
      rules: {
        "@typescript-eslint/no-var-requires": "off",
      },
    },
  ],
  settings: {
    "mdx/code-blocks": true,
    // optional, if you want to disable language mapper, set it to `false`
    // if you want to override the default language mapper inside, you can provide your own
    "mdx/language-mapper": {},
    react: {
      version: "detect",
    },
  },
};