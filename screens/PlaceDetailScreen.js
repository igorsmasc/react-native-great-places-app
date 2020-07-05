import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const PlaceDetailScreen = ({ navigation, route }) => {
  const { placeTitle, placeId } = route.params;

  useEffect(() => {
    navigation.setOptions({
      title: placeTitle,
    });
  }, [navigation, placeTitle]);

  return (
    <View>
      <Text>The PlaceDetailScreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default PlaceDetailScreen;
