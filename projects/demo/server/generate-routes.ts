import {readFileSync, writeFileSync} from 'node:fs';
import {join} from 'node:path';

import {TuiDemoPath} from '../src/app/shared/routes';

const EXCEPTIONS: string[] = [TuiDemoPath.Stackblitz];

/**
 * This script is required for correct of `nx prerender demo` command.
 * `@nguniversal/builders:prerender` (version 12) can't extract routes for lazy-loading modules.
 * See: https://github.com/angular/universal/issues/1769
 * ___
 * TODO: after update to the newer version of Angular and `@nguniversal/builders`, check if this script is still required.
 */
(function main(): void {
    const demoPathEnumContent = readFileSync(
        join(process.cwd(), 'projects', 'demo', 'src', 'app', 'shared', 'routes.ts'),
        'utf-8',
    );

    const routes = ['/'];

    const generated = (
        demoPathEnumContent
            .match(/['"`](.*)['"`]/g)
            ?.map(route => route.replaceAll(/['"`]/g, '')) || []
    )
        .filter(route => !EXCEPTIONS.includes(route) && !route.includes('embed'))
        .map(route => `/${route}`);

    console.info('Generated routes:');

    routes.push(...generated);

    routes.forEach(route => console.info(`**** ${route}`));

    writeFileSync(
        join(process.cwd(), 'projects', 'demo', 'server', 'routes.txt'),
        routes?.join('\n') || '',
    );
})();
