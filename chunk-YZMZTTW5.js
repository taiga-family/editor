import {
  tuiIsElement,
  tuiIsHTMLElement,
  tuiIsTextNode
} from "./chunk-MRTTS2CM.js";
import {
  Node,
  Plugin,
  PluginKey,
  TextSelection,
  getHTMLFromFragment
} from "./chunk-77B4UB4S.js";

// projects/editor/utils/create-mark-boundary-exit-plugin.ts
function tuiCreateMarkBoundaryExitPlugin(markName) {
  return new Plugin({
    key: new PluginKey(`tui-${markName}-boundary-exit`),
    appendTransaction(transactions, _oldState, newState) {
      if (!transactions.some((transaction) => transaction.selectionSet)) {
        return null;
      }
      const { selection } = newState;
      if (!(selection instanceof TextSelection) || !selection.$cursor) {
        return null;
      }
      const { $cursor } = selection;
      const mark = newState.schema.marks[markName];
      if (!mark) {
        return null;
      }
      const markBefore = $cursor.nodeBefore ? mark.isInSet($cursor.nodeBefore.marks) : null;
      const markAfter = $cursor.nodeAfter ? mark.isInSet($cursor.nodeAfter.marks) : null;
      if (!markBefore || markAfter) {
        return null;
      }
      const storedMarks = newState.storedMarks ?? $cursor.marks();
      return storedMarks.some((storedMark) => storedMark.type === mark) ? newState.tr.setStoredMarks(storedMarks.filter((storedMark) => storedMark.type !== mark)) : null;
    }
  });
}

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

// projects/editor/utils/get-gradient-data.ts
function tuiGetGradientData(gradient) {
  return gradient.slice(0, Math.max(0, gradient.length - 1)).replace("linear-gradient(", "");
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

// projects/editor/utils/hex-to-rgb.ts
function tuiHexToRgb(hex) {
  const matches = hex.replace("#", "").split("").map((char, _, array) => array.length === 3 ? `${char}${char}` : char).join("").match(/.{2}/g);
  return matches ? matches.map((x) => Number.parseInt(x, 16)) : [0, 0, 0];
}

// projects/editor/utils/hex-to-rgba.ts
var getChunksFromString = (hex, chunkSize) => hex.match(new RegExp(`.{${chunkSize}}`, "g"));
var convertHexUnitTo256 = (hexStr) => Number.parseInt(hexStr.repeat(2 / hexStr.length), 16);
var getAlphaFloat = (a, alpha) => {
  if (a !== void 0) {
    return Number((a / 255).toFixed(2));
  }
  return typeof alpha !== "number" || alpha < 0 || alpha > 1 ? 1 : alpha;
};
function tuiHexToRGBA(hex, alpha) {
  const [r, g, b, a] = tuiParseHex(hex, alpha);
  return a < 1 ? `rgba(${r}, ${g}, ${b}, ${a})` : `rgb(${r}, ${g}, ${b})`;
}
function tuiIsValidHex(hex) {
  return /^#(?:[A-F0-9]{3,4}){1,2}$/i.test(hex);
}
function tuiParseHex(hex, alpha) {
  if (!tuiIsValidHex(hex)) {
    throw new Error("Invalid HEX");
  }
  const chunkSize = Math.floor((hex.length - 1) / 3);
  const hexArr = getChunksFromString(hex.slice(1), chunkSize);
  const [r = Number.NaN, g = Number.NaN, b = Number.NaN, a] = hexArr?.map(convertHexUnitTo256) ?? [];
  const floatAlpha = getAlphaFloat(a, alpha);
  return [r, g, b, floatAlpha];
}

// projects/editor/utils/hsv-to-rgb.ts
function hsvToColor(h, s, v, n) {
  const k = (n + h / 60) % 6;
  return Math.round(v - v * s * Math.max(Math.min(k, 4 - k, 1), 0));
}
function tuiHsvToRgb(h, s, v) {
  return [hsvToColor(h, s, v, 5), hsvToColor(h, s, v, 3), hsvToColor(h, s, v, 1)];
}

// projects/editor/utils/is-mouse-focusable.ts
function tuiIsKeyboardFocusable(element) {
  if (element.hasAttribute("disabled") || element.getAttribute("tabIndex") === "-1") {
    return false;
  }
  if (tuiIsHTMLElement(element) && element.isContentEditable || element.getAttribute("tabIndex") === "0") {
    return true;
  }
  switch (element.tagName) {
    case "A":
    case "LINK":
      return element.hasAttribute("href");
    case "AUDIO":
    case "VIDEO":
      return element.hasAttribute("controls");
    case "BUTTON":
    case "SELECT":
    case "TEXTAREA":
      return true;
    case "INPUT":
      return element.getAttribute("type") !== "hidden";
    default:
      return false;
  }
}
function tuiIsMouseFocusable(element) {
  return !element.hasAttribute("disabled") && (element.getAttribute("tabIndex") === "-1" || tuiIsKeyboardFocusable(element));
}

// projects/editor/utils/is-node-in.ts
function tuiIsNodeIn(node, selector) {
  return tuiIsTextNode(node) ? !!node.parentElement?.closest(selector) : tuiIsElement(node) && !!node.closest(selector);
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

// projects/editor/utils/parse-color.ts
var DEFAULT = [0, 0, 0, 1];
function tuiParseColor(color) {
  const stripped = color.replace("#", "").replace("rgba(", "").replace("rgb(", "").replace(")", "");
  const array = stripped.split(",").map((item) => Number.parseFloat(item));
  if (array.length === 4) {
    return array;
  }
  if (array.length === 3) {
    return array.concat(1);
  }
  const matches = stripped.match(new RegExp(`(.{${stripped.length / 3}})`, "g"));
  if (!matches) {
    return DEFAULT;
  }
  const parsed = matches.map((char) => Number.parseInt(stripped.length % 2 ? `${char}${char}` : char, 16));
  return [
    parsed[0] ?? DEFAULT[0],
    parsed[1] ?? DEFAULT[1],
    parsed[2] ?? DEFAULT[2],
    parsed[3] ?? DEFAULT[3]
  ];
}

// projects/editor/utils/parse-gradient.ts
var COMMA = String.raw`\s*,\s*`;
var HEX = "#(?:[a-f0-9]{6}|[a-f0-9]{3})";
var RGB = String.raw`\(\s*(?:\d{1,3}\s*,\s*){2}\d{1,3}\s*\)`;
var RGBA = String.raw`\(\s*(?:\d{1,3}\s*,\s*){2}\d{1,3}\s*,\s*\d*\.?\d+\)`;
var VALUE = String.raw`(?:[+-]?\d*\.?\d+)(?:%|[a-z]+)?`;
var KEYWORD = "[_a-z-][_a-z0-9-]*";
var COLOR = [
  "(?:",
  HEX,
  "|",
  "(?:rgb|hsl)",
  RGB,
  "|",
  "(?:rgba|hsla)",
  RGBA,
  "|",
  KEYWORD,
  ")"
];
var REGEXP_ARRAY = [
  String.raw`\s*(`,
  ...COLOR,
  ")",
  String.raw`(?:\s+`,
  "(",
  VALUE,
  "))?",
  "(?:",
  COMMA,
  String.raw`\s*)?`
];
function getPosition(match, stops) {
  const fallback = stops === 1 ? "100%" : `${stops}%`;
  return match.includes("%") ? match : fallback;
}
function tuiParseGradient(input) {
  const stopsRegexp = new RegExp(REGEXP_ARRAY.join(""), "gi");
  const stopsString = input.startsWith("to") || /^\d/.exec(input) ? input.slice(Math.max(0, input.indexOf(",") + 1)).trim() : input;
  const side = input.startsWith("to") ? input.split(",")[0] : "to bottom";
  let stops = [];
  let matchColorStop = stopsRegexp.exec(stopsString);
  while (matchColorStop !== null) {
    stops = stops.concat({
      color: matchColorStop[1] || "",
      position: getPosition(matchColorStop[2] || "", stops.length)
    });
    matchColorStop = stopsRegexp.exec(stopsString);
  }
  stops = stops.filter(({ color }) => color.startsWith("#") || color.startsWith("rgb"));
  return {
    stops,
    side
  };
}
function tuiToGradient({ stops, side }) {
  return `linear-gradient(${side}, ${stops.map(({ color, position }) => `rgba(${tuiParseColor(color).join(", ")}) ${position}`).join(", ")})`;
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

// projects/editor/utils/rgb-to-hex.ts
function tuiRgbToHex(r, g, b) {
  return `#${[r, g, b].map((x) => x.toString(16).padStart(2, "0")).join("")}`;
}

// projects/editor/utils/rgb-to-hsv.ts
function tuiRgbToHsv(r, g, b) {
  const v = Math.max(r, g, b);
  const n = v - Math.min(r, g, b);
  const h = n && (v === r ? (g - b) / n : v === g ? 2 + (b - r) / n : 4 + (r - g) / n);
  return [60 * (h < 0 ? h + 6 : h), v && n / v, v];
}

// projects/editor/utils/rgba-to-hex.ts
function tuiRgbaToHex(color) {
  if (!tuiIsValidRgba(color)) {
    throw new Error("Invalid RGBa");
  }
  const rgb = (
    // eslint-disable-next-line regexp/no-misleading-capturing-group
    /^rgba?\((\d+),(\d+),(\d+),?([^,\s)]+)?/i.exec(color.replaceAll(/\s/g, "")) ?? null
  );
  let alpha = (rgb?.[4] ?? "").trim();
  let hex = rgb ? `${((Number.parseInt(rgb[1] ?? "", 10) || 0) | 1 << 8).toString(16).slice(1)}${((Number.parseInt(rgb[2] ?? "", 10) || 0) | 1 << 8).toString(16).slice(1)}${((Number.parseInt(rgb[3] ?? "", 10) || 0) | 1 << 8).toString(16).slice(1)}` : color;
  alpha = alpha === "" ? 1 : alpha;
  alpha = (Number(alpha) * 255 | 1 << 8).toString(16).slice(1);
  hex += alpha;
  return `#${hex.toUpperCase()}`;
}
function tuiIsValidRgba(rgba) {
  const range = String.raw`(\d|[1-9]\d|1\d{2}|2[0-4]\d|2[0-5]{2})`;
  const alpha = String.raw`([01]|0?\.\d+)`;
  return new RegExp(
    // eslint-disable-next-line regexp/no-unused-capturing-group
    String.raw`^(?:rgb\(\s*${range}\s*,\s*${range}\s*,\s*${range}\s*\)|rgba\(\s*${range}\s*,\s*${range}\s*,\s*${range}\s*,\s*${alpha}\s*\))$`
  ).test(rgba);
}

// projects/editor/utils/safe-link-range.ts
function tuiIsSafeLinkRange(range) {
  const textNodeLength = range.endContainer.nodeValue?.length ?? 0;
  return range.endOffset - range.startOffset > 0 || range.endOffset - range.startOffset === 0 && textNodeLength === 1 || range.startOffset !== 0 && textNodeLength > 1 && range.endOffset !== textNodeLength;
}

export {
  tuiCreateMarkBoundaryExitPlugin,
  tuiDeleteNode,
  tuiGetCurrentWordBounds,
  tuiGetGradientData,
  tuiGetMarkRange,
  tuiGetNestedNodes,
  tuiGetSelectedContent,
  tuiGetSelectionState,
  tuiGetSlicedFragment,
  tuiGetHtmlFromFragment,
  tuiHexToRgb,
  tuiHexToRGBA,
  tuiIsValidHex,
  tuiParseHex,
  tuiHsvToRgb,
  tuiIsKeyboardFocusable,
  tuiIsMouseFocusable,
  tuiIsNodeIn,
  tuiIsSelectionIn,
  tuiLegacyEditorConverter,
  tuiParseColor,
  tuiParseGradient,
  tuiToGradient,
  tuiParseNodeAttributes,
  tuiParseStyle,
  tuiRgbToHex,
  tuiRgbToHsv,
  tuiRgbaToHex,
  tuiIsValidRgba,
  tuiIsSafeLinkRange
};
//# sourceMappingURL=chunk-YZMZTTW5.js.map
