import"./chunk-DAQOROHW.js";var n=`<tui-loader
    [loading]="!!(imgbbService.loading$ | async)"
    [overlay]="true"
>
    <tui-editor
        class="editor"
        [formControl]="control"
        [tools]="builtInTools"
        [tuiValidator]="validator"
    />
</tui-loader>

<tui-error [formControl]="control" />

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
`;export{n as default};
