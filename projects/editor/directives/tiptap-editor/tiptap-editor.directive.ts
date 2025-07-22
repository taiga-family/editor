import {Directive, ElementRef, inject, Input, Output, Renderer2} from '@angular/core';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import {INITIALIZATION_TIPTAP_CONTAINER, TIPTAP_EDITOR} from '@taiga-ui/editor/common';
import {distinctUntilChanged} from 'rxjs';

import {TuiTiptapEditorService} from './tiptap-editor.service';

@Directive({
    standalone: true,
    selector: '[tuiTiptapEditor]',
})
export class TuiTiptapEditor {
    private canEdit = true;
    private readonly el = inject(ElementRef);
    private readonly renderer = inject(Renderer2);
    private readonly editor = inject(TuiTiptapEditorService);
    protected editorContainer = inject(INITIALIZATION_TIPTAP_CONTAINER);

    protected readonly $ = inject(TIPTAP_EDITOR)
        .pipe(takeUntilDestroyed())
        .subscribe(() => {
            this.renderer.appendChild(this.el.nativeElement, this.editorContainer);
            this.editable = this.canEdit; // synchronized editable state after first render
        });

    @Output()
    public readonly valueChange = this.editor.valueChange$.pipe(distinctUntilChanged());

    /**
     * @deprecated use valueChange instead
     */
    @Output()
    public readonly stateChange = this.editor.stateChange$;

    @Input()
    public set value(value: string) {
        this.editor.setValue(value);
    }

    @Input()
    public set editable(editable: boolean) {
        this.canEdit = editable;
        this.editor.editable = editable;
    }
}
