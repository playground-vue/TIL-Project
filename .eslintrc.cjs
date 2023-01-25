/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution');
module.exports = {
  root: true,
  extends: ['plugin:vue/vue3-recommended', '@vue/typescript/recommended', '@vue/eslint-config-airbnb', 'plugin:storybook/recommended'],
  parser: 'vue-eslint-parser',
  parserOptions: {
    "parser": "@typescript-eslint/parser",
    ecmaVersion: 'latest',
    "sourceType": "module"
  },
  "settings": {
    "import/resolver": {
      "typescript": {}
    }
  },
  rules: {
    'linebreak-style': 'off',
    'no-plusplus': 'off',
    'import/no-extraneous-dependencies': 'off',
    'no-unused-vars': 'off',
    'import/no-cycle': 'off',
    'import/prefer-default-export': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    'no-param-reassign': ['error', {
      props: false
    }],
    'import/extensions': ['error', 'ignorePackages', {
      js: 'never',
      mjs: 'never',
      jsx: 'never',
      ts: 'never',
      tsx: 'never'
    }],
    'vuejs-accessibility/click-events-have-key-events': 'off',
  }
};
