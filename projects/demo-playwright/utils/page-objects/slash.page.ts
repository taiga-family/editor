import {type Locator} from '@playwright/test';

import {DemoPO} from './demo.page';
import {type TuiEditorPO} from './tui-editor.page';

export class SlashPO extends DemoPO {
    public get demoContainer(): Locator {
        return this.page.locator('.t-demo').first();
    }

    public getSlashEditor(): TuiEditorPO {
        return this.getEditor();
    }

    public async triggerSlashCommand(): Promise<void> {
        const editor = this.getSlashEditor();

        await editor.focusEditor();
        await editor.typeText('/');
    }

    public async selectTextAndAddLink(text: string, url: string): Promise<void> {
        const editor = this.getSlashEditor();

        await editor.focusEditor();
        await editor.typeText(text);
        await editor.selectAllText();

        await this.page.getByTestId('toolbar__link-button').click();
        await this.waitForTimeout(300);

        await editor.typeText(url);
        await editor.pressKey('Enter');
        await this.waitForTimeout(300);
    }

    public async navigateToEndAndTriggerSlash(): Promise<void> {
        const editor = this.getSlashEditor();

        await editor.focusEditor();
        await editor.pressKey('End');
        await editor.pressKey(' ');
        await editor.pressKey('Enter');
        await editor.typeText('/');
        await this.waitForTimeout(300);
    }
}
