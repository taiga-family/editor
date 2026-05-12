import {Directive, effect, ElementRef, inject, input, Renderer2} from '@angular/core';
import {outputFromObservable, takeUntilDestroyed} from '@angular/core/rxjs-interop';
import {INITIALIZATION_TIPTAP_CONTAINER, TIPTAP_EDITOR} from '@taiga-ui/editor/common';
import {distinctUntilChanged} from 'rxjs';

import {TuiTiptapEditorService} from './tiptap-editor.service';

@Directive({selector: '[tuiTiptapEditor]'})
export class TuiTiptapEditor {
    private readonly el = inject(ElementRef);
    private readonly renderer = inject(Renderer2);
    private readonly editor = inject(TuiTiptapEditorService);
    protected readonly editorContainer = inject(INITIALIZATION_TIPTAP_CONTAINER);
    public readonly value = input<string>('');
    public readonly editable = input(true);

    public readonly valueChange = outputFromObservable(
        this.editor.valueChange$.pipe(distinctUntilChanged()),
    );

    protected readonly $ = inject(TIPTAP_EDITOR)
        .pipe(takeUntilDestroyed())
        .subscribe(() => {
            this.renderer.appendChild(this.el.nativeElement, this.editorContainer);
            this.editor.editable = this.editable();
        });

    protected readonly valueEffect = effect(() => {
        this.editor.setValue(this.value());
    });

    protected readonly editableEffect = effect(() => {
        this.editor.editable = this.editable();
    });
}
