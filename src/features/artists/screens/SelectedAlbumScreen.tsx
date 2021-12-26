import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { NavigationFunctionComponent } from 'react-native-navigation';

export type SelectedAlbumScreenProps = {
  componentId: string;
  collectionId: number;
};

const SelectedAlbumsScreen: NavigationFunctionComponent<SelectedAlbumScreenProps> = ({
  componentId,
  collectionId,
}) => {
  return (
    <View style={styles.container}>
      <Text>collectionId: {collectionId}</Text>
    </View>
  );
};

SelectedAlbumsScreen.options = {
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

export default SelectedAlbumsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
