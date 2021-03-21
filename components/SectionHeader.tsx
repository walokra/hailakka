import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const SectionHeader = ({ section, colors }) => {
  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <Text style={[styles.title, { color: colors.text }]}>{section}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flexDirection: 'column',
    // alignItems: 'flex-start',
    // justifyContent: 'flex-start',
    alignSelf: 'stretch',
    paddingVertical: 5,
  },
  title: {
    fontSize: 15,
  },
});

export default SectionHeader;
