/// <reference types="@taiga-ui/tsconfig/ng-dev-mode" />
import {InjectionToken} from '@angular/core';
import {type Editor} from '@tiptap/core';
import {type Observable, ReplaySubject} from 'rxjs';

/**
 * Token for Tiptap Editor
 */
export const TIPTAP_EDITOR = new InjectionToken<Observable<Editor>>(
    ngDevMode ? 'TIPTAP_EDITOR' : '',
);

/**
 * Lazy loaded Editor
 */
export const LAZY_TIPTAP_EDITOR = new InjectionToken(
    ngDevMode ? 'LAZY_TIPTAP_EDITOR' : '',
    {
        factory: () => {
            const editor$ = new ReplaySubject<typeof Editor>(1);

            import('@tiptap/core')
                .then(({Editor}) => editor$.next(Editor))
                .catch(() => editor$.complete());

            return editor$;
        },
    },
);

/**
 * The container in which the tip-tap editor is initialized
 */
export const INITIALIZATION_TIPTAP_CONTAINER = new InjectionToken(
    ngDevMode ? 'INITIALIZATION_TIPTAP_CONTAINER' : '',
);
