import type {OnChanges, OnDestroy, SimpleChanges} from '@angular/core';
import {
    ChangeDetectorRef,
    computed,
    DestroyRef,
    Directive,
    inject,
    Input,
    signal,
} from '@angular/core';
import {takeUntilDestroyed, toSignal} from '@angular/core/rxjs-interop';
import {TUI_IS_MOBILE, tuiDirectiveBinding, tuiWatch} from '@taiga-ui/cdk';
import {
    TuiButton,
    tuiButtonOptionsProvider,
    TuiHintDirective,
    TuiHintManual,
    tuiHintOptionsProvider,
    TuiIcons,
} from '@taiga-ui/core';
import type {AbstractTuiEditor, TuiEditorOptions} from '@taiga-ui/editor/common';
import {TUI_EDITOR_OPTIONS, TUI_EDITOR_TOOLBAR_TEXTS} from '@taiga-ui/editor/common';
import {TuiTiptapEditorService} from '@taiga-ui/editor/directives';
import type {TuiLanguageEditor} from '@taiga-ui/i18n/types/language';
import type {Subscription} from 'rxjs';
import {debounceTime, distinctUntilChanged, map, shareReplay, startWith} from 'rxjs';

@Directive({
    standalone: true,
    providers: [
        tuiHintOptionsProvider({
            direction: ['top-left', 'top', 'right'],
        }),
        tuiButtonOptionsProvider({
            size: 's',
            appearance: 'icon',
        }),
    ],
    hostDirectives: [
        TuiHintDirective,
        TuiHintManual,
        {
            directive: TuiButton,
            inputs: ['size'],
        },
    ],
    host: {
        tuiItem: '',
        tuiToolbarTool: '',
        tuiIconButton: '',
        type: 'button',
        '[disabled]': 'disabled()',
    },
})
export class TuiToolbarButtonTool implements OnChanges, OnDestroy {
    protected readonly cd = inject(ChangeDetectorRef);
    protected readonly destroy$ = inject(DestroyRef);
    protected readonly isMobile = inject(TUI_IS_MOBILE);
    protected readonly options = inject(TUI_EDITOR_OPTIONS);
    protected readonly texts = toSignal(inject(TUI_EDITOR_TOOLBAR_TEXTS));
    protected readonly disabled = signal<boolean>(false);
    protected subscription?: Subscription;

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

    public ngOnChanges(changes: SimpleChanges): void {
        if (changes['editor']) {
            this.subscription?.unsubscribe();

            this.disabled.set(this.getDisableState());
            this.subscription = this.editor?.stateChange$
                .pipe(
                    debounceTime(0),
                    startWith(null),
                    map(() => this.getDisableState()),
                    distinctUntilChanged(),
                    shareReplay({bufferSize: 1, refCount: true}),
                    tuiWatch(this.cd),
                    takeUntilDestroyed(this.destroy$),
                )
                .subscribe((disabled) => this.disabled.set(disabled));
        }
    }

    public ngOnDestroy(): void {
        this.subscription?.unsubscribe();
    }

    protected getIcon(_?: TuiEditorOptions['icons']): string {
        return '';
    }

    protected getHint(_?: TuiLanguageEditor['toolbarTools']): string {
        return '';
    }

    protected getDisableState(): boolean {
        return false;
    }
}
