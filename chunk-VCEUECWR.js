import {
  Mark2 as Mark,
  markInputRule,
  markPasteRule,
  mergeAttributes
} from "./chunk-U65UEYRO.js";

// node_modules/@tiptap/extension-bold/dist/index.js
var starInputRegex = /(?:^|\s)(\*\*(?!\s+\*\*)((?:[^*]+))\*\*(?!\s+\*\*))$/;
var starPasteRegex = /(?:^|\s)(\*\*(?!\s+\*\*)((?:[^*]+))\*\*(?!\s+\*\*))/g;
var underscoreInputRegex = /(?:^|\s)(__(?!\s+__)((?:[^_]+))__(?!\s+__))$/;
var underscorePasteRegex = /(?:^|\s)(__(?!\s+__)((?:[^_]+))__(?!\s+__))/g;
var Bold = Mark.create({
  name: "bold",
  addOptions() {
    return {
      HTMLAttributes: {}
    };
  },
  parseHTML() {
    return [{
      tag: "strong"
    }, {
      tag: "b",
      getAttrs: (node) => node.style.fontWeight !== "normal" && null
    }, {
      style: "font-weight=400",
      clearMark: (mark) => mark.type.name === this.name
    }, {
      style: "font-weight",
      getAttrs: (value) => /^(bold(er)?|[5-9]\d{2,})$/.test(value) && null
    }];
  },
  renderHTML({
    HTMLAttributes
  }) {
    return ["strong", mergeAttributes(this.options.HTMLAttributes, HTMLAttributes), 0];
  },
  addCommands() {
    return {
      setBold: () => ({
        commands
      }) => {
        return commands.setMark(this.name);
      },
      toggleBold: () => ({
        commands
      }) => {
        return commands.toggleMark(this.name);
      },
      unsetBold: () => ({
        commands
      }) => {
        return commands.unsetMark(this.name);
      }
    };
  },
  addKeyboardShortcuts() {
    return {
      "Mod-b": () => this.editor.commands.toggleBold(),
      "Mod-B": () => this.editor.commands.toggleBold()
    };
  },
  addInputRules() {
    return [markInputRule({
      find: starInputRegex,
      type: this.type
    }), markInputRule({
      find: underscoreInputRegex,
      type: this.type
    })];
  },
  addPasteRules() {
    return [markPasteRule({
      find: starPasteRegex,
      type: this.type
    }), markPasteRule({
      find: underscorePasteRegex,
      type: this.type
    })];
  }
});

export {
  starInputRegex,
  starPasteRegex,
  underscoreInputRegex,
  underscorePasteRegex,
  Bold
};
//# sourceMappingURL=chunk-VCEUECWR.js.map
