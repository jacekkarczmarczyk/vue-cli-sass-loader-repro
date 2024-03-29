module.exports = {
  root: true,
  env: {
    node: true,
    jest: true,
  },
  plugins: [
    '@typescript-eslint',
  ],
  extends: [
    'standard',
    'plugin:vue/recommended',
    /*
    '@vue/typescript',
    */
  ],
  parserOptions: {
    parser: '@typescript-eslint/parser',
  },
  rules: {
    // 'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'arrow-parens': ['error', 'as-needed'],
    'comma-dangle': ['error', 'always-multiline'],
    'constructor-super': 'error',
    'generator-star-spacing': 0,
    indent: ['error', 2],
    'object-shorthand': ['error', 'always'],
    'no-const-assign': 'error',
    'no-empty': 'error',
    'no-extra-semi': 'error',
    'no-redeclare': 'error',
    'no-return-assign': 'error',
    'no-return-await': 'warn',
    'no-template-curly-in-string': 'warn',
    'no-this-before-super': 'warn',
    'no-undef': 'error',
    'no-unreachable': 'error',
    'no-unused-vars': 'off',
    'newline-after-var': ['error', 'always'],
    'import/newline-after-import': 'error',
    semi: ['error', 'always'],
    'no-useless-constructor': 'off',
    'space-infix-ops': 'error',
    'space-before-function-paren': [
      'error',
      {
        anonymous: 'always',
        named: 'always',
        asyncArrow: 'always',
      },
    ],
    'valid-typeof': 'error',

    'vue/require-default-prop': 'off',
    'vue/no-v-html': 'off',
    'vue/prop-name-casing': 'error',
    'vue/component-name-in-template-casing': ['error', 'kebab-case'],
    'vue/singleline-html-element-content-newline': 'off',
    'vue/multiline-html-element-content-newline': 'off',
  },
  overrides: [
    {
      files: '**/*.ts',
      rules: {
        // Can't overload function exports with this enabled
        'import/export': 'error',

        // https://github.com/eslint/typescript-eslint-parser/issues/445
        // https://github.com/eslint/typescript-eslint-parser/issues/457
        // enabled in tslint instead
        'no-unused-vars': 'off',
        // '@typescript-eslint/no-unused-vars': 'error',

        '@typescript-eslint/prefer-namespace-keyword': 'error',
        '@typescript-eslint/adjacent-overload-signatures': 'error',
        '@typescript-eslint/member-ordering': 'error',
        '@typescript-eslint/type-annotation-spacing': 'error',
        '@typescript-eslint/member-delimiter-style': ['error', {
          multiline: {
            delimiter: 'semi',
          },
          singleline: {
            delimiter: 'semi',
          },
        }],
      },
    },
  ],
};
