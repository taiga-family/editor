import Bold from '@taiga-ui/editor/extensions/markdown/extensions/marks/bold';
import Code from '@taiga-ui/editor/extensions/markdown/extensions/marks/code';
import HTMLMark from '@taiga-ui/editor/extensions/markdown/extensions/marks/html';
import Italic from '@taiga-ui/editor/extensions/markdown/extensions/marks/italic';
import Link from '@taiga-ui/editor/extensions/markdown/extensions/marks/link';
import Strike from '@taiga-ui/editor/extensions/markdown/extensions/marks/strike';
import Blockquote from '@taiga-ui/editor/extensions/markdown/extensions/nodes/blockquote';
import BulletList from '@taiga-ui/editor/extensions/markdown/extensions/nodes/bullet-list';
import CodeBlock from '@taiga-ui/editor/extensions/markdown/extensions/nodes/code-block';
import HardBreak from '@taiga-ui/editor/extensions/markdown/extensions/nodes/hard-break';
import Heading from '@taiga-ui/editor/extensions/markdown/extensions/nodes/heading';
import HorizontalRule from '@taiga-ui/editor/extensions/markdown/extensions/nodes/horizontal-rule';
import HTMLNode from '@taiga-ui/editor/extensions/markdown/extensions/nodes/html';
import Image from '@taiga-ui/editor/extensions/markdown/extensions/nodes/image';
import ListItem from '@taiga-ui/editor/extensions/markdown/extensions/nodes/list-item';
import OrderedList from '@taiga-ui/editor/extensions/markdown/extensions/nodes/ordered-list';
import Paragraph from '@taiga-ui/editor/extensions/markdown/extensions/nodes/paragraph';
import Table from '@taiga-ui/editor/extensions/markdown/extensions/nodes/table';
import TaskItem from '@taiga-ui/editor/extensions/markdown/extensions/nodes/task-item';
import TaskList from '@taiga-ui/editor/extensions/markdown/extensions/nodes/task-list';
import Text from '@taiga-ui/editor/extensions/markdown/extensions/nodes/text';

const extensions = [
    Blockquote,
    BulletList,
    CodeBlock,
    HardBreak,
    Heading,
    HorizontalRule,
    HTMLNode,
    Image,
    ListItem,
    OrderedList,
    Paragraph,
    Table,
    TaskItem,
    TaskList,
    Text,
    Bold,
    Code,
    HTMLMark,
    Italic,
    Link,
    Strike,
] as const;

export function tuiGetMarkdownSpec(extension: any): any {
    const markdownSpec = extension.storage?.markdown;
    const defaultMarkdownSpec = extensions.find((e) => e.name === extension.name)?.storage
        .markdown;

    if (markdownSpec || defaultMarkdownSpec) {
        return {
            ...defaultMarkdownSpec,
            ...markdownSpec,
        };
    }

    return null;
}
