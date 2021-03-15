import React from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';
import { useTheme } from '@react-navigation/native';

function Header(props) {
  const { colors } = useTheme();

  const capitalizedCategory = props.selectedCategory.charAt(0).toUpperCase() + props.selectedCategory.slice(1)
  return (
    <View style={styles.switchContainerStyle}>
      <View style={styles.titleWrapper}>
        <Text style={[styles.switchTitleStyle, { color: colors.text }]}>
          {`${capitalizedCategory}`}
        </Text>
      </View>
    </View>
  );
}

export default Header;

const styles = StyleSheet.create({
  switchContainerStyle: {
    padding: 0,
    minHeight: 50,
    alignItems: 'center',
    flexDirection: 'row',
  },
  switchTitleStyle: {
    flex: 0,
    paddingLeft: 15,
    paddingRight: 8,
    fontSize: 16,
    fontWeight: 'bold',
  },
  switchWrapperStyle: {
    flex: 0,
    flexDirection: 'row',
    paddingLeft: 8,
    paddingRight: 8,
    justifyContent: 'flex-end',
  },
  titleWrapper: { flex: 1, position: 'relative' },
});
