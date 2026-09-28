import {TuiDemoPath} from '@demo/shared/routes';
import {expect, type Page, test} from '@playwright/test';

import {TuiEditorPO, tuiGoto} from '../utils';

async function openAlignDropdown(page: Page): Promise<void> {
    await page.locator('[automation-id="toolbar__align-button"]').click();
}

test.describe('Align', () => {
    test.beforeEach(async ({page}) => {
        await tuiGoto(page, `/${TuiDemoPath.StarterKit}`);
    });

    const clearAndTypeText = async (contenteditable, page): Promise<void> => {
        await contenteditable.focus();
        await contenteditable.selectText();
        await contenteditable.clear();
        await page.keyboard.type('Hello world');
    };

    test('aligns paragraph text to the left', async ({page}) => {
        const editor = new TuiEditorPO(page.locator('tui-editor'));
        const contenteditable = await editor.contenteditable();

        await clearAndTypeText(contenteditable, page);

        await contenteditable.selectText();
        await openAlignDropdown(page);
        await page.getByRole('button', {name: 'Justify left', exact: true}).click();

        await expect(editor.host.locator('p')).toHaveCSS('text-align', 'left');
        await expect.soft(editor.host).toHaveScreenshot('Align-01.png');
    });

    test('aligns paragraph text to the center', async ({page}) => {
        const editor = new TuiEditorPO(page.locator('tui-editor'));
        const contenteditable = await editor.contenteditable();

        await clearAndTypeText(contenteditable, page);

        await contenteditable.selectText();
        await openAlignDropdown(page);
        await page.getByRole('button', {name: 'Justify center', exact: true}).click();

        await expect(editor.host.locator('p')).toHaveCSS('text-align', 'center');
        await expect.soft(editor.host).toHaveScreenshot('Align-02.png');
    });

    test('aligns paragraph text to the right', async ({page}) => {
        const editor = new TuiEditorPO(page.locator('tui-editor'));
        const contenteditable = await editor.contenteditable();

        await clearAndTypeText(contenteditable, page);

        await contenteditable.selectText();
        await openAlignDropdown(page);
        await page.getByRole('button', {name: 'Justify right', exact: true}).click();

        await expect(editor.host.locator('p')).toHaveCSS('text-align', 'right');
        await expect.soft(editor.host).toHaveScreenshot('Align-03.png');
    });

    test('aligns paragraph text with full justify', async ({page}) => {
        const editor = new TuiEditorPO(page.locator('tui-editor'));
        const contenteditable = await editor.contenteditable();

        await contenteditable.selectText();
        await openAlignDropdown(page);
        await page.getByRole('button', {name: 'Justify full', exact: true}).click();

        await expect(editor.host.locator('p')).toHaveCSS('text-align', 'justify');
        await expect.soft(editor.host).toHaveScreenshot('Align-04.png');
    });

    test('switching alignment replaces the previous one', async ({page}) => {
        const editor = new TuiEditorPO(page.locator('tui-editor'));
        const contenteditable = await editor.contenteditable();

        await clearAndTypeText(contenteditable, page);

        await contenteditable.selectText();
        await openAlignDropdown(page);
        await page.getByRole('button', {name: 'Justify center', exact: true}).click();

        await expect(editor.host.locator('p')).toHaveCSS('text-align', 'center');

        await contenteditable.selectText();
        await openAlignDropdown(page);
        await page.getByRole('button', {name: 'Justify right', exact: true}).click();

        await expect(editor.host.locator('p')).toHaveCSS('text-align', 'right');
    });
});
