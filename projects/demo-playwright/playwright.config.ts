import type {ViewportSize} from '@playwright/test';
import {defineConfig, devices} from '@playwright/test';

const DEFAULT_VIEWPORT: ViewportSize = {width: 750, height: 700};

export default defineConfig({
    testDir: __dirname,
    testMatch: '**/*.spec.ts',
    outputDir: 'tests-results',
    snapshotDir: 'snapshots',
    reporter: [
        ['html', {outputFolder: 'tests-report'}],
        ['json', {outputFile: 'tests-results/test-results.json'}],
    ],
    fullyParallel: true,
    forbidOnly: !!process.env.CI,
    retries: process.env.CI ? 2 : 0,
    workers: process.env.CI ? '100%' : '50%',
    timeout: 10 * 60 * 1000,
    use: {
        baseURL: `http://localhost:${process.env.NG_SERVER_PORT ?? 3333}`,
        trace: 'on-first-retry',
        testIdAttribute: 'automation-id',
        actionTimeout: 10_000,
        contextOptions: {
            deviceScaleFactor: 2,
            reducedMotion: 'reduce',
            viewport: DEFAULT_VIEWPORT,
            screen: DEFAULT_VIEWPORT,
            hasTouch: true,
        },
    },
    projects: [
        {
            name: 'chromium',
            use: {
                ...devices['Desktop Chrome HiDPI'],
                viewport: DEFAULT_VIEWPORT,
            },
        },
    ],
    expect: {
        toHaveScreenshot: {
            animations: 'disabled',
            caret: 'hide',
            scale: 'device',
            threshold: 0.02,
        },
        toMatchSnapshot: {
            threshold: 0.02,
        },
    },
});
