import {AsyncPipe} from '@angular/common';
import type {OnInit} from '@angular/core';
import {ChangeDetectionStrategy, Component, inject, Input} from '@angular/core';
import type {AbstractTuiEditor} from '@taiga-ui/editor/common';
import {TuiTiptapEditorService} from '@taiga-ui/editor/directives';
import {TuiInsertGroupButtonTool, TuiRemoveGroupButtonTool} from '@taiga-ui/editor/tools';
import type {Observable} from 'rxjs';
import {map} from 'rxjs';

@Component({
    standalone: true,
    selector: 'tui-editor-group-tool',
    imports: [AsyncPipe, TuiInsertGroupButtonTool, TuiRemoveGroupButtonTool],
    template: `
        <button
            tuiInsertGroupTool
            [disabled]="disabled$ | async"
            [editor]="editor"
        ></button>
        <button
            tuiRemoveGroupTool
            [disabled]="disabled$ | async"
            [editor]="editor"
        ></button>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiEditorGroupTool implements OnInit {
    private localEditor: AbstractTuiEditor | null = null;
    protected readonly injectionEditor = inject(TuiTiptapEditorService, {optional: true});

    protected disabled$: Observable<boolean> | null = null;

    @Input('editor')
    public set inputEditor(value: AbstractTuiEditor | null) {
        this.localEditor = value;
        this.initStream();
    }

    public ngOnInit(): void {
        this.initStream();
    }

    protected get editor(): AbstractTuiEditor | null {
        return this.injectionEditor ?? this.localEditor;
    }

    private initStream(): void {
        this.disabled$ =
            this.editor?.isActive$('group').pipe(map((isActive) => !isActive)) ?? null;
    }
}
