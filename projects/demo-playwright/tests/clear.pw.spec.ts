import {TuiDemoPath} from '@demo/shared/routes';
import {expect, type Page, test} from '@playwright/test';

import {TuiEditorPO, tuiGoto} from '../utils';

async function openFontStyleDropdown(page: Page): Promise<void> {
    await page.locator('[automation-id="toolbar__font-style-button"]').click();
}

async function clickClear(page: Page): Promise<void> {
    await page.locator('button[tuiClearTool]').click();
}

test.describe('Clear formatting', () => {
    test.beforeEach(async ({page}) => {
        await tuiGoto(page, `/${TuiDemoPath.StarterKit}`);

        const editor = new TuiEditorPO(page.locator('tui-editor'));
        const contenteditable = await editor.contenteditable();

        await contenteditable.focus();
        await contenteditable.selectText();
        await contenteditable.clear();
        await page.keyboard.type('Hello world');
    });

    test('removes formatting marks from selected text', async ({page}) => {
        const editor = new TuiEditorPO(page.locator('tui-editor'));
        const contenteditable = await editor.contenteditable();

        await contenteditable.selectText();
        await openFontStyleDropdown(page);
        await page.getByRole('button', {name: 'Bold', exact: true}).click();

        await contenteditable.selectText();
        await openFontStyleDropdown(page);
        await page.getByRole('button', {name: 'Italic', exact: true}).click();

        await contenteditable.selectText();
        await clickClear(page);

        await expect(editor.host.locator('strong')).toHaveCount(0);
        await expect(editor.host.locator('em')).toHaveCount(0);
        await expect(editor.host.locator('p')).toHaveText('Hello world');
        await expect.soft(editor.host).toHaveScreenshot('Clear-01.png');
    });

    test('converts a blockquote back into a plain paragraph', async ({page}) => {
        const editor = new TuiEditorPO(page.locator('tui-editor'));
        const contenteditable = await editor.contenteditable();
        const quoteButton = page.locator('[automation-id="toolbar__quote-button"]');

        await contenteditable.selectText();
        await quoteButton.click();

        await contenteditable.selectText();
        await clickClear(page);

        await expect(editor.host.locator('blockquote')).toHaveCount(0);
        await expect(editor.host.locator('p')).toHaveText('Hello world');
        await expect.soft(editor.host).toHaveScreenshot('Clear-02.png');
    });

    test('converts a list item back into a plain paragraph', async ({page}) => {
        const editor = new TuiEditorPO(page.locator('tui-editor'));
        const contenteditable = await editor.contenteditable();

        await contenteditable.selectText();
        await page.locator('[automation-id="toolbar__ordering-list-button"]').click();
        await page.locator('[automation-id="toolbar__un-ordered-list-button"]').click();

        await contenteditable.selectText();
        await clickClear(page);

        await expect(editor.host.locator('ul')).toHaveCount(0);
        await expect(editor.host.locator('p')).toHaveText('Hello world');
        await expect.soft(editor.host).toHaveScreenshot('Clear-03.png');
    });
});
