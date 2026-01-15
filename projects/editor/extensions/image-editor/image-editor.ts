import {NgIf} from '@angular/common';
import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    DestroyRef,
    ElementRef,
    inject,
    type OnInit,
    ViewChild,
    ViewEncapsulation,
} from '@angular/core';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import {DomSanitizer, type SafeResourceUrl} from '@angular/platform-browser';
import {WA_WINDOW} from '@ng-web-apis/common';
import {TuiActiveZone, tuiPure} from '@taiga-ui/cdk';
import {TuiButton, TuiDropdown, TuiIcon} from '@taiga-ui/core';
import {
    TUI_EDITOR_OPTIONS,
    TUI_EDITOR_RESIZE_EVENT,
    type TuiEditableImage,
} from '@taiga-ui/editor/common';
import {TuiEditLink} from '@taiga-ui/editor/components/edit-link';
import {
    AbstractTuiEditorResizable,
    TuiEditorResizable,
} from '@taiga-ui/editor/components/editor-resizable';
import {timer} from 'rxjs';

import {TuiImageAlignList} from './image-align-list';
import {TUI_IMAGE_EDITOR_OPTIONS} from './image-editor.options';

interface ServerSideGlobal extends NodeJS.Global {
    document: Document | undefined;
}

@Component({
    standalone: true,
    selector: 'tui-image-editor',
    imports: [
        NgIf,
        TuiActiveZone,
        TuiButton,
        TuiDropdown,
        TuiEditLink,
        TuiEditorResizable,
        TuiIcon,
        TuiImageAlignList,
    ],
    templateUrl: './image-editor.html',
    styleUrls: ['./image-editor.less'],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {
        '[style]': 'style',
        '[attr.data-drag-handle]': 'dragHandle',
        '[attr.data-editing-href]': 'isLinkDropdownOpened',
        '[attr.contenteditable]': 'contenteditable',
    },
})
export class TuiImageEditor
    extends AbstractTuiEditorResizable<TuiEditableImage>
    implements OnInit
{
    @ViewChild('resizable', {static: true})
    private readonly resizable?: TuiEditorResizable;

    @ViewChild('img', {read: ElementRef})
    private readonly img?: ElementRef<HTMLImageElement>;

    private readonly destroy$ = inject(DestroyRef);
    private readonly sanitizer = inject(DomSanitizer);
    private readonly el = inject(ElementRef);
    private readonly win: Omit<Window, 'document'> & ServerSideGlobal = inject(WA_WINDOW);

    protected style?: string | null = null;
    protected contenteditable = false;
    protected isAlignDropdownOpened = false;
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

    public openLink(url: string): void {
        this.win.open(url, '_blank');
    }

    public addLink(url: string): void {
        this.setLink(url);
    }

    public removeLink(): void {
        this.setLink(null);
    }

    public onEditLinkActiveZoneChange(isActive: boolean): void {
        if (this.isLinkDropdownOpened && !isActive) {
            this.isLinkDropdownOpened = false;
        }
    }

    public setLink(url: string | null): void {
        this.attrs['data-href'] = url;
        this.isLinkDropdownOpened = false;

        // Caretaker note:
        // This functionality is required to ensure
        // the editor updates its state with/without link wrap
        // because of the editor's quirky behavior.
        this.editor.commands.setNodeSelection(this.getPos());
    }

    protected get dragHandle(): '' | null {
        return this.attrs.draggable ?? null;
    }

    protected get isLinkDropdownOpened(): boolean {
        return this.attrs['data-editing-href'] ?? false;
    }

    protected set isLinkDropdownOpened(isOpened: boolean) {
        this.attrs['data-editing-href'] = isOpened ? true : null;
    }

    protected get alt(): string {
        return this.attrs.alt ?? '';
    }

    protected get title(): string {
        return this.attrs.title ?? '';
    }

    protected get containerWidth(): number {
        const naturalWidth =
            this.attrs.width ??
            this.img?.nativeElement.naturalWidth ??
            this.resizable?.width ??
            0;

        return parseInt(naturalWidth as string, 10);
    }

    protected get supportLinkExtension(): boolean {
        return Boolean(this.editor.commands.toggleLink);
    }

    @tuiPure
    protected getBypassedSrc(src: string): SafeResourceUrl {
        return this.sanitizer.bypassSecurityTrustResourceUrl(src);
    }

    protected toggleAlignDropdown(event: Event): void {
        event.stopImmediatePropagation();
        this.isAlignDropdownOpened = !this.isAlignDropdownOpened;
    }

    protected align(styles: string | null): void {
        this.style = styles;
        this.attrs.style = styles;
        this.notifyUpdate();
    }

    protected editLink(event: Event): void {
        event.stopImmediatePropagation();

        if (this.isLinkDropdownOpened) {
            return;
        }

        this.isLinkDropdownOpened = true;

        timer(0)
            .pipe(takeUntilDestroyed(this.destroy$))
            .subscribe(() => {
                this.editor.commands.setNodeSelection(this.getPos());
            });
    }

    private setInitialSize(): void {
        const containerWidth = this.containerWidth;

        if (containerWidth < this.minWidth || containerWidth > this.maxWidth) {
            this.updateSize([containerWidth]);
        }
    }

    private notifyUpdate(): void {
        this.el.nativeElement.dispatchEvent(
            new CustomEvent(TUI_EDITOR_RESIZE_EVENT, {bubbles: true}),
        );
    }
}
