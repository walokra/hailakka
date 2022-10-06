/* eslint-disable @typescript-eslint/no-use-before-define */
/* eslint-disable react/forbid-component-props */
/* eslint-disable @typescript-eslint/no-unused-vars */
// import { useDispatch, useSelector } from 'react-redux';
import { useTheme } from '@react-navigation/native';
import Switch from 'expo-dark-mode-switch';
import React, { useContext } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ThemeContext } from '../context/ThemeProvider';

// import { toggleTheme } from '../reducers';

const Header = (props): JSX.Element => {
  const { colors } = useTheme();
  const theme = useContext(ThemeContext);

  // const { navigation } = props;

  return (
    <View style={styles.switchContainerStyle}>
      <View style={styles.titleWrapper}>
        <Text style={[styles.switchTitleStyle, { color: colors.text }]}>Highlakka</Text>
      </View>
      <View style={styles.switchWrapperStyle}>
        <Switch
          onChange={(value) => {
            theme.setState(value === true ? { colorScheme: 'dark' } : { colorScheme: 'light' });
          }}
          value={theme.state.colorScheme === 'dark'}
        />
      </View>
      {/* <Button title="S" onPress={() => navigation.navigate('Settings')} /> */}
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  switchContainerStyle: {
    alignItems: 'center',
    flexDirection: 'row',
    minHeight: 25,
    padding: 0,
  },
  switchTitleStyle: {
    flex: 0,
    fontSize: 16,
    fontWeight: 'bold',
    paddingLeft: 15,
    paddingRight: 8,
  },
  switchWrapperStyle: {
    flex: 0,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    paddingLeft: 8,
    paddingRight: 8,
  },
  titleWrapper: { flex: 1, position: 'relative' },
});
