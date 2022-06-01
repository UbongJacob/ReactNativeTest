import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import DetailsScreen from './src/screens/DetailsScreen';
import HomeScreen from './src/screens/HomeScreen';
import BottomTabsNavigator from './src/Navigation/BottomTabsNavigator';

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <>
      <StatusBar style='auto' />
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen
            name='BottomTabsNavigator'
            component={BottomTabsNavigator}
          />
          <Stack.Screen name='Details' component={DetailsScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
