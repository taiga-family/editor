import {
    ChangeDetectorRef,
    computed,
    DestroyRef,
    Directive,
    inject,
    Input,
    type OnChanges,
    type OnDestroy,
    signal,
    type SimpleChanges,
} from '@angular/core';
import {takeUntilDestroyed, toSignal} from '@angular/core/rxjs-interop';
import {TUI_IS_MOBILE, tuiDirectiveBinding, tuiWatch} from '@taiga-ui/cdk';
import {TuiHintDirective, TuiHintManual, TuiIcons} from '@taiga-ui/core';
import {
    type AbstractTuiEditor,
    TUI_EDITOR_OPTIONS,
    TUI_EDITOR_TOOLBAR_TEXTS,
    type TuiEditorOptions,
} from '@taiga-ui/editor/common';
import {TuiTiptapEditorService} from '@taiga-ui/editor/directives';
import {type TuiLanguageEditor} from '@taiga-ui/i18n';
import {shareReplay, startWith, type Subscription} from 'rxjs';

import {TuiToolbarButtonTool} from './tool-button';

@Directive()
export abstract class TuiToolbarTool implements OnChanges, OnDestroy {
    protected readonly cd = inject(ChangeDetectorRef);
    protected readonly destroy$ = inject(DestroyRef);
    protected readonly isMobile = inject(TUI_IS_MOBILE);
    protected readonly options = inject(TUI_EDITOR_OPTIONS);
    protected readonly texts = toSignal(inject(TUI_EDITOR_TOOLBAR_TEXTS));
    protected readonly readOnly = signal(false);
    protected subscription?: Subscription;

    protected readonly disabled = tuiDirectiveBinding(
        TuiToolbarButtonTool,
        'disabled',
        computed(() => this.readOnly()),
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

    @Input()
    public editor: AbstractTuiEditor | null = inject(TuiTiptapEditorService, {
        optional: true,
    });

    protected getDisableState?(): boolean;

    protected abstract getIcon(icons: TuiEditorOptions['icons']): string;

    protected abstract getHint(options?: TuiLanguageEditor['toolbarTools']): string;

    public ngOnChanges(changes: SimpleChanges): void {
        if (!changes['editor']) {
            return;
        }

        this.subscription?.unsubscribe();

        this.update();

        this.subscription = this.editor?.valueChange$
            .pipe(
                startWith(null),
                shareReplay({bufferSize: 1, refCount: true}),
                takeUntilDestroyed(this.destroy$),
                tuiWatch(this.cd),
            )
            .subscribe(() => this.update());
    }

    public ngOnDestroy(): void {
        this.subscription?.unsubscribe();
    }

    private update(): void {
        this.readOnly.set(this.getDisableState?.() ?? false);
    }
}
