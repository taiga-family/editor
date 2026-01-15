import {Renderer2} from '@angular/core';
import {WA_WINDOW} from '@ng-web-apis/common';
import {
    INITIALIZATION_TIPTAP_CONTAINER,
    LAZY_EDITOR_EXTENSIONS,
    LAZY_TIPTAP_EDITOR,
    TIPTAP_EDITOR,
    TUI_EDITOR_EXTENSIONS,
    TUI_EDITOR_OPTIONS,
    type TuiEditorOptions,
} from '@taiga-ui/editor/common';
import {TuiTiptapEditorService} from '@taiga-ui/editor/directives/tiptap-editor';
import {type Editor, type Extension, type Mark, type Node} from '@tiptap/core';
import {
    combineLatest,
    map,
    type Observable,
    ReplaySubject,
    shareReplay,
    take,
} from 'rxjs';

import {TuiEditorPortalService} from './portal/editor-portal.service';

interface ServerSideGlobal extends NodeJS.Global {
    document: Document | undefined;
}

declare const globalThis: ServerSideGlobal;

export const TUI_EDITOR_PROVIDERS = [
    {
        provide: LAZY_EDITOR_EXTENSIONS,
        deps: [TUI_EDITOR_EXTENSIONS],
        useFactory: (
            extensions: Array<Promise<Extension>>,
        ): Observable<ReadonlyArray<Extension | Mark | Node>> => {
            const extensions$ = new ReplaySubject<ReadonlyArray<Extension | Mark | Node>>(
                1,
            );

            Promise.all(extensions.flat())
                .then((extensions) => {
                    const extensionsWithoutDuplicates = extensions.reduceRight(
                        (acc, item) => {
                            if (!acc.seen.has(item.name)) {
                                acc.seen.add(item.name);
                                acc.result.unshift(item);
                            }

                            return acc;
                        },
                        {seen: new Set<string>(), result: [] as typeof extensions},
                    ).result;

                    extensions$.next(extensionsWithoutDuplicates);
                })
                .catch(() => extensions$.next([]));

            return extensions$;
        },
    },
    {
        provide: INITIALIZATION_TIPTAP_CONTAINER,
        deps: [Renderer2],
        useFactory: (renderer: Renderer2): HTMLElement => renderer.createElement('div'),
    },
    {
        provide: TIPTAP_EDITOR,
        deps: [
            INITIALIZATION_TIPTAP_CONTAINER,
            LAZY_EDITOR_EXTENSIONS,
            LAZY_TIPTAP_EDITOR,
            WA_WINDOW,
            TUI_EDITOR_OPTIONS,
        ],

        useFactory: (
            element: HTMLElement,
            extensions: Observable<Array<Extension | Mark | Node>>,
            editor: Observable<typeof Editor>,
            winRef: Window,
            options: TuiEditorOptions,
        ): Observable<Editor | null> =>
            combineLatest([editor, extensions]).pipe(
                take(1),
                map(([Editor, extensions]) => {
                    try {
                        if (!globalThis.document) {
                            globalThis.document = winRef.document;
                        }

                        return new Editor({
                            ...options,
                            element,
                            extensions,
                        });
                    } catch {
                        return null;
                    }
                }),
                shareReplay({bufferSize: 1, refCount: true}),
            ),
    },
    TuiTiptapEditorService,
    TuiEditorPortalService,
];
