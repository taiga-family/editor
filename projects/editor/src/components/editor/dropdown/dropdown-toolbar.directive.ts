import {DOCUMENT} from '@angular/common';
import type {OnDestroy} from '@angular/core';
import {Directive, ElementRef, inject, Input, ViewContainerRef} from '@angular/core';
import type {TuiBooleanHandler} from '@taiga-ui/cdk';
import {
    EMPTY_CLIENT_RECT,
    TUI_RANGE,
    TUI_TRUE_HANDLER,
    tuiIsElement,
    tuiIsString,
    tuiIsTextNode,
} from '@taiga-ui/cdk';
import type {TuiRectAccessor} from '@taiga-ui/core';
import {
    TUI_SELECTION_STREAM,
    tuiAsDriver,
    tuiAsRectAccessor,
    TuiDriver,
    tuiGetWordRange,
} from '@taiga-ui/core';
import {BehaviorSubject, combineLatest, distinctUntilChanged, map} from 'rxjs';

@Directive({
    standalone: true,
    selector: '[tuiToolbarDropdown]',
    providers: [
        tuiAsDriver(TuiEditorDropdownToolbar),
        tuiAsRectAccessor(TuiEditorDropdownToolbar),
    ],
})
export class TuiEditorDropdownToolbar
    extends TuiDriver
    implements TuiRectAccessor, OnDestroy
{
    private previousTagPosition: DOMRect | null = null;
    private range = inject(TUI_RANGE);
    private readonly doc = inject(DOCUMENT);
    private readonly selection$ = inject(TUI_SELECTION_STREAM);
    private readonly el = inject(ElementRef<HTMLElement>);
    private readonly vcr = inject(ViewContainerRef);

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
                (contained && tuiIsTextNode(range.commonAncestorContainer)) ||
                range.commonAncestorContainer?.nodeName === 'P'
                    ? range
                    : this.range;

            return contained && handler(this.range);
        }),
    );

    private ghost?: HTMLElement;

    @Input('tuiToolbarDropdownPosition')
    public position: 'selection' | 'tag' | 'word' = 'selection';

    public readonly type = 'dropdown';

    constructor() {
        super((subscriber) => this.stream$.subscribe(subscriber));
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
        const selection = this.doc.getSelection();

        return (
            (selection?.rangeCount && selection.getRangeAt(0)) ||
            this.range
        )?.cloneRange();
    }
}
