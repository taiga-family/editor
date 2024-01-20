import {expect, test} from '@playwright/test';

import {HTML_BASE64_IMG} from '../stubs/html';
import {tuiGoto} from '../utils';

test.describe('Img', () => {
    test('base64', async ({page}) => {
        await tuiGoto(page, `/starter-kit?ngModel=${HTML_BASE64_IMG}`);
        await page.locator('[contenteditable]').nth(0).focus();

        await expect(page.locator('#demo-content tui-editor')).toHaveScreenshot(
            'Img-01.png',
        );
    });

    test('preview display of images', async ({page}) => {
        await tuiGoto(page, 'images/preview');

        await expect(page.locator('tui-editor')).toHaveScreenshot('Img-02.png');
    });
});
