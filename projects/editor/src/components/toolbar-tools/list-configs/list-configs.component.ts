import {AsyncPipe, NgIf} from '@angular/common';
import {ChangeDetectionStrategy, Component, inject, Input} from '@angular/core';
import {TuiLet} from '@taiga-ui/cdk';
import {TuiButton, TuiDropdown, TuiHint} from '@taiga-ui/core';
import type {AbstractTuiEditor} from 'projects/editor/src/abstract/editor-adapter.abstract';
import type {Observable} from 'rxjs';
import {combineLatest, map, of} from 'rxjs';

import {TuiTiptapEditorService} from '../../../directives/tiptap-editor/tiptap-editor.service';
import {TUI_EDITOR_OPTIONS} from '../../../tokens/editor-options';
import {TUI_EDITOR_TOOLBAR_TEXTS} from '../../../tokens/i18n';

@Component({
    standalone: true,
    selector: 'tui-list-configs',
    imports: [AsyncPipe, NgIf, TuiButton, TuiDropdown, TuiHint, TuiLet],
    templateUrl: './list-configs.template.html',
    styleUrls: ['../../../../styles/tools-common.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiListConfigs {
    private localEditor: AbstractTuiEditor | null = null;
    protected readonly options = inject(TUI_EDITOR_OPTIONS);
    protected readonly injectionEditor = inject(TuiTiptapEditorService, {optional: true});
    protected readonly texts$ = inject(TUI_EDITOR_TOOLBAR_TEXTS);

    protected listState$: Observable<{
        ordered: boolean;
        unordered: boolean;
        tasked: boolean;
    }> | null = null;

    @Input('editor')
    public set inputEditor(value: AbstractTuiEditor | null) {
        this.localEditor = value;
        this.initStream();
    }

    protected get editor(): AbstractTuiEditor | null {
        return this.injectionEditor ?? this.localEditor;
    }

    protected sinkListItem(): void {
        this.editor?.sinkListItem();
    }

    protected liftListItem(): void {
        this.editor?.liftListItem();
    }

    private initStream(): void {
        this.listState$ = combineLatest([
            this.editor?.isActive$('orderedList') ?? of(false),
            this.editor?.isActive$('bulletList') ?? of(false),
            this.editor?.isActive$('taskList') ?? of(false),
        ]).pipe(
            map(([ordered, unordered, tasked]) => ({
                ordered,
                unordered,
                tasked,
            })),
        );
    }
}
