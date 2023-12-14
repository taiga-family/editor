import {expect, test} from '@playwright/test';

import {tuiGoto} from '../utils';

test.describe(`ColorPicker`, () => {
    test(`closes tool's dropdown if opened new tool's dropdown`, async ({page}) => {
        await tuiGoto(page, `/color-picker`);

        await expect(page.locator(`example-tui-color-picker`)).toHaveScreenshot(
            `ColorPicker-01.png`,
        );

        await page.locator(`#dropdown [automation-id="color-picker__button"]`).click();

        await expect(page.locator(`example-tui-color-picker`)).toHaveScreenshot(
            `ColorPicker-02.png`,
        );
    });

    test(`opened color picker and change rgb`, async ({page}) => {
        await tuiGoto(page, `/color-picker`);

        await page.locator(`#dropdown [automation-id="color-picker__button"]`).click();

        await changeToHex();
        await setInputBox(1, 255);
        await setInputBox(2, 255);
        await setInputBox(3, 255);

        await expect(page.locator(`example-tui-color-picker`)).toHaveScreenshot(
            `ColorPicker-03.png`,
        );

        async function changeToHex(): Promise<void> {
            await page
                .locator(`tui-color-edit`)
                .locator(`tui-select`)
                .locator(`[automation-id="tui-primitive-textfield__native-input"]`)
                .click();
            await page.locator(`tui-data-list button:nth-of-type(2)`).click();
        }

        async function setInputBox(index: 1 | 2 | 3, value: number): Promise<void> {
            await page
                .locator(`tui-color-edit tui-input-count:nth-of-type(${index})`)
                .locator(`[automation-id="tui-primitive-textfield__native-input"]`)
                .focus();
            await page
                .locator(`tui-color-edit tui-input-count:nth-of-type(${index})`)
                .locator(`[automation-id="tui-primitive-textfield__native-input"]`)
                .fill(value.toString());
        }
    });
});
