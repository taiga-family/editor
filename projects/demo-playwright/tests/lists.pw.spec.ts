import {TuiDemoPath} from '@demo/shared/routes';
import {expect, type Page, test} from '@playwright/test';

import {TuiEditorPO, tuiGoto} from '../utils';

async function openListDropdown(page: Page): Promise<void> {
    await page.locator('[automation-id="toolbar__ordering-list-button"]').click();
}

/**
 * Adds 3 more list items, nesting each one level deeper than the previous, so
 * the resulting list has 4 levels of nesting: `Item 1` → `Item 2` → `Item 3`
 * → `Item 4`.
 */
async function createFourLevelNestedList(page: Page, editor: TuiEditorPO): Promise<void> {
    for (let depth = 2; depth <= 4; depth++) {
        await editor.placeCaretAtEnd();
        await page.keyboard.press('Enter');
        await page.keyboard.type(`Item ${depth}`);
        await openListDropdown(page);
        await page.locator('[automation-id="toolbar_indent-button"]').click();
    }
}

test.describe('Lists', () => {
    test.beforeEach(async ({page}) => {
        await tuiGoto(page, `/${TuiDemoPath.StarterKit}`);

        const editor = new TuiEditorPO(page.locator('tui-editor'));
        const contenteditable = await editor.contenteditable();

        await contenteditable.focus();
        await contenteditable.selectText();
        await contenteditable.clear();
        await page.keyboard.type('Hello world');
    });

    test('toggles unordered list on selected text', async ({page}) => {
        const editor = new TuiEditorPO(page.locator('tui-editor'));
        const contenteditable = await editor.contenteditable();

        await contenteditable.selectText();
        await openListDropdown(page);
        await page.locator('[automation-id="toolbar__un-ordered-list-button"]').click();

        await expect(editor.host.locator('ul')).toContainText('Hello world');
        await createFourLevelNestedList(page, editor);
        await expect.soft(editor.host).toHaveScreenshot('Lists-01.png');
    });

    test('toggles ordered list on selected text', async ({page}) => {
        const editor = new TuiEditorPO(page.locator('tui-editor'));
        const contenteditable = await editor.contenteditable();

        await contenteditable.selectText();
        await openListDropdown(page);
        await page.locator('[automation-id="toolbar__ordered-list-button"]').click();

        await expect(editor.host.locator('ol')).toContainText('Hello world');
        await createFourLevelNestedList(page, editor);
        await expect.soft(editor.host).toHaveScreenshot('Lists-02.png');
    });

    test('toggles task list on selected text', async ({page}) => {
        const editor = new TuiEditorPO(page.locator('tui-editor'));
        const contenteditable = await editor.contenteditable();

        await contenteditable.selectText();
        await page.locator('[automation-id="toolbar__task-list-button"]').click();

        const taskList = editor.host.locator('ul[data-type="taskList"]');

        await expect(taskList).toContainText('Hello world');
        await expect(taskList.locator('input[type="checkbox"]')).toBeVisible();
        await expect.soft(editor.host).toHaveScreenshot('Lists-03.png');

        await contenteditable.selectText();
        await page.locator('[automation-id="toolbar__task-list-button"]').click();

        await expect(taskList).toHaveCount(0);
    });

    test('checking a task list item marks it as checked', async ({page}) => {
        const editor = new TuiEditorPO(page.locator('tui-editor'));
        const contenteditable = await editor.contenteditable();

        await contenteditable.selectText();
        await page.locator('[automation-id="toolbar__task-list-button"]').click();

        const item = editor.host.locator('li[data-checked]').first();

        await item.locator('input[type="checkbox"]').click();

        await expect(item).toHaveAttribute('data-checked', 'true');
        await expect.soft(editor.host).toHaveScreenshot('Lists-04.png');
    });
});
