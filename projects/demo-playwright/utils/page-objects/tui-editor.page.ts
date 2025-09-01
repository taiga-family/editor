import {type Locator, type Page} from '@playwright/test';

import {BasePage} from './base.page';

export class TuiEditorPO extends BasePage {
    private readonly editorLocator: Locator;

    constructor(page: Page, parentLocator?: Locator) {
        super(page);
        this.editorLocator = parentLocator
            ? parentLocator.locator('tui-editor')
            : page.locator('tui-editor');
    }

    public get editor(): Locator {
        return this.editorLocator;
    }

    public get contentEditable(): Locator {
        return this.page.locator('[contenteditable]').first();
    }

    public get toolbar(): Locator {
        return this.editorLocator.locator('tui-toolbar');
    }

    public async focusEditor(): Promise<void> {
        await this.contentEditable.click();
    }

    public async typeText(text: string): Promise<void> {
        await this.page.keyboard.type(text);
    }

    public async pressKey(key: string): Promise<void> {
        await this.page.keyboard.press(key);
    }

    public async selectAllText(): Promise<void> {
        await this.contentEditable.selectText();
    }

    public getToolbarButton(automationId: string): Locator {
        return this.page.locator(`[automation-id="${automationId}"]`);
    }

    public getToolbarButtonByText(text: string): Locator {
        return this.editorLocator.locator('tui-toolbar button').locator(`text="${text}"`);
    }

    public async clickToolbarButton(automationId: string): Promise<void> {
        await this.getToolbarButton(automationId).click();
    }

    public async clickToolbarButtonByText(text: string): Promise<void> {
        await this.getToolbarButtonByText(text).click();
    }

    public async focusToolbarButton(automationId: string): Promise<void> {
        await this.getToolbarButton(automationId).focus();
    }

    public async pressEnterOnToolbarButton(): Promise<void> {
        await this.page.keyboard.press('Enter');
    }
}
