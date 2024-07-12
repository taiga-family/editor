import type {OnInit} from '@angular/core';
import {ChangeDetectionStrategy, Component, HostBinding, inject} from '@angular/core';
import {Router, RouterLink} from '@angular/router';
import {LOCAL_STORAGE} from '@ng-web-apis/common';
import {TUI_DOC_PAGE_LOADED, TuiAddonDoc} from '@taiga-ui/addon-doc';
import {TuiIcon, TuiLink, TuiRoot} from '@taiga-ui/core';
// eslint-disable-next-line @taiga-ui/experience/no-deep-imports
import pkg from '@taiga-ui/editor/package.json';
import {TuiPreview} from '@taiga-ui/kit';

@Component({
    standalone: true,
    selector: 'app',
    imports: [RouterLink, TuiAddonDoc, TuiIcon, TuiLink, TuiPreview, TuiRoot],
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
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
