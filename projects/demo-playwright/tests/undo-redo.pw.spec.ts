import {TuiDemoPath} from '@demo/shared/routes';
import {expect, test} from '@playwright/test';

import {TuiEditorPO, tuiGoto} from '../utils';

test.describe('Undo/Redo', () => {
    test.beforeEach(async ({page}) => {
        await tuiGoto(page, `/${TuiDemoPath.StarterKit}`);

        const editor = new TuiEditorPO(page.locator('tui-editor'));
        const contenteditable = await editor.contenteditable();

        await contenteditable.focus();
        await contenteditable.selectText();
        await contenteditable.clear();
        await page.keyboard.type('Hello world');
    });

    test('undo button is enabled once the document has been edited', async ({page}) => {
        const undoButton = page.locator('[automation-id="toolbar__undo-button"]');

        await expect(undoButton).toBeEnabled();
    });

    test('redo button is disabled until something has been undone', async ({page}) => {
        const redoButton = page.locator('[automation-id="toolbar__redo-button"]');

        await expect(redoButton).toBeDisabled();
    });

    test('undo reverts the editor to its original content', async ({page}) => {
        const editor = new TuiEditorPO(page.locator('tui-editor'));
        const contenteditable = await editor.contenteditable();
        const undoButton = page.locator('[automation-id="toolbar__undo-button"]');

        await undoButton.click();

        await expect(contenteditable).not.toContainText('Hello world');
        await expect(undoButton).toBeDisabled();
        await expect.soft(editor.host).toHaveScreenshot('UndoRedo-01.png');
    });

    test('redo re-applies an undone change', async ({page}) => {
        const editor = new TuiEditorPO(page.locator('tui-editor'));
        const contenteditable = await editor.contenteditable();
        const undoButton = page.locator('[automation-id="toolbar__undo-button"]');
        const redoButton = page.locator('[automation-id="toolbar__redo-button"]');

        await undoButton.click();

        await expect(contenteditable).not.toContainText('Hello world');

        await redoButton.click();

        await expect(contenteditable).toContainText('Hello world');
        await expect(redoButton).toBeDisabled();
        await expect.soft(editor.host).toHaveScreenshot('UndoRedo-02.png');
    });

    test('a new edit after undo clears the redo history', async ({page}) => {
        const editor = new TuiEditorPO(page.locator('tui-editor'));
        const contenteditable = await editor.contenteditable();
        const undoButton = page.locator('[automation-id="toolbar__undo-button"]');
        const redoButton = page.locator('[automation-id="toolbar__redo-button"]');

        await undoButton.click();

        await expect(redoButton).toBeEnabled();

        await contenteditable.focus();
        await contenteditable.selectText();
        await contenteditable.clear();
        await page.keyboard.type('Something else');

        await expect(contenteditable).toContainText('Something else');
        await expect(redoButton).toBeDisabled();
    });
});
