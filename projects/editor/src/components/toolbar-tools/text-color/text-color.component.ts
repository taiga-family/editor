import {AsyncPipe} from '@angular/common';
import type {OnInit} from '@angular/core';
import {ChangeDetectionStrategy, Component, inject, Input} from '@angular/core';
import {TuiActiveZone, TuiLet} from '@taiga-ui/cdk';
import {TuiButton, TuiDropdown, TuiHint} from '@taiga-ui/core';
import {TuiPaletteModule} from '@taiga-ui/legacy';
import type {Observable} from 'rxjs';
import {distinctUntilChanged, map} from 'rxjs';

import type {AbstractTuiEditor} from '../../../abstract/editor-adapter.abstract';
import {TuiTiptapEditorService} from '../../../directives/tiptap-editor/tiptap-editor.service';
import {TUI_EDITOR_OPTIONS} from '../../../tokens/editor-options';
import {TUI_EDITOR_TOOLBAR_TEXTS} from '../../../tokens/i18n';

@Component({
    standalone: true,
    selector: 'tui-text-color',
    imports: [
        AsyncPipe,
        TuiActiveZone,
        TuiButton,
        TuiDropdown,
        TuiHint,
        TuiLet,
        TuiPaletteModule,
    ],
    templateUrl: './text-color.template.html',
    styleUrls: ['../../../../styles/tools-common.less'],
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
                map(() => this.editor?.getFontColor() || this.options.blankColor),
                distinctUntilChanged(),
            ) ?? null;
    }
}
