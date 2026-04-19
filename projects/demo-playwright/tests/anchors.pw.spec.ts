import {TuiDemoPath} from '@demo/shared/routes';
import {expect, test} from '@playwright/test';

import {TuiEditorPO, tuiGoto, waitForScrollEnd, waitStableState} from '../utils';

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

        await page.waitForTimeout(300);
        await editor.focus();
        await editor.selectText();
        await editor.clear();
        await page.mouse.click(0, 0);
        await page.waitForTimeout(300);

        await expect.soft(fullExample).toHaveScreenshot('Anchors-03.png');

        await editor.focus();
        await page.keyboard.type('\n\n\nHello\n\n\nLink to anchor\n');
        await editor.getByText('Hello').waitFor({state: 'visible'});
        await editor.getByText('Hello').selectText();
        await page.getByTestId('tui-doc-example').getByRole('button').nth(3).click();
        await editor.locator('a').waitFor({state: 'visible'});

        await page.keyboard.press('H');
        await page.keyboard.press('e');
        await page.keyboard.press('l');
        await page.keyboard.press('l');
        await page.keyboard.press('o');
        await waitStableState(fullExample);
        // The dropdown is a portal rendered outside fullExample — wait for it separately.
        await waitStableState(page.locator('tui-edit-link'));

        await expect.soft(fullExample).toHaveScreenshot('Anchors-04.png');

        await page.waitForTimeout(300);
        await page.keyboard.press('Enter');

        await expect.soft(fullExample).toHaveScreenshot('Anchors-05.png');

        await editor.getByText('Link to anchor').selectText();
        await page.getByTestId('toolbar__link-button').click();

        const anchorButton = page.getByRole('button', {name: '#Hello'});

        await anchorButton.waitFor({state: 'visible'});
        await expect.soft(fullExample).toHaveScreenshot('Anchors-06.png');

        await anchorButton.click();
        await page.waitForTimeout(1000);
        await page.mouse.click(0, 0);

        await expect.soft(fullExample).toHaveScreenshot('Anchors-07.png');

        await page.mouse.click(0, 0);
        await page.waitForTimeout(1000);

        await expect.soft(fullExample).toHaveScreenshot('Anchors-08.png');
    });
});
