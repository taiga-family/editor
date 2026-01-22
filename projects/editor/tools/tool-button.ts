import {Directive, signal} from '@angular/core';
import {
    TuiButton,
    tuiButtonOptionsProvider,
    TuiHintDirective,
    TuiHintManual,
    tuiHintOptionsProvider,
} from '@taiga-ui/core';

@Directive({
    standalone: true,
    providers: [
        tuiHintOptionsProvider({direction: ['top-left', 'top', 'right']}),
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
export class TuiToolbarButtonTool {
    public readonly disabled = signal<boolean>(false);
}
