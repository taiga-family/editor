import type {OnInit} from '@angular/core';
import {ChangeDetectionStrategy, Component, inject, Input} from '@angular/core';
import {TuiDropdown} from '@taiga-ui/core';
import type {AbstractTuiEditor} from '@taiga-ui/editor/common';
import {TuiTiptapEditorService} from '@taiga-ui/editor/directives';
import {
    TuiAlignCenterButtonTool,
    TuiAlignJustifyButtonTool,
    TuiAlignLeftButtonTool,
    TuiAlignPreviewButtonTool,
    TuiAlignRightButtonTool,
} from '@taiga-ui/editor/tools';
import type {Observable} from 'rxjs';
import {combineLatest, map, of} from 'rxjs';

@Component({
    standalone: true,
    // TODO: deprecated tui-align-content
    selector: 'tui-align-content,tui-align-content-tool',
    imports: [
        TuiAlignCenterButtonTool,
        TuiAlignJustifyButtonTool,
        TuiAlignLeftButtonTool,
        TuiAlignPreviewButtonTool,
        TuiAlignRightButtonTool,
        TuiDropdown,
    ],
    template: `
        <button
            automation-id="toolbar__align-button"
            tuiAlignPreviewTool
            [editor]="editor"
            [tuiDropdown]="alignDropdown"
            [tuiDropdownOpen]="false"
        >
            <ng-template #alignDropdown>
                <div tuiToolbarDropdownContent>
                    <button
                        tuiAlignLeftTool
                        [editor]="editor"
                    ></button>
                    <button
                        tuiAlignCenterTool
                        [editor]="editor"
                    ></button>
                    <button
                        tuiAlignRightTool
                        [editor]="editor"
                    ></button>
                    <button
                        tuiAlignJustifyTool
                        [editor]="editor"
                    ></button>
                </div>
            </ng-template>
        </button>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiAlignContentTool implements OnInit {
    private localEditor: AbstractTuiEditor | null = null;
    protected readonly injectionEditor = inject(TuiTiptapEditorService, {optional: true});
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
