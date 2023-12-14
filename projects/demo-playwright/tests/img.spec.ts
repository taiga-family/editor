import {expect, test} from '@playwright/test';

import {HTML_BASE64_IMG} from '../stubs/html';
import {tuiGoto} from '../utils';

test.describe(`Img`, () => {
    test(`base64`, async ({page}) => {
        await tuiGoto(page, `/starter-kit?ngModel=${HTML_BASE64_IMG}`);
        await expect(page.locator(`#demo-content tui-editor`)).toHaveScreenshot(
            `Img-01.png`,
        );
    });

    test(`preview display of images`, async ({page}) => {
        await tuiGoto(page, `images/preview`);
        await expect(page.locator(`tui-editor`)).toHaveScreenshot(`Img-02.png`);

        // TODO: should be without double click
        await page.locator(`tui-editor-socket`).nth(1).locator(`img`).nth(0).click();
        await page.locator(`tui-editor-socket`).nth(1).locator(`img`).nth(0).click();
        await expect(page).toHaveScreenshot(`Img-03.png`);

        await page.locator(`button[data-appearance="preview-action"]._focused`).click();
        await expect(page).toHaveScreenshot(`Img-04.png`);
    });
});
