[![e2e: iOS](https://github.com/walokra/hailakka/actions/workflows/ios.yml/badge.svg)](https://github.com/walokra/hailakka/actions/workflows/ios.yml) [![e2e: Android](https://github.com/walokra/hailakka/actions/workflows/android.yml/badge.svg)](https://github.com/walokra/hailakka/actions/workflows/android.yml)

# Hailakka

News reader client for High.fi done with [Expo](https://expo.io/).
For native clients see: [Highkara for iOS](https://apps.apple.com/fi/app/highkara-uutislukija/id1035170336).

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

### Dockerized

docker build . -t hailakka
docker run -p 8080:80 hailakka

#### Dockerized app deployed

The PWA is deployed automatically by GitHub Actions to Render.com although Render can do automatic deploy on every push to the repository.

- <https://hailakka.onrender.com/>

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

Change Java version to 11

```
brew reinstall asdf
asdf plugin add java
asdf list-all java
asdf install java zulu-11.60.19
asdf global java zulu-11.60.19
asdf local java zulu-11.60.19
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
