import "./chunk-4MWRP73S.js";

// projects/demo/src/app/pages/mention/examples/1/mention/filter.ts?raw
var filter_default = "import {Pipe, type PipeTransform} from '@angular/core';\n\nimport {type User} from './user';\n\n@Pipe({name: 'filterItems'})\nexport class FilterItems implements PipeTransform {\n    public transform(items: readonly User[], search?: string): readonly User[] {\n        return search?.length\n            ? items.filter(\n                  ({name, login}) =>\n                      login.toLocaleLowerCase().startsWith(search.toLocaleLowerCase()) ||\n                      name.toLocaleLowerCase().startsWith(search.toLocaleLowerCase()),\n              )\n            : items;\n    }\n}\n";
export {
  filter_default as default
};
//# sourceMappingURL=chunk-Z6M4TWTM.js.map
