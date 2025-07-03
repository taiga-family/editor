/// <reference types="@taiga-ui/tsconfig/ng-dev-mode" />
import type {ElementRef} from '@angular/core';
import {
    ChangeDetectionStrategy,
    Component,
    DestroyRef,
    EventEmitter,
    inject,
    Output,
    ViewChild,
} from '@angular/core';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import type {TuiEditorAttachedFile, TuiEditorOptions} from '@taiga-ui/editor/common';
import {TUI_ATTACH_FILES_LOADER, TUI_ATTACH_FILES_OPTIONS} from '@taiga-ui/editor/common';
import type {TuiLanguageEditor} from '@taiga-ui/i18n/types/language';
import {take} from 'rxjs';

import {TuiToolbarTool} from '../tool';
import {TuiToolbarButtonTool} from '../tool-button';

@Component({
    standalone: true,
    selector: 'button[tuiAttachTool]',
    template: `
        <input
            #fileUpload
            type="file"
            [accept]="attachOptions.accept"
            [multiple]="attachOptions.multiple"
            [tabIndex]="-1"
            (change)="onAttach(fileUpload)"
        />

        {{ tuiHint() }}
    `,
    changeDetection: ChangeDetectionStrategy.OnPush,
    hostDirectives: [TuiToolbarButtonTool],
    host: {
        '(click)': 'fileUpload?.nativeElement.click()',
    },
})
export class TuiAttachButtonTool extends TuiToolbarTool {
    private readonly destroyRef = inject(DestroyRef);
    private readonly filesLoader = inject(TUI_ATTACH_FILES_LOADER, {optional: true});

    @ViewChild('fileUpload')
    protected fileUpload?: ElementRef<HTMLInputElement>;

    protected readonly attachOptions = inject(TUI_ATTACH_FILES_OPTIONS);

    @Output()
    public readonly fileAttached = new EventEmitter<TuiEditorAttachedFile[]>();

    protected getIcon(icons: TuiEditorOptions['icons']): string {
        return icons.attach;
    }

    protected getHint(texts: TuiLanguageEditor['toolbarTools']): string {
        return texts?.attach;
    }

    protected onAttach(input: HTMLInputElement): void {
        const files = Array.from(input.files || []);

        input.value = '';

        if (files.length === 0) {
            return;
        }

        if (ngDevMode) {
            console.assert(
                !!this.filesLoader,
                'Please provide TUI_ATTACH_FILES_LOADER, more: https://taiga-family.github.io/editor/starter-kit/Options',
            );
        }

        this.filesLoader?.(files)
            .pipe(take(1), takeUntilDestroyed(this.destroyRef))
            .subscribe((attachedFiles) => this.fileAttached.emit(attachedFiles));
    }
}
