module.exports = {
  env: {
    es6: true,
  },
  extends: [
    'airbnb',
    'airbnb/hooks',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:eslint-comments/recommended',
    'plugin:import/typescript',
    'plugin:typescript-sort-keys/recommended',
    'plugin:you-dont-need-lodash-underscore/compatible-warn',
    'prettier',
  ],
  overrides: [
    {
      files: ['**/*.tsx'],
      rules: {
        // disable prop-types checking in TypeScript components
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prop-types.md
        'react/prop-types': 'off',
      },
    },
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    project: 'tsconfig.json',
    sourceType: 'module',
  },
  plugins: [
    '@typescript-eslint',
    'simple-import-sort',
    'sort-destructure-keys',
    'sort-keys-fix',
    'typescript-sort-keys',
  ],
  rules: {
    // warn instead of error @ts-ignore etc
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/ban-ts-comment.md
    '@typescript-eslint/ban-ts-comment': 'warn',

    // airbnb rule applied to @typescript-eslint
    // https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/default-param-last.md
    '@typescript-eslint/default-param-last': 'error',

    // warn instead of error for consistency with no-explicit-any
    // https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/no-unsafe-argument.md
    '@typescript-eslint/no-unsafe-argument': 'warn',

    // warn instead of error for consistency with no-explicit-any
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unsafe-assignment.md
    '@typescript-eslint/no-unsafe-assignment': 'warn',

    // warn instead of error for consistency with no-explicit-any
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unsafe-call.md
    '@typescript-eslint/no-unsafe-call': 'warn',

    // warn instead of error for consistency with no-explicit-any
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unsafe-member-access.md
    '@typescript-eslint/no-unsafe-member-access': 'warn',

    // warn instead of error for consistency with no-explicit-any
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unsafe-return.md
    '@typescript-eslint/no-unsafe-return': 'warn',

    // airbnb rule applied to @typescript-eslint
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unused-expressions.md
    '@typescript-eslint/no-unused-expressions': [
      'error',
      {
        allowShortCircuit: false,
        allowTaggedTemplates: false,
        allowTernary: false,
      },
    ],

    // airbnb rule applied to @typescript-eslint
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unused-vars.md
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        args: 'after-used',
        ignoreRestSiblings: true,
        vars: 'all',
      },
    ],

    // airbnb rule applied to @typescript-eslint, additionally ignoring typings
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-use-before-define.md
    '@typescript-eslint/no-use-before-define': [
      'error',
      { classes: true, functions: true, ignoreTypeReferences: true, variables: true },
    ],

    // airbnb rule applied to @typescript-eslint
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-useless-constructor.md
    '@typescript-eslint/no-useless-constructor': 'error',

    // allow any, booleans, numbers and null/undefined as template literal expressions
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/restrict-template-expressions.md
    '@typescript-eslint/restrict-template-expressions': 'off',

    // sort union/intersection type members since we like to sort
    // https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/sort-type-union-intersection-members.md
    '@typescript-eslint/sort-type-constituents': 'error',

    // revert airbnb rule that was disabled by eslint-config-prettier
    // https://eslint.org/docs/rules/arrow-body-style
    // https://github.com/prettier/eslint-config-prettier/blob/master/index.js
    'arrow-body-style': [
      'error',
      'as-needed',
      {
        requireReturnForObjectLiteral: false,
      },
    ],

    // more strict than the airbnb rule
    // https://eslint.org/docs/rules/camelcase
    camelcase: [
      'error',
      {
        properties: 'always',
      },
    ],

    // disable consistent returns, since we typically do not return explicit undefined
    // https://eslint.org/docs/rules/consistent-return
    'consistent-return': 'off',

    // disable in favor of @typescript-eslint/default-param-last
    // https://eslint.org/docs/rules/default-param-last
    'default-param-last': 'off',

    // allow disabling a rule in the beginning of a file without re-enabling the rule
    // https://mysticatea.github.io/eslint-plugin-eslint-comments/rules/disable-enable-pair.html
    'eslint-comments/disable-enable-pair': ['error', { allowWholeFile: true }],

    // check obsolete eslint-disables
    // https://mysticatea.github.io/eslint-plugin-eslint-comments/rules/no-unused-disable.html
    'eslint-comments/no-unused-disable': 'error',

    // add typescript extensions
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/extensions.md
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        mjs: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],

    // FIXME disabled since it seems to be reporting false positives
    // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-import-module-exports.md
    'import/no-import-module-exports': 'off',

    // disabled in favor of sort-imports
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/order.md
    'import/order': 'off',

    // add exception after single line
    // https://eslint.org/docs/rules/lines-between-class-members
    'lines-between-class-members': ['error', 'always', { exceptAfterSingleLine: true }],

    // increase max classes per file from 1 (airbnb) to 3
    // https://eslint.org/docs/rules/max-classes-per-file
    'max-classes-per-file': ['error', 3],

    // extend airbnb rule by adding "collection", "document", "modifier" and "toolbox" into ignored properties
    // https://eslint.org/docs/rules/no-param-reassign.html
    'no-param-reassign': [
      'error',
      {
        ignorePropertyModificationsFor: [
          'acc', // for reduce accumulators
          'accumulator', // for reduce accumulators
          'e', // for e.returnvalue
          'collection', // for Meteor hooks
          'ctx', // for Koa routing
          'context', // for Koa routing
          'document', // for Meteor hooks
          'modifier', // for Meteor hooks
          'req', // for Express requests
          'request', // for Express requests
          'res', // for Express responses
          'response', // for Express responses
          '$scope', // for Angular 1 scopes
          'staticContext', // for ReactRouter context,
          'toolbox', // for Gluegun toolbox
        ],
        props: true,
      },
    ],

    // Loosening airbnb no-pluplus rule for for loops
    // https://eslint.org/docs/rules/no-plusplus#allowforloopafterthoughts
    'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],

    // remove ForOfStatement from airbnb rule to allow clear syntax for async for-of loops
    // https://eslint.org/docs/rules/no-restricted-syntax
    'no-restricted-syntax': [
      'error',
      {
        message:
          'for..in loops iterate over the entire prototype chain, which is virtually never what you want. Use Object.{keys,values,entries}, and iterate over the resulting array.',
        selector: 'ForInStatement',
      },
      {
        message: 'Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.',
        selector: 'LabeledStatement',
      },
      {
        message: '`with` is disallowed in strict mode because it makes code impossible to predict and optimize.',
        selector: 'WithStatement',
      },
    ],

    // we have plenty of MongoDB fields prefixed with underscore, hence this rule is disabled
    // https://eslint.org/docs/rules/no-underscore-dangle
    'no-underscore-dangle': 'off',

    'no-unreachable': 'error',

    // disable in favor of @typescript-eslint/no-unused-expressions
    // https://eslint.org/docs/rules/no-unused-expressions
    'no-unused-expressions': 'off',

    // disable in favor of @typescript-eslint/no-use-before-define
    // https://eslint.org/docs/rules/no-use-before-define
    'no-use-before-define': 'off',

    // disable in favor of @typescript-eslint/no-useless-constructor
    // https://eslint.org/docs/rules/no-useless-constructor
    'no-useless-constructor': 'off',

    // more strict padding line requirements, adapted from https://github.com/ionic-team/eslint-config/issues/5
    // https://eslint.org/docs/rules/padding-line-between-statements
    'padding-line-between-statements': [
      'error',
      { blankLine: 'always', next: 'multiline-block-like', prev: '*' },
      { blankLine: 'always', next: '*', prev: 'multiline-block-like' },
      { blankLine: 'always', next: ['const', 'export', 'let'], prev: '*' },
      { blankLine: 'always', next: '*', prev: ['const', 'export', 'let'] },
      { blankLine: 'always', next: 'return', prev: '*' },
      { blankLine: 'any', next: ['const', 'export', 'let'], prev: ['const', 'export', 'let'] },
      { blankLine: 'any', next: ['if'], prev: ['const', 'if', 'let'] },
      { blankLine: 'any', next: ['switch'], prev: ['const', 'let'] },
      { blankLine: 'never', next: ['case', 'default'], prev: ['case'] },
    ],

    // Prefer destructuring for objects only
    // https://eslint.org/docs/rules/prefer-destructuring
    'prefer-destructuring': [
      'error',
      {
        AssignmentExpression: {
          array: false,
          object: false,
        },
        VariableDeclarator: {
          array: false,
          object: true,
        },
      },
      {
        enforceForRenamedProperties: false,
      },
    ],

    // ignore class fields
    // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/destructuring-assignment.md
    'react/destructuring-assignment': ['error', 'always', { ignoreClassFields: true }],

    // prefer other styling method than the style attribute
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/forbid-component-props.md
    'react/forbid-component-props': [
      'warn',
      {
        forbid: [
          {
            message: 'Avoid inline styles and consider other means for styling your components',
            propName: 'style',
          },
        ],
      },
    ],

    // less strict than airbnb (allows any)
    // https://github.com/yannickcr/eslint-plugin-react/blob/843d71a432baf0f01f598d7cf1eea75ad6896e4b/docs/rules/forbid-prop-types.md
    'react/forbid-prop-types': [
      'error',
      {
        checkChildContextTypes: true,
        checkContextTypes: true,
        forbid: ['array', 'object'],
      },
    ],

    // prefer arrow functions instead of function expressions
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/function-component-definition.md
    'react/function-component-definition': [
      'error',
      {
        namedComponents: 'arrow-function',
        unnamedComponents: 'arrow-function',
      },
    ],

    // force explicit boolean props for consistent syntax
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-boolean-value.md
    'react/jsx-boolean-value': ['error', 'always'],

    // only .jsx or .tsx files may have JSX
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-filename-extension.md
    'react/jsx-filename-extension': ['error', { extensions: ['.jsx', '.tsx'] }],

    // make case sensitive due to Material-UI (was ignoreCase: true)
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-duplicate-props.md
    'react/jsx-no-duplicate-props': ['error', { ignoreCase: false }],

    // allow props spreading since we're using it quite a lot already
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-props-no-spreading.md
    'react/jsx-props-no-spreading': 'off',

    // force props sorting since we like to sort
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-sort-props.md
    'react/jsx-sort-props': [
      'error',
      {
        callbacksLast: false,
        ignoreCase: true,
        noSortAlphabetically: false,
        reservedFirst: false,
        shorthandFirst: false,
        shorthandLast: false,
      },
    ],

    // we accept undefined non-required props
    // https://github.com/yannickcr/eslint-plugin-react/blob/843d71a432baf0f01f598d7cf1eea75ad6896e4b/docs/rules/require-default-props.md
    'react/require-default-props': 'off',

    // force prop types sorting since we like to sort
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/sort-prop-types.md
    'react/sort-prop-types': [
      'error',
      {
        callbacksLast: false,
        ignoreCase: true,
        requiredFirst: false,
        sortShapeProp: true,
      },
    ],

    // airbnb has TODO: set to "never", so we set it already
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/state-in-constructor.md
    'react/state-in-constructor': ['error', 'never'],

    // airbnb has TODO: set to "static public field", so we set it already
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/static-property-placement.md
    'react/static-property-placement': ['error', 'static public field'],

    // force import sorting since we like to sort (uses plugin instead of sort-imports for proper autofix)
    // https://github.com/lydell/eslint-plugin-simple-import-sort
    'simple-import-sort/imports': [
      'error',
      {
        groups: [['^\\u0000', '^@?\\w', '^[^.]', '^\\.']],
      },
    ],

    // warn instead of error on cognitive complexity
    // https://github.com/SonarSource/eslint-plugin-sonarjs/blob/master/docs/rules/cognitive-complexity.md
    // 'sonarjs/cognitive-complexity': 'warn',

    // Nesting used especially with styled-components
    // https://github.com/SonarSource/eslint-plugin-sonarjs/blob/master/docs/rules/no-nested-template-literals.md
    // 'sonarjs/no-nested-template-literals': 'off',

    // force keys sorting in destructuring since we like to sort
    // https://github.com/mthadley/eslint-plugin-sort-destructure-keys
    'sort-destructure-keys/sort-destructure-keys': [
      'error',
      {
        caseSensitive: false,
      },
    ],

    // force keys sorting since we like to sort
    // https://github.com/leo-buneev/eslint-plugin-sort-keys-fix
    'sort-keys-fix/sort-keys-fix': [
      'error',
      'asc',
      {
        caseSensitive: false,
        natural: true,
      },
    ],
  },
  settings: {
    react: {
      version: 'detect',
    },
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/extensions': ['.d.ts', '.js', '.jsx', '.mjs', '.ts', '.tsx'],
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true, // always try to resolve types under `<root>@types` directory even it doesn't contain any source code, like `@types/unist`
      },
      node: {
        extensions: ['.d.ts', '.js', '.jsx', '.json', '.mjs', '.ts', '.tsx'],
      },
    },
  },
};
