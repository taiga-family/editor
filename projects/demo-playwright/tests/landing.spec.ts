import {TuiDemoPath} from '@demo/shared/routes';
import {expect, test} from '@playwright/test';

import {DemoPO} from '../utils/page-objects';

test.describe('Landing', () => {
    test('check rendered page', async ({page}) => {
        const demoPage = new DemoPO(page);

        await demoPage.gotoDemoPath(TuiDemoPath.GettingStarted);

        await expect.soft(page).toHaveScreenshot('Landing-01.png');
    });
});
