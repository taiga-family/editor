import {TuiDemoPath} from '@demo/shared/routes';
import {expect, test} from '@playwright/test';

import {TuiEditorPO, tuiGoto} from '../utils';

test.describe('Slash', () => {
    test('show commands', async ({page}) => {
        await tuiGoto(page, TuiDemoPath.SlashCommand);

        const editor = new TuiEditorPO(page.locator('tui-editor').first());
        const contenteditable = await editor.contenteditable();

        await contenteditable.focus();
        await page.keyboard.type('/');
        await expect(page.locator('tui-dropdown')).toBeVisible();
        await expect.soft(page).toHaveScreenshot('Slash-01.png');
    });

    test('show link dropdown and commands', async ({page}) => {
        await tuiGoto(page, TuiDemoPath.SlashCommand);

        const editor = new TuiEditorPO(page.locator('tui-editor').first());
        const contenteditable = await editor.contenteditable();

        await contenteditable.focus();
        await page.keyboard.type('ABC');
        await contenteditable.selectText();
        await page.getByTestId('toolbar__link-button').focus();
        await page.keyboard.press('Enter');

        await expect
            .soft(page.locator('.t-demo').first())
            .toHaveScreenshot('Slash-02.png');

        await page.keyboard.type('abc.com');
        await page.keyboard.press('Enter');
        await expect(page.locator('tui-input-inline')).toBeHidden();

        await expect
            .soft(page.locator('.t-demo').first())
            .toHaveScreenshot('Slash-03.png');

        await contenteditable.click();
        await page.keyboard.press('End');
        await page.keyboard.press('Enter');
        await page.keyboard.type('Test');

        await expect
            .soft(page.locator('.t-demo').first())
            .toHaveScreenshot('Slash-04.png');

        await page.keyboard.press('End');
        await page.keyboard.press('Enter');

        await page.keyboard.type('/');
        await expect(page.locator('tui-dropdown')).toBeVisible();

        await expect
            .soft(page.locator('.t-demo').first())
            .toHaveScreenshot('Slash-05.png');
    });
});
