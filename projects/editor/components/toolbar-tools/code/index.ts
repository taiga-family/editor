import {AsyncPipe, NgForOf} from '@angular/common';
import type {OnInit} from '@angular/core';
import {ChangeDetectionStrategy, Component, inject, Input} from '@angular/core';
import {TuiDataList, TuiDropdown} from '@taiga-ui/core';
import type {AbstractTuiEditor} from '@taiga-ui/editor/common';
import {TUI_EDITOR_CODE_OPTIONS} from '@taiga-ui/editor/common';
import {TuiTiptapEditorService} from '@taiga-ui/editor/directives';
import {TuiCodeButtonTool} from '@taiga-ui/editor/tools';
import type {Observable} from 'rxjs';
import {combineLatest, map, of} from 'rxjs';

@Component({
    standalone: true,
    // TODO: deprecate, use tui-code-tool
    selector: 'tui-code,tui-code-tool',
    imports: [AsyncPipe, NgForOf, TuiCodeButtonTool, TuiDataList, TuiDropdown],
    template: `
        <button
            tuiCodeTool
            [editor]="editor"
            [tuiDropdown]="codesDropdown"
            [tuiDropdownOpen]="false"
        >
            <ng-template #codesDropdown>
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
            </ng-template>
        </button>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiCodeTool implements OnInit {
    private localEditor: AbstractTuiEditor | null = null;
    protected readonly injectionEditor = inject(TuiTiptapEditorService, {optional: true});
    protected readonly codeOptionsTexts$ = inject(TUI_EDITOR_CODE_OPTIONS);
    protected insideCode$: Observable<boolean> | null = null;

    @Input('editor')
    public set inputEditor(value: AbstractTuiEditor | null) {
        this.localEditor = value;
        this.initStream();
    }

    public ngOnInit(): void {
        this.initStream();
    }

    public onCode(isCodeBlock: boolean): void {
        this.editor?.[isCodeBlock ? 'toggleCodeBlock' : 'toggleCode']();
    }

    protected get editor(): AbstractTuiEditor | null {
        return this.injectionEditor ?? this.localEditor;
    }

    private initStream(): void {
        this.insideCode$ = combineLatest({
            code: this.editor?.isActive$('code') ?? of(false),
            codeBlock: this.editor?.isActive$('codeBlock') ?? of(false),
        }).pipe(map(({code, codeBlock}) => code || codeBlock));
    }
}

/**
 * @deprecated use {@link TuiCodeTool}
 */
export const TuiCode = TuiCodeTool;
