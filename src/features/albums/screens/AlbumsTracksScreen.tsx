import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Platform, ListRenderItem, FlatList } from 'react-native';
import { NavigationFunctionComponent } from 'react-native-navigation';
import { useDispatch, useSelector } from 'react-redux';
import { EmptyList } from '../../../components/EmptyList';
import TrackItem from '../../../components/TrackItem';
import { selectTracksDataById } from '../selectors';
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
  const albumTracks = useSelector(selectTracksDataById(collectionId));

  useEffect(() => {
    dispatch(thunkGetAlbumTracksById(collectionId));
  }, [collectionId, dispatch]);

  const renderItem: ListRenderItem<TrackResponseData> = ({
    item: { artistName, trackName, trackPrice, trackTimeMillis },
  }) => {
    return (
      <TrackItem
        artistName={artistName}
        trackName={trackName}
        trackPrice={trackPrice}
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

export default AlbumTracksScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  trackList: {
    //refactor in flex
    width: '100%',
    padding: 10,
  },
});
