import {AsyncPipe, NgIf} from '@angular/common';
import {
    ChangeDetectionStrategy,
    Component,
    inject,
    Input,
    ViewEncapsulation,
} from '@angular/core';
import {TuiItem} from '@taiga-ui/cdk';
import {tuiHintOptionsProvider} from '@taiga-ui/core';
import type {AbstractTuiEditor} from '@taiga-ui/editor';
import {
    TUI_EDITOR_OPTIONS,
    TuiAlignContent,
    TuiFontStyle,
    TuiListConfigs,
} from '@taiga-ui/editor';

@Component({
    standalone: true,
    selector: 'custom-toolbar',
    imports: [AsyncPipe, NgIf, TuiAlignContent, TuiFontStyle, TuiItem, TuiListConfigs],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        tuiHintOptionsProvider({
            direction: ['top-left', 'top', 'right'],
        }),
    ],
})
export class CustomToolbar {
    protected readonly options = inject(TUI_EDITOR_OPTIONS);

    @Input()
    public editor: AbstractTuiEditor | null = null;
}
