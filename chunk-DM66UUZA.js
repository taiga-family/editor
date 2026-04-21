import "./chunk-4MWRP73S.js";

// projects/demo/src/app/pages/starter/import/component.md?raw
var component_default = "```typescript\nimport {TUI_EDITOR_DEFAULT_TOOLS} from '@taiga-ui/editor';\n// ...\n\n@Component({\n  standalone: true,\n  imports: [\n    // ..\n    TuiEditor,\n    ReactiveFormsModule,\n  ],\n  providers: [\n    provideTuiEditor({\n      // You can disable these plugins\n      // if you don't need them\n      image: true,\n      iframe: true,\n      video: true,\n      source: true,\n      audio: true,\n      details: true,\n      detailsSummary: true,\n      detailsContent: true,\n    }),\n  ],\n  // ...\n})\nexport class App {\n  readonly tools = TUI_EDITOR_DEFAULT_TOOLS;\n  readonly control = new FormControl();\n}\n```\n";
export {
  component_default as default
};
//# sourceMappingURL=chunk-DM66UUZA.js.map
