import React from 'react';
import { View, Text, StyleSheet, Platform } from 'react-native';
import { NavigationFunctionComponent } from 'react-native-navigation';

const SelectedAlbumScreen: NavigationFunctionComponent = () => {
  return (
    <View style={styles.container}>
      <Text>Temporaly Selected Album Screen</Text>
    </View>
  );
};

SelectedAlbumScreen.options = {
  topBar: {
    title: {
      text: '"Selected" Album Screen',
    },
    backButton: {
      title: 'Back',
    },
    rightButtons: [
      {
        id: 'addToFavButton',
        text: 'add to fav',
        icon:
          Platform.OS === 'ios'
            ? { uri: 'star', scale: 3 }
            : require('../../assets/icons/star.png'),
      },
    ],
  },
};

export default SelectedAlbumScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
