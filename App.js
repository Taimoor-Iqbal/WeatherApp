import React from 'react'
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from './src/screens/SplashScreen';
import FetchApi from './src/modal/FetchApi';
export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <StatusBar backgroundColor='darkgray' />
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="splash" component={SplashScreen} />
        <Stack.Screen name="fetch" component={FetchApi} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
