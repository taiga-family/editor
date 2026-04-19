import {type Locator} from '@playwright/test';

export async function waitStableState(locator: Locator): Promise<void> {
    try {
        // Wait for element to appear in the DOM before getting a handle.
        // elementHandle() returns null immediately if element is absent,
        // causing the stability wait to be silently skipped.
        await locator.waitFor({state: 'visible'});

        const handle = await locator.elementHandle();

        // https://playwright.dev/docs/actionability#stable
        // element is Stable, as in not animating or completed animation
        // Element is considered stable when it has maintained
        // the same bounding box for at least two consecutive animation frames.
        await handle?.waitForElementState('stable');
    } catch {}
}
