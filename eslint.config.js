import { fixupPluginRules } from '@eslint/compat';
import pluginJs from '@eslint/js';
import tsParser from '@typescript-eslint/parser';
// plugins
import eslintConfigPrettier from 'eslint-config-prettier';
import importPlugin from 'eslint-plugin-import';
import eslintPrettierPlugin from 'eslint-plugin-prettier/recommended';
import reactPlugin from 'eslint-plugin-react';
import reactHookPlugin from 'eslint-plugin-react-hooks';
import reactRefreshPlugin from 'eslint-plugin-react-refresh';
import importSortPlugin from 'eslint-plugin-simple-import-sort';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default [
  { files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'] },
  {
    languageOptions: {
      parser: tsParser,
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: globals.browser,
    },
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  reactPlugin.configs.flat.recommended,
  eslintPrettierPlugin,

  {
    settings: {
      react: {
        version: 'detect',
      },
    },
    plugins: {
      'react-hooks': fixupPluginRules(reactHookPlugin),
      'simple-import-sort': importSortPlugin,
      import: { rules: importPlugin.rules },
      'react-refresh': reactRefreshPlugin,
    },
    rules: {
      ...reactHookPlugin.configs.recommended.rules,
      'react/react-in-jsx-scope': 'off',
      'jsx-a11y/accessible-emoji': 'off',
      'react/prop-types': 'off',
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/no-unused-vars': ['warn'],
      '@typescript-eslint/ban-ts-comment': [
        'error',
        { 'ts-ignore': 'allow-with-description' },
      ],
      'jsx-a11y/click-events-have-key-events': 'off',
      'jsx-a11y/anchor-is-valid': 'off',
      'simple-import-sort/imports': 'error',
      'simple-import-sort/exports': 'error',
      'import/first': 'error',
      // 'import/newline-after-import': 'error', // TODO: not support flat config compatible with eslint9
      'import/no-duplicates': 'error',
      'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
    },
  },

  eslintConfigPrettier,
];
