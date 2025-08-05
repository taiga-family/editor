import {expect, test} from '@playwright/test';

import {TuiDemoPath} from '../../demo/src/app/shared/routes';
import {HTML_BASE64_IMG} from '../stubs/html';
import {tuiGoto} from '../utils';

test.describe('Img', () => {
    test('base64', async ({page}) => {
        await tuiGoto(page, `/${TuiDemoPath.StarterKit}?ngModel=${HTML_BASE64_IMG}`);
        await page.locator('[contenteditable]').first().focus();

        await expect
            .soft(page.locator('#demo-content tui-editor'))
            .toHaveScreenshot('Img-01.png');
    });

    test('preview display of images', async ({page}) => {
        await tuiGoto(page, TuiDemoPath.ImagesPreview);

        await expect.soft(page.locator('tui-editor')).toHaveScreenshot('Img-02.png');
    });

    test('resizable image', async ({page}) => {
        await tuiGoto(page, TuiDemoPath.ImagesResizable);

        const locator = page.locator('.t-handle-right-side');
        const box = await locator.boundingBox();

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

    test('image as link', async ({page}) => {
        await tuiGoto(page, TuiDemoPath.ImagesResizable);

        const editor = page.locator('tui-editor');
        const img = editor.locator('tui-image-editor');

        await img.click();
        await expect.soft(editor).toHaveScreenshot('Img-05.png');

        await editor.locator('[automation-id="toolbar__link-button"]').click();
        await expect.soft(editor).toHaveScreenshot('Img-06.png');

        await page.keyboard.type('abc.com');
        await page.keyboard.press('Enter');
        await expect.soft(editor).toHaveScreenshot('Img-07.png');

        await page.locator('body').click({position: {x: 0, y: 0}});
        await img.click();
        await expect.soft(editor).toHaveScreenshot('Img-08.png');
    });
});
