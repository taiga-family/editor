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
    TuiDataListComponent,
    tuiDropdown,
    TuiDropdownDirective,
    TuiOption,
    TuiTextfieldDropdownDirective,
    TuiWithDropdownOpen,
} from '@taiga-ui/core';
import type {TuiEditorOptions} from '@taiga-ui/editor/common';
import {TUI_EDITOR_CODE_OPTIONS} from '@taiga-ui/editor/common';
import type {TuiLanguageEditor} from '@taiga-ui/i18n/types/language';
import type {PolymorpheusContent} from '@taiga-ui/polymorpheus';

import {TuiToolbarTool} from '../tool';
import {TuiToolbarButtonTool} from '../tool-button';

@Component({
    standalone: true,
    selector: 'button[tuiCodeTool]',
    imports: [
        AsyncPipe,
        NgForOf,
        TuiDataListComponent,
        TuiOption,
        TuiTextfieldDropdownDirective,
    ],
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

    @ViewChild(forwardRef(() => TuiTextfieldDropdownDirective), {read: TemplateRef})
    protected set template(template: PolymorpheusContent) {
        this.dropdown.set(template);
    }

    protected getIcon(icons: TuiEditorOptions['icons']): string {
        return icons.code;
    }

    protected getHint(texts: TuiLanguageEditor['toolbarTools']): string {
        return texts?.code;
    }

    protected onCode(isCodeBlock: boolean): void {
        this.editor?.[isCodeBlock ? 'toggleCodeBlock' : 'toggleCode']();
    }
}
