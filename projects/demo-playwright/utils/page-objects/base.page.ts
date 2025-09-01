import {type Locator, type Page} from '@playwright/test';

export abstract class BasePage {
    constructor(protected readonly page: Page) {}

    public async waitForStableState(): Promise<void> {
        await this.page.waitForLoadState('domcontentloaded');
        await this.page.waitForLoadState('load');
    }

    public async takeScreenshot(locator: Locator, screenshotName: string): Promise<void> {
        await locator.screenshot({path: screenshotName});
    }

    public async waitForTimeout(timeout: number): Promise<void> {
        await this.page.waitForTimeout(timeout);
    }

    public async clickOutside(): Promise<void> {
        await this.page.mouse.click(0, 0);
    }
}
