import {Directive, ElementRef, inject} from '@angular/core';
import {tuiClamp, tuiGetClosestFocusable, tuiIsFocusedIn} from '@taiga-ui/cdk';
import {tuiIsMouseFocusable} from '@taiga-ui/editor/utils';

@Directive({
    selector: '[tuiToolbarNavigationManager]',
    host: {
        '(keydown.arrowLeft.prevent)': 'onHorizontalNavigation(true)',
        '(keydown.arrowRight.prevent)': 'onHorizontalNavigation(false)',
    },
})
export class TuiToolbarNavigationManager {
    private readonly el: HTMLElement = inject(ElementRef).nativeElement;

    public findFirstFocusableTool(reversed = false): HTMLElement | null {
        const tools = reversed
            ? this.toolsContainers.slice().reverse()
            : this.toolsContainers;

        for (const el of tools) {
            const focusableElement = tuiIsMouseFocusable(el)
                ? el
                : tuiGetClosestFocusable({initial: el, root: el});

            if (focusableElement) {
                return focusableElement;
            }
        }

        return null;
    }

    protected onHorizontalNavigation(toPrevious: boolean): void {
        const {toolsContainers} = this;
        const focusedToolIndex = toolsContainers.findIndex(tuiIsFocusedIn);

        const targetToolIndex = tuiClamp(
            focusedToolIndex + (toPrevious ? -1 : 1),
            0,
            toolsContainers.length - 1,
        );

        const targetToolWrapper = toolsContainers[targetToolIndex];

        const targetTool = toPrevious
            ? this.findPreviousTool(targetToolWrapper)
            : this.findNextTool(targetToolWrapper);

        if (targetTool) {
            targetTool.focus();
        }
    }

    private get toolsContainers(): readonly HTMLElement[] {
        return Array.from(this.el.querySelectorAll<HTMLElement>('[tuiItem]'));
    }

    private findPreviousTool(wrapper?: HTMLElement | null): HTMLElement | null {
        if (!wrapper || tuiIsMouseFocusable(wrapper)) {
            return wrapper ?? null;
        }

        const lookedInside = tuiGetClosestFocusable({
            initial: wrapper,
            root: wrapper,
        });

        return (
            lookedInside ||
            tuiGetClosestFocusable({
                initial: wrapper,
                root: this.el,
                previous: true,
            })
        );
    }

    private findNextTool(wrapper?: HTMLElement | null): HTMLElement | null {
        return !wrapper || tuiIsMouseFocusable(wrapper)
            ? (wrapper ?? null)
            : tuiGetClosestFocusable({
                  initial: wrapper,
                  root: this.el,
              });
    }
}
