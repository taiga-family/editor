import {TuiDemoPath} from '@demo/shared/routes';
import {expect, test} from '@playwright/test';

import {TuiEditorPO, tuiGoto} from '../utils';

test.describe('Text and highlight color', () => {
    test.beforeEach(async ({page}) => {
        await tuiGoto(page, `/${TuiDemoPath.StarterKit}`);

        const editor = new TuiEditorPO(page.locator('tui-editor'));
        const contenteditable = await editor.contenteditable();

        await contenteditable.focus();
        await contenteditable.selectText();
        await contenteditable.clear();
        await page.keyboard.type('Hello world');
    });

    test('applies a text color to selected text', async ({page}) => {
        const editor = new TuiEditorPO(page.locator('tui-editor'));
        const contenteditable = await editor.contenteditable();

        await contenteditable.selectText();
        await page.locator('[automation-id="toolbar__color-button"]').click();
        await page.locator('button#color-red-100').click();

        await expect(editor.host.locator('span[style*="color"]')).toHaveCSS(
            'color',
            'rgb(224, 31, 25)',
        );
        await expect.soft(editor.host).toHaveScreenshot('TextColor-01.png');
    });

    test('applies a highlight color to selected text', async ({page}) => {
        const editor = new TuiEditorPO(page.locator('tui-editor'));
        const contenteditable = await editor.contenteditable();

        await contenteditable.selectText();
        await page.locator('[automation-id="toolbar__hilite-button"]').click();
        await page.locator('button#color-red-100').click();

        await expect(editor.host.locator('span[style*="background-color"]')).toHaveCSS(
            'background-color',
            'rgb(224, 31, 25)',
        );
        await expect.soft(editor.host).toHaveScreenshot('TextColor-02.png');
    });

    test('combines text color and highlight color on the same selection', async ({
        page,
    }) => {
        const editor = new TuiEditorPO(page.locator('tui-editor'));
        const contenteditable = await editor.contenteditable();

        await contenteditable.selectText();
        await page.locator('[automation-id="toolbar__color-button"]').click();
        await page.locator('button#color-red-100').click();

        await contenteditable.selectText();
        await page.locator('[automation-id="toolbar__hilite-button"]').click();
        await page.locator('button#color-blue-100').click();

        const span = editor.host.locator(
            'span[style*="color"][style*="background-color"]',
        );

        await expect(span).toHaveCSS('color', 'rgb(224, 31, 25)');
        await expect(span).toHaveCSS('background-color', 'rgb(23, 113, 230)');
        await expect.soft(editor.host).toHaveScreenshot('TextColor-03.png');
    });
});
