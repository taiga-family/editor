import {type Editor, type Mark as Mark2, type Node as Node2} from '@tiptap/core';
import {type Fragment, type Node} from '@tiptap/pm/model';
import {type MarkdownSerializer} from 'prosemirror-markdown';

import HTMLMark from '../extensions/marks/html';
import HardBreak from '../extensions/nodes/hard-break';
import HTMLNode from '../extensions/nodes/html';
import {tuiGetMarkdownSpec} from '../extensions/util';
import {TuiMarkdownSerializerState} from './state';

export class TuiMarkdownSerializer {
    constructor(protected readonly editor: Editor) {}

    public get nodes(): MarkdownSerializer['nodes'] {
        return {
            ...Object.fromEntries(
                Object.keys(this.editor.schema.nodes).map((name) => [
                    name,
                    this.serializeNode(HTMLNode),
                ]),
            ),
            ...Object.fromEntries(
                this.editor.extensionManager.extensions
                    .filter(
                        (extension) =>
                            extension.type === 'node' &&
                            this.serializeNode(extension as Node2),
                    )
                    .map((extension) => [
                        extension.name,
                        this.serializeNode(extension as Node2),
                    ]),
            ),
        } as unknown as MarkdownSerializer['nodes'];
    }

    public get marks(): MarkdownSerializer['marks'] {
        return {
            ...Object.fromEntries(
                Object.keys(this.editor.schema.marks).map((name) => [
                    name,
                    this.serializeMark(HTMLMark),
                ]),
            ),
            ...Object.fromEntries(
                this.editor.extensionManager.extensions
                    .filter(
                        (extension) =>
                            extension.type === 'mark' &&
                            this.serializeMark(extension as Mark2),
                    )
                    .map((extension) => [
                        extension.name,
                        this.serializeMark(extension as Mark2),
                    ]),
            ),
        } as unknown as MarkdownSerializer['marks'];
    }

    public serialize(content: Fragment | Node): string {
        const state = new TuiMarkdownSerializerState(this.nodes, this.marks, {
            hardBreakNodeName: HardBreak.name,
        });

        state.renderContent(content as Node);

        return state.out;
    }

    public serializeNode(node: Node2): MarkdownSerializer['nodes'][string] | undefined {
        const serialize = tuiGetMarkdownSpec(node)?.serialize;

        return typeof serialize === 'function'
            ? serialize.bind({editor: this.editor, options: node.options})
            : undefined;
    }

    public serializeMark(mark: Mark2): MarkdownSerializer['marks'][string] | null {
        const serialize = tuiGetMarkdownSpec(mark)?.serialize;

        return !serialize || typeof serialize === 'function'
            ? null
            : {
                  ...serialize,
                  open:
                      typeof serialize.open === 'function'
                          ? serialize.open.bind({
                                editor: this.editor,
                                options: mark.options,
                            })
                          : serialize.open,
                  close:
                      typeof serialize.close === 'function'
                          ? serialize.close.bind({
                                editor: this.editor,
                                options: mark.options,
                            })
                          : serialize.close,
              };
    }
}
