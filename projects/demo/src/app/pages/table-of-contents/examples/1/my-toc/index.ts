import {DOCUMENT, NgFor, NgIf} from '@angular/common';
import {ChangeDetectionStrategy, Component, inject, Input} from '@angular/core';
import {RouterLink} from '@angular/router';
import type {
    TableOfContentData,
    TableOfContentDataItem,
} from '@tiptap/extension-table-of-contents';

export interface MyContentsInfo {
    isCreate?: boolean;
    items: TableOfContentData;
}

@Component({
    standalone: true,
    selector: 'my-table-of-contents',
    imports: [NgFor, NgIf, RouterLink],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MyToc {
    private readonly doc = inject(DOCUMENT);

    @Input()
    public contents?: MyContentsInfo | null;

    public onItemClick(event: Event, item: TableOfContentDataItem): void {
        this.doc.location.hash = '';
        this.doc.location.hash = item.id;

        event.preventDefault();
    }
}
