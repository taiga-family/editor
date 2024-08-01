import {
    ChangeDetectionStrategy,
    Component,
    EventEmitter,
    Inject,
    Input,
    Output,
} from '@angular/core';
import {tuiPure} from '@taiga-ui/cdk';
import {TUI_EDITOR_OPTIONS, TuiEditorOptions} from '@tinkoff/tui-editor/tokens';

@Component({
    selector: 'tui-image-align',
    templateUrl: './image-align.component.html',
    styleUrls: ['./image-align.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiImageAlignComponent {
    @Input()
    style?: string | null = null;

    @Output()
    readonly updateAlignStyles = new EventEmitter<string | null>();

    constructor(@Inject(TUI_EDITOR_OPTIONS) public readonly options: TuiEditorOptions) {}

    @tuiPure
    isAlignCenter(style?: string | null): boolean {
        return style?.replace(/\s/g, '')?.includes('justify-content:center') ?? false;
    }

    @tuiPure
    isAlignJustify(style?: string | null): boolean {
        return style === null || style === undefined || style === '';
    }

    @tuiPure
    isAlignLeft(style?: string | null): boolean {
        return style?.replace(/\s/g, '')?.includes('float:left') ?? false;
    }

    @tuiPure
    isAlignRight(style?: string | null): boolean {
        return style?.replace(/\s/g, '')?.includes('float:right') ?? false;
    }

    alignLeft(): void {
        this.updateAlignStyles.emit('float: left');
    }

    alignCenter(): void {
        this.updateAlignStyles.emit(
            'display: flex; justify-content: center; margin-left: auto; margin-right: auto;',
        );
    }

    alignJustify(): void {
        this.updateAlignStyles.emit(null);
    }

    alignRight(): void {
        this.updateAlignStyles.emit('float: right');
    }
}
