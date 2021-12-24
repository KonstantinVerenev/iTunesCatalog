import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { NavigationFunctionComponent } from 'react-native-navigation';
export type SelectedArtistScreenProps = {
  componentId: string;
  artistId: number;
};

const SelectedArtistScreen: NavigationFunctionComponent = () => {
  return (
    <View style={styles.container}>
      <Text>Selected Artist Screen!!</Text>
    </View>
  );
};

SelectedArtistScreen.options = {
  topBar: {
    backButton: {
      title: 'Назад',
    },
    rightButtons: [
      {
        id: 'addToFavButton',
        text: 'add to fav',
        icon: { uri: 'star', scale: 3 },
      },
    ],
  },
};

export default SelectedArtistScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
