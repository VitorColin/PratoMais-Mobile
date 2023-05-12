import 'react-native-reanimated';
import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
// import { Localization, Home } from './scr/Pages'
import Home from './scr/Pages/Home';
import Localization from './scr/Pages/Localization';

// const Stack = createStackNavigator();

// export default function App() {
//     return (
//         <Navigator>
//             <Screen name="home" component={Home} />
//             <Screen name="localizacao" component={Localization} />
//             {/* <Screen name="desconto" component={Desconto} /> */}
//         </Navigator >
//     );
// }
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Localization" component={Localization} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
