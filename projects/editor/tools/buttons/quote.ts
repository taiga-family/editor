import {ChangeDetectionStrategy, Component} from '@angular/core';
import {type TuiEditorOptions} from '@taiga-ui/editor/common';
import {type TuiLanguageEditor} from '@taiga-ui/i18n';

import {TuiToolbarTool} from '../tool';
import {TuiToolbarButtonTool} from '../tool-button';

@Component({
    standalone: true,
    selector: 'button[tuiBlockquoteTool]',
    template: '{{ tuiHint() }}',
    changeDetection: ChangeDetectionStrategy.OnPush,
    hostDirectives: [TuiToolbarButtonTool],
    host: {
        '[attr.automation-id]': '"toolbar__quote-button"',
        '(click)': 'editor?.toggleBlockquote()',
    },
})
export class TuiBlockquoteButtonTool extends TuiToolbarTool {
    protected override getDisableState(): boolean {
        return (
            (this.editor?.isActive('bulletList') ?? false) ||
            (this.editor?.isActive('orderedList') ?? false)
        );
    }

    protected getIcon(icons: TuiEditorOptions['icons']): string {
        return icons.quote;
    }

    protected getHint(texts?: TuiLanguageEditor['toolbarTools']): string {
        return texts?.quote ?? '';
    }
}
