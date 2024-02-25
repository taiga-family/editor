/// <reference types="@taiga-ui/tsconfig/ng-dev-mode" />
import {AsyncPipe, NgIf} from '@angular/common';
import {
    ChangeDetectionStrategy,
    Component,
    ElementRef,
    EventEmitter,
    HostBinding,
    HostListener,
    inject,
    Input,
    Output,
    QueryList,
    ViewChild,
    ViewChildren,
} from '@angular/core';
import {
    EMPTY_QUERY,
    tuiAssert,
    TuiDestroyService,
    TuiFocusableModule,
    tuiIsNativeFocusedIn,
    TuiItemModule,
} from '@taiga-ui/cdk';
import {
    TuiButtonModule,
    TuiHintModule,
    TuiHostedDropdownComponent,
    TuiHostedDropdownModule,
} from '@taiga-ui/core';
import {take, takeUntil} from 'rxjs';

import {TUI_EDITOR_DEFAULT_TOOLS} from '../../constants/default-editor-tools';
import {TuiTiptapEditorService} from '../../directives/tiptap-editor/tiptap-editor.service';
import {TuiEditorTool} from '../../enums/editor-tool';
import {TuiEditorAttachedFile} from '../../interfaces/attached';
import {TUI_EDITOR_OPTIONS} from '../../tokens/editor-options';
import {
    TUI_ATTACH_FILES_LOADER,
    TUI_ATTACH_FILES_OPTIONS,
} from '../../tokens/files-loader';
import {TUI_EDITOR_TOOLBAR_TEXTS} from '../../tokens/i18n';
import {TUI_IMAGE_LOADER} from '../../tokens/image-loader';
import {TuiEditLinkComponent} from '../edit-link/edit-link.component';
import {TuiAlignContentComponent} from '../toolbar-tools/align-content/align-content.component';
import {TuiCodeComponent} from '../toolbar-tools/code/code.component';
import {TuiDetailsComponent} from '../toolbar-tools/details/details.component';
import {TuiDetailsRemoveComponent} from '../toolbar-tools/details/details-remove/details-remove.component';
import {TuiFontSizeComponent} from '../toolbar-tools/font-size/font-size.component';
import {TuiFontStyleComponent} from '../toolbar-tools/font-style/font-style.component';
import {TuiEditorGroupToolComponent} from '../toolbar-tools/group/group.component';
import {TuiHighlightColorComponent} from '../toolbar-tools/highlight-color/highlight-color.component';
import {TuiListConfigsComponent} from '../toolbar-tools/list-configs/list-configs.component';
import {TuiTableCellColorComponent} from '../toolbar-tools/table-cell-color/table-cell-color.component';
import {TuiTableCreateComponent} from '../toolbar-tools/table-create/table-create.component';
import {TuiTableMergeCellsComponent} from '../toolbar-tools/table-merge-cells/table-merge-cells.component';
import {TuiTableRowColumnManagerComponent} from '../toolbar-tools/table-row-column-manager/table-row-column-manager.component';
import {TuiTextColorComponent} from '../toolbar-tools/text-color/text-color.component';
import {TuiToolbarNavigationManagerDirective} from './toolbar-navigation-manager.directive';

@Component({
    standalone: true,
    selector: 'tui-toolbar',
    imports: [
        TuiTableCellColorComponent,
        TuiTableMergeCellsComponent,
        TuiTableCreateComponent,
        NgIf,
        TuiItemModule,
        TuiButtonModule,
        TuiHintModule,
        TuiFocusableModule,
        TuiTextColorComponent,
        TuiHighlightColorComponent,
        TuiEditLinkComponent,
        TuiHostedDropdownModule,
        TuiFontStyleComponent,
        AsyncPipe,
        TuiToolbarNavigationManagerDirective,
        TuiDetailsComponent,
        TuiDetailsRemoveComponent,
        TuiEditorGroupToolComponent,
        TuiTableRowColumnManagerComponent,
        TuiCodeComponent,
        TuiListConfigsComponent,
        TuiAlignContentComponent,
        TuiFontSizeComponent,
    ],
    templateUrl: './toolbar.template.html',
    styleUrls: ['./toolbar.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [TuiDestroyService],
    host: {
        role: 'toolbar',
    },
})
export class TuiToolbarComponent {
    @ViewChildren('dropdown', {read: ElementRef})
    private readonly dropdowns: QueryList<ElementRef<HTMLElement>> = EMPTY_QUERY;

    @ViewChild(TuiToolbarNavigationManagerDirective)
    private readonly navigationManager?: TuiToolbarNavigationManagerDirective;

    private readonly filesLoader = inject(TUI_ATTACH_FILES_LOADER, {optional: true});
    private readonly destroy$ = inject(TuiDestroyService, {self: true});
    private readonly imageLoader = inject(TUI_IMAGE_LOADER);

    private readonly el: HTMLElement | null =
        inject(ElementRef, {optional: true})?.nativeElement ?? null;

    protected readonly options = inject(TUI_EDITOR_OPTIONS);

    @Input()
    colors: ReadonlyMap<string, string> = this.options.colors;

    @Input()
    @HostBinding('class._disabled')
    disabled = false;

    @Output()
    readonly linkAdded = new EventEmitter<string>();

    @Output()
    readonly texClicked = new EventEmitter<void>();

    @Output()
    readonly fileAttached = new EventEmitter<TuiEditorAttachedFile[]>();

    readonly editorTool: typeof TuiEditorTool = TuiEditorTool;
    readonly editor = inject(TuiTiptapEditorService);
    readonly attachOptions = inject(TUI_ATTACH_FILES_OPTIONS);
    readonly texts$ = inject(TUI_EDITOR_TOOLBAR_TEXTS);

    toolsSet = new Set<TuiEditorTool>(TUI_EDITOR_DEFAULT_TOOLS);

    @Input()
    set tools(value: readonly TuiEditorTool[]) {
        this.toolsSet = new Set(value);
    }

    get focused(): boolean {
        return (
            tuiIsNativeFocusedIn(this.el) ||
            !!this.dropdowns.find(({nativeElement}) =>
                tuiIsNativeFocusedIn(nativeElement),
            )
        );
    }

    get focusable(): boolean {
        return !this.focused && !this.disabled;
    }

    get unorderedList(): boolean {
        return this.editor.isActive('bulletList');
    }

    get orderedList(): boolean {
        return this.editor.isActive('orderedList');
    }

    get blockquote(): boolean {
        return this.editor.isActive('blockquote');
    }

    get a(): boolean {
        return this.editor.isActive('link');
    }

    get jumpAnchor(): boolean {
        return this.editor.isActive('jumpAnchor');
    }

    get canOpenAnchor(): boolean {
        return !this.a && !this.jumpAnchor;
    }

    get undoDisabled(): boolean {
        return this.editor.undoDisabled();
    }

    get redoDisabled(): boolean {
        return this.editor.redoDisabled();
    }

    get subscript(): boolean {
        return this.editor.isActive('subscript');
    }

    get superscript(): boolean {
        return this.editor.isActive('superscript');
    }

    get formatEnabled(): boolean {
        return (
            this.enabled(TuiEditorTool.Bold) ||
            this.enabled(TuiEditorTool.Italic) ||
            this.enabled(TuiEditorTool.Underline) ||
            this.enabled(TuiEditorTool.Strikethrough)
        );
    }

    get firstBigBlockEnabled(): boolean {
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

    get secondBigBlockEnabled(): boolean {
        return (
            this.enabled(TuiEditorTool.Code) ||
            this.enabled(TuiEditorTool.Tex) ||
            this.enabled(TuiEditorTool.Img) ||
            this.enabled(TuiEditorTool.HR)
        );
    }

    @HostListener('mousedown', ['$event', '$event.target'])
    onMouseDown(event: MouseEvent, target: HTMLElement): void {
        if (target.closest('button')) {
            return;
        }

        event.preventDefault();
        this.editor.focus();
    }

    onBottomFocus(): void {
        this.focusLast();
    }

    onTopFocus(): void {
        this.focusFirst();
    }

    onImage(input: HTMLInputElement): void {
        const file = input.files?.[0];

        input.value = '';

        if (!file) {
            return;
        }

        this.imageLoader(file)
            .pipe(take(1), takeUntil(this.destroy$))
            .subscribe(image => this.addImage(image));
    }

    onAttach(input: HTMLInputElement): void {
        const files = Array.from(input.files || []);

        input.value = '';

        if (!files) {
            return;
        }

        ngDevMode &&
            tuiAssert.assert(
                !!this.filesLoader,
                'Please provide TUI_ATTACH_FILES_LOADER',
            );

        this.filesLoader?.(files)
            .pipe(take(1), takeUntil(this.destroy$))
            .subscribe(attachedFiles => this.fileAttached.emit(attachedFiles));
    }

    onTeX(): void {
        this.texClicked.emit();
    }

    onLink(hosted: TuiHostedDropdownComponent, url?: string): void {
        hosted.open = false;

        if (url) {
            this.editor.toggleLink(url);
        }
    }

    setAnchor(hosted: TuiHostedDropdownComponent, anchor?: string): void {
        hosted.open = false;

        if (anchor) {
            this.editor.setAnchor(anchor);
            this.editor.selectClosest();
        }
    }

    removeAnchor(): void {
        this.editor.removeAnchor();
    }

    enabled(tool: TuiEditorTool): boolean {
        return this.toolsSet.has(tool);
    }

    undo(): void {
        this.editor.undo();
    }

    redo(): void {
        this.editor.redo();
    }

    insertHorizontalRule(): void {
        this.editor.setHorizontalRule();
    }

    removeFormat(): void {
        this.editor.removeFormat();
    }

    toggleOrderedList(): void {
        this.editor.toggleOrderedList();
    }

    toggleQuote(): void {
        this.editor.toggleBlockquote();
    }

    toggleSubscript(): void {
        this.editor.toggleSubscript();
    }

    toggleSuperscript(): void {
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
