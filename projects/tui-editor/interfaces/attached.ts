export interface TuiEditorAttachedFile<T = Record<string, any>> {
    attrs?: T;
    link: string;
    name: string;
}

export interface TuiEditorAttachOptions {
    accept: string;
    multiple: boolean;
}
