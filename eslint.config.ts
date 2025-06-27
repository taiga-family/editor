import taiga from '@taiga-ui/eslint-plugin-experience-next';

export default [
    ...taiga.configs.recommended,
    ...taiga.configs['taiga-specific'],
    {
        files: ['**/*.html'],
        rules: {
            '@angular-eslint/template/elements-content': 'off',
            '@angular-eslint/template/button-has-type': [
                'error',
                {
                    ignoreWithDirectives: [
                        'tuiAccordion',
                        'tuiOption',
                        'tuiTab',
                        'tuiBoldTool',
                        'tuiItalicTool',
                        'tuiUnderlineTool',
                        'tuiStrikeTool',
                        'tuiStylePreviewTool',
                        'tuiSizeTool',
                    ],
                },
            ],
        },
    },
    {
        ignores: ['.release-it.js'],
    },
];
