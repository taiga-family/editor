import {ChangeDetectionStrategy, Component} from '@angular/core';
import type {TuiEditorOptions} from '@taiga-ui/editor/common';
import type {TuiLanguageEditor} from '@taiga-ui/i18n/types/language';

import {TuiToolbarTool} from './tool';

@Component({
    standalone: true,
    selector: 'button[tuiSizeTool]',
    template: '{{ tuiHint() }}',
    changeDetection: ChangeDetectionStrategy.OnPush,
    hostDirectives: [TuiToolbarTool],
})
export class TuiSizeTool extends TuiToolbarTool {
    protected override ensureIcon(icons: TuiEditorOptions['icons']): string {
        return icons.fontSize;
    }

    protected override ensureHint(texts: TuiLanguageEditor['toolbarTools']): string {
        return texts?.font;
    }
}
