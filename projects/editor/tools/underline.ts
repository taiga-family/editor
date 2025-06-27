import {ChangeDetectionStrategy, Component} from '@angular/core';
import type {TuiEditorOptions} from '@taiga-ui/editor/common';
import type {TuiLanguageEditor} from '@taiga-ui/i18n/types/language';

import {TuiToolbarTool} from './tool';

@Component({
    standalone: true,
    selector: 'button[tuiUnderlineTool]',
    template: '{{ tuiHint() }}',
    changeDetection: ChangeDetectionStrategy.OnPush,
    hostDirectives: [TuiToolbarTool],
    host: {
        '(click)': 'editor?.toggleUnderline()',
    },
})
export class TuiUnderlineTool extends TuiToolbarTool {
    protected override ensureIcon(icons: TuiEditorOptions['icons']): string {
        return icons.fontStyleUnderline;
    }

    protected override ensureHint(texts: TuiLanguageEditor['toolbarTools']): string {
        return texts?.underline;
    }
}
