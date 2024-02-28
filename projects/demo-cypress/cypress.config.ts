/// <reference types="node" />
import {defineConfig} from 'cypress';

import {
    TUI_CYPRESS_DESKTOP_VIEWPORT_HEIGHT as viewportHeight,
    TUI_CYPRESS_DESKTOP_VIEWPORT_WIDTH as viewportWidth,
} from './cypress/cypress.options';

export const TUI_CYPRESS_CONFIG: Cypress.ConfigOptions = {
    video: false,
    viewportWidth,
    viewportHeight,
    watchForFileChanges: true,
    fixturesFolder: `cypress/fixtures`,
    screenshotsFolder: `cypress/screenshots`,
    requestTimeout: 120_000,
    execTimeout: 120_000,
    taskTimeout: 120_000,
    defaultCommandTimeout: 120_000,
    responseTimeout: 120_000,
    blockHosts: [
        `*.google-analytics.com`,
        `*.doubleclick.net`,
        `*.ggpht.com`,
        `*.bcbits.com`,
    ],
    retries: {
        runMode: 0, // Configure retry attempts for `cypress run`
        openMode: 0, // Configure retry attempts for `cypress open`
    },
    env: {
        waitBeforeScreenshot: 1000,
        waitBeforeAction: 50,
        fonts: {
            '@tui-mobile-min': {width: 360, font: `Manrope`},
            '@tui-mobile': {width: 767, font: `Manrope`},
            '@tui-tablet': {width: 1024, font: `Manrope`},
            '@tui-desktop': {width: 1280, font: `Manrope`},
        },
    },
    e2e: {
        specPattern: `cypress/tests/**/*.cy.ts`,
        supportFile: `cypress/support/e2e.ts`,
        baseUrl: `http://localhost:3333`,
        /**
         * @description:
         * We've imported your old cypress plugins here.
         * You may want to clean this up later by importing these.
         */
        setupNodeEvents(on: Cypress.PluginEvents, config: Cypress.PluginConfigOptions) {
            return require(`./cypress/plugins/index.ts`).default(on, config);
        },
    },
};

// noinspection JSUnusedGlobalSymbols
export default defineConfig(TUI_CYPRESS_CONFIG);
