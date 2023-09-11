module.exports = {
    parser: '@typescript-eslint/parser',
    extends: [
      'plugin:react/recommended',
      'plugin:@typescript-eslint/recommended',
      'airbnb',
      'prettier',
      'plugin:prettier/recommended',
      'plugin:import/typescript',
      'plugin:storybook/recommended',
    ],
    parserOptions: {
      ecmaVersion: 2018,
      sourceType: 'module',
      ecmaFeatures: {
        jsx: true,
      },
    },
    plugins: ['@typescript-eslint', 'prettier'],
    rules: {
      'react/jsx-uses-react': 0,
      'react/react-in-jsx-scope': 0,
      'prettier/prettier': 'error',
      '@typescript-eslint/indent': 0,
      '@typescript-eslint/no-unused-vars': 'error',
      '@typescript-eslint/no-explicit-any': 'error',
      '@typescript-eslint/no-non-null-assertion': 0,
      'react/no-this-in-sfc': 0,
      'no-use-before-define': 0,
      'dot-notation': 0,
      'no-shadow': 'off',
      'no-console': [
        'warn',
        {
          allow: ['info', 'error'],
        },
      ],
      '@typescript-eslint/no-shadow': 'error',
      'import/prefer-default-export': 'off',
      'react/jsx-filename-extension': [
        2,
        {
          extensions: ['.js', '.jsx', '.ts', '.tsx'],
        },
      ],
      'import/extensions': [
        'error',
        'ignorePackages',
        {
          js: 'never',
          jsx: 'never',
          ts: 'never',
          tsx: 'never',
        },
      ],
      'react/jsx-props-no-spreading': 'off',
      'import/no-extraneous-dependencies': [
        'error',
        {
          devDependencies: true,
        },
      ],
      'no-unused-expressions': [
        'error',
        {
          allowShortCircuit: true,
          allowTernary: true,
        },
      ],
    },
    settings: {
      react: {
        version: 'detect',
      },
      'import/extensions': ['.js', '.jsx', '.ts', '.tsx'],
      'import/resolver': {
        typescript: {},
        node: {
          extensions: ['.ts', '.tsx', '.js', '.jsx'],
        },
      },
    },
    env: {
      jest: true,
      browser: true,
    },
    overrides: [
      {
        files: ['**/*.tsx'],
        rules: {
          'react/prop-types': 'off',
        },
      },
    ],
  }
  