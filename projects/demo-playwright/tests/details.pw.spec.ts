import {TuiDemoPath} from '@demo/shared/routes';
import {expect, test} from '@playwright/test';

import {TuiEditorPO, tuiGoto} from '../utils';

test.describe('Details', () => {
    test('Support nested', async ({page}) => {
        await tuiGoto(page, `/${TuiDemoPath.StarterKit}?ngModel=<p>World</p>`);

        const editor = new TuiEditorPO(page.locator('tui-editor'));
        const details = page.locator('tui-toolbar button').locator('text="Details"');
        const contenteditable = await editor.contenteditable();

        await contenteditable.click();
        await expect.soft(editor.host).toHaveScreenshot('Details-01.png');

        await details.click();
        await expect.soft(editor.host).toHaveScreenshot('Details-02.png');

        await page.keyboard.type('Hello');
        await details.click();
        await contenteditable.click();
        await expect.soft(editor.host).toHaveScreenshot('Details-03.png');

        await details.click();
        await expect.soft(editor.host).toHaveScreenshot('Details-04.png');

        await page.keyboard.type('Nested');
        await details.click();
        await contenteditable.click();
        await expect.soft(editor.host).toHaveScreenshot('Details-05.png');
    });

    test('opening and closing works as it should', async ({page}) => {
        await tuiGoto(page, TuiDemoPath.Details);

        const example = page.locator('#details');
        const editor = new TuiEditorPO(example.locator('tui-editor'));
        const content = example.locator('tui-accordion tui-editor-socket');

        await expect.soft(content).toHaveScreenshot('Details-06.png');
        await content.locator('details').first().locator('summary').click();
        await expect.soft(content).toHaveScreenshot('Details-07.png');
        await expect.soft(editor.host).toHaveScreenshot('Details-08.png');

        await editor.host
            .locator('.t-details-wrapper')
            .nth(1)
            .locator('.t-details-arrow')
            .click();

        await expect.soft(editor.host).toHaveScreenshot('Details-09.png');
        await expect.soft(content).toHaveScreenshot('Details-10.png');
    });

    test('default behavior - details are closed', async ({page}) => {
        await tuiGoto(page, TuiDemoPath.Details);

        const example = page.locator('#details');
        const editor = new TuiEditorPO(example.locator('tui-editor'));
        const content = example.locator('tui-accordion tui-editor-socket');

        await expect.soft(content).toHaveScreenshot('Details-11.png');
        await expect.soft(editor.host).toHaveScreenshot('Details-12.png');

        const contenteditable = await editor.contenteditable();

        const detailsButton = editor.host
            .locator('tui-toolbar button')
            .locator('text="Details"');

        await contenteditable.click();
        await page.keyboard.press('End');
        await page.keyboard.press('Enter');

        const wrapperCount = await editor.host.locator('.t-details-wrapper').count();

        await detailsButton.click();
        await expect(editor.host.locator('.t-details-wrapper')).toHaveCount(
            wrapperCount + 1,
        );
        await page.mouse.click(0, 0);

        await expect.soft(editor.host).toHaveScreenshot('Details-13.png');
    });

    test('nested details - opened and closed state', async ({page}) => {
        await tuiGoto(page, TuiDemoPath.Details);

        const example = page.locator('#configuration');
        const content = example.locator('tui-editor-socket').filter({hasText: 'Title 1'});

        await content.scrollIntoViewIfNeeded();
        await expect.soft(content).toHaveScreenshot('Details-14.png');

        const nested = content.locator('details').filter({hasText: 'Title 2'}).nth(1);

        await nested.locator('summary').click();
        await expect.soft(content).toHaveScreenshot('Details-15.png');
    });

    test('delete button on parent removes parent, not nested child', async ({page}) => {
        await tuiGoto(page, `/${TuiDemoPath.StarterKit}?ngModel=<p>Hello</p>`);

        const editor = new TuiEditorPO(page.locator('tui-editor'));
        const contenteditable = await editor.contenteditable();

        const detailsButton = page
            .locator('tui-toolbar button')
            .locator('text="Details"');

        const detailsContent = editor.host.locator('[data-type="details-content"]');

        await contenteditable.click();
        await detailsButton.click();
        await page.keyboard.type('Parent');

        await detailsContent.first().locator('p').click();
        await detailsButton.click();
        await page.keyboard.type('Nested');

        await contenteditable.click();
        await expect.soft(editor.host).toHaveScreenshot('Details-nested-delete-01.png');

        await editor.host
            .locator('.t-details-wrapper')
            .first()
            .locator(':scope > .t-details-delete')
            .click();
        await expect.soft(editor.host).toHaveScreenshot('Details-nested-delete-02.png');
        await expect(editor.host.locator('.t-details-wrapper')).toHaveCount(0);
    });

    test('triple-nested details — delete middle, then root', async ({page}) => {
        await tuiGoto(page, `/${TuiDemoPath.StarterKit}?ngModel=<p>World</p>`);

        const editor = new TuiEditorPO(page.locator('tui-editor'));
        const contenteditable = await editor.contenteditable();

        const detailsButton = page
            .locator('tui-toolbar button')
            .locator('text="Details"');

        const detailsContent = editor.host.locator('[data-type="details-content"]');

        await contenteditable.click();
        await detailsButton.click();
        await page.keyboard.type('Root');

        await detailsContent.first().locator('p').click();
        await detailsButton.click();
        await page.keyboard.type('Middle');

        await detailsContent.nth(1).locator('p').click();
        await detailsButton.click();
        await page.keyboard.type('Deepest');

        await contenteditable.click();
        await expect.soft(editor.host).toHaveScreenshot('Details-triple-01.png');

        await editor.host
            .locator('.t-details-wrapper')
            .nth(1)
            .locator(':scope > .t-details-delete')
            .click();

        await expect.soft(editor.host).toHaveScreenshot('Details-triple-02.png');
        await expect(editor.host.locator('.t-details-wrapper')).toHaveCount(1);

        await editor.host
            .locator('.t-details-wrapper')
            .first()
            .locator(':scope > .t-details-delete')
            .click();

        await expect.soft(editor.host).toHaveScreenshot('Details-triple-03.png');
        await expect(editor.host.locator('.t-details-wrapper')).toHaveCount(0);
    });
});
