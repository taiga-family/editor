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

import {TUI_EDITOR_OPTIONS} from '../../../../tokens/editor-options';

@Component({
    standalone: true,
    selector: 'tui-image-align',
    imports: [TuiButton],
    templateUrl: './image-align.component.html',
    styleUrls: ['./image-align.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiImageAlignComponent {
    protected readonly options = inject(TUI_EDITOR_OPTIONS);

    @Input()
    public style?: string | null = null;

    @Output()
    public readonly updateAlignStyles = new EventEmitter<string | null>();

    @tuiPure
    protected isAlignCenter(style?: string | null): boolean {
        return style?.replace(/\s/g, '')?.includes('justify-content:center') ?? false;
    }

    @tuiPure
    protected isAlignJustify(style?: string | null): boolean {
        return style === null || style === undefined || style === '';
    }

    @tuiPure
    protected isAlignLeft(style?: string | null): boolean {
        return style?.replace(/\s/g, '')?.includes('float:left') ?? false;
    }

    @tuiPure
    protected isAlignRight(style?: string | null): boolean {
        return style?.replace(/\s/g, '')?.includes('float:right') ?? false;
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
