import {ChangeDetectionStrategy, Component, EventEmitter, Output} from '@angular/core';
import type {TuiEditorOptions} from '@taiga-ui/editor/common';
import type {TuiLanguageEditor} from '@taiga-ui/i18n/types/language';

import {TuiToolbarButtonTool} from '../tool';

@Component({
    standalone: true,
    selector: 'button[tuiTexTool]',
    template: '{{ tuiHint() }}',
    changeDetection: ChangeDetectionStrategy.OnPush,
    hostDirectives: [TuiToolbarButtonTool],
    host: {
        '(click)': 'texClicked?.emit()',
    },
})
export class TuiTexButtonTool extends TuiToolbarButtonTool {
    @Output()
    public readonly texClicked = new EventEmitter<void>();

    protected override getIcon(icons: TuiEditorOptions['icons']): string {
        return icons.tex;
    }

    protected override getHint(texts: TuiLanguageEditor['toolbarTools']): string {
        return texts?.tex;
    }
}
