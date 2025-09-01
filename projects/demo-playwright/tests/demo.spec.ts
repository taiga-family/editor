import {expect, test} from '@playwright/test';

import {TuiDemoPath} from '../../demo/src/app/shared/routes';
import {DemoPO} from '../utils/page-objects';

test.describe('Demo', () => {
    const IGNORE_FLAKY = new Set<string>([
        TuiDemoPath.EmbedIframe,
        TuiDemoPath.EmbedPDF,
        TuiDemoPath.EmbedYoutube,
        TuiDemoPath.GettingStarted,
        TuiDemoPath.StarterKit,
    ]);

    Object.entries(TuiDemoPath)
        .filter(([, path]) => !IGNORE_FLAKY.has(path))
        .forEach(([name, path]) => {
            test(name, async ({page}) => {
                const demoPage = new DemoPO(page);

                await demoPage.gotoDemoPath(path);

                test.skip(
                    !page.url().endsWith(path),
                    `The page has been redirected to ${page.url()}`,
                );

                await expect
                    .soft(async () => {
                        const examples = await page.locator('tui-doc-example').all();

                        expect.soft(examples.length).toBeGreaterThan(0);

                        for (const example of examples) {
                            await expect
                                .soft(example.getByTestId('tui-doc-example'))
                                .toBeAttached();
                        }
                    })
                    .toPass();

                const examples = await page.getByTestId('tui-doc-example').all();

                for (const [i, example] of examples.entries()) {
                    await example.scrollIntoViewIfNeeded();
                    await demoPage.waitForTimeout(300);

                    await expect
                        .soft(example)
                        .toHaveScreenshot(
                            [path.replace('/', '').replaceAll('/', '-'), `${i + 1}.png`],
                            {timeout: 5 * 60 * 1000 * 2},
                        );
                }
            });
        });
});
