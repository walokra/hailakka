import React from 'react'
import { View, StyleSheet, Text, Button } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { useTheme } from '@react-navigation/native'

import Switch from 'expo-dark-mode-switch'

import { toggleTheme } from '../reducers'

function Header(props) {
  const { colors } = useTheme()
  const darkModeEnabled = useSelector((state) => state.Settings.darkModeEnabled)
  const dispatch = useDispatch()

  const { navigation } = props

  return (
    <View style={styles.switchContainerStyle}>
      <View style={styles.titleWrapper}>
        <Text style={[styles.switchTitleStyle, { color: colors.text }]}>
          Highlakka
        </Text>
      </View>
      <View style={styles.switchWrapperStyle}>
        <Switch
          value={darkModeEnabled}
          onChange={(value) => {
            dispatch(toggleTheme(value))
          }}
        />
      </View>
      <Button title="S" onPress={() => navigation.navigate('Settings')} />
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
  switchContainerStyle: {
    padding: 0,
    minHeight: 50,
    alignItems: 'center',
    flexDirection: 'row'
  },
  switchTitleStyle: {
    flex: 0,
    paddingLeft: 15,
    paddingRight: 8,
    fontSize: 16,
    fontWeight: 'bold'
  },
  switchWrapperStyle: {
    flex: 0,
    flexDirection: 'row',
    paddingLeft: 8,
    marginRight: 64
  },
  titleWrapper: { flex: 1, position: 'relative' }
})
