import {expect, type Page, test} from '@playwright/test';

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
        const resizableImage = page.locator('[id="resizable-image"] .t-demo');

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

        await expect.soft(resizableImage).toHaveScreenshot('Img-03.png');

        await page.mouse.move(
            (box?.x ?? 0) + (box?.width ?? 0) / 2 - 150,
            (box?.y ?? 0) + (box?.height ?? 0) / 2,
        );

        await page.mouse.click(0, 0);

        await expect.soft(resizableImage).toHaveScreenshot('Img-04.png');
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

    test('image options toolbar appears below image on hover', async ({page}) => {
        await tuiGoto(page, TuiDemoPath.ImagesResizable);

        const editor = page.locator('tui-editor');

        await editor.locator('tui-image-editor').hover();
        await expect.soft(editor).toHaveScreenshot('Img-09.png');

        await page.getByRole('button', {name: 'Image align'}).click();
        await expect.soft(editor).toHaveScreenshot('Img-14.png');
    });

    test.describe('image alignment', () => {
        // TODO: move it to PageObject
        async function openAlignDropdown(page: Page): Promise<void> {
            await page.locator('tui-editor tui-image-editor').hover();
            await page.getByRole('button', {name: 'Image align'}).click();
        }

        test('float left', async ({page}) => {
            await tuiGoto(page, TuiDemoPath.ImagesResizable);

            await openAlignDropdown(page);
            await page.getByRole('button', {name: 'Align left'}).click();

            await expect.soft(page.locator('tui-editor')).toHaveScreenshot('Img-10.png');
        });

        test('float right', async ({page}) => {
            await tuiGoto(page, TuiDemoPath.ImagesResizable);

            await openAlignDropdown(page);
            await page.getByRole('button', {name: 'Align right'}).click();

            await expect.soft(page.locator('tui-editor')).toHaveScreenshot('Img-11.png');
        });

        test('center', async ({page}) => {
            await tuiGoto(page, TuiDemoPath.ImagesResizable);

            await openAlignDropdown(page);
            await page.getByRole('button', {name: 'Align center'}).click();

            await expect.soft(page.locator('tui-editor')).toHaveScreenshot('Img-12.png');
        });

        test('reset to default (justify)', async ({page}) => {
            await tuiGoto(page, TuiDemoPath.ImagesResizable);

            await openAlignDropdown(page);
            await page.getByRole('button', {name: 'Align left'}).click();

            await page.locator('tui-editor tui-image-editor').hover();
            await page.getByRole('button', {name: 'Image align'}).click();
            await page.getByRole('button', {name: 'Justify align'}).click();

            await expect.soft(page.locator('tui-editor')).toHaveScreenshot('Img-13.png');
        });
    });
});
