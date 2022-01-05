import React, { useEffect } from 'react';
import { View, StyleSheet, FlatList, ListRenderItem } from 'react-native';
import { NavigationFunctionComponent } from 'react-native-navigation';
import { useDispatch, useSelector } from 'react-redux';

import { EmptyList } from '../../../components/EmptyList';
import TrackItem from '../../../components/TrackItem';
import { useButtonListener } from '../../../hooks/useButtonListener';
import { FAV_BUTTON_ID } from '../../../navigation/options';
import { ARTISTS_TRACKS_SCREEN } from '../../../navigation/screenRegister';
import { selectTracksByIds } from '../selectors';
import { thunkGetTracksById } from '../thunks';
import { TrackResponseData } from '../types';

export type ArtistsTracksScreenProps = {
  componentId: string;
  artistId: number;
  collectionId: number;
};

const ArtistsTracksScreen: NavigationFunctionComponent<ArtistsTracksScreenProps> = ({
  artistId,
  collectionId,
}) => {
  const dispatch = useDispatch();
  const albumTracks = useSelector(selectTracksByIds(artistId, collectionId));

  useEffect(() => {
    dispatch(thunkGetTracksById(artistId, collectionId));
  }, [artistId, collectionId, dispatch]);

  const addToFavoritesAlbum = () => {
    console.log(`add to fav: ${collectionId}`);
  };

  useButtonListener(ARTISTS_TRACKS_SCREEN, FAV_BUTTON_ID, collectionId, addToFavoritesAlbum);

  const renderItem: ListRenderItem<TrackResponseData> = ({
    item: { artistName, trackName, trackTimeMillis, artworkUrl100, trackNumber },
  }) => {
    return (
      <TrackItem
        trackNumber={trackNumber}
        artworkUrl100={artworkUrl100}
        artistName={artistName}
        trackName={trackName}
        trackTimeMillis={trackTimeMillis}
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

export default ArtistsTracksScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  trackList: {
    padding: 10,
  },
});
