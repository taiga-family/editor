import {TuiDemoPath} from '@demo/routes';
import {expect, test} from '@playwright/test';

import {tuiGoto} from '../utils';

test.describe('Landing', () => {
    test('check rendered page', async ({page}) => {
        await tuiGoto(page, TuiDemoPath.GettingStarted);

        await expect.soft(page).toHaveScreenshot('Landing-01.png');
    });
});
