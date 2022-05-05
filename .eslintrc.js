module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "plugin:react/recommended",
    "google",
    "prettier",
    "plugin:@typescript-eslint/recommended",
  ],

  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react", "@typescript-eslint"],
  rules: {
    quotes: [2, "double", { avoidEscape: true }],
    "quote-props": [2, "as-needed"],
    "object-curly-spacing": [2, "always"],
    "react/react-in-jsx-scope": "off",
    "require-jsdoc": 0,
    "spaced-comment": [2, "never"],
  },
  settings: {
    react: {
      version: "latest",
    },
  },
};
