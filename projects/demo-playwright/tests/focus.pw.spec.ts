import {TuiDemoPath} from '@demo/shared/routes';
import {expect, test} from '@playwright/test';

import {TuiEditorPO, tuiGoto} from '../utils';

test.describe('Focus extension', () => {
    test('has-focus class follows the caret across blocks', async ({page}) => {
        await tuiGoto(page, `/${TuiDemoPath.Focus}`);

        // Disable it before focusing to keep the screenshots stable
        await page.evaluate(() => {
            document.querySelectorAll('[contenteditable]').forEach((el) => {
                el.setAttribute('spellcheck', 'false');
            });
        });

        const editor = new TuiEditorPO(page.locator('tui-editor'));
        const contenteditable = await editor.contenteditable();
        const paragraph = contenteditable.locator('p').first();
        const heading = contenteditable.locator('h1').first();
        const blockquote = contenteditable.locator('blockquote').first();

        await paragraph.click();
        await expect(paragraph).toHaveClass(/has-focus/);
        await expect.soft(editor.host).toHaveScreenshot('Focus-01.png');

        await heading.click();
        await expect(heading).toHaveClass(/has-focus/);
        await expect(paragraph).not.toHaveClass(/has-focus/);
        await expect.soft(editor.host).toHaveScreenshot('Focus-02.png');

        await blockquote.click();
        await expect(blockquote).toHaveClass(/has-focus/);
        await expect(heading).not.toHaveClass(/has-focus/);
        await expect.soft(editor.host).toHaveScreenshot('Focus-03.png');
    });
});
