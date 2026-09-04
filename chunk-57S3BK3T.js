import "./chunk-KWSTWQNB.js";

// projects/demo/src/app/pages/toolbar/shared/examples/1/index.html?raw
var __default = '<form [formGroup]="group">\n    <tui-toolbar\n        class="toolbar"\n        [editor]="editorRef"\n        [tools]="builtInTools"\n    />\n\n    <tui-editor\n        #header\n        formControlName="header"\n        class="editor"\n        [tools]="[]"\n        (focusIn)="editorRef = header.editor"\n    >\n        Header\n    </tui-editor>\n\n    <tui-editor\n        #main\n        formControlName="main"\n        class="editor"\n        [tools]="[]"\n        (focusIn)="editorRef = main.editor"\n    >\n        Main\n    </tui-editor>\n\n    <tui-editor\n        #footer\n        formControlName="footer"\n        class="editor"\n        [tools]="[]"\n        (focusIn)="editorRef = footer.editor"\n    >\n        Footer\n    </tui-editor>\n</form>\n\n<tui-accordion>\n    <button [tuiAccordion]="true">Output</button>\n\n    <tui-expand>\n        <pre><code>{{ group.value|json }}</code></pre>\n    </tui-expand>\n</tui-accordion>\n';
export {
  __default as default
};
//# sourceMappingURL=chunk-57S3BK3T.js.map
