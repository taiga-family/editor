/// <reference types="@taiga-ui/tsconfig/ng-dev-mode" />
import {AsyncPipe, NgIf} from '@angular/common';
import type {QueryList} from '@angular/core';
import {
    ChangeDetectionStrategy,
    Component,
    DestroyRef,
    ElementRef,
    EventEmitter,
    HostBinding,
    HostListener,
    inject,
    Input,
    Output,
    ViewChild,
    ViewChildren,
} from '@angular/core';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import {EMPTY_QUERY, tuiIsNativeFocusedIn, TuiItem} from '@taiga-ui/cdk';
import {TuiButton, TuiDropdown, TuiHint} from '@taiga-ui/core';
import {take} from 'rxjs';

import {TUI_EDITOR_DEFAULT_TOOLS} from '../../constants/default-editor-tools';
import {TuiTiptapEditorService} from '../../directives/tiptap-editor/tiptap-editor.service';
import {TuiEditorTool, TuiEditorToolType} from '../../types/editor-tool';
import type {TuiEditorAttachedFile} from '../../interfaces/attached';
import type {TuiEditorOptions} from '../../tokens/editor-options';
import {TUI_EDITOR_OPTIONS} from '../../tokens/editor-options';
import {
    TUI_ATTACH_FILES_LOADER,
    TUI_ATTACH_FILES_OPTIONS,
} from '../../tokens/files-loader';
import {TUI_EDITOR_TOOLBAR_TEXTS} from '../../tokens/i18n';
import {TUI_IMAGE_LOADER} from '../../tokens/image-loader';
import {TuiEditLink} from '../edit-link/edit-link.component';
import {TuiAlignContent} from '../toolbar-tools/align-content/align-content.component';
import {TuiCode} from '../toolbar-tools/code/code.component';
import {TuiDetails} from '../toolbar-tools/details/details.component';
import {TuiDetailsRemove} from '../toolbar-tools/details/details-remove/details-remove.component';
import {TuiFontSize} from '../toolbar-tools/font-size/font-size.component';
import {TuiFontStyle} from '../toolbar-tools/font-style/font-style.component';
import {TuiEditorGroupTool} from '../toolbar-tools/group/group.component';
import {TuiHighlightColor} from '../toolbar-tools/highlight-color/highlight-color.component';
import {TuiListConfigs} from '../toolbar-tools/list-configs/list-configs.component';
import {TuiTableCellColor} from '../toolbar-tools/table-cell-color/table-cell-color.component';
import {TuiTableCreate} from '../toolbar-tools/table-create/table-create.component';
import {TuiTableMergeCells} from '../toolbar-tools/table-merge-cells/table-merge-cells.component';
import {TuiTableRowColumnManager} from '../toolbar-tools/table-row-column-manager/table-row-column-manager.component';
import {TuiTextColor} from '../toolbar-tools/text-color/text-color.component';
import {TuiToolbarNavigationManager} from './toolbar-navigation-manager.directive';

@Component({
    standalone: true,
    selector: 'tui-toolbar',
    imports: [
        AsyncPipe,
        NgIf,
        TuiAlignContent,
        TuiButton,
        TuiCode,
        TuiDetails,
        TuiDetailsRemove,
        TuiDropdown,
        TuiEditLink,
        TuiEditorGroupTool,
        TuiFontSize,
        TuiFontStyle,
        TuiHighlightColor,
        TuiHint,
        TuiItem,
        TuiListConfigs,
        TuiTableCellColor,
        TuiTableCreate,
        TuiTableMergeCells,
        TuiTableRowColumnManager,
        TuiTextColor,
        TuiToolbarNavigationManager,
    ],
    templateUrl: './toolbar.template.html',
    styleUrls: ['./toolbar.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {
        role: 'toolbar',
    },
})
export class TuiToolbar {
    @ViewChildren('dropdown', {read: ElementRef})
    private readonly dropdowns: QueryList<ElementRef<HTMLElement>> = EMPTY_QUERY;

    @ViewChild(TuiToolbarNavigationManager)
    private readonly navigationManager?: TuiToolbarNavigationManager;

    private readonly filesLoader = inject(TUI_ATTACH_FILES_LOADER, {optional: true});
    private readonly destroyRef = inject(DestroyRef);
    private readonly imageLoader = inject(TUI_IMAGE_LOADER);
    private readonly options = inject(TUI_EDITOR_OPTIONS);

    private readonly el: HTMLElement | null =
        inject(ElementRef, {optional: true})?.nativeElement ?? null;

    protected readonly editorTool: typeof TuiEditorTool = TuiEditorTool;
    protected readonly editor = inject(TuiTiptapEditorService);
    protected readonly attachOptions = inject(TUI_ATTACH_FILES_OPTIONS);
    protected readonly texts$ = inject(TUI_EDITOR_TOOLBAR_TEXTS);
    protected toolsSet = new Set<TuiEditorToolType>(TUI_EDITOR_DEFAULT_TOOLS);

    @Input()
    public colors: ReadonlyMap<string, string> = this.options.colors;

    @Input()
    @HostBinding('class._disabled')
    public disabled = false;

    @Output()
    public readonly linkAdded = new EventEmitter<string>();

    @Output()
    public readonly texClicked = new EventEmitter<void>();

    @Output()
    public readonly fileAttached = new EventEmitter<TuiEditorAttachedFile[]>();

    @Input()
    public set tools(value: Set<TuiEditorToolType> | readonly TuiEditorToolType[]) {
        this.toolsSet = new Set(value);
    }

    protected get icons(): TuiEditorOptions['icons'] {
        return this.options.icons;
    }

    protected get focused(): boolean {
        return (
            tuiIsNativeFocusedIn(this.el) ||
            !!this.dropdowns.find(({nativeElement}) =>
                tuiIsNativeFocusedIn(nativeElement),
            )
        );
    }

    protected get focusable(): boolean {
        return !this.focused && !this.disabled;
    }

    protected get unorderedList(): boolean {
        return this.editor.isActive('bulletList');
    }

    protected get orderedList(): boolean {
        return this.editor.isActive('orderedList');
    }

    protected get blockquote(): boolean {
        return this.editor.isActive('blockquote');
    }

    protected get a(): boolean {
        return this.editor.isActive('link');
    }

    protected get jumpAnchor(): boolean {
        return this.editor.isActive('jumpAnchor');
    }

    protected get canOpenAnchor(): boolean {
        return !this.a && !this.jumpAnchor;
    }

    protected get undoDisabled(): boolean {
        return this.editor.undoDisabled();
    }

    protected get redoDisabled(): boolean {
        return this.editor.redoDisabled();
    }

    protected get subscript(): boolean {
        return this.editor.isActive('subscript');
    }

    protected get superscript(): boolean {
        return this.editor.isActive('superscript');
    }

    protected get formatEnabled(): boolean {
        return (
            this.enabled(TuiEditorTool.Bold) ||
            this.enabled(TuiEditorTool.Italic) ||
            this.enabled(TuiEditorTool.Underline) ||
            this.enabled(TuiEditorTool.Strikethrough)
        );
    }

    protected get firstBigBlockEnabled(): boolean {
        return (
            this.formatEnabled ||
            this.enabled(TuiEditorTool.Align) ||
            this.enabled(TuiEditorTool.List) ||
            this.enabled(TuiEditorTool.Quote) ||
            this.enabled(TuiEditorTool.Link) ||
            this.enabled(TuiEditorTool.Anchor) ||
            this.enabled(TuiEditorTool.Attach)
        );
    }

    protected get secondBigBlockEnabled(): boolean {
        return (
            this.enabled(TuiEditorTool.Code) ||
            this.enabled(TuiEditorTool.Tex) ||
            this.enabled(TuiEditorTool.Img) ||
            this.enabled(TuiEditorTool.HR)
        );
    }

    @HostListener('mousedown', ['$event', '$event.target'])
    protected onMouseDown(event: MouseEvent, target: HTMLElement): void {
        if (target.closest('button')) {
            return;
        }

        event.preventDefault();
        this.editor.focus();
    }

    protected onBottomFocus(): void {
        this.focusLast();
    }

    protected onTopFocus(): void {
        this.focusFirst();
    }

    protected onImage(input: HTMLInputElement): void {
        const file = input.files?.[0];

        input.value = '';

        if (!file) {
            return;
        }

        this.imageLoader(file)
            .pipe(take(1), takeUntilDestroyed(this.destroyRef))
            .subscribe((image) => this.addImage(image));
    }

    protected onAttach(input: HTMLInputElement): void {
        const files = Array.from(input.files || []);

        input.value = '';

        if (!files) {
            return;
        }

        ngDevMode &&
            console.assert(
                !!this.filesLoader,
                'Please provide TUI_ATTACH_FILES_LOADER, more: https://taiga-family.github.io/editor/starter-kit/Options',
            );

        this.filesLoader?.(files)
            .pipe(take(1), takeUntilDestroyed(this.destroyRef))
            .subscribe((attachedFiles) => this.fileAttached.emit(attachedFiles));
    }

    protected onTeX(): void {
        this.texClicked.emit();
    }

    protected onLink(url?: string): void {
        this.editor.toggleLink(url ?? '');
    }

    protected enabled(tool: TuiEditorToolType): boolean {
        return this.toolsSet.has(tool);
    }

    protected undo(): void {
        this.editor.undo();
    }

    protected redo(): void {
        this.editor.redo();
    }

    protected insertHorizontalRule(): void {
        this.editor.setHorizontalRule();
    }

    protected removeFormat(): void {
        this.editor.removeFormat();
    }

    protected toggleOrderedList(): void {
        this.editor.toggleOrderedList();
    }

    protected toggleQuote(): void {
        this.editor.toggleBlockquote();
    }

    protected toggleSubscript(): void {
        this.editor.toggleSubscript();
    }

    protected toggleSuperscript(): void {
        this.editor.toggleSuperscript();
    }

    private addImage(image: string): void {
        this.editor.setImage(image);
    }

    private focusFirst(): void {
        const firstButton = this.navigationManager?.findFirstFocusableTool();

        if (firstButton) {
            firstButton.focus();
        }
    }

    private focusLast(): void {
        const lastButton = this.navigationManager?.findFirstFocusableTool(true);

        if (lastButton) {
            lastButton.focus();
        }
    }
}
