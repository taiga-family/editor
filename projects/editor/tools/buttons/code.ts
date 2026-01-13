import {AsyncPipe, NgForOf} from '@angular/common';
import {
    ChangeDetectionStrategy,
    Component,
    forwardRef,
    inject,
    TemplateRef,
    ViewChild,
} from '@angular/core';
import {
    TuiDataList,
    tuiDropdown,
    TuiDropdownDirective,
    tuiDropdownOpen,
    TuiOption,
    TuiTextfield,
    TuiTextfieldDropdownDirective,
    TuiWithDropdownOpen,
} from '@taiga-ui/core';
import {TUI_EDITOR_CODE_OPTIONS, type TuiEditorOptions} from '@taiga-ui/editor/common';
import {type TuiLanguageEditor} from '@taiga-ui/i18n';
import {type PolymorpheusContent} from '@taiga-ui/polymorpheus';

import {TuiToolbarTool} from '../tool';
import {TuiToolbarButtonTool} from '../tool-button';

@Component({
    standalone: true,
    selector: 'button[tuiCodeTool]',
    imports: [AsyncPipe, NgForOf, TuiDataList, TuiOption, TuiTextfield],
    template: `
        {{ tuiHint() }}

        <ng-container *tuiTextfieldDropdown>
            <tui-data-list>
                <button
                    *ngFor="let item of codeOptionsTexts$ | async; let index = index"
                    tuiOption
                    type="button"
                    (click)="onCode(!!index)"
                >
                    {{ item }}
                </button>
            </tui-data-list>
        </ng-container>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush,
    hostDirectives: [TuiToolbarButtonTool, TuiDropdownDirective, TuiWithDropdownOpen],
})
export class TuiCodeButtonTool extends TuiToolbarTool {
    protected readonly codeOptionsTexts$ = inject(TUI_EDITOR_CODE_OPTIONS);
    protected readonly dropdown = tuiDropdown(null);
    protected readonly open = tuiDropdownOpen();

    @ViewChild(forwardRef(() => TuiTextfieldDropdownDirective), {read: TemplateRef})
    protected set template(template: PolymorpheusContent) {
        this.dropdown.set(template);
    }

    protected override isActive(): boolean {
        return (
            (this.editor?.isActive('code') || this.editor?.isActive('codeBlock')) ?? false
        );
    }

    protected getIcon(icons: TuiEditorOptions['icons']): string {
        return icons.code;
    }

    protected getHint(texts?: TuiLanguageEditor['toolbarTools']): string {
        return this.open() ? '' : (texts?.code ?? '');
    }

    protected onCode(isCodeBlock: boolean): void {
        this.editor?.[isCodeBlock ? 'toggleCodeBlock' : 'toggleCode']();
    }
}
