import {Extension} from '@tiptap/core';
import {Suggestion} from '@tiptap/suggestion';

export const TuiSuggestionList = Extension.create({
    name: 'commands',

    addOptions() {
        return {
            suggestion: {
                char: '/',
                command: ({editor, range, props}: any) => {
                    console.log(editor, range, props);

                    props.command({editor, range});
                },
            },
        };
    },

    addProseMirrorPlugins() {
        console.log(Suggestion);

        return [
            Suggestion({
                editor: this.editor,
                ...this.options.suggestion,
            }),
        ];
    },
});
