import type {Page} from '@playwright/test';

import {tuiHideElement} from './hide-element';

export async function hideScrollbars(page: Page): Promise<void> {
    const bars = await page.locator('tui-scroll-controls .t-bar').all();

    for (const bar of bars) {
        await tuiHideElement(bar);
    }
}
