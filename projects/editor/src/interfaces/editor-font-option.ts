// @bad TODO: Make customizable
export interface TuiEditorFontOption {
    family?: string;
    headingLevel?: 1 | 2 | 3 | 4 | 5 | 6;
    name: string;
    ngClass?: Record<string, any> | Set<string> | string[] | string;
    ngStyle?: Record<string, any>;
    px?: number;
    weight?: string;
}
