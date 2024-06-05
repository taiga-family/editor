import {NgForOf} from '@angular/common';
import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {TuiActiveZoneDirective} from '@taiga-ui/cdk';
import {TuiButtonDirective, TuiHostedDropdownModule} from '@taiga-ui/core';
import {TuiTiptapEditorService} from '@tbank/tui-editor';

@Component({
    standalone: true,
    selector: 'smiles-tool',
    imports: [
        TuiActiveZoneDirective,
        NgForOf,
        TuiHostedDropdownModule,
        TuiButtonDirective,
    ],
    templateUrl: './smiles-tool.template.html',
    styleUrls: ['./smiles-tool.styles.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExampleTuiSmilesToolComponent {
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
            .chain()
            .focus()
            .insertContent(`<p data-type="emoji">${smile}</p>`)
            .insertContent(' ')
            .run();
    }
}
