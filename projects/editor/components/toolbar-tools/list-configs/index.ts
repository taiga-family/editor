import {AsyncPipe, NgIf} from '@angular/common';
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
    // TODO: deprecate tui-list-configs
    selector: 'tui-list-configs,tui-list-configs-tool',
    imports: [AsyncPipe, NgIf, TuiButton, TuiDropdown, TuiHint, TuiItem],
    templateUrl: './index.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiListConfigsTool {
    private localEditor: AbstractTuiEditor | null = null;
    protected readonly isMobile = inject(TUI_IS_MOBILE);
    protected readonly options = inject(TUI_EDITOR_OPTIONS);
    protected readonly injectionEditor = inject(TuiTiptapEditorService, {optional: true});
    protected readonly texts$ = inject(TUI_EDITOR_TOOLBAR_TEXTS);

    protected listState$: Observable<{
        ordered: boolean;
        unordered: boolean;
        tasked: boolean;
    }> | null = null;

    @Input('editor')
    public set inputEditor(value: AbstractTuiEditor | null) {
        this.localEditor = value;
        this.initStream();
    }

    protected get editor(): AbstractTuiEditor | null {
        return this.injectionEditor ?? this.localEditor;
    }

    private initStream(): void {
        this.listState$ = combineLatest([
            this.editor?.isActive$('orderedList') ?? of(false),
            this.editor?.isActive$('bulletList') ?? of(false),
            this.editor?.isActive$('taskList') ?? of(false),
        ]).pipe(
            map(([ordered, unordered, tasked]) => ({
                ordered,
                unordered,
                tasked,
            })),
        );
    }
}

/**
 * @deprecated use {@link TuiListConfigsTool}
 */
export const TuiListConfigs = TuiListConfigsTool;
