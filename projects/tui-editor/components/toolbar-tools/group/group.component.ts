import {ChangeDetectionStrategy, Component, Inject, Input, Optional} from '@angular/core';
import {TuiLanguageEditor} from '@taiga-ui/i18n';
import {AbstractTuiEditor} from '@tinkoff/tui-editor/abstract';
import {TuiTiptapEditorService} from '@tinkoff/tui-editor/directives';
import {
    TUI_EDITOR_OPTIONS,
    TUI_EDITOR_TOOLBAR_TEXTS,
    TuiEditorOptions,
} from '@tinkoff/tui-editor/tokens';
import {Observable} from 'rxjs';
import {distinctUntilChanged, map} from 'rxjs/operators';

@Component({
    selector: 'tui-editor-group-tool',
    templateUrl: './group.component.html',
    styleUrls: ['../tools-common.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiEditorGroupToolComponent {
    @Input('editor')
    inputEditor: AbstractTuiEditor | null = null;

    readonly insertGroupText$ = this.texts$.pipe(map(texts => texts.insertGroup));
    readonly removeGroupText$ = this.texts$.pipe(map(texts => texts.removeGroup));

    readonly disabled$ = this.editor?.stateChange$.pipe(
        map(() => !this.editor?.isActive('group')),
        distinctUntilChanged(),
    );

    constructor(
        @Optional()
        @Inject(TuiTiptapEditorService)
        readonly injectionEditor: AbstractTuiEditor | null,
        @Inject(TUI_EDITOR_TOOLBAR_TEXTS)
        readonly texts$: Observable<TuiLanguageEditor['toolbarTools']>,
        @Inject(TUI_EDITOR_OPTIONS) readonly options: TuiEditorOptions,
    ) {}

    get editor(): AbstractTuiEditor | null {
        return this.injectionEditor ?? this.inputEditor;
    }

    addGroup(): void {
        this.editor?.setGroup();
    }

    removeGroup(): void {
        this.editor?.removeGroup();
    }
}
