import {Renderer2} from '@angular/core';
import {WA_WINDOW} from '@ng-web-apis/common';
import type {Editor, Extension, Mark, Node} from '@tiptap/core';
import type {Observable} from 'rxjs';
import {combineLatest, map, ReplaySubject, shareReplay, take} from 'rxjs';

import {TuiTiptapEditorService} from '../../directives/tiptap-editor/tiptap-editor.service';
import {
    LAZY_EDITOR_EXTENSIONS,
    TUI_EDITOR_EXTENSIONS,
} from '../../tokens/editor-extensions';
import {
    INITIALIZATION_TIPTAP_CONTAINER,
    LAZY_TIPTAP_EDITOR,
    TIPTAP_EDITOR,
} from '../../tokens/tiptap-editor';
import {TuiEditorPortalService} from './portal/editor-portal.service';

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

            // eslint-disable-next-line @typescript-eslint/no-floating-promises
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
        ],
        useFactory: (
            element: HTMLElement,
            extensions: Observable<Array<Extension | Mark | Node>>,
            editor: Observable<typeof Editor>,
            winRef: Window,
        ): Observable<Editor | null> =>
            combineLatest([editor, extensions]).pipe(
                take(1),
                map(([LazyEditor, extensions]) => {
                    try {
                        if (!globalThis.document) {
                            globalThis.document = winRef.document;
                        }

                        return new LazyEditor({
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
