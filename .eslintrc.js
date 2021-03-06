module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: ['airbnb-base', 'plugin:prettier/recommended'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2019,
    sourceType: 'module',
  },
  rules: {
    'no-return-await': 'off',
    camelcase: 'warn',
    'no-unused-vars': 'warn',
    'no-console': 'off',
    'consistent-return': 'off',
    'no-shadow': 'warn',
  },
};
