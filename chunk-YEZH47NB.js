import"./chunk-DAQOROHW.js";var n=`import {DOCUMENT} from '@angular/common';
import {ChangeDetectionStrategy, Component, inject, input} from '@angular/core';
import {RouterLink} from '@angular/router';
import {
    type TableOfContentData,
    type TableOfContentDataItem,
} from '@tiptap/extension-table-of-contents';

export interface MyContentsInfo {
    isCreate?: boolean;
    items: TableOfContentData;
}

@Component({
    selector: 'my-table-of-contents',
    imports: [RouterLink],
    templateUrl: './index.html',
    styleUrl: './index.less',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MyToc {
    private readonly doc = inject(DOCUMENT);

    public readonly contents = input<MyContentsInfo | null>();

    public onItemClick(event: Event, item: TableOfContentDataItem): void {
        this.doc.location.hash = '';
        this.doc.location.hash = item.id;

        event.preventDefault();
    }
}
`;export{n as default};
