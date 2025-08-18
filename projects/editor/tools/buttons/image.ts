import {
    ChangeDetectionStrategy,
    Component,
    DestroyRef,
    type ElementRef,
    inject,
    ViewChild,
} from '@angular/core';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import {TUI_IMAGE_LOADER, type TuiEditorOptions} from '@taiga-ui/editor/common';
import {type TuiLanguageEditor} from '@taiga-ui/i18n';
import {take} from 'rxjs';

import {TuiToolbarTool} from '../tool';
import {TuiToolbarButtonTool} from '../tool-button';

@Component({
    standalone: true,
    selector: 'button[tuiImageTool]',
    imports: [],
    template: `
        <input
            #image
            accept="image/*"
            type="file"
            (change)="onImage(image)"
        />

        {{ tuiHint() }}
    `,
    changeDetection: ChangeDetectionStrategy.OnPush,
    hostDirectives: [TuiToolbarButtonTool],
    host: {
        '(click)': 'image?.nativeElement?.click()',
    },
})
export class TuiImageButtonTool extends TuiToolbarTool {
    private readonly destroyRef = inject(DestroyRef);
    private readonly imageLoader = inject(TUI_IMAGE_LOADER);

    @ViewChild('image')
    protected image?: ElementRef<HTMLInputElement>;

    protected getIcon(icons: TuiEditorOptions['icons']): string {
        return icons.image;
    }

    protected getHint(texts?: TuiLanguageEditor['toolbarTools']): string {
        return texts?.image ?? '';
    }

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
