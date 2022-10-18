module.exports = {
  apps: {
    'android.debug': {
      binaryPath: './android/app/build/outputs/apk/debug/app-debug.apk',
      build: 'cd android && ./gradlew assembleDebug assembleAndroidTest -DtestBuildType=debug && cd ..',
      testBinaryPath: './android/app/build/outputs/apk/androidTest/debug/app-debug-androidTest.apk',
      type: 'android.apk',
    },
    'android.release': {
      binaryPath: './android/app/build/outputs/apk/release/app-release.apk',
      build: 'cd android && ./gradlew assembleRelease assembleAndroidTest -DtestBuildType=debug && cd ..',
      testBinaryPath: './android/app/build/outputs/apk/androidTest/debug/app-debug-androidTest.apk',
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
    'android.debug': {
      app: 'android.debug',
      device: 'emulator',
    },
    'android.release': {
      app: 'android.release',
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
        avdName: 'Pixel_5_API_31',
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
