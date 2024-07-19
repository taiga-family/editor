import {DOCUMENT} from '@angular/common';
import {
    ChangeDetectionStrategy,
    Component,
    HostBinding,
    HostListener,
    inject,
    Input,
    SecurityContext,
    ViewEncapsulation,
} from '@angular/core';
import type {SafeHtml} from '@angular/platform-browser';
import {DomSanitizer} from '@angular/platform-browser';
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
    private readonly editor = inject(TuiTiptapEditor, {optional: true});
    private readonly customSanitizer = inject(TUI_EDITOR_SANITIZER, {optional: true});
    private readonly sanitizer = inject(DomSanitizer);
    private readonly document = inject(DOCUMENT);
    protected readonly options = inject(TUI_EDITOR_OPTIONS);

    @Input()
    public content: string | null = null;

    @HostBinding('innerHTML')
    public get innerHtml(): SafeHtml | null {
        if (!this.content) {
            return null;
        }

        return (
            this.customSanitizer?.sanitize(SecurityContext.HTML, this.content) ??
            this.sanitizer.bypassSecurityTrustHtml(this.content)
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
