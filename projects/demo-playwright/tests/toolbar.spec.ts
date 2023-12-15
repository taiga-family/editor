import {expect, test} from '@playwright/test';

import {HTML_EDITOR_BASIC_EXAMPLE} from '../stubs/html';
import {tuiGoto} from '../utils';

test.describe(`Toolbar`, () => {
    test(`closes tool's dropdown if opened new tool's dropdown`, async ({page}) => {
        await tuiGoto(page, `/starter-kit?ngModel=${HTML_EDITOR_BASIC_EXAMPLE}`);
        await page.locator(`[contenteditable]`).nth(0).focus();

        await expect(page.locator(`#demo-content tui-editor`)).toHaveScreenshot(
            `Toolbar-01.png`,
        );

        await page.locator(`[contenteditable]`).nth(0).focus();
        await page.locator(`[automation-id="toolbar__color-button"]`).focus();
        await page.keyboard.press(`Enter`);

        await page.locator(`[automation-id="toolbar__hilite-button"]`).focus();
        await page.keyboard.press(`Enter`);

        await expect(page.locator(`#demo-content tui-editor`)).toHaveScreenshot(
            `Toolbar-02.png`,
        );
    });

    test(`closes tool's dropdown if clicked outside`, async ({page}) => {
        await tuiGoto(page, `/starter-kit?ngModel=${HTML_EDITOR_BASIC_EXAMPLE}`);

        await page.locator(`[contenteditable]`).nth(0).focus();
        await page.locator(`[automation-id="toolbar__color-button"]`).focus();
        await page.keyboard.press(`Enter`);

        await expect(page.locator(`#demo-content tui-editor`)).toHaveScreenshot(
            `Toolbar-03.png`,
        );

        await page.locator(`tui-editor-socket.tui-example`).click();
        await expect(page.locator(`#demo-content tui-editor`)).toHaveScreenshot(
            `Toolbar-04.png`,
        );
    });

    test(`has the possibility to add custom tool`, async ({page}) => {
        await tuiGoto(page, `/custom-tool/paste-emoji#custom-tool`);

        await page.locator(`[contenteditable]`).nth(0).focus();
        await expect(page.locator(`tui-editor`)).toHaveScreenshot(`Toolbar-05.png`);

        await page.locator(`[automation-id="smiles-tool__button"]`).click();
        await expect(page.locator(`tui-editor`)).toHaveScreenshot(`Toolbar-06.png`);

        await page.locator(`.smile`).nth(0).click();
        await expect(page.locator(`tui-editor`)).toHaveScreenshot(`Toolbar-07.png`);

        await page.keyboard.type(`awesome library for awesome people`);
        await expect(page.locator(`tui-editor`)).toHaveScreenshot(`Toolbar-08.png`);

        await page.locator(`[automation-id="smiles-tool__button"]`).click();
        await expect(page.locator(`tui-editor`)).toHaveScreenshot(`Toolbar-09.png`);

        await page.locator(`.smile`).nth(2).click();
        await expect(page.locator(`tui-editor`)).toHaveScreenshot(`Toolbar-10.png`);
    });

    test(`make a html table by 2x2`, async ({page}) => {
        await tuiGoto(page, `/starter-kit?ngModel=${HTML_EDITOR_BASIC_EXAMPLE}`);

        await page.locator(`[contenteditable]`).nth(0).focus();
        await page.keyboard.type(`\n\n\n\n`);
        await page.keyboard.press(`ArrowUp`);
        await page.keyboard.press(`ArrowUp`);
        await page.keyboard.press(`ArrowUp`);

        await page.locator(`[automation-id="toolbar__insert-table-button"]`).click();

        await expect(page.locator(`tui-editor`)).toHaveScreenshot(`Toolbar-11.png`);

        const cell = page
            .locator(`tui-table-size-selector .t-column`)
            .nth(1)
            .locator(`.t-cell`)
            .nth(1);

        await cell.hover();
        await cell.click();

        await expect(page.locator(`tui-editor`)).toHaveScreenshot(`Toolbar-12.png`);
    });

    test(`set table without style inheritance`, async ({page}) => {
        await tuiGoto(page, `/starter-kit?ngModel=${HTML_EDITOR_BASIC_EXAMPLE}`);

        await page.locator(`[contenteditable]`).nth(0).focus();
        await page.keyboard.press(`Meta+A`);
        await page.keyboard.press(`Backspace`);
        await expect(page.locator(`tui-editor`)).toHaveScreenshot(`Toolbar-13.png`);

        await page.locator(`[automation-id="toolbar__ordering-list-button"]`).focus();
        await page.keyboard.press(`Enter`);

        await page
            .locator(`[automation-id="toolbar__un-ordered-list-button"].t-option`)
            .focus();
        await page.keyboard.press(`Enter`);

        await page.locator(`[automation-id="toolbar__font-style-button"]`).focus();
        await page.keyboard.press(`Enter`);

        await page.locator(`[contenteditable]`).nth(0).focus();
        await page.keyboard.type(`12345`);
        await expect(page.locator(`tui-editor`)).toHaveScreenshot(`Toolbar-14.png`);

        await page.locator(`[automation-id="toolbar__insert-table-button"]`).focus();
        await page.keyboard.press(`Enter`);

        const cell = page
            .locator(`tui-table-size-selector .t-column`)
            .nth(1)
            .locator(`.t-cell`)
            .nth(1);

        await cell.hover();
        await cell.click();
        await expect(page.locator(`tui-editor`)).toHaveScreenshot(`Toolbar-15.png`);
    });

    test(`focuses nearest left/right active tool on "Arrow Right"/"Arrow Left"`, async ({
        page,
    }) => {
        await tuiGoto(page, `/starter-kit?ngModel=${HTML_EDITOR_BASIC_EXAMPLE}`);

        await page.locator(`[contenteditable]`).nth(0).focus();
        await page.locator(`[automation-id="toolbar__align-button"]`).focus();
        await page.keyboard.press(`Enter`);

        await expect(page.locator(`tui-editor`)).toHaveScreenshot(`Toolbar-16.png`);

        await page.keyboard.press(`ArrowRight`);
        await page.keyboard.press(`Enter`);

        await expect(page.locator(`tui-editor`)).toHaveScreenshot(`Toolbar-17.png`);

        await page.keyboard.press(`ArrowLeft`);
        await page.keyboard.press(`ArrowLeft`);
        await page.keyboard.press(`Enter`);

        await expect(page.locator(`tui-editor`)).toHaveScreenshot(`Toolbar-18.png`);
    });

    test(`skips disabled tools and selects next tool after disabled`, async ({page}) => {
        await tuiGoto(page, `/starter-kit?ngModel=${HTML_EDITOR_BASIC_EXAMPLE}`);

        await page.locator(`[contenteditable]`).nth(0).focus();
        await page.keyboard.press(`Meta+A`);
        await page.keyboard.press(`Backspace`);
        await expect(page.locator(`tui-editor`)).toHaveScreenshot(`Toolbar-19.png`);

        await page.locator(`[contenteditable]`).nth(0).focus();
        await page.locator(`[automation-id="toolbar__undo-button"]`).focus();
        await page.keyboard.press(`Enter`);

        await expect(page.locator(`tui-editor`)).toHaveScreenshot(`Toolbar-20.png`);

        await page.locator(`[contenteditable]`).nth(0).focus();
        await page.locator(`[automation-id="toolbar__redo-button"]`).focus();
        await page.keyboard.press(`Enter`);

        await expect(page.locator(`tui-editor`)).toHaveScreenshot(`Toolbar-21.png`);
    });
});
