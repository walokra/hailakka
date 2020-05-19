import { Ionicons } from '@expo/vector-icons';
import * as WebBrowser from 'expo-web-browser';
import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { RectButton, ScrollView } from 'react-native-gesture-handler';
import SettingsSwitch from '../components/Switch';
import { useTheme } from '@react-navigation/native';

export default function SettingsScreen() {
  const [isMobileModeEnabled, setIsMobileModeEnabled] = useState(false);
  const { colors } = useTheme();

  return (
    <ScrollView style={[styles.container, { backgroundColor: colors.card }]} contentContainerStyle={[styles.contentContainer]}>
      <View key="application">
          <Text style={[styles.titleStyle, { color: colors.text }]}>Information</Text>
          <View>
            <OptionButton
              icon="md-compass"
              label="Highlakka on GitHub"
              onPress={() => WebBrowser.openBrowserAsync('https://github.com/walokra/highlakka')}
              isLastOption
            />
          </View>
      </View>

      <View>
        <Text style={[styles.titleStyle, { color: colors.text }]}>General</Text>
        <SettingsSwitch
          title={"Use mobile mode"}
          containerStyle={{ backgroundColor: colors.card }}
          titleStyle={{ color: colors.text }}
          onValueChange={value => {
            console.log("use mobile mode:", value);
            setIsMobileModeEnabled(value)
          }}
          value={isMobileModeEnabled}
        />
      </View>

    </ScrollView>
  );
}

function OptionButton({ icon, label, onPress, isLastOption }) {
  const { colors } = useTheme();

  return (
    <RectButton style={[styles.option, isLastOption && styles.lastOption, { backgroundColor: colors.card }]} onPress={onPress}>
      <View style={{ flexDirection: 'row' }}>
        <View style={styles.optionIconContainer}>
          <Ionicons name={icon} size={22} color="rgba(0,0,0,0.35)" />
        </View>
        <View>
          <Text style={[styles.optionText, { color: colors.text }]}>{label}</Text>
        </View>
      </View>
    </RectButton>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
    minHeight: 50,
    flexDirection: 'row',
  },
  contentContainer: {
    paddingTop: 15,
    flex: 1,
    minHeight: 50,
    // alignItems: 'center',
  },
  optionIconContainer: {
    marginRight: 12,
    marginLeft: 12,
  },
  titleStyle: {
    flex: 0,
    paddingLeft: 16,
    paddingRight: 8,
    fontSize: 16,
  },
  option: {
    backgroundColor: '#fdfdfd',
    paddingHorizontal: 5,
    paddingVertical: 5,
    borderBottomWidth: 0,
    borderColor: '#ededed',
  },
  lastOption: {
  },
  optionText: {
    fontSize: 15,
    alignSelf: 'flex-start',
    marginTop: 1,
  },
});
