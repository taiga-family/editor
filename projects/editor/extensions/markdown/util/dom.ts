export function tuiElementFromString(value: any): HTMLElement {
    return new window.DOMParser().parseFromString(`<body>${value}</body>`, 'text/html')
        .body;
}

export function tuiExtractElement(node: Node): void {
    const parent = node.parentElement;

    const prepend = parent?.cloneNode();

    while (parent?.firstChild && parent.firstChild !== node) {
        prepend?.appendChild(parent.firstChild);
    }

    if ((prepend?.childNodes?.length ?? 0) > 0 && prepend) {
        parent?.parentElement?.insertBefore(prepend, parent);
    }

    parent?.parentElement?.insertBefore(node, parent);

    if (parent?.childNodes.length === 0) {
        parent.remove();
    }
}

export function tuiUnwrapElement(node: Node): void {
    const parent = node.parentNode;

    while (node?.firstChild) {
        parent?.insertBefore(node.firstChild, node);
    }

    parent?.removeChild(node);
}

export function tuiEscapeHTML(value?: string): string {
    return value?.replace(/</g, '&lt;').replaceAll('>', '&gt;') ?? '';
}
