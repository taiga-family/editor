import {type Page} from '@playwright/test';

import {tuiHideElement} from './hide-element';
import {tuiMockDate} from './mock-date';
import {tuiMockImages} from './mock-images';
import {tuiWaitForFonts} from './wait-for-fonts';
import {waitStableState} from './wait-stable-state';

interface TuiGotoOptions extends NonNullable<Parameters<Page['goto']>[1]> {
    date?: Date;
    hideHeader?: boolean;
    hideNavigation?: boolean;
    enableNightMode?: boolean;
}

export async function tuiGoto(
    page: Page,
    url: string,
    {
        date = new Date(2020, 8, 25, 19, 19),
        hideHeader = true,
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

    await page.waitForLoadState('domcontentloaded');
    await page.waitForLoadState('load');
    await tuiWaitForFonts(page);
    await waitStableState(page.locator('app'));

    if (hideHeader) {
        for (const locator of await page.locator('[tuidocheader]').all()) {
            if (await locator.isVisible()) {
                await locator.evaluate((el) => el.remove());
            }
        }
    }

    if (hideNavigation) {
        for (const locator of await page.locator('tui-doc-navigation').all()) {
            if (await locator.isVisible()) {
                await locator.evaluate((el) => el.remove());
            }
        }
    }

    const bars = await page.locator('tui-scroll-controls .t-bar').all();

    for (const bar of bars) {
        await tuiHideElement(bar);
    }

    return response;
}
