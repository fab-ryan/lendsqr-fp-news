import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

export default function HomeScreen() {


  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Welcome to React Native for Web!</Text>
      <Text style={styles.text}>Start editing to see some magic happen :</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  text: {
    color: 'rgba(0,0,0,0.5)',
    fontSize: 16,
  },
});
