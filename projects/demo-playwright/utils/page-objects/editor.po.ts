import {expect, type Locator} from '@playwright/test';

export class TuiEditorPO {
    public readonly toolbar = this.host.locator('tui-toolbar').first();

    constructor(public readonly host: Locator) {}

    /**
     * Returns the ProseMirror contenteditable element after waiting for the editor
     * to finish loading (data-loaded="true") and verifying the toolbar is rendered.
     */
    public async contenteditable(): Promise<Locator> {
        await expect(this.host).toHaveAttribute('data-loaded', 'true', {timeout: 10_000});

        if (await this.toolbar.isVisible()) {
            const box = await this.toolbar.boundingBox();

            expect(box?.height).toBeGreaterThan(0);
        }

        return this.host.locator('[contenteditable].ProseMirror');
    }
}
