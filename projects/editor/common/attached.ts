import type {TuiLinkAttributes} from './tui-link-attributes';

export interface TuiEditorAttachedFile<T = TuiLinkAttributes> {
    attrs?: T;
    link: string;
    name: string;
}

export interface TuiEditorAttachOptions {
    accept: string;
    multiple: boolean;
}
