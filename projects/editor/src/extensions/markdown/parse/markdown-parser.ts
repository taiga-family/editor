import type {Editor} from '@tiptap/core';
import MarkdownIt from 'markdown-it';
// @ts-ignore
import type {RenderRule} from 'markdown-it/lib/renderer';

import {tuiElementFromString, tuiExtractElement, tuiUnwrapElement} from '../util/dom';
import {tuiGetMarkdownSpec} from '../util/extensions';

export class TuiEditorMarkdownParser {
    protected readonly md: MarkdownIt;

    constructor(
        protected readonly editor: Editor,
        {html, linkify, breaks}: MarkdownIt.Options,
    ) {
        this.md = this.withPatchedRenderer(
            MarkdownIt({
                html,
                linkify,
                breaks,
            }),
        );
    }

    protected parse(content: unknown, {inline}: Record<string, any> = {}): string {
        if (typeof content === 'string') {
            this.editor.extensionManager.extensions.forEach(extension =>
                tuiGetMarkdownSpec(extension)?.parse?.setup?.call(
                    {editor: this.editor, options: extension.options},
                    this.md,
                ),
            );

            const renderedHTML = this.md.render(content);
            const element = tuiElementFromString(renderedHTML);

            this.editor.extensionManager.extensions.forEach(extension =>
                tuiGetMarkdownSpec(extension)?.parse?.updateDOM?.call(
                    {editor: this.editor, options: extension.options},
                    element,
                ),
            );

            this.normalizeDOM(element, {inline, content});

            return element.innerHTML;
        }

        return content as string;
    }

    protected normalizeDOM(
        node: Element,
        {inline, content}: Record<string, any>,
    ): Element {
        this.normalizeBlocks(node);

        // remove all \n appended by markdown-it
        node.querySelectorAll('*').forEach(el => {
            if (el.nextSibling?.nodeType === Node.TEXT_NODE && !el.closest('pre')) {
                el.nextSibling.textContent =
                    el.nextSibling.textContent?.replace(/^\n/, '') ?? '';
            }
        });

        if (inline) {
            this.normalizeInline(node, content);
        }

        return node;
    }

    protected normalizeBlocks(node: Element): void {
        const blocks = Object.values(this.editor.schema.nodes).filter(
            node => node.isBlock,
        );

        const selector = blocks
            .map(block => block.spec.parseDOM?.map(spec => spec.tag))
            .flat()
            .filter(Boolean)
            .join(',');

        if (!selector) {
            return;
        }

        Array.from(node.querySelectorAll(selector)).forEach(el => {
            if (el.parentElement?.matches('p')) {
                tuiExtractElement(el);
            }
        });
    }

    protected normalizeInline(node: Element, content: string): void {
        if (node.firstElementChild?.matches('p')) {
            const firstParagraph = node.firstElementChild;
            const {nextElementSibling} = firstParagraph;
            const startSpaces = content.match(/^\s+/)?.[0] ?? '';
            const endSpaces = !nextElementSibling ? content.match(/\s+$/)?.[0] ?? '' : '';

            if (content.match(/^\n\n/)) {
                firstParagraph.innerHTML = `${firstParagraph.innerHTML}${endSpaces}`;

                return;
            }

            tuiUnwrapElement(firstParagraph);

            node.innerHTML = `${startSpaces}${node.innerHTML}${endSpaces}`;
        }
    }

    protected withPatchedRenderer(md: MarkdownIt): MarkdownIt {
        const withoutNewLine =
            (renderer: RenderRule | undefined) =>
            (...args: any[]): string => {
                // @ts-ignore
                const rendered = renderer?.(...args);

                if (rendered === '\n') {
                    return rendered;
                }

                if (rendered?.endsWith('\n')) {
                    return rendered.slice(0, -1);
                }

                return rendered ?? '';
            };

        md.renderer.rules.hardbreak = withoutNewLine(md.renderer.rules.hardbreak);
        md.renderer.rules.softbreak = withoutNewLine(md.renderer.rules.softbreak);
        md.renderer.rules.fence = withoutNewLine(md.renderer.rules.fence);
        md.renderer.rules.code_block = withoutNewLine(md.renderer.rules.code_block);
        md.renderer.renderToken = withoutNewLine(
            md.renderer.renderToken.bind(md.renderer),
        );

        return md;
    }
}
