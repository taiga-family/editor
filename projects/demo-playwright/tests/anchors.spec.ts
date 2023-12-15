import {expect, test} from '@playwright/test';

import {tuiGoto} from '../utils';

test.describe(`Anchors`, () => {
    test.use({viewport: {width: 1280, height: 500}});

    test.beforeEach(async ({page}) => {
        await tuiGoto(page, `/anchors`);
    });

    test(`all content`, async ({page}) => {
        await expect(page.locator(`tui-editor`)).toHaveScreenshot(`Anchors-01.png`);
    });

    test(`viewport position`, async ({page}) => {
        for (const anchor of [
            `moser`,
            `thirlwell`,
            `briggs`,
            `introduction`,
            `knowles`,
            `war`,
        ]) {
            await page
                .locator(`tui-editor-socket`)
                .nth(1)
                .locator(`a[href="#${anchor}"]`)
                .click();

            await expect(page).toHaveScreenshot(`Anchors-02-${anchor}.png`);
        }
    });
});
