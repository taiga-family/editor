import {expect, test} from '@playwright/test';

import {HTML_EDITOR_BASIC_EXAMPLE} from '../stubs/html';
import {tuiGoto} from '../utils';

test.describe('Links', () => {
    test.beforeEach(async ({page}) => {
        await tuiGoto(page, `/starter-kit?ngModel=${HTML_EDITOR_BASIC_EXAMPLE}`);
        await page.locator('[contenteditable]').nth(0).focus();
    });

    test('check if at least one link exists', async ({page}) => {
        await page.locator('tui-editor a').nth(0).click();

        await expect.soft(page.locator('tui-editor')).toHaveScreenshot('Links-01.png');
    });

    test('switch links between', async ({page}) => {
        await page.locator('tui-editor strong').nth(0).dblclick();

        await page.locator('[automation-id="toolbar__link-button"]').focus();
        await page.keyboard.press('Enter');

        await page.locator('tui-input-inline input').nth(0).focus();
        await page.locator('tui-input-inline input').nth(0).fill('wysiwyg.com');
        await page.keyboard.press('Enter');

        await expect.soft(page.locator('tui-editor')).toHaveScreenshot('Links-02.png');

        await page.locator('tui-editor sup').nth(0).dblclick({force: true});

        await page.locator('[automation-id="toolbar__link-button"]').focus();
        await page.keyboard.press('Enter');

        await page.locator('tui-input-inline input').nth(0).focus();
        await page.locator('tui-input-inline input').nth(0).fill('example.com');
        await page.keyboard.press('Enter');

        await expect.soft(page.locator('tui-editor')).toHaveScreenshot('Links-03.png');

        await page.locator('tui-editor strong').nth(0).click();

        await expect.soft(page.locator('tui-editor')).toHaveScreenshot('Links-04.png');

        await page.mouse.click(0, 0);

        await page.locator('tui-editor sup').nth(0).click();

        await expect.soft(page.locator('tui-editor')).toHaveScreenshot('Links-05.png');
    });
});
