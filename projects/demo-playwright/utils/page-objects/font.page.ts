import {DemoPO} from './demo.page';
import {type TuiEditorPO} from './tui-editor.page';

export class FontPO extends DemoPO {
    public getFontEditor(): TuiEditorPO {
        return this.getEditor();
    }

    public async clearAndTypeText(text: string): Promise<void> {
        const editor = this.getFontEditor();

        await editor.focusEditor();
        await editor.selectAllText();
        await editor.pressKey('Backspace');
        await this.waitForTimeout(300);

        await editor.focusEditor();
        await this.waitForTimeout(300);

        await editor.typeText(text);
    }

    public async selectFontSize(fontId: string): Promise<void> {
        const editor = this.getFontEditor();

        await editor.focusToolbarButton('toolbar__font-size-button');
        await editor.pressEnterOnToolbarButton();

        await this.page.locator(`[automation-id="${fontId}"]`).focus();
        await this.page.keyboard.press('Enter');

        await editor.focusEditor();
        await this.waitForTimeout(300);
    }

    public async selectAllAndChangeFontSize(fontId: string): Promise<void> {
        const editor = this.getFontEditor();

        await editor.focusEditor();
        await editor.selectAllText();
        await this.selectFontSize(fontId);
    }
}
