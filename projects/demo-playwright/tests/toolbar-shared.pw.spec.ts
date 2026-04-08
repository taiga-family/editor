import {TuiDemoPath} from '@demo/shared/routes';
import {expect, test} from '@playwright/test';

import {tuiGoto} from '../utils';

test.describe('Toolbar Shared', () => {
    const cases = [
        {fontAutomationId: 'tui_font__title', texts: ['Hello world']},
        {fontAutomationId: 'tui_font__subtitle', texts: ['First', 'Second']},
        {fontAutomationId: 'tui_font__small', texts: ['First', 'Second', 'Third']},
    ] as const;

    for (const [i, {fontAutomationId, texts}] of cases.entries()) {
        test(`font size change on editor ${i}`, async ({page}) => {
            await tuiGoto(page, `/${TuiDemoPath.ToolbarShared}`);

            const editors = page.locator('[contenteditable]');

            for (const [j, text] of texts.entries()) {
                await editors.nth(j).click();
                await editors.nth(j).fill(text);
            }

            await editors.nth(i).selectText();

            await page.locator('[automation-id="toolbar__font-size-button"]').click();
            await page.locator(`[automation-id="${fontAutomationId}"]`).click();

            await expect
                .soft(page.locator('[automation-id="tui-doc-example"]'))
                .toHaveScreenshot(`ToolbarShared-${i}.png`);
        });
    }
});
