import {TuiDemoPath} from '@demo/shared/routes';
import {expect, test} from '@playwright/test';

import {TuiEditorPO, tuiGoto} from '../utils';

test.describe('form control', () => {
    test.beforeEach(async ({page}) => {
        await tuiGoto(page, `/${TuiDemoPath.Form}`);
    });

    test('editor shows invalid state and tui-error after blur (bug #2236)', async ({
        page,
    }) => {
        const editor = new TuiEditorPO(page.locator('tui-editor'));
        const contenteditable = await editor.contenteditable();

        await contenteditable.focus();
        await contenteditable.selectText();
        await contenteditable.clear();

        await expect(editor.host).not.toHaveAttribute('data-mode', 'invalid');
        await expect(page.locator('tui-error')).toBeHidden();

        await page.getByRole('button', {name: 'Outside'}).click();

        await expect(editor.host).toHaveAttribute('data-mode', 'invalid');
        await expect(page.locator('tui-error')).toContainText('Field is required');
    });

    test("setValue('') clears the editor content repeatedly (bug #1522)", async ({
        page,
    }) => {
        const editor = new TuiEditorPO(page.locator('tui-editor'));
        const contenteditable = await editor.contenteditable();

        await expect(contenteditable).toContainText('Text');

        await page.getByRole('button', {name: 'Reset'}).click();
        await expect(contenteditable).toHaveText('');

        await contenteditable.focus();
        await contenteditable.pressSequentially('12345');
        await expect(contenteditable).toContainText('12345');

        await page.getByRole('button', {name: 'Reset'}).click();
        await expect(contenteditable).toHaveText('');
    });

    test('clicking a disabled editor does not touch the control (bug #1977)', async ({
        page,
    }) => {
        const editor = new TuiEditorPO(page.locator('tui-editor'));
        const contenteditable = await editor.contenteditable();
        const status = page.locator('p.status');

        await expect(status).toContainText('touched: false');

        await page.getByRole('button', {name: 'Toggle disabled'}).click();
        await expect(status).toContainText('disabled: true');

        await expect(contenteditable).toHaveAttribute('contenteditable', 'false');
        await expect(editor.host).toHaveCSS('pointer-events', 'none');

        await page.mouse.click(0, 0);
        await expect(status).toContainText('touched: false');

        await editor.host.scrollIntoViewIfNeeded();
        const box = (await editor.host.boundingBox())!;

        await page.mouse.click(box.x + box.width / 2, box.y + box.height / 2);
        await expect(status).toContainText('touched: false');
    });

    test('attaching a control does not mark it dirty until user types (bug #1838)', async ({
        page,
    }) => {
        const editor = new TuiEditorPO(page.locator('tui-editor'));
        const contenteditable = await editor.contenteditable();
        const status = page.locator('p.status');

        await expect(status).toContainText('dirty: false');

        await contenteditable.focus();
        await contenteditable.pressSequentially('X');
        await expect(status).toContainText('dirty: true');
    });
});
