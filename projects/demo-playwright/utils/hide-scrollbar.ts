import {type Page} from '@playwright/test';

import {tuiHideElement} from './hide-element';

export async function hideScrollbars(page: Page): Promise<void> {
    const controls = await page.locator('tui-scroll-controls').all();

    for (const control of controls) {
        await tuiHideElement(control);
    }
}
