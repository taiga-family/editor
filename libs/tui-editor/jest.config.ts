import {Config} from 'jest';

import rootConfig from '../../jest.config';

const config: Config = {
    ...rootConfig,
    coverageDirectory: `<rootDir>/coverage/tui-editor`,
    testMatch: [`<rootDir>/libs/tui-editor/**/*.spec.ts`],
    collectCoverageFrom: [`<rootDir>/libs/tui-editor/**/*.ts`],
};

export default config;
