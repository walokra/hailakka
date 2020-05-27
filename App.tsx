import React, { useState, useEffect } from 'react';
import { Provider, useSelector } from 'react-redux';
import { StatusBar, StyleSheet, View, SafeAreaView, Text, ActivityIndicator, Dimensions } from 'react-native';
import { NavigationContainer, DefaultTheme, DarkTheme, useTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { AppearanceProvider, useColorScheme } from 'react-native-appearance';

import useCachedResources from './hooks/useCachedResources';
import {listLanguages, listCategories} from './controllers/api';

import Header from './components/Header';

import HomeScreen from './screens/HomeScreen';
import SettingsScreen from './screens/SettingsScreen';

import store from './store';

// function SettingsScreen({ route, navigation }) {
//   const { user } = route.params;
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Text>Settings Screen</Text>
//       <Text>userParam: {JSON.stringify(user)}</Text>
//       <Button
//         title="Go to Profile"
//         onPress={() => navigation.navigate('Profile')}
//       />
//     </View>
//   );
// }

// function HomeScreen({ navigation }) {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Text>Home Screen</Text>
//       <Button
//         title="Go to Settings"
//         onPress={() =>
//           navigation.navigate('Foo', {
//             screen: 'Settings',
//             params: { user: 'jane' },
//           })
//         }
//       />
//     </View>
//   );
// }

function CustomDrawerContent(props, {darkModeEnabled, setDarkModeEnabled}) {
  return (
    <DrawerContentScrollView {...props}>
      <Header />

      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
}

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

function Root() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Highlakka" component={HomeScreen} />
      <Stack.Screen name="Settings" component={SettingsScreen} />
    </Stack.Navigator>
  );
}

function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();
  const { colors } = useTheme();

  const dimensions = Dimensions.get('window');
  const isLargeScreen = dimensions.width >= 768;

  const darkModeEnabled = useSelector(state => state.Settings.darkModeEnabled);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading ] = useState(true);
  const [error, setError ] = useState(false);

  const themeStatusBarStyle =
    (colorScheme == 'light' && !darkModeEnabled) ? 'dark-content': 'light-content';

  useEffect(()=>{
    // const languages = listLanguages("high.fi")
    listCategories("high.fi", "Suosituimmat", "uutiset", "Uusimmat", "finnish")
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
    .finally(() => setLoading(false))
  }, []);

  if (!isLoadingComplete) {
    return null;
  } else {
    if (loading) {
      return (
        <SafeAreaView style={[styles.container]}>
          <ActivityIndicator animating={true} />
        </SafeAreaView>
      )
    }

    if (error) {
      return (
        <SafeAreaView style={[styles.container]}>
          <Text>
            Failed to load news!
          </Text>
        </SafeAreaView>
      )
    }

    return (
      <View style={[styles.container]}>
        <StatusBar barStyle={themeStatusBarStyle} />
        <NavigationContainer theme={(colorScheme === 'dark' || darkModeEnabled) ? DarkTheme : DefaultTheme}>
          <Drawer.Navigator
            openByDefault
            drawerType={isLargeScreen ? 'permanent' : 'back'}
            drawerStyle={isLargeScreen ? null : { width: '100%' }}
            overlayColor="transparent"
            drawerContent={(props) => <CustomDrawerContent {...props} />}
            initialRouteName="Root"
          >
            {categories.map((item, index) =>
              <Drawer.Screen
                key={index}
                name={item.title + "_" + index}
                component={Root}
                options={{ drawerLabel: item.title }}
              />
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
    height: 50
  },
});
