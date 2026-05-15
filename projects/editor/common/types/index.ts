import {
    type TuiEditableIframe,
    type TuiEditableImage,
    type TuiEditorAttachedFile,
} from '@taiga-ui/editor/common';
import {type Highlight} from '@tiptap/extension-highlight';
import {type Image} from '@tiptap/extension-image';
import {type Link} from '@tiptap/extension-link';
import {
    type BulletList,
    type ListItem,
    type TaskItem,
    type TaskList,
} from '@tiptap/extension-list';
import {type Subscript} from '@tiptap/extension-subscript';
import {type Superscript} from '@tiptap/extension-superscript';
import {
    type Table,
    type TableCell,
    type TableHeader,
    type TableRow,
} from '@tiptap/extension-table';
import {type TextAlign} from '@tiptap/extension-text-align';
import {type TextStyle} from '@tiptap/extension-text-style';
import {type Underline} from '@tiptap/extension-underline';
import {type Youtube} from '@tiptap/extension-youtube';
import {type StarterKit} from '@tiptap/starter-kit';

export type {
    BulletList,
    Highlight,
    Image,
    Link,
    ListItem,
    StarterKit,
    Subscript,
    Superscript,
    Table,
    TableCell,
    TableHeader,
    TableRow,
    TaskItem,
    TaskList,
    TextAlign,
    TextStyle,
    Underline,
    Youtube,
};

declare module '@tiptap/core' {
    interface Commands<ReturnType> {
        anchor: {
            removeAnchor(): ReturnType;
            setAnchor(id: string): ReturnType;
        };
        backgroundColor: {
            setBackgroundColor(backgroundColor: string): ReturnType;
            unsetBackgroundColor(): ReturnType;
        };
        cellBackground: {
            setCellBackground(background: string): ReturnType;
            unsetCellBackground(): ReturnType;
        };
        details: {
            setDetails(): ReturnType;
            unsetDetailsAt(pos?: number): ReturnType;
        };
        fileLink: {
            setFileLink(preview: TuiEditorAttachedFile<unknown>): ReturnType;
        };
        fontColor: {
            setFontColor(fontColor: string): ReturnType;
            unsetFontColor(): ReturnType;
        };
        fontSize: {
            setFontSize(fontSize: string): ReturnType;
            unsetFontSize(): ReturnType;
        };
        group: {
            removeGroup(): ReturnType;
            setGroup(): ReturnType;
            setGroupHilite(color: string): ReturnType;
        };
        iframe: {
            setIframe(options: TuiEditableIframe): ReturnType;
        };
        imageEditor: {
            setEditableImage(imageConfigs: TuiEditableImage): ReturnType;
            setImageLink(): ReturnType;
        };
        youtube: {
            setYoutubeVideo(options: {
                height?: number;
                src: string;
                start?: number;
                width?: number;
            }): ReturnType;
        };
    }
}
