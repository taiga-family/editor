import {
    Directive,
    ElementRef,
    inject,
    Input,
    type OnDestroy,
    ViewContainerRef,
} from '@angular/core';
import {WA_WINDOW} from '@ng-web-apis/common';
import {
    EMPTY_CLIENT_RECT,
    TUI_RANGE,
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
import {PM_SELECTED_NODE_CSS_CLASS} from '@taiga-ui/editor/common';
import {BehaviorSubject, combineLatest, map} from 'rxjs';

interface ServerSideGlobal extends NodeJS.Global {
    document: Document | undefined;
}

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

    private readonly doc: Document | null =
        inject<ServerSideGlobal | undefined>(WA_WINDOW)?.document ?? null;

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
            const contained =
                this.el.nativeElement.contains(range.commonAncestorContainer) ||
                range.commonAncestorContainer.parentElement?.closest('tui-dropdown');

            this.range =
                (contained && tuiIsTextNode(range.commonAncestorContainer)) ||
                range.commonAncestorContainer.nodeName === 'P'
                    ? range
                    : this.range;

            return contained && handler(this.range);
        }),
    );

    private readonly ghost?: HTMLElement;

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
                              ?.querySelector(`.${PM_SELECTED_NODE_CSS_CLASS}`)
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
        const selection = this.doc?.getSelection();
        const range = selection?.rangeCount ? selection.getRangeAt(0) : this.range;

        return range.cloneRange();
    }
}
