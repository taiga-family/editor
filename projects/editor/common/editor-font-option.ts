export interface TuiEditorFontOption {
    family?: string;
    headingLevel?: 1 | 2 | 3 | 4 | 5 | 6;
    name: string;
    px?: number;
    weight?: string;
}

export interface TuiEditorFontOptionContext {
    $implicit: TuiEditorFontOption;
    setFontOption(option: Partial<TuiEditorFontOption>): void;
}
