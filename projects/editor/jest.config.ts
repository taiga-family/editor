import type {Config} from 'jest';

import rootConfig from '../../jest.config';

const config: Config = {
    ...rootConfig,
    coverageDirectory: '<rootDir>/coverage/editor',
    testMatch: ['<rootDir>/projects/editor/**/*.spec.ts'],
    collectCoverageFrom: ['<rootDir>/projects/editor/**/*.ts'],
};

export default config;
