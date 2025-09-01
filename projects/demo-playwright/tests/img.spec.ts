import {expect, test} from '@playwright/test';

import {TuiDemoPath} from '../../demo/src/app/shared/routes';
import {ImgPO} from '../utils/page-objects/img.page';
import {HTML_BASE64_IMG} from '../stubs/html';

test.describe('Img', () => {
    test('base64', async ({page}) => {
        const imgPage = new ImgPO(page);

        await imgPage.gotoStarterKitWithModel(HTML_BASE64_IMG);

        const editor = imgPage.getImgEditor();

        await editor.focusEditor();

        await expect
            .soft(imgPage.demoContent.locator('tui-editor'))
            .toHaveScreenshot('Img-01.png');
    });

    test('preview display of images', async ({page}) => {
        const imgPage = new ImgPO(page);

        await imgPage.gotoDemoPath(TuiDemoPath.ImagesPreview);

        const editor = imgPage.getEditor();

        await expect.soft(editor.editor).toHaveScreenshot('Img-02.png');
    });

    test('resizable image', async ({page}) => {
        const imgPage = new ImgPO(page);

        await imgPage.gotoDemoPath(TuiDemoPath.ImagesResizable);

        await imgPage.hoverResizableImage();
        await imgPage.resizeImage(100);

        await expect.soft(imgPage.resizableImage).toHaveScreenshot('Img-03.png');

        await imgPage.resizeImage(-150);
        await imgPage.finishResize();

        await expect.soft(imgPage.resizableImage).toHaveScreenshot('Img-04.png');
    });

    test('image as link', async ({page}) => {
        const imgPage = new ImgPO(page);

        await imgPage.gotoDemoPath(TuiDemoPath.ImagesResizable);

        const editor = imgPage.getEditor();

        await imgPage.clickImageEditor();
        await expect.soft(editor.editor).toHaveScreenshot('Img-05.png');

        await imgPage.addLinkToImage('abc.com');
        await expect.soft(editor.editor).toHaveScreenshot('Img-06.png');

        await expect.soft(editor.editor).toHaveScreenshot('Img-07.png');

        await imgPage.clickOutside();
        await imgPage.clickImageEditor();
        await expect.soft(editor.editor).toHaveScreenshot('Img-08.png');
    });
});
