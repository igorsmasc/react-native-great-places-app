import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../components/HeaderButton';

const PlaceListScreen = ({navigation}) => {

    useEffect(() => {
        navigation.setOptions({
        title: "All Places",
          headerRight: () => (
            <HeaderButtons HeaderButtonComponent={HeaderButton}>
              <Item
                title="menu"
                iconName={Platform.OS === 'android' ? 'md-add' : 'ios-add'}
                onPress={() => {
                  navigation.navigate('newPlace');
                }}
              />
            </HeaderButtons>
          ),
        });
      }, [navigation]);

    return (
        <View>
            <Text>The PlaceListScreen</Text>
        </View>
    )
}


const styles = StyleSheet.create({});

export default PlaceListScreen;