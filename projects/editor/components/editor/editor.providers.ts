import {Renderer2} from '@angular/core';
import {WA_WINDOW} from '@ng-web-apis/common';
import type {TuiEditorOptions} from '@taiga-ui/editor/common';
import {
    INITIALIZATION_TIPTAP_CONTAINER,
    LAZY_EDITOR_EXTENSIONS,
    LAZY_TIPTAP_EDITOR,
    TIPTAP_EDITOR,
    TUI_EDITOR_EXTENSIONS,
    TUI_EDITOR_OPTIONS,
} from '@taiga-ui/editor/common';
import {TuiTiptapEditorService} from '@taiga-ui/editor/directives';
import type {Editor, Extension, Mark, Node} from '@tiptap/core';
import type {Observable} from 'rxjs';
import {combineLatest, map, ReplaySubject, shareReplay, take} from 'rxjs';

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

            Promise.all(extensions)
                .then((extensions) => extensions$.next(extensions))
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
