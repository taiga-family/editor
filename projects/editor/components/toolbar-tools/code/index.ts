import {AsyncPipe, NgForOf} from '@angular/common';
import type {OnInit} from '@angular/core';
import {ChangeDetectionStrategy, Component, inject, Input} from '@angular/core';
import {TUI_IS_MOBILE, TuiItem} from '@taiga-ui/cdk';
import {TuiButton, TuiDataList, TuiDropdown, TuiHint} from '@taiga-ui/core';
import type {AbstractTuiEditor} from '@taiga-ui/editor/common';
import {
    TUI_EDITOR_CODE_OPTIONS,
    TUI_EDITOR_OPTIONS,
    TUI_EDITOR_TOOLBAR_TEXTS,
} from '@taiga-ui/editor/common';
import {TuiTiptapEditorService} from '@taiga-ui/editor/directives';
import type {Observable} from 'rxjs';
import {combineLatest, map, of} from 'rxjs';

@Component({
    standalone: true,
    // TODO: deprecate tui-code
    selector: 'tui-code,tui-code-tool',
    imports: [AsyncPipe, NgForOf, TuiButton, TuiDataList, TuiDropdown, TuiHint, TuiItem],
    templateUrl: './index.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiCodeTool implements OnInit {
    private localEditor: AbstractTuiEditor | null = null;
    protected readonly isMobile = inject(TUI_IS_MOBILE);
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

/**
 * @deprecated use {@link TuiCodeTool}
 */
export const TuiCode = TuiCodeTool;
