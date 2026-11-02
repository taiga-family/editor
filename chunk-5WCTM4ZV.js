import {
  __objRest
} from "./chunk-KWSTWQNB.js";

// node_modules/@tiptap/core/dist/jsx-runtime/jsx-runtime.js
var jsxElements = /* @__PURE__ */ new WeakSet();
var jsxFragments = /* @__PURE__ */ new WeakSet();
function createJSXElement(spec) {
  const element = spec;
  jsxElements.add(element);
  return element;
}
function isJSXElement(value) {
  return Array.isArray(value) && jsxElements.has(value);
}
function flattenFragmentChildren(children) {
  return children.flatMap((child) => {
    if (child == null) return [];
    if (Array.isArray(child) && jsxFragments.has(child) && !isJSXElement(child)) return flattenFragmentChildren(child);
    return [child];
  });
}
function render(tag, attributes) {
  if (tag === "slot") return 0;
  if (tag instanceof Function) {
    const result = tag(attributes);
    if (Array.isArray(result) && !isJSXElement(result) && !jsxFragments.has(result)) return createJSXElement(result);
    return result;
  }
  const _a = attributes !== null && attributes !== void 0 ? attributes : {}, {
    children
  } = _a, rest = __objRest(_a, [
    "children"
  ]);
  if (tag === "svg") throw new Error("SVG elements are not supported in the JSX syntax, use the array syntax instead");
  if (Array.isArray(children)) {
    if (isJSXElement(children)) return createJSXElement([tag, rest, children]);
    if (children.length === 0) return createJSXElement([tag, rest]);
    const flattenedChildren = flattenFragmentChildren(children);
    if (flattenedChildren.length === 0) return createJSXElement([tag, rest]);
    return createJSXElement([tag, rest, ...flattenedChildren]);
  }
  if (children !== void 0 && children !== null) return createJSXElement([tag, rest, children]);
  return createJSXElement([tag, rest]);
}
var h = (tag, attributes) => render(tag, attributes);

export {
  h
};
//# sourceMappingURL=chunk-5WCTM4ZV.js.map
