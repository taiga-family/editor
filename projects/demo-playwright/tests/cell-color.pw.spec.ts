import {TuiDemoPath} from '@demo/shared/routes';
import {expect, test} from '@playwright/test';

import {HTML_EDITOR_BASIC_EXAMPLE} from '../stubs/html';
import {TuiEditorPO, tuiGoto} from '../utils';

test.describe('Cell color', () => {
    test.beforeEach(async ({page}) => {
        await tuiGoto(
            page,
            `/${TuiDemoPath.StarterKit}?ngModel=${HTML_EDITOR_BASIC_EXAMPLE}`,
        );
    });

    test('applies a background color to the current table cell', async ({page}) => {
        const editor = new TuiEditorPO(page.locator('tui-editor'));
        const cell = editor.host.locator('td', {hasText: '24/7 support'});
        const paintButton = page.locator('button[tuiPaintTool]');

        await cell.click();
        await paintButton.click();
        await page.locator('button#color-red-100').click();

        await expect(cell).toHaveCSS('background-color', 'rgb(224, 31, 25)');
        await expect.soft(editor.host).toHaveScreenshot('CellColor-01.png');
    });

    test('switching the cell color replaces the previous one', async ({page}) => {
        const editor = new TuiEditorPO(page.locator('tui-editor'));
        const cell = editor.host.locator('td', {hasText: '24/7 support'});
        const paintButton = page.locator('button[tuiPaintTool]');

        await cell.click();
        await paintButton.click();
        await page.locator('button#color-red-100').click();

        await expect(cell).toHaveCSS('background-color', 'rgb(224, 31, 25)');

        await cell.click();
        await paintButton.click();
        await page.locator('button#color-blue-100').click();

        await expect(cell).toHaveCSS('background-color', 'rgb(23, 113, 230)');
        await expect.soft(editor.host).toHaveScreenshot('CellColor-02.png');
    });
});
