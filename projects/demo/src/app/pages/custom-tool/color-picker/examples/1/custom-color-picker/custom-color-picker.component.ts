import {AsyncPipe} from '@angular/common';
import {ChangeDetectionStrategy, Component, Inject, Input} from '@angular/core';
import {TuiActiveZoneModule} from '@taiga-ui/cdk';
import {TuiButtonModule, TuiHostedDropdownModule} from '@taiga-ui/core';
import {
    AbstractTuiEditor,
    TUI_EDITOR_OPTIONS,
    TuiColorSelectorComponent,
    TuiEditorOptions,
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
    @Input()
    colors: ReadonlyMap<string, string> = this.defaultOptions.colors;

    @Input()
    icon?: string;

    @Input()
    type!: 'BackgroundColor' | 'FontColor';

    selectedColor = '';

    readonly fontColor$ = this.editor.stateChange$.pipe(
        map(() =>
            this.editor.getOriginTiptapEditor().isFocused
                ? this.editor[`get${this.type}` as const]?.() || 'transparent'
                : 'transparent',
        ),
        distinctUntilChanged(),
        share(),
    );

    constructor(
        @Inject(TUI_EDITOR_OPTIONS)
        private readonly defaultOptions: TuiEditorOptions,
        @Inject(TuiTiptapEditorService) readonly editor: AbstractTuiEditor,
    ) {}

    onValueChange(color: string): void {
        this.selectedColor = color;
    }

    setColor(): void {
        this.editor[`set${this.type}` as const]?.(this.selectedColor);
    }
}
