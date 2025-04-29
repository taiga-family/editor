import taiga from '@taiga-ui/eslint-plugin-experience-next';

export default [
    ...taiga.configs.recommended,
    ...taiga.configs['taiga-specific'],
    {
        ignores: ['.release-it.js'],
    },
];
