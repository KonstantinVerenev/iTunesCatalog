import React, { useEffect } from 'react';
import { View, StyleSheet, ListRenderItem, FlatList } from 'react-native';
import { NavigationFunctionComponent } from 'react-native-navigation';
import { useDispatch, useSelector } from 'react-redux';

import { EmptyList } from '../../../components/EmptyList';
import TrackItem from '../../../components/TrackItem';
import { selectTracksById } from '../selectors';
import { thunkGetAlbumTracksById } from '../thunks';
import { TrackResponseData } from '../types';

export type AlbumTracksScreenProps = {
  componentId: string;
  collectionId: number;
};

const AlbumTracksScreen: NavigationFunctionComponent<AlbumTracksScreenProps> = ({
  collectionId,
}) => {
  const dispatch = useDispatch();
  const albumTracks = useSelector(selectTracksById(collectionId));

  useEffect(() => {
    dispatch(thunkGetAlbumTracksById(collectionId));
  }, [collectionId, dispatch]);

  const renderItem: ListRenderItem<TrackResponseData> = ({
    item: {
      artistName,
      trackName,
      trackTimeMillis,
      artworkUrl100,
      trackNumber,
      releaseDate,
      country,
      primaryGenreName,
    },
  }) => {
    return (
      <TrackItem
        artistName={artistName}
        trackName={trackName}
        trackTimeMillis={trackTimeMillis}
        artworkUrl100={artworkUrl100}
        trackNumber={trackNumber}
        releaseDate={releaseDate}
        country={country}
        primaryGenreName={primaryGenreName}
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

export default AlbumTracksScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  trackList: {
    padding: 10,
  },
});
