import React, { useEffect } from 'react';
import { View, StyleSheet, ListRenderItem, FlatList } from 'react-native';
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
  filledStarOptions,
  nonFilledStarOptions,
} from '../../../navigation/options';
import { ALBUMS_TRACKS_SCREEN } from '../../../navigation/constants';
import { updateFavoriteAlbums } from '../../favorites/actions';
import { selectFavoriteAlbums } from '../../favorites/selectors';

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
  const favoritesAlbumsIds = useSelector(selectFavoriteAlbums);

  useEffect(() => {
    dispatch(thunkGetAlbumTracksById(collectionId));
  }, [collectionId, dispatch]);

  useEffect(() => {
    const options = favoritesAlbumsIds.includes(collectionId)
      ? filledStarOptions(ALBUMS_TRACKS_SCREEN)
      : nonFilledStarOptions(ALBUMS_TRACKS_SCREEN);

    Navigation.mergeOptions(componentId, options);
  }, [collectionId, componentId, favoritesAlbumsIds]);

  const onPressFavorite = () => {
    dispatch(updateFavoriteAlbums(collectionId));
  };

  useButtonListener(`${ALBUMS_TRACKS_SCREEN}-${FAV_BUTTON_ID}`, onPressFavorite);

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
      collectionViewUrl,
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
        collectionViewUrl={collectionViewUrl}
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
