import {TuiDemoPath} from '@demo/shared/routes';
import {expect, test} from '@playwright/test';

import {TuiEditorPO, tuiGoto} from '../utils';

test.describe('Custom color picker tool', () => {
    test.beforeEach(async ({page}) => {
        await tuiGoto(page, `/${TuiDemoPath.ColorPickerTool}`);

        const editor = new TuiEditorPO(page.locator('tui-editor'));
        const contenteditable = await editor.contenteditable();

        await contenteditable.click();
        await page.keyboard.type('Hello world');
        await expect(contenteditable).toContainText('Hello world');
        await contenteditable.selectText();
    });

    test('applies font color to selected text via custom tool', async ({page}) => {
        const editor = new TuiEditorPO(page.locator('tui-editor'));
        const dropdown = page.locator('tui-dropdown');

        await page.locator('[automation-id="toolbar__color-button"]').nth(0).click();
        await expect(dropdown).toBeVisible();
        await expect.soft(dropdown).toHaveScreenshot('CustomColorPicker-Toolbar-01.png');
        await page.locator('button#color-red-100').click();
        await page.locator('.t-color-save').click();

        await expect(editor.host.locator('span[style*="color"]')).toHaveCSS(
            'color',
            'rgb(224, 31, 25)',
        );
        await expect.soft(editor.host).toHaveScreenshot('CustomColorPicker-01.png');
    });

    test('applies background color to selected text via custom tool', async ({page}) => {
        const editor = new TuiEditorPO(page.locator('tui-editor'));
        const dropdown = page.locator('tui-dropdown');

        await page.locator('[automation-id="toolbar__color-button"]').nth(1).click();
        await expect(dropdown).toBeVisible();
        await page.locator('button#color-red-100').click();
        await page.locator('.t-color-save').click();

        await expect(editor.host.locator('span[style*="background-color"]')).toHaveCSS(
            'background-color',
            'rgb(224, 31, 25)',
        );
        await expect.soft(editor.host).toHaveScreenshot('CustomColorPicker-02.png');
    });
});
