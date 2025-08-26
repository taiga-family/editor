export interface TuiImageEditorOptions {
    maxWidth: number | null;
    minWidth: number | null;
}

export interface TuiEditableImage {
    alt?: string;
    draggable?: '' | null;
    src: string;
    title?: string;
    width?: number | string | null;
    style?: string | null;
    'data-href'?: string | null;
    'data-editing-href'?: boolean | null;
}
