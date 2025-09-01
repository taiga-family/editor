import {type Locator} from '@playwright/test';

import {DemoPO} from './demo.page';
import {type TuiEditorPO} from './tui-editor.page';

export class GroupsPO extends DemoPO {
    public get groupAddButton(): Locator {
        return this.page.locator(
            '#draggable-groups [automation-id="toolbar__group-add-button"]',
        );
    }

    public getNestedGroupsEditor(): TuiEditorPO {
        return this.getEditorFromExample('nested-groups');
    }

    public getDraggableGroupsEditor(): TuiEditorPO {
        return this.getEditorFromExample('draggable-groups');
    }

    public async addGroup(): Promise<void> {
        await this.groupAddButton.focus();
        await this.page.keyboard.press('Enter');
        await this.waitForTimeout(300);
    }

    public async selectAllContent(): Promise<void> {
        const contentEditable = this.page.locator('[contenteditable]').first();

        await contentEditable.focus();
        await this.waitForTimeout(100);
        await contentEditable.selectText();
        await this.waitForTimeout(100);
    }

    public async clearContent(): Promise<void> {
        await this.selectAllContent();
        await this.page.keyboard.press('Backspace');
        await this.waitForTimeout(100);
    }

    public async typeWithFocus(text: string): Promise<void> {
        await this.page.locator('[contenteditable]').first().focus();
        await this.page.keyboard.type(text);
    }

    public async addNewLine(): Promise<void> {
        await this.page.locator('[contenteditable]').first().focus();
        await this.page.keyboard.press('Enter');
    }
}
