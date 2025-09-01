import {TuiDemoPath} from '@demo/shared/routes';
import {expect, test} from '@playwright/test';

import {DemoPO} from '../utils/page-objects';

test.describe('Mention', () => {
    test('show users in datalist', async ({page}) => {
        const demoPage = new DemoPO(page);

        await demoPage.gotoDemoPath(TuiDemoPath.Mention);

        const editor = demoPage.getEditor();

        await editor.focusEditor();
        await editor.selectAllText();
        await editor.pressKey('Backspace');

        await editor.typeText('@');

        await expect
            .soft(page.locator('.t-demo').first())
            .toHaveScreenshot('Mention-01.png');
    });
});
