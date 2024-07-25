import {AsyncPipe, NgForOf} from '@angular/common';
import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {WINDOW} from '@ng-web-apis/common';
import {tuiPure} from '@taiga-ui/cdk';
import {TuiButton, TuiDataList, TuiDropdown} from '@taiga-ui/core';
import {TuiTiptapEditorService} from '@taiga-ui/editor';
import {distinctUntilChanged, map} from 'rxjs';

@Component({
    standalone: true,
    selector: 'font-size-tool',
    imports: [AsyncPipe, NgForOf, TuiButton, TuiDataList, TuiDropdown],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExampleTuiFontSizeTool {
    private readonly editor = inject(TuiTiptapEditorService);
    private readonly win = inject(WINDOW);

    protected readonly sizes = [8, 9, 10, 11, 12, 14, 16, 18, 24, 30];

    protected readonly size$ = this.editor.stateChange$.pipe(
        map(() => this.fontSize),
        distinctUntilChanged(),
    );

    protected get fontSize(): number {
        return (
            this.editor.getFontSize() ||
            this.getDefaultFontSize(this.editor.getOriginTiptapEditor()?.view?.dom) ||
            16
        );
    }

    protected setFontSize(size: number): void {
        this.editor.setFontSize(size);
    }

    protected increase(): void {
        const newIndex = this.currentIndex + 1;

        if (newIndex <= this.sizes.length - 1) {
            const newSize = this.sizes[newIndex];

            this.setFontSize(newSize);
        }
    }

    protected decrease(): void {
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
    private getDefaultFontSize(element?: Element): number {
        return element
            ? Number(
                  this.win
                      .getComputedStyle(element)
                      .getPropertyValue('font-size')
                      .match(/\d+/)?.[0],
              )
            : 16;
    }
}
