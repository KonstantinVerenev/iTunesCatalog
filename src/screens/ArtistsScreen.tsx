import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { Navigation, NavigationFunctionComponent } from 'react-native-navigation';

const ArtistsScreen: NavigationFunctionComponent = (props) => {
  return (
    <View style={styles.container}>
      <Text>Artist Screen</Text>
      <Button
        title="Go to selected artist"
        onPress={() =>
          void Navigation.push(props.componentId, {
            component: {
              name: 'SelectedArtistScreen',
            },
          })
        }
      />
    </View>
  );
};

ArtistsScreen.options = {
  topBar: {
    title: {
      text: 'Artists',
      //color: 'white',
    },
    background: {
      //color: 'blue',
    },
  },
  bottomTab: {
    text: 'Artists',
  },
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ArtistsScreen;
