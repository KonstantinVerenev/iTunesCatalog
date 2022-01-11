import React, { useEffect, useState } from 'react';
import { FlatList, ListRenderItem, StyleSheet } from 'react-native';
import { NavigationFunctionComponent } from 'react-native-navigation';
import { useSelector } from 'react-redux';

import AlbumItem from '../../../components/AlbumItem';
import { EmptyList } from '../../../components/EmptyList';
import { favoritesAPI } from '../../../services/api';
import { selectFavoriteAlbums } from '../selectors';
import { AlbumsResponseData } from '../types';

const FavoritesScreen: NavigationFunctionComponent = () => {
  const favoritesAlbumsIds = useSelector(selectFavoriteAlbums);
  const [favoritesAlbums, setFavoritesAlbums] = useState<AlbumsResponseData[]>();

  useEffect(() => {
    const getAlbumsByIds = async () => {
      const albums = await favoritesAPI.getAlbumsByIds(favoritesAlbumsIds);

      setFavoritesAlbums(albums);
    };

    getAlbumsByIds();
  }, [favoritesAlbumsIds]);

  const renderItem: ListRenderItem<AlbumsResponseData> = ({
    item: { artistName, collectionName, artworkUrl100, collectionPrice },
  }) => {
    return (
      <AlbumItem
        onOpenAlbumScreen={() => {}}
        artworkUrl100={artworkUrl100}
        collectionName={collectionName}
        artistName={artistName}
        collectionPrice={collectionPrice}
      />
    );
  };

  return (
    <FlatList
      style={styles.albumList}
      data={favoritesAlbums}
      renderItem={renderItem}
      ListEmptyComponent={EmptyList}
    />
  );
};

export default FavoritesScreen;

const styles = StyleSheet.create({
  albumList: {
    padding: 10,
  },
});
