import eslint from '@eslint/js';
import stylistic from '@stylistic/eslint-plugin';
import tsPlugin from '@typescript-eslint/eslint-plugin';
import jsoncPlugin from 'eslint-plugin-jsonc';
import tsdocPlugin from 'eslint-plugin-tsdoc';
import tsEslint from 'typescript-eslint';

export default tsEslint.config(

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

  // Styles configuration
  stylistic.configs.customize({
    quoteProps: 'consistent',
    semi: true,
    jsx: false,
  }),
  {
    files: ['**/*.{ts,js}'],
    plugins: {
      '@stylistic': stylistic,
    },
    rules: {
      '@stylistic/indent': ['error', 2],
    },
  },

  // TS configuration
  ...tsEslint.configs.recommendedTypeChecked.map(
    c => ({ ...c, files: ['**/*.ts'] }),
  ),
  {
    files: ['**/*.ts'],
    languageOptions: {
      parserOptions: {
        tsconfigRootDir: import.meta.dirname,
        projectService: {
          allowDefaultProject: [
            'test-*/*.ts',
            'benchmarks/*.ts',
          ],
        },
        ecmaVersion: 2020,
        sourceType: 'module',
      },
    },
    plugins: {
      '@typescript-eslint': tsPlugin,
      'tsdoc': tsdocPlugin,
    },
    rules: {
      'tsdoc/syntax': 'error',
    },
  },

  // JSON configuration
  ...jsoncPlugin.configs['flat/recommended-with-jsonc'],
  {
    files: ['*.json', '*.json5', '*.jsonc'],
    plugins: {
      'jsonc': jsoncPlugin,
    },
    rules: {
      'jsonc/array-bracket-newline': ['error', 'consistent'],
      'jsonc/array-element-newline': ['error', 'consistent'],
    },
  },

);
