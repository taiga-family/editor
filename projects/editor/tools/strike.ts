import {ChangeDetectionStrategy, Component} from '@angular/core';
import type {TuiEditorOptions} from '@taiga-ui/editor/common';
import type {TuiLanguageEditor} from '@taiga-ui/i18n/types/language';

import {TuiToolbarTool} from './tool';

@Component({
    standalone: true,
    selector: 'button[tuiStrikeTool]',
    template: '{{ tuiHint() }}',
    changeDetection: ChangeDetectionStrategy.OnPush,
    hostDirectives: [TuiToolbarTool],
    host: {
        '(click)': 'editor?.toggleStrike()',
    },
})
export class TuiStrikeTool extends TuiToolbarTool {
    protected override ensureIcon(icons: TuiEditorOptions['icons']): string {
        return icons.fontStyleStrike;
    }

    protected override ensureHint(texts: TuiLanguageEditor['toolbarTools']): string {
        return texts?.strikeThrough;
    }
}
