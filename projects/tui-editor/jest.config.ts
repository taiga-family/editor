import {Config} from 'jest';

import rootConfig from '../../jest.config';

const config: Config = {
    ...rootConfig,
    coverageDirectory: '<rootDir>/coverage/tui-editor',
    testMatch: ['<rootDir>/projects/tui-editor/**/*.spec.ts'],
    collectCoverageFrom: ['<rootDir>/projects/tui-editor/**/*.ts'],
};

export default config;
