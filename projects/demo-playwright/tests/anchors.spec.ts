import {TuiDemoPath} from '@demo/shared/routes';
import {expect, test} from '@playwright/test';

import {hideScrollbars, tuiGoto} from '../utils';

test.describe('Anchors', () => {
    test.use({viewport: {width: 1280, height: 500}});

    test.beforeEach(async ({page}) => {
        await tuiGoto(page, TuiDemoPath.Anchors);
    });

    test('all content', async ({page}) => {
        await expect.soft(page.locator('tui-editor')).toHaveScreenshot('Anchors-01.png');
    });

    test('viewport position', async ({page}) => {
        await hideScrollbars(page);

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

            await expect.soft(page).toHaveScreenshot(`Anchors-02-${anchor}.png`);
        }
    });

    test('make anchor', async ({page}) => {
        await hideScrollbars(page);

        const fullExample = page.locator('tui-doc-example#anchors');
        const editor = fullExample.locator('[contenteditable]').first();

        await page.waitForTimeout(300);
        await editor.focus();
        await editor.fill('');
        await page.mouse.click(0, 0);
        await page.waitForTimeout(300);

        await expect.soft(fullExample).toHaveScreenshot('Anchors-03.png');

        await editor.focus();
        await page.keyboard.type('Hello\n\n\nLink to anchor\n');
        await page.waitForTimeout(1000);
        await editor.getByText('Hello').selectText();
        await page.getByTestId('tui-doc-example').getByRole('button').nth(3).click();
        await page.waitForTimeout(1000);

        await page.keyboard.press('H');
        await page.keyboard.press('e');
        await page.keyboard.press('l');
        await page.keyboard.press('l');
        await page.keyboard.press('o');
        await page.waitForTimeout(1000);

        await expect.soft(fullExample).toHaveScreenshot('Anchors-04.png');

        await page.waitForTimeout(300);
        await page.keyboard.press('Enter');

        await expect.soft(fullExample).toHaveScreenshot('Anchors-05.png');

        await editor.getByText('Link to anchor').selectText();
        await page.getByTestId('toolbar__link-button').click();
        await page.waitForTimeout(1000);

        await expect.soft(fullExample).toHaveScreenshot('Anchors-06.png');

        await page.getByRole('button', {name: '#Hello'}).click();
        await page.waitForTimeout(1000);
        await page.mouse.click(0, 0);

        await expect.soft(fullExample).toHaveScreenshot('Anchors-07.png');

        await page.mouse.click(0, 0);
        await page.waitForTimeout(1000);

        await expect.soft(fullExample).toHaveScreenshot('Anchors-08.png');
    });
});
