import React from 'react';

import { Colors } from '../components/styles';
const { primary, tertiary } = Colors;

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Login from './../TSScreens/Login';
import Signup from './../TSScreens/Signup';
import Welcome from './../TSScreens/Welcome';

const Stack = createStackNavigator();

const RootStack = () => {
  return (
    
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: 'transparent',
          },
          headerTintColor: tertiary,
          headerTransparent: true,
          headerTitle: '',
          headerLeftContainerStyle: {
            paddingLeft: 20,
          },
        }}
      >
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen options={{ headerTintColor: primary }} name="Welcome" component={Welcome} />
      </Stack.Navigator>
    
  );
};

export default RootStack;
