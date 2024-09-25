import type {
    TuiEditableIframe,
    TuiEditableImage,
    TuiEditorAttachedFile,
} from '@taiga-ui/editor/common';
import type BulletList from '@tiptap/extension-bullet-list';
import type Highlight from '@tiptap/extension-highlight';
import type {Image} from '@tiptap/extension-image';
import type Link from '@tiptap/extension-link';
import type ListItem from '@tiptap/extension-list-item';
import type Subscript from '@tiptap/extension-subscript';
import type Superscript from '@tiptap/extension-superscript';
import type Table from '@tiptap/extension-table';
import type TableCell from '@tiptap/extension-table-cell';
import type TableHeader from '@tiptap/extension-table-header';
import type TableRow from '@tiptap/extension-table-row';
import type TaskItem from '@tiptap/extension-task-item';
import type TaskList from '@tiptap/extension-task-list';
import type TextAlign from '@tiptap/extension-text-align';
import type TextStyle from '@tiptap/extension-text-style';
import type Underline from '@tiptap/extension-underline';
import type Youtube from '@tiptap/extension-youtube';
import type StarterKit from '@tiptap/starter-kit';

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
        iframe: {
            setIframe: (options: TuiEditableIframe) => ReturnType;
        };
    }

    interface Commands<ReturnType> {
        imageEditor: {
            setEditableImage: (imageConfigs: TuiEditableImage) => ReturnType;
        };
    }

    interface Commands<ReturnType> {
        fontColor: {
            /**
             * Set the font color
             */
            setFontColor: (fontColor: string) => ReturnType;
            /**
             * Unset the font color
             */
            unsetFontColor: () => ReturnType;
        };
    }

    interface Commands<ReturnType> {
        details: {
            removeDetails: () => ReturnType;
            setDetails: () => ReturnType;
        };
    }

    interface Commands<ReturnType> {
        group: {
            removeGroup: () => ReturnType;
            setGroup: () => ReturnType;
            setGroupHilite: (color: string) => ReturnType;
        };
    }

    interface Commands<ReturnType> {
        anchor: {
            removeAnchor: () => ReturnType;
            setAnchor: (id: string) => ReturnType;
        };
    }

    interface Commands<ReturnType> {
        youtube: {
            /**
             * Insert a youtube video
             */
            setYoutubeVideo: (options: {
                height?: number;
                src: string;
                start?: number;
                width?: number;
            }) => ReturnType;
        };
    }

    interface Commands<ReturnType> {
        cellBackground: {
            setCellBackground: (background: string) => ReturnType;
            unsetCellBackground: () => ReturnType;
        };
    }

    interface Commands<ReturnType> {
        fileLink: {
            setFileLink: (preview: TuiEditorAttachedFile) => ReturnType;
        };
    }

    interface Commands<ReturnType> {
        fontSize: {
            /**
             * Set the font size
             */
            setFontSize: (fontSize: string) => ReturnType;
            /**
             * Unset the font size
             */
            unsetFontSize: () => ReturnType;
        };
    }

    interface Commands<ReturnType> {
        backgroundColor: {
            /**
             * Set the background color
             */
            setBackgroundColor: (backgroundColor: string) => ReturnType;
            /**
             * Unset the background color
             */
            unsetBackgroundColor: () => ReturnType;
        };
    }
}
