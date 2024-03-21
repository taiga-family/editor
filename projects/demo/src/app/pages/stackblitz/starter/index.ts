import type {OnInit} from '@angular/core';
import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {tuiRawLoad, tuiTryParseMarkdownCodeBlock} from '@taiga-ui/addon-doc';
import {TuiLoaderModule} from '@taiga-ui/core';

import {TuiStackblitzService} from '../stackblitz.service';
import {appPrefix} from '../utils';

@Component({
    standalone: true,
    selector: 'demo-stackblitz-starter',
    imports: [TuiLoaderModule],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [TuiStackblitzService],
})
export default class ExampleComponent implements OnInit {
    private readonly stackblitz = inject(TuiStackblitzService);

    public async ngOnInit(): Promise<void> {
        await this.openStackblitz();
    }

    protected async openStackblitz(): Promise<void> {
        const [appTemplate, appComponent, indexHtml, stylesLess] = await Promise.all(
            [
                import('./files/app.component.html.md?raw'),
                import('./files/app.component.ts.md?raw'),
                import('./files/index.html.md?raw'),
                import('./files/styles.less.md?raw'),
            ].map(tuiRawLoad),
        ).then(markdowns => markdowns.map(md => tuiTryParseMarkdownCodeBlock(md)[0]));

        return this.stackblitz.openStarter(
            {
                title: 'TUI Editor Starter',
                description:
                    'A starter for TUI Editor\nDocumentation: https://taiga-family.github.io/tui-editor',
                files: {
                    'src/index.html': indexHtml,
                    'src/styles.less': stylesLess,
                    [appPrefix`app.component.html`]: appTemplate,
                    [appPrefix`app.component.ts`]: appComponent,
                    [appPrefix`app.component.less`]:
                        // eslint-disable-next-line @typescript-eslint/quotes
                        "@import '@taiga-ui/core/styles/taiga-ui-local.less';",
                },
            },
            {
                newWindow: false,
                openFile: appPrefix`app.component.html`,
                hideExplorer: true,
            },
        );
    }
}
