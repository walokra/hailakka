/* eslint-disable jsx-a11y/iframe-has-title */
/* eslint-disable import/prefer-default-export */
import React, { CSSProperties } from 'react';
import { Platform, StyleSheet, View } from 'react-native';
import { WebView } from 'react-native-webview';

const iFrameStyles: CSSProperties = {
  height: '100%',
  top: 0,
  width: '100%',
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    overflow: 'hidden',
    width: '100%',
  },
});

export const NativeWebView = ({ target }): JSX.Element => {
  if (Platform.OS === 'web') {
    return <iframe src={target} style={iFrameStyles} />;
  }

  return (
    <View style={styles.container}>
      <WebView
        scalesPageToFit={true}
        source={{ uri: target }}
        // javaScriptEnabled
        // domStorageEnabled
        // allowFileAccessFromFileURLs
        startInLoadingState={true}
        // originWhitelist={['*']}
        // mixedContentMode="compatibility"
        // useWebKit={true}
      />
    </View>
  );
};
