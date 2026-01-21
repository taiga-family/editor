import {ChangeDetectionStrategy, Component} from '@angular/core';
import {type TuiEditorOptions} from '@taiga-ui/editor/common';
import {type TuiLanguageEditor} from '@taiga-ui/i18n';

import {TuiToolbarTool} from '../tool';
import {TuiToolbarButtonTool} from '../tool-button';

@Component({
    standalone: true,
    selector: 'button[tuiSubscriptTool]',
    template: '{{ tuiHint() }}',
    changeDetection: ChangeDetectionStrategy.OnPush,
    hostDirectives: [TuiToolbarButtonTool],
    host: {'(click)': 'editor?.toggleSubscript()'},
})
export class TuiSubscriptButtonTool extends TuiToolbarTool {
    protected override isActive(): boolean {
        return this.editor?.isActive('subscript') ?? false;
    }

    protected getIcon(icons: TuiEditorOptions['icons']): string {
        return icons.sub;
    }

    protected getHint(texts?: TuiLanguageEditor['toolbarTools']): string {
        return texts?.subscript ?? '';
    }
}
