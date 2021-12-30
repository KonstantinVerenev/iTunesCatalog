import React, { useState } from 'react';
import { View, StyleSheet, FlatList, ListRenderItem, Text } from 'react-native';
import { Navigation, NavigationFunctionComponent } from 'react-native-navigation';
import { useDispatch, useSelector } from 'react-redux';

import { EmptyList } from '../../../components/EmptyList';
import SearchInput from '../../../components/SearchInput';
import { SELECTED_ALBUM_SCREEN } from '../../../navigation/screenRegister';
import { selectAlbumsData } from '../selectors';
import { AlbumsResponseData } from '../types';
import { thunkGetAlbums } from '../thunks';
import AlbumItem from '../../../components/AlbumItem';
import { options } from '../../../navigation/options';

const AlbumsScreen: NavigationFunctionComponent = (props) => {
  const albumsData = useSelector(selectAlbumsData);
  const [lastSearch, setLastSearch] = useState<string | null>(null);
  const dispatch = useDispatch();

  const onSubmitInput = (text: string) => {
    setLastSearch(text);
    dispatch(thunkGetAlbums(text));
  };

  const renderItem: ListRenderItem<AlbumsResponseData> = ({
    item: { artistName, collectionName, artworkUrl100, collectionPrice },
  }) => {
    const onOpenAlbumScreen = (): void => {
      Navigation.push(props.componentId, {
        component: {
          name: SELECTED_ALBUM_SCREEN,
          options: options.SelectedAlbumScreen(collectionName),
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
      <View style={styles.searchInput}>
        <SearchInput onSubmit={onSubmitInput} />
      </View>
      {lastSearch && (
        <Text style={styles.searchNote}>Результаты поиска по: &quot;{lastSearch}&quot;</Text>
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
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchInput: {
    width: '100%',
    height: 50,
  },
  artistList: {
    width: '100%',
    padding: 10,
  },
  searchNote: {
    marginTop: 10,
  },
});
