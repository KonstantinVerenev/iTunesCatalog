import React, { useEffect } from 'react';
import { View, StyleSheet, FlatList, ListRenderItem } from 'react-native';
import { Navigation, NavigationFunctionComponent } from 'react-native-navigation';
import { useDispatch, useSelector } from 'react-redux';
import AlbumItem from '../../../components/AlbumItem';

import { EmptyList } from '../../../components/EmptyList';
import { ARTISTS_TRACKS_SCREEN } from '../../../navigation/screenRegister';
import { selectAlbumsById } from '../selectors';
import { thunkGetAlbumsById } from '../thunks';
import { AlbumsResponseData } from '../types';
import { getAlbumScreenOptions } from '../../../navigation/options';

export type SelectedArtistScreenProps = {
  componentId: string;
  artistId: number;
};

const SelectedArtistScreen: NavigationFunctionComponent<SelectedArtistScreenProps> = ({
  artistId,
  componentId,
}) => {
  const dispatch = useDispatch();
  const artistAlbums = useSelector(selectAlbumsById(artistId));

  useEffect(() => {
    dispatch(thunkGetAlbumsById(artistId));
  }, [artistId, dispatch]);

  const onOpenAlbumScreen = (collectionId: number, collectionName: string): void => {
    Navigation.push(componentId, {
      component: {
        name: ARTISTS_TRACKS_SCREEN,
        passProps: {
          artistId,
          collectionId,
        },
        options: getAlbumScreenOptions(collectionName),
      },
    });
  };

  const renderItem: ListRenderItem<AlbumsResponseData> = ({
    item: { collectionId, collectionName, artistName, artworkUrl100, collectionPrice },
  }) => {
    const onPressAlbum = () => onOpenAlbumScreen(collectionId, collectionName);

    return (
      <AlbumItem
        onOpenAlbumScreen={onPressAlbum}
        artworkUrl100={artworkUrl100}
        collectionName={collectionName}
        artistName={artistName}
        collectionPrice={collectionPrice}
      />
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        style={styles.artistList}
        data={artistAlbums}
        renderItem={renderItem}
        ListEmptyComponent={EmptyList}
      />
    </View>
  );
};

export default SelectedArtistScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  artistList: {
    padding: 10,
  },
});
