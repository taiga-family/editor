import {TuiDemoPath} from '@demo/shared/routes';
import {expect, type Locator, type Page, test} from '@playwright/test';

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

        const detailsButton = editor.host
            .locator('tui-toolbar button')
            .locator('text="Details"');

        const contenteditable = await editor.contenteditable();

        await editor.placeCaretAtEnd();
        await page.keyboard.press('Enter');

        const topLevelDetails = contenteditable.locator(':scope > .t-details-wrapper');
        const wrapperCount = await topLevelDetails.count();

        await detailsButton.click();
        await expect(topLevelDetails).toHaveCount(wrapperCount + 1);
        await page.mouse.click(0, 0);

        await expect.soft(editor.host).toHaveScreenshot('Details-13.png');
    });

    test('keeps spacing when gap cursor is between details', async ({page}) => {
        await tuiGoto(page, TuiDemoPath.Details);

        const example = page.locator('#details');
        const editor = new TuiEditorPO(example.locator('tui-editor'));
        const contenteditable = await editor.contenteditable();
        const title = contenteditable.getByText('Content 1', {exact: true});
        const box = await title.boundingBox();

        expect(box).not.toBeNull();

        await page.mouse.click(box!.x + box!.width + 8, box!.y + box!.height / 2);
        await page.keyboard.press('ArrowRight');

        await expect.soft(editor.host).toHaveScreenshot('Details-gapcursor-01.png');

        await editor.host
            .locator('.t-details-wrapper')
            .nth(1)
            .locator('.t-details-arrow')
            .click();

        await expect.soft(editor.host).toHaveScreenshot('Details-gapcursor-02.png');
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

    test('ordered list counters inside nested details-content', async ({page}) => {
        const html = encodeURIComponent(`
            <details open>
                <summary><p>Level 1</p></summary>
                <div data-type="details-content">
                    <ol>
                        <li><p>Item 1</p>
                            <details open>
                                <summary><p>Level 2</p></summary>
                                <div data-type="details-content">
                                    <ol>
                                        <li><p>Item 1.1</p>
                                            <details open>
                                                <summary><p>Level 3</p></summary>
                                                <div data-type="details-content">
                                                    <ol>
                                                        <li><p>Item 1.1.1</p></li>
                                                        <li><p>Item 1.1.2</p></li>
                                                    </ol>
                                                </div>
                                            </details>
                                        </li>
                                        <li><p>Item 1.2</p></li>
                                    </ol>
                                </div>
                            </details>
                        </li>
                        <li><p>Item 2</p></li>
                    </ol>
                </div>
            </details>
        `);

        await tuiGoto(page, `/${TuiDemoPath.StarterKit}?ngModel=${html}`);

        const editor = new TuiEditorPO(page.locator('tui-editor'));

        await expect.soft(editor.host).toHaveScreenshot('Details-ol-nested-counters.png');
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

    async function openAccordion(page: Page): Promise<{
        editor: TuiEditorPO;
        wrappers: Locator;
        summary: Locator;
        content: Locator;
    }> {
        const detailsButton = page
            .locator('tui-toolbar button')
            .locator('text="Details"');

        await tuiGoto(page, `/${TuiDemoPath.StarterKit}`);

        const editor = new TuiEditorPO(page.locator('tui-editor'));
        const contenteditable = await editor.contenteditable();
        const wrappers = editor.host.locator('.t-details-wrapper');
        const summary = editor.host.locator('summary').first();
        const content = editor.host.locator('[data-type="details-content"]').first();

        await contenteditable.click();
        await contenteditable.selectText();
        await contenteditable.clear();
        await detailsButton.click();
        await page.keyboard.type('Title');

        return {editor, wrappers, summary, content};
    }

    test('two lines of text in the summary keep a single accordion (bug #1270)', async ({
        page,
    }) => {
        const {editor, wrappers, summary} = await openAccordion(page);

        await editor.placeCaretAtEnd(summary);
        await page.keyboard.press('Enter');
        await page.keyboard.type('Second line');

        await expect(wrappers).toHaveCount(1);
        await page.mouse.move(0, 0);
        await editor.host.blur();
        await expect.soft(editor.host).toHaveScreenshot('Details-1270-01.png');
    });

    test('horizontal rule inside the summary stays inside it (bug #1270)', async ({
        page,
    }) => {
        const {editor, wrappers, summary} = await openAccordion(page);
        const hrButton = page.getByRole('button', {
            name: 'Insert horizontal rule',
            exact: true,
        });

        await editor.placeCaretAtEnd(summary);
        await page.keyboard.press('Enter');
        await hrButton.click();

        await expect(wrappers).toHaveCount(1);
        await expect(summary.locator('hr')).toHaveCount(1);
        await page.mouse.move(0, 0);
        await editor.host.blur();
        await expect.soft(editor.host).toHaveScreenshot('Details-1270-02.png');
    });

    test('nested accordion inside the summary is ignored (bug #1270)', async ({page}) => {
        const {editor, wrappers, summary} = await openAccordion(page);
        const detailsButton = page
            .locator('tui-toolbar button')
            .locator('text="Details"');

        await editor.placeCaretAtEnd(summary);
        await detailsButton.click();

        await expect(wrappers).toHaveCount(1);
        await page.mouse.move(0, 0);
        await editor.host.blur();
        await expect.soft(editor.host).toHaveScreenshot('Details-1270-03.png');
    });

    test('table inside the summary is rendered on its own line (bug #1270)', async ({
        page,
    }) => {
        const html = encodeURIComponent(`
            <details open>
                <summary>
                    <table>
                        <tbody>
                            <tr><th><p>Title</p></th><th><p></p></th></tr>
                            <tr><td><p></p></td><td><p></p></td></tr>
                        </tbody>
                    </table>
                </summary>
                <div data-type="details-content"><p></p></div>
            </details>
        `);

        await tuiGoto(page, `/${TuiDemoPath.StarterKit}?ngModel=${html}`);

        const editor = new TuiEditorPO(page.locator('tui-editor'));
        const wrappers = editor.host.locator('.t-details-wrapper');
        const summary = editor.host.locator('summary').first();

        await expect(wrappers).toHaveCount(1);
        await expect(summary.locator('table')).toHaveCount(1);
        await page.mouse.move(0, 0);
        await editor.host.blur();
        await expect.soft(editor.host).toHaveScreenshot('Details-1270-04.png');
    });

    test('horizontal rule inside the empty content stays inside it (bug #1270)', async ({
        page,
    }) => {
        const {editor, wrappers, content} = await openAccordion(page);
        const hrButton = page.getByRole('button', {
            name: 'Insert horizontal rule',
            exact: true,
        });

        await editor.placeCaretAtEnd(content);
        await hrButton.click();

        await expect(wrappers).toHaveCount(1);
        await expect(content.locator('hr')).toHaveCount(1);
        await page.mouse.move(0, 0);
        await editor.host.blur();
        await expect(editor.host).toHaveScreenshot('Details-1270-05.png');
    });

    test('long title in the accordion summary wraps onto multiple lines (bug #1274)', async ({
        page,
    }) => {
        const longTitle = 'The quick brown fox jumps over the lazy dog. '.repeat(5);
        const html = encodeURIComponent(`
            <details open>
                <summary><p>${longTitle}</p></summary>
                <div data-type="details-content"><p></p></div>
            </details>
        `);

        await tuiGoto(page, `/${TuiDemoPath.StarterKit}?ngModel=${html}`);

        const editor = new TuiEditorPO(page.locator('tui-editor'));

        await page.mouse.move(0, 0);
        await editor.host.blur();
        await expect.soft(editor.host).toHaveScreenshot('Details-1274-word-wrap.png');
    });

    test('pasting into the accordion summary keeps a single accordion (bug #1751)', async ({
        page,
    }) => {
        await tuiGoto(page, `/${TuiDemoPath.StarterKit}`);

        const editor = new TuiEditorPO(page.locator('tui-editor'));
        const contenteditable = await editor.contenteditable();
        const wrappers = editor.host.locator('.t-details-wrapper');
        const summary = editor.host.locator('summary').first();
        const detailsButton = page
            .locator('tui-toolbar button')
            .locator('text="Details"');

        await contenteditable.click();
        await contenteditable.selectText();
        await contenteditable.clear();
        await detailsButton.click();

        await expect(wrappers).toHaveCount(1);

        await contenteditable.focus();
        await contenteditable.evaluate((el) => {
            const dt = new DataTransfer();

            dt.setData('text/plain', 'Pasted title');
            dt.setData('text/html', '<p>Pasted title</p>');

            el.dispatchEvent(
                new ClipboardEvent('paste', {
                    clipboardData: dt,
                    bubbles: true,
                    cancelable: true,
                }),
            );
        });

        await expect(wrappers).toHaveCount(1);
        await expect(summary).toContainText('Pasted title');
    });
});
