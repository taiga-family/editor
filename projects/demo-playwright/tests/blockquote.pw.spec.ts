import {TuiDemoPath} from '@demo/shared/routes';
import {expect, test} from '@playwright/test';

import {TuiEditorPO, tuiGoto} from '../utils';

test.describe('Blockquote', () => {
    test.beforeEach(async ({page}) => {
        await tuiGoto(page, `/${TuiDemoPath.StarterKit}`);

        const editor = new TuiEditorPO(page.locator('tui-editor'));
        const contenteditable = await editor.contenteditable();

        await contenteditable.focus();
        await contenteditable.selectText();
        await contenteditable.clear();
        await page.keyboard.type('Hello world');
    });

    test('wraps selected text into a blockquote', async ({page}) => {
        const editor = new TuiEditorPO(page.locator('tui-editor'));
        const contenteditable = await editor.contenteditable();
        const quoteButton = page.locator('[automation-id="toolbar__quote-button"]');

        await contenteditable.selectText();
        await quoteButton.click();

        await expect(editor.host.locator('blockquote')).toContainText('Hello world');
        await expect.soft(editor.host).toHaveScreenshot('Blockquote-01.png');
    });

    test('disables the quote button once the selection is already a blockquote', async ({
        page,
    }) => {
        const editor = new TuiEditorPO(page.locator('tui-editor'));
        const contenteditable = await editor.contenteditable();
        const quoteButton = page.locator('[automation-id="toolbar__quote-button"]');

        await contenteditable.selectText();
        await quoteButton.click();

        await expect(editor.host.locator('blockquote')).toContainText('Hello world');

        await editor.host.locator('blockquote').click();

        await expect(quoteButton).toBeDisabled();
    });
});
