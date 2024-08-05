import {
    ChangeDetectionStrategy,
    Component,
    Inject,
    Input,
    OnInit,
    Optional,
} from '@angular/core';
import {TuiLanguageEditor} from '@taiga-ui/i18n';
import {AbstractTuiEditor} from '@tinkoff/tui-editor/abstract';
import {TuiTiptapEditorService} from '@tinkoff/tui-editor/directives';
import {
    TUI_EDITOR_OPTIONS,
    TUI_EDITOR_TOOLBAR_TEXTS,
    TuiEditorOptions,
} from '@tinkoff/tui-editor/tokens';
import {combineLatest, Observable, of} from 'rxjs';
import {map} from 'rxjs/operators';

@Component({
    selector: 'tui-list-configs',
    templateUrl: './list-configs.template.html',
    styleUrls: ['../tools-common.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiListConfigsComponent implements OnInit {
    private localEditor: AbstractTuiEditor | null = null;

    @Input('editor')
    set inputEditor(value: AbstractTuiEditor | null) {
        this.localEditor = value;
        this.initStream();
    }

    listState$: Observable<{
        ordered: boolean;
        unordered: boolean;
        tasked: boolean;
    }> | null = null;

    constructor(
        @Inject(TUI_EDITOR_OPTIONS) readonly options: TuiEditorOptions,
        @Optional()
        @Inject(TuiTiptapEditorService)
        readonly injectionEditor: AbstractTuiEditor | null,
        @Inject(TUI_EDITOR_TOOLBAR_TEXTS)
        readonly texts$: Observable<TuiLanguageEditor['toolbarTools']>,
    ) {}

    get editor(): AbstractTuiEditor | null {
        return this.injectionEditor ?? this.localEditor;
    }

    ngOnInit(): void {
        this.initStream();
    }

    sinkListItem(): void {
        this.editor?.sinkListItem();
    }

    liftListItem(): void {
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
