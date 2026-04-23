import {ChangeDetectionStrategy, Component, output} from '@angular/core';
import {type TuiEditorOptions} from '@taiga-ui/editor/common';
import {type TuiLanguageEditor} from '@taiga-ui/i18n';

import {TuiToolbarTool} from '../tool';
import {TuiToolbarButtonTool} from '../tool-button';

@Component({
    selector: 'button[tuiTexTool]',
    template: '{{ tuiHint() }}',
    changeDetection: ChangeDetectionStrategy.OnPush,
    hostDirectives: [TuiToolbarButtonTool],
    host: {'(click)': 'texClicked.emit()'},
})
export class TuiTexButtonTool extends TuiToolbarTool {
    public readonly texClicked = output();

    protected getIcon(icons: TuiEditorOptions['icons']): string {
        return icons.tex;
    }

    protected getHint(texts?: TuiLanguageEditor['toolbarTools']): string {
        return texts?.tex ?? '';
    }
}
