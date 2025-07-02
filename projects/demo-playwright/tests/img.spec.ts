import {expect, test} from '@playwright/test';

import {HTML_BASE64_IMG} from '../stubs/html';
import {tuiGoto} from '../utils';

test.describe('Img', () => {
    test('base64', async ({page}) => {
        await tuiGoto(page, `/starter-kit?ngModel=${HTML_BASE64_IMG}`);
        await page.locator('[contenteditable]').nth(0).focus();

        await expect
            .soft(page.locator('#demo-content tui-editor'))
            .toHaveScreenshot('Img-01.png');
    });

    test('preview display of images', async ({page}) => {
        await tuiGoto(page, 'images/preview');

        await expect.soft(page.locator('tui-editor')).toHaveScreenshot('Img-02.png');
    });

    test('resizable image', async ({page}) => {
        await tuiGoto(page, 'images/resizable');

        const locator = page.locator('.t-handle-right-side');
        const box = await locator?.boundingBox();

        await page.locator('tui-editor-resizable').hover();
        await locator.hover();
        await page.mouse.move(
            (box?.x ?? 0) + (box?.width ?? 0) / 2,
            (box?.y ?? 0) + (box?.height ?? 0) / 2,
        );
        await page.mouse.down();
        await page.mouse.move(
            (box?.x ?? 0) + (box?.width ?? 0) / 2 + 100,
            (box?.y ?? 0) + (box?.height ?? 0) / 2,
        );

        await expect
            .soft(page.locator('[id="resizable-image"] .t-demo'))
            .toHaveScreenshot('Img-03.png');

        await page.mouse.move(
            (box?.x ?? 0) + (box?.width ?? 0) / 2 - 150,
            (box?.y ?? 0) + (box?.height ?? 0) / 2,
        );

        await expect
            .soft(page.locator('[id="resizable-image"] .t-demo'))
            .toHaveScreenshot('Img-04.png');
    });
});
