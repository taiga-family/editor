import {TuiDemoPath} from '@demo/shared/routes';
import {expect, test} from '@playwright/test';

import {TuiEditorPO, tuiGoto} from '../utils';

test.describe('Reset', () => {
    test('Correct reset value from wysiwyg', async ({page}) => {
        await tuiGoto(page, `/${TuiDemoPath.StarterKit}?placeholder=Hello`);

        const editor = new TuiEditorPO(page.locator('tui-editor'));
        const contenteditable = await editor.contenteditable();

        await contenteditable.focus();
        await page.waitForTimeout(300);

        await expect.soft(editor.host).toHaveScreenshot('Reset-01.png');

        await page.locator('button:has-text("Reset")').click();
        await page.waitForTimeout(300);

        await expect.soft(editor.host).toHaveScreenshot('Reset-02.png');

        await contenteditable.fill('12345');
        await page.waitForTimeout(300);

        await expect.soft(editor.host).toHaveScreenshot('Reset-03.png');

        await page.locator('button:has-text("Reset")').click();
        await page.waitForTimeout(300);

        await expect.soft(editor.host).toHaveScreenshot('Reset-04.png');
    });
});
