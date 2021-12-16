import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { NavigationFunctionComponent } from 'react-native-navigation';

const SelectedAlbumsScreen: NavigationFunctionComponent = () => {
  return (
    <View style={styles.container}>
      <Text>Selected Albums Screen</Text>
    </View>
  );
};

SelectedAlbumsScreen.options = {
  topBar: {
    title: {
      text: '"Selected" Album Screen',
      //color: 'white',
    },
    background: {
      //color: 'green',
    },
    backButton: {
      title: 'Back',
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default SelectedAlbumsScreen;
