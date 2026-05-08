import {expect, type Page, test} from '@playwright/test';

import {TuiDemoPath} from '../../demo/src/app/shared/routes';
import {HTML_BASE64_IMG} from '../stubs/html';
import {TuiEditorPO, tuiGoto} from '../utils';

async function openAlignDropdown(page: Page): Promise<void> {
    const editor = new TuiEditorPO(page.locator('tui-editor'));

    await editor.host.locator('tui-image-editor').hover();
    await page.getByRole('button', {name: 'Image align'}).click();
}

test.describe('Img', () => {
    test('base64', async ({page}) => {
        await tuiGoto(page, `/${TuiDemoPath.StarterKit}?ngModel=${HTML_BASE64_IMG}`);

        const editor = new TuiEditorPO(page.locator('#demo-content tui-editor'));
        const contenteditable = await editor.contenteditable();

        await contenteditable.focus();

        await expect.soft(editor.host).toHaveScreenshot('Img-01.png');
    });

    test('preview display of images', async ({page}) => {
        await tuiGoto(page, TuiDemoPath.ImagesPreview);

        const editor = new TuiEditorPO(page.locator('tui-editor'));

        await editor.contenteditable();
        await expect.soft(editor.host).toHaveScreenshot('Img-02.png');
    });

    test('resizable image', async ({page}) => {
        await tuiGoto(page, TuiDemoPath.ImagesResizable);

        const editor = new TuiEditorPO(page.locator('tui-editor'));
        const contenteditable = await editor.contenteditable();
        const locator = page.locator('.t-handle-right-side');
        const box = await locator.boundingBox();
        const resizableImage = page.locator('[id="resizable-image"] .t-demo');

        await contenteditable.locator('tui-editor-resizable').hover();
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

        const editor = new TuiEditorPO(page.locator('tui-editor'));
        const img = editor.host.locator('tui-image-editor');

        await editor.contenteditable();
        await img.click();
        await expect.soft(editor.host).toHaveScreenshot('Img-05.png');
        await editor.host.locator('[automation-id="toolbar__link-button"]').click();
        await expect.soft(editor.host).toHaveScreenshot('Img-06.png');
        await page.keyboard.type('abc.com');
        await page.keyboard.press('Enter');
        await img.waitFor({state: 'attached'});
        await page.mouse.click(0, 0);
        await expect.soft(editor.host).toHaveScreenshot('Img-07.png');
        await page.locator('body').click({position: {x: 0, y: 0}});
        await expect(img).toBeVisible();
        await img.click();
        await expect.soft(editor.host).toHaveScreenshot('Img-08.png');
    });

    test('image options toolbar appears below image on hover', async ({page}) => {
        await tuiGoto(page, TuiDemoPath.ImagesResizable);

        const editor = new TuiEditorPO(page.locator('tui-editor'));

        await editor.contenteditable();
        await editor.host.locator('tui-image-editor').hover();
        await expect.soft(editor.host).toHaveScreenshot('Img-09.png');
        await page.getByRole('button', {name: 'Image align'}).click();
        await expect.soft(editor.host).toHaveScreenshot('Img-14.png');
    });

    test.describe('image alignment', () => {
        test('float left', async ({page}) => {
            await tuiGoto(page, TuiDemoPath.ImagesResizable);

            const editor = new TuiEditorPO(page.locator('tui-editor'));

            await openAlignDropdown(page);

            const button = page.getByRole('button', {name: 'Align left'});

            await button.click();
            await expect(button).toBeHidden();
            await expect.soft(editor.host).toHaveScreenshot('Img-10.png');
        });

        test('float right', async ({page}) => {
            await tuiGoto(page, TuiDemoPath.ImagesResizable);

            const editor = new TuiEditorPO(page.locator('tui-editor'));

            await openAlignDropdown(page);

            const button = page.getByRole('button', {name: 'Align right'});

            await button.click();
            await expect(button).toBeHidden();
            await expect.soft(editor.host).toHaveScreenshot('Img-11.png');
        });

        test('center', async ({page}) => {
            await tuiGoto(page, TuiDemoPath.ImagesResizable);

            const editor = new TuiEditorPO(page.locator('tui-editor'));

            await openAlignDropdown(page);

            const button = page.getByRole('button', {name: 'Align center'});

            await button.click();
            await expect(button).toBeHidden();
            await expect.soft(editor.host).toHaveScreenshot('Img-12.png');
        });

        test('reset to default (justify)', async ({page}) => {
            await tuiGoto(page, TuiDemoPath.ImagesResizable);

            const editor = new TuiEditorPO(page.locator('tui-editor'));

            await openAlignDropdown(page);

            const buttonAlignLeft = page.getByRole('button', {name: 'Align left'});

            await buttonAlignLeft.click();
            await expect(buttonAlignLeft).toBeHidden();
            await editor.host.locator('tui-image-editor').hover();

            const buttonJustifyAlign = page.getByRole('button', {name: 'Justify align'});

            await page.getByRole('button', {name: 'Image align'}).click();
            await buttonJustifyAlign.click();
            await expect(buttonJustifyAlign).toBeHidden();
            await expect.soft(editor.host).toHaveScreenshot('Img-13.png');
        });
    });
});
