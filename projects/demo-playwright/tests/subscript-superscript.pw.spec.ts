import {TuiDemoPath} from '@demo/shared/routes';
import {expect, test} from '@playwright/test';

import {TuiEditorPO, tuiGoto} from '../utils';

test.describe('Subscript/Superscript', () => {
    test.beforeEach(async ({page}) => {
        await tuiGoto(page, `/${TuiDemoPath.StarterKit}`);

        const editor = new TuiEditorPO(page.locator('tui-editor'));
        const contenteditable = await editor.contenteditable();

        await contenteditable.focus();
        await contenteditable.selectText();
        await contenteditable.clear();
        await page.keyboard.type('Hello world');
    });

    test('toggles subscript on selected text', async ({page}) => {
        const editor = new TuiEditorPO(page.locator('tui-editor'));
        const contenteditable = await editor.contenteditable();

        await contenteditable.selectText();
        await page.getByRole('button', {name: 'Subscript', exact: true}).click();

        await expect(editor.host.locator('sub')).toHaveText('Hello world');

        await page.mouse.click(0, 0);
        await expect.soft(editor.host).toHaveScreenshot('SubSup-01.png');

        await contenteditable.selectText();
        await page.getByRole('button', {name: 'Subscript', exact: true}).click();

        await expect(editor.host.locator('sub')).toHaveCount(0);
    });

    test('toggles superscript on selected text', async ({page}) => {
        const editor = new TuiEditorPO(page.locator('tui-editor'));
        const contenteditable = await editor.contenteditable();

        await contenteditable.selectText();
        await page.getByRole('button', {name: 'Superscript', exact: true}).click();

        await expect(editor.host.locator('sup')).toHaveText('Hello world');

        await page.mouse.click(0, 0);
        await expect.soft(editor.host).toHaveScreenshot('SubSup-02.png');

        await contenteditable.selectText();
        await page.getByRole('button', {name: 'Superscript', exact: true}).click();

        await expect(editor.host.locator('sup')).toHaveCount(0);
    });

    test('combines subscript and superscript on the same selection', async ({page}) => {
        const editor = new TuiEditorPO(page.locator('tui-editor'));
        const contenteditable = await editor.contenteditable();

        await contenteditable.selectText();
        await page.getByRole('button', {name: 'Subscript', exact: true}).click();

        await contenteditable.selectText();
        await page.getByRole('button', {name: 'Superscript', exact: true}).click();

        await expect(editor.host.locator('sub sup, sup sub')).toHaveText('Hello world');

        await page.mouse.click(0, 0);
        await expect.soft(editor.host).toHaveScreenshot('SubSup-03.png');
    });
});
