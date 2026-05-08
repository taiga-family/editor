import"./chunk-DAQOROHW.js";var i=`import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {TuiButton, TuiDropdown} from '@taiga-ui/core';
import {TuiTiptapEditorService} from '@taiga-ui/editor';

@Component({
    selector: 'smiles-tool',
    imports: [TuiButton, TuiDropdown],
    templateUrl: './smiles-tool.template.html',
    styleUrl: './smiles-tool.styles.less',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExampleTuiSmilesTool {
    private readonly editor = inject(TuiTiptapEditorService);

    /* More smiles: https://www.w3schools.com/charsets/ref_emoji.asp */
    protected readonly smiles = [
        '&#129409;',
        '&#9200;',
        '&#9749;',
        '&#9989;',
        '&#10060;',
        '&#10071;',
        '&#10133;',
        '&#128064;',
        '&#128070;',
        '&#128076;',
        '&#128522;',
        '&#128640;',
    ];

    protected insertSmile(smile: string): void {
        this.editor
            .getOriginTiptapEditor()
            ?.chain()
            .focus()
            .insertContent(\`<p data-type="emoji">\${smile}</p>\`)
            .insertContent(' ')
            .run();
    }
}
`;export{i as default};
