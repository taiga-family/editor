import {type Locator} from '@playwright/test';

import {DemoPO} from './demo.page';
import {type TuiEditorPO} from './tui-editor.page';

export class AnchorsPO extends DemoPO {
    public get fullExample(): Locator {
        return this.page.locator('tui-doc-example#anchors');
    }

    public get editorSocket(): Locator {
        return this.page.locator('tui-editor-socket').last();
    }

    public getAnchorsEditor(): TuiEditorPO {
        return this.getEditor();
    }

    public async clickAnchorLink(anchor: string): Promise<void> {
        await this.editorSocket.locator(`a[href="#${anchor}"]`).last().click();
    }

    public async clearContentAndStartFresh(): Promise<void> {
        const editor = this.getAnchorsEditor();

        await this.waitForTimeout(300);
        await editor.focusEditor();
        await editor.selectAllText();
        await editor.pressKey('Backspace');
        await this.clickOutside();
        await this.waitForTimeout(300);
    }

    public async addTextAndCreateAnchor(text: string, anchorText: string): Promise<void> {
        const editor = this.getAnchorsEditor();

        await editor.focusEditor();
        await editor.typeText(`${text}\n\n\nLink to anchor\n`);
        await this.waitForTimeout(1000);

        await editor.contentEditable.getByText(text).selectText();
        await this.page.getByTestId('tui-doc-example').getByRole('button').nth(3).click();
        await this.waitForTimeout(1000);

        await this.page.keyboard.type(anchorText);
        await this.waitForTimeout(1000);
        await this.page.keyboard.press('Enter');
    }

    public async addLinkToAnchor(linkText: string, anchorName: string): Promise<void> {
        const editor = this.getAnchorsEditor();

        await editor.contentEditable.getByText(linkText).selectText();
        await this.page.getByTestId('toolbar__link-button').click();
        await this.waitForTimeout(1000);

        await this.page.getByRole('button', {name: `#${anchorName}`}).click();
        await this.waitForTimeout(1000);
        await this.clickOutside();
    }

    public async finalizeAndCapture(): Promise<void> {
        await this.clickOutside();
        await this.waitForTimeout(1000);
    }
}
