import {ChangeDetectionStrategy, Component, forwardRef} from '@angular/core';
import {TuiPortals, TuiPortalService} from '@taiga-ui/cdk';
import {TuiDropdownService} from '@taiga-ui/core';

@Component({
    standalone: true,
    selector: 'tui-editor-portal-host',
    template: `
        <ng-container #viewContainer />
    `,
    styleUrl: './editor-portal-host.style.less',
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        {provide: TuiPortalService, useExisting: TuiDropdownService},
        {
            provide: TuiPortals,
            useExisting: forwardRef(() => TuiEditorPortalHost),
        },
    ],
})
export class TuiEditorPortalHost extends TuiPortals {}
