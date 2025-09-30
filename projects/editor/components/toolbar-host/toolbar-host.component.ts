import {AsyncPipe, NgIf} from '@angular/common';
import {
    ChangeDetectionStrategy,
    Component,
    ElementRef,
    inject,
    Input,
    type QueryList,
    ViewChild,
    ViewChildren,
    ViewEncapsulation,
} from '@angular/core';
import {EMPTY_QUERY, tuiIsFocusedIn} from '@taiga-ui/cdk';
import {tuiHintOptionsProvider} from '@taiga-ui/core';
import {type AbstractTuiEditor} from '@taiga-ui/editor/common';
import {TuiTiptapEditorService} from '@taiga-ui/editor/directives';

import {TuiToolbarNavigationManager} from './toolbar-navigation-manager.directive';

@Component({
    standalone: true,
    selector: 'tui-toolbar-host',
    imports: [AsyncPipe, NgIf, TuiToolbarNavigationManager],
    templateUrl: './toolbar-host.component.html',
    styleUrls: ['./toolbar-host.style.less'],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        tuiHintOptionsProvider({
            direction: ['top-left', 'top', 'right'],
        }),
    ],
    host: {
        role: 'toolbar',
        tuiToolbarHost: '',
        '[class._disabled]': 'disabled',
        '(mousedown)': 'onMouseDown($event, $event.target)',
    },
})
export class TuiToolbarHostComponent {
    @ViewChild(TuiToolbarNavigationManager)
    private readonly navigationManager?: TuiToolbarNavigationManager;

    @ViewChildren('dropdown', {read: ElementRef})
    private readonly dropdowns: QueryList<ElementRef<HTMLElement>> = EMPTY_QUERY;

    protected readonly injectionEditor = inject(TuiTiptapEditorService, {optional: true});

    @Input('editor')
    public inputEditor: AbstractTuiEditor | null = null;

    @Input()
    public disabled = false;

    public readonly el: HTMLElement | null =
        inject(ElementRef, {optional: true})?.nativeElement ?? null;

    protected get editor(): AbstractTuiEditor | null {
        return this.injectionEditor ?? this.inputEditor;
    }

    protected get focused(): boolean {
        return (
            tuiIsFocusedIn(this.el) ||
            !!this.dropdowns.find(({nativeElement}) => tuiIsFocusedIn(nativeElement))
        );
    }

    protected get focusable(): boolean {
        return !this.focused && !this.disabled;
    }

    protected onTopFocus(): void {
        this.focusFirst();
    }

    protected onBottomFocus(): void {
        this.focusLast();
    }

    protected onMouseDown(event: MouseEvent, target: HTMLElement): void {
        if (target.closest('button')) {
            return;
        }

        event.preventDefault();
        this.editor?.focus();
    }

    private focusFirst(): void {
        this.navigationManager?.findFirstFocusableTool()?.focus();
    }

    private focusLast(): void {
        this.navigationManager?.findFirstFocusableTool(true)?.focus();
    }
}
