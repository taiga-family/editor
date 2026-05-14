import {type Mark, type Node} from '@tiptap/pm/model';
import {
    type MarkdownSerializer,
    MarkdownSerializerState as BaseMarkdownSerializerState,
} from 'prosemirror-markdown';

import {tuiTrimInline} from '../util/markdown';

interface TuiMarkdownInline {
    start: number;
    end?: number;
    delimiter: string;
}

export class TuiMarkdownSerializerState extends BaseMarkdownSerializerState {
    public inTable = false;
    public inlines: TuiMarkdownInline[];
    declare public out: string;
    declare public marks: MarkdownSerializer['marks'];

    constructor(
        nodes: MarkdownSerializer['nodes'],
        marks: MarkdownSerializer['marks'],
        options: BaseMarkdownSerializerState['options'] | undefined,
    ) {
        // @ts-ignore — MarkdownSerializerState has no typed constructor in prosemirror-markdown declarations
        super(nodes, marks, options ?? {});

        this.inlines = [];
    }

    public override render(node: Node, parent: Node, index: number): void {
        super.render(node, parent, index);
        const top = this.inlines[this.inlines.length - 1];

        if (top?.start && top.end) {
            const {delimiter, start, end} = this.normalizeInline(top);

            this.out = tuiTrimInline({
                text: this.out,
                delim: delimiter,
                from: start,

                to: end!,
            });
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

        if (info?.expelEnclosingWhitespace) {
            if (open) {
                this.inlines.push({
                    start: this.out.length,
                    delimiter: typeof info.open === 'string' ? info.open : '',
                });
            } else {
                const top = this.inlines.pop();

                if (top) {
                    this.inlines.push({
                        ...top,
                        end: this.out.length,
                    });
                }
            }
        }

        return super.markString(mark, open, parent, index);
    }

    protected normalizeInline(inline: TuiMarkdownInline): TuiMarkdownInline {
        let {start} = inline;

        while (/\s/.exec(this.out.charAt(start))) {
            start++;
        }

        return {...inline, start};
    }
}
