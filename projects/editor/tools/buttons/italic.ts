import {ChangeDetectionStrategy, Component} from '@angular/core';
import type {TuiEditorOptions} from '@taiga-ui/editor/common';
import type {TuiLanguageEditor} from '@taiga-ui/i18n/types/language';

import {TuiToolbarButtonTool} from '../tool';

@Component({
    standalone: true,
    selector: 'button[tuiItalicTool]',
    template: '{{ tuiHint() }}',
    changeDetection: ChangeDetectionStrategy.OnPush,
    hostDirectives: [TuiToolbarButtonTool],
    host: {
        '(click)': 'editor?.toggleItalic()',
    },
})
export class TuiItalicButtonTool extends TuiToolbarButtonTool {
    protected override getIcon(icons: TuiEditorOptions['icons']): string {
        return icons.fontStyleItalic;
    }

    protected override getHint(texts: TuiLanguageEditor['toolbarTools']): string {
        return texts?.italic;
    }
}
