/**
 * @type {import('eslint').Linter.Config}
 */
module.exports = {
    root: true,
    extends: [
        '@tinkoff/eslint-config',
        '@tinkoff/eslint-config-angular',
        '@tinkoff/eslint-config-angular/rxjs',
        '@tinkoff/eslint-config-angular/imports',
    ],
    ignorePatterns: [
        'projects/**/test.ts',
        '*.json',
        '*.less',
        '*.md',
        '*.js',
        'jest.config.ts',
        'setup-jest.ts',
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module',
        project: [require.resolve('./tsconfig.eslint.json')],
    },
};
