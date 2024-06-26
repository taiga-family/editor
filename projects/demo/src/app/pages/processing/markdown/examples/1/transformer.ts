import {Injectable} from '@angular/core';
import {TuiValueTransformer} from '@taiga-ui/cdk';
import MarkdownIt from 'markdown-it';

@Injectable()
export class ExampleTransformer extends TuiValueTransformer<string> {
    public fromControlValue(markdown: string): string {
        return new MarkdownIt().render(markdown);
    }

    public toControlValue(componentValue: string): string {
        return componentValue;
    }
}
