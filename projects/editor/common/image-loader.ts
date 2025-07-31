/// <reference types="@taiga-ui/tsconfig/ng-dev-mode" />
import {InjectionToken} from '@angular/core';
import type {TuiHandler} from '@taiga-ui/cdk';
import {tuiTypedFromEvent} from '@taiga-ui/cdk';
import type {Observable} from 'rxjs';
import {map} from 'rxjs';

/**
 * Image loader handler
 */
export const TUI_IMAGE_LOADER: InjectionToken<
    TuiHandler<Blob | File, Observable<string>>
> = new InjectionToken<TuiHandler<Blob | File, Observable<string>>>(
    ngDevMode ? 'TUI_IMAGE_LOADER' : '',
    {
        factory: () => (file) => {
            const fileReader = new FileReader();

            fileReader.readAsDataURL(file);

            return tuiTypedFromEvent(fileReader, 'load').pipe(
                map(() => String(fileReader.result)),
            );
        },
    },
);
