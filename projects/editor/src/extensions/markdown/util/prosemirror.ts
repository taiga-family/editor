export function tuiChildNodes(node: any): any[] {
    return node?.content?.content ?? [];
}
