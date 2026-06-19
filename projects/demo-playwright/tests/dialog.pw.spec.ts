/* eslint-disable playwright/no-conditional-expect,playwright/no-conditional-in-test */ // TODO: delete after merge
import {TuiDemoPath} from '@demo/shared/routes';
import {expect, test} from '@playwright/test';

import {TuiEditorPO, tuiGoto} from '../utils';

test.describe('Dialog', () => {
    test('shows editor toolbar icons inside dialog', async ({page}) => {
        await tuiGoto(page, `/${TuiDemoPath.Dialog}`);

        await page.getByRole('button', {name: 'Show dialog'}).click();

        const dialog = page.locator('tui-dialog');

        // TODO: delete if after merge
        if ((await dialog.all()).length > 0) {
            const editor = new TuiEditorPO(page.locator('tui-dialog tui-editor'));

            await editor.contenteditable();
            await expect.soft(dialog).toHaveScreenshot('dialog-with-editor.png');
        }
    });
});
