import {type AnyExtension} from '@tiptap/core';
import type MarkdownIt from 'markdown-it';
import {type MarkdownSerializer} from 'prosemirror-markdown';

import {type TuiMarkdownContext} from '../../extension';
import Bold from '../marks/bold';
import Code from '../marks/code';
import HTMLMark from '../marks/html';
import Italic from '../marks/italic';
import Link from '../marks/link';
import Strike from '../marks/strike';
import Blockquote from '../nodes/blockquote';
import BulletList from '../nodes/bullet-list';
import CodeBlock from '../nodes/code-block';
import HardBreak from '../nodes/hard-break';
import Heading from '../nodes/heading';
import HorizontalRule from '../nodes/horizontal-rule';
import HTMLNode from '../nodes/html';
import Image from '../nodes/image';
import ListItem from '../nodes/list-item';
import OrderedList from '../nodes/ordered-list';
import Paragraph from '../nodes/paragraph';
import Table from '../nodes/table';
import TaskItem from '../nodes/task-item';
import TaskList from '../nodes/task-list';
import Text from '../nodes/text';

export interface TuiMarkdownSpec {
    serialize?: MarkdownSerializer['marks'][string] | MarkdownSerializer['nodes'][string];
    parse?: {
        setup?(this: TuiMarkdownContext, md: MarkdownIt): void;
        updateDOM?(element: Element): void;
    };
}

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

export function tuiGetMarkdownSpec(extension: AnyExtension): TuiMarkdownSpec | null {
    const markdownSpec = extension.storage.markdown as TuiMarkdownSpec | undefined;

    const defaultMarkdownSpec = extensions.find((e) => e.name === extension.name)?.storage
        .markdown as TuiMarkdownSpec | undefined;

    return markdownSpec || defaultMarkdownSpec
        ? {
              ...defaultMarkdownSpec,
              ...markdownSpec,
          }
        : null;
}
