import {DOCUMENT} from '@angular/common';
import type {OnDestroy} from '@angular/core';
import {Directive, ElementRef, inject, Input, ViewContainerRef} from '@angular/core';
import type {TuiBooleanHandler} from '@taiga-ui/cdk';
import {
    CHAR_NO_BREAK_SPACE,
    CHAR_ZERO_WIDTH_SPACE,
    EMPTY_CLIENT_RECT,
    TUI_RANGE,
    TUI_TRUE_HANDLER,
    tuiGetNativeFocused,
    tuiIsElement,
    tuiIsString,
    tuiIsTextfield,
    tuiIsTextNode,
    tuiPx,
} from '@taiga-ui/cdk';
import type {TuiRectAccessor} from '@taiga-ui/core';
import {
    TUI_SELECTION_STREAM,
    tuiAsDriver,
    tuiAsRectAccessor,
    TuiDriver,
    TuiDropdownDirective,
    tuiGetWordRange,
} from '@taiga-ui/core';
import {BehaviorSubject, combineLatest, distinctUntilChanged, map} from 'rxjs';

@Directive({
    standalone: true,
    selector: '[tuiToolbarDropdown]',
    providers: [
        tuiAsDriver(TuiDropdownToolbarDirective),
        tuiAsRectAccessor(TuiDropdownToolbarDirective),
    ],
})
export class TuiDropdownToolbarDirective
    extends TuiDriver
    implements TuiRectAccessor, OnDestroy
{
    private previousTagPosition: DOMRect | null = null;
    private range = inject(TUI_RANGE);
    private readonly doc = inject(DOCUMENT);
    private readonly selection$ = inject(TUI_SELECTION_STREAM);
    private readonly el = inject(ElementRef<HTMLElement>);
    private readonly vcr = inject(ViewContainerRef);
    private readonly dropdown = inject(TuiDropdownDirective);

    private readonly handler$ = new BehaviorSubject<TuiBooleanHandler<Range>>(
        TUI_TRUE_HANDLER,
    );

    private readonly stream$ = combineLatest([
        this.handler$,
        this.selection$.pipe(
            map(() => this.getRange()),
            distinctUntilChanged(
                (x, y) => x.startOffset === y.startOffset && x.endOffset === y.endOffset,
            ),
        ),
    ]).pipe(
        map(([handler, range]) => {
            const contained =
                this.el.nativeElement.contains(range.commonAncestorContainer) ||
                range.commonAncestorContainer.parentElement?.closest('tui-dropdown');

            this.range =
                contained && tuiIsTextNode(range.commonAncestorContainer)
                    ? range
                    : this.range;

            return (contained && handler(this.range)) || this.inDropdown(range);
        }),
    );

    private ghost?: HTMLElement;

    @Input('tuiToolbarDropdownPosition')
    public position: 'selection' | 'tag' | 'word' = 'selection';

    public readonly type = 'dropdown';

    constructor() {
        super(subscriber => this.stream$.subscribe(subscriber));
    }

    @Input()
    public set tuiToolbarDropdown(visible: TuiBooleanHandler<Range> | string) {
        if (!tuiIsString(visible)) {
            this.handler$.next(visible);
        }
    }

    public getClientRect(): ClientRect {
        switch (this.position) {
            case 'tag': {
                const {commonAncestorContainer} = this.range;
                const element = tuiIsElement(commonAncestorContainer)
                    ? commonAncestorContainer
                    : commonAncestorContainer.parentNode;

                if (element?.parentElement?.closest('tui-dropdown')) {
                    return this.previousTagPosition ?? EMPTY_CLIENT_RECT;
                }

                this.previousTagPosition =
                    element && tuiIsElement(element)
                        ? this.doc
                              .querySelector('.ProseMirror-selectednode')
                              ?.getBoundingClientRect() || element.getBoundingClientRect()
                        : EMPTY_CLIENT_RECT;

                return this.previousTagPosition;
            }
            case 'word':
                return tuiGetWordRange(this.range).getBoundingClientRect();
            default: {
                const rect = this.range.getBoundingClientRect();

                if (
                    rect.x === 0 &&
                    rect.y === 0 &&
                    rect.width === 0 &&
                    rect.height === 0
                ) {
                    return (
                        this.el.nativeElement.querySelector('p') ?? this.el.nativeElement
                    ).getBoundingClientRect();
                }

                return rect;
            }
        }
    }

    public ngOnDestroy(): void {
        if (this.ghost) {
            this.vcr.element.nativeElement.removeChild(this.ghost);
        }
    }

    private getRange(): Range {
        const active = tuiGetNativeFocused(this.doc);
        const selection = this.doc.getSelection();
        const range =
            active && tuiIsTextfield(active) && this.el.nativeElement.contains(active)
                ? this.veryVerySadInputFix(active)
                : (selection?.rangeCount && selection.getRangeAt(0)) || this.range;

        return range.cloneRange();
    }

    /**
     * Check if Node is inside dropdown
     */
    private boxContains(node: Node): boolean {
        return !!this.dropdown.dropdownBoxRef?.location.nativeElement.contains(node);
    }

    /**
     * Check if given range is at least partially inside dropdown
     */
    private inDropdown(range: Range): boolean {
        const {startContainer, endContainer} = range;
        const {nativeElement} = this.el;
        const inDropdown = this.boxContains(range.commonAncestorContainer);
        const hostToDropdown =
            this.boxContains(endContainer) && nativeElement.contains(startContainer);
        const dropdownToHost =
            this.boxContains(startContainer) && nativeElement.contains(endContainer);

        return inDropdown || hostToDropdown || dropdownToHost;
    }

    private veryVerySadInputFix(element: HTMLInputElement | HTMLTextAreaElement): Range {
        const {ghost = this.initGhost(element)} = this;
        const {top, left, width, height} = element.getBoundingClientRect();
        const {selectionStart, selectionEnd, value} = element;
        const range = this.doc.createRange();
        const hostRect = this.el.nativeElement.getBoundingClientRect();

        ghost.style.top = tuiPx(top - hostRect.top);
        ghost.style.left = tuiPx(left - hostRect.left);
        ghost.style.width = tuiPx(width);
        ghost.style.height = tuiPx(height);
        ghost.textContent = CHAR_ZERO_WIDTH_SPACE + value + CHAR_NO_BREAK_SPACE;

        range.setStart(ghost.firstChild as Node, selectionStart || 0);
        range.setEnd(ghost.firstChild as Node, selectionEnd || 0);

        return range;
    }

    /**
     * Create an invisible DIV styled exactly like input/textarea element inside directive
     */
    private initGhost(element: HTMLInputElement | HTMLTextAreaElement): HTMLElement {
        const ghost = this.doc.createElement('div');
        const {font, letterSpacing, textTransform, padding} = getComputedStyle(element);

        ghost.style.position = 'absolute';
        ghost.style.pointerEvents = 'none';
        ghost.style.opacity = '0';
        ghost.style.whiteSpace = 'pre-wrap';
        ghost.style.font = font;
        ghost.style.letterSpacing = letterSpacing;
        ghost.style.textTransform = textTransform;
        ghost.style.padding = padding;

        this.vcr.element.nativeElement.appendChild(ghost);
        this.ghost = ghost;

        return ghost;
    }
}
