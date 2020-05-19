import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React, { useState } from 'react';
import { StatusBar, StyleSheet, View, SafeAreaView, Text } from 'react-native';

import useCachedResources from './hooks/useCachedResources';
import BottomTabNavigator from './navigation/BottomTabNavigator';
import LinkingConfiguration from './navigation/LinkingConfiguration';

import { AppearanceProvider, useColorScheme } from 'react-native-appearance';
import Switch from 'expo-dark-mode-switch';
import { useTheme } from '@react-navigation/native';

const Stack = createStackNavigator();

export default function AppContainer() {
  return (
    <AppearanceProvider>
      <App />
    </AppearanceProvider>
  );
}

function HeaderComponent(props) {
  const { colors } = useTheme();

  return (
    <View style={styles.switchContainerStyle}>
      <View style={styles.titleWrapper}>
        <Text style={[styles.switchTitleStyle, {color: colors.text}]}>Highlakka</Text>
      </View>
      <View style={styles.switchWrapperStyle}>
        <Switch value={props.isDarkModeEnabled} onChange={value => {
          props.setIsDarkModeEnabled(value)}
        } />
      </View>
    </View>
  )
}

function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();
  const [isDarkModeEnabled, setIsDarkModeEnabled] = useState(colorScheme == 'light' ? false : true);

  const themeStatusBarStyle =
    (colorScheme === 'light' && !isDarkModeEnabled) ? 'dark-content' : 'light-content';

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaView style={[styles.container]}>
        <StatusBar barStyle={themeStatusBarStyle} />
        <NavigationContainer linking={LinkingConfiguration} theme={(colorScheme === 'dark' && isDarkModeEnabled) ? DarkTheme : DefaultTheme}>
          <Stack.Navigator
            screenOptions={{
              gestureEnabled: true,
              headerStyle: [styles.header],
              headerBackTitleVisible: false
            }}>
            <Stack.Screen name="Root" component={BottomTabNavigator}
              options={{
                headerTitle: props => <HeaderComponent
                  isDarkModeEnabled={isDarkModeEnabled} setIsDarkModeEnabled={setIsDarkModeEnabled}
                />
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    height: 50
  },
  switchContainerStyle: {
    padding: 0,
    minHeight: 50,
    alignItems: 'center',
    flexDirection: 'row',

  },
  switchTitleStyle: {
    flex: 0,
    paddingLeft: 0,
    paddingRight: 8,
    fontSize: 16,
    fontWeight: "bold"
  },
  switchWrapperStyle: {
    flex: 0,
    flexDirection: 'row',
    paddingLeft: 8,
    marginRight: 64,
  },
  titleWrapper: { flex: 1, position: 'relative' },
});
