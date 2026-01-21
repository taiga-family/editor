import {ChangeDetectionStrategy, Component} from '@angular/core';
import {type TuiEditorOptions} from '@taiga-ui/editor/common';
import {type TuiLanguageEditor} from '@taiga-ui/i18n';

import {TuiToolbarTool} from '../tool';
import {TuiToolbarButtonTool} from '../tool-button';

@Component({
    standalone: true,
    selector: 'button[tuiItalicTool]',
    template: '{{ tuiHint() }}',
    changeDetection: ChangeDetectionStrategy.OnPush,
    hostDirectives: [TuiToolbarButtonTool],
    host: {'(click)': 'editor?.toggleItalic()'},
})
export class TuiItalicButtonTool extends TuiToolbarTool {
    protected override isActive(): boolean {
        return this.editor?.isActive('italic') ?? false;
    }

    protected getIcon(icons: TuiEditorOptions['icons']): string {
        return icons.fontStyleItalic;
    }

    protected getHint(texts?: TuiLanguageEditor['toolbarTools']): string {
        return texts?.italic ?? '';
    }
}
