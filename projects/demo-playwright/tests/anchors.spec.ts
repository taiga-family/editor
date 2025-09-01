import {TuiDemoPath} from '@demo/shared/routes';
import {expect, test} from '@playwright/test';

import {AnchorsPO} from '../utils/page-objects/anchors.page';
import {hideScrollbars} from '../utils';

test.describe('Anchors', () => {
    test.use({viewport: {width: 1280, height: 500}});

    test.beforeEach(async ({page}) => {
        const anchorsPage = new AnchorsPO(page);

        await anchorsPage.gotoDemoPath(TuiDemoPath.Anchors);
    });

    test('all content', async ({page}) => {
        const anchorsPage = new AnchorsPO(page);
        const editor = anchorsPage.getAnchorsEditor();

        await expect.soft(editor.editor).toHaveScreenshot('Anchors-01.png');
    });

    test('viewport position', async ({page}) => {
        const anchorsPage = new AnchorsPO(page);

        await hideScrollbars(page);

        for (const anchor of [
            'moser',
            'thirlwell',
            'briggs',
            'introduction',
            'knowles',
            'war',
        ]) {
            await anchorsPage.clickAnchorLink(anchor);

            await expect.soft(page).toHaveScreenshot(`Anchors-02-${anchor}.png`);
        }
    });

    test('make anchor', async ({page}) => {
        const anchorsPage = new AnchorsPO(page);

        await hideScrollbars(page);

        await anchorsPage.clearContentAndStartFresh();

        await expect.soft(anchorsPage.fullExample).toHaveScreenshot('Anchors-03.png');

        await anchorsPage.addTextAndCreateAnchor('Hello', 'Hello');

        await expect.soft(anchorsPage.fullExample).toHaveScreenshot('Anchors-04.png');
        await expect.soft(anchorsPage.fullExample).toHaveScreenshot('Anchors-05.png');

        await anchorsPage.addLinkToAnchor('Link to anchor', 'Hello');

        await expect.soft(anchorsPage.fullExample).toHaveScreenshot('Anchors-06.png');
        await expect.soft(anchorsPage.fullExample).toHaveScreenshot('Anchors-07.png');

        await anchorsPage.finalizeAndCapture();

        await expect.soft(anchorsPage.fullExample).toHaveScreenshot('Anchors-08.png');
    });
});
