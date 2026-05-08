import"./chunk-DAQOROHW.js";var n=`<tui-editor
    class="heading"
    [formControl]="control"
    [tools]="builtInTools"
>
    <ng-container ngProjectAs="tools">
        <font-size-tool tuiItem />
    </ng-container>
</tui-editor>

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
