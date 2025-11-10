import {resolve} from 'node:path';

import {type Config} from 'jest';

const config: Config = {
    preset: '@taiga-ui/jest-config',
    testMatch: ['<rootDir>/**/*.spec.ts'],
    modulePathIgnorePatterns: ['<rootDir>/package.json'],
    setupFilesAfterEnv: [
        resolve(
            process.cwd(),
            // TODO: drop it after update to the newer version of @taiga-ui/jest-config
            './node_modules/@taiga-ui/testing/esm2022/setup-jest/index.mjs',
        ),
    ],
};

export default config;
