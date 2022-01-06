import React, { useEffect } from 'react';
import { View, StyleSheet, ListRenderItem, FlatList } from 'react-native';
import { NavigationFunctionComponent } from 'react-native-navigation';
import { useDispatch, useSelector } from 'react-redux';

import { EmptyList } from '../../../components/EmptyList';
import TrackItem from '../../../components/TrackItem';
import { useButtonListener } from '../../../hooks/useButtonListener';
import { selectTracksById } from '../selectors';
import { thunkGetAlbumTracksById } from '../thunks';
import { TrackResponseData } from '../types';

import { FAV_BUTTON_ID } from '../../../navigation/options';
import { ALBUMS_TRACKS_SCREEN } from '../../../navigation/screenRegister';
import { setAlbumToFavorites } from '../../favorites/actions';

export type AlbumTracksScreenProps = {
  componentId: string;
  collectionId: number;
};

const AlbumsTracksScreen: NavigationFunctionComponent<AlbumTracksScreenProps> = ({
  collectionId,
}) => {
  const dispatch = useDispatch();
  const albumTracks = useSelector(selectTracksById(collectionId));

  useEffect(() => {
    dispatch(thunkGetAlbumTracksById(collectionId));
  }, [collectionId, dispatch]);

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
