import { useState } from 'react';
import {
  View,
  StyleSheet,
  StyleProp,
  ViewStyle,
  TextStyle,
  TextInputFocusEventData,
  NativeSyntheticEvent,
} from 'react-native';
import { Controller, ControllerProps, FieldValues } from 'react-hook-form';

import { TextInput, TextInputProps, Text, FontAwesome } from './Themed';
import { tint, lightColor } from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';

type TextInputFieldProps = TextInputProps & {
  containerStyle?: StyleProp<ViewStyle>;
  label?: string;
  error?: string | boolean;
  icon?: string;
};

type ControlledTextInputProps<T extends keyof FieldValues = keyof FieldValues> =
  TextInputFieldProps &
    Partial<ControllerProps<FieldValues, T>> &
    Pick<ControllerProps<FieldValues, T>, 'name'>;

function TextInputField({
  style,
  placeholder,
  containerStyle,
  secureTextEntry,
  label,
  keyboardType,
  error,
  onBlur = () => {},
  onFocus = () => {},
  icon,
  ...props
}: TextInputProps & TextInputFieldProps) {
  const [secure, setSecure] = useState(secureTextEntry);
  const [isFocused, setOnFocus] = useState(false);
  const hasPhonePadKeyboard = keyboardType === 'phone-pad';

  const theme = useColorScheme();

  const toggleFocus = () => {
    setOnFocus(!isFocused);
  };
  const toggleSecure = () => {
    setSecure(!secure);
  };
  const onBlurhandler = (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
    onBlur(e);
    toggleFocus();
  };

  const onFocusHandler = (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
    onFocus(e);
    toggleFocus();
  };

  let _style: StyleProp<TextStyle> = [style];
  if (secureTextEntry) {
    _style = [
      ..._style,
      {
        paddingRight: 40,
      },
    ];
  }

  if (isFocused) {
    _style = [
      ..._style,
      {
        borderColor: theme === 'light' ? tint : lightColor,
      },
    ];
  }
  if (error) {
    _style = [
      ..._style,
      {
        borderColor: '#F00',
      },
    ];
  }

  if (hasPhonePadKeyboard) {
    _style = [
      ..._style,
      {
        textAlign: 'center',
      },
    ];
  }
  if (theme === 'light') {
    _style = [
      ..._style,
      {
        backgroundColor: '#E2E9EB',
      },
    ];
  } else {
    _style = [
      ..._style,
      {
        backgroundColor: '#608DA7',
      },
    ];
  }
  return (
    <View style={[containerStyle]}>
      {label && <Text style={styles.label}>{label}</Text>}
      <View
        style={
          icon
            ? [styles.inputContainer, { paddingRight: 40 }, ..._style]
            : [styles.inputContainer, ..._style]
        }
      >
        {icon && (
          <FontAwesome
            name={icon}
            size={18}
            lightColor={
              isFocused ? 'rgba(3, 49, 75, 0.6)' : 'rgba(3, 49, 75, 0.4)'
            }
            darkColor={
              isFocused
                ? 'rgba(255, 255, 255, 0.6)'
                : 'rgba(255, 255, 255, 0.4)'
            }
          />
        )}
        <TextInput
          {...props}
          darkColor='#608DA7'
          secureTextEntry={secure}
          placeholder={placeholder}
          keyboardType={keyboardType}
          style={[styles.textInput, ..._style]}
          onBlur={onBlurhandler}
          onFocus={onFocusHandler}
        />
      </View>
    </View>
  );
}

export const ControlledTextInput = ({
  name,
  control,
  rules,
  ...props
}: ControlledTextInputProps) => {
  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({ field: { onChange, onBlur, value } }) => (
        <TextInputField
          {...props}
          onChangeText={onChange}
          onBlur={onBlur}
          value={value}
        />
      )}
    />
  );
};

const styles = StyleSheet.create({
  textInput: {
    fontSize: 16,
    width: '100%',
    backgroundColor: 'transparent',
    padding: 3,
  },
  label: {
    fontSize: 16,
    marginBottom: 4,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    borderWidth: 0.5,
    borderColor: '#ccc',
    borderRadius: 4,
    padding: 8,
  },
});
