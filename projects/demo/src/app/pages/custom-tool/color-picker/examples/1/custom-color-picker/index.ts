import {AsyncPipe} from '@angular/common';
import {ChangeDetectionStrategy, Component, inject, input} from '@angular/core';
import {TuiButton, TuiDropdown} from '@taiga-ui/core';
import {
    type AbstractTuiEditor,
    TUI_EDITOR_OPTIONS,
    TuiTiptapEditorService,
} from '@taiga-ui/editor';
import {TuiColorSelectorModule} from '@taiga-ui/legacy';
import {distinctUntilChanged, map, share} from 'rxjs';

@Component({
    selector: 'custom-color-picker',
    imports: [AsyncPipe, TuiButton, TuiColorSelectorModule, TuiDropdown],
    templateUrl: './index.html',
    styleUrl: './index.less',
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {tuiPlateHost: ''},
})
export class CustomColorPicker {
    private readonly options = inject(TUI_EDITOR_OPTIONS);
    protected colors = this.options.textColors ?? this.options.colors;
    protected selectedColor = '';
    protected readonly editor: AbstractTuiEditor = inject(TuiTiptapEditorService);

    protected readonly fontColor$ = this.editor.valueChange$.pipe(
        map(() =>
            this.editor.getOriginTiptapEditor()?.isFocused
                ? this.editor[`get${this.type()}` as const]() || 'transparent'
                : 'transparent',
        ),
        distinctUntilChanged(),
        share(),
    );

    public readonly icon = input('');
    public readonly type = input<'BackgroundColor' | 'FontColor'>('FontColor');

    protected onValueChange(color: string): void {
        this.selectedColor = color;
    }

    protected setColor(): void {
        this.editor[`set${this.type()}` as const](this.selectedColor);
    }
}
