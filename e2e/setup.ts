/* eslint-disable @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-assignment */
import { device } from 'detox';
import fs from 'fs';
import { configureToMatchImageSnapshot } from 'jest-image-snapshot';
import path from 'path';
import { setDemoMode } from './helpers';

const jestExpect = (global as any).expect;

const kebabCase = (str: string) =>
  str
    .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)!
    .join('-')
    .toLowerCase();

const toMatchImage = configureToMatchImageSnapshot({
  comparisonMethod: 'ssim',
  failureThreshold: 0.01, // fail if there is more than a 1% difference
  failureThresholdType: 'percent',
});

jestExpect.extend({ toMatchImage });

jestExpect.extend({
  async toMatchImageSnapshot(
    // a matcher is a method, it has access to Jest context on `this`
    this: jest.MatcherContext,
    screenName: string,
  ) {
    const { name } = device;
    const deviceName = name.split(' ').slice(1).join('').replace('(', '').replace(')', '');

    const SNAPSHOTS_DIR = `__image_snapshots__/${deviceName}`;

    const { testPath } = this;

    const customSnapshotsDir = path.join(path.dirname(testPath || ''), SNAPSHOTS_DIR);
    const customSnapshotIdentifier = kebabCase(`${screenName}`);

    const tempPath = await device.takeScreenshot(screenName);
    const image = fs.readFileSync(tempPath);

    jestExpect(image).toMatchImage({ customSnapshotIdentifier, customSnapshotsDir });

    return { message: () => 'screenshot matches', pass: true };
  },
});

beforeAll(async () => {
  const language = 'en';
  const locale = 'en-US';

  await device.launchApp({
    languageAndLocale: {
      language,
      locale,
    },
    // newInstance: true,
  });
});

beforeEach(async () => {
	await device.reloadReactNative();
  await setDemoMode();
});
