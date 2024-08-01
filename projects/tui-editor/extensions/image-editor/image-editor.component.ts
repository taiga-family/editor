import {DOCUMENT} from '@angular/common';
import {
    AfterViewInit,
    ChangeDetectionStrategy,
    Component,
    ElementRef,
    HostBinding,
    HostListener,
    Inject,
    OnInit,
    Self,
    ViewChild,
} from '@angular/core';
import {DomSanitizer, SafeResourceUrl} from '@angular/platform-browser';
import {WINDOW} from '@ng-web-apis/common';
import {TuiDestroyService, tuiPure} from '@taiga-ui/cdk';
import {
    AbstractTuiEditorResizable,
    TuiEditorResizableComponent,
} from '@tinkoff/tui-editor/components/editor-resizable';
import {TUI_EDITOR_RESIZE_EVENT} from '@tinkoff/tui-editor/constants';
import {timer} from 'rxjs';
import {takeUntil} from 'rxjs/operators';

import {
    TUI_EDITOR_MAX_IMAGE_WIDTH,
    TUI_EDITOR_MIN_IMAGE_WIDTH,
    TUI_IMAGE_EDITOR_OPTIONS,
    TuiEditableImage,
    TuiImageEditorOptions,
} from './image-editor.options';
import {TUI_EDITOR_OPTIONS, TuiEditorOptions} from '@tinkoff/tui-editor/tokens';

@Component({
    selector: 'tui-image-editor',
    templateUrl: './image-editor.component.html',
    styleUrls: ['./image-editor.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [TuiDestroyService],
})
export class TuiImageEditorComponent
    extends AbstractTuiEditorResizable<TuiEditableImage>
    implements OnInit, AfterViewInit
{
    @HostBinding('attr.contenteditable')
    contenteditable = false;

    @HostBinding('style')
    style?: string | null = null;

    @ViewChild('resizable', {static: true})
    resizable?: TuiEditorResizableComponent;

    focused = false;
    open = false;

    @HostBinding('attr.data-drag-handle')
    get dragHandle(): '' | null {
        return this.attrs.draggable ?? null;
    }

    override get height(): number | string | null {
        return null;
    }

    get alt(): string {
        return this.attrs.alt || '';
    }

    get title(): string {
        return this.attrs.title || '';
    }

    constructor(
        @Inject(TUI_EDITOR_MIN_IMAGE_WIDTH) readonly legacyMinWidth: number | null,
        @Inject(TUI_EDITOR_MAX_IMAGE_WIDTH) readonly legacyMaxWidth: number | null,
        @Inject(TUI_IMAGE_EDITOR_OPTIONS) readonly imageOptions: TuiImageEditorOptions,
        @Inject(TUI_EDITOR_OPTIONS) readonly options: TuiEditorOptions,
        @Inject(DOCUMENT) private readonly doc: Document,
        @Inject(DomSanitizer) private readonly sanitizer: DomSanitizer,
        @Inject(ElementRef) private readonly el: ElementRef<HTMLDivElement>,
        @Self() @Inject(TuiDestroyService) private readonly destroy$: TuiDestroyService,
        @Inject(WINDOW) private readonly win: Window,
    ) {
        super();
    }

    @tuiPure
    getSrc(src?: string | null): SafeResourceUrl {
        return this.sanitizer.bypassSecurityTrustResourceUrl(src ?? '');
    }

    @HostListener('document:click.silent', ['$event.target'])
    currentTargetIsFocused(node: Node): void {
        this.focused = this.el.nativeElement.contains(node);

        if (this.focused) {
            this.selectFakeText();
        } else {
            this.open = false;
        }
    }

    get minWidth(): number {
        return (this.legacyMinWidth ?? this.imageOptions.minWidth) || 0;
    }

    get maxWidth(): number {
        return (this.legacyMaxWidth ?? this.imageOptions.maxWidth) || 0;
    }

    ngOnInit(): void {
        this.style = this.attrs.style;
    }

    ngAfterViewInit(): void {
        if (this.minWidth > 0) {
            this.updateMinWidth();
        }
    }

    align(styles: string | null): void {
        this.style = styles;
        this.attrs.style = styles;
        this.notifyUpdate();
    }

    updateSize([width]: readonly [width: number, height?: number]): void {
        this.currentWidth = Math.max(this.minWidth, Math.min(this.maxWidth, width));
        this.attrs.width = this.currentWidth;
        this.notifyUpdate();
    }

    private updateMinWidth(): void {
        timer(0)
            .pipe(takeUntil(this.destroy$))
            .subscribe(() => {
                const naturalWidth =
                    this.resizable?.container?.nativeElement.querySelector('img')
                        ?.naturalWidth ??
                    this.resizable?.width ??
                    this.attrs.width ??
                    0;

                if (this.minWidth > 0 && this.minWidth > naturalWidth) {
                    this.updateSize([this.minWidth]);
                }
            });
    }

    private notifyUpdate(): void {
        this.el.nativeElement.dispatchEvent(
            new CustomEvent(TUI_EDITOR_RESIZE_EVENT, {bubbles: true}),
        );
    }

    private selectFakeText(): void {
        const range = this.doc.createRange();

        this.el.nativeElement.querySelector('p')?.focus();

        range.selectNode(this.el.nativeElement);
        this.win.getSelection()?.removeAllRanges();
        this.win.getSelection()?.addRange(range);
    }
}
