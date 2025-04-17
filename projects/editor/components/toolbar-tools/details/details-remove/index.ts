import {AsyncPipe, NgIf} from '@angular/common';
import type {OnInit} from '@angular/core';
import {ChangeDetectionStrategy, Component, inject, Input} from '@angular/core';
import {TUI_IS_MOBILE} from '@taiga-ui/cdk';
import {TuiButton, TuiHint} from '@taiga-ui/core';
import type {AbstractTuiEditor} from '@taiga-ui/editor/common';
import {TUI_EDITOR_OPTIONS, TUI_EDITOR_TOOLBAR_TEXTS} from '@taiga-ui/editor/common';
import {TuiTiptapEditorService} from '@taiga-ui/editor/directives';
import type {Observable} from 'rxjs';
import {map} from 'rxjs';

@Component({
    standalone: true,
    selector: 'tui-details-remove',
    imports: [AsyncPipe, NgIf, TuiButton, TuiHint],
    templateUrl: './index.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiDetailsRemove implements OnInit {
    private localEditor: AbstractTuiEditor | null = null;
    protected readonly isMobile = inject(TUI_IS_MOBILE);
    protected readonly injectionEditor = inject(TuiTiptapEditorService, {optional: true});
    protected readonly texts$ = inject(TUI_EDITOR_TOOLBAR_TEXTS);
    protected readonly options = inject(TUI_EDITOR_OPTIONS);
    protected disabled$: Observable<boolean> | null = null;

    @Input('editor')
    public set inputEditor(value: AbstractTuiEditor | null) {
        this.localEditor = value;
        this.initStream();
    }

    public ngOnInit(): void {
        this.initStream();
    }

    public removeDetails(): void {
        this.editor?.removeDetails();
    }

    protected get editor(): AbstractTuiEditor | null {
        return this.injectionEditor ?? this.localEditor;
    }

    private initStream(): void {
        this.disabled$ =
            this.editor?.isActive$('details').pipe(map((isActive) => !isActive)) ?? null;
    }
}
