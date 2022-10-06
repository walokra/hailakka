/* eslint-disable @typescript-eslint/no-use-before-define */
/* eslint-disable react/forbid-component-props */
/* eslint-disable react/function-component-definition */
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { NativeWebView } from '../components/NativeWebview';

export default function WebViewScreen({ route }) {
  const { link } = route.params;

  return (
    <View style={styles.container}>
      <NativeWebView target={link} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#fff',
    flex: 1,
    justifyContent: 'center',
  },
});
