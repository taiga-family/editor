import {Injectable} from '@angular/core';
import {AbstractTuiValueTransformer} from '@taiga-ui/cdk';

import {tuiLegacyEditorConverter} from '../../../../../../../../tui-editor';

@Injectable()
export class ExampleEditorConvertLegacyHtmlTransformer extends AbstractTuiValueTransformer<string> {
    fromControlValue(controlValue: string): string {
        return tuiLegacyEditorConverter(controlValue);
    }

    toControlValue(componentValue: string): string {
        return componentValue;
    }
}
