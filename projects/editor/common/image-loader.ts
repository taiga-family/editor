/// <reference types="@taiga-ui/tsconfig/ng-dev-mode" />
import {InjectionToken} from '@angular/core';
import {type TuiHandler, tuiTypedFromEvent} from '@taiga-ui/cdk';
import {map, type Observable} from 'rxjs';

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
