import React, { useEffect, useState } from 'react';
import { FlatList, ListRenderItem, StyleSheet } from 'react-native';
import { NavigationFunctionComponent } from 'react-native-navigation';
import { useSelector } from 'react-redux';
import AlbumItem from '../../../components/AlbumItem';
import { EmptyList } from '../../../components/EmptyList';
import { favoritesAPI } from '../../../services/api';
import { selectFavoritesAlbums } from '../selectors';
import { AlbumsResponseData } from '../types';

const FavoritesScreen: NavigationFunctionComponent = () => {
  const favoritesAlbumsIds = useSelector(selectFavoritesAlbums);
  const [favoritesAlbums, setFavoritesAlbums] = useState<AlbumsResponseData[]>();

  console.log(favoritesAlbums);

  useEffect(() => {
    const getAlbumsByIds = async () => {
      const response = await favoritesAPI.getAlbumsByIds(favoritesAlbumsIds);
      const resData = await response.json();

      setFavoritesAlbums(resData.results);
    };

    getAlbumsByIds();
  }, [favoritesAlbumsIds]);

  const renderItem: ListRenderItem<AlbumsResponseData> = ({
    item: { collectionId, artistName, collectionName, artworkUrl100, collectionPrice },
  }) => {
    return (
      <AlbumItem
        onOpenAlbumScreen={() => console.log('open tracks')}
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
    paddingHorizontal: 10,
  },
});
