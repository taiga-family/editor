import {TuiDemoPath} from '@demo/shared/routes';
import {expect, type Page, test} from '@playwright/test';

import {TuiEditorPO, tuiGoto} from '../utils';

async function openCodeDropdown(page: Page): Promise<void> {
    await page.getByRole('button', {name: 'Code', exact: true}).click();
}

test.describe('Code', () => {
    test.beforeEach(async ({page}) => {
        await tuiGoto(page, `/${TuiDemoPath.StarterKit}`);

        const editor = new TuiEditorPO(page.locator('tui-editor'));
        const contenteditable = await editor.contenteditable();

        await contenteditable.focus();
        await contenteditable.selectText();
        await contenteditable.clear();
        await page.keyboard.type('Hello world');
    });

    test('toggles inline code on selected text', async ({page}) => {
        const editor = new TuiEditorPO(page.locator('tui-editor'));
        const contenteditable = await editor.contenteditable();

        await contenteditable.selectText();
        await openCodeDropdown(page);
        await page.getByRole('option', {name: 'Code in the text', exact: true}).click();

        await expect(editor.host.locator('code')).toHaveText('Hello world');
        await expect.soft(editor.host).toHaveScreenshot('inline-code.png');
    });

    test('wraps selected text into a code block', async ({page}) => {
        const editor = new TuiEditorPO(page.locator('tui-editor'));
        const contenteditable = await editor.contenteditable();

        await contenteditable.selectText();
        await openCodeDropdown(page);
        await page.getByRole('option', {name: 'Code in block', exact: true}).click();

        await expect(editor.host.locator('pre code')).toHaveText('Hello world');
        await expect.soft(editor.host).toHaveScreenshot('block-code.png');
    });
});
