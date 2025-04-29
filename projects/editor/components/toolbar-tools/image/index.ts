import {AsyncPipe, NgIf} from '@angular/common';
import {
    ChangeDetectionStrategy,
    Component,
    DestroyRef,
    inject,
    Input,
} from '@angular/core';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import {TuiItem} from '@taiga-ui/cdk';
import {TuiButton, TuiHint} from '@taiga-ui/core';
import type {AbstractTuiEditor} from '@taiga-ui/editor/common';
import {
    TUI_EDITOR_OPTIONS,
    TUI_EDITOR_TOOLBAR_TEXTS,
    TUI_IMAGE_LOADER,
} from '@taiga-ui/editor/common';
import {TuiTiptapEditorService} from '@taiga-ui/editor/directives/tiptap-editor';
import {take} from 'rxjs';

@Component({
    standalone: true,
    selector: 'tui-image-tool',
    imports: [AsyncPipe, NgIf, TuiButton, TuiHint, TuiItem],
    templateUrl: './index.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiImageTool {
    private readonly destroyRef = inject(DestroyRef);
    private readonly imageLoader = inject(TUI_IMAGE_LOADER);
    protected readonly texts$ = inject(TUI_EDITOR_TOOLBAR_TEXTS);
    protected readonly options = inject(TUI_EDITOR_OPTIONS);

    @Input()
    public editor: AbstractTuiEditor | null = inject(TuiTiptapEditorService, {
        optional: true,
    });

    protected onImage(input: HTMLInputElement): void {
        const file = input.files?.[0];

        input.value = '';

        if (!file) {
            return;
        }

        this.imageLoader(file)
            .pipe(take(1), takeUntilDestroyed(this.destroyRef))
            .subscribe((image) => this.editor?.setImage(image));
    }
}
