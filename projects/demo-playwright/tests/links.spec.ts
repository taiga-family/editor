import {expect, test} from '@playwright/test';

import {LinksPO} from '../utils/page-objects/links.page';
import {HTML_EDITOR_BASIC_EXAMPLE} from '../stubs/html';

test.describe('Links', () => {
    test.beforeEach(async ({page}) => {
        const linksPage = new LinksPO(page);

        await linksPage.gotoStarterKitWithModel(HTML_EDITOR_BASIC_EXAMPLE);

        const editor = linksPage.getLinksEditor();

        await editor.focusEditor();
    });

    test('check if at least one link exists', async ({page}) => {
        const linksPage = new LinksPO(page);
        const editor = linksPage.getLinksEditor();

        await linksPage.clickFirstLink();

        await expect.soft(editor.editor).toHaveScreenshot('Links-01.png');
    });

    test('switch links between', async ({page}) => {
        const linksPage = new LinksPO(page);
        const editor = linksPage.getLinksEditor();

        await linksPage.doubleClickFirstStrong();
        await linksPage.addLinkToSelection('wysiwyg.com');

        await expect.soft(editor.editor).toHaveScreenshot('Links-02.png');

        await linksPage.selectAndAddLink('tui-editor h1', 'example.com');

        await expect.soft(editor.editor).toHaveScreenshot('Links-03.png');

        await linksPage.clickFirstStrong();

        await expect.soft(editor.editor).toHaveScreenshot('Links-04.png');

        await linksPage.clickOutside();

        await linksPage.clickFirstSup();

        await expect.soft(editor.editor).toHaveScreenshot('Links-05.png');
    });

    test('check that you can write text at the end', async ({page}) => {
        const linksPage = new LinksPO(page);
        const editor = linksPage.getLinksEditor();

        await linksPage.clearAndTypeText('Hello');

        await expect.soft(editor.editor).toHaveScreenshot('Links-06.png');

        await linksPage.addLinkViaToolbar('abc.com');

        await expect.soft(page).toHaveScreenshot('Links-07.png');

        await linksPage.goToEndAndType('World');

        await expect.soft(editor.editor).toHaveScreenshot('Links-08.png');
    });
});
