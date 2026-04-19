import {type Page} from '@playwright/test';

/**
 * Waits for the page scroll position to stabilize after an anchor navigation.
 * Polls scroll position across animation frames until it stops changing.
 */
export async function waitForScrollEnd(page: Page): Promise<void> {
    await page.evaluate(
        async () =>
            new Promise<void>((resolve) => {
                let lastY = window.scrollY;
                let lastX = window.scrollX;

                const check = (): void => {
                    const y = window.scrollY;
                    const x = window.scrollX;

                    if (y === lastY && x === lastX) {
                        resolve();
                    } else {
                        lastY = y;
                        lastX = x;
                        requestAnimationFrame(check);
                    }
                };

                requestAnimationFrame(() => {
                    requestAnimationFrame(check);
                });
            }),
    );
}
