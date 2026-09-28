import {TuiDemoPath} from '@demo/shared/routes';
import {expect, test} from '@playwright/test';

import {TuiEditorPO, tuiGoto} from '../utils';

const CONTAINER = '#upload-files';

test.describe('Attach', () => {
    test.beforeEach(async ({page}) => {
        await tuiGoto(page, TuiDemoPath.UploadFiles);
    });

    test('attaches an uploaded file as a link in the editor', async ({page}) => {
        const editor = new TuiEditorPO(page.locator(`${CONTAINER} tui-editor`));

        await page.locator(`${CONTAINER} input[type="file"]`).setInputFiles({
            name: 'test-file.txt',
            mimeType: 'text/plain',
            buffer: Buffer.from('Hello file'),
        });

        const link = editor.host.locator('a.file-link', {hasText: 'test-file.txt'});

        await expect(link).toBeVisible();
        await expect(link).toHaveAttribute('href', /^blob:/);
        await expect.soft(editor.host).toHaveScreenshot('Attach-01.png');
    });
});
