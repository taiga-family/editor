export interface TuiEditableIframeOptions {
    maxHeight: number;
    maxWidth: number;
    minHeight: number;
    minWidth: number;
}

export interface TuiEditableIframe {
    allowfullscreen?: boolean | null;
    frameborder?: number | null;
    height?: number | string | null;
    src: string | null;
    width?: number | string | null;
}
