import {TuiDemoPath} from '@demo/shared/routes';
import {expect, test} from '@playwright/test';

import {FontPO} from '../utils/page-objects/font.page';
import {HTML_EDITOR_BASIC_EXAMPLE} from '../stubs/html';

test.describe('Font', () => {
    test('previous text style should not be inherited', async ({page}) => {
        const fontPage = new FontPO(page);

        await fontPage.goto(
            `/${TuiDemoPath.StarterKit}?ngModel=${HTML_EDITOR_BASIC_EXAMPLE}&style.maxHeight.px=600`,
        );

        await fontPage.clearAndTypeText('Hello world');

        await fontPage.selectFontSize('tui_font__title');

        const editor = fontPage.getFontEditor();

        await expect.soft(editor.editor).toHaveScreenshot('Font-01.png');

        await fontPage.selectAllAndChangeFontSize('tui_font__subtitle');

        await expect.soft(editor.editor).toHaveScreenshot('Font-02.png');

        await fontPage.selectAllAndChangeFontSize('tui_font__large');

        await expect.soft(editor.editor).toHaveScreenshot('Font-03.png');

        await fontPage.selectAllAndChangeFontSize('tui_font__normal');

        await expect.soft(editor.editor).toHaveScreenshot('Font-04.png');

        await fontPage.selectAllAndChangeFontSize('tui_font__small');

        await expect.soft(editor.editor).toHaveScreenshot('Font-05.png');
    });
});
