import {AsyncPipe} from '@angular/common';
import type {OnInit} from '@angular/core';
import {ChangeDetectionStrategy, Component, inject, Input} from '@angular/core';
import {TuiButton, TuiHint} from '@taiga-ui/core';
import type {Observable} from 'rxjs';
import {distinctUntilChanged, map} from 'rxjs';

import type {AbstractTuiEditor} from '../../../abstract/editor-adapter.abstract';
import {TuiTiptapEditorService} from '../../../directives/tiptap-editor/tiptap-editor.service';
import {TUI_EDITOR_OPTIONS} from '../../../tokens/editor-options';
import {TUI_EDITOR_TOOLBAR_TEXTS} from '../../../tokens/i18n';

@Component({
    standalone: true,
    selector: 'tui-editor-group-tool',
    imports: [AsyncPipe, TuiButton, TuiHint],
    templateUrl: './group.component.html',
    styleUrls: ['../../../../styles/tools-common.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiEditorGroupTool implements OnInit {
    private localEditor: AbstractTuiEditor | null = null;
    protected readonly injectionEditor = inject(TuiTiptapEditorService, {optional: true});
    protected readonly texts$ = inject(TUI_EDITOR_TOOLBAR_TEXTS);
    protected readonly options = inject(TUI_EDITOR_OPTIONS);

    protected readonly insertGroupText$ = this.texts$.pipe(
        map((texts) => texts.insertGroup),
    );

    protected readonly removeGroupText$ = this.texts$.pipe(
        map((texts) => texts.removeGroup),
    );

    protected disabled$: Observable<boolean> | null = null;

    @Input('editor')
    public set inputEditor(value: AbstractTuiEditor | null) {
        this.localEditor = value;
        this.initStream();
    }

    public ngOnInit(): void {
        this.initStream();
    }

    public addGroup(): void {
        this.editor?.setGroup();
    }

    public removeGroup(): void {
        this.editor?.removeGroup();
    }

    protected get editor(): AbstractTuiEditor | null {
        return this.injectionEditor ?? this.localEditor;
    }

    private initStream(): void {
        this.disabled$ =
            this.editor?.stateChange$.pipe(
                map(() => !this.editor?.isActive('group')),
                distinctUntilChanged(),
            ) ?? null;

        this.editor?.stateChange$.pipe(
            map(() => !this.editor?.isActive('group')),
            distinctUntilChanged(),
        );
    }
}
