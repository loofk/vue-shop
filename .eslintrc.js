module.exports = {
  env: {
    "browser": true,
    "es6": true,
    "node": true
  },
  extends: [
    "eslint:recommended",
    "plugin:vue/essential",
    // "plugin:vue/base",
    // "plugin:@typescript-eslint/eslint-recommended",
    // "plugin:@typescript-eslint/recommended"
  ],
  globals: {
    "Atomics": "readonly",
    "SharedArrayBuffer": "readonly"
  },
  parserOptions: {
    "ecmaVersion": 11,
    "parser": "@typescript-eslint/parser",
    "sourceType": "module"
  },
  plugins: [
    "vue",
    "@typescript-eslint"
  ],
  rules: {
    "no-empty": 0,
    'no-useless-escape': 0,
    "no-console": process.env.NODE_ENV === "production" ? 2 : 0
  }
};
