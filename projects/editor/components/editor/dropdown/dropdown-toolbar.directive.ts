import {isPlatformBrowser} from '@angular/common';
import {
    Directive,
    effect,
    ElementRef,
    forwardRef,
    inject,
    input,
    type OnDestroy,
    PLATFORM_ID,
    ViewContainerRef,
} from '@angular/core';
import {WA_WINDOW} from '@ng-web-apis/common';
import {
    EMPTY_CLIENT_RECT,
    TUI_TRUE_HANDLER,
    type TuiBooleanHandler,
    tuiIsElement,
    tuiIsString,
    tuiIsTextNode,
} from '@taiga-ui/cdk';
import {
    TUI_SELECTION_STREAM,
    tuiAsDriver,
    tuiAsRectAccessor,
    TuiDriver,
    tuiGetWordRange,
    type TuiRectAccessor,
} from '@taiga-ui/core';
import {TUI_EDITOR_PM_SELECTED_NODE} from '@taiga-ui/editor/common';
import {BehaviorSubject, combineLatest, map} from 'rxjs';

@Directive({
    selector: '[tuiToolbarDropdown]',
    providers: [
        tuiAsDriver(forwardRef(() => TuiEditorDropdownToolbar)),
        tuiAsRectAccessor(forwardRef(() => TuiEditorDropdownToolbar)),
    ],
})
export class TuiEditorDropdownToolbar
    extends TuiDriver
    implements TuiRectAccessor, OnDestroy
{
    private previousTagPosition: DOMRect | null = null;
    private previousSelectionRect: DOMRect | null = null;

    private readonly doc =
        inject<{document: Partial<Document> | undefined} | undefined>(WA_WINDOW)
            ?.document ?? null;

    private readonly selection$ = inject(TUI_SELECTION_STREAM);
    private readonly el = inject(ElementRef<HTMLElement>);
    private readonly vcr = inject(ViewContainerRef);

    private readonly handler$ = new BehaviorSubject<TuiBooleanHandler<Range>>(
        TUI_TRUE_HANDLER,
    );

    private readonly stream$ = combineLatest([
        this.handler$,
        this.selection$.pipe(map(() => this.getRange())),
    ]).pipe(
        map(([handler, range]) => {
            const insideEditor = this.el.nativeElement.contains(
                range.commonAncestorContainer,
            );

            const insideDropdown =
                !!range.commonAncestorContainer.parentElement?.closest('tui-dropdown');

            this.range =
                insideEditor &&
                (tuiIsTextNode(range.commonAncestorContainer) ||
                    range.commonAncestorContainer.nodeName === 'P')
                    ? range
                    : this.range;

            return (insideEditor || insideDropdown) && handler(this.range);
        }),
    );

    private readonly ghost?: HTMLElement;

    protected range = isPlatformBrowser(inject(PLATFORM_ID))
        ? new Range()
        : ({} as unknown as Range);

    public readonly position = input<'selection' | 'tag' | 'word'>('selection', {
        alias: 'tuiToolbarDropdownPosition',
    });

    public readonly tuiToolbarDropdown = input<TuiBooleanHandler<Range> | string>(
        TUI_TRUE_HANDLER,
    );

    protected readonly tuiToolbarDropdownEffect = effect(() => {
        const visible = this.tuiToolbarDropdown();

        if (!tuiIsString(visible)) {
            this.handler$.next(visible);
        }
    });

    public readonly type = 'dropdown';

    constructor() {
        super((subscriber) => this.stream$.subscribe(subscriber));
    }

    public getClientRect(): ClientRect {
        switch (this.position()) {
            case 'tag': {
                const {commonAncestorContainer} = this.range;
                const element = tuiIsElement(commonAncestorContainer)
                    ? commonAncestorContainer
                    : commonAncestorContainer.parentNode;

                if (element?.parentElement?.closest('tui-dropdown')) {
                    if (!this.previousTagPosition) {
                        // Race condition: focus moved into the dropdown before the first
                        // getClientRect() call outside it could cache a position.
                        const selectedNode = this.doc?.querySelector?.(
                            `.${TUI_EDITOR_PM_SELECTED_NODE}`,
                        );
                        const fallbackAnchor = this.el.nativeElement.querySelector(
                            'a[href], a[data-type="jump-anchor"]',
                        );
                        const rect = (
                            selectedNode ?? fallbackAnchor
                        )?.getBoundingClientRect();

                        if (rect && (rect.width > 0 || rect.height > 0)) {
                            this.previousTagPosition = rect;
                        }
                    }

                    return this.previousTagPosition ?? EMPTY_CLIENT_RECT;
                }

                // `element` may be null or detached when ProseMirror rebuilds the DOM
                // after inserting/wrapping a node (e.g. adding a jumpAnchor mark). Fall
                // back to a live DOM query in that case.
                // Note: `.ProseMirror-selectednode` is only set for block-node selections
                // (images, custom widgets) — not for link/anchor marks — so we also try
                // the link selectors as a fallback.
                const liveElement: Element | null =
                    element && tuiIsElement(element) && element.isConnected
                        ? element
                        : (this.doc?.querySelector?.(`.${TUI_EDITOR_PM_SELECTED_NODE}`) ??
                          this.el.nativeElement.querySelector(
                              'a[href], a[data-type="jump-anchor"]',
                          ));

                // Only update the cache when the rect is non-empty, so the last-known-good
                // position is preserved if the element is momentarily unavailable.
                const liveRect = liveElement?.getBoundingClientRect();

                if (liveRect && (liveRect.width > 0 || liveRect.height > 0)) {
                    this.previousTagPosition = liveRect;
                }

                return this.previousTagPosition ?? EMPTY_CLIENT_RECT;
            }
            case 'word':
                return tuiGetWordRange(this.range).getBoundingClientRect();
            default: {
                const rect = this.range.getBoundingClientRect();

                const unstable =
                    this.range.collapsed || rect.width === 0 || rect.height === 0;

                if (!unstable) {
                    this.previousSelectionRect = rect;

                    return rect;
                }

                return this.previousSelectionRect ?? rect;
            }
        }
    }

    public ngOnDestroy(): void {
        if (this.ghost) {
            this.vcr.element.nativeElement.removeChild(this.ghost);
        }
    }

    private getRange(): Range {
        const selection = this.doc?.getSelection?.();
        const range = selection?.rangeCount ? selection.getRangeAt(0) : this.range;

        return range.cloneRange();
    }
}
