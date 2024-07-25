import './tiptap-editor.types';

import {inject, Injectable} from '@angular/core';
import {tuiPx} from '@taiga-ui/cdk';
import type {Editor, Range} from '@tiptap/core';
import type {MarkType} from 'prosemirror-model';
import {EditorState} from 'prosemirror-state';
import type {Observable} from 'rxjs';
import {distinctUntilChanged, map, startWith} from 'rxjs';

import {AbstractTuiEditor} from '../../abstract/editor-adapter.abstract';
import {EDITOR_BLANK_COLOR} from '../../constants/default-editor-colors';
import type {TuiEditableIframe} from '../../extensions/iframe-editor/iframe-editor.options';
import type {TuiEditableImage} from '../../extensions/image-editor/image-editor.options';
import type {TuiYoutubeOptions} from '../../extensions/youtube';
import type {TuiEditorAttachedFile} from '../../interfaces/attached';
import {TIPTAP_EDITOR} from '../../tokens/tiptap-editor';
import {tuiGetMarkRange} from '../../utils/get-mark-range';
import {tuiParseStyle} from '../../utils/parse-style';
import {tuiIsEmptyParagraph} from './utils/is-empty-paragraph';

type Level = 1 | 2 | 3 | 4 | 5 | 6;

@Injectable()
export class TuiTiptapEditorService extends AbstractTuiEditor {
    private readonly editorRef: Observable<Editor | null> = inject(TIPTAP_EDITOR);

    protected editor?: Editor;

    constructor() {
        super();

        this.editorRef.subscribe((editor) => {
            if (!editor) {
                return;
            }

            this.editor = editor;

            const update = (): void => {
                const content = editor.getHTML();
                const json = editor.getJSON().content;
                const value: string = tuiIsEmptyParagraph(json) ? '' : content;

                this.valueChange$.next(value);
                this.stateChange$.next();
            };

            editor.on('transaction', update.bind(this));
            editor.on('update', update.bind(this));
        });
    }

    public get isFocused(): boolean {
        return this.editor?.isFocused ?? false;
    }

    public get html(): string {
        return this.editor?.getHTML() ?? '';
    }

    public get editable(): boolean {
        return this.editor?.isEditable ?? false;
    }

    public set editable(editable: boolean) {
        this.editor?.setEditable(editable, false);
    }

    public get state(): EditorState | null {
        return this.editor?.state ?? null;
    }

    public getOriginTiptapEditor(): Editor | null {
        return this.editor ?? null;
    }

    public undoDisabled(): boolean {
        return !this.editor?.can().undo();
    }

    public redoDisabled(): boolean {
        return !this.editor?.can().redo();
    }

    public getFontColor(): string {
        return this.editor?.getAttributes('textStyle').fontColor || EDITOR_BLANK_COLOR;
    }

    public getFontSize(): number {
        return parseInt(this.editor?.getAttributes('textStyle').fontSize, 10);
    }

    public setFontSize(size: number): void {
        this.editor
            ?.chain()
            .setMark('textStyle', {fontSize: tuiPx(size)})
            .run();
    }

    public getBackgroundColor(): string {
        return this.editor?.getAttributes('textStyle').backgroundColor || 'transparent';
    }

    public getCellColor(): string {
        return (
            this.editor?.getAttributes('tableCell').background ||
            this.editor?.getAttributes('tableHeader').background ||
            ''
        );
    }

    public getGroupColor(): string {
        if (this.editor?.isActive('group')) {
            const style = this.editor.getAttributes('group')?.style ?? '';
            const styles = tuiParseStyle(style);

            return styles['background-color'] ?? styles['background'] ?? '';
        }

        return '';
    }

    public onAlign(align: string): void {
        this.editor?.chain().focus().setTextAlign(align).run();
    }

    public setImage(src: string): void {
        this.editor
            ?.chain()
            .focus()
            .command(({commands, state}) => {
                const setImage = (commands.setEditableImage ?? commands.setImage) as
                    | ((config: TuiEditableImage) => boolean)
                    | undefined;

                if (setImage) {
                    const anchor = state.selection.anchor;

                    setImage({src});
                    commands.setTextSelection(anchor);

                    return true;
                }

                return false;
            })
            .run();
    }

    public undo(): void {
        this.editor?.chain().undo().run();
    }

    public redo(): void {
        this.editor?.chain().redo().run();
    }

    public setHorizontalRule(): void {
        this.editor?.chain().focus().setHorizontalRule().run();
    }

    public removeFormat(): void {
        this.editor?.commands.unsetAllMarks();
        this.editor?.commands.clearNodes();
    }

    public setFontColor(color: string): void {
        this.editor?.chain().focus().setFontColor(color).run();
    }

    public setBackgroundColor(color: string): void {
        this.editor?.chain().focus().setBackgroundColor(color).run();
    }

    public toggleUnderline(): void {
        this.editor?.chain().focus().toggleUnderline().run();
    }

    public toggleStrike(): void {
        this.editor?.chain().focus().toggleStrike().run();
    }

    public toggleOrderedList(): void {
        this.editor?.chain().focus().toggleOrderedList().run();
    }

    public toggleUnorderedList(): void {
        this.editor?.chain().focus().toggleBulletList().run();
    }

    public togglePre(): void {
        this.editor?.chain().focus().toggleCodeBlock().run();
    }

    public toggleTaskList(): void {
        this.editor?.commands.toggleTaskList();
    }

    public sinkListItem(): void {
        const type = this.editor?.isActive('taskList') ? 'taskItem' : 'listItem';

        this.editor?.chain().focus().sinkListItem(type).run();
    }

    public liftListItem(): void {
        const type = this.editor?.isActive('taskList') ? 'taskItem' : 'listItem';

        this.editor?.chain().focus().liftListItem(type).run();
    }

    public isActive(nameOrAttributes: Record<string, string> | string): boolean {
        return this.editor?.isActive(nameOrAttributes) ?? false;
    }

    public isActive$(
        nameOrAttributes: Record<string, string> | string,
    ): Observable<boolean> {
        return this.stateChange$.pipe(
            startWith(null),
            map(() => this.isActive(nameOrAttributes)),
            distinctUntilChanged(),
        );
    }

    public toggleBold(): void {
        this.editor?.chain().focus().toggleBold().run();
    }

    public toggleCode(): void {
        this.editor?.chain().focus().toggleCode().run();
    }

    public toggleItalic(): void {
        this.editor?.chain().focus().toggleItalic().run();
    }

    public toggleBlockquote(): void {
        this.editor?.chain().focus().toggleBlockquote().run();
    }

    public toggleSubscript(): void {
        this.editor?.chain().focus().toggleSubscript().run();
    }

    public toggleSuperscript(): void {
        this.editor?.chain().focus().toggleSuperscript().run();
    }

    public toggleCodeBlock(): void {
        this.editor?.chain().focus().toggleCodeBlock().run();
    }

    public insertTable(cols: number, rows: number): void {
        this.editor?.chain().focus().insertTable({cols, rows}).run();
    }

    public addColumnAfter(): void {
        this.editor?.chain().focus().addColumnAfter().run();
    }

    public addColumnBefore(): void {
        this.editor?.chain().focus().addColumnBefore().run();
    }

    public addRowAfter(): void {
        this.editor?.chain().focus().addRowAfter().run();
    }

    public addRowBefore(): void {
        this.editor?.chain().focus().addRowBefore().run();
    }

    public deleteColumn(): void {
        this.editor?.chain().focus().deleteColumn().run();
    }

    public deleteRow(): void {
        this.editor?.chain().focus().deleteRow().run();
    }

    public mergeCells(): void {
        this.editor?.chain().focus().mergeCells().run();
    }

    public splitCell(): void {
        this.editor?.chain().focus().splitCell().run();
    }

    public canMergeCells(): boolean {
        return this.editor?.can().mergeCells() ?? false;
    }

    public canSplitCells(): boolean {
        return this.editor?.can().splitCell() ?? false;
    }

    public setHeading(level: Level): void {
        this.editor?.chain().focus().setHeading({level}).run();
    }

    public setParagraph(options?: {fontSize: string}): void {
        this.editor?.chain().focus().setParagraph().run();

        if (options) {
            this.editor?.chain().setMark('textStyle', options).run();
        }
    }

    public setHardBreak(): void {
        this.editor?.chain().setHardBreak().run();
    }

    public setTextSelection(value: Range | number): void {
        this.editor?.commands.setTextSelection(value);
    }

    public toggleLink(href: string): void {
        this.editor?.chain().focus().toggleLink({href}).run();
    }

    public setLink(href: string): void {
        this.editor?.chain().focus().setLink({href}).run();
    }

    public unsetLink(): void {
        this.editor?.chain().focus().unsetLink().run();
    }

    public focus(): void {
        this.editor?.chain().focus().run();
    }

    public setValue(value: string): void {
        if (value === this.html || (value === '' && this.html === '<p></p>')) {
            return;
        }

        this.editor?.commands.setContent(value);
        this.editor?.view.updateState(
            EditorState.create({
                schema: this.editor.state.schema,
                doc: this.editor.state.doc,
                selection: this.editor.state.selection,
                storedMarks: this.editor.state.storedMarks,
                plugins: this.editor.state.plugins,
            }),
        );
    }

    public destroy(): void {
        this.editor?.destroy();
    }

    public setCellColor(color: string): void {
        this.editor?.chain().focus().setCellBackground(color).run();
    }

    public selectClosest(): void {
        const pos = this.editor?.state.selection.anchor;
        const range = tuiGetMarkRange(
            this.editor?.state.doc.resolve(pos ?? 0),
            this.editor?.schema.marks.link,
        );

        if (range) {
            this.editor?.chain().setTextSelection(range).run();
        }
    }

    public enter(): void {
        this.editor?.commands.enter();
    }

    public setDetails(): void {
        this.editor?.commands.setDetails();
    }

    public removeDetails(): void {
        this.editor?.commands.removeDetails();
    }

    public setGroup(): void {
        this.editor?.commands.setGroup();
    }

    public removeGroup(): void {
        this.editor?.commands.removeGroup();
    }

    public setGroupHilite(color: string): void {
        this.editor?.commands.setGroupHilite(color);
    }

    public setAnchor(anchor: string): void {
        this.editor?.commands.setAnchor(anchor.replace('#', ''));
    }

    public removeAnchor(): void {
        this.editor?.commands.removeAnchor();
    }

    public setFileLink(preview: TuiEditorAttachedFile): void {
        this.editor?.commands.setFileLink(preview);
    }

    public setYoutubeVideo(options: TuiYoutubeOptions): void {
        this.editor?.commands.setYoutubeVideo(options as any);
    }

    public setIframe(options: TuiEditableIframe): void {
        this.editor?.commands.setIframe(options);
    }

    public removeEmptyTextStyle(): void {
        this.editor?.commands.removeEmptyTextStyle();
    }

    public toggleMark(
        typeOrName: MarkType | string,
        attributes?: Record<string, any>,
        options?: {extendEmptyMarkRange?: boolean},
    ): void {
        this.editor?.commands.toggleMark(typeOrName, attributes, options);
    }

    public getHTML(): string {
        return this.getOriginTiptapEditor()?.getHTML() ?? '';
    }
}
