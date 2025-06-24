import {expect, test} from '@playwright/test';

import {tuiGoto} from '../utils';

test.describe('List', () => {
    ['Unordered list', 'Ordered list', 'Toggle task list'].forEach((type) => {
        test(`the first item shouldn't disappear when pressing Enter the list by ${type}`, async ({
            page,
        }) => {
            await tuiGoto(page, '/starter-kit?ngModel=Hello');
            await page.locator('[contenteditable]').nth(0).focus();
            await page.keyboard.press('Enter');

            await expect(page.locator('#demo-content tui-editor')).toHaveScreenshot(
                `List-${type}-01.png`,
            );

            await page.locator('tui-list-configs-tool button').click();
            await page.locator(`button:text-is("${type}")`).click();
            await expect(page.locator('#demo-content tui-editor')).toHaveScreenshot(
                `List-${type}-02.png`,
            );

            await page.keyboard.press('Enter');
            await expect(page.locator('#demo-content tui-editor')).toHaveScreenshot(
                `List-${type}-03.png`,
            );

            await page.keyboard.type('Hello');
            await page.keyboard.press('Enter');
            await expect(page.locator('#demo-content tui-editor')).toHaveScreenshot(
                `List-${type}-04.png`,
            );

            await page.keyboard.press('Enter');
            await page.keyboard.type('World');
            await expect(page.locator('#demo-content tui-editor')).toHaveScreenshot(
                `List-${type}-05.png`,
            );
        });
    });
});
