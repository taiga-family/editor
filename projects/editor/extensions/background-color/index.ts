import {type Command, Extension, type GlobalAttributes} from '@tiptap/core';

export interface TuiBackgroundColorOptions {
    types: string[];
}

declare module '@tiptap/core' {
    interface Commands<ReturnType> {
        backgroundColor: {
            /**
             * Set the background color
             */
            setBackgroundColor(backgroundColor: string): ReturnType;
            /**
             * Unset the background color
             */
            unsetBackgroundColor(): ReturnType;
        };
    }
}

export const TuiBackgroundColor = Extension.create<TuiBackgroundColorOptions>({
    name: 'backgroundColor',

    addOptions(): TuiBackgroundColorOptions {
        return {
            types: ['textStyle'],
        };
    },

    addGlobalAttributes(): GlobalAttributes {
        return [
            {
                types: this.options.types,
                attributes: {
                    backgroundColor: {
                        default: null,
                        renderHTML: ({backgroundColor}) =>
                            backgroundColor
                                ? {
                                      style: `background-color: ${backgroundColor}`,
                                  }
                                : {},
                        parseHTML: ({style}) =>
                            style.backgroundColor.replaceAll(/['"]+/g, ''),
                        keepOnSplit: false,
                    },
                },
            },
        ];
    },

    addCommands(): {
        setBackgroundColor?(backgroundColor: string): Command;
        unsetBackgroundColor?(): Command;
    } {
        return {
            setBackgroundColor:
                (backgroundColor) =>
                ({chain}) =>
                    chain().setMark('textStyle', {backgroundColor}).run(),
            unsetBackgroundColor:
                () =>
                ({chain}) =>
                    chain().setMark('textStyle', {backgroundColor: null}).run(),
        };
    },
});
