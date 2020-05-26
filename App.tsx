import { NavigationContainer, DefaultTheme, DarkTheme, useNavigation } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
import React, { useState, useEffect } from 'react';
import { StatusBar, StyleSheet, View, SafeAreaView, Text, ActivityIndicator, Dimensions } from 'react-native';

import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';

import useCachedResources from './hooks/useCachedResources';
// import BottomTabNavigator from './navigation/BottomTabNavigator';
import LinkingConfiguration from './navigation/LinkingConfiguration';

import { AppearanceProvider, useColorScheme } from 'react-native-appearance';
import Switch from 'expo-dark-mode-switch';
import { useTheme } from '@react-navigation/native';

import {listLanguages, listCategories} from './controllers/api';

// const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

// <DrawerItem
// label="Uutiset"
// onPress={() => Linking.openURL('https://mywebsite.com/help')}
// />
function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <HeaderComponent
          isDarkModeEnabled={props.isDarkModeEnabled}
          setIsDarkModeEnabled={props.setIsDarkModeEnabled}
      />

      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
}

function SidebarDrawer(props) {
  const dimensions = Dimensions.get('window');
  const isLargeScreen = dimensions.width >= 768;

  let isDarkModeEnabled=props.isDarkModeEnabled
  let setIsDarkModeEnabled=props.setIsDarkModeEnabled

  // <Drawer.Screen name="Articles" component={HomeScreen} />
  // <Drawer.Screen name="Settings" component={SettingsScreen} />

  return (
    <Drawer.Navigator
      openByDefault
      drawerType={isLargeScreen ? 'permanent' : 'back'}
      drawerStyle={isLargeScreen ? null : { width: '100%' }}
      overlayColor="transparent"
      drawerContent={(props) => <CustomDrawerContent {...props} navigation={props.navigation} isDarkModeEnabled={isDarkModeEnabled} setIsDarkModeEnabled={setIsDarkModeEnabled} />}
      initialRouteName="Uutiset"
    >
      {props.categories.map((item, index) =>
        <Drawer.Screen
          key={index}
          name={item.title + "_" + index}
          component={HomeScreen}
          options={{ drawerLabel: item.title }}

        />
      )}
    </Drawer.Navigator>
  );
}

import HomeScreen from './screens/HomeScreen';
import SettingsScreen from './screens/SettingsScreen';

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

    // <Stack.Navigator
    //   screenOptions={{
    //     gestureEnabled: true,
    //     headerStyle: [styles.header],
    //     headerBackTitleVisible: false
    //   }}>
    //   <Stack.Screen name="Root" component={BottomTabNavigator}
    //     options={{
    //       headerTitle: props => <HeaderComponent
    //         isDarkModeEnabled={isDarkModeEnabled} setIsDarkModeEnabled={setIsDarkModeEnabled}
    //       />
    //     }}
    //   />
    // </Stack.Navigator>

  const [categories, setCategories] = useState([]);
  const [loading, setLoading ] = useState(true);
  const [error, setError ] = useState(false);

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
    console.log(colorScheme)
    // if (loading) {
    //   return (
    //     <SafeAreaView style={[styles.container]}>
    //       <ActivityIndicator animating={true} />
    //     </SafeAreaView>
    //   )
    // }

    // if (error) {
    //   return (
    //     <SafeAreaView style={[styles.container]}>
    //       <Text>
    //         Failed to load news!
    //       </Text>
    //     </SafeAreaView>
    //   )
    // }

    return (
      <SafeAreaView style={[styles.container]}>
        <StatusBar barStyle={themeStatusBarStyle} />
        <NavigationContainer linking={LinkingConfiguration} theme={(colorScheme === 'dark' && isDarkModeEnabled) ? DarkTheme : DefaultTheme}>
          <SidebarDrawer
            isDarkModeEnabled={isDarkModeEnabled}
            setIsDarkModeEnabled={setIsDarkModeEnabled}
            categories={categories}
          />
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
