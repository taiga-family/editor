import {expect, test} from '@playwright/test';

import {tuiGoto} from '../utils';

test.describe('Details', () => {
    test('Support nested', async ({page}) => {
        await tuiGoto(page, '/starter-kit?ngModel=<p>World</p>');

        const editor = page.locator('tui-editor');
        const details = page.locator('tui-toolbar button').locator('text="Details"');
        const contenteditable = page.locator('[contenteditable]').nth(0);

        await expect(editor).toHaveScreenshot('Details-01.png');

        await details.click();
        await expect(editor).toHaveScreenshot('Details-02.png');

        await page.keyboard.type('Hello');
        await details.click();
        await contenteditable.click();
        await expect(editor).toHaveScreenshot('Details-03.png');

        await details.click();
        await expect(editor).toHaveScreenshot('Details-04.png');

        await page.keyboard.type('Nested');
        await details.click();
        await contenteditable.click();
        await expect(editor).toHaveScreenshot('Details-06.png');
    });
});
