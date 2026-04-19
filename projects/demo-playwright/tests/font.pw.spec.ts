import {TuiDemoPath} from '@demo/shared/routes';
import {expect, test} from '@playwright/test';

import {HTML_EDITOR_BASIC_EXAMPLE} from '../stubs/html';
import {TuiEditorPO, tuiGoto} from '../utils';

test.describe('Font', () => {
    test('previous text style should not be inherited', async ({page}) => {
        await tuiGoto(
            page,
            `/${TuiDemoPath.StarterKit}?ngModel=${HTML_EDITOR_BASIC_EXAMPLE}&style.maxHeight.px=600`,
        );

        const editor = new TuiEditorPO(page.locator('tui-editor'));
        const contenteditable = await editor.contenteditable();

        await contenteditable.focus();
        await contenteditable.selectText();
        await contenteditable.clear();
        await contenteditable.focus();
        await contenteditable.clear();
        await page.keyboard.type('Hello world');

        await page.locator('[automation-id="toolbar__font-size-button"]').focus();
        await page.keyboard.press('Enter');

        await page.locator('[automation-id="tui_font__title"]').focus();
        await page.keyboard.press('Enter');

        await contenteditable.focus();
        await expect.soft(editor.host).toHaveScreenshot('Font-01.png');

        await contenteditable.focus();
        await contenteditable.selectText();
        await page.locator('[automation-id="toolbar__font-size-button"]').focus();
        await page.keyboard.press('Enter');

        await page.locator('[automation-id="tui_font__subtitle"]').focus();
        await page.keyboard.press('Enter');

        await contenteditable.focus();
        await expect.soft(editor.host).toHaveScreenshot('Font-02.png');

        await contenteditable.focus();
        await contenteditable.selectText();
        await page.locator('[automation-id="toolbar__font-size-button"]').focus();
        await page.keyboard.press('Enter');

        await page.locator('[automation-id="tui_font__large"]').focus();
        await page.keyboard.press('Enter');

        await contenteditable.focus();
        await expect.soft(editor.host).toHaveScreenshot('Font-03.png');

        await contenteditable.focus();
        await contenteditable.selectText();
        await page.locator('[automation-id="toolbar__font-size-button"]').focus();
        await page.keyboard.press('Enter');

        await page.locator('[automation-id="tui_font__normal"]').focus();
        await page.keyboard.press('Enter');

        await contenteditable.focus();
        await expect.soft(editor.host).toHaveScreenshot('Font-04.png');

        await contenteditable.focus();
        await contenteditable.selectText();
        await page.locator('[automation-id="toolbar__font-size-button"]').focus();
        await page.keyboard.press('Enter');

        await page.locator('[automation-id="tui_font__small"]').focus();
        await page.keyboard.press('Enter');

        await contenteditable.focus();
        await expect.soft(editor.host).toHaveScreenshot('Font-05.png');
    });
});
