import {
  Mark2 as Mark
} from "./chunk-LXNO5FKD.js";
import "./chunk-KWSTWQNB.js";

// projects/demo/src/app/pages/custom-tool/span/examples/1/thread-span.ts
var ThreadSpan = Mark.create({
  name: "threadSpan",
  renderHTML({ HTMLAttributes }) {
    return ["span", HTMLAttributes, 0];
  },
  parseHTML() {
    return [{ tag: "span[data-thread-id]" }];
  },
  addAttributes() {
    return {
      class: { default: null },
      "data-thread-id": { default: null }
    };
  }
});
export {
  ThreadSpan
};
//# sourceMappingURL=chunk-6OCWBOAH.js.map
