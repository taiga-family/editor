import {expect, type Page, test} from '@playwright/test';

import {TuiDemoPath} from '../../demo/src/app/shared/routes';
import {HTML_BASE64_IMG} from '../stubs/html';
import {TuiEditorPO, tuiGoto} from '../utils';

async function mockImgbbUpload(page: Page, src: string): Promise<void> {
    await page.route('https://api.imgbb.com/**', async (route) =>
        route.fulfill({json: {data: {url: src}}}),
    );
}

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
        await expect(editor.link.input).toBeVisible();
        await expect.soft(editor.host).toHaveScreenshot('Img-06.png');
        await editor.link.submit('abc.com');
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

    test('undo removes an image right after it is uploaded (bug #771)', async ({
        page,
    }) => {
        const svgBase64 =
            'PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMCIgaGVpZ2h0PSIxMCI+PHJlY3Qgd2lkdGg9IjEwIiBoZWlnaHQ9IjEwIiBmaWxsPSIjMDBmZjAwIi8+PC9zdmc+';

        await mockImgbbUpload(page, `data:image/svg+xml;base64,${svgBase64}`);

        await tuiGoto(page, TuiDemoPath.UploadImages);

        const editor = new TuiEditorPO(page.locator('tui-editor'));
        const contenteditable = await editor.contenteditable();

        await contenteditable.focus();
        await contenteditable.selectText();
        await contenteditable.clear();

        const undoButton = page.locator('[automation-id="toolbar__undo-button"]');
        const uploaded = editor.host.locator(
            `img[src="data:image/svg+xml;base64,${svgBase64}"]`,
        );

        // upload an image via the toolbar file input (goes through TUI_IMAGE_LOADER)
        await page.locator('input[type="file"][accept="image/*"]').setInputFiles({
            name: 'image.svg',
            mimeType: 'image/svg+xml',
            buffer: Buffer.from(svgBase64, 'base64'),
        });

        await expect(uploaded).toHaveCount(1);
        await expect(undoButton).toBeEnabled();

        await undoButton.click();
        await expect(uploaded).toHaveCount(0);
    });

    test('aligned image at the end does not collapse the editor layout (bug #1318)', async ({
        page,
    }) => {
        const svgBase64 =
            'PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMTAwIj48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjEwMCIgZmlsbD0iI2ZmMDAwMCIvPjwvc3ZnPg==';

        const editor = new TuiEditorPO(page.locator('tui-editor'));

        async function checkFitsAtEnd(align: 'left' | 'right'): Promise<void> {
            const html = encodeURIComponent(`
                <p>Text before the aligned image</p>
                <img src="data:image/svg+xml;base64,${svgBase64}" width="200" height="100" style="float: ${align}" />
                <p></p>
            `);

            await tuiGoto(page, `/${TuiDemoPath.StarterKit}?ngModel=${html}`);

            const image = editor.host.locator('img').first();

            // wait until the editor has rendered and the float image is laid out
            await page.waitForFunction(() => {
                const el = document.querySelector('tui-editor');
                const img = el?.querySelector('img');

                return !el || !img
                    ? false
                    : el.getBoundingClientRect().bottom >=
                          img.getBoundingClientRect().bottom;
            });

            const editorBottom = await editor.host.evaluate(
                (el) => el.getBoundingClientRect().bottom,
            );

            const imageBottom = await image.evaluate(
                (el) => el.getBoundingClientRect().bottom,
            );

            expect(imageBottom).toBeLessThanOrEqual(editorBottom + 1);
        }

        await checkFitsAtEnd('left');
        await checkFitsAtEnd('right');

        await page.mouse.move(0, 0);
        await editor.host.blur();
        await expect.soft(editor.host).toHaveScreenshot('Img-align-end-1318.png');
    });

    test('drag-and-drop uploads an image through TUI_IMAGE_LOADER (bug #757)', async ({
        page,
    }) => {
        const svgBase64 =
            'PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMTAwIj48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjEwMCIgZmlsbD0iI2ZmMDAwMCIvPjwvc3ZnPg==';

        await mockImgbbUpload(page, `data:image/svg+xml;base64,${svgBase64}`);

        await tuiGoto(page, TuiDemoPath.UploadImages);

        const editor = new TuiEditorPO(page.locator('tui-editor'));
        const contenteditable = await editor.contenteditable();

        await contenteditable.focus();
        await contenteditable.selectText();
        await contenteditable.clear();

        const uploaded = editor.host.locator(
            `img[src="data:image/svg+xml;base64,${svgBase64}"]`,
        );

        // emulate dragging an image file from the OS into the editor
        const dataTransfer = await page.evaluateHandle((svg) => {
            const bytes = Uint8Array.from(atob(svg), (c) => c.charCodeAt(0));
            const transfer = new DataTransfer();

            transfer.items.add(new File([bytes], 'image.svg', {type: 'image/svg+xml'}));

            return transfer;
        }, svgBase64);

        await contenteditable.dispatchEvent('drop', {dataTransfer});

        await expect(uploaded).toHaveCount(1);
    });

    test('image size respects min/max width options (bug #1746)', async ({page}) => {
        const editor = new TuiEditorPO(page.locator('tui-editor'));
        const handle = page.locator('.t-handle-right-side');

        // resizable demo provides TUI_IMAGE_EDITOR_OPTIONS {minWidth: 20, maxWidth: 800}
        async function resizeBy(dx: number): Promise<void> {
            const box = await handle.boundingBox();
            const cx = (box?.x ?? 0) + (box?.width ?? 0) / 2;
            const cy = (box?.y ?? 0) + (box?.height ?? 0) / 2;

            await handle.hover();
            await page.mouse.move(cx, cy);
            await page.mouse.down();
            await page.mouse.move(cx + dx, cy, {steps: 10});
            await page.mouse.up();
        }

        await tuiGoto(page, TuiDemoPath.ImagesResizable);

        const imgMax = editor.host.locator('img').first();

        await expect(imgMax).toBeVisible();
        await resizeBy(600);

        const maxWidth = Number.parseInt((await imgMax.getAttribute('width')) ?? '0', 10);

        expect(maxWidth).toBeGreaterThan(0);
        expect(maxWidth).toBeLessThanOrEqual(800);

        await tuiGoto(page, TuiDemoPath.ImagesResizable);

        const imgMin = editor.host.locator('img').first();

        await expect(imgMin).toBeVisible();
        await resizeBy(-300);

        const minWidth = Number.parseInt((await imgMin.getAttribute('width')) ?? '0', 10);

        expect(minWidth).toBeGreaterThanOrEqual(20);
    });

    test('pasting an image from the clipboard uploads it (bug #1052)', async ({page}) => {
        const svgBase64 =
            'PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMTAwIj48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjEwMCIgZmlsbD0iI2ZmMDAwMCIvPjwvc3ZnPg==';

        await mockImgbbUpload(page, `data:image/svg+xml;base64,${svgBase64}`);

        await tuiGoto(page, TuiDemoPath.UploadImages);

        const editor = new TuiEditorPO(page.locator('tui-editor'));
        const contenteditable = await editor.contenteditable();
        const uploaded = editor.host.locator(
            `img[src="data:image/svg+xml;base64,${svgBase64}"]`,
        );

        // emulate pasting an image file from the clipboard
        await contenteditable.focus();
        await contenteditable.evaluate((el, svg) => {
            const bytes = Uint8Array.from(atob(svg), (c) => c.charCodeAt(0));
            const dt = new DataTransfer();

            dt.items.add(new File([bytes], 'image.svg', {type: 'image/svg+xml'}));

            el.dispatchEvent(
                new ClipboardEvent('paste', {
                    clipboardData: dt,
                    bubbles: true,
                    cancelable: true,
                }),
            );
        }, svgBase64);

        await expect(uploaded).toHaveCount(1);
    });
});
