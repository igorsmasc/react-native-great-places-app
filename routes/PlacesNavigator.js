import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

import PlaceListScreen from '../screens/PlaceListScreen';
import PlaceDetailScreen from '../screens/PlaceDetailScreen';
import NewPlaceScreen from '../screens/NewPlaceScreen';
import MapScreen from '../screens/MapScreen';
import Colors from '../constants/Colors';

const Stack = createStackNavigator();

const defaultStackNavOptions = {
    headerStyle: {
      backgroundColor: Platform.OS === 'android' ? Colors.primary : '',
    },
    headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primary,
  };

const PlacesNavigator = () => {
    return (
      <Stack.Navigator screenOptions={defaultStackNavOptions} initialRouteName="list">
        <Stack.Screen name="list" component={PlaceListScreen} />
        <Stack.Screen name="detail" component={PlaceDetailScreen} />
        <Stack.Screen title="Add Place" name="newPlace" component={NewPlaceScreen} />
        <Stack.Screen name="map" component={MapScreen} />
    </Stack.Navigator>
    )
}

export default PlacesNavigator;