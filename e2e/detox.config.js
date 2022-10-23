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
    'ios.ci.release': {
      binaryPath: './ios/build/Build/Products/Release-iphonesimulator/hailakka.app',
      build:
        'set -o pipefail && xcodebuild -quiet -workspace ios/hailakka.xcworkspace -scheme hailakka -configuration Release -sdk iphonesimulator -derivedDataPath ios/build | xcbeautify --quieter',
      type: 'ios.app',
    },
    'ios.development': {
      binaryPath: './ios/build/Build/Products/Debug-iphonesimulator/hailakka.app',
      build:
        'xcodebuild -quiet -workspace ios/hailakka.xcworkspace -scheme hailakka -configuration Debug -sdk iphonesimulator -derivedDataPath ios/build',
      type: 'ios.app',
    },
  },
  artifacts: {
    plugins: {
      enabled: true,
      log: { enabled: true },
      screenshot: {
        keepOnlyFailedTestsArtifacts: true,
        shouldTakeAutomaticSnapshots: true,
        takeWhen: {
          testDone: true,
          testStart: false,
        },
      },
      uiHierarchy: 'enabled',
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
    'ios.ci': {
      app: 'ios.ci.release',
      device: 'simulator',
    },
    'ios.development': {
      app: 'ios.development',
      device: 'simulator',
    },
  },
  devices: {
    emulator: {
      device: {
        avdName: 'Pixel_5',
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
