module.exports = {
  apps: {
    'android.development': {
      binaryPath: './android/app/build/outputs/apk/release/app-development.apk',
      build: 'cd android && ./gradlew assembleRelease assembleAndroidTest -DtestBuildType=release && cd ..',
      type: 'android.apk',
    },
    'ios.development': {
      binaryPath: './ios/build/Build/Products/Debug-iphonesimulator/hailakka.app',
      build:
        'xcodebuild -workspace ios/hailakka.xcworkspace -scheme hailakka -configuration Debug -sdk iphonesimulator -derivedDataPath ios/build',
      type: 'ios.app',
    },
  },
  artifacts: {
    plugins: {
      screenshot: {
        enabled: false,
        keepOnlyFailedTestsArtifacts: false,
        shouldTakeAutomaticSnapshots: false,
        takeWhen: {
          appNotReady: false,
          testDone: false,
          testStart: false,
        },
      },
      uiHierarchy: 'disabled',
    },
  },
  behavior: {
    init: {
      exposeGlobals: false,
    },
  },
  configurations: {
    'android.development': {
      app: 'android.development',
      device: 'emulator',
    },
    'ios.development': {
      app: 'ios.development',
      device: 'simulator',
    },
  },
  devices: {
    emulator: {
      device: {
        avdName: 'Pixel5_API_31',
      },
      type: 'android.emulator',
      // utilBinaryPaths: ['./cache/test-butler-app.apk'],
    },
    simulator: {
      device: {
        type: 'iPhone 14 Pro',
      },
      type: 'ios.simulator',
    },
  },
  runnerConfig: './e2e/config.json',
  skipLegacyWorkersInjection: true,
  testRunner: 'jest',
};
