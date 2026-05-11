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
        await expect(editor.link.input).toBeVisible();

        await expect
            .soft(page.locator('.t-demo').first())
            .toHaveScreenshot('Slash-02.png');

        await editor.link.submit('abc.com');
        await expect(editor.link.inlineInput).toBeHidden();
        await expect(editor.link.preview('abc.com')).toBeVisible();

        await expect
            .soft(page.locator('.t-demo').first())
            .toHaveScreenshot('Slash-03.png');

        await editor.placeCaretAtEnd(contenteditable.locator('a').first());
        await page.keyboard.type('.');
        await page.keyboard.press('Enter');
        await page.keyboard.type('Test');

        await expect
            .soft(page.locator('.t-demo').first())
            .toHaveScreenshot('Slash-04.png');

        await editor.placeCaretAtEnd();
        await page.keyboard.type('.');
        await page.keyboard.press('Enter');

        await page.keyboard.type('/');
        await expect(page.locator('tui-dropdown')).toBeVisible();

        await expect
            .soft(page.locator('.t-demo').first())
            .toHaveScreenshot('Slash-05.png');
    });
});
