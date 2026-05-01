import {
  tuiParseColor
} from "./chunk-LBJNUVBM.js";
import {
  tuiIsNodeIn
} from "./chunk-P325F6NW.js";
import {
  Node,
  getHTMLFromFragment
} from "./chunk-U65UEYRO.js";

// projects/editor/utils/delete-nodes.ts
function tuiDeleteNode(state, dispatch, nodeName) {
  const position = state.selection.$anchor;
  for (let depth = position.depth; depth > 0; depth--) {
    const node = position.node(depth);
    if (node.type.name === nodeName) {
      if (dispatch) {
        dispatch(state.tr.delete(position.before(depth), position.after(depth)).scrollIntoView());
      }
      return true;
    }
  }
  return false;
}

// projects/editor/utils/get-current-word-bounds.ts
function tuiGetCurrentWordBounds(editor) {
  const { state } = editor;
  const { selection } = state;
  const { $anchor, empty } = selection;
  if (!empty) {
    return {
      from: selection.from,
      to: selection.to
    };
  }
  if ($anchor) {
    const { pos } = $anchor;
    const start = $anchor.start();
    const parent = $anchor.parent;
    const textBefore = parent.textBetween(0, pos - start, void 0, "\uFFFC");
    const textAfter = parent.textBetween(pos - start, parent.content.size, void 0, "\uFFFC");
    const wordBefore = textBefore.replaceAll(/\uFFFC/g, "").split(/\b/).pop();
    const wordAfter = textAfter.replaceAll(/\uFFFC/g, "").split(/\b/).shift();
    const from = pos - (wordBefore?.length ?? 0);
    const to = pos + (wordAfter?.length ?? 0);
    return {
      from,
      to
    };
  }
  return {
    from: selection.to,
    to: selection.to + 1
  };
}

// projects/editor/utils/get-mark-range.ts
function hasAttributes(markAttributes, attributes) {
  const keys = Object.keys(attributes);
  return !keys.length || !!keys.filter((key) => attributes[key] === markAttributes[key]).length;
}
function findMarkInSet(marks, markType, attributes = {}) {
  return marks.find(({ attrs, type }) => type === markType && hasAttributes(attrs, attributes)) || null;
}
function tuiGetMarkRange(pos, type, attributes = {}) {
  if (!pos || !type) {
    return null;
  }
  const { node, offset } = pos.parent.childAfter(pos.parentOffset);
  if (!node) {
    return null;
  }
  const mark = findMarkInSet(node.marks, type, attributes);
  if (!mark) {
    return null;
  }
  let startIndex = pos.index();
  let startPos = pos.start() + offset;
  let endIndex = startIndex + 1;
  let endPos = startPos + node.nodeSize;
  findMarkInSet(node.marks, type, attributes);
  while (startIndex > 0 && mark.isInSet(pos.parent.child(startIndex - 1).marks)) {
    startIndex -= 1;
    startPos -= pos.parent.child(startIndex).nodeSize;
  }
  while (endIndex < pos.parent.childCount && !!findMarkInSet(pos.parent.child(endIndex).marks, type, attributes)) {
    endPos += pos.parent.child(endIndex).nodeSize;
    endIndex += 1;
  }
  return {
    from: startPos,
    to: endPos
  };
}

// projects/editor/utils/get-nested-nodes.ts
function tuiGetNestedNodes(node) {
  const nodes = [];
  node.content.forEach((child) => {
    if (child instanceof Node) {
      nodes.push([child.type.name, child.attrs]);
    }
  });
  return nodes;
}

// projects/editor/utils/get-selected-content.ts
function tuiGetSelectedContent(state, current) {
  const currentNodeContent = current ?? state.selection.$head.parent.textContent;
  const selected = state.tr.doc.cut(state.tr.selection.from, state.tr.selection.to);
  return selected.content.size ? getHTMLFromFragment(selected.content, state.schema) : currentNodeContent;
}

// projects/editor/utils/get-selection-state.ts
function tuiGetSelectionState(editor) {
  if (!editor?.state?.selection) {
    return { before: "", after: "" };
  }
  const { $from, $to } = editor.state.selection;
  let before = $from.nodeBefore?.textContent;
  before = (before?.slice((before.lastIndexOf(" ") || before.lastIndexOf("\n")) + 1) ?? "").trim();
  const after = $to.nodeAfter?.textContent.trim() ?? "";
  return { before, after };
}

// projects/editor/utils/get-sliced-fragment.ts
function tuiGetSlicedFragment({ schema, tr }) {
  const selected = tr.doc.cut(tr.selection.from, tr.selection.to);
  return tuiGetHtmlFromFragment(selected.content, schema);
}
function tuiGetHtmlFromFragment(fragment, schema) {
  return getHTMLFromFragment(fragment, schema).replaceAll(/<[^>]+(?:>|$)/g, "");
}

// projects/editor/utils/is-selection-in.ts
function tuiIsSelectionIn({ anchorNode, focusNode }, selector) {
  return !!anchorNode && !!focusNode && tuiIsNodeIn(anchorNode, selector) && tuiIsNodeIn(focusNode, selector);
}

// projects/editor/utils/legacy-converter.ts
function migration(element) {
  Array.from(element.children).forEach((child) => {
    if (child.children.length) {
      migration(child);
    }
    if (child.tagName === "FONT") {
      if (child.hasAttribute("size")) {
        switch (child.getAttribute("size")) {
          case "2": {
            migrateParagraph("13px", child);
            break;
          }
          case "3": {
            migrateParagraph("15px", child);
            break;
          }
          case "4": {
            migrateParagraph("17px", child);
            break;
          }
          case "5": {
            migrateHeading("h2", child);
            break;
          }
          case "6": {
            migrateHeading("h1", child);
            break;
          }
          default:
            break;
        }
      } else if (child.hasAttribute("color")) {
        migrateFontHighlight(child);
      }
    }
  });
}
function migrateHeading(selector, element) {
  if (globalThis.document) {
    const heading = document.createElement(selector);
    heading.innerHTML = element.innerHTML;
    if (element.parentElement?.tagName === "P") {
      const newRef = element.parentElement.parentElement?.insertBefore(heading, element.parentElement);
      element.parentElement.removeChild(element);
      if (newRef?.nextSibling && !newRef.nextSibling.textContent?.trim()) {
        newRef.nextSibling.parentElement?.removeChild(newRef.nextSibling);
      }
    } else {
      element.parentElement?.replaceChild(heading, element);
    }
  }
}
function migrateParagraph(fontSize, element) {
  if (globalThis.document) {
    const p = document.createElement("p");
    const span = document.createElement("span");
    span.setAttribute("style", `font-size: ${fontSize}`);
    span.innerHTML = element.innerHTML;
    p.append(span);
    element.parentElement?.replaceChild(element.parentElement.tagName === "P" ? span : p, element);
  }
}
function migrateFontHighlight(element) {
  if (globalThis.document) {
    const span = document.createElement("span");
    span.setAttribute("style", `color: ${element.getAttribute("color")}`);
    span.innerHTML = element.innerHTML;
    element.parentElement?.replaceChild(span, element);
  }
}
function tuiLegacyEditorConverter(content) {
  if (typeof DOMParser === "undefined") {
    return "";
  }
  const tree = new DOMParser().parseFromString(content, "text/html");
  migration(tree.body);
  return tree.body.innerHTML;
}

// projects/editor/utils/parse-node-attributes.ts
function tuiParseNodeAttributes(attrs) {
  return attrs.reduce((result, attribute) => {
    result[attribute] = {
      parseHTML: (element) => element?.getAttribute(attribute)
    };
    return result;
  }, {});
}

// projects/editor/utils/parse-style.ts
function tuiParseStyle(style) {
  return style.split(";").reduce((ruleMap, ruleString) => {
    const [left, right] = ruleString?.split(":") ?? [];
    if (left && right) {
      ruleMap[left.trim()] = right.trim();
    }
    return ruleMap;
  }, {});
}

// projects/editor/utils/safe-link-range.ts
function tuiIsSafeLinkRange(range) {
  const textNodeLength = range.endContainer.nodeValue?.length ?? 0;
  return range.endOffset - range.startOffset > 0 || range.endOffset - range.startOffset === 0 && textNodeLength === 1 || range.startOffset !== 0 && textNodeLength > 1 && range.endOffset !== textNodeLength;
}

// projects/editor/utils/to-gradient.ts
function tuiToGradient({ stops, side }) {
  return `linear-gradient(${side}, ${stops.map(({ color, position }) => `rgba(${tuiParseColor(color).join(", ")}) ${position}`).join(", ")})`;
}

export {
  tuiDeleteNode,
  tuiGetCurrentWordBounds,
  tuiGetMarkRange,
  tuiGetNestedNodes,
  tuiGetSelectedContent,
  tuiGetSelectionState,
  tuiGetSlicedFragment,
  tuiGetHtmlFromFragment,
  tuiIsSelectionIn,
  tuiLegacyEditorConverter,
  tuiParseNodeAttributes,
  tuiParseStyle,
  tuiIsSafeLinkRange,
  tuiToGradient
};
//# sourceMappingURL=chunk-RDIT4KNC.js.map
