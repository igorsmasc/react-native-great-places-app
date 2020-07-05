import React from 'react';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import PlacesNavigator from './routes/PlacesNavigator';

export default function App() {
  return (
    <NavigationContainer>
      <PlacesNavigator />
    </NavigationContainer>
  );
}
