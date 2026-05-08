import"./chunk-DAQOROHW.js";var t=`<form [formGroup]="group">
    <tui-toolbar
        class="toolbar"
        [editor]="editorRef"
        [tools]="builtInTools"
        (fileAttached)="attach($event)"
    />

    <tui-loader
        [loading]="!!(uploadService.loading$ | async)"
        [overlay]="true"
    >
        <tui-editor
            #header
            formControlName="header"
            class="editor"
            [tools]="[]"
            (focusIn)="editorRef = header.editor"
        >
            Header
        </tui-editor>

        <tui-editor
            #main
            formControlName="main"
            class="editor"
            [tools]="[]"
            (focusIn)="editorRef = main.editor"
        >
            Main
        </tui-editor>
    </tui-loader>
</form>
`;export{t as default};
