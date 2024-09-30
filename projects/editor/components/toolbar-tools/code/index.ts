import {AsyncPipe, NgForOf} from '@angular/common';
import type {OnInit} from '@angular/core';
import {ChangeDetectionStrategy, Component, inject, Input} from '@angular/core';
import {TuiButton, TuiDataList, TuiDropdown, TuiHint} from '@taiga-ui/core';
import type {AbstractTuiEditor} from '@taiga-ui/editor/common';
import {
    TUI_EDITOR_CODE_OPTIONS,
    TUI_EDITOR_OPTIONS,
    TUI_EDITOR_TOOLBAR_TEXTS,
} from '@taiga-ui/editor/common';
import {TuiTiptapEditorService} from '@taiga-ui/editor/directives';
import {combineLatest, map, type Observable, of} from 'rxjs';

@Component({
    standalone: true,
    selector: 'tui-code',
    imports: [AsyncPipe, NgForOf, TuiButton, TuiDataList, TuiDropdown, TuiHint],
    templateUrl: './index.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiCode implements OnInit {
    private localEditor: AbstractTuiEditor | null = null;
    protected readonly options = inject(TUI_EDITOR_OPTIONS);
    protected readonly injectionEditor = inject(TuiTiptapEditorService, {optional: true});
    protected readonly texts$ = inject(TUI_EDITOR_TOOLBAR_TEXTS);
    protected readonly codeOptionsTexts$ = inject(TUI_EDITOR_CODE_OPTIONS);
    protected readonly hintText$ = this.texts$.pipe(map((texts) => texts.code));
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
