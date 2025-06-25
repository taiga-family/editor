import {DOCUMENT} from '@angular/common';
import {
    ChangeDetectionStrategy,
    Component,
    inject,
    Input,
    SecurityContext,
    signal,
    ViewEncapsulation,
} from '@angular/core';
import type {SafeHtml} from '@angular/platform-browser';
import {DomSanitizer} from '@angular/platform-browser';
import {tuiIsElement} from '@taiga-ui/cdk';
import {TUI_EDITOR_OPTIONS, TUI_EDITOR_SANITIZER} from '@taiga-ui/editor/common';
import {TuiTiptapEditor} from '@taiga-ui/editor/directives';

@Component({
    standalone: true,
    selector: 'tui-editor-socket',
    template: '',
    styleUrls: ['./editor-socket.component.less'],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {
        '[class.tui-editor-socket]': 'options.enableDefaultStyles',
        '[innerHTML]': 'html()',
        '(click)': 'click($event)',
    },
})
export class TuiEditorSocket {
    private readonly editor = inject(TuiTiptapEditor, {optional: true});
    private readonly customSanitizer = inject(TUI_EDITOR_SANITIZER, {optional: true});
    private readonly sanitizer = inject(DomSanitizer);
    private readonly document = inject(DOCUMENT);
    protected readonly options = inject(TUI_EDITOR_OPTIONS);
    protected readonly html = signal<SafeHtml | string | null>(null);

    @Input()
    public set content(content: string | null | undefined) {
        const safety =
            this.customSanitizer?.sanitize(SecurityContext.HTML, content ?? '') ??
            this.sanitizer.bypassSecurityTrustHtml(content ?? '');

        this.html.set(safety);
    }

    /**
     * @description:
     * the main problem is that the external environment editor can use different base href="../"
     * More information: https://rogerkeays.com/blog/using-base-href-with-anchors
     */
    protected click(event: Event): void {
        if (this.editor || !tuiIsElement(event.target)) {
            return;
        }

        const href = event.target?.closest('a')?.getAttribute('href') ?? '';

        if (!href.startsWith('#')) {
            return;
        }

        this.document.location.hash = '';
        this.document.location.hash = href.replace('#', '');
        event.preventDefault();
    }
}
