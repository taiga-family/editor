import type {OnInit} from '@angular/core';
import {ChangeDetectionStrategy, Component, HostBinding, inject} from '@angular/core';
import {Router, RouterLink} from '@angular/router';
import {LOCAL_STORAGE} from '@ng-web-apis/common';
import {TUI_DOC_PAGE_LOADED, TuiDocMainModule} from '@taiga-ui/addon-doc';
import {TuiPreviewModule} from '@taiga-ui/addon-preview';
import {TuiLinkModule, TuiModeModule, TuiRootModule} from '@taiga-ui/core';
import pkg from '@tinkoff/tui-editor/package.json';

@Component({
    standalone: true,
    selector: 'app',
    imports: [
        RouterLink,
        TuiRootModule,
        TuiModeModule,
        TuiLinkModule,
        TuiDocMainModule,
        TuiPreviewModule, // TODO: why?
    ],
    templateUrl: './app.component.html',
    styleUrls: ['./app.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit {
    private readonly pageLoaded$ = inject(TUI_DOC_PAGE_LOADED);

    @HostBinding('class._loaded')
    protected readonly pageLoadedInit = '0';

    @HostBinding('$.class._loaded')
    protected readonly pageLoaded = this.pageLoaded$;

    protected readonly router = inject(Router);
    protected readonly storage = inject(LOCAL_STORAGE);
    protected version = pkg.version;

    public ngOnInit(): void {
        void this.replaceEnvInURI();
    }

    protected async replaceEnvInURI(): Promise<void> {
        const env = this.storage.getItem('env');

        if (env) {
            this.storage.removeItem('env');
            await this.router.navigateByUrl(env);
        }
    }
}
