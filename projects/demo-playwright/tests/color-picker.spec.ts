import {expect, test} from '@playwright/test';

import {tuiGoto} from '../utils';

test.describe('ColorPicker', () => {
    test('open color picker', async ({page}) => {
        await tuiGoto(page, '/color-picker');

        await expect(
            page.locator('#input .t-example .t-content_visible'),
        ).toHaveScreenshot('ColorPicker-01.png');

        await page.locator('#dropdown [automation-id="color-picker__button"]').click();

        await expect(
            page.locator('#input .t-example .t-content_visible'),
        ).toHaveScreenshot('ColorPicker-02.png');
    });

    test('opened color picker and change rgb', async ({page}) => {
        await tuiGoto(page, '/color-picker');

        await page.locator('#dropdown [automation-id="color-picker__button"]').click();

        // changeToHex
        await page
            .locator('tui-color-edit')
            .locator('tui-select')
            .locator('[automation-id="tui-primitive-textfield__native-input"]')
            .click();
        await page.locator('tui-data-list button:nth-of-type(2)').click();

        // setInputBox
        for (const index of [1, 2, 3]) {
            const input = page
                .locator(`tui-color-edit tui-input-number:nth-of-type(${index})`)
                .locator('[automation-id="tui-primitive-textfield__native-input"]');

            await input.focus();
            await input.fill('255');
        }

        await expect(
            page.locator('#dropdown .t-example .t-content_visible'),
        ).toHaveScreenshot('ColorPicker-03.png');
    });
});
