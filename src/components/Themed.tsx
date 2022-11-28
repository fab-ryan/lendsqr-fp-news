import {
  Text as DefaultText,
  View as DefaultView,
  Pressable as DefaultPressable,
  TextInput as DefaultTextInput,
  PressableProps as DefaultPressableProps,
} from 'react-native';
import { FontAwesome as DefaultFontAwesome } from '@expo/vector-icons';

import Colors, { secondaryColor } from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';

export function useThemeColor(
  props: { light?: string; dark?: string },
  colorName: keyof typeof Colors.light & keyof typeof Colors.dark
) {
  const theme = useColorScheme();
  const colorFromProps = props[theme];
  
  if (colorFromProps) {
    return colorFromProps;
  } else {
    return Colors[theme][colorName];
  }
}

type ThemeProps = {
  lightColor?: string;
  darkColor?: string;
};

type DefaultFontAwesomeProps = {
  size?: number;
  name?: any;
};

export type TextProps = ThemeProps & DefaultText['props'];
export type ViewProps = ThemeProps & DefaultView['props'];
export type PressableProps = ThemeProps &
  DefaultPressableProps &
  DefaultView['props'];
export type FontAwesomeProps = ThemeProps & DefaultFontAwesomeProps;
export type TextInputProps = ThemeProps & DefaultTextInput['props'];


export function Text(props: TextProps) {
  const { style, lightColor, darkColor, ...otherProps } = props;
  const color = useThemeColor({ light: lightColor, dark: darkColor }, 'text');

  return <DefaultText style={[{ color }, style]} {...otherProps} />;
}

export function View(props: ViewProps) {
  const { style, lightColor, darkColor, ...otherProps } = props;
  const backgroundColor = useThemeColor(
    { light: lightColor, dark: darkColor },
    'background'
  );
  return <DefaultView style={[{ backgroundColor }, style]} {...otherProps} />;
}

export function Pressable(props: PressableProps) {
  const { style, lightColor, darkColor, ...otherProps } = props;
  const backgroundColor = useThemeColor(
    { light: lightColor, dark: darkColor },
    'background'
  );

  return (
    <DefaultPressable style={[{ backgroundColor }, style]} {...otherProps} />
  );
}

export function TextInput(props: TextInputProps) {
  const { style, lightColor = '#E2E9EB', darkColor, ...otherProps } = props;
  const color = useThemeColor(
    { light: secondaryColor, dark: lightColor },
    'text'
  );
  const placeholderColor = useThemeColor(
    { light: 'rgba(3, 49, 75, 0.4)', dark: 'rgba(255, 255, 255, 0.4)' },
    'text'
  );
  const backgroundColor = useThemeColor(
    { light: lightColor, dark: darkColor },
    'background'
  );
  return (
    <DefaultTextInput
      style={[{ color, backgroundColor }, style]}
      placeholderTextColor={placeholderColor}
      {...otherProps}
    />
  );
}

export function FontAwesome(props: FontAwesomeProps) {
  const { name, size = 16, lightColor, darkColor, ...otherProps } = props;
  const color = useThemeColor({ light: lightColor, dark: darkColor }, 'text');

  return (
    <DefaultFontAwesome name={name} size={size} color={color} {...otherProps} />
  );
}
