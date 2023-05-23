import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Routes } from './scr/routes';
import Home from './scr/Pages/Home';
import Localization from './scr/Pages/Localization';
const Stack = createNativeStackNavigator();

export default function App1() {
  return (
    <>
    </>
    // <NavigationContainer>
    //   <Stack.Navigator>
    //     <Stack.Screen name='Home' component={Home} />
    //     <Stack.Screen name='Localization' component={Localization} />
    //   </Stack.Navigator>
    // </NavigationContainer>
  );
}