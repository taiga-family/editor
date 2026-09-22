import {TuiDemoPath} from '@demo/shared/routes';
import {expect, test} from '@playwright/test';

import {TuiEditorPO, tuiGoto} from '../utils';

test.describe('Horizontal rule', () => {
    test.beforeEach(async ({page}) => {
        await tuiGoto(page, `/${TuiDemoPath.StarterKit}`);

        const editor = new TuiEditorPO(page.locator('tui-editor'));
        const contenteditable = await editor.contenteditable();

        await contenteditable.focus();
        await contenteditable.selectText();
        await contenteditable.clear();
        await page.keyboard.type('Hello world');
    });

    test('inserts a horizontal rule at the caret position', async ({page}) => {
        const editor = new TuiEditorPO(page.locator('tui-editor'));

        await editor.placeCaretAtEnd();
        await page
            .getByRole('button', {name: 'Insert horizontal rule', exact: true})
            .click();
        await page.mouse.move(0, 0);
        await editor.host.blur();

        await expect(editor.host.locator('hr')).toHaveCount(1);
        await expect.soft(editor.host).toHaveScreenshot('Hr-01.png');
    });

    test('inserting it again adds another horizontal rule', async ({page}) => {
        const editor = new TuiEditorPO(page.locator('tui-editor'));

        const hrButton = page.getByRole('button', {
            name: 'Insert horizontal rule',
            exact: true,
        });

        await editor.placeCaretAtEnd();
        await hrButton.click();

        await editor.placeCaretAtEnd();
        await hrButton.click();

        await expect(editor.host.locator('hr')).toHaveCount(2);
    });
});
