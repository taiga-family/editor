export interface TuiEditorGroupOptions {
    readonly createOnEnter: boolean;
    readonly draggable: boolean;
    readonly groupNodeClass: string;
    readonly groupPointerNodeClass: string;
    readonly nested: boolean;
}

export const TUI_EDITOR_GROUP_DEFAULT_OPTIONS: TuiEditorGroupOptions = {
    groupNodeClass: 'tui-group-node',
    groupPointerNodeClass: 'tui-group-pointer',
    nested: true,
    draggable: true,
    createOnEnter: false,
};
