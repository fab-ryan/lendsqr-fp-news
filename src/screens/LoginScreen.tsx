import { SafeAreaView, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { View, Text } from '../components/Themed';
import { LoginSvg } from '../svgs';
import { Button } from '../components';
import { lightSecondaryColor } from '../constants/Colors';
export default function LoginScreen() {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <LoginSvg />
        <Text style={styles.title}>Let's you in</Text>
        <Text style={styles.text}>
          Welcome back, Enter details bellow to continue
        </Text>
        <Button title='Continue with Google' icon='google' />

        <Text style={styles.or}>or</Text>
        {/* signup   */}
        <Button
          title='Sign up with email'
          color='secondary'
          icon='envelope'
          onPress={() => {
            navigation.navigate('Register');
          }}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    alignItems: 'center',
    paddingVertical: 20,
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    marginVertical: 20,
  },
  text: {
    color: lightSecondaryColor,
    marginTop: 10,
    marginBottom: 20,
  },
  or: {
    color: lightSecondaryColor,
    marginTop: 20,
    marginBottom: 20,
  },
});
