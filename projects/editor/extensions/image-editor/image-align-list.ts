import {
    ChangeDetectionStrategy,
    Component,
    computed,
    inject,
    input,
    output,
} from '@angular/core';
import {TuiButton} from '@taiga-ui/core';
import {TUI_EDITOR_OPTIONS} from '@taiga-ui/editor/common';

@Component({
    selector: 'tui-image-align-list',
    imports: [TuiButton],
    template: `
        <button
            aria-label="Justify align"
            size="xs"
            title=""
            tuiIconButton
            type="button"
            [appearance]="isAlignJustify() ? 'outline' : 'flat'"
            [iconStart]="options.icons.imageExtension.alignJustify"
            (click.capture)="alignJustify()"
        >
            Justify align
        </button>
        <button
            aria-label="Align left"
            size="xs"
            tuiIconButton
            type="button"
            [appearance]="isAlignLeft() ? 'outline' : 'flat'"
            [iconStart]="options.icons.imageExtension.alignLeft"
            (click.capture)="alignLeft()"
        >
            Left align
        </button>
        <button
            aria-label="Align center"
            size="xs"
            tuiIconButton
            type="button"
            [appearance]="isAlignCenter() ? 'outline' : 'flat'"
            [iconStart]="options.icons.imageExtension.alignCenter"
            (click.capture)="alignCenter()"
        >
            Center align
        </button>
        <button
            aria-label="Align right"
            size="xs"
            tuiIconButton
            type="button"
            [appearance]="isAlignRight() ? 'outline' : 'flat'"
            [iconStart]="options.icons.imageExtension.alignRight"
            (click.capture)="alignRight()"
        >
            Right align
        </button>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiImageAlignList {
    protected readonly options = inject(TUI_EDITOR_OPTIONS);

    public readonly style = input<string | null | undefined>(null);
    public readonly updateAlignStyles = output<string | null>();

    protected readonly isAlignCenter = computed(
        (style = this.style()) =>
            style?.replaceAll(/\s/g, '').includes('justify-content:center') ?? false,
    );

    protected readonly isAlignJustify = computed(
        (style = this.style()): boolean =>
            style === null || style === undefined || style === '',
    );

    protected readonly isAlignLeft = computed(
        (style = this.style()) =>
            style?.replaceAll(/\s/g, '').includes('float:left') ?? false,
    );

    protected readonly isAlignRight = computed(
        (style = this.style()): boolean =>
            style?.replaceAll(/\s/g, '').includes('float:right') ?? false,
    );

    protected alignLeft(): void {
        this.updateAlignStyles.emit('float: left');
    }

    protected alignCenter(): void {
        this.updateAlignStyles.emit(
            'display: flex; justify-content: center; margin-left: auto; margin-right: auto;',
        );
    }

    protected alignJustify(): void {
        this.updateAlignStyles.emit(null);
    }

    protected alignRight(): void {
        this.updateAlignStyles.emit('float: right');
    }
}
