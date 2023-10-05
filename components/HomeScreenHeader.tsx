/* eslint-disable react/destructuring-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
 
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-use-before-define */
/* eslint-disable react/forbid-component-props */
import { useTheme } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Header = (props) => {
  const { colors } = useTheme();

  const capitalizedCategory = props.selectedCategory.charAt(0).toUpperCase() + props.selectedCategory.slice(1);

  return (
    <View style={styles.switchContainerStyle}>
      <View style={styles.titleWrapper}>
        <Text style={[styles.switchTitleStyle, { color: colors.text }]}>{`${capitalizedCategory}`}</Text>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  switchContainerStyle: {
    alignItems: 'center',
    flexDirection: 'row',
    minHeight: 50,
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
