import {TuiDemoPath} from '@demo/shared/routes';
import {expect, test} from '@playwright/test';

import {TuiEditorPO, tuiGoto} from '../utils';

test.describe('Mention', () => {
    test('show users in datalist', async ({page}) => {
        await tuiGoto(page, TuiDemoPath.Mention);

        const editor = new TuiEditorPO(page.locator('tui-editor').first());
        const contenteditable = await editor.contenteditable();

        await contenteditable.focus();
        await contenteditable.selectText();
        await contenteditable.clear();

        await page.keyboard.type('@');

        await expect
            .soft(page.locator('.t-demo').first())
            .toHaveScreenshot('Mention-01.png');
    });
});
