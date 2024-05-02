import {Injectable} from '@angular/core';
import {TuiValueTransformer} from '@taiga-ui/cdk';
import {tuiLegacyEditorConverter} from '@tinkoff/tui-editor';

@Injectable()
export class ExampleEditorConvertLegacyHtmlTransformer extends TuiValueTransformer<string> {
    public fromControlValue(controlValue: string): string {
        return tuiLegacyEditorConverter(controlValue);
    }

    public toControlValue(componentValue: string): string {
        return componentValue;
    }
}
