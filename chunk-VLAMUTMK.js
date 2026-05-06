import "./chunk-4MWRP73S.js";

// projects/demo/src/app/pages/markdown/examples/1/make-markdown.ts?raw
var make_markdown_default = "import {Pipe, type PipeTransform} from '@angular/core';\nimport {Converter} from 'showdown';\n\n@Pipe({name: 'makeMarkdown'})\nexport class MakeMarkdownPipe implements PipeTransform {\n    public transform(html?: string | null): any {\n        return new Converter().makeMarkdown(\n            html?.replaceAll('&lt;', '<').replaceAll('&gt;', '>') ?? '',\n        );\n    }\n}\n";
export {
  make_markdown_default as default
};
//# sourceMappingURL=chunk-VLAMUTMK.js.map
