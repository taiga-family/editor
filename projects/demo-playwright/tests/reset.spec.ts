import {expect, test} from '@playwright/test';

import {tuiGoto} from '../utils';

test.describe('Reset', () => {
    test('Correct reset value from wysiwyg', async ({page}) => {
        await tuiGoto(page, '/starter-kit?placeholder=Hello');

        await page.locator('tui-editor [contenteditable]').focus();

        await expect.soft(page.locator('tui-editor')).toHaveScreenshot('Reset-01.png');

        await page.locator('button:has-text("Reset")').click();

        await expect.soft(page.locator('tui-editor')).toHaveScreenshot('Reset-02.png');

        await page.locator('tui-editor [contenteditable]').fill('12345');

        await expect.soft(page.locator('tui-editor')).toHaveScreenshot('Reset-03.png');

        await page.locator('button:has-text("Reset")').click();

        await expect.soft(page.locator('tui-editor')).toHaveScreenshot('Reset-04.png');
    });
});
