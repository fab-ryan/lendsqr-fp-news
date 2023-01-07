import { SafeAreaView, StyleSheet } from 'react-native';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { View, Text } from '../components/Themed';
import { RegisterSvg } from '../svgs';
import { ControlledTextInput } from '../components';
import { RegisterValidation } from '../validations';

export default function RegisterScreen() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(RegisterValidation),
  });
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <RegisterSvg />
        <Text style={styles.title}>Create an account</Text>
        <View style={styles.form}>
          <ControlledTextInput
            control={control}
            name='email'
            placeholder='Email'
            label='Email'
            icon='envelope'
          />
          <ControlledTextInput
            control={control}
            name='name'
            placeholder='Name Full Name'
            label='User Name'
          />
        </View>
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
  },
  title: {
    fontSize: 25,
    marginVertical: 20,
  },
  form: {
    width: '100%',
    paddingHorizontal: 20,
  },
});
