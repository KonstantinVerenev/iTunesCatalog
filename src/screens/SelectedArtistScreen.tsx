import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { Navigation, NavigationFunctionComponent } from 'react-native-navigation';

const SelectedArtistScreen: NavigationFunctionComponent = (props) => {
  return (
    <View style={styles.container}>
      <Text>Selected Artist Screen</Text>
      <Button
        title="Go to selected albums"
        onPress={() =>
          void Navigation.push(props.componentId, {
            component: {
              name: 'SelectedAlbumScreen',
            },
          })
        }
      />
    </View>
  );
};

SelectedArtistScreen.options = {
  topBar: {
    title: {
      text: '"Selected" Artist Screen',
      //color: 'white',
    },
    background: {
      //color: 'tomato',
    },
  },
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default SelectedArtistScreen;
