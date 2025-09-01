import {TuiDemoPath} from '@demo/shared/routes';
import {expect, test} from '@playwright/test';

import {GroupsPO} from '../utils/page-objects/groups.page';

test.describe('Groups', () => {
    test.beforeEach(async ({page}) => {
        const groupsPage = new GroupsPO(page);

        await groupsPage.gotoDemoPath(TuiDemoPath.Groups);
    });

    test('simple nested group', async ({page}) => {
        const groupsPage = new GroupsPO(page);
        const editor = groupsPage.getNestedGroupsEditor();

        await expect.soft(editor.editor).toHaveScreenshot('Groups-01.png');
    });

    test('draggable groups', async ({page}) => {
        const groupsPage = new GroupsPO(page);
        const editor = groupsPage.getDraggableGroupsEditor();

        await expect.soft(editor.editor).toHaveScreenshot('Groups-02.png');
        await groupsPage.waitForTimeout(300);

        await groupsPage.addGroup();

        await expect.soft(editor.editor).toHaveScreenshot('Groups-03.png');

        await groupsPage.clearContent();

        await expect.soft(editor.editor).toHaveScreenshot('Groups-04.png');

        await groupsPage.addGroup();
        await groupsPage.typeWithFocus('12345');
        await groupsPage.addGroup();

        await groupsPage.addNewLine();
        await groupsPage.typeWithFocus('456');
        await groupsPage.waitForTimeout(300);

        await expect.soft(editor.editor).toHaveScreenshot('Groups-05.png');
    });
});
