import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import tsParser from '@typescript-eslint/parser';
import tsPlugin from '@typescript-eslint/eslint-plugin';
import eslintPluginJsonc from 'eslint-plugin-jsonc';
import eslintPluginTsdoc from 'eslint-plugin-tsdoc';
import stylistic from '@stylistic/eslint-plugin';

export default tseslint.config(
  // Shared configuration
  eslint.configs.recommended,
  {
    ignores: [
      '.nyc_output/**',
      '.tsimp/**',
      '.vscode/**',
      'coverage/**',
      'dist/**',
      'lib/**',
      'node_modules/**',
      'package-lock.json',
    ],
  },

  // JS configuration
  {
    files: ['**/*.js'],
    plugins: {
      '@stylistic': stylistic,
    },
    rules: {
      '@stylistic/indent': ['error', 2],
    },
  },

  // TS configuration
  ...tseslint.configs.recommended,
  {
    files: ['**/*.ts'],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        tsconfigRootDir: import.meta.dirname,
        project: './tsconfig.eslint.json',
        ecmaVersion: 2020,
        sourceType: 'module',
      },
    },
    plugins: {
      '@typescript-eslint': tsPlugin,
      '@stylistic': stylistic,
      tsdoc: eslintPluginTsdoc,
    },
    rules: {
      '@stylistic/indent': ['error', 2],
      'tsdoc/syntax': 'error',
    },
  },

  // JSON configuration
  ...eslintPluginJsonc.configs['flat/recommended-with-jsonc'],
  {
    files: ['*.json', '*.json5', '*.jsonc'],
    plugins: {
      jsonc: eslintPluginJsonc,
    },
    rules: {
      'jsonc/array-bracket-newline': ['error', 'consistent'],
      'jsonc/array-element-newline': ['error', 'consistent'],
    },
  },
);
