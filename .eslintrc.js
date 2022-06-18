module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/essential',
    '@vue/airbnb',
  ],
  parserOptions: {
    parser: 'babel-eslint',
  },
  rules: {
    semi: [ 'error', 'always' ],
    curly: [ 'error', 'all' ],
    'template-curly-spacing': 'off',
    indent: [ 'error', 2, { ignoredNodes: [ 'TemplateLiteral' ] }],
    'no-plusplus': 'off',
    'func-names': [ 'off' ],
    'class-methods-use-this': [ 'off' ],
    'no-nested-ternary': [ 'off' ],
    'new-parens': [ 'off' ],
    'array-bracket-spacing': [ 'error', 'always', { singleValue: true, objectsInArrays: false }],
    'no-underscore-dangle': [ 'off' ],
    'no-param-reassign': [ 'off' ],
    'arrow-parens': [ 'error', 'as-needed' ],
    'no-shadow': [ 'off', { builtinGlobals: true }],
    'space-before-function-paren': [ 'error', 'always' ],
    'import/extensions': [ 'error', 'ignorePackages', { vue: 'any', js: 'any' }],
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'vue/multiline-html-element-content-newline': [ 'off' ],
    'vue/singleline-html-element-content-newline': [ 'off' ],
    'vue/max-attributes-per-line': [ 'error', { singleline: 3, multiline: { max: 2, allowFirstLine: false } }],
    'vue/html-self-closing': [ 'error', { html: { void: 'never', normal: 'never', component: 'any' }, svg: 'any', math: 'always' }],
    'vue/no-v-html': 'off',
    'vue/attributes-order': [ 'error' ],
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
