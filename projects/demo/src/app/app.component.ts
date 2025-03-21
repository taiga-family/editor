import type {OnInit} from '@angular/core';
import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {Router} from '@angular/router';
import {LOCAL_STORAGE} from '@ng-web-apis/common';
import {TUI_DOC_ICONS, TuiAddonDoc, TuiDocHeader} from '@taiga-ui/addon-doc';
import {TUI_DARK_MODE, TuiButton} from '@taiga-ui/core';

@Component({
    standalone: true,
    selector: 'app',
    imports: [TuiAddonDoc, TuiButton, TuiDocHeader],
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit {
    private readonly icons = inject(TUI_DOC_ICONS);
    protected readonly darkMode = inject(TUI_DARK_MODE);
    protected readonly router = inject(Router);
    protected readonly storage = inject(LOCAL_STORAGE);

    public ngOnInit(): void {
        void this.replaceEnvInURI();
    }

    protected get icon(): string {
        return this.darkMode() ? this.icons.light : this.icons.dark;
    }

    protected async replaceEnvInURI(): Promise<void> {
        const env = this.storage.getItem('env');

        if (env) {
            this.storage.removeItem('env');
            await this.router.navigateByUrl(env);
        }
    }
}
