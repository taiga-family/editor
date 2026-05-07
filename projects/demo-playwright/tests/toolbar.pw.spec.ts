import {TuiDemoPath} from '@demo/shared/routes';
import {expect, test} from '@playwright/test';

import {HTML_EDITOR_BASIC_EXAMPLE} from '../stubs/html';
import {TuiEditorPO, tuiGoto} from '../utils';

test.describe('Toolbar', () => {
    test("closes tool's dropdown if opened new tool's dropdown", async ({page}) => {
        await tuiGoto(
            page,
            `/${TuiDemoPath.StarterKit}?ngModel=${HTML_EDITOR_BASIC_EXAMPLE}`,
        );

        const editor = new TuiEditorPO(page.locator('#demo-content tui-editor'));
        const contenteditable = await editor.contenteditable();

        await contenteditable.focus();

        await expect.soft(editor.host).toHaveScreenshot('Toolbar-01.png');

        await contenteditable.focus();
        await page.locator('[automation-id="toolbar__color-button"]').focus();
        await page.keyboard.press('Enter');
        await page.waitForTimeout(300);

        await page.locator('[automation-id="toolbar__hilite-button"]').focus();
        await page.keyboard.press('Enter');
        await page.waitForTimeout(300);

        await expect.soft(editor.host).toHaveScreenshot('Toolbar-02.png');
    });

    test("closes tool's dropdown if clicked outside", async ({page}) => {
        await tuiGoto(
            page,
            `/${TuiDemoPath.StarterKit}?ngModel=${HTML_EDITOR_BASIC_EXAMPLE}`,
        );

        const editor = new TuiEditorPO(page.locator('#demo-content tui-editor'));
        const contenteditable = await editor.contenteditable();

        await contenteditable.focus();
        await page.locator('[automation-id="toolbar__color-button"]').focus();
        await page.keyboard.press('Enter');
        await page.waitForTimeout(300);

        await expect.soft(editor.host).toHaveScreenshot('Toolbar-03.png');

        await page.mouse.click(0, 0);

        await expect.soft(editor.host).toHaveScreenshot('Toolbar-04.png');
    });

    test('has the possibility to add custom tool', async ({page}) => {
        await tuiGoto(page, `/${TuiDemoPath.PasteEmojiTool}#custom-tool`);

        const editor = new TuiEditorPO(page.locator('tui-editor'));
        const contenteditable = await editor.contenteditable();

        await contenteditable.focus();
        await page.waitForTimeout(300);

        await expect.soft(editor.host).toHaveScreenshot('Toolbar-05.png');

        await page.locator('[automation-id="smiles-tool__button"]').click();
        await page.waitForTimeout(300);

        await expect.soft(editor.host).toHaveScreenshot('Toolbar-06.png');

        await page.locator('.smile').first().click();
        await page.waitForTimeout(300);

        await expect.soft(editor.host).toHaveScreenshot('Toolbar-07.png');

        await page.keyboard.type('awesome library for awesome people');
        await page.waitForTimeout(300);

        await expect.soft(editor.host).toHaveScreenshot('Toolbar-08.png');

        await page.locator('[automation-id="smiles-tool__button"]').click();
        await page.waitForTimeout(300);

        await expect.soft(editor.host).toHaveScreenshot('Toolbar-09.png');

        await page.locator('.smile').nth(2).click();
        await page.waitForTimeout(300);

        await expect.soft(editor.host).toHaveScreenshot('Toolbar-10.png');
    });

    test('make a html table by 2x2', async ({page}) => {
        await tuiGoto(
            page,
            `/${TuiDemoPath.StarterKit}?ngModel=${HTML_EDITOR_BASIC_EXAMPLE}`,
        );

        const editor = new TuiEditorPO(page.locator('tui-editor'));
        const contenteditable = await editor.contenteditable();

        await contenteditable.focus();
        await page.keyboard.type('\n\n\n\n');
        await page.waitForTimeout(300);

        await page.keyboard.press('ArrowUp');
        await page.keyboard.press('ArrowUp');
        await page.keyboard.press('ArrowUp');
        await contenteditable.scrollIntoViewIfNeeded();
        await page.waitForTimeout(100);

        await page.locator('[automation-id="toolbar__insert-table-button"]').click();
        await page.waitForTimeout(100);

        // TODO: flaky, then was changed to fullPage
        await expect.soft(page).toHaveScreenshot('Toolbar-11.png');

        const cell = page
            .locator('tui-table-size-selector .t-column')
            .or(page.locator('.t-size-selector .t-column'))
            .nth(1)
            .locator('.t-cell')
            .nth(1);

        await cell.hover();
        await cell.click();

        // TODO: flaky, then was changed to fullPage
        await expect.soft(page).toHaveScreenshot('Toolbar-12.png');
    });

    test('set table without style inheritance', async ({page}) => {
        await tuiGoto(
            page,
            `/${TuiDemoPath.StarterKit}?ngModel=${HTML_EDITOR_BASIC_EXAMPLE}`,
        );

        const editor = new TuiEditorPO(page.locator('tui-editor'));
        const contenteditable = await editor.contenteditable();

        await contenteditable.focus();
        await contenteditable.selectText();
        await contenteditable.clear();
        await expect.soft(editor.host).toHaveScreenshot('Toolbar-13.png');

        await page.locator('[automation-id="toolbar__ordering-list-button"]').focus();

        await page.keyboard.press('Enter');
        await page.waitForTimeout(300);

        await page.locator('[automation-id="toolbar__un-ordered-list-button"]').focus();

        await page.keyboard.press('Enter');
        await page.waitForTimeout(300);

        await page.locator('[automation-id="toolbar__font-style-button"]').focus();

        await page.keyboard.press('Enter');
        await page.waitForTimeout(300);

        await contenteditable.focus();

        await page.keyboard.type('12345');
        await page.waitForTimeout(300);

        await expect.soft(editor.host).toHaveScreenshot('Toolbar-14.png');

        await page.locator('[automation-id="toolbar__insert-table-button"]').focus();

        await page.keyboard.press('Enter');
        await page.waitForTimeout(300);

        const cell = page
            .locator('tui-table-size-selector .t-column')
            .or(page.locator('.t-size-selector .t-column'))
            .nth(1)
            .locator('.t-cell')
            .nth(1);

        await cell.hover();
        await cell.click();

        await expect.soft(editor.host).toHaveScreenshot('Toolbar-15.png');
    });

    test('focuses nearest left/right active tool on "Arrow Right"/"Arrow Left"', async ({
        page,
    }) => {
        await tuiGoto(
            page,
            `/${TuiDemoPath.StarterKit}?ngModel=${HTML_EDITOR_BASIC_EXAMPLE}`,
        );

        const editor = new TuiEditorPO(page.locator('tui-editor'));
        const contenteditable = await editor.contenteditable();
        const dropdown = page.locator('[automation-id="toolbar__align-button"]');

        await contenteditable.focus();
        await editor.toolbar.scrollIntoViewIfNeeded();
        await page.locator('[automation-id="toolbar__align-button"]').focus();
        await page.keyboard.press('Enter');
        await expect(dropdown).toBeVisible();
        await expect.soft(editor.host).toHaveScreenshot('Toolbar-16.png');

        await contenteditable.focus();
        await page.locator('[automation-id="toolbar__align-button"]').focus();
        await page.keyboard.press('Enter');
        await expect(dropdown).toBeVisible();
        await page.keyboard.press('ArrowRight');
        await page.keyboard.press('Enter');
        await expect(dropdown).toBeVisible();

        await expect.soft(editor.host).toHaveScreenshot('Toolbar-17.png');

        await page.keyboard.press('ArrowLeft');
        await page.keyboard.press('ArrowLeft');
        await page.keyboard.press('Enter');
        await page.waitForTimeout(300);

        await expect.soft(editor.host).toHaveScreenshot('Toolbar-18.png');
    });

    test('skips disabled tools and selects next tool after disabled', async ({page}) => {
        await tuiGoto(
            page,
            `/${TuiDemoPath.StarterKit}?ngModel=${HTML_EDITOR_BASIC_EXAMPLE}`,
        );

        const editor = new TuiEditorPO(page.locator('tui-editor'));
        const contenteditable = await editor.contenteditable();

        await contenteditable.focus();
        await contenteditable.selectText();
        await contenteditable.clear();
        await expect.soft(editor.host).toHaveScreenshot('Toolbar-19.png');

        await contenteditable.focus();
        await page.locator('[automation-id="toolbar__undo-button"]').focus();
        await page.keyboard.press('Enter');
        await page.mouse.click(0, 0);
        await page.waitForTimeout(300);

        await expect.soft(editor.host).toHaveScreenshot('Toolbar-20.png');

        await contenteditable.focus();
        await page.locator('[automation-id="toolbar__redo-button"]').focus();
        await page.keyboard.press('Enter');
        await page.mouse.click(0, 0);
        await page.waitForTimeout(300);

        await expect.soft(editor.host).toHaveScreenshot('Toolbar-21.png');
    });
});
