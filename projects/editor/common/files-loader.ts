import {InjectionToken} from '@angular/core';
import {type TuiHandler} from '@taiga-ui/cdk';
import {type Observable} from 'rxjs';

import {type TuiEditorAttachedFile, type TuiEditorAttachOptions} from './attached';

/**
 * files loader options
 */
export const TUI_ATTACH_FILES_OPTIONS = new InjectionToken<TuiEditorAttachOptions>(
    ngDevMode ? 'TUI_ATTACH_FILES_OPTIONS' : '',
    {
        factory: () => ({accept: '*/*', multiple: true}),
    },
);

/**
 * files loader handler
 */
export const TUI_ATTACH_FILES_LOADER = new InjectionToken<
    TuiHandler<File[], Observable<TuiEditorAttachedFile[]>>
>(ngDevMode ? 'TUI_ATTACH_FILES_LOADER' : '');
