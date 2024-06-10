import {AsyncPipe} from '@angular/common';
import {ChangeDetectionStrategy, Component, inject, Input} from '@angular/core';
import {TuiActiveZoneDirective} from '@taiga-ui/cdk';
import {TuiButtonDirective} from '@taiga-ui/core';
import type {AbstractTuiEditor} from '@taiga-ui/editor';
import {
    TUI_EDITOR_OPTIONS,
    TuiColorSelector,
    TuiTiptapEditorService,
} from '@taiga-ui/editor';
import {TuiHostedDropdownModule} from '@taiga-ui/legacy';
import {distinctUntilChanged, map, share} from 'rxjs';

@Component({
    standalone: true,
    selector: 'custom-color-picker',
    imports: [
        TuiActiveZoneDirective,
        TuiHostedDropdownModule,
        TuiButtonDirective,
        AsyncPipe,
        TuiColorSelector,
    ],
    templateUrl: './custom-color-picker.component.html',
    styleUrls: ['./custom-color-picker.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CustomColorPicker {
    private readonly defaultOptions = inject(TUI_EDITOR_OPTIONS);

    protected selectedColor = '';
    protected readonly editor: AbstractTuiEditor = inject(TuiTiptapEditorService);
    protected readonly fontColor$ = this.editor.stateChange$.pipe(
        map(() =>
            this.editor.getOriginTiptapEditor().isFocused
                ? this.editor[`get${this.type}` as const]?.() || 'transparent'
                : 'transparent',
        ),
        distinctUntilChanged(),
        share(),
    );

    @Input()
    public colors: ReadonlyMap<string, string> = this.defaultOptions.colors;

    @Input()
    public icon?: string;

    @Input()
    public type: 'BackgroundColor' | 'FontColor' = 'FontColor';

    protected onValueChange(color: string): void {
        this.selectedColor = color;
    }

    protected setColor(): void {
        this.editor[`set${this.type}` as const]?.(this.selectedColor);
    }
}
