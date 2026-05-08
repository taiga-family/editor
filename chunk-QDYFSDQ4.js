import"./chunk-DAQOROHW.js";var r=`import {Mark} from '@tiptap/core';

export const ThreadSpan = Mark.create({
    name: 'threadSpan',

    renderHTML({HTMLAttributes}) {
        return ['span', HTMLAttributes, 0];
    },

    parseHTML() {
        return [{tag: 'span[data-thread-id]'}];
    },

    addAttributes() {
        return {
            class: {default: null},
            'data-thread-id': {default: null},
        };
    },
});
`;export{r as default};
