import {TuiDemoPath} from '@demo/shared/routes';
import {expect, test} from '@playwright/test';

import {TuiEditorPO, tuiGoto, waitForScrollEnd} from '../utils';

test.describe('Anchors', () => {
    test.use({viewport: {width: 1280, height: 500}});

    test.beforeEach(async ({page}) => {
        await tuiGoto(page, TuiDemoPath.Anchors);
    });

    test('all content', async ({page}) => {
        await expect.soft(page.locator('tui-editor')).toHaveScreenshot('Anchors-01.png');
    });

    test('viewport position', async ({page}) => {
        for (const anchor of [
            'moser',
            'thirlwell',
            'briggs',
            'introduction',
            'knowles',
            'war',
        ]) {
            await page
                .locator('tui-editor-socket')
                .last()
                .locator(`a[href="#${anchor}"]`)
                .last()
                .click();

            await waitForScrollEnd(page);
            await expect.soft(page).toHaveScreenshot(`Anchors-02-${anchor}.png`);
        }
    });

    test('make anchor', async ({page}) => {
        const fullExample = page.locator('tui-doc-example#anchors');
        const editorPO = new TuiEditorPO(fullExample.locator('tui-editor'));
        const editor = await editorPO.contenteditable();

        await editor.focus();
        await editor.selectText();
        await editor.clear();
        await page.mouse.click(0, 0);
        await expect.soft(fullExample).toHaveScreenshot('Anchors-03-empty.png');

        await editor.focus();
        await page.keyboard.type('\n\nHello\n\nLink to anchor\n');
        await expect(editor.getByText('Hello')).toBeVisible();
        await editor.getByText('Hello').selectText();
        await page.getByTestId('tui-doc-example').getByRole('button').nth(3).click();
        await expect(editor.locator('a')).toBeVisible();

        await expect(page.locator('tui-dropdown')).toBeVisible();
        await page.keyboard.press('H');
        await page.keyboard.press('e');
        await page.keyboard.press('l');
        await page.keyboard.press('l');
        await page.keyboard.press('o');
        await expect(page.locator('tui-edit-link')).toBeVisible();
        await expect.soft(fullExample).toHaveScreenshot('Anchors-04-hello-text.png');

        await page.keyboard.press('Enter');
        await expect.soft(fullExample).toHaveScreenshot('Anchors-05.png');

        await editor.getByText('Link to anchor').selectText();
        await page.getByTestId('toolbar__link-button').click();

        const anchorButton = page.getByRole('button', {name: '#Hello'});

        await expect(anchorButton).toBeVisible();
        await expect(page.locator('tui-dropdown')).toBeVisible();
        await expect.soft(fullExample).toHaveScreenshot('Anchors-06.png');

        await anchorButton.click();
        await page.waitForTimeout(1000);
        await page.mouse.click(0, 0);
        await expect.soft(fullExample).toHaveScreenshot('Anchors-07.png');
    });
});
