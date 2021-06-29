import React from 'react';
import { StyleSheet, View } from 'react-native';
import { NativeWebView } from '../components/NativeWebview';

export default function WebViewScreen({ route, navigation }) {
  const { link } = route.params;
  return (
    <View style={styles.container}>
      <NativeWebView target={link} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
