import {TuiDemoPath} from '@demo/shared/routes';
import {expect, test} from '@playwright/test';

import {HTML_EDITOR_BASIC_EXAMPLE} from '../stubs/html';
import {TuiEditorPO, tuiGoto} from '../utils';

test.describe('Links', () => {
    test.beforeEach(async ({page}) => {
        await tuiGoto(
            page,
            `/${TuiDemoPath.StarterKit}?ngModel=${HTML_EDITOR_BASIC_EXAMPLE}`,
        );
    });

    test('check if at least one link exists', async ({page}) => {
        const editor = new TuiEditorPO(page.locator('tui-editor'));
        const contenteditable = await editor.contenteditable();

        await contenteditable.click();
        await editor.host.locator('a').first().scrollIntoViewIfNeeded();
        await editor.host.locator('a').first().click();
        await expect(page.locator('tui-edit-link')).toBeVisible();

        await expect.soft(editor.host).toHaveScreenshot('Links-01.png');
    });

    test('switch links between', async ({page}) => {
        const editor = new TuiEditorPO(page.locator('tui-editor'));
        const contenteditable = await editor.contenteditable();

        await contenteditable.focus();
        await editor.host.locator('h1').first().selectText();
        await page.locator('[automation-id="toolbar__link-button"]').focus();
        await page.keyboard.press('Enter');
        await page.locator('tui-input-inline input').first().focus();
        await page.locator('tui-input-inline input').first().fill('wysiwyg.com');
        await page.keyboard.press('Enter');
        await expect.soft(editor.host).toHaveScreenshot('Links-02.png');

        await editor.host.locator('sup').first().selectText();
        await page.locator('[automation-id="toolbar__link-button"]').focus();
        await page.keyboard.press('Enter');
        await page.locator('tui-input-inline input').first().focus();
        await page.locator('tui-input-inline input').first().fill('example.com');
        await page.keyboard.press('Enter');
        await page.locator('tui-input-inline').waitFor({state: 'hidden'});
        await expect.soft(editor.host).toHaveScreenshot('Links-03.png');

        await page.mouse.click(0, 0);
        await editor.host.locator('h1').first().click();
        await expect(page.locator('tui-dropdown')).toBeVisible();
        await expect.soft(editor.host).toHaveScreenshot('Links-04.png');
    });

    test('does not create empty link when blurring dropdown without entering URL', async ({
        page,
    }) => {
        const editor = new TuiEditorPO(page.locator('tui-editor'));
        const contenteditable = await editor.contenteditable();

        await contenteditable.focus();
        await editor.host.locator('strong').first().dblclick();

        await page.locator('[automation-id="toolbar__link-button"]').focus();
        await page.keyboard.press('Enter');
        await page.waitForTimeout(300);

        await page.locator('tui-input-inline input').first().focus();
        await page.waitForTimeout(300);

        await page.mouse.click(0, 0);
        await page.waitForTimeout(300);

        await expect(editor.host.locator('a[href=""]')).toHaveCount(0);
    });

    test('check that you can write text at the end', async ({page}) => {
        const editor = new TuiEditorPO(page.locator('tui-editor'));
        const contenteditable = await editor.contenteditable();

        await contenteditable.selectText();
        await contenteditable.clear();
        await page.keyboard.type('Hello');
        await contenteditable.selectText();
        await expect.soft(editor.host).toHaveScreenshot('Links-06.png');

        await page.locator('[automation-id="toolbar__link-button"]').click();
        await page.keyboard.type('abc.com');
        await page.keyboard.press('Enter');
        await expect.soft(page).toHaveScreenshot('Links-07.png');

        await contenteditable.click();
        await page.keyboard.press('End');
        await contenteditable.click();
        await page.keyboard.type('World');
        await expect.soft(editor.host).toHaveScreenshot('Links-08.png');
    });

    test('typing after link should not extend link mark', async ({page}) => {
        const editor = new TuiEditorPO(page.locator('tui-editor'));
        const contenteditable = await editor.contenteditable();

        await contenteditable.selectText();
        await contenteditable.clear();

        await page.keyboard.type('click here');
        await contenteditable.selectText();

        await page.locator('[automation-id="toolbar__link-button"]').click();
        await page.keyboard.type('example.com');
        await page.keyboard.press('Enter');

        await contenteditable.click();
        await page.keyboard.press('End');
        await page.keyboard.type(' plain text');

        await expect.soft(editor.host).toHaveScreenshot('Links-09.png');
    });
});
