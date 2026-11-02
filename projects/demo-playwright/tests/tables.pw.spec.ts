import {TuiDemoPath} from '@demo/shared/routes';
import {expect, type Locator, type Page, test} from '@playwright/test';

import {HTML_EDITOR_BASIC_EXAMPLE} from '../stubs/html';
import {TuiEditorPO, tuiGoto} from '../utils';

function getTable(editor: TuiEditorPO): Locator {
    return editor.host.locator('table');
}

function getRows(editor: TuiEditorPO): Locator {
    return getTable(editor).locator('tbody tr');
}

function getFirstRowCells(editor: TuiEditorPO): Locator {
    return getRows(editor).first().locator('th, td');
}

async function selectCell(editor: TuiEditorPO, text: string): Promise<void> {
    await getTable(editor).locator('td', {hasText: text}).first().click();
}

async function openTableMenu(page: Page): Promise<void> {
    await page.locator('button[tuiAddRowTableTool]').click();
}

async function runTableCommand(page: Page, label: string): Promise<void> {
    await page.getByRole('option', {name: label}).click();
}

async function selectAdjacentCells(editor: TuiEditorPO): Promise<void> {
    const dataRow = getRows(editor).nth(1);

    await dataRow.locator('td').nth(0).dragTo(dataRow.locator('td').nth(1));
}

test.describe('Tables', () => {
    test.beforeEach(async ({page}) => {
        await tuiGoto(
            page,
            `/${TuiDemoPath.StarterKit}?ngModel=${HTML_EDITOR_BASIC_EXAMPLE}`,
        );
    });

    test('inserts a column after the current cell', async ({page}) => {
        const editor = new TuiEditorPO(page.locator('tui-editor'));

        await expect(getFirstRowCells(editor)).toHaveCount(3);

        await selectCell(editor, '24/7 support');
        await openTableMenu(page);
        await runTableCommand(page, 'Insert column after');

        await expect(getFirstRowCells(editor)).toHaveCount(4);
        await editor.host.blur();
        await page.mouse.move(0, 0);
        await expect.soft(editor.host).toHaveScreenshot('Tables-01.png');
    });

    test('inserts a column before the current cell', async ({page}) => {
        const editor = new TuiEditorPO(page.locator('tui-editor'));

        await expect(getFirstRowCells(editor)).toHaveCount(3);

        await selectCell(editor, '24/7 support');
        await openTableMenu(page);
        await runTableCommand(page, 'Insert column before');

        await expect(getFirstRowCells(editor)).toHaveCount(4);
        await editor.host.blur();
        await page.mouse.move(0, 0);
        await expect.soft(editor.host).toHaveScreenshot('Tables-02.png');
    });

    test('inserts a row after the current cell', async ({page}) => {
        const editor = new TuiEditorPO(page.locator('tui-editor'));

        await expect(getRows(editor)).toHaveCount(2);

        await selectCell(editor, '24/7 support');
        await openTableMenu(page);
        await runTableCommand(page, 'Insert row after');

        await expect(getRows(editor)).toHaveCount(3);
        await editor.host.blur();
        await page.mouse.move(0, 0);
        await expect.soft(editor.host).toHaveScreenshot('Tables-03.png');
    });

    test('inserts a row before the current cell', async ({page}) => {
        const editor = new TuiEditorPO(page.locator('tui-editor'));

        await expect(getRows(editor)).toHaveCount(2);

        await selectCell(editor, '24/7 support');
        await openTableMenu(page);
        await runTableCommand(page, 'Insert row before');

        await expect(getRows(editor)).toHaveCount(3);
        await editor.host.blur();
        await page.mouse.move(0, 0);
        await expect.soft(editor.host).toHaveScreenshot('Tables-04.png');
    });

    test('deletes the current column', async ({page}) => {
        const editor = new TuiEditorPO(page.locator('tui-editor'));

        await expect(getFirstRowCells(editor)).toHaveCount(3);

        await selectCell(editor, '24/7 support');
        await openTableMenu(page);
        await runTableCommand(page, 'Delete column');

        await expect(getFirstRowCells(editor)).toHaveCount(2);
        await editor.host.blur();
        await page.mouse.move(0, 0);
        await expect.soft(editor.host).toHaveScreenshot('Tables-05.png');
    });

    test('deletes the current row', async ({page}) => {
        const editor = new TuiEditorPO(page.locator('tui-editor'));

        await expect(getRows(editor)).toHaveCount(2);

        await selectCell(editor, '24/7 support');
        await openTableMenu(page);
        await runTableCommand(page, 'Delete row');

        await expect(getRows(editor)).toHaveCount(1);
        await editor.host.blur();
        await page.mouse.move(0, 0);
        await expect.soft(editor.host).toHaveScreenshot('Tables-06.png');
    });

    test('merges the selected cells', async ({page}) => {
        const editor = new TuiEditorPO(page.locator('tui-editor'));
        const dataRow = getRows(editor).nth(1);

        await selectCell(editor, '24/7 support');
        await selectAdjacentCells(editor);

        const mergeButton = page.locator('button[tuiTableMergeCellTool]');

        await expect(mergeButton).toBeEnabled();
        await mergeButton.click();

        await expect(dataRow.locator('td, th')).toHaveCount(2);
        await expect(dataRow.locator('td').first()).toHaveAttribute('colspan', '2');
        await editor.host.blur();
        await page.mouse.move(0, 0);
        await expect.soft(editor.host).toHaveScreenshot('Tables-07.png');
    });

    test('splits a merged cell', async ({page}) => {
        const editor = new TuiEditorPO(page.locator('tui-editor'));
        const dataRow = getRows(editor).nth(1);

        await selectCell(editor, '24/7 support');
        await selectAdjacentCells(editor);

        const mergeButton = page.locator('button[tuiTableMergeCellTool]');

        await expect(mergeButton).toBeEnabled();
        await mergeButton.click();
        await expect(dataRow.locator('td').first()).toHaveAttribute('colspan', '2');

        await mergeButton.click();

        await expect(dataRow.locator('td, th')).toHaveCount(3);
        await expect(dataRow.locator('td').first()).toHaveAttribute('colspan', '1');
        await editor.host.blur();
        await page.mouse.move(0, 0);
        await expect.soft(editor.host).toHaveScreenshot('Tables-08.png');
    });

    test('resizes the last column by dragging its edge', async ({page}) => {
        const editor = new TuiEditorPO(page.locator('tui-editor'));
        const table = getTable(editor);
        const lastColumn = table.locator('colgroup col').nth(2);
        const lastCell = table.locator('tr').first().locator('th, td').nth(2);

        await expect(lastColumn).toHaveAttribute('style', 'min-width: 25px;');
        await table.scrollIntoViewIfNeeded();

        const box = await lastCell.boundingBox();

        expect(box).not.toBeNull();

        // Bug #1752: dragging the right edge of the last table column must
        // shrink it (the last column is resizable, not just the inner ones).
        await page.mouse.move(box!.x + box!.width - 2, box!.y + box!.height / 2);
        await page.mouse.down();
        await page.mouse.move(box!.x + box!.width - 60, box!.y + box!.height / 2, {
            steps: 15,
        });
        await page.mouse.up();

        await expect(lastColumn).toHaveAttribute(
            'style',
            /min-width: 25px; width: \d+px;/,
        );
        await editor.host.blur();
        await page.mouse.move(0, 0);
        await expect.soft(editor.host).toHaveScreenshot('Tables-09.png');
    });

    test('inserts a horizontal rule into an empty cell without breaking the table', async ({
        page,
    }) => {
        const editor = new TuiEditorPO(page.locator('tui-editor'));
        const table = getTable(editor);
        const emptyCell = getFirstRowCells(editor).first();

        await emptyCell.click();
        await page
            .getByRole('button', {name: 'Insert horizontal rule', exact: true})
            .click();

        // Bug #1269: adding a separator to an empty cell used to render it above
        // the table (single row) or split the table into two (multiple rows).
        await expect(table).toHaveCount(1);
        await expect(getRows(editor)).toHaveCount(2);
        await expect(table.locator('hr')).toHaveCount(1);
        await expect(emptyCell.locator('hr')).toHaveCount(1);
        await editor.host.blur();
        await page.mouse.move(0, 0);
        await expect.soft(editor.host).toHaveScreenshot('Tables-10.png');
    });
});
