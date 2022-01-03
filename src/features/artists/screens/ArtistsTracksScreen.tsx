import React, { useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, ListRenderItem } from 'react-native';
import { NavigationFunctionComponent } from 'react-native-navigation';
import { useDispatch, useSelector } from 'react-redux';
import { EmptyList } from '../../../components/EmptyList';
import TrackItem from '../../../components/TrackItem';
import { selectAlbumsDataById, selectTracksDataByIds } from '../selectors';
import { thunkGetTracksById } from '../thunks';
import { TrackResponseData } from '../types';

export type ArtistsTracksScreenProps = {
  componentId: string;
  artistId: number;
  collectionId: number;
};

const ArtistTracksScreen: NavigationFunctionComponent<ArtistsTracksScreenProps> = ({
  artistId,
  collectionId,
}) => {
  const dispatch = useDispatch();
  const albumTracks = useSelector(selectTracksDataByIds(artistId, collectionId));

  useEffect(() => {
    dispatch(thunkGetTracksById(artistId, collectionId));
  }, [artistId, collectionId, dispatch]);

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

export default ArtistTracksScreen;

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
