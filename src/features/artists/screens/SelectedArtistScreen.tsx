import React, { useEffect } from 'react';
import { View, StyleSheet, FlatList, ListRenderItem } from 'react-native';
import { Navigation, NavigationFunctionComponent } from 'react-native-navigation';
import { useDispatch, useSelector } from 'react-redux';
import AlbumItem from '../../../components/AlbumItem';

import colors from '../../../constants/colors';

import { EmptyList } from '../../../components/EmptyList';
import { SELECTED_ALBUM_SCREEN } from '../../../navigation/screenRegister';
import { selectAlbumsDataById } from '../selectors';
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
  const artistAlbums = useSelector(selectAlbumsDataById(artistId));

  useEffect(() => {
    dispatch(thunkGetAlbumsById(artistId));
  }, [artistId, dispatch]);

  const renderItem: ListRenderItem<AlbumsResponseData> = ({
    item: { collectionId, collectionName, artistName, artworkUrl100, collectionPrice },
  }) => {
    const onOpenAlbumScreen = (): void => {
      Navigation.push(componentId, {
        component: {
          name: SELECTED_ALBUM_SCREEN,
          passProps: {
            collectionId,
          },
          options: getAlbumScreenOptions(collectionName),
        },
      });
    };

    return (
      <AlbumItem
        onOpenAlbumScreen={onOpenAlbumScreen}
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
    alignItems: 'center',
  },
  artistList: {
    width: '100%',
    padding: 10,
  },
  artistItem: {
    width: '100%',
    height: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
    borderRadius: 10,
    padding: 5,
    backgroundColor: colors.lightGrey,
  },
  arrow: {
    fontSize: 30,
  },
});
