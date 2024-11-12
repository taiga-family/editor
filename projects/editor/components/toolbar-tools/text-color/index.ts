import {AsyncPipe} from '@angular/common';
import type {OnInit} from '@angular/core';
import {ChangeDetectionStrategy, Component, inject, Input} from '@angular/core';
import {TuiButton, TuiDropdown, TuiHint} from '@taiga-ui/core';
import type {AbstractTuiEditor} from '@taiga-ui/editor/common';
import {TUI_EDITOR_OPTIONS, TUI_EDITOR_TOOLBAR_TEXTS} from '@taiga-ui/editor/common';
import {TuiTiptapEditorService} from '@taiga-ui/editor/directives';
import {TuiPaletteModule} from '@taiga-ui/legacy';
import type {Observable} from 'rxjs';
import {distinctUntilChanged, map} from 'rxjs';

@Component({
    standalone: true,
    selector: 'tui-text-color',
    imports: [AsyncPipe, TuiButton, TuiDropdown, TuiHint, TuiPaletteModule],
    templateUrl: './index.html',
    styleUrls: ['../../../styles/tools-common.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiTextColor implements OnInit {
    private localEditor: AbstractTuiEditor | null = null;
    protected readonly options = inject(TUI_EDITOR_OPTIONS);
    protected readonly injectionEditor = inject(TuiTiptapEditorService, {optional: true});
    protected readonly texts$ = inject(TUI_EDITOR_TOOLBAR_TEXTS);
    protected readonly foreColorText$ = this.texts$.pipe(map((texts) => texts.foreColor));
    protected fontColor$: Observable<string> | null = null;

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

    protected get editor(): AbstractTuiEditor | null {
        return this.injectionEditor ?? this.localEditor;
    }

    private initStream(): void {
        this.fontColor$ =
            this.editor?.stateChange$.pipe(
                map(() => this.editor?.getFontColor() ?? this.options.blankColor),
                map((color) => (color === this.options.blankColor ? '' : color)),
                distinctUntilChanged(),
            ) ?? null;
    }
}
