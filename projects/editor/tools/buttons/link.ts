import {ChangeDetectionStrategy, Component} from '@angular/core';
import {type TuiEditorOptions} from '@taiga-ui/editor/common';
import {type TuiLanguageEditor} from '@taiga-ui/i18n';

import {TuiToolbarTool} from '../tool';
import {TuiToolbarButtonTool} from '../tool-button';

@Component({
    standalone: true,
    selector: 'button[tuiLinkTool]',
    template: '{{ tuiHint() }}',
    changeDetection: ChangeDetectionStrategy.OnPush,
    hostDirectives: [TuiToolbarButtonTool],
    host: {
        '[attr.automation-id]': '"toolbar__link-button"',
        '(click)': 'onLink()',
    },
})
export class TuiLinkButtonTool extends TuiToolbarTool {
    protected override isActive(): boolean {
        return this.editor?.isActive('link') ?? false;
    }

    protected override getDisableState(): boolean {
        return (
            (this.editor?.isActive('link') ?? false) ||
            (this.editor?.isActive('jumpAnchor') ?? false) ||
            (this.editor?.isActive('image', {'data-editing-href': true}) ?? false)
        );
    }

    protected getIcon(icons: TuiEditorOptions['icons']): string {
        return icons.link;
    }

    protected getHint(texts?: TuiLanguageEditor['toolbarTools']): string {
        return texts?.link ?? '';
    }

    protected onLink(url?: string): void {
        this.editor?.takeSelectionSnapshot();
        this.editor?.toggleLink(url ?? '');
    }
}
