import type {Editor, Mark as Mark2, Node as Node2} from '@tiptap/core';
import type {Mark, Node} from 'prosemirror-model';

import HTMLMark from '../extensions/marks/html';
import HardBreak from '../extensions/nodes/hard-break';
import HTMLNode from '../extensions/nodes/html';
import {tuiGetMarkdownSpec} from '../util/extensions';
import {TuiMarkdownSerializerState} from './state';

export class TuiMarkdownSerializer {
    constructor(protected readonly editor: Editor) {}

    public get nodes(): readonly Node[] {
        // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
        return {
            ...Object.fromEntries(
                Object.keys(this.editor.schema.nodes).map(name => [
                    name,
                    this.serializeNode(HTMLNode),
                ]),
            ),
            ...Object.fromEntries(
                this.editor.extensionManager.extensions
                    .filter(
                        extension =>
                            extension.type === 'node' &&
                            this.serializeNode(extension as any),
                    )
                    .map(extension => [
                        extension.name,
                        this.serializeNode(extension as any),
                    ]) ?? [],
            ),
        } as Node[];
    }

    public get marks(): readonly Mark[] {
        // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
        return {
            ...Object.fromEntries(
                Object.keys(this.editor.schema.marks).map(name => [
                    name,
                    this.serializeMark(HTMLMark),
                ]),
            ),
            ...Object.fromEntries(
                this.editor.extensionManager.extensions
                    .filter(
                        extension =>
                            extension.type === 'mark' &&
                            this.serializeMark(extension as any),
                    )
                    .map(extension => [
                        extension.name,
                        this.serializeMark(extension as any),
                    ]) ?? [],
            ),
        } as Mark[];
    }

    public serialize(content: Node): any {
        const state = new TuiMarkdownSerializerState(this.nodes, this.marks, {
            hardBreakNodeName: HardBreak.name,
        });

        state.renderContent(content);

        return state.out;
    }

    public serializeNode(node: Node2): any {
        return tuiGetMarkdownSpec(node)?.serialize?.bind({
            editor: this.editor,
            options: node.options,
        });
    }

    public serializeMark(mark: Mark2): any {
        const serialize = tuiGetMarkdownSpec(mark)?.serialize;

        return serialize
            ? {
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
              }
            : null;
    }
}
