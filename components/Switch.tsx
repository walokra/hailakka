/* eslint-disable react/forbid-component-props */
import React from 'react';
import { ColorValue, StyleSheet, Switch, Text, View } from 'react-native';

const style = StyleSheet.create({
  defaultContainerStyle: {
    alignItems: 'center',
    backgroundColor: 'white',
    flexDirection: 'row',
    minHeight: 50,
    padding: 0,
  },
  defaultDescriptionStyle: {
    flex: 0,
    fontSize: 12,
    paddingLeft: 16,
    paddingRight: 8,
  },
  defaultDisabledOverlayStyle: {
    backgroundColor: 'rgba(255,255,255,0.6)',
    bottom: 0,
    left: 0,
    position: 'absolute',
    right: 0,
    top: 0,
  },
  defaultSwitchWrapperStyle: {
    flex: 0,
    flexDirection: 'row',
    marginRight: 64,
    paddingLeft: 8,
  },
  defaultTitleStyle: {
    flex: 0,
    fontSize: 16,
    paddingLeft: 16,
    paddingRight: 8,
  },
  titleWrapper: { flex: 1, position: 'relative' },
});

const SettingsSwitch: React.FC<{
  // containerProps?: object;
  containerStyle?: object;
  description?: string;
  // descriptionProps?: object;
  descriptionStyle?: object;
  disabled?: boolean;
  // disabledOverlayStyle?: object;
  onValueChange?: any;
  // switchProps?: object;
  // switchWrapperProps?: object;
  // switchWrapperStyle?: object;
  title: string;
  // titleProps?: object;
  titleStyle?: object;
  trackColor?: { false?: ColorValue | null | undefined; true?: ColorValue | null | undefined } | undefined;
  value: boolean;
}> = ({
  containerStyle,
  description,
  descriptionStyle,
  disabled,
  onValueChange,
  title,
  titleStyle,
  trackColor,
  value,
}) => (
  <View style={[style.defaultContainerStyle, containerStyle]}>
    <View style={style.titleWrapper}>
      <Text style={[style.defaultTitleStyle, titleStyle]}>{title}</Text>
      {description ? <Text style={[style.defaultDescriptionStyle, descriptionStyle]}>{description}</Text> : null}
      {disabled ? <View style={[style.defaultDisabledOverlayStyle]} /> : null}
    </View>
    <View style={[style.defaultSwitchWrapperStyle]}>
      <Switch disabled={disabled} onValueChange={onValueChange} trackColor={trackColor} value={value} />
    </View>
  </View>
);

export default SettingsSwitch;
