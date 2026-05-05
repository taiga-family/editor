import {
    ChangeDetectionStrategy,
    Component,
    ElementRef,
    inject,
    input,
    viewChild,
    viewChildren,
    ViewEncapsulation,
} from '@angular/core';
import {tuiIsFocusedIn} from '@taiga-ui/cdk';
import {tuiHintOptionsProvider} from '@taiga-ui/core';
import {type AbstractTuiEditor} from '@taiga-ui/editor/common';
import {TuiTiptapEditorService} from '@taiga-ui/editor/directives/tiptap-editor';

import {TuiToolbarNavigationManager} from './toolbar-navigation-manager.directive';

@Component({
    selector: 'tui-toolbar-host',
    imports: [TuiToolbarNavigationManager],
    templateUrl: './toolbar-host.component.html',
    styleUrl: './toolbar-host.style.less',
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [tuiHintOptionsProvider({direction: ['top-start', 'top', 'end']})],
    host: {
        role: 'toolbar',
        tuiToolbarHost: '',
        '[class._disabled]': 'disabled()',
        '(mousedown)': 'onMouseDown($event, $event.target)',
    },
})
export class TuiToolbarHost {
    private readonly dropdowns = viewChildren('dropdown', {read: ElementRef});
    private readonly navigationManager = viewChild(TuiToolbarNavigationManager);
    protected readonly injectionEditor = inject(TuiTiptapEditorService, {optional: true});

    public readonly inputEditor = input<AbstractTuiEditor | null>(null, {
        alias: 'editor',
    });

    public readonly disabled = input(false);

    public readonly el: HTMLElement | null =
        inject(ElementRef, {optional: true})?.nativeElement ?? null;

    protected get editor(): AbstractTuiEditor | null {
        return this.injectionEditor ?? this.inputEditor();
    }

    protected get focused(): boolean {
        return (
            tuiIsFocusedIn(this.el) ||
            !!this.dropdowns().find(({nativeElement}) => tuiIsFocusedIn(nativeElement))
        );
    }

    protected get focusable(): boolean {
        return !this.focused && !this.disabled();
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
        this.navigationManager()?.findFirstFocusableTool()?.focus();
    }

    private focusLast(): void {
        this.navigationManager()?.findFirstFocusableTool(true)?.focus();
    }
}

export {
    /**
     * @deprecated use {@link TuiToolbarHost}
     */
    TuiToolbarHost as TuiToolbarHostComponent,
};
