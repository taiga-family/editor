import {TuiDemoPath} from '@demo/shared/routes';
import {expect, test} from '@playwright/test';

import {TuiEditorPO, tuiGoto} from '../utils';

const NESTED_CONTAINER = '#simple-create-nested-groups';
const DRAGGABLE_CONTAINER = '#draggable-groups-the-looks-like-in--notion';

test.describe('Insert/Remove group', () => {
    test.beforeEach(async ({page}) => {
        await tuiGoto(page, TuiDemoPath.Groups);
    });

    test('remove group button is disabled when caret is outside any group', async ({
        page,
    }) => {
        const editor = new TuiEditorPO(page.locator(`${NESTED_CONTAINER} tui-editor`));

        await editor.host.getByText('This is a boring paragraph.').click();

        await expect(
            page.locator(
                `${NESTED_CONTAINER} [automation-id="toolbar__group-remove-button"]`,
            ),
        ).toBeDisabled();
    });

    test('inserting a group via the toolbar button adds a new group node', async ({
        page,
    }) => {
        const editor = new TuiEditorPO(page.locator(`${DRAGGABLE_CONTAINER} tui-editor`));
        const groups = editor.host.locator('div[data-type="group"]');

        await expect(groups).not.toHaveCount(0);
        const initialCount = await groups.count();

        await page
            .locator(`${DRAGGABLE_CONTAINER} [automation-id="toolbar__group-add-button"]`)
            .focus();
        await page.keyboard.press('Enter');

        await expect(groups).toHaveCount(initialCount + 1);
        await expect.soft(editor.host).toHaveScreenshot('InsertRemoveGroup-01.png');
    });

    test('removing a group deletes the group and its content', async ({page}) => {
        const editor = new TuiEditorPO(page.locator(`${DRAGGABLE_CONTAINER} tui-editor`));
        const contenteditable = await editor.contenteditable();
        const groups = editor.host.locator('div[data-type="group"]');

        await expect(groups).not.toHaveCount(0);
        const initialCount = await groups.count();

        await page
            .locator(`${DRAGGABLE_CONTAINER} [automation-id="toolbar__group-add-button"]`)
            .focus();
        await page.keyboard.press('Enter');

        await contenteditable.focus();
        await page.keyboard.type('Removable group content');

        await expect(groups.filter({hasText: 'Removable group content'})).toHaveCount(1);

        await page
            .locator(
                `${DRAGGABLE_CONTAINER} [automation-id="toolbar__group-remove-button"]`,
            )
            .focus();
        await page.keyboard.press('Enter');

        await expect(groups).toHaveCount(initialCount);
        await expect(editor.host).not.toContainText('Removable group content');
        await expect.soft(editor.host).toHaveScreenshot('InsertRemoveGroup-02.png');
    });

    test('inserting a group inside a nested group nests it deeper', async ({page}) => {
        const editor = new TuiEditorPO(page.locator(`${NESTED_CONTAINER} tui-editor`));
        const groups = editor.host.locator('div[data-type="group"]');

        await expect(groups).toHaveCount(3);

        const deepest = groups.filter({hasText: 'But can we go deeper?'}).last();

        await editor.placeCaretAtEnd(deepest);
        await page.keyboard.press('Enter');

        await page
            .locator(`${NESTED_CONTAINER} [automation-id="toolbar__group-add-button"]`)
            .focus();
        await page.keyboard.press('Enter');

        await expect(groups).toHaveCount(4);

        const newGroup = deepest.locator(':scope div[data-type="group"]');

        await expect(newGroup).toHaveCount(1);
        await editor.placeCaretAtEnd(newGroup.locator('p'));
        await page.keyboard.type('Nested group content');

        await page.mouse.move(0, 0);
        await expect.soft(editor.host).toHaveScreenshot('InsertRemoveGroup-03.png');
    });

    test('removing a nested group deletes it together with its nested children', async ({
        page,
    }) => {
        const editor = new TuiEditorPO(page.locator(`${NESTED_CONTAINER} tui-editor`));
        const groups = editor.host.locator('div[data-type="group"]');

        await expect(groups).toHaveCount(3);

        await editor.host.getByText('And a nested paragraph.').click();

        await page
            .locator(`${NESTED_CONTAINER} [automation-id="toolbar__group-remove-button"]`)
            .focus();
        await page.keyboard.press('Enter');

        await expect(groups).toHaveCount(1);

        await page.mouse.move(0, 0);
        await expect.soft(editor.host).toHaveScreenshot('InsertRemoveGroup-04.png');
    });
});
