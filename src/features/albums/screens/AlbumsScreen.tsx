import React, { useState } from 'react';
import { View, StyleSheet, FlatList, ListRenderItem, Text } from 'react-native';
import { Navigation, NavigationFunctionComponent } from 'react-native-navigation';
import { useDispatch, useSelector } from 'react-redux';

import { EmptyList } from '../../../components/EmptyList';
import SearchInput from '../../../components/SearchInput';
import { ALBUMS_TRACKS_SCREEN } from '../../../navigation/screenRegister';
import { selectAlbums } from '../selectors';
import { AlbumsResponseData } from '../types';
import { thunkGetAlbums } from '../thunks';
import AlbumItem from '../../../components/AlbumItem';
import { getAlbumScreenOptions } from '../../../navigation/options';

const AlbumsScreen: NavigationFunctionComponent = ({ componentId }) => {
  const albumsData = useSelector(selectAlbums);
  const [lastSearch, setLastSearch] = useState<string | null>(null);
  const dispatch = useDispatch();

  const onSubmitInput = (text: string): void => {
    setLastSearch(text);
    dispatch(thunkGetAlbums(text));
  };

  const renderItem: ListRenderItem<AlbumsResponseData> = ({
    item: { collectionId, artistName, collectionName, artworkUrl100, collectionPrice },
    index,
  }) => {
    const onOpenAlbumScreen = (): void => {
      Navigation.push(componentId, {
        component: {
          name: ALBUMS_TRACKS_SCREEN,
          passProps: {
            collectionId,
          },
          options: getAlbumScreenOptions(ALBUMS_TRACKS_SCREEN, collectionName),
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
        index={index}
      />
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.searchInput}>
        <SearchInput onSubmit={onSubmitInput} />
      </View>
      {lastSearch && (
        <Text style={styles.searchNote}>{`Результаты поиска по: "${lastSearch}"`}</Text>
      )}
      <FlatList
        style={styles.artistList}
        data={albumsData}
        renderItem={renderItem}
        ListEmptyComponent={EmptyList}
      />
    </View>
  );
};

export default AlbumsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  searchInput: {
    height: 50,
  },
  artistList: {
    paddingHorizontal: 10,
  },
  searchNote: {
    marginVertical: 10,
    textAlign: 'center',
  },
});
