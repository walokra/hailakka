module.exports = {
  apps: {
    'android.ci.release': {
      binaryPath: './android/app/build/outputs/apk/release/app-release.apk',
      build: 'cd android && ./gradlew assembleRelease assembleAndroidTest -DtestBuildType=debug && cd ..',
      testBinaryPath: './android/app/build/outputs/apk/androidTest/debug/app-debug-androidTest.apk',
      type: 'android.apk',
    },
    'android.development': {
      binaryPath: './android/app/build/outputs/apk/debug/app-debug.apk',
      build: 'cd android && ./gradlew assembleDebug assembleAndroidTest -DtestBuildType=debug && cd ..',
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
      log: { enabled: false },
      screenshot: {
        enabled: true,
        keepOnlyFailedTestsArtifacts: true,
        shouldTakeAutomaticSnapshots: true,
        takeWhen: {
          appNotReady: true,
          testDone: true,
          testStart: true,
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
    'android.ci': {
      app: 'android.ci.release',
      device: 'emulator',
    },
    'android.development': {
      app: 'android.development',
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
      // utilBinaryPaths: ['./cache/test-butler-app.apk'],
      headless: Boolean(process.env.CI),
      readonly: true,
      type: 'android.emulator',
    },
    simulator: {
      device: {
        type: 'iPhone 14 Pro',
      },
      type: 'ios.simulator',
    },
  },
  jest: {
    reportSpecs: false,
    reportWorkerAssign: false,
    setupTimeout: 120000,
  },
  runnerConfig: './e2e/config.json',
  testRunner: {
    $0: 'jest',
    args: {
      config: 'e2e/config.json',
    },
  },
};
