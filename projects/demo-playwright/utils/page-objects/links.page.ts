import {type Locator} from '@playwright/test';

import {DemoPO} from './demo.page';
import {type TuiEditorPO} from './tui-editor.page';

export class LinksPO extends DemoPO {
    public get linkInput(): Locator {
        return this.page.locator('tui-input-inline input').first();
    }

    public getLinksEditor(): TuiEditorPO {
        return this.getEditor();
    }

    public async clickFirstLink(): Promise<void> {
        await this.page.locator('tui-editor a').first().click();
    }

    public async doubleClickFirstStrong(): Promise<void> {
        await this.page.locator('tui-editor strong').first().dblclick();
    }

    public async addLinkToSelection(url: string): Promise<void> {
        const editor = this.getLinksEditor();

        await editor.focusToolbarButton('toolbar__link-button');
        await editor.pressEnterOnToolbarButton();
        await this.waitForTimeout(300);

        await this.linkInput.focus();
        await this.waitForTimeout(300);

        await this.linkInput.fill(url);
        await editor.pressKey('Enter');
    }

    public async selectAndAddLink(selector: string, url: string): Promise<void> {
        const element = this.page.locator(selector).first();

        await element.selectText();
        await this.addLinkToSelection(url);
    }

    public async clickFirstStrong(): Promise<void> {
        await this.page.locator('tui-editor strong').first().click();
    }

    public async clickFirstSup(): Promise<void> {
        await this.page.locator('tui-editor sup').first().click();
    }

    public async clearAndTypeText(text: string): Promise<void> {
        const editor = this.getLinksEditor();

        await editor.selectAllText();
        await editor.pressKey('Backspace');
        await editor.typeText(text);
        await editor.selectAllText();
    }

    public async addLinkViaToolbar(url: string): Promise<void> {
        const editor = this.getLinksEditor();

        await editor.clickToolbarButton('toolbar__link-button');
        await editor.typeText(url);
        await editor.pressKey('Enter');
    }

    public async goToEndAndType(text: string): Promise<void> {
        const editor = this.getLinksEditor();

        await editor.focusEditor();
        await editor.pressKey('End');
        await editor.typeText(text);
    }
}
