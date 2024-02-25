import {AsyncPipe} from '@angular/common';
import {ChangeDetectionStrategy, Component, inject, Input} from '@angular/core';
import {TuiActiveZoneModule} from '@taiga-ui/cdk';
import {TuiButtonModule, TuiHostedDropdownModule} from '@taiga-ui/core';
import {
    AbstractTuiEditor,
    TUI_EDITOR_OPTIONS,
    TuiColorSelectorComponent,
    TuiTiptapEditorService,
} from '@tinkoff/tui-editor';
import {distinctUntilChanged, map, share} from 'rxjs';

@Component({
    standalone: true,
    selector: 'custom-color-picker',
    imports: [
        TuiActiveZoneModule,
        TuiHostedDropdownModule,
        TuiButtonModule,
        AsyncPipe,
        TuiColorSelectorComponent,
    ],
    templateUrl: './custom-color-picker.component.html',
    styleUrls: ['./custom-color-picker.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CustomColorPickerComponent {
    private readonly defaultOptions = inject(TUI_EDITOR_OPTIONS);

    @Input()
    colors: ReadonlyMap<string, string> = this.defaultOptions.colors;

    @Input()
    icon?: string;

    @Input()
    type: 'BackgroundColor' | 'FontColor' = 'FontColor';

    selectedColor = '';

    readonly editor: AbstractTuiEditor = inject(TuiTiptapEditorService);

    readonly fontColor$ = this.editor.stateChange$.pipe(
        map(() =>
            this.editor.getOriginTiptapEditor().isFocused
                ? this.editor[`get${this.type}` as const]?.() || 'transparent'
                : 'transparent',
        ),
        distinctUntilChanged(),
        share(),
    );

    onValueChange(color: string): void {
        this.selectedColor = color;
    }

    setColor(): void {
        this.editor[`set${this.type}` as const]?.(this.selectedColor);
    }
}
