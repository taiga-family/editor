import {expect, test} from '@playwright/test';

import {tuiGoto} from '../utils';

test.describe('Slash', () => {
    test('show commands', async ({page}) => {
        await tuiGoto(page, '/slash-command');

        await page.locator('[contenteditable]').first().focus();

        await page.keyboard.type('/');

        await expect
            .soft(page.locator('.t-demo').first())
            .toHaveScreenshot('Slash-01.png');
    });
});
