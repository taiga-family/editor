import {tuiIsElement, tuiIsTextNode} from '@taiga-ui/cdk';

export function tuiIsNodeIn(node: Node, selector: string): boolean {
    return tuiIsTextNode(node)
        ? !!node.parentElement?.closest(selector)
        : tuiIsElement(node) && !!node.closest(selector);
}
