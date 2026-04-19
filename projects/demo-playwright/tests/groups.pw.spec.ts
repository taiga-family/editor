import {TuiDemoPath} from '@demo/shared/routes';
import {expect, test} from '@playwright/test';

import {TuiEditorPO, tuiGoto} from '../utils';

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
        const editor = new TuiEditorPO(page.locator('#draggable-groups tui-editor'));
        const contenteditable = await editor.contenteditable();

        await expect.soft(editor.host).toHaveScreenshot('Groups-02.png');
        await page.waitForTimeout(300);

        await page
            .locator('#draggable-groups [automation-id="toolbar__group-add-button"]')
            .focus();
        await page.keyboard.press('Enter');
        await page.waitForTimeout(300);

        await expect.soft(editor.host).toHaveScreenshot('Groups-03.png');

        await contenteditable.focus();
        await contenteditable.selectText();
        await contenteditable.clear();

        await expect.soft(editor.host).toHaveScreenshot('Groups-04.png');

        await page
            .locator('#draggable-groups [automation-id="toolbar__group-add-button"]')
            .focus();
        await page.keyboard.press('Enter');
        await page.waitForTimeout(300);

        await contenteditable.focus();
        await page.keyboard.type('12345');
        await page
            .locator('#draggable-groups [automation-id="toolbar__group-add-button"]')
            .focus();
        await page.keyboard.press('Enter');
        await page.waitForTimeout(300);

        await contenteditable.focus();
        await page.keyboard.press('Enter');
        await page.keyboard.type('456');
        await page.waitForTimeout(300);

        await expect.soft(editor.host).toHaveScreenshot('Groups-05.png');
    });
});
