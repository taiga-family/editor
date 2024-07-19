import {Directive, Input} from '@angular/core';
import {
    EMPTY_CLIENT_RECT,
    TuiBooleanHandler,
    tuiIsElement,
    tuiIsTextNode,
} from '@taiga-ui/cdk';
import {
    tuiAsDriver,
    tuiAsRectAccessor,
    TuiDropdownSelectionDirective,
    tuiGetWordRange,
} from '@taiga-ui/core';
import {combineLatest} from 'rxjs';
import {distinctUntilChanged, map} from 'rxjs/operators';

@Directive({
    selector: '[tuiToolbarDropdown]',
    providers: [
        tuiAsDriver(TuiDropdownToolbarDirective),
        tuiAsRectAccessor(TuiDropdownToolbarDirective),
    ],
})
export class TuiDropdownToolbarDirective extends TuiDropdownSelectionDirective {
    private previousTagPosition: DOMRect | null = null;

    protected override readonly stream$ = combineLatest([
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

            return (contained && handler(this.range)) || this.inDropdown(range);
        }),
    );

    @Input('tuiToolbarDropdownPosition')
    override position: 'selection' | 'tag' | 'word' = 'selection';

    @Input()
    set tuiToolbarDropdown(visible: TuiBooleanHandler<Range> | string) {
        this.tuiDropdownSelection = visible;
    }

    override getClientRect(): ClientRect {
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
}
