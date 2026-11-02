import {TuiDemoPath} from '@demo/shared/routes';
import {expect, type Page, test} from '@playwright/test';

import {tuiGoto} from '../utils';

// Set the content directly in the form control (bypassing ProseMirror's insert
// filter) so dangerous HTML reaches the sanitizer in tui-editor-socket untouched.
async function tuiSetEditorContent(page: Page, html: string): Promise<void> {
    const set = await page.evaluate((payload) => {
        const ng = (window as any).ng;
        let element: HTMLElement | null = document.querySelector('tui-editor-socket');

        while (element) {
            const component = ng.getComponent(element);
            const control = component?.control;

            if (control && typeof control.setValue === 'function') {
                control.setValue(payload);

                return true;
            }

            element = element.parentElement;
        }

        return false;
    }, html);

    expect(set).toBe(true);
}

test.describe('Sanitize', () => {
    test('TUI_EDITOR_SANITIZER strips dangerous HTML in tui-editor-socket', async ({
        page,
    }) => {
        await tuiGoto(page, `/${TuiDemoPath.Sanitize}`);

        const socket = page.locator('tui-accordion tui-editor-socket');
        const html = await socket.evaluate((el) => el.innerHTML);

        expect(html).not.toContain('onerror');
        expect(html).not.toContain('javascript:alert');

        expect(html).toContain('https://google.com');
    });

    test('malicious HTML we add is cleaned in tui-editor-socket', async ({page}) => {
        await tuiGoto(page, `/${TuiDemoPath.Sanitize}`);

        const socket = page.locator('tui-accordion tui-editor-socket');

        await tuiSetEditorContent(
            page,
            /* HTML */ `
                <img
                    src="y"
                    onerror="alert(1)"
                />

                <a href="javascript:alert(3)">BadLink</a>
                <a href="https://example.com">OurSafeLink</a>
            `,
        );

        await expect
            .poll(async () => socket.evaluate((el) => el.innerHTML))
            .toContain('OurSafeLink');

        const html = await socket.evaluate((el) => el.innerHTML);

        expect(html).not.toContain('onerror');
        expect(html).not.toContain('javascript:alert');
        expect(html).not.toContain('<script');

        expect(html).toContain('https://example.com');
    });
});
