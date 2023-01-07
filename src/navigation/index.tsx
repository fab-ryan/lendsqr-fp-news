import { FontAwesome } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { ColorSchemeName } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import { RootStackParamList, RootTabParamList } from './types';
import LinkingConfiguration from './LinkingConfiguration';

import HomeScreen from '../screens/HomeScreen';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';

export default function Navigation({
  colorScheme,
}: {
  colorScheme: ColorSchemeName;
}) {
  const { dark, light } = Colors;
  const customDarkTheme = {
    ...DarkTheme,
    colors: {
      ...DarkTheme.colors,
      background: dark.background,
      card: dark.background,
      border: '#0177BB',
      primary: dark.tint,
      text: dark.text,
    },
  };

  const lightTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: light.background,
      card: light.background,
      border: '#0177BB',
      primary: light.tint,
      text: light.text,
    },
  };
  return (
    <SafeAreaProvider>
      <NavigationContainer
        // linking={LinkingConfiguration}
        theme={colorScheme === 'dark' ? customDarkTheme : lightTheme}
      >
        <RootNavigator />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

const Stack = createNativeStackNavigator<RootStackParamList>();
function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='Login'
        component={LoginScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name='Register'
        component={RegisterScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name='Root'
        component={BottomTabNavigator}
        options={{ headerShown: false }}
      />
      {/* <Stack.Screen==
        name='NotFound'
        component={NotFoundScreen}
        options={{ title: 'Oops!' }}
      />
      <Stack.Screen
        name='Register'
        component={SignupScreen}
        options={{ title: 'Signup' }}
      /> */}
    </Stack.Navigator>
  );
}

const BottomTab = createBottomTabNavigator<RootTabParamList>();

function BottomTabNavigator() {
  const colorScheme = useColorScheme();
  return (
    <SafeAreaView edges={['right', 'bottom', 'left']} style={{ flex: 1 }}>
      <BottomTab.Navigator
        initialRouteName='Home'
        screenOptions={{
          tabBarActiveTintColor: Colors[colorScheme].tabIconSelected,
          tabBarInactiveTintColor: Colors[colorScheme].tabIconDefault,
          tabBarStyle: {
            height: 50,
            paddingBottom: 10,
          },
        }}
      >
        <BottomTab.Screen
          name='Home'
          component={HomeScreen}
          options={{
            title: 'Home',
            tabBarIcon: ({ color }) => <TabBarIcon name='home' color={color} />,
            headerShown: false,
          }}
        />
      </BottomTab.Navigator>
    </SafeAreaView>
  );
}
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={24} {...props} />;
}
