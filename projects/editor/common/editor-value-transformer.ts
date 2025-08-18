/// <reference types="@taiga-ui/tsconfig/ng-dev-mode" />
import {InjectionToken} from '@angular/core';
import {type TuiValueTransformer} from '@taiga-ui/cdk';

export const TUI_EDITOR_VALUE_TRANSFORMER = new InjectionToken<
    TuiValueTransformer<string | null>
>(ngDevMode ? 'TUI_EDITOR_VALUE_TRANSFORMER' : '');
