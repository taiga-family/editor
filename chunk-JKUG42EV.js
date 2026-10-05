import "./chunk-KWSTWQNB.js";

// projects/demo/src/app/pages/custom-tool/paste-emoji/examples/1/smiles-tool/emoji.extension.ts?raw
var emoji_extension_default = "import {Extension, type GlobalAttributes} from '@tiptap/core';\n\nexport const EmojiExtension = Extension.create({\n    name: 'emoji',\n    addGlobalAttributes(): GlobalAttributes {\n        return [\n            {\n                types: ['paragraph'],\n                attributes: {\n                    dataType: {\n                        default: '',\n                        keepOnSplit: false,\n                        renderHTML: ({dataType}) =>\n                            dataType === 'emoji' ? {style: 'display: inline'} : null,\n                        parseHTML: (element) => element.getAttribute('data-type'),\n                    },\n                },\n            },\n        ];\n    },\n});\n";
export {
  emoji_extension_default as default
};
//# sourceMappingURL=chunk-JKUG42EV.js.map
