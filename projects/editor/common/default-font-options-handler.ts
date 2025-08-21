import {type TuiLanguageEditor} from '@taiga-ui/i18n';

import {type TuiEditorFontOption} from './editor-font-option';

export function tuiDefaultFontOptionsHandler(
    texts: TuiLanguageEditor['editorFontOptions'],
): ReadonlyArray<Partial<TuiEditorFontOption>> {
    return [
        {
            px: 13,
            name: texts.small,
        },
        {
            px: 15,
            name: texts.normal,
        },
        {
            px: 17,
            name: texts.large,
        },
        {
            px: 24,
            family: 'var(--tui-font-heading)',
            name: texts.subtitle,
            headingLevel: 2,
            weight: 'bold',
        },
        {
            px: 30,
            family: 'var(--tui-font-heading)',
            name: texts.title,
            headingLevel: 1,
            weight: 'bold',
        },
    ];
}
