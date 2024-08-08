import {expect, test} from '@playwright/test';

import {tuiGoto} from '../utils';

test.describe('Groups', () => {
    test.beforeEach(async ({page}) => {
        await tuiGoto(page, '/groups');
    });

    test('simple nested group', async ({page}) => {
        await expect(page.locator('#nested-groups tui-editor')).toHaveScreenshot(
            'Groups-01.png',
        );
    });

    test('draggable groups', async ({page}) => {
        await expect(page.locator('#draggable-groups tui-editor')).toHaveScreenshot(
            'Groups-02.png',
        );

        await page
            .locator('#draggable-groups [automation-id="toolbar__group-add-button"]')
            .focus();
        await page.keyboard.press('Enter');

        await expect(page.locator('#draggable-groups tui-editor')).toHaveScreenshot(
            'Groups-03.png',
        );

        await page.locator('[contenteditable]').nth(0).focus();
        await page.keyboard.press('Meta+A');
        await page.keyboard.press('Backspace');

        await expect(page.locator('#draggable-groups tui-editor')).toHaveScreenshot(
            'Groups-04.png',
        );

        await page
            .locator('#draggable-groups [automation-id="toolbar__group-add-button"]')
            .focus();
        await page.keyboard.press('Enter');

        await page.locator('[contenteditable]').nth(0).focus();
        await page.keyboard.type('12345');

        await page
            .locator('#draggable-groups [automation-id="toolbar__group-add-button"]')
            .focus();
        await page.keyboard.press('Enter');

        await page.locator('[contenteditable]').nth(0).focus();
        await page.keyboard.type('456');

        await expect(page.locator('#draggable-groups tui-editor')).toHaveScreenshot(
            'Groups-05.png',
        );
    });
});
