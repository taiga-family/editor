import {expect, test} from '@playwright/test';

import {HTML_EDITOR_BASIC_EXAMPLE} from '../stubs/html';
import {tuiGoto} from '../utils';

test.describe(`Font`, () => {
    test(`previous text style should not be inherited`, async ({page}) => {
        await tuiGoto(
            page,
            `/starter-kit?ngModel=${HTML_EDITOR_BASIC_EXAMPLE}&style.maxHeight.px=600`,
        );

        await page.locator(`[contenteditable]`).nth(0).focus();
        await page.keyboard.press(`Meta+A`);
        await page.keyboard.press(`Backspace`);
        await page.locator(`[contenteditable]`).nth(0).focus();
        await page.keyboard.type(`Hello world`);

        await page.locator(`[automation-id="toolbar__font-size-button"]`).focus();
        await page.keyboard.press(`Enter`);

        await page.locator(`[automation-id="tui_font__title"]`).focus();
        await page.keyboard.press(`Enter`);

        await page.locator(`[contenteditable]`).nth(0).focus();
        await expect(page.locator(`tui-editor`)).toHaveScreenshot(`Font-01.png`);

        await page.locator(`[contenteditable]`).nth(0).focus();
        await page.keyboard.press(`Meta+A`);
        await page.locator(`[automation-id="toolbar__font-size-button"]`).focus();
        await page.keyboard.press(`Enter`);

        await page.locator(`[automation-id="tui_font__subtitle"]`).focus();
        await page.keyboard.press(`Enter`);

        await page.locator(`[contenteditable]`).nth(0).focus();
        await expect(page.locator(`tui-editor`)).toHaveScreenshot(`Font-02.png`);

        await page.locator(`[contenteditable]`).nth(0).focus();
        await page.keyboard.press(`Meta+A`);
        await page.locator(`[automation-id="toolbar__font-size-button"]`).focus();
        await page.keyboard.press(`Enter`);

        await page.locator(`[automation-id="tui_font__large"]`).focus();
        await page.keyboard.press(`Enter`);

        await page.locator(`[contenteditable]`).nth(0).focus();
        await expect(page.locator(`tui-editor`)).toHaveScreenshot(`Font-03.png`);

        await page.locator(`[contenteditable]`).nth(0).focus();
        await page.keyboard.press(`Meta+A`);
        await page.locator(`[automation-id="toolbar__font-size-button"]`).focus();
        await page.keyboard.press(`Enter`);

        await page.locator(`[automation-id="tui_font__normal"]`).focus();
        await page.keyboard.press(`Enter`);

        await page.locator(`[contenteditable]`).nth(0).focus();
        await expect(page.locator(`tui-editor`)).toHaveScreenshot(`Font-04.png`);

        await page.locator(`[contenteditable]`).nth(0).focus();
        await page.keyboard.press(`Meta+A`);
        await page.locator(`[automation-id="toolbar__font-size-button"]`).focus();
        await page.keyboard.press(`Enter`);

        await page.locator(`[automation-id="tui_font__small"]`).focus();
        await page.keyboard.press(`Enter`);

        await page.locator(`[contenteditable]`).nth(0).focus();
        await expect(page.locator(`tui-editor`)).toHaveScreenshot(`Font-05.png`);
    });
});
