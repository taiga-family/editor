import {InjectionToken} from '@angular/core';
import {type TuiHandler, tuiTypedFromEvent} from '@taiga-ui/cdk';
import {map, type Observable, of} from 'rxjs';

/**
 * Image loader handler
 */
export const TUI_IMAGE_LOADER = new InjectionToken<
    TuiHandler<Blob | File, Observable<string>>
>(ngDevMode ? 'TUI_IMAGE_LOADER' : '', {
    factory: () => (file) => {
        if (typeof FileReader === 'undefined') {
            return of('');
        }

        const fileReader = new FileReader();

        fileReader.readAsDataURL(file);

        return tuiTypedFromEvent(fileReader, 'load').pipe(
            map(() => String(fileReader.result)),
        );
    },
});
