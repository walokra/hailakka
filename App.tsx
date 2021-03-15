import React, { useState, useEffect, createContext } from 'react';
import { Provider, useSelector } from 'react-redux';
import {
  StatusBar,
  StyleSheet,
  View,
  SafeAreaView,
  Text,
  ActivityIndicator,
  Dimensions,
} from 'react-native';
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import { AppearanceProvider, useColorScheme } from 'react-native-appearance';

import useCachedResources from './hooks/useCachedResources';
import { listCategories } from './controllers/api';

import Header from './components/Header';

import HomeScreen from './screens/HomeScreen';
import SettingsScreen from './screens/SettingsScreen';

import store from './store';
import { Category } from './models/Category';

const DEFAULT_CONTEXT = {
  htmlFilename: 'uutiset',
  title: 'Uutiset',
};

export const CategoryContext = createContext(DEFAULT_CONTEXT);

function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <Header {...props} />

      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
}

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

function Root(props) {
  // console.log({ props });
  const { title, htmlFilename } = props.item;

  return (
    <CategoryContext.Provider value={{ htmlFilename, title }}>
      <Stack.Navigator>
        <Stack.Screen
          name="Highlakka"
          component={HomeScreen}
          options={{
            title: `Highlakka: ${title}`,
          }}
        />
        <Stack.Screen name="Settings" component={SettingsScreen} />
      </Stack.Navigator>
    </CategoryContext.Provider>
  );
}

function EmptyScreen() {
  return (
    <View
      style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
    ></View>
  );
}

function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  const dimensions = Dimensions.get('window');
  const isLargeScreen = dimensions.width >= 768;

  const darkModeEnabled = useSelector(
    (state) => state.Settings.darkModeEnabled,
  );
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const themeStatusBarStyle =
    colorScheme == 'light' && !darkModeEnabled
      ? 'dark-content'
      : 'light-content';

  useEffect(() => {
    // const languages = listLanguages("high.fi")
    const domainToUse = 'fi.high.fi';
    listCategories(
      domainToUse,
      'Suosituimmat',
      'uutiset',
      'Uusimmat',
      'finnish',
    )
      .then((categories) => {
        setCategories(categories);
        setLoading(false);
        setError(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
        setError(true);
      })
      .finally(() => setLoading(false));
  }, []);

  if (!isLoadingComplete) {
    return null;
  } else {
    if (loading) {
      return (
        <SafeAreaView style={[styles.container]}>
          <ActivityIndicator animating={true} />
        </SafeAreaView>
      );
    }

    if (error) {
      return (
        <SafeAreaView style={[styles.container]}>
          <Text>Failed to load news!</Text>
        </SafeAreaView>
      );
    }

    return (
      <View style={[styles.container]}>
        <StatusBar barStyle={themeStatusBarStyle} />
        <NavigationContainer
          theme={
            colorScheme === 'light' || darkModeEnabled
              ? DarkTheme
              : DefaultTheme
          }
        >
          <Drawer.Navigator
            drawerType={isLargeScreen ? 'permanent' : 'back'}
            drawerStyle={isLargeScreen ? null : { width: '100%' }}
            overlayColor="transparent"
            drawerContent={(props) => <CustomDrawerContent {...props} />}
            initialRouteName="Root"
          >
            {categories && categories.length > 0 ? (
              categories.map((item: Category, index) => (
                <Drawer.Screen
                  key={item.sectionID}
                  name={item.title + '_' + item.sectionID}
                  component={(props) => <Root {...props} item={item} />}
                  options={{ drawerLabel: item.title }}
                />
              ))
            ) : (
              <Drawer.Screen name="empty" component={EmptyScreen} />
            )}
          </Drawer.Navigator>
        </NavigationContainer>
      </View>
    );
  }
}

export default function AppContainer() {
  return (
    <AppearanceProvider>
      <Provider store={store}>
        <App />
      </Provider>
    </AppearanceProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    height: 50,
  },
});
