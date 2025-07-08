import {expect, test} from '@playwright/test';

import {HTML_EDITOR_BASIC_EXAMPLE} from '../stubs/html';
import {tuiGoto} from '../utils';

test.describe('Links', () => {
    test.beforeEach(async ({page}) => {
        await tuiGoto(page, `/starter-kit?ngModel=${HTML_EDITOR_BASIC_EXAMPLE}`);
        await page.locator('[contenteditable]').first().focus();
    });

    test('check if at least one link exists', async ({page}) => {
        await page.locator('tui-editor a').first().click();

        await expect.soft(page.locator('tui-editor')).toHaveScreenshot('Links-01.png');
    });

    test('switch links between', async ({page}) => {
        await page.locator('tui-editor strong').first().dblclick();

        await page.locator('[automation-id="toolbar__link-button"]').focus();
        await page.keyboard.press('Enter');

        await page.locator('tui-input-inline input').first().focus();
        await page.locator('tui-input-inline input').first().fill('wysiwyg.com');
        await page.keyboard.press('Enter');

        await expect.soft(page.locator('tui-editor')).toHaveScreenshot('Links-02.png');

        await page.locator('tui-editor h1').first().selectText();

        await page.locator('[automation-id="toolbar__link-button"]').focus();
        await page.keyboard.press('Enter');

        await page.locator('tui-input-inline input').first().focus();
        await page.locator('tui-input-inline input').first().fill('example.com');
        await page.keyboard.press('Enter');

        await expect.soft(page.locator('tui-editor')).toHaveScreenshot('Links-03.png');

        await page.locator('tui-editor strong').first().click();

        await expect.soft(page.locator('tui-editor')).toHaveScreenshot('Links-04.png');

        await page.mouse.click(0, 0);

        await page.locator('tui-editor sup').first().click();

        await expect.soft(page.locator('tui-editor')).toHaveScreenshot('Links-05.png');
    });
});
