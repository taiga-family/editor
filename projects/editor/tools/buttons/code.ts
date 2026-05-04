import {AsyncPipe} from '@angular/common';
import {
    ChangeDetectionStrategy,
    Component,
    effect,
    forwardRef,
    inject,
    TemplateRef,
    viewChild,
} from '@angular/core';
import {
    TuiDataList,
    tuiDropdown,
    TuiDropdownDirective,
    tuiDropdownOpen,
    TuiInput,
    TuiOption,
    TuiTextfieldDropdownDirective,
    TuiWithDropdownOpen,
} from '@taiga-ui/core';
import {TUI_EDITOR_CODE_OPTIONS, type TuiEditorOptions} from '@taiga-ui/editor/common';
import {type TuiLanguageEditor} from '@taiga-ui/i18n';

import {TuiToolbarTool} from '../tool';
import {TuiToolbarButtonTool} from '../tool-button';

@Component({
    selector: 'button[tuiCodeTool]',
    imports: [AsyncPipe, TuiDataList, TuiInput, TuiOption],
    template: `
        {{ tuiHint() }}

        <ng-container *tuiDropdown>
            <tui-data-list>
                @for (item of codeOptionsTexts$ | async; track item) {
                    <button
                        tuiOption
                        type="button"
                        (click)="onCode(!!$index)"
                    >
                        {{ item }}
                    </button>
                }
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

    protected readonly template = viewChild(
        forwardRef(() => TuiTextfieldDropdownDirective),
        {read: TemplateRef},
    );

    protected readonly templateEffect = effect(() => {
        this.dropdown.set(this.template());
    });

    protected override isActive(): boolean {
        return (
            (this.editor()?.isActive('code') || this.editor()?.isActive('codeBlock')) ??
            false
        );
    }

    protected getIcon(icons: TuiEditorOptions['icons']): string {
        return icons.code;
    }

    protected getHint(texts?: TuiLanguageEditor['toolbarTools']): string {
        return this.open() ? '' : (texts?.code ?? '');
    }

    protected onCode(isCodeBlock: boolean): void {
        this.editor()?.[isCodeBlock ? 'toggleCodeBlock' : 'toggleCode']();
    }
}
