import {expect, type Locator} from '@playwright/test';

import {TuiEditLinkPO} from './edit-link.po';

export class TuiEditorPO {
    public readonly toolbar = this.host.locator('tui-toolbar').first();
    public readonly link: TuiEditLinkPO;

    constructor(public readonly host: Locator) {
        this.link = new TuiEditLinkPO(host.page());
    }

    public async contenteditable(): Promise<Locator> {
        await expect(this.host).toHaveAttribute('data-loaded', 'true', {timeout: 10_000});

        if (await this.toolbar.isVisible()) {
            const box = await this.toolbar.boundingBox();

            expect(box?.height).toBeGreaterThan(0);
        }

        return this.host.locator('[contenteditable].ProseMirror');
    }

    public async placeCaretAtEnd(locator?: Locator): Promise<void> {
        const target = locator ?? (await this.contenteditable());

        await target.evaluate((element) => {
            const editable =
                element.closest<HTMLElement>('[contenteditable]') ??
                (element as HTMLElement);

            const document = element.ownerDocument;
            const range = document.createRange();
            const selection = document.getSelection();

            editable.focus();

            if (element === editable) {
                range.selectNodeContents(editable);
                range.collapse(false);
            } else {
                const walker = document.createTreeWalker(element, NodeFilter.SHOW_TEXT);
                let lastTextNode: Node | null = null;

                while (walker.nextNode()) {
                    lastTextNode = walker.currentNode;
                }

                if (lastTextNode) {
                    range.setStart(lastTextNode, lastTextNode.textContent?.length ?? 0);
                } else {
                    range.selectNodeContents(element);
                    range.collapse(false);
                }
            }

            selection?.removeAllRanges();
            selection?.addRange(range);
            document.dispatchEvent(new Event('selectionchange'));
        });
    }
}
