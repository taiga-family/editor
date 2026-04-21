import "./chunk-4MWRP73S.js";

// projects/demo/src/app/pages/custom-tool/span/examples/1/thread-span.ts?raw
var thread_span_default = "import {Mark} from '@tiptap/core';\n\nexport const ThreadSpan = Mark.create({\n    name: 'threadSpan',\n\n    renderHTML({HTMLAttributes}) {\n        return ['span', HTMLAttributes, 0];\n    },\n\n    parseHTML() {\n        return [{tag: 'span[data-thread-id]'}];\n    },\n\n    addAttributes() {\n        return {\n            class: {default: null},\n            'data-thread-id': {default: null},\n        };\n    },\n});\n";
export {
  thread_span_default as default
};
//# sourceMappingURL=chunk-PKRXWC72.js.map
