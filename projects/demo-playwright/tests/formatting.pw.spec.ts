import {TuiDemoPath} from '@demo/shared/routes';
import {expect, type Page, test} from '@playwright/test';

import {TuiEditorPO, tuiGoto} from '../utils';

async function openFontStyleDropdown(page: Page): Promise<void> {
    await page.locator('[automation-id="toolbar__font-style-button"]').click();
}

test.describe('Formatting', () => {
    test.beforeEach(async ({page}) => {
        await tuiGoto(page, `/${TuiDemoPath.StarterKit}`);

        const editor = new TuiEditorPO(page.locator('tui-editor'));
        const contenteditable = await editor.contenteditable();

        await contenteditable.focus();
        await contenteditable.selectText();
        await contenteditable.clear();
        await page.keyboard.type('Hello world');
    });

    test('toggles bold on selected text', async ({page}) => {
        const editor = new TuiEditorPO(page.locator('tui-editor'));
        const contenteditable = await editor.contenteditable();

        await contenteditable.selectText();
        await openFontStyleDropdown(page);
        await page.getByRole('button', {name: 'Bold', exact: true}).click();

        await expect(editor.host.locator('strong')).toHaveText('Hello world');
        await expect.soft(editor.host).toHaveScreenshot('Formatting-01.png');

        await contenteditable.selectText();
        await openFontStyleDropdown(page);
        await page.getByRole('button', {name: 'Bold', exact: true}).click();

        await expect(editor.host.locator('strong')).toHaveCount(0);
    });

    test('toggles italic on selected text', async ({page}) => {
        const editor = new TuiEditorPO(page.locator('tui-editor'));
        const contenteditable = await editor.contenteditable();

        await contenteditable.selectText();
        await openFontStyleDropdown(page);
        await page.getByRole('button', {name: 'Italic', exact: true}).click();

        await expect(editor.host.locator('em')).toHaveText('Hello world');
        await expect.soft(editor.host).toHaveScreenshot('Formatting-02.png');

        await contenteditable.selectText();
        await openFontStyleDropdown(page);
        await page.getByRole('button', {name: 'Italic', exact: true}).click();

        await expect(editor.host.locator('em')).toHaveCount(0);
    });

    test('toggles underline on selected text', async ({page}) => {
        const editor = new TuiEditorPO(page.locator('tui-editor'));
        const contenteditable = await editor.contenteditable();

        await contenteditable.selectText();
        await openFontStyleDropdown(page);
        await page.getByRole('button', {name: 'Underline', exact: true}).click();

        await expect(editor.host.locator('u')).toHaveText('Hello world');
        await expect.soft(editor.host).toHaveScreenshot('Formatting-03.png');

        await contenteditable.selectText();
        await openFontStyleDropdown(page);
        await page.getByRole('button', {name: 'Underline', exact: true}).click();

        await expect(editor.host.locator('u')).toHaveCount(0);
    });

    test('toggles strikethrough on selected text', async ({page}) => {
        const editor = new TuiEditorPO(page.locator('tui-editor'));
        const contenteditable = await editor.contenteditable();

        await contenteditable.selectText();
        await openFontStyleDropdown(page);
        await page.getByRole('button', {name: 'Strike through', exact: true}).click();

        await expect(editor.host.locator('s')).toHaveText('Hello world');
        await expect.soft(editor.host).toHaveScreenshot('Formatting-04.png');

        await contenteditable.selectText();
        await openFontStyleDropdown(page);
        await page.getByRole('button', {name: 'Strike through', exact: true}).click();

        await expect(editor.host.locator('s')).toHaveCount(0);
    });

    test('combines bold and italic on the same selection', async ({page}) => {
        const editor = new TuiEditorPO(page.locator('tui-editor'));
        const contenteditable = await editor.contenteditable();

        await contenteditable.selectText();
        await openFontStyleDropdown(page);
        await page.getByRole('button', {name: 'Bold', exact: true}).click();

        await contenteditable.selectText();
        await openFontStyleDropdown(page);
        await page.getByRole('button', {name: 'Italic', exact: true}).click();

        await expect(editor.host.locator('strong em, em strong')).toHaveText(
            'Hello world',
        );
        await expect.soft(editor.host).toHaveScreenshot('Formatting-05.png');
    });
});
