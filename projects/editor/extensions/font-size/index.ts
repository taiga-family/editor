import {Extension} from '@tiptap/core';

declare module '@tiptap/core' {
    interface Commands<ReturnType> {
        fontSize: {
            /**
             * Set the font size
             */
            setFontSize: (fontSize: string) => ReturnType;
            /**
             * Unset the font size
             */
            unsetFontSize: () => ReturnType;
        };
        textStyle: {
            /**
             * Remove spans without inline style attributes.
             * @example editor.commands.removeEmptyTextStyle()
             */
            removeEmptyTextStyle: () => ReturnType;
        };
    }
}

export interface TuiFontSizeOptions {
    types: string[];
}

export const TuiFontSizeExtension = Extension.create<TuiFontSizeOptions>({
    name: 'fontSize',

    addOptions(): TuiFontSizeOptions {
        return {types: ['textStyle']};
    },

    addGlobalAttributes() {
        return [
            {
                types: this.options.types,
                attributes: {
                    fontSize: {
                        default: null,
                        parseHTML: ({style}) => style.fontSize,
                        renderHTML: ({fontSize}) =>
                            fontSize ? {style: `font-size: ${fontSize}`} : {},
                    },
                },
            },
        ];
    },

    addCommands() {
        return {
            setFontSize:
                (fontSize: string) =>
                ({chain}) =>
                    chain().setMark('textStyle', {fontSize}).run(),
            unsetFontSize:
                () =>
                ({chain}) =>
                    chain()
                        .setMark('textStyle', {fontSize: null})
                        .removeEmptyTextStyle()
                        .run(),
        };
    },
});
