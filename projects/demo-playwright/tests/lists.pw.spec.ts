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

    test('keeps the checkbox when pressing Enter on a task list item', async ({page}) => {
        const editor = new TuiEditorPO(page.locator('tui-editor'));
        const contenteditable = await editor.contenteditable();

        await contenteditable.selectText();
        await page.locator('[automation-id="toolbar__task-list-button"]').click();

        const taskList = editor.host.locator('ul[data-type="taskList"]');

        await expect(taskList).toHaveCount(1);
        await expect(taskList.locator('li')).toHaveCount(1);
        await expect(taskList.locator('input[type="checkbox"]')).toHaveCount(1);

        await editor.placeCaretAtEnd();
        await page.keyboard.press('Enter');
        await page.mouse.click(0, 0);

        // Bug #1748: the checkbox of the first item must not disappear after
        // pressing Enter, and a new task list item with its own checkbox is created.
        await expect(taskList.locator('li')).toHaveCount(2);
        await expect(taskList.locator('input[type="checkbox"]')).toHaveCount(2);
        await expect
            .soft(editor.host)
            .toHaveScreenshot('Lists-05-checkbox-after-enter.png');
    });

    test('indents a task list item with the Tab key', async ({page}) => {
        const editor = new TuiEditorPO(page.locator('tui-editor'));
        const contenteditable = await editor.contenteditable();

        await contenteditable.selectText();
        await page.locator('[automation-id="toolbar__task-list-button"]').click();
        await editor.placeCaretAtEnd();
        await page.keyboard.press('Enter');
        await page.keyboard.type('Item 2');

        const taskList = editor.host.locator('ul[data-type="taskList"]');
        const nestedTaskList = taskList.locator('ul[data-type="taskList"]');

        await expect(taskList).toHaveCount(1);
        await expect(taskList.locator('li')).toHaveCount(2);
        await expect(nestedTaskList).toHaveCount(0);

        // Bug #1465: pressing Tab on a task list item must indent it (sink),
        // creating a nested task list, same as for ordered/unordered lists.
        await page.keyboard.press('Tab');

        await expect(nestedTaskList).toHaveCount(1);
        await expect(nestedTaskList.locator('li')).toHaveCount(1);
        await expect(nestedTaskList.locator('li')).toContainText('Item 2');

        await page.mouse.click(0, 0);
        await expect
            .soft(editor.host)
            .toHaveScreenshot('Lists-06-tasklist-tab-indent.png');
    });

    test('renumbers the ordered list after deleting an item', async ({page}) => {
        const editor = new TuiEditorPO(page.locator('tui-editor'));
        const contenteditable = await editor.contenteditable();
        const orderedList = editor.host.locator('ol');

        await contenteditable.selectText();
        await openListDropdown(page);
        await page.locator('[automation-id="toolbar__ordered-list-button"]').click();

        const addItem = async (text: string): Promise<void> => {
            await editor.placeCaretAtEnd();
            await page.keyboard.press('Enter');
            await page.keyboard.type(text);
        };

        await addItem('Item 2');
        await addItem('Item 3');

        await expect(orderedList.locator('li')).toHaveCount(3);
        await expect(orderedList.locator('li').nth(0)).toContainText('Hello world');
        await expect(orderedList.locator('li').nth(1)).toContainText('Item 2');
        await expect(orderedList.locator('li').nth(2)).toContainText('Item 3');
        await expect.soft(editor.host).toHaveScreenshot('Lists-07-before-delete.png');

        await orderedList
            .locator('li')
            .nth(1)
            .locator('p')
            .evaluate((element) => {
                const range = document.createRange();
                const text = element.firstChild;

                range.setStart(text ?? element, 0);
                range.collapse(true);

                const selection = document.getSelection();

                selection?.removeAllRanges();
                selection?.addRange(range);

                element.closest<HTMLElement>('[contenteditable]')?.focus();
                element.ownerDocument.dispatchEvent(new Event('selectionchange'));
            });

        // Bug #1118: deleting an ordered list item must renumber the following items.
        await page.keyboard.press('Backspace');

        await expect(orderedList.locator('li')).toHaveCount(2);
        await expect(orderedList.locator('li').nth(0)).toContainText('Item 2');
        await expect(orderedList.locator('li').nth(1)).toContainText('Item 3');
        await expect.soft(editor.host).toHaveScreenshot('Lists-08-after-delete.png');
    });

    test('inserts a hard break with a single Shift+Enter at the end of a paragraph', async ({
        page,
    }) => {
        const editor = new TuiEditorPO(page.locator('tui-editor'));
        const contenteditable = await editor.contenteditable();
        const paragraph = editor.host.locator('p').first();

        await contenteditable.selectText();
        await contenteditable.clear();
        await page.keyboard.type('Hello');

        await expect(paragraph).toHaveCount(1);
        await expect(paragraph.locator('br')).toHaveCount(0);

        // Bug #1464: a single Shift+Enter at the end of a paragraph must insert
        // a <br> inside the same paragraph (no double-press required). The
        // paragraph stays a single <p> (no split into two paragraphs). Only the
        // real hard break counts — the ProseMirror-trailingBreak is synthetic.
        await page.keyboard.press('Shift+Enter');

        await expect(paragraph.locator('br:not(.ProseMirror-trailingBreak)')).toHaveCount(
            1,
        );
        await expect(editor.host.locator('p')).toHaveCount(1);
    });
});
