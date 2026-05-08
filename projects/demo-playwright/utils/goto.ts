import {expect, type Page} from '@playwright/test';

import {hideScrollbars} from './hide-scrollbar';
import {tuiMockDate} from './mock-date';
import {tuiMockImages} from './mock-images';
import {tuiWaitForFonts} from './wait-for-fonts';

interface TuiGotoOptions extends NonNullable<Parameters<Page['goto']>[1]> {
    date?: Date;
    hideHeader?: boolean;
    hideScrollbar?: boolean;
    hideNavigation?: boolean;
    enableNightMode?: boolean;
}

export async function tuiGoto(
    page: Page,
    url: string,
    {
        date = new Date(2020, 8, 25, 19, 19),
        hideHeader = true,
        hideScrollbar = true,
        hideNavigation = true,
        enableNightMode = false,
        ...playwrightGotoOptions
    }: TuiGotoOptions = {},
): ReturnType<Page['goto']> {
    await tuiMockImages(page);
    await page.addInitScript(() => {
        globalThis.Math.random = () => 0.42;
    });
    await page.addInitScript(() =>
        globalThis.sessionStorage.setItem('playwright', 'true'),
    );

    if (enableNightMode) {
        await page.addInitScript(() =>
            globalThis.localStorage.setItem('tuiNight', 'true'),
        );
    }

    await tuiMockDate(page, date);

    const response = await page.goto(url, playwrightGotoOptions);
    const app = page.locator('app');

    await page.waitForLoadState('domcontentloaded');
    await page.waitForLoadState('load');
    await tuiWaitForFonts(page);

    if (hideHeader) {
        for (const locator of await page.locator('[tuiDocHeader]').all()) {
            await locator.evaluate((el) => el.remove());
        }
    }

    if (hideNavigation) {
        for (const locator of await page.locator('tui-doc-navigation').all()) {
            await locator.evaluate((el) => el.remove());
        }
    }

    if (hideScrollbar) {
        await hideScrollbars(page);
    }

    await expect(app).toBeAttached();
    await expect(app.locator('[ngh]')).toHaveCount(0);

    return response;
}
