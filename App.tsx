/* eslint-disable no-nested-ternary */
/* eslint-disable react/function-component-definition */
/* eslint-disable react/no-children-prop */
/* eslint-disable @typescript-eslint/no-use-before-define */
/* eslint-disable react/forbid-component-props */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { Ionicons } from '@expo/vector-icons';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { DarkTheme, DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { registerRootComponent } from 'expo';
import { StatusBar } from 'expo-status-bar';
import React, { useContext, useEffect, useState } from 'react';
import {
  ActivityIndicator,
  // Dimensions,
  StyleSheet,
  Text,
  // TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import Header from './components/Header';
import { CategoryContext } from './context/CategoryContext';
import ThemeProvider, { ThemeContext } from './context/ThemeProvider';
import { listCategories } from './controllers/api';
import useCachedResources from './hooks/useCachedResources';
import { Category } from './models/Category';
import HomeScreen from './screens/HomeScreen';
import SettingsScreen from './screens/SettingsScreen';
import WebViewScreen from './screens/WebViewScreen';

const CustomDrawerContent = (props: any) => (
  <DrawerContentScrollView {...props}>
    <Header {...props} />

    <DrawerItemList {...props} />
  </DrawerContentScrollView>
);

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

/* </Icon>
  <View>
    <TouchableOpacity
      onPress={() => {
        navigation.navigation.toggleDrawer();
      }}
    >
      <Ionicons name="menu" size={35} />
    </TouchableOpacity>
  </View> */

const DrawerIcon = (navigation: any) => (
  <Ionicons
    color="blue"
    name="menu"
    onPress={() => navigation.navigation.toggleDrawer()}
    size={30}
    testID="drawer-icon"
  />
);

const Root = (props: any): JSX.Element => {
  const { htmlFilename, title } = props.item;

  return (
    <CategoryContext.Provider value={{ htmlFilename, title }}>
      <Stack.Navigator>
        <Stack.Screen
          component={HomeScreen}
          name="Highlakka"
          // options={{
          //   title: `Highlakka: ${title}`,
          // }}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          component={SettingsScreen}
          name="Settings"
          options={{
            title: `Settings`,
          }}
        />
        <Stack.Screen
          component={WebViewScreen}
          name="WebView"
          options={({ route }) => ({ title: (route.params as any).title })}
        />
      </Stack.Navigator>
    </CategoryContext.Provider>
  );
};

const EmptyScreen = () => <View style={{ alignItems: 'center', flex: 1, justifyContent: 'center' }} />;

const App = () => {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();
  // const dimensions = Dimensions.get('window');
  // const isLargeScreen = dimensions.width >= 768;

  const theme = useContext(ThemeContext);
  const darkModeEnabled = theme.state.colorScheme === 'dark';

  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const themeStatusBarStyle =
    colorScheme === 'light' ? (darkModeEnabled ? 'dark' : 'light') : !darkModeEnabled ? 'light' : 'dark';

  useEffect(() => {
    // const languages = listLanguages("high.fi")
    const domainToUse = 'fi.high.fi';

    const fetchCategories = async () => {
      const cat = await listCategories(domainToUse, 'Suosituimmat', 'uutiset', 'Uusimmat', 'finnish');

      setCategories(cat);
      setLoading(false);
      setError(false);
    };

    fetchCategories().catch((e) => {
      console.error(e);
      setLoading(false);
      setError(true);
    });
  }, []);

  if (!isLoadingComplete) {
    return null;
  }

  if (loading) {
    return (
      <SafeAreaProvider>
        <SafeAreaView style={[styles.container]}>
          <ActivityIndicator animating={true} />
        </SafeAreaView>
      </SafeAreaProvider>
    );
  }

  if (error) {
    return (
      <SafeAreaProvider>
        <SafeAreaView style={[styles.container]}>
          <Text>Failed to load news!</Text>
        </SafeAreaView>
      </SafeAreaProvider>
    );
  }

  return (
    <SafeAreaProvider>
      <NavigationContainer
        theme={
          colorScheme === 'light'
            ? darkModeEnabled
              ? DarkTheme
              : DefaultTheme
            : !darkModeEnabled
            ? DefaultTheme
            : DarkTheme
        }
      >
        <View style={[styles.container]} testID="navigation-container-view">
          <StatusBar style={themeStatusBarStyle} />

          <Drawer.Navigator
            drawerContent={CustomDrawerContent}
            // drawerStyle={isLargeScreen ? null : { width: '100%' }}
            // drawerType={isLargeScreen ? 'permanent' : 'back'}
            initialRouteName="Root"
            // overlayColor="transparent"
            screenOptions={({ navigation }) => ({
              // eslint-disable-next-line react/no-unstable-nested-components
              headerLeft: () => <DrawerIcon navigation={navigation} />,
            })}
          >
            {categories && categories.length > 0 ? (
              categories.map((item: Category) => (
                <Drawer.Screen
                  children={() => <Root item={item} />}
                  key={item.sectionID}
                  name={`${item.title}_${item.sectionID}`}
                  options={{ drawerLabel: item.title, headerTitle: item.title }}
                />
              ))
            ) : (
              <Drawer.Screen component={EmptyScreen} name="empty" />
            )}
          </Drawer.Navigator>
        </View>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default function AppContainer(): JSX.Element {
  return (
    <ThemeProvider>
      <App />
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
  },
  header: {
    height: 50,
  },
});

registerRootComponent(App);
