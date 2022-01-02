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
      <Text>Temporaly screen!!!</Text>
      <Text>collectionId: {collectionId}</Text>
    </View>
  );
};

export default SelectedAlbumsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
