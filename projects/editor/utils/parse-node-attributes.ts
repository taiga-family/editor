import type {Attribute} from '@tiptap/core';

export function tuiParseNodeAttributes(
    attrs: string[],
): Record<string, Partial<Attribute>> {
    return attrs.reduce<Record<string, Partial<Attribute>>>((result, attribute) => {
        result[attribute] = {
            parseHTML: (element) => element?.getAttribute(`${attribute}`),
        };

        return result;
    }, {});
}
