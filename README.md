# Hailakka

News reader client for High.fi done with (Expo)[https://expo.io/].
For native clients see: Highkara for iOS.

## Development

1. `npm i`
1. Start development server: `expo start`

## Running

On real device:
Opening the app on your phone/tablet by scanning the QR code you see in the terminal or in Expo Dev Tools.

On a simulator or emulator:

- Pressing i will open in an iOS simulator.
- Pressing a will open in an Android emulator or connected device.
- Pressing w will open in your browser. Expo supports all major browsers.

## Deployment

Create build

```
expo build:web
```

### Netlify

TDB

## Detox e2e tests

Export Expo project configuration

```
npx expo prebuild --platform ios
```

Run tests

```
npm run e2e:ios
npm run e2e:android
```

Update snapshots

```
npm run e2e:ios:refresh
npm run e2e:android:refresh
```
