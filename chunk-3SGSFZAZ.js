import "./chunk-KWSTWQNB.js";

// projects/demo/src/app/pages/images/link/examples/1/index.html?raw
var __default = `<tui-toolbar
    [editor]="editor()?.editor ?? null"
    [tools]="tools"
>
    <tui-segmented size="s">
        @for (modeItem of modes; track modeItem) {
            <label>
                <input
                    type="radio"
                    [formControl]="mode"
                    [value]="modeItem"
                />
                {{ modeItem }}
            </label>
        }
    </tui-segmented>
</tui-toolbar>

@if (mode.value === 'Editor') {
    <tui-editor
        [formControl]="control"
        [tools]="codeTools"
    />
} @else {
    <tui-textfield tuiTextfieldSize="m">
        <textarea
            tuiTextarea
            [formControl]="control"
            [min]="16"
        ></textarea>
    </tui-textfield>
}

<tui-accordion [closeOthers]="false">
    <button [tuiAccordion]="isE2E">HTML</button>
    <tui-expand>
        <ng-container *tuiItem>
            <tui-editor-socket [content]="control.value" />
        </ng-container>
    </tui-expand>

    <button [tuiAccordion]="isE2E">Text</button>
    <tui-expand>
        <ng-container *tuiItem>
            <span class="code">{{ control.value }}</span>
        </ng-container>
    </tui-expand>
</tui-accordion>
`;
export {
  __default as default
};
//# sourceMappingURL=chunk-3SGSFZAZ.js.map
