import {
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';

import { Text, Pressable, PressableProps, FontAwesome } from './Themed';
import {
  primaryColor,
  secondaryColor,
  lightColor as defaultLightColor,
} from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';

type props = {
  title?: string;
  color?: 'primary' | 'secondary' | 'danger';
  icon?: string;
};

export const Button = (props: props & PressableProps) => {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';
  const {
    title,
    style,
    lightColor = isDark ? defaultLightColor : primaryColor,
    darkColor = isDark ? primaryColor : secondaryColor,
    color = 'primary',
    icon,
    ...otherProps
  } = props;

  const isPrimary = color === 'primary';
  const isDanger = color === 'danger';

  return (
    <Pressable
      lightColor={isDanger ? '
      ' : isPrimary ? darkColor : lightColor}
      darkColor={isDanger ? '#E22A2A' : isPrimary ? lightColor : darkColor}
      style={[styles.button, style]}
      {...otherProps}
    >
      {icon && (
        <FontAwesome
          name={icon}
          size={18}
          lightColor={isDanger ? '#fff' : isPrimary ? lightColor : darkColor}
          darkColor={isDanger ? '#fff' : secondaryColor}
        />
      )}
      <Text
        lightColor={isDanger ? '#fff' : isPrimary ? lightColor : darkColor}
        darkColor={isDanger ? '#fff' : secondaryColor}
        style={styles.buttonText}
      >
        {title}
      </Text>
    </Pressable>
  );
};

type iconButtonProps = {
  icon: string;
  size?: number;
};

export const IconButton = ({
  onPress,
  icon,
  size = 18,
  style,
}: iconButtonProps & TouchableOpacityProps) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.iconButton, style]}>
      <FontAwesome name={icon} size={size} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 8,
  },
  iconButton: {
    padding: 12,
    borderRadius: 4,
    alignItems: 'center',
    marginHorizontal: 4,
  },
});
