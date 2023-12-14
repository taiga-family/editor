import {expect, test} from '@playwright/test';

import {HTML_EDITOR_BASIC_EXAMPLE} from '../stubs/html';
import {tuiGoto} from '../utils';

test.describe(`Font`, () => {
    test(`previous text style should not be inherited`, async ({page}) => {
        await tuiGoto(
            page,
            `/starter-kit?ngModel=${HTML_EDITOR_BASIC_EXAMPLE}&style.maxHeight.px=600`,
        );

        await page.keyboard.press(`Meta+A`);
        await page.keyboard.press(`Backspace`);
        await page.locator(`[contenteditable]`).focus();
        await page.keyboard.type(`Hello world`);

        await page.locator(`button[automation-id="toolbar__font-size-button"]`).click();
        await page.locator(`[automation-id="tui_font__title"]`).click();
        await expect(page.locator(`tui-editor`)).toHaveScreenshot(`Font-01.png`);

        await page.keyboard.press(`Meta+A`);
        await page.locator(`button[automation-id="toolbar__font-size-button"]`).click();
        await page.locator(`[automation-id="tui_font__subtitle"]`).click();
        await expect(page.locator(`tui-editor`)).toHaveScreenshot(`Font-02.png`);

        await page.keyboard.press(`Meta+A`);
        await page.locator(`button[automation-id="toolbar__font-size-button"]`).click();
        await page.locator(`[automation-id="tui_font__large"]`).click();
        await expect(page.locator(`tui-editor`)).toHaveScreenshot(`Font-03.png`);

        await page.keyboard.press(`Meta+A`);
        await page.locator(`button[automation-id="toolbar__font-size-button"]`).click();
        await page.locator(`[automation-id="tui_font__normal"]`).click();
        await expect(page.locator(`tui-editor`)).toHaveScreenshot(`Font-04.png`);

        await page.keyboard.press(`Meta+A`);
        await page.locator(`button[automation-id="toolbar__font-size-button"]`).click();
        await page.locator(`[automation-id="tui_font__small"]`).click();
        await expect(page.locator(`tui-editor`)).toHaveScreenshot(`Font-05.png`);
    });
});
