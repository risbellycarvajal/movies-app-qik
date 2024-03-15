module.exports = {
    env: {
        es6: true,
        node: true,
        jest: true
    },
    extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:react-hooks/recommended',
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
        'prettier'
    ],
    overrides: [
        {
            parser: 'espree',
            files: ['.eslintrc.{js,cjs}'],
            parserOptions: {
                sourceType: 'script'
            }
        }
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        project: './tsconfig.json'
    },
    plugins: ['@typescript-eslint', 'react', 'react-hooks', 'prettier'],
    settings: {
        react: {
            version: 'detect'
        }
    },
    rules: {
        'linebreak-style': ['error', 'unix'],
        semi: ['error', 'always'],
        'no-empty-function': 'error',
        'prettier/prettier': 'error',
        '@typescript-eslint/no-unsafe-assignment': 'off',
        '@typescript-eslint/no-unsafe-member-access': 'off',
        'react-hooks/exhaustive-deps': 'off',
        '@typescript-eslint/consistent-type-imports': 'error',
        '@typescript-eslint/no-floating-promises': 'off',
        'react/react-in-jsx-scope': 'off'
    }
};
