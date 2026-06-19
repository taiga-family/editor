import {TuiDemoPath} from '@demo/shared/routes';
import {expect, test} from '@playwright/test';

import {TuiEditorPO, tuiGoto} from '../utils';

test.describe('Dialog', () => {
    test('shows editor toolbar icons inside dialog', async ({page}) => {
        await tuiGoto(page, `/${TuiDemoPath.Dialog}`);

        await page.getByRole('button', {name: 'Show dialog'}).click();

        const dialog = page.locator('tui-dialog');
        const editor = new TuiEditorPO(page.locator('tui-dialog tui-editor'));

        await editor.contenteditable();
        await expect.soft(dialog).toHaveScreenshot('dialog-with-editor.png');
    });
});
