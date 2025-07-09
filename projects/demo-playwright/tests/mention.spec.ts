import {expect, test} from '@playwright/test';

import {tuiGoto} from '../utils';

test.describe('Mention', () => {
    test('show users in datalist', async ({page}) => {
        await tuiGoto(page, '/mention');

        await page.locator('[contenteditable]').first().focus();
        await page.locator('[contenteditable]').first().selectText();
        await page.keyboard.press('Backspace');

        await page.keyboard.type('@');

        await expect
            .soft(page.locator('.t-demo').first())
            .toHaveScreenshot('Mention-01.png');
    });
});
