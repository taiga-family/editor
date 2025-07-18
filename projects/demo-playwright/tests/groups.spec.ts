import {TuiDemoPath} from '@demo/routes';
import {expect, test} from '@playwright/test';

import {tuiGoto} from '../utils';

test.describe('Groups', () => {
    test.beforeEach(async ({page}) => {
        await tuiGoto(page, TuiDemoPath.Groups);
    });

    test('simple nested group', async ({page}) => {
        await expect
            .soft(page.locator('#nested-groups tui-editor'))
            .toHaveScreenshot('Groups-01.png');
    });

    test('draggable groups', async ({page}) => {
        await expect
            .soft(page.locator('#draggable-groups tui-editor'))
            .toHaveScreenshot('Groups-02.png');

        await page
            .locator('#draggable-groups [automation-id="toolbar__group-add-button"]')
            .focus();
        await page.keyboard.press('Enter');

        await expect
            .soft(page.locator('#draggable-groups tui-editor'))
            .toHaveScreenshot('Groups-03.png');

        await page.locator('[contenteditable]').first().focus();
        await page.locator('[contenteditable]').first().selectText();
        await page.keyboard.press('Backspace');

        await expect
            .soft(page.locator('#draggable-groups tui-editor'))
            .toHaveScreenshot('Groups-04.png');

        await page
            .locator('#draggable-groups [automation-id="toolbar__group-add-button"]')
            .focus();
        await page.keyboard.press('Enter');

        await page.locator('[contenteditable]').first().focus();
        await page.keyboard.type('12345');

        await page
            .locator('#draggable-groups [automation-id="toolbar__group-add-button"]')
            .focus();
        await page.keyboard.press('Enter');

        await page.locator('[contenteditable]').first().focus();
        await page.keyboard.press('Enter');
        await page.keyboard.type('456');

        await expect
            .soft(page.locator('#draggable-groups tui-editor'))
            .toHaveScreenshot('Groups-05.png');
    });
});
