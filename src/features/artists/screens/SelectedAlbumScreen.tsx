import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { NavigationFunctionComponent } from 'react-native-navigation';

const SelectedAlbumsScreen: NavigationFunctionComponent = () => {
  return (
    <View style={styles.container}>
      <Text>Selected Album Screen</Text>
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
