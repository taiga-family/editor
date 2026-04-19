import {TuiDemoPath} from '@demo/shared/routes';
import {expect, test} from '@playwright/test';

import {TuiEditorPO, tuiGoto} from '../utils';

test.describe('Toolbar Shared', () => {
    const cases = [
        {fontAutomationId: 'tui_font__title', texts: ['Hello world']},
        {fontAutomationId: 'tui_font__subtitle', texts: ['First', 'Second']},
        {fontAutomationId: 'tui_font__small', texts: ['First', 'Second', 'Third']},
    ] as const;

    for (const [i, {fontAutomationId, texts}] of cases.entries()) {
        test(`font size change on editor ${i}`, async ({page}) => {
            await tuiGoto(page, `/${TuiDemoPath.ToolbarShared}`);

            const editorPOs = Array.from(
                {length: texts.length},
                (_, j) => new TuiEditorPO(page.locator('tui-editor').nth(j)),
            );
            const contenteditables = await Promise.all(
                editorPOs.map(async (editorPO) => editorPO.contenteditable()),
            );

            for (const [j, text] of texts.entries()) {
                await contenteditables[j]?.click();
                await page.waitForTimeout(100);
                await contenteditables[j]?.fill(text);
            }

            await contenteditables[i]?.selectText();

            await page.locator('[automation-id="toolbar__font-size-button"]').click();
            await page.waitForTimeout(100);
            await page.locator(`[automation-id="${fontAutomationId}"]`).click();
            await page.waitForTimeout(100);

            await expect
                .soft(page.locator('[automation-id="tui-doc-example"]'))
                .toHaveScreenshot(`ToolbarShared-${i}.png`);
        });
    }
});
