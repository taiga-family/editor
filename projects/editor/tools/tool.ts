import {
    ChangeDetectorRef,
    computed,
    DestroyRef,
    Directive,
    inject,
    Input,
    type OnInit,
    signal,
} from '@angular/core';
import {takeUntilDestroyed, toSignal} from '@angular/core/rxjs-interop';
import {TUI_IS_MOBILE, tuiDirectiveBinding, tuiWatch} from '@taiga-ui/cdk';
import {TuiAppearance, TuiHintDirective, TuiHintManual, TuiIcons} from '@taiga-ui/core';
import {
    type AbstractTuiEditor,
    TUI_EDITOR_OPTIONS,
    TUI_EDITOR_TOOLBAR_TEXTS,
    type TuiEditorOptions,
} from '@taiga-ui/editor/common';
import {TuiTiptapEditorService} from '@taiga-ui/editor/directives/tiptap-editor';
import {type TuiLanguageEditor} from '@taiga-ui/i18n';
import {
    BehaviorSubject,
    distinctUntilChanged,
    of,
    shareReplay,
    startWith,
    switchMap,
} from 'rxjs';

import {TuiToolbarButtonTool} from './tool-button';

@Directive()
export abstract class TuiToolbarTool implements OnInit {
    private editorInstance: AbstractTuiEditor | null = inject(TuiTiptapEditorService, {
        optional: true,
    });

    private readonly editor$ = new BehaviorSubject(this.editorInstance);

    protected readonly cd = inject(ChangeDetectorRef);
    protected readonly destroy$ = inject(DestroyRef);
    protected readonly isMobile = inject(TUI_IS_MOBILE);
    protected readonly options = inject(TUI_EDITOR_OPTIONS);

    protected readonly texts = toSignal(inject(TUI_EDITOR_TOOLBAR_TEXTS));
    protected readonly readOnly = signal(false);
    protected readonly activeOnly = signal(false);
    protected readonly isFocused = signal(false);

    protected readonly disabled = tuiDirectiveBinding(
        TuiToolbarButtonTool,
        'disabled',
        computed(() => this.readOnly()),
    );

    protected readonly active = tuiDirectiveBinding(
        TuiAppearance,
        'tuiAppearanceState',
        computed(() => (this.activeOnly() && this.isFocused() ? 'active' : null)),
    );

    protected readonly iconStart = tuiDirectiveBinding(
        TuiIcons,
        'iconStart',
        this.getIcon(this.options.icons),
    );

    protected readonly tuiHint = tuiDirectiveBinding(
        TuiHintDirective,
        'tuiHint',
        computed((texts = this.texts()) => this.getHint(texts)),
    );

    protected readonly tuiHintManual = tuiDirectiveBinding(
        TuiHintManual,
        'tuiHintManual',
        !this.isMobile && null,
    );

    protected getDisableState?(): boolean;

    protected isActive?(): boolean;

    protected abstract getIcon(icons: TuiEditorOptions['icons']): string;

    protected abstract getHint(options?: TuiLanguageEditor['toolbarTools']): string;

    @Input()
    public set editor(editor: AbstractTuiEditor | null) {
        this.editorInstance = editor;
        this.editor$.next(editor);
    }

    public get editor(): AbstractTuiEditor | null {
        return this.editorInstance;
    }

    public ngOnInit(): void {
        this.editor$
            .pipe(
                distinctUntilChanged(),
                switchMap((editor) => {
                    this.updateSignals();

                    return editor
                        ? editor.valueChange$.pipe(
                              startWith(null),
                              shareReplay({bufferSize: 1, refCount: true}),
                              takeUntilDestroyed(this.destroy$),
                              tuiWatch(this.cd),
                          )
                        : of(null);
                }),
                takeUntilDestroyed(this.destroy$),
            )
            .subscribe(() => this.updateSignals());
    }

    protected updateSignals(): void {
        this.isFocused.set(this.editor?.isFocused ?? false);
        this.readOnly.set(this.getDisableState?.() ?? false);
        this.activeOnly.set(this.isActive?.() ?? false);

        // caretaker note: trigger computed effect
        this.cd.detectChanges();
    }
}
