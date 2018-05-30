import jestTestResults from '../.jest-test-results.json';
import { withTests } from '@storybook/addon-jest';

export const wTests = withTests({
  results: jestTestResults,
  filesExt: ""
});