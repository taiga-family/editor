import {AsyncPipe, NgIf} from '@angular/common';
import type {OnInit} from '@angular/core';
import {ChangeDetectionStrategy, Component, inject, Input} from '@angular/core';
import {TuiButton, TuiDropdown, TuiHint} from '@taiga-ui/core';
import type {AbstractTuiEditor, TuiEditorOptions} from '@taiga-ui/editor/common';
import {TUI_EDITOR_OPTIONS, TUI_EDITOR_TOOLBAR_TEXTS} from '@taiga-ui/editor/common';
import {TuiTiptapEditorService} from '@taiga-ui/editor/directives';
import {TuiPaletteModule} from '@taiga-ui/legacy';
import type {Observable} from 'rxjs';
import {distinctUntilChanged, map} from 'rxjs';

@Component({
    standalone: true,
    selector: 'tui-highlight-color',
    imports: [AsyncPipe, NgIf, TuiButton, TuiDropdown, TuiHint, TuiPaletteModule],
    templateUrl: './index.html',
    styleUrls: ['../../../styles/tools-common.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiHighlightColor implements OnInit {
    private localEditor: AbstractTuiEditor | null = null;
    private readonly options = inject(TUI_EDITOR_OPTIONS);
    protected readonly injectionEditor = inject(TuiTiptapEditorService, {optional: true});
    protected readonly texts$ = inject(TUI_EDITOR_TOOLBAR_TEXTS);
    protected backgroundColor$: Observable<string> | null = null;
    protected readonly backColorText$ = this.texts$.pipe(map((texts) => texts.backColor));

    @Input()
    public colors: ReadonlyMap<string, string> = this.options.colors;

    @Input('editor')
    public set inputEditor(value: AbstractTuiEditor | null) {
        this.localEditor = value;
        this.initStream();
    }

    public ngOnInit(): void {
        this.initStream();
    }

    public isBlankColor(color: string): boolean {
        return color === this.options.blankColor;
    }

    protected get editor(): AbstractTuiEditor | null {
        return this.injectionEditor ?? this.localEditor;
    }

    protected get icons(): TuiEditorOptions['icons'] {
        return this.options.icons;
    }

    private initStream(): void {
        this.backgroundColor$ =
            this.editor?.stateChange$.pipe(
                map(
                    () =>
                        this.editor?.getBackgroundColor() ??
                        this.options.blankColor ??
                        false,
                ),
                distinctUntilChanged(),
            ) ?? null;
    }
}