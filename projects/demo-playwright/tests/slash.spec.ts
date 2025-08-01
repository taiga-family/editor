import {TuiDemoPath} from '@demo/routes';
import {expect, test} from '@playwright/test';

import {tuiGoto} from '../utils';

test.describe('Slash', () => {
    test('show commands', async ({page}) => {
        await tuiGoto(page, TuiDemoPath.SlashCommand);

        await page.locator('[contenteditable]').first().focus();
        await page.keyboard.type('/');
        await expect.soft(page).toHaveScreenshot('Slash-01.png');
    });

    test('show link dropdown and commands', async ({page}) => {
        await tuiGoto(page, TuiDemoPath.SlashCommand);

        const editor = page.locator('[contenteditable]').first();

        await editor.focus();
        await page.keyboard.type('ABC');
        await editor.selectText();
        await page.getByTestId('toolbar__link-button').click();
        await page.waitForTimeout(300);

        await expect
            .soft(page.locator('.t-demo').first())
            .toHaveScreenshot('Slash-02.png');

        await page.keyboard.type('abc.com');
        await page.keyboard.press('Enter');
        await page.waitForTimeout(300);

        await expect
            .soft(page.locator('.t-demo').first())
            .toHaveScreenshot('Slash-03.png');

        await editor.click();
        await page.keyboard.press('End');
        await page.keyboard.press(' ');

        await page.keyboard.press('Enter');
        await page.keyboard.type('/');
        await page.waitForTimeout(300);

        await expect
            .soft(page.locator('.t-demo').first())
            .toHaveScreenshot('Slash-04.png');
    });
});
