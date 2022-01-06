import React, { useEffect } from 'react';
import { View, StyleSheet, ListRenderItem, FlatList, Platform } from 'react-native';
import { Navigation, NavigationFunctionComponent } from 'react-native-navigation';
import { useDispatch, useSelector } from 'react-redux';

import { EmptyList } from '../../../components/EmptyList';
import TrackItem from '../../../components/TrackItem';
import { useButtonListener } from '../../../hooks/useButtonListener';
import { selectTracksById } from '../selectors';
import { thunkGetAlbumTracksById } from '../thunks';
import { TrackResponseData } from '../types';

import {
  FAV_BUTTON_ID,
  inFavoritesOptions,
  notInFavoritesOptions,
} from '../../../navigation/options';
import { ALBUMS_TRACKS_SCREEN } from '../../../navigation/screenRegister';
import { setAlbumToFavorites } from '../../favorites/actions';
import { selectFavoritesAlbums } from '../../favorites/selectors';

export type AlbumTracksScreenProps = {
  componentId: string;
  collectionId: number;
};

const AlbumsTracksScreen: NavigationFunctionComponent<AlbumTracksScreenProps> = ({
  componentId,
  collectionId,
}) => {
  const dispatch = useDispatch();
  const albumTracks = useSelector(selectTracksById(collectionId));
  const favoritesAlbumsIds = useSelector(selectFavoritesAlbums);

  useEffect(() => {
    dispatch(thunkGetAlbumTracksById(collectionId));
  }, [collectionId, dispatch]);

  useEffect(() => {
    if (favoritesAlbumsIds.includes(collectionId)) {
      Navigation.mergeOptions(componentId, inFavoritesOptions(ALBUMS_TRACKS_SCREEN));
    } else {
      Navigation.mergeOptions(componentId, notInFavoritesOptions(ALBUMS_TRACKS_SCREEN));
    }
  }, [collectionId, componentId, favoritesAlbumsIds]);

  const addToFavoritesAlbum = () => {
    dispatch(setAlbumToFavorites(collectionId));
  };

  useButtonListener(ALBUMS_TRACKS_SCREEN, FAV_BUTTON_ID, collectionId, addToFavoritesAlbum);

  const renderItem: ListRenderItem<TrackResponseData> = ({
    item: { artistName, trackName, trackTimeMillis, artworkUrl100, trackNumber },
  }) => {
    return (
      <TrackItem
        artistName={artistName}
        trackName={trackName}
        trackTimeMillis={trackTimeMillis}
        artworkUrl100={artworkUrl100}
        trackNumber={trackNumber}
      />
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        style={styles.trackList}
        data={albumTracks}
        renderItem={renderItem}
        ListEmptyComponent={EmptyList}
      />
    </View>
  );
};

export default AlbumsTracksScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  trackList: {
    padding: 10,
  },
});
