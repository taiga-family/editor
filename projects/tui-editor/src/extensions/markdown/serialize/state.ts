import {MarkdownSerializerState as BaseMarkdownSerializerState} from 'prosemirror-markdown';
import type {Mark, Node} from 'prosemirror-model';

import {tuiTrimInline} from '../util/markdown';

export class TuiMarkdownSerializerState extends BaseMarkdownSerializerState {
    public inTable = false;
    public inlines: any[];
    public out: any;
    public marks: any;

    constructor(
        nodes: readonly Node[],
        marks: readonly Mark[],
        options: BaseMarkdownSerializerState['options'],
    ) {
        // @ts-ignore
        super(nodes, marks, options ?? {});

        this.inlines = [];
    }

    public override render(node: Node, parent: Node, index: number): void {
        super.render(node, parent, index);
        const top = this.inlines[this.inlines.length - 1];

        if (top?.start && top?.end) {
            const {delimiter, start, end} = this.normalizeInline(top);

            this.out = tuiTrimInline(this.out, delimiter, start, end);
            this.inlines.pop();
        }
    }

    public override markString(
        mark: Mark,
        open: boolean,
        parent: Node,
        index: number,
    ): string {
        const info = this.marks[mark.type.name];

        if (info.expelEnclosingWhitespace) {
            if (open) {
                this.inlines.push({
                    start: this.out.length,
                    delimiter: info.open,
                });
            } else {
                const top = this.inlines.pop();

                this.inlines.push({
                    ...top,
                    end: this.out.length,
                });
            }
        }

        return super.markString(mark, open, parent, index);
    }

    protected normalizeInline(inline: any): any {
        let {start} = inline;

        while (this.out.charAt(start).match(/\s/)) {
            start++;
        }

        return {...inline, start};
    }
}
