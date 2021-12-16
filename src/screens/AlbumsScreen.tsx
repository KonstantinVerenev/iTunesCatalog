import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { Navigation, NavigationFunctionComponent } from 'react-native-navigation';

const AlbumsScreen: NavigationFunctionComponent = (props) => {
  return (
    <View style={styles.container}>
      <Text>Albums Screen</Text>
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

AlbumsScreen.options = {
  topBar: {
    title: {
      text: 'Artist Screen',
      //color: 'white',
    },
    background: {
      //color: 'yellow',
    },
  },
  bottomTab: {
    text: 'Albums',
  },
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default AlbumsScreen;
