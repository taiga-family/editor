import {type Locator} from '@playwright/test';

import {DemoPO} from './demo.page';
import {type TuiEditorPO} from './tui-editor.page';

export class ImgPO extends DemoPO {
    public get imageEditor(): Locator {
        return this.page.locator('tui-image-editor');
    }

    public get resizableImage(): Locator {
        return this.page.locator('[id="resizable-image"] .t-demo');
    }

    public get resizeHandle(): Locator {
        return this.page.locator('.t-handle-right-side');
    }

    public get resizableEditor(): Locator {
        return this.page.locator('tui-editor-resizable');
    }

    public getImgEditor(): TuiEditorPO {
        return this.getEditorFromDemoContent();
    }

    public async hoverResizableImage(): Promise<void> {
        await this.resizableEditor.hover();
        await this.resizeHandle.hover();
    }

    public async resizeImage(deltaX: number): Promise<void> {
        const box = await this.resizeHandle.boundingBox();

        if (!box) {
            throw new Error('Could not get bounding box for resize handle');
        }

        const centerX = box.x + box.width / 2;
        const centerY = box.y + box.height / 2;

        await this.page.mouse.move(centerX, centerY);
        await this.page.mouse.down();
        await this.page.mouse.move(centerX + deltaX, centerY);
    }

    public async finishResize(): Promise<void> {
        await this.page.mouse.click(0, 0);
    }

    public async clickImageEditor(): Promise<void> {
        await this.imageEditor.click();
    }

    public async addLinkToImage(url: string): Promise<void> {
        const editor = this.getImgEditor();

        await editor.clickToolbarButton('toolbar__link-button');
        await editor.typeText(url);
        await editor.pressKey('Enter');
    }

    public override async clickOutside(): Promise<void> {
        await this.page.locator('body').click({position: {x: 0, y: 0}});
    }
}
