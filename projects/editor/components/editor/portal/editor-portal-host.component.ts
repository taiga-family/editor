import {ChangeDetectionStrategy, Component, forwardRef} from '@angular/core';
import {TuiPortals, TuiPortalService, TuiVCR} from '@taiga-ui/cdk';
import {TuiPopupService} from '@taiga-ui/core';

@Component({
    selector: 'tui-editor-portal-host',
    imports: [TuiVCR],
    template: `
        <ng-container tuiVCR />
    `,
    styleUrl: './editor-portal-host.style.less',
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        {provide: TuiPortalService, useExisting: TuiPopupService},
        {
            provide: TuiPortals,
            useExisting: forwardRef(() => TuiEditorPortalHost),
        },
    ],
})
export class TuiEditorPortalHost extends TuiPortals {}
