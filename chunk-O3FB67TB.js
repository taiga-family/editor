import "./chunk-4MWRP73S.js";

// projects/demo/src/app/pages/table-of-contents/examples/1/my-toc/index.html?raw
var my_toc_default = '<div class="sidebar">\n    <div class="sidebar-options">\n        <h2>Table of contents</h2>\n        <div class="table-of-contents">\n            @for (item of contents()?.items ?? []; track item.id) {\n                <div\n                    [class.is-active]="item.isActive"\n                    [class.is-scrolled-over]="!contents()?.isCreate && item.isScrolledOver"\n                    [style.--level]="item.level"\n                >\n                    <a\n                        routerLink="."\n                        [attr.data-item-index]="item.itemIndex"\n                        [fragment]="item.id"\n                        (click)="onItemClick($event, item)"\n                    >\n                        {{ item.textContent }}\n                    </a>\n                </div>\n            }\n\n            @if (!(contents()?.items ?? []).length) {\n                <div class="empty-state">\n                    <p>Start editing your document to see the outline.</p>\n                </div>\n            }\n        </div>\n    </div>\n</div>\n';
export {
  my_toc_default as default
};
//# sourceMappingURL=chunk-O3FB67TB.js.map
