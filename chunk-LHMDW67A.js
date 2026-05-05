import "./chunk-4MWRP73S.js";

// projects/demo/src/app/pages/embed/iframe/examples/1/embed-tool/embed-tool.template.html?raw
var embed_tool_template_default = '<div\n    #dropdown\n    tuiDropdownAlign="start"\n    tuiDropdownDirection="bottom"\n    tuiDropdownLimitWidth="auto"\n    [tuiDropdown]="youtubeDropdown"\n    [tuiDropdownMinHeight]="0"\n    [tuiDropdownOpen]="false"\n>\n    <button\n        appearance="icon"\n        automation-id="embed-tool__button"\n        iconStart="@tui.code"\n        size="s"\n        tuiIconButton\n        tuiToolbarTool\n        type="button"\n        class="tool-button"\n    >\n        Embedded tool\n    </button>\n    <ng-template #youtubeDropdown>\n        <div class="embed-tool-content">\n            <label class="t-label">\n                <div class="t-label-properties">Embed URL</div>\n                <div class="t-url">\n                    <tui-input-inline\n                        tuiAutoFocus\n                        class="t-input"\n                        [class.t-input_filled]="url"\n                        [(ngModel)]="url"\n                        (keydown.enter)="embedSource(url)"\n                    >\n                        {{ placeholder }}\n                    </tui-input-inline>\n                </div>\n            </label>\n        </div>\n    </ng-template>\n</div>\n';
export {
  embed_tool_template_default as default
};
//# sourceMappingURL=chunk-LHMDW67A.js.map
