/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/no-use-before-define */
/* eslint-disable react/function-component-definition */
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from '@react-navigation/native';
// import * as WebBrowser from 'expo-web-browser';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { RectButton, ScrollView } from 'react-native-gesture-handler';
import SettingsSwitch from '../components/Switch';

export default function SettingsScreen() {
  const [isMobileModeEnabled, setIsMobileModeEnabled] = useState(false);
  const { colors } = useTheme();

  return (
    <ScrollView
      contentContainerStyle={[styles.contentContainer]}
      style={[styles.container, { backgroundColor: colors.card }]}
    >
      <View key="application">
        <Text style={[styles.titleStyle, { color: colors.text }]}>Information</Text>
        <View>
          <OptionButton
            icon="md-compass"
            isLastOption={true}
            label="Highlakka on GitHub"
            onPress={
              () => {}
              // WebBrowser.openBrowserAsync(
              //   'https://github.com/walokra/highlakka',
              // )
            }
          />
        </View>
      </View>

      <View>
        <Text style={[styles.titleStyle, { color: colors.text }]}>General</Text>
        <SettingsSwitch
          containerStyle={{ backgroundColor: colors.card }}
          onValueChange={(value: any) => {
            console.log('use mobile mode:', value);
            setIsMobileModeEnabled(value);
          }}
          title="Use mobile mode"
          titleStyle={{ color: colors.text }}
          value={isMobileModeEnabled}
        />
      </View>
    </ScrollView>
  );
}

const OptionButton = ({ icon, isLastOption, label, onPress }) => {
  const { colors } = useTheme();

  return (
    <RectButton
      onPress={onPress}
      style={[styles.option, isLastOption && styles.lastOption, { backgroundColor: colors.card }]}
    >
      <View style={{ flexDirection: 'row' }}>
        <View style={styles.optionIconContainer}>
          <Ionicons color="rgba(0,0,0,0.35)" name={icon} size={22} />
        </View>
        <View>
          <Text style={[styles.optionText, { color: colors.text }]}>{label}</Text>
        </View>
      </View>
    </RectButton>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fafafa',
    flex: 1,
    flexDirection: 'row',
    minHeight: 50,
  },
  contentContainer: {
    flex: 1,
    minHeight: 50,
    paddingTop: 15,
    // alignItems: 'center',
  },
  lastOption: {},
  option: {
    backgroundColor: '#fdfdfd',
    borderBottomWidth: 0,
    borderColor: '#ededed',
    paddingHorizontal: 5,
    paddingVertical: 5,
  },
  optionIconContainer: {
    marginLeft: 12,
    marginRight: 12,
  },
  optionText: {
    alignSelf: 'flex-start',
    fontSize: 15,
    marginTop: 1,
  },
  titleStyle: {
    flex: 0,
    fontSize: 16,
    paddingLeft: 16,
    paddingRight: 8,
  },
});
