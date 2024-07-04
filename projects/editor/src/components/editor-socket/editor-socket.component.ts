import {DOCUMENT} from '@angular/common';
import {
    ChangeDetectionStrategy,
    Component,
    ElementRef,
    HostListener,
    inject,
    Input,
    Renderer2,
    Sanitizer,
    SecurityContext,
    ViewEncapsulation,
} from '@angular/core';
import {tuiIsElement} from '@taiga-ui/cdk';

import {TuiTiptapEditor} from '../../directives/tiptap-editor/tiptap-editor.directive';
import {TUI_EDITOR_OPTIONS} from '../../tokens/editor-options';
import {TUI_EDITOR_SANITIZER} from '../../tokens/editor-sanitizer';

@Component({
    standalone: true,
    selector: 'tui-editor-socket',
    template: '',
    styleUrls: ['./editor-socket.component.less'],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {
        '[class.tui-editor-socket]': 'options.enableDefaultStyles',
    },
})
export class TuiEditorSocket {
    private readonly el: HTMLElement = inject(ElementRef).nativeElement;
    private readonly renderer = inject(Renderer2);
    private readonly sanitizer = inject(Sanitizer);
    private readonly tuiSanitizer = inject(TUI_EDITOR_SANITIZER, {optional: true});
    private readonly document = inject(DOCUMENT);
    private readonly editor = inject(TuiTiptapEditor, {optional: true});
    protected readonly options = inject(TUI_EDITOR_OPTIONS);

    @Input()
    public set content(content: string) {
        this.renderer.setProperty(
            this.el,
            'innerHTML',
            this.tuiSanitizer
                ? this.tuiSanitizer.sanitize(SecurityContext.HTML, content)
                : this.sanitizer.sanitize(SecurityContext.HTML, content ?? ''),
        );
    }

    /**
     * @description:
     * the main problem is that the external environment editor can use different base href="../"
     * More information: https://rogerkeays.com/blog/using-base-href-with-anchors
     */
    @HostListener('click', ['$event'])
    protected click(event: Event): void {
        if (this.editor || !tuiIsElement(event.target)) {
            return;
        }

        const href = event.target?.closest('a')?.getAttribute('href') || '';

        if (!href.startsWith('#')) {
            return;
        }

        this.document.location.hash = href.replace('#', '');
        event.preventDefault();
    }
}
