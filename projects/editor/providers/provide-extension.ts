import {inject, INJECTOR, type Injector, type Provider} from '@angular/core';
import {TUI_EDITOR_EXTENSIONS} from '@taiga-ui/editor/common';
import {type Extension, type Mark, type Node} from '@tiptap/core';

type Loader<Options, Storage> = (
    injector: Injector,
) => Promise<
    Extension<Options, Storage> | Mark<Options, Storage> | Node<Options, Storage>
>;

export function provideTiptapExtension<Options, Storage>(
    loader: Loader<Options, Storage>,
): Provider {
    return {
        multi: true,
        provide: TUI_EDITOR_EXTENSIONS,
        useFactory: async () => loader(inject(INJECTOR)),
    };
}
