import {Directive, signal} from '@angular/core';
import {
    TuiButton,
    tuiButtonOptionsProvider,
    TuiHintDirective,
    TuiHintManual,
    tuiHintOptionsProvider,
} from '@taiga-ui/core';

@Directive({
    providers: [
        tuiHintOptionsProvider({direction: ['top-start', 'top', 'end']}),
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
        tuiIconButton: '',
        tuiItem: '',
        tuiToolbarTool: '',
        type: 'button',
        '[disabled]': 'disabled()',
    },
})
export class TuiToolbarButtonTool {
    public readonly disabled = signal(false);
}
