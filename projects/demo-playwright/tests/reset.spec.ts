import {TuiDemoPath} from '@demo/shared/routes';
import {expect, test} from '@playwright/test';

import {DemoPO} from '../utils/page-objects';

test.describe('Reset', () => {
    test('Correct reset value from wysiwyg', async ({page}) => {
        const demoPage = new DemoPO(page);

        await demoPage.goto(`/${TuiDemoPath.StarterKit}?placeholder=Hello`);

        const editor = demoPage.getEditor();

        await editor.focusEditor();
        await demoPage.waitForTimeout(300);

        await expect.soft(editor.editor).toHaveScreenshot('Reset-01.png');

        await page.locator('button:has-text("Reset")').click();
        await demoPage.waitForTimeout(300);

        await expect.soft(editor.editor).toHaveScreenshot('Reset-02.png');

        await editor.contentEditable.fill('12345');
        await demoPage.waitForTimeout(300);

        await expect.soft(editor.editor).toHaveScreenshot('Reset-03.png');

        await page.locator('button:has-text("Reset")').click();
        await demoPage.waitForTimeout(300);

        await expect.soft(editor.editor).toHaveScreenshot('Reset-04.png');
    });
});
