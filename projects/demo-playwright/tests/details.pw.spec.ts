import {TuiDemoPath} from '@demo/shared/routes';
import {expect, test} from '@playwright/test';

import {tuiGoto} from '../utils';

test.describe('Details', () => {
    test('Support nested', async ({page}) => {
        await tuiGoto(page, `/${TuiDemoPath.StarterKit}?ngModel=<p>World</p>`);

        const editor = page.locator('tui-editor');
        const details = page.locator('tui-toolbar button').locator('text="Details"');
        const contenteditable = page.locator('[contenteditable]').first();

        await contenteditable.click();
        await expect.soft(editor).toHaveScreenshot('Details-01.png');

        await details.click();
        await expect.soft(editor).toHaveScreenshot('Details-02.png');

        await page.keyboard.type('Hello');
        await details.click();
        await contenteditable.click();
        await expect.soft(editor).toHaveScreenshot('Details-03.png');

        await details.click();
        await expect.soft(editor).toHaveScreenshot('Details-04.png');

        await page.keyboard.type('Nested');
        await details.click();
        await contenteditable.click();
        await expect.soft(editor).toHaveScreenshot('Details-05.png');
    });

    test('opening and closing works as it should', async ({page}) => {
        await tuiGoto(page, TuiDemoPath.Details);

        const example = page.locator('#details');
        const editor = example.locator('tui-editor');
        const content = example.locator('preview-output tui-editor-socket');

        await expect.soft(content).toHaveScreenshot('Details-06.png');
        await content.locator('details').first().locator('summary').click();
        await expect.soft(content).toHaveScreenshot('Details-07.png');
        await expect.soft(editor).toHaveScreenshot('Details-08.png');

        await editor
            .locator('.t-details-wrapper')
            .nth(1)
            .locator('.t-details-arrow')
            .click();

        await expect.soft(editor).toHaveScreenshot('Details-09.png');
        await expect.soft(content).toHaveScreenshot('Details-10.png');
    });

    test('default behavior - details are closed', async ({page}) => {
        await tuiGoto(page, TuiDemoPath.Details);

        const example = page.locator('#details');
        const editor = example.locator('tui-editor');
        const content = example.locator('preview-output tui-editor-socket');

        await expect.soft(content).toHaveScreenshot('Details-11.png');
        await expect.soft(editor).toHaveScreenshot('Details-12.png');

        const contenteditable = editor.locator('[contenteditable]').first();
        const detailsButton = editor
            .locator('tui-toolbar button')
            .locator('text="Details"');

        await contenteditable.click();
        await page.keyboard.press('End');
        await page.keyboard.press('Enter');
        await detailsButton.click();

        await expect.soft(editor).toHaveScreenshot('Details-13.png');
    });
});
