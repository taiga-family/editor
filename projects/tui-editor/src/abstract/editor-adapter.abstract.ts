import {Directive} from '@angular/core';
import type {Editor, Range} from '@tiptap/core';
import type {MarkType} from '@tiptap/pm/model';
import type {EditorState} from 'prosemirror-state';
import type {Observable} from 'rxjs';
import {Subject} from 'rxjs';

import type {TuiEditableIframe} from '../extensions/iframe-editor/iframe-editor.options';
import type {TuiYoutubeOptions} from '../extensions/youtube';
import type {TuiEditorAttachedFile} from '../interfaces/attached';

@Directive()
export abstract class AbstractTuiEditor {
    public abstract readonly isFocused: boolean;
    public abstract readonly html: string;
    public abstract editable: boolean;
    public readonly stateChange$ = new Subject<void>();
    public readonly valueChange$ = new Subject<string>();
    public abstract get state(): EditorState;
    public abstract isActive$(name: Record<string, string> | string): Observable<boolean>;
    public abstract isActive(name: Record<string, string> | string): boolean;
    public abstract undoDisabled(): boolean;
    public abstract redoDisabled(): boolean;
    public abstract getFontColor(): string;
    public abstract getFontSize(): number;
    public abstract setFontSize(size: number): void;
    public abstract getBackgroundColor(): string;
    public abstract getCellColor(): string;
    public abstract getGroupColor(): string;
    public abstract onAlign(align: string): void;
    public abstract setImage(src: string): void;
    public abstract undo(): void;
    public abstract redo(): void;
    public abstract setHorizontalRule(): void;
    public abstract removeFormat(): void;
    public abstract setFontColor(color: string): void;
    public abstract setBackgroundColor(color: string): void;
    public abstract toggleBold(): void;
    public abstract toggleItalic(): void;
    public abstract toggleUnderline(): void;
    public abstract toggleBlockquote(): void;
    public abstract toggleStrike(): void;
    public abstract toggleOrderedList(): void;
    public abstract toggleUnorderedList(): void;
    public abstract toggleCode(): void;
    public abstract togglePre(): void;
    public abstract toggleSubscript(): void;
    public abstract toggleSuperscript(): void;
    public abstract toggleCodeBlock(): void;
    public abstract liftListItem(): void;
    public abstract sinkListItem(): void;
    public abstract insertTable(rows: number, cols: number): void;
    public abstract addColumnAfter(): void;
    public abstract addColumnBefore(): void;
    public abstract addRowAfter(): void;
    public abstract addRowBefore(): void;
    public abstract deleteColumn(): void;
    public abstract deleteRow(): void;
    public abstract mergeCells(): void;
    public abstract canMergeCells(): boolean;
    public abstract canSplitCells(): boolean;
    public abstract splitCell(): void;
    public abstract setHeading(level: number): void;
    public abstract removeEmptyTextStyle(): void;
    public abstract toggleMark(
        typeOrName: MarkType | string,
        attributes?: Record<string, any>,
        options?: {
            /**
             * Removes the mark even across the current selection. Defaults to `false`.
             */
            extendEmptyMarkRange?: boolean;
        },
    ): void;
    public abstract setParagraph(options?: {fontSize: string}): void;
    public abstract setHardBreak(): void;
    public abstract setTextSelection(value: Range | number): void;
    public abstract toggleLink(href: string): void;
    public abstract setLink(href: string): void;
    public abstract unsetLink(): void;
    public abstract destroy(): void;
    public abstract selectClosest(): void;
    public abstract focus(): void;
    public abstract setValue(value: string): void;
    public abstract setCellColor(color: string): void;
    public abstract getOriginTiptapEditor(): Editor;
    public abstract enter(): void;
    public abstract setDetails(): void;
    public abstract removeDetails(): void;
    public abstract setGroup(): void;
    public abstract setGroupHilite(color: string): void;
    public abstract removeGroup(): void;
    public abstract setAnchor(id: string): void;
    public abstract removeAnchor(): void;
    public abstract setFileLink(preview: TuiEditorAttachedFile): void;
    public abstract setYoutubeVideo(options: TuiYoutubeOptions): void;
    public abstract setIframe(options: TuiEditableIframe): void;
}
