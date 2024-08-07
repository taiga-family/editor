import {AsyncPipe, NgIf} from '@angular/common';
import type {OnInit} from '@angular/core';
import {ChangeDetectionStrategy, Component, inject, Input} from '@angular/core';
import {TuiLet} from '@taiga-ui/cdk';
import {TuiButton, TuiDropdown, TuiHint} from '@taiga-ui/core';
import type {Observable} from 'rxjs';
import {combineLatest, map, of} from 'rxjs';

import type {AbstractTuiEditor} from '../../../abstract/editor-adapter.abstract';
import {TuiTiptapEditorService} from '../../../directives/tiptap-editor/tiptap-editor.service';
import {TUI_EDITOR_OPTIONS} from '../../../tokens/editor-options';
import {TUI_EDITOR_TOOLBAR_TEXTS} from '../../../tokens/i18n';

@Component({
    standalone: true,
    selector: 'tui-align-content',
    imports: [AsyncPipe, NgIf, TuiButton, TuiDropdown, TuiHint, TuiLet],
    templateUrl: './align-content.template.html',
    styleUrls: ['../../../../styles/tools-common.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiAlignContent implements OnInit {
    private localEditor: AbstractTuiEditor | null = null;
    protected readonly options = inject(TUI_EDITOR_OPTIONS);
    protected readonly injectionEditor = inject(TuiTiptapEditorService, {optional: true});
    protected readonly texts$ = inject(TUI_EDITOR_TOOLBAR_TEXTS);
    protected alignState$: Observable<{
        left: boolean;
        right: boolean;
        center: boolean;
        justify: boolean;
    }> | null = null;

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
        this.alignState$ = combineLatest([
            this.editor?.isActive$({textAlign: 'left'}) ?? of(false),
            this.editor?.isActive$({textAlign: 'right'}) ?? of(false),
            this.editor?.isActive$({textAlign: 'center'}) ?? of(false),
            this.editor?.isActive$({textAlign: 'justify'}) ?? of(false),
        ]).pipe(
            map(([left, right, center, justify]) => ({
                left,
                right,
                center,
                justify,
            })),
        );
    }
}
