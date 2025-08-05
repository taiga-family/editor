import {
    ChangeDetectionStrategy,
    Component,
    EventEmitter,
    inject,
    Input,
    Output,
} from '@angular/core';
import {tuiPure} from '@taiga-ui/cdk';
import {TuiButton} from '@taiga-ui/core';
import {TUI_EDITOR_OPTIONS} from '@taiga-ui/editor/common';

@Component({
    standalone: true,
    selector: 'tui-image-align-list',
    imports: [TuiButton],
    template: `
        <button
            aria-label="Justify align"
            size="xs"
            title=""
            tuiIconButton
            type="button"
            [appearance]="isAlignJustify(style) ? 'outline' : 'flat'"
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
            [appearance]="isAlignLeft(style) ? 'outline' : 'flat'"
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
            [appearance]="isAlignCenter(style) ? 'outline' : 'flat'"
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
            [appearance]="isAlignRight(style) ? 'outline' : 'flat'"
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

    @Input()
    public style?: string | null = null;

    @Output()
    public readonly updateAlignStyles = new EventEmitter<string | null>();

    @tuiPure
    protected isAlignCenter(style?: string | null): boolean {
        return style?.replace(/\s/g, '').includes('justify-content:center') ?? false;
    }

    @tuiPure
    protected isAlignJustify(style?: string | null): boolean {
        return style === null || style === undefined || style === '';
    }

    @tuiPure
    protected isAlignLeft(style?: string | null): boolean {
        return style?.replace(/\s/g, '').includes('float:left') ?? false;
    }

    @tuiPure
    protected isAlignRight(style?: string | null): boolean {
        return style?.replace(/\s/g, '').includes('float:right') ?? false;
    }

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
