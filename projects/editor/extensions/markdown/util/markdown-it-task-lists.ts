import type MarkdownIt from 'markdown-it';

let disableCheckboxes = true;
let useLabelWrapper = false;
let useLabelAfter = false;

export function tuiMarkdownItTaskList(md: any, options: any): void {
    if (options) {
        disableCheckboxes = !options.enabled;
        useLabelWrapper = !!options.label;
        useLabelAfter = !!options.labelAfter;
    }

    md.core.ruler.after('inline', 'github-task-lists', (state: any) => {
        const tokens = state.tokens;

        for (let i = 2; i < tokens.length; i++) {
            if (isTodoItem(tokens, i)) {
                todoify(tokens[i], state.Token);
                attrSet(
                    tokens[i - 2],
                    'class',
                    `task-list-item${!disableCheckboxes ? ' enabled' : ''}`,
                );
                attrSet(
                    tokens[parentToken(tokens, i - 2)],
                    'class',
                    'contains-task-list',
                );
            }
        }
    });
}

function attrSet(token: MarkdownIt.Token, name: string, value: string): void {
    const index = token.attrIndex(name);
    const attr: [string, string] = [name, value];

    if (index < 0) {
        token.attrPush(attr);
    } else if (token.attrs) {
        token.attrs[index] = attr;
    }
}

function parentToken(tokens: MarkdownIt.Token[], index: number): number {
    const targetLevel = (tokens[index]?.level ?? 0) - 1;

    for (let i = index - 1; i >= 0; i--) {
        if (tokens[i]?.level === targetLevel) {
            return i;
        }
    }

    return -1;
}

function isTodoItem(tokens: MarkdownIt.Token[], index: number): boolean {
    return (
        (tokens[index] &&
            isInline(tokens[index]!) &&
            tokens[index - 1] &&
            isParagraph(tokens[index - 1]!) &&
            tokens[index - 2] &&
            isListItem(tokens[index - 2]!) &&
            startsWithTodoMarkdown(tokens[index]!)) ??
        false
    );
}

function todoify(token: MarkdownIt.Token, TokenConstructor: any): void {
    token.children?.unshift(makeCheckbox(token, TokenConstructor));

    if (token.children?.[1]) {
        token.children[1].content = token.children[1].content.slice(3);
    }

    if (token.content) {
        token.content = token.content.slice(3);
    }

    if (useLabelWrapper) {
        if (useLabelAfter) {
            token.children?.pop();

            // Use large random number as id property of the checkbox.
            const id = `task-item-${Math.ceil(Math.random() * (10000 * 1000) - 1000)}`;

            if (token.children?.[0]) {
                token.children[0].content = `${token.children[0].content.slice(
                    0,
                    -1,
                )} id="${id}">`;
            }

            token.children?.push(afterLabel(token.content, id, TokenConstructor));
        } else {
            token.children?.unshift(beginLabel(TokenConstructor));
            token.children?.push(endLabel(TokenConstructor));
        }
    }
}

function makeCheckbox(token: MarkdownIt.Token, TokenConstructor: any): any {
    const checkbox = new TokenConstructor('html_inline', '', 0);
    const disabledAttr = disableCheckboxes ? ' disabled="" ' : '';

    if (token?.content.startsWith('[ ] ')) {
        checkbox.content = `<input class="task-list-item-checkbox"${disabledAttr}type="checkbox">`;
    } else if (token?.content.startsWith('[x] ') || token?.content.startsWith('[X] ')) {
        checkbox.content = `<input class="task-list-item-checkbox" checked=""${disabledAttr}type="checkbox">`;
    }

    return checkbox;
}

// these next two functions are kind of hacky; probably should really be a
// true block-level token with .tag=='label'
function beginLabel(TokenConstructor: any): MarkdownIt.Token {
    const token = new TokenConstructor('html_inline', '', 0);

    token.content = '<label>';

    return token;
}

function endLabel(TokenConstructor: any): MarkdownIt.Token {
    const token = new TokenConstructor('html_inline', '', 0);

    token.content = '</label>';

    return token;
}

function afterLabel(
    content: string,
    id: string,
    TokenConstructor: any,
): MarkdownIt.Token {
    const token = new TokenConstructor('html_inline', '', 0);

    token.content = `<label class="task-list-item-label" for="${id}">${content}</label>`;
    token.attrs = [{for: id}];

    return token;
}

function isInline(token: MarkdownIt.Token): boolean {
    return token.type === 'inline';
}

function isParagraph(token: MarkdownIt.Token): boolean {
    return token.type === 'paragraph_open';
}

function isListItem(token: MarkdownIt.Token): boolean {
    return token.type === 'list_item_open';
}

function startsWithTodoMarkdown(token: MarkdownIt.Token): boolean {
    // leading whitespace in a list item is already trimmed off by markdown-it
    return (
        token.content.startsWith('[ ] ') ||
        token.content.startsWith('[x] ') ||
        token.content.startsWith('[X] ')
    );
}
