import {NgIf} from '@angular/common';
import type {OnInit} from '@angular/core';
import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    ElementRef,
    inject,
    ViewChild,
} from '@angular/core';
import type {SafeResourceUrl} from '@angular/platform-browser';
import {DomSanitizer} from '@angular/platform-browser';
import {WA_WINDOW} from '@ng-web-apis/common';
import {tuiPure} from '@taiga-ui/cdk';
import type {TuiDropdownDirective} from '@taiga-ui/core';
import {TuiButton, TuiDropdown} from '@taiga-ui/core';
import type {TuiEditableImage} from '@taiga-ui/editor/common';
import {TUI_EDITOR_OPTIONS, TUI_EDITOR_RESIZE_EVENT} from '@taiga-ui/editor/common';
import {
    AbstractTuiEditorResizable,
    TuiEditorResizable,
} from '@taiga-ui/editor/components';

import {TUI_IMAGE_EDITOR_OPTIONS} from './image-editor.options';
import {TuiImageOptionsPosition} from './image-options-position.directive';
import {TuiImageAlignComponent} from './options/image-align/image-align.component';

@Component({
    standalone: true,
    selector: 'tui-image-editor',
    imports: [
        NgIf,
        TuiButton,
        TuiDropdown,
        TuiEditorResizable,
        TuiImageAlignComponent,
        TuiImageOptionsPosition,
    ],
    templateUrl: './image-editor.component.html',
    styleUrls: ['./image-editor.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {
        '[style]': 'style',
        '[attr.data-drag-handle]': 'dragHandle',
        '[attr.contenteditable]': 'contenteditable',
        '(document:click.silent)': 'currentTargetIsFocused($event.target)',
    },
})
export class TuiImageEditor
    extends AbstractTuiEditorResizable<TuiEditableImage>
    implements OnInit
{
    @ViewChild('resizable', {static: true})
    private readonly resizable?: TuiEditorResizable;

    @ViewChild('dropdown', {static: true})
    private readonly dropdown?: TuiDropdownDirective;

    private readonly sanitizer = inject(DomSanitizer);
    private readonly el = inject(ElementRef);
    private readonly win = inject(WA_WINDOW);

    protected style?: string | null = null;
    protected contenteditable = false;
    protected focused = false;
    protected open = false;
    protected readonly options = inject(TUI_EDITOR_OPTIONS);
    protected readonly imageOptions = inject(TUI_IMAGE_EDITOR_OPTIONS);
    protected readonly changeDetector = inject(ChangeDetectorRef);

    public override get height(): number | string | null {
        return null;
    }

    public get minWidth(): number {
        return this.imageOptions.minWidth ?? 0;
    }

    public get maxWidth(): number {
        return this.imageOptions.maxWidth ?? 0;
    }

    public ngOnInit(): void {
        this.style = this.attrs.style;
    }

    public onImageLoad(): void {
        if (this.minWidth > 0 || (this.maxWidth > 0 && this.maxWidth !== Infinity)) {
            this.setInitialSize();
        }
    }

    public updateSize([width]: readonly [width: number, height?: number]): void {
        this.currentWidth = Math.max(this.minWidth, Math.min(this.maxWidth, width));
        this.attrs.width = this.currentWidth;

        this.notifyUpdate();
    }

    protected get dragHandle(): '' | null {
        return this.attrs.draggable ?? null;
    }

    protected get alt(): string {
        return this.attrs.alt ?? '';
    }

    protected get title(): string {
        return this.attrs.title ?? '';
    }

    @tuiPure
    protected getBypassedSrc(src: string): SafeResourceUrl {
        return this.sanitizer.bypassSecurityTrustResourceUrl(src);
    }

    protected currentTargetIsFocused(node: Node): void {
        if (!this.editor.isEditable) {
            return;
        }

        this.focused = this.el.nativeElement.contains(node);

        if (this.focused) {
            this.selectFakeText();
        } else {
            this.open = false;
            this.dropdown?.toggle(false);
        }
    }

    protected openDropdown(event: Event): void {
        this.open = true;
        this.dropdown?.toggle(true);
        event.stopImmediatePropagation();
    }

    protected align(styles: string | null): void {
        this.style = styles;
        this.attrs.style = styles;
        this.notifyUpdate();
    }

    private selectFakeText(): void {
        if (this.win.document) {
            const range = this.win.document.createRange();

            this.el.nativeElement.querySelector('p')?.focus();

            range.selectNode(this.el.nativeElement);
            this.win.getSelection()?.removeAllRanges();
            this.win.getSelection()?.addRange(range);
        }
    }

    private setInitialSize(): void {
        const naturalWidth =
            this.attrs.width ??
            this.resizable?.container?.nativeElement.querySelector('img')?.naturalWidth ??
            this.resizable?.width ??
            0;

        const naturalWidthInt = parseInt(naturalWidth as string, 10);

        if (naturalWidthInt < this.minWidth || naturalWidthInt > this.maxWidth) {
            this.updateSize([naturalWidthInt]);
        }
    }

    private notifyUpdate(): void {
        this.el.nativeElement.dispatchEvent(
            new CustomEvent(TUI_EDITOR_RESIZE_EVENT, {bubbles: true}),
        );
    }
}
