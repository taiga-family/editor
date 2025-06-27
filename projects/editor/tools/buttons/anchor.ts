import {ChangeDetectionStrategy, Component} from '@angular/core';
import type {TuiEditorOptions} from '@taiga-ui/editor/common';
import {tuiGetCurrentWordBounds} from '@taiga-ui/editor/utils';
import type {TuiLanguageEditor} from '@taiga-ui/i18n/types/language';

import {TuiToolbarButtonTool} from '../tool';

@Component({
    standalone: true,
    selector: 'button[tuiAnchorTool]',
    template: '{{ tuiHint() }}',
    changeDetection: ChangeDetectionStrategy.OnPush,
    hostDirectives: [TuiToolbarButtonTool],
    host: {
        '[disabled]': 'a || jumpAnchor',
        '(click)': 'onAnchor()',
    },
})
export class TuiAnchorButtonTool extends TuiToolbarButtonTool {
    protected get a(): boolean {
        return this.editor?.isActive('link') ?? false;
    }

    protected get jumpAnchor(): boolean {
        return this.editor?.isActive('jumpAnchor') ?? false;
    }

    protected override ensureIcon(icons: TuiEditorOptions['icons']): string {
        return icons.anchor;
    }

    protected override ensureHint(texts: TuiLanguageEditor['toolbarTools']): string {
        return texts?.insertAnchor;
    }

    protected onAnchor(): void {
        this.editor?.takeSelectionSnapshot();

        const range = this.editor?.getSelectionSnapshot();
        const editor = this.editor?.getOriginTiptapEditor();
        const {from = range?.anchor} = editor ? tuiGetCurrentWordBounds(editor) : {};

        this.editor?.setAnchor('');
        this.editor?.getOriginTiptapEditor()?.commands.focus((from ?? 0) + 1);
    }
}
