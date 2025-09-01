import {TuiDemoPath} from '@demo/shared/routes';
import {type Locator} from '@playwright/test';

import {tuiGoto} from '../goto';
import {BasePage} from './base.page';
import {TuiEditorPO} from './tui-editor.page';

export class DemoPO extends BasePage {
    public get demoContent(): Locator {
        return this.page.locator('#demo-content');
    }

    public async goto(path: string): Promise<void> {
        await tuiGoto(this.page, path);
    }

    public async gotoDemoPath(demoPath: string): Promise<void> {
        await tuiGoto(this.page, demoPath);
    }

    public async gotoStarterKitWithModel(ngModel: string): Promise<void> {
        await tuiGoto(this.page, `/${TuiDemoPath.StarterKit}?ngModel=${ngModel}`);
    }

    public getExample(id: string): Locator {
        return this.page.locator(`#${id}`);
    }

    public getEditorFromExample(exampleId: string): TuiEditorPO {
        const exampleLocator = this.getExample(exampleId);

        return new TuiEditorPO(this.page, exampleLocator);
    }

    public getEditor(): TuiEditorPO {
        return new TuiEditorPO(this.page);
    }

    public getEditorFromDemoContent(): TuiEditorPO {
        return new TuiEditorPO(this.page, this.demoContent);
    }

    public getContentTable(exampleId: string): Locator {
        return this.getExample(exampleId).locator('tui-content-table tui-editor-socket');
    }
}
