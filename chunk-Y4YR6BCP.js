import {
  __objRest
} from "./chunk-KWSTWQNB.js";

// node_modules/@tiptap/core/dist/jsx-runtime/jsx-runtime.js
var h = (tag, attributes) => {
  if (tag === "slot") {
    return 0;
  }
  if (tag instanceof Function) {
    return tag(attributes);
  }
  const _a = attributes != null ? attributes : {}, {
    children
  } = _a, rest = __objRest(_a, [
    "children"
  ]);
  if (tag === "svg") {
    throw new Error("SVG elements are not supported in the JSX syntax, use the array syntax instead");
  }
  return [tag, rest, children];
};

export {
  h
};
//# sourceMappingURL=chunk-Y4YR6BCP.js.map
