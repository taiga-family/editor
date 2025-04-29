import {AsyncPipe} from '@angular/common';
import type {OnInit} from '@angular/core';
import {ChangeDetectionStrategy, Component, inject, Input} from '@angular/core';
import {TUI_IS_MOBILE, TuiItem} from '@taiga-ui/cdk';
import {TuiButton, TuiDropdown, TuiHint} from '@taiga-ui/core';
import type {AbstractTuiEditor} from '@taiga-ui/editor/common';
import {TUI_EDITOR_OPTIONS, TUI_EDITOR_TOOLBAR_TEXTS} from '@taiga-ui/editor/common';
import {TuiTiptapEditorService} from '@taiga-ui/editor/directives';
import type {Observable} from 'rxjs';
import {combineLatest, map, of} from 'rxjs';

@Component({
    standalone: true,
    // TODO: deprecated tui-align-content
    selector: 'tui-align-content,tui-align-content-tool',
    imports: [AsyncPipe, TuiButton, TuiDropdown, TuiHint, TuiItem],
    templateUrl: './index.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiAlignContentTool implements OnInit {
    private localEditor: AbstractTuiEditor | null = null;
    protected readonly isMobile = inject(TUI_IS_MOBILE);
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

/**
 * @deprecated use {@link TuiAlignContentTool}
 */
export const TuiAlignContent = TuiAlignContentTool;
