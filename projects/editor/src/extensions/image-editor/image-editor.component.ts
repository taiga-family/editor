import type {AfterViewInit, OnInit} from '@angular/core';
import {
    ChangeDetectionStrategy,
    Component,
    DestroyRef,
    ElementRef,
    HostBinding,
    HostListener,
    inject,
    ViewChild,
} from '@angular/core';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import type {SafeResourceUrl} from '@angular/platform-browser';
import {DomSanitizer} from '@angular/platform-browser';
import {WA_WINDOW} from '@ng-web-apis/common';
import {tuiPure} from '@taiga-ui/cdk';
import type {TuiDropdownDirective} from '@taiga-ui/core';
import {TuiButton, TuiDropdown} from '@taiga-ui/core';
import {timer} from 'rxjs';

import {AbstractTuiEditorResizable} from '../../components/editor-resizable/editor-resizable.abstract';
import {TuiEditorResizable} from '../../components/editor-resizable/editor-resizable.component';
import {TUI_EDITOR_RESIZE_EVENT} from '../../constants/default-events';
import type {TuiEditableImage} from './image-editor.options';
import {TUI_IMAGE_EDITOR_OPTIONS} from './image-editor.options';
import {TuiImageOptionsPosition} from './image-options-position.directive';

@Component({
    standalone: true,
    selector: 'tui-image-editor',
    imports: [TuiButton, TuiDropdown, TuiEditorResizable, TuiImageOptionsPosition],
    templateUrl: './image-editor.component.html',
    styleUrls: ['./image-editor.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiImageEditor
    extends AbstractTuiEditorResizable<TuiEditableImage>
    implements OnInit, AfterViewInit
{
    @ViewChild('resizable', {static: true})
    private readonly resizable?: TuiEditorResizable;

    @ViewChild('dropdown', {static: true})
    private readonly dropdown?: TuiDropdownDirective;

    private readonly sanitizer = inject(DomSanitizer);
    private readonly el = inject(ElementRef);
    private readonly win = inject(WA_WINDOW);
    private readonly destroyRef = inject(DestroyRef);

    @HostBinding('style')
    protected style?: string | null = null;

    @HostBinding('attr.contenteditable')
    protected contenteditable = false;

    protected focused = false;
    protected open = false;

    protected readonly options = inject(TUI_IMAGE_EDITOR_OPTIONS);

    public override get height(): number | string | null {
        return null;
    }

    public get minWidth(): number {
        return this.options.minWidth || 0;
    }

    public get maxWidth(): number {
        return this.options.maxWidth || 0;
    }

    public ngOnInit(): void {
        this.style = this.attrs.style;
    }

    public ngAfterViewInit(): void {
        if (this.minWidth > 0) {
            this.updateMinWidth();
        }
    }

    public updateSize([width]: readonly [width: number, height?: number]): void {
        this.currentWidth = Math.max(this.minWidth, Math.min(this.maxWidth, width));
        this.attrs.width = this.currentWidth;

        this.notifyUpdate();
    }

    @HostBinding('attr.data-drag-handle')
    protected get dragHandle(): '' | null {
        return this.attrs.draggable ?? null;
    }

    @tuiPure
    protected get src(): SafeResourceUrl {
        return this.sanitizer.bypassSecurityTrustResourceUrl(this.attrs.src);
    }

    protected get alt(): string {
        return this.attrs.alt || '';
    }

    protected get title(): string {
        return this.attrs.title || '';
    }

    @HostListener('document:click.silent', ['$event.target'])
    protected currentTargetIsFocused(node: Node): void {
        this.focused = this.el.nativeElement.contains(node);

        if (this.focused) {
            this.selectFakeText();
        } else {
            this.open = false;
            this.dropdown?.toggle(false);
        }
    }

    @tuiPure
    protected isAlignCenter(style?: string | null): boolean {
        return style?.replace(/\s/g, '')?.includes('justify-content:center') ?? false;
    }

    @tuiPure
    protected isAlignJustify(style?: string | null): boolean {
        return style === null || style === undefined || style === '';
    }

    @tuiPure
    protected isAlignLeft(style?: string | null): boolean {
        return style?.replace(/\s/g, '')?.includes('float:left') ?? false;
    }

    @tuiPure
    protected isAlignRight(style?: string | null): boolean {
        return style?.replace(/\s/g, '')?.includes('float:right') ?? false;
    }

    protected openDropdown(event: Event): void {
        this.open = true;
        this.dropdown?.toggle(true);
        event.stopImmediatePropagation();
    }

    protected alignLeft(): void {
        const style = 'float: left';

        this.style = style;
        this.attrs.style = style;

        this.notifyUpdate();
    }

    protected alignCenter(): void {
        const style =
            'display: flex; justify-content: center; margin-left: auto; margin-right: auto;';

        this.attrs.style = style;
        this.style = style;

        this.notifyUpdate();
    }

    protected alignJustify(): void {
        this.style = null;
        this.attrs.style = null;
        this.notifyUpdate();
    }

    protected alignRight(): void {
        const style = 'float: right';

        this.attrs.style = style;
        this.style = style;

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

    private updateMinWidth(): void {
        timer(100)
            .pipe(takeUntilDestroyed(this.destroyRef))
            .subscribe(() => {
                const naturalWidth =
                    this.resizable?.container?.nativeElement.querySelector('img')
                        ?.naturalWidth ??
                    this.resizable?.width ??
                    this.attrs.width ??
                    0;

                if (this.minWidth > parseInt(naturalWidth as string, 10)) {
                    this.updateSize([this.minWidth]);
                }
            });
    }

    private notifyUpdate(): void {
        this.el.nativeElement.dispatchEvent(
            new CustomEvent(TUI_EDITOR_RESIZE_EVENT, {bubbles: true}),
        );
    }
}
