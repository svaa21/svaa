import eslintPluginAstro from 'eslint-plugin-astro'
import eslintPluginJsxA11y from 'eslint-plugin-jsx-a11y'
export default [
  // add more generic rule sets here, such as:
  // js.configs.recommended,
  ...eslintPluginAstro.configs.recommended,
  eslintPluginJsxA11y.flatConfigs.recommended,
  {
    rules: {
      // override/add rules settings here, such as:
      // "astro/no-set-html-directive": "error",

      curly: ['error', 'multi-or-nest'],
      eqeqeq: ['error', 'always', { null: 'ignore' }],
      camelcase: ['error', { properties: 'never' }],
      yoda: ['error', 'never'],

      semi: 'off',
      'astro/semi': ['error', 'never'],
      'max-len': ['error', { code: 80, ignoreUrls: true, ignoreStrings: true }],
      indent: ['error', 2, { SwitchCase: 1 }],
      quotes: ['error', 'single', { avoidEscape: true }],
      'quote-props': ['error', 'as-needed'],
      'jsx-quotes': ['error', 'prefer-single'],
      'comma-dangle': ['error', 'never'],
      'object-curly-spacing': ['error', 'always'],
      'array-bracket-spacing': ['error', 'never'],
      'comma-spacing': ['error', { before: false, after: true }],
      'arrow-parens': ['error', 'as-needed'],
      'no-multiple-empty-lines': ['error', { max: 1 }],
      //   'react/jsx-closing-bracket-location': [
      //     'error',
      //     { nonEmpty: 'line-aligned', selfClosing: 'line-aligned' }
      //   ],
      //   'react/jsx-tag-spacing': [
      //     'error',
      //     {
      //       closingSlash: 'never',
      //       beforeSelfClosing: 'always',
      //       afterOpening: 'never',
      //       beforeClosing: 'never'
      //     }
      //   ],
      'space-infix-ops': 'error',
      'no-trailing-spaces': 'error',
      'no-multi-spaces': 'error'
    }
  }
]
