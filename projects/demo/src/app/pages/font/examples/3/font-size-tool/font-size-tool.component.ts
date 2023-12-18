import {AsyncPipe, NgForOf} from '@angular/common';
import {ChangeDetectionStrategy, Component, Inject} from '@angular/core';
import {WINDOW} from '@ng-web-apis/common';
import {tuiPure} from '@taiga-ui/cdk';
import {
    TuiButtonModule,
    TuiDataListModule,
    TuiHostedDropdownModule,
} from '@taiga-ui/core';
import {TuiTiptapEditorService} from '@tinkoff/tui-editor';
import {distinctUntilChanged, map} from 'rxjs/operators';

@Component({
    standalone: true,
    selector: 'font-size-tool',
    imports: [
        TuiDataListModule,
        NgForOf,
        TuiButtonModule,
        TuiHostedDropdownModule,
        AsyncPipe,
    ],
    templateUrl: './font-size-tool.template.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExampleTuiFontSizeToolComponent {
    readonly sizes = [8, 9, 10, 11, 12, 14, 16, 18, 24, 30];

    readonly size$ = this.editor.stateChange$.pipe(
        map(() => this.fontSize),
        distinctUntilChanged(),
    );

    constructor(
        @Inject(TuiTiptapEditorService) private readonly editor: TuiTiptapEditorService,
        @Inject(WINDOW) private readonly win: Window,
    ) {}

    setFontSize(size: number): void {
        this.editor.setFontSize(size);
    }

    get fontSize(): number {
        return (
            this.editor.getFontSize() ||
            this.getDefaultFontSize(this.editor.getOriginTiptapEditor()?.view?.dom) ||
            16
        );
    }

    increase(): void {
        const newIndex = this.currentIndex + 1;

        if (newIndex <= this.sizes.length - 1) {
            const newSize = this.sizes[newIndex];

            this.setFontSize(newSize);
        }
    }

    decrease(): void {
        const newIndex = this.currentIndex - 1;

        if (newIndex > 0) {
            const newSize = this.sizes[newIndex];

            this.setFontSize(newSize);
        }
    }

    private get currentIndex(): number {
        return this.sizes.indexOf(this.fontSize);
    }

    @tuiPure
    private getDefaultFontSize(element: Element): number {
        return Number(
            this.win
                .getComputedStyle(element)
                .getPropertyValue('font-size')
                .match(/\d+/)?.[0],
        );
    }
}
