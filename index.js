import { registerRootComponent } from 'expo';
import React, {useState, useEffect } from 'react';
import App from './scr/Pages/Home';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './scr/Pages/Home';
import Localization from './scr/Pages/Localization';
import Actions from './scr/componentes/Actions';
const Stack = createNativeStackNavigator();

export default function App1(props) {
    const navigation = props.navigation
    const [initialRoute, setInitialRoute] = useState('Splash Screen')
   
  return (
    <>
    <NavigationContainer>
    <Stack.Navigator
                initialRouteName={initialRoute}
                headerMode="none"
                screenOptions={{
                    gestureEnabled: true,
                    headerShown: false,

                }}
            >
        <Stack.Screen name='Home' component={Home} />
        <Stack.Screen name='Localization' component={Localization} />
      </Stack.Navigator>
    </NavigationContainer>
    </>
  );
}

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately
registerRootComponent(App1);
