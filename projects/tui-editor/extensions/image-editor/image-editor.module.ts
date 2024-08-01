import {CommonModule} from '@angular/common';
import {Directive, ElementRef, Inject, NgModule} from '@angular/core';
import {TuiActiveZoneModule} from '@taiga-ui/cdk';
import {
    tuiAsPositionAccessor,
    TuiButtonModule,
    TuiDataListModule,
    TuiDropdownModule,
    TuiHostedDropdownModule,
    TuiPoint,
    TuiPositionAccessor,
} from '@taiga-ui/core';
import {TuiDataListDropdownManagerModule} from '@taiga-ui/kit';
import {TuiEditorResizableModule} from '@tinkoff/tui-editor/components/editor-resizable';

import {TuiImageEditorComponent} from './image-editor.component';

@Directive({
    selector: `[topRight]`,
    providers: [tuiAsPositionAccessor(TuiTopRightDirective)],
})
export class TuiTopRightDirective extends TuiPositionAccessor {
    readonly type = `dropdown`;

    constructor(@Inject(ElementRef) private readonly el: ElementRef<HTMLElement>) {
        super();
    }

    getPosition({width, height}: ClientRect): TuiPoint {
        const {right, top} = this.el.nativeElement.getBoundingClientRect();

        return [top + height + 5, right - width / 2];
    }
}

@NgModule({
    imports: [
        CommonModule,
        TuiEditorResizableModule,
        TuiButtonModule,
        TuiHostedDropdownModule,
        TuiDataListDropdownManagerModule,
        TuiActiveZoneModule,
        TuiDropdownModule,
        TuiDataListModule,
    ],
    declarations: [TuiImageEditorComponent, TuiTopRightDirective],
    exports: [TuiImageEditorComponent],
})
export class TuiImageEditorModule {}
