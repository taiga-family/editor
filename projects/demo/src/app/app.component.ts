import {ChangeDetectionStrategy, Component, inject, type OnInit} from '@angular/core';
import {toSignal} from '@angular/core/rxjs-interop';
import {NavigationEnd, Router, RouterOutlet} from '@angular/router';
import {WA_LOCAL_STORAGE} from '@ng-web-apis/common';
import {TuiAddonDoc} from '@taiga-ui/addon-doc';
import {TUI_DARK_MODE, TuiButton} from '@taiga-ui/core';
import {distinctUntilChanged, filter, map, startWith} from 'rxjs';

@Component({
    selector: 'app',
    imports: [RouterOutlet, TuiAddonDoc, TuiButton],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit {
    protected readonly darkMode = inject(TUI_DARK_MODE);
    protected readonly router = inject(Router);
    protected readonly storage = inject(WA_LOCAL_STORAGE);

    protected readonly isLanding = toSignal(
        this.router.events.pipe(
            filter((event) => event instanceof NavigationEnd),
            map(() => this.url === '' || this.url === '/'),
            distinctUntilChanged(),
            startWith(true),
        ),
        {initialValue: true},
    );

    public ngOnInit(): void {
        void this.replaceEnvInURI();
    }

    protected get url(): string {
        return this.router.routerState.snapshot.url;
    }

    protected get icon(): string {
        return this.darkMode() ? '@tui.sun' : '@tui.moon';
    }

    protected async replaceEnvInURI(): Promise<void> {
        const env = this.storage?.getItem('env');

        if (env) {
            this.storage?.removeItem('env');
            await this.router.navigateByUrl(env);
        }
    }
}
