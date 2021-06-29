import React, { CSSProperties } from 'react';
import { View, StyleSheet, Platform } from 'react-native';
import { WebView } from 'react-native-webview';

export const NativeWebView = ({ target }): JSX.Element => {
  if (Platform.OS === 'web') {
    return <iframe src={target} style={iFrameStyles} />;
  }
  return (
    <View style={styles.container}>
      <WebView
        source={{ uri: target }}
        // javaScriptEnabled
        // domStorageEnabled
        // allowFileAccessFromFileURLs
        startInLoadingState
        // originWhitelist={['*']}
        // mixedContentMode="compatibility"
        // useWebKit={true}
        scalesPageToFit={true}
      />
    </View>
  );
};

const iFrameStyles: CSSProperties = {
  top: 0,
  height: '100%',
  width: '100%',
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    overflow: 'hidden',
  },
});
