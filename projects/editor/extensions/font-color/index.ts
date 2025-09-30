import {type Command, Extension, type GlobalAttributes} from '@tiptap/core';

export interface TuiFontColorOptions {
    types: string[];
}

declare module '@tiptap/core' {
    interface Commands<ReturnType> {
        fontColor: {
            /**
             * Set the font color
             */
            setFontColor: (fontColor: string) => ReturnType;
            /**
             * Unset the font color
             */
            unsetFontColor: () => ReturnType;
        };
    }
}

export const TuiFontColor = Extension.create<TuiFontColorOptions>({
    name: 'fontColor',

    addOptions(): TuiFontColorOptions {
        return {
            types: ['textStyle'],
        };
    },

    addGlobalAttributes(): GlobalAttributes {
        return [
            {
                types: this.options.types,
                attributes: {
                    fontColor: {
                        default: null,
                        renderHTML: ({fontColor}) =>
                            fontColor
                                ? {
                                      style: `color: ${fontColor}`,
                                  }
                                : {},
                        parseHTML: ({style}) => style.color.replaceAll(/['"]+/g, ''),
                        keepOnSplit: false,
                    },
                },
            },
        ];
    },

    addCommands(): {
        setFontColor?: (fontColor: string) => Command;
        unsetFontColor?: () => Command;
    } {
        return {
            setFontColor:
                (fontColor) =>
                ({chain}) =>
                    chain().setMark('textStyle', {fontColor}).run(),
            unsetFontColor:
                () =>
                ({chain}) =>
                    chain().setMark('textStyle', {fontColor: null}).run(),
        };
    },
});
