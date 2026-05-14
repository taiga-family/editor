import {type CommandProps, Extension, type RawCommands} from '@tiptap/core';

declare module '@tiptap/core' {
    interface Commands<ReturnType> {
        markdownTightLists: {
            toggleTight(tight?: boolean | null): ReturnType;
        };
    }
}

export const TuiMarkdownTightLists = Extension.create({
    name: 'markdownTightLists',
    addOptions: () => ({
        tight: true,
        tightClass: 'tight',
        listTypes: ['bulletList', 'orderedList'],
    }),
    addGlobalAttributes() {
        return [
            {
                types: this.options.listTypes,
                attributes: {
                    tight: {
                        default: this.options.tight,
                        parseHTML: (element) =>
                            element.getAttribute('data-tight') === 'true' ||
                            !element.querySelector('p'),
                        renderHTML: (attributes) => ({
                            class: attributes.tight ? this.options.tightClass : null,
                            'data-tight': attributes.tight ? 'true' : null,
                        }),
                    },
                },
            },
        ];
    },
    addCommands(): Partial<RawCommands> {
        return {
            toggleTight:
                (tight: boolean | null = null) =>
                ({editor, commands}: CommandProps) =>
                    this.options.listTypes.some((name) => {
                        if (!editor.isActive(name)) {
                            return false;
                        }

                        const attrs = editor.getAttributes(name);

                        return commands.updateAttributes(name, {
                            tight: tight ?? !attrs.tight,
                        });
                    }),
        };
    },
});
