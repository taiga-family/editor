import {ChangeDetectionStrategy, Component} from '@angular/core';
import {type TuiEditorOptions} from '@taiga-ui/editor/common';
import {type TuiLanguageEditor} from '@taiga-ui/i18n';

import {TuiToolbarTool} from '../tool';
import {TuiToolbarButtonTool} from '../tool-button';

@Component({
    standalone: true,
    selector: 'button[tuiSuperscriptTool]',
    template: '{{ tuiHint() }}',
    changeDetection: ChangeDetectionStrategy.OnPush,
    hostDirectives: [TuiToolbarButtonTool],
    host: {'(click)': 'editor?.toggleSuperscript()'},
})
export class TuiSuperscriptButtonTool extends TuiToolbarTool {
    protected override isActive(): boolean {
        return this.editor?.isActive('superscript') ?? false;
    }

    protected getIcon(icons: TuiEditorOptions['icons']): string {
        return icons.sup;
    }

    protected getHint(texts?: TuiLanguageEditor['toolbarTools']): string {
        return texts?.superscript ?? '';
    }
}
