import {
  Node2 as Node,
  Plugin,
  PluginKey,
  Selection,
  TextSelection,
  mergeAttributes,
  textblockTypeInputRule
} from "./chunk-42BGUG2S.js";
import "./chunk-KWSTWQNB.js";

// node_modules/@tiptap/extension-code-block/dist/index.js
var DEFAULT_TAB_SIZE = 4;
var backtickInputRegex = /^```([a-z]+)?[\s\n]$/;
var tildeInputRegex = /^~~~([a-z]+)?[\s\n]$/;
var CodeBlock = Node.create({
  name: "codeBlock",
  addOptions() {
    return {
      languageClassPrefix: "language-",
      exitOnTripleEnter: true,
      exitOnArrowDown: true,
      exitOnArrowUp: true,
      defaultLanguage: null,
      enableTabIndentation: false,
      tabSize: DEFAULT_TAB_SIZE,
      HTMLAttributes: {}
    };
  },
  content: "text*",
  marks: "",
  group: "block",
  code: true,
  defining: true,
  addAttributes() {
    return {
      language: {
        default: this.options.defaultLanguage,
        parseHTML: (element) => {
          var _element$firstElement;
          const {
            languageClassPrefix
          } = this.options;
          if (!languageClassPrefix) return null;
          const language = [...((_element$firstElement = element.firstElementChild) === null || _element$firstElement === void 0 ? void 0 : _element$firstElement.classList) || []].filter((className) => className.startsWith(languageClassPrefix)).map((className) => className.replace(languageClassPrefix, ""))[0];
          if (!language) return null;
          return language;
        },
        rendered: false
      }
    };
  },
  parseHTML() {
    return [{
      tag: "pre",
      preserveWhitespace: "full"
    }];
  },
  renderHTML({
    node,
    HTMLAttributes
  }) {
    return ["pre", mergeAttributes(this.options.HTMLAttributes, HTMLAttributes), ["code", {
      class: node.attrs.language ? this.options.languageClassPrefix + node.attrs.language : null
    }, 0]];
  },
  markdownTokenName: "code",
  parseMarkdown: (token, helpers) => {
    var _token$raw, _token$raw2;
    if (((_token$raw = token.raw) === null || _token$raw === void 0 ? void 0 : _token$raw.startsWith("```")) === false && ((_token$raw2 = token.raw) === null || _token$raw2 === void 0 ? void 0 : _token$raw2.startsWith("~~~")) === false && token.codeBlockStyle !== "indented") return [];
    return helpers.createNode("codeBlock", {
      language: token.lang || null
    }, token.text ? [helpers.createTextNode(token.text)] : []);
  },
  renderMarkdown: (node, h) => {
    var _node$attrs;
    let output = "";
    const language = ((_node$attrs = node.attrs) === null || _node$attrs === void 0 ? void 0 : _node$attrs.language) || "";
    if (!node.content) output = `\`\`\`${language}

\`\`\``;
    else output = [`\`\`\`${language}`, h.renderChildren(node.content), "```"].join("\n");
    return output;
  },
  addCommands() {
    return {
      setCodeBlock: (attributes) => ({
        commands
      }) => {
        return commands.setNode(this.name, attributes);
      },
      toggleCodeBlock: (attributes) => ({
        commands
      }) => {
        return commands.toggleNode(this.name, "paragraph", attributes);
      }
    };
  },
  addKeyboardShortcuts() {
    return {
      "Mod-Alt-c": () => this.editor.commands.toggleCodeBlock(),
      Backspace: () => {
        const {
          empty,
          $anchor
        } = this.editor.state.selection;
        const isAtStart = $anchor.pos === 1;
        if (!empty || $anchor.parent.type.name !== this.name) return false;
        if (isAtStart || !$anchor.parent.textContent.length) return this.editor.commands.clearNodes();
        return false;
      },
      Tab: ({
        editor
      }) => {
        var _this$options$tabSize;
        if (!this.options.enableTabIndentation) return false;
        const tabSize = (_this$options$tabSize = this.options.tabSize) !== null && _this$options$tabSize !== void 0 ? _this$options$tabSize : DEFAULT_TAB_SIZE;
        const {
          state
        } = editor;
        const {
          selection
        } = state;
        const {
          $from,
          empty
        } = selection;
        if ($from.parent.type !== this.type) return false;
        const indent = " ".repeat(tabSize);
        if (empty) return editor.commands.insertContent(indent);
        return editor.commands.command(({
          tr
        }) => {
          const {
            from,
            to
          } = selection;
          const indentedText = state.doc.textBetween(from, to, "\n", "\n").split("\n").map((line) => indent + line).join("\n");
          tr.replaceWith(from, to, state.schema.text(indentedText));
          return true;
        });
      },
      "Shift-Tab": ({
        editor
      }) => {
        var _this$options$tabSize2;
        if (!this.options.enableTabIndentation) return false;
        const tabSize = (_this$options$tabSize2 = this.options.tabSize) !== null && _this$options$tabSize2 !== void 0 ? _this$options$tabSize2 : DEFAULT_TAB_SIZE;
        const {
          state
        } = editor;
        const {
          selection
        } = state;
        const {
          $from,
          empty
        } = selection;
        if ($from.parent.type !== this.type) return false;
        if (empty) return editor.commands.command(({
          tr
        }) => {
          var _currentLine$match;
          const {
            pos
          } = $from;
          const codeBlockStart = $from.start();
          const codeBlockEnd = $from.end();
          const lines = state.doc.textBetween(codeBlockStart, codeBlockEnd, "\n", "\n").split("\n");
          let currentLineIndex = 0;
          let charCount = 0;
          const relativeCursorPos = pos - codeBlockStart;
          for (let i = 0; i < lines.length; i += 1) {
            if (charCount + lines[i].length >= relativeCursorPos) {
              currentLineIndex = i;
              break;
            }
            charCount += lines[i].length + 1;
          }
          const leadingSpaces = ((_currentLine$match = lines[currentLineIndex].match(/^ */)) === null || _currentLine$match === void 0 ? void 0 : _currentLine$match[0]) || "";
          const spacesToRemove = Math.min(leadingSpaces.length, tabSize);
          if (spacesToRemove === 0) return true;
          let lineStartPos = codeBlockStart;
          for (let i = 0; i < currentLineIndex; i += 1) lineStartPos += lines[i].length + 1;
          tr.delete(lineStartPos, lineStartPos + spacesToRemove);
          if (pos - lineStartPos <= spacesToRemove) tr.setSelection(TextSelection.create(tr.doc, lineStartPos));
          return true;
        });
        return editor.commands.command(({
          tr
        }) => {
          const {
            from,
            to
          } = selection;
          const reverseIndentText = state.doc.textBetween(from, to, "\n", "\n").split("\n").map((line) => {
            var _line$match;
            const leadingSpaces = ((_line$match = line.match(/^ */)) === null || _line$match === void 0 ? void 0 : _line$match[0]) || "";
            const spacesToRemove = Math.min(leadingSpaces.length, tabSize);
            return line.slice(spacesToRemove);
          }).join("\n");
          tr.replaceWith(from, to, state.schema.text(reverseIndentText));
          return true;
        });
      },
      Enter: ({
        editor
      }) => {
        if (!this.options.exitOnTripleEnter) return false;
        const {
          state
        } = editor;
        const {
          selection
        } = state;
        const {
          $from,
          empty
        } = selection;
        if (!empty || $from.parent.type !== this.type) return false;
        const isAtEnd = $from.parentOffset === $from.parent.nodeSize - 2;
        const endsWithDoubleNewline = $from.parent.textContent.endsWith("\n\n");
        if (!isAtEnd || !endsWithDoubleNewline) return false;
        return editor.chain().command(({
          tr
        }) => {
          tr.delete($from.pos - 2, $from.pos);
          return true;
        }).exitCode().run();
      },
      ArrowUp: ({
        editor
      }) => {
        if (!this.options.exitOnArrowUp) return false;
        const {
          state
        } = editor;
        const {
          selection
        } = state;
        const {
          $from,
          empty
        } = selection;
        if (!empty || $from.parent.type !== this.type) return false;
        if ($from.parentOffset !== 0) return false;
        const before = $from.before();
        if (before > 0) return false;
        return editor.commands.insertDefaultBlock({
          pos: before
        });
      },
      ArrowDown: ({
        editor
      }) => {
        if (!this.options.exitOnArrowDown) return false;
        const {
          state
        } = editor;
        const {
          selection,
          doc
        } = state;
        const {
          $from,
          empty
        } = selection;
        if (!empty || $from.parent.type !== this.type) return false;
        if (!($from.parentOffset === $from.parent.nodeSize - 2)) return false;
        const after = $from.after();
        if (after === void 0) return false;
        if (doc.nodeAt(after)) return editor.commands.command(({
          tr
        }) => {
          tr.setSelection(Selection.near(doc.resolve(after)));
          return true;
        });
        return editor.commands.exitCode();
      }
    };
  },
  addInputRules() {
    return [textblockTypeInputRule({
      find: backtickInputRegex,
      type: this.type,
      getAttributes: (match) => ({
        language: match[1]
      })
    }), textblockTypeInputRule({
      find: tildeInputRegex,
      type: this.type,
      getAttributes: (match) => ({
        language: match[1]
      })
    })];
  },
  addProseMirrorPlugins() {
    return [new Plugin({
      key: new PluginKey("codeBlockVSCodeHandler"),
      props: {
        handlePaste: (view, event) => {
          if (!event.clipboardData) return false;
          if (this.editor.isActive(this.type.name)) return false;
          const text = event.clipboardData.getData("text/plain");
          const vscode = event.clipboardData.getData("vscode-editor-data");
          const vscodeData = vscode ? JSON.parse(vscode) : void 0;
          const language = vscodeData === null || vscodeData === void 0 ? void 0 : vscodeData.mode;
          if (!text || !language) return false;
          const {
            tr,
            schema
          } = view.state;
          const textNode = schema.text(text.replace(/\r\n?/g, "\n"));
          tr.replaceSelectionWith(this.type.create({
            language
          }, textNode));
          if (tr.selection.$from.parent.type !== this.type) tr.setSelection(TextSelection.near(tr.doc.resolve(Math.max(0, tr.selection.from - 2))));
          tr.setMeta("paste", true);
          view.dispatch(tr);
          return true;
        }
      }
    })];
  }
});
var src_default = CodeBlock;
export {
  CodeBlock,
  backtickInputRegex,
  src_default as default,
  tildeInputRegex
};
//# sourceMappingURL=chunk-A2PUGEL2.js.map
