import {ChangeDetectionStrategy, Component} from '@angular/core';
import {TuiPortals, TuiPortalService} from '@taiga-ui/cdk';
import {TuiDropdownService} from '@taiga-ui/core';

@Component({
    standalone: true,
    selector: 'tui-editor-portal-host',
    template: `
        <ng-container #viewContainer></ng-container>
    `,
    styleUrls: ['./editor-portal-host.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        {provide: TuiPortalService, useExisting: TuiDropdownService},
        {
            provide: TuiPortals,
            useExisting: TuiEditorPortalHost,
        },
    ],
})
export class TuiEditorPortalHost extends TuiPortals {}
