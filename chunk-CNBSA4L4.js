import"./chunk-DAQOROHW.js";var n=`import {Pipe, type PipeTransform} from '@angular/core';
import {Converter} from 'showdown';

@Pipe({name: 'makeMarkdown'})
export class MakeMarkdownPipe implements PipeTransform {
    public transform(html?: string | null): string {
        return new Converter().makeMarkdown(
            html?.replaceAll('&lt;', '<').replaceAll('&gt;', '>') ?? '',
        );
    }
}
`;export{n as default};
