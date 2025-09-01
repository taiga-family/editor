import {TuiDemoPath} from '@demo/shared/routes';
import {expect, test} from '@playwright/test';

import {SlashPO} from '../utils/page-objects/slash.page';

test.describe('Slash', () => {
    test('show commands', async ({page}) => {
        const slashPage = new SlashPO(page);

        await slashPage.gotoDemoPath(TuiDemoPath.SlashCommand);

        await slashPage.triggerSlashCommand();

        await expect.soft(page).toHaveScreenshot('Slash-01.png');
    });

    test('show link dropdown and commands', async ({page}) => {
        const slashPage = new SlashPO(page);

        await slashPage.gotoDemoPath(TuiDemoPath.SlashCommand);

        await slashPage.selectTextAndAddLink('ABC', 'abc.com');

        await expect.soft(slashPage.demoContainer).toHaveScreenshot('Slash-02.png');

        await expect.soft(slashPage.demoContainer).toHaveScreenshot('Slash-03.png');

        await slashPage.navigateToEndAndTriggerSlash();

        await expect.soft(slashPage.demoContainer).toHaveScreenshot('Slash-04.png');
    });
});
