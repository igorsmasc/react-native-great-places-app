import React, { useState, useEffect, useCallback } from 'react';
import { Text, StyleSheet, TouchableOpacity, Platform } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

import Colors from '../constants/Colors';

const MapScreen = ({ navigation, route }) => {
  const { initialLocation, readOnly } = route.params;
  const [selectedLocation, setSelectedLocation] = useState(initialLocation);

  const mapRegion = {
    latitude: initialLocation ? initialLocation.lat : 37.78,
    longitude: initialLocation ? initialLocation.lng : -122.43,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };

  const selectLocationHandler = (event) => {
    if (readOnly) {
      return;
    }

    setSelectedLocation({
      lat: event.nativeEvent.coordinate.latitude,
      lng: event.nativeEvent.coordinate.longitude,
    });
  };

  const savePickedLocationHandler = useCallback(() => {
    if (!selectedLocation) {
      // could show an alert!
      return;
    }
    navigation.navigate('newPlace', { pickedLocation: selectedLocation });
  }, [navigation, selectedLocation]);

  useEffect(() => {
    navigation.setOptions({
      title: 'Map',
      headerRight: () => {
        if (readOnly) {
          return {};
        }

        return (
          <TouchableOpacity
            style={styles.headerButton}
            onPress={savePickedLocationHandler}
          >
            <Text style={styles.headerButtonText}>Save</Text>
          </TouchableOpacity>
        );
      },
    });
  }, [navigation, savePickedLocationHandler, readOnly]);

  let markerCoordinates;

  if (selectedLocation) {
    markerCoordinates = {
      latitude: selectedLocation.lat,
      longitude: selectedLocation.lng,
    };
  }

  return (
    <MapView
      style={styles.mapStyle}
      region={mapRegion}
      onPress={selectLocationHandler}
    >
      {markerCoordinates && (
        <Marker title="Picked Location" coordinate={markerCoordinates} />
      )}
    </MapView>
  );
};

const styles = StyleSheet.create({
  mapStyle: {
    flex: 1,
  },
  headerButton: {
    marginHorizontal: 20,
  },
  headerButtonText: {
    fontSize: 16,
    color: Platform.OS === 'android' ? 'white' : Colors.primary,
  },
});

export default MapScreen;
