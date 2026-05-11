import {type Locator, type Page} from '@playwright/test';

export class TuiEditLinkPO {
    public readonly host: Locator;
    public readonly inlineInput: Locator;
    public readonly input: Locator;

    constructor(page: Page) {
        this.host = page.locator('tui-edit-link');
        this.inlineInput = page.locator('tui-input-inline').first();
        this.input = this.inlineInput.locator('input').first();
    }

    public preview(value: string): Locator {
        return this.host.filter({hasText: value}).first();
    }

    public async fill(value: string): Promise<void> {
        await this.input.fill(value);
    }

    public async submit(value: string): Promise<void> {
        await this.fill(value);
        await this.input.press('Enter');
    }
}
