import {AsyncPipe, NgForOf} from '@angular/common';
import type {OnInit} from '@angular/core';
import {ChangeDetectionStrategy, Component, inject, Input} from '@angular/core';
import {TuiButton, TuiDataList, TuiDropdown, TuiHint} from '@taiga-ui/core';
import type {Observable} from 'rxjs';
import {distinctUntilChanged, map} from 'rxjs';

import type {AbstractTuiEditor} from '../../../abstract/editor-adapter.abstract';
import {TuiTiptapEditorService} from '../../../directives/tiptap-editor/tiptap-editor.service';
import {TUI_EDITOR_OPTIONS} from '../../../tokens/editor-options';
import {TUI_EDITOR_CODE_OPTIONS, TUI_EDITOR_TOOLBAR_TEXTS} from '../../../tokens/i18n';

@Component({
    standalone: true,
    selector: 'tui-code',
    imports: [AsyncPipe, NgForOf, TuiButton, TuiDataList, TuiDropdown, TuiHint],
    templateUrl: './code.component.html',
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
        if (isCodeBlock) {
            this.editor?.toggleCodeBlock();
        } else {
            this.editor?.toggleCode();
        }
    }

    protected get editor(): AbstractTuiEditor | null {
        return this.injectionEditor ?? this.localEditor;
    }

    private initStream(): void {
        this.insideCode$ =
            this.editor?.stateChange$.pipe(
                map(
                    () =>
                        (this.editor?.isActive('code') ||
                            this.editor?.isActive('codeBlock')) ??
                        false,
                ),
                distinctUntilChanged(),
            ) ?? null;
    }
}
