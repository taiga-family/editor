import {type Node} from '@tiptap/pm/model';

export function tuiChildNodes(node: Node): readonly Node[] {
    return node.content.content;
}
