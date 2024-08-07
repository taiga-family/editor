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
    selector: 'tui-align-content',
    templateUrl: './align-content.template.html',
    styleUrls: ['../tools-common.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiAlignContentComponent implements OnInit {
    private localEditor: AbstractTuiEditor | null = null;

    @Input('editor')
    set inputEditor(value: AbstractTuiEditor | null) {
        this.localEditor = value;
        this.initStream();
    }

    alignState$: Observable<{
        left: boolean;
        right: boolean;
        center: boolean;
        justify: boolean;
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

    private initStream(): void {
        this.alignState$ = combineLatest([
            this.editor?.isActive$({textAlign: 'left'}) ?? of(false),
            this.editor?.isActive$({textAlign: 'right'}) ?? of(false),
            this.editor?.isActive$({textAlign: 'center'}) ?? of(false),
            this.editor?.isActive$({textAlign: 'justify'}) ?? of(false),
        ]).pipe(
            map(([left, right, center, justify]) => ({
                left,
                right,
                center,
                justify,
            })),
        );
    }
}
