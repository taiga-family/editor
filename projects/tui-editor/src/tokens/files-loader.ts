import {InjectionToken} from '@angular/core';
import {TuiHandler} from '@taiga-ui/cdk';
import {Observable} from 'rxjs';

import {TuiEditorAttachedFile, TuiEditorAttachOptions} from '../interfaces/attached';

/**
 * files loader options
 */
export const TUI_ATTACH_FILES_OPTIONS: InjectionToken<TuiEditorAttachOptions> =
    new InjectionToken<TuiEditorAttachOptions>('[TUI_ATTACH_FILES_OPTIONS]', {
        factory: () => ({accept: '*/*', multiple: true}),
    });

/**
 * files loader handler
 */
export const TUI_ATTACH_FILES_LOADER: InjectionToken<
    TuiHandler<File[], Observable<TuiEditorAttachedFile[]>>
> = new InjectionToken<TuiHandler<File[], Observable<TuiEditorAttachedFile[]>>>(
    '[TUI_ATTACH_FILES_LOADER]',
);
