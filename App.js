import { View, Text, Button, SafeAreaView, Image } from 'react-native';
import React from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Login from './TSScreens/Login';
import Welcome from './TSScreens/Welcome';
import WalletScreen from './TSScreens/WalletScreen';
import PayScreen from './TSScreens/PayScreen';
import RootStack from './navigators/RootStack';

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'rgb(255,45,85)',
  },
};

const Tab = createBottomTabNavigator();

function MyTab() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Payment') {
            iconName = focused ? 'cash' : 'cash-outline';
          } else if (route.name === 'Wallet') {
            iconName = focused ? 'wallet' : 'wallet-outline';
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
      })}
    >
      <Tab.Screen name="Login" component={RootStack} />
      <Tab.Screen name="Payment" component={PayScreen} />
      <Tab.Screen name="Wallet" component={WalletScreen} />
    </Tab.Navigator>
  );
}

const App = () => {
  return (
    <><NavigationContainer theme={MyTheme}>
      <MyTab />

    </NavigationContainer></>
  );
};

export default App;
