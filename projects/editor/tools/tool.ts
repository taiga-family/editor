import {computed, Directive, inject, Input} from '@angular/core';
import {toSignal} from '@angular/core/rxjs-interop';
import {TUI_IS_MOBILE, tuiDirectiveBinding} from '@taiga-ui/cdk';
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
    },
})
export class TuiToolbarTool {
    protected readonly isMobile = inject(TUI_IS_MOBILE);
    protected readonly options = inject(TUI_EDITOR_OPTIONS);
    protected readonly texts = toSignal(inject(TUI_EDITOR_TOOLBAR_TEXTS));

    protected readonly iconStart = tuiDirectiveBinding(
        TuiIcons,
        'iconStart',
        this.ensureIcon(this.options.icons),
    );

    protected readonly tuiHint = tuiDirectiveBinding(
        TuiHintDirective,
        'tuiHint',
        computed((texts = this.texts()) => this.ensureHint(texts)),
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

    protected ensureIcon(_?: TuiEditorOptions['icons']): string {
        return '';
    }

    protected ensureHint(_?: TuiLanguageEditor['toolbarTools']): string {
        return '';
    }
}
