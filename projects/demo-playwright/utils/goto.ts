import type {Page} from '@playwright/test';
import {expect} from '@playwright/test';

import {tuiMockDate} from './mock-date';
import {tuiMockImages} from './mock-images';
import {tuiWaitForFonts} from './wait-for-fonts';

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

    await expect(page.locator('app')).toHaveClass(/_loaded/, {timeout: 15_000});
    await tuiWaitForFonts(page);

    if (hideHeader) {
        await page.locator('[tuidocheader]').evaluate(el => el.remove());
    }

    if (hideNavigation) {
        await page.locator('tui-doc-navigation').evaluate(el => el.remove());
    }

    await page.waitForTimeout(1000);

    return response;
}
