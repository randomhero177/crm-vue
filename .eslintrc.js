module.exports = {
  root: true,
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: [
    'plugin:vue/strongly-recommended',
    '@vue/airbnb',
  ],
  rules: {
    'max-len': [
      'error',
      {
        code: 120,
      },
    ],
    'no-shadow': [
      'error',
      {
        allow: ['state'],
      },
    ],
    'no-param-reassign': [
      'error',
      {
        props: true,
        ignorePropertyModificationsFor: ['state', 'Vue', 'acc', 'e'],
      },
    ],
    'no-console': 'off',
    'no-debugger': 'off',
    'vue/max-attributes-per-line': [
      'error',
      {
        singleline: 2,
        multiline: {
          max: 1,
          allowFirstLine: false,
        },
      },
    ],
    'vue/component-name-in-template-casing': ['error', 'kebab-case', {
      registeredComponentsOnly: false,
      ignores: [],
    }],
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.vue'],
      },
    },
  },
  overrides: [
    {
      files: [
        '**/__tests__/*.{j,t}s?(x)',
        '**/tests/unit/**/*.spec.{j,t}s?(x)',
      ],
      env: {
        jest: true,
      },
    },
  ],
};
