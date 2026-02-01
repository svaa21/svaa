import { defineConfig, globalIgnores } from 'eslint/config'
import eslintPluginAstro from 'eslint-plugin-astro'
import jsxA11y from 'eslint-plugin-jsx-a11y'
import eslint from '@eslint/js'
import tseslint from 'typescript-eslint'

export default defineConfig([
  globalIgnores([
    '/dist/**/*',
    '/node_modules/**/*',
    '.astro/**/*',
    'tsconfig.json'
  ]),
  jsxA11y.flatConfigs.recommended,
  eslint.configs.recommended,
  tseslint.configs.recommended,
  ...eslintPluginAstro.configs.recommended,
  {
    rules: {
      // override/add rules settings here, such as:
      // "astro/no-set-html-directive": "error"
    }
  }
])
