import {Directive, ElementRef, inject} from '@angular/core';
import {
    tuiClamp,
    tuiGetClosestFocusable,
    tuiIsNativeFocusedIn,
    tuiIsNativeMouseFocusable,
} from '@taiga-ui/cdk';

@Directive({
    standalone: true,
    selector: '[tuiToolbarNavigationManager]',
    host: {
        '(keydown.arrowRight.prevent)': 'onHorizontalNavigation(false)',
        '(keydown.arrowLeft.prevent)': 'onHorizontalNavigation(true)',
    },
})
export class TuiToolbarNavigationManager {
    private readonly el: HTMLElement = inject(ElementRef).nativeElement;

    public findFirstFocusableTool(reversed = false): HTMLElement | null {
        const tools = reversed
            ? this.toolsContainers.slice().reverse()
            : this.toolsContainers;

        for (const el of tools) {
            const focusableElement = tuiIsNativeMouseFocusable(el)
                ? el
                : tuiGetClosestFocusable({initial: el, root: el, keyboard: false});

            if (focusableElement) {
                return focusableElement;
            }
        }

        return null;
    }

    protected onHorizontalNavigation(toPrevious: boolean): void {
        const {toolsContainers} = this;
        const focusedToolIndex = toolsContainers.findIndex(tuiIsNativeFocusedIn);

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
        if (!wrapper || tuiIsNativeMouseFocusable(wrapper)) {
            return wrapper ?? null;
        }

        const lookedInside = tuiGetClosestFocusable({
            initial: wrapper,
            root: wrapper,
            keyboard: false,
        });

        return (
            lookedInside ||
            tuiGetClosestFocusable({
                initial: wrapper,
                root: this.el,
                previous: true,
                keyboard: false,
            })
        );
    }

    private findNextTool(wrapper?: HTMLElement | null): HTMLElement | null {
        return !wrapper || tuiIsNativeMouseFocusable(wrapper)
            ? (wrapper ?? null)
            : tuiGetClosestFocusable({
                  initial: wrapper,
                  root: this.el,
                  keyboard: false,
              });
    }
}
