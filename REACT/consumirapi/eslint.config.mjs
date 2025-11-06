import js from '@eslint/js';
import globals from 'globals';
import pluginReact from 'eslint-plugin-react';
import { defineConfig } from 'eslint/config';

export default defineConfig([
  {
    files: ['**/*.{js,mjs,cjs,jsx}'],
    plugins: { js },
    extends: ['js/recommended', 'prettier', 'prettier/react'],
    languageOptions: { globals: globals.browser },
    parser: 'babel-eslint',
    plugins: ['react', 'prettier', 'react-hooks'],
    rules: {
      'prettier/prettier': 'error',
      'react/jsx-filename-extension': 0,
      'import/prefer-default-export': 0,
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
    },
  },
  pluginReact.configs.flat.recommended,
]);