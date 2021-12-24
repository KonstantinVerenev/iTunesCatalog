import React, { useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ListRenderItem,
  TouchableOpacity,
  ActivityIndicator,
  FlatList,
} from 'react-native';
import { Navigation, NavigationFunctionComponent } from 'react-native-navigation';
import { useDispatch, useSelector } from 'react-redux';

import { EmptyList } from '../../../components/EmptyList';
import { SELECTED_ALBUM_SCREEN } from '../../../navigation/screenRegister';

import { selectAlbumsData } from '../../albums/selectors/selectors';
import { albumsStateDataType } from '../../albums/types';

import { selectArtistError, selectArtistIsLoading } from '../selectors/selectors';

export type SelectedArtistScreenProps = {
  componentId: string;
  artistId: number;
};

const SelectedArtistScreen: NavigationFunctionComponent<SelectedArtistScreenProps> = ({
  componentId,
  artistId,
}) => {
  //  !!! тут нужно переписать селектор на селектор из модуля артиста !!!
  const albumsData = useSelector(selectAlbumsData);
  const isLoading = useSelector(selectArtistIsLoading);
  const error = useSelector(selectArtistError);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(thunkGetAlbumsById(artistId));
  }, [artistId, dispatch]);

  const renderItem: ListRenderItem<albumsStateDataType> = ({
    item: { collectionName, artistName },
  }) => {
    const onOpenAlbumScreen = (): void => {
      Navigation.push(componentId, {
        component: {
          name: SELECTED_ALBUM_SCREEN,
        },
      });
    };

    return (
      <TouchableOpacity style={styles.artistItem} onPress={onOpenAlbumScreen}>
        <View>
          <Text>{collectionName}</Text>
          <Text>{artistName}</Text>
        </View>
        <View>
          <Text style={styles.arrow}>&gt;</Text>
        </View>
      </TouchableOpacity>
    );
  };

  if (isLoading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.container}>
        <View style={styles.container}>
          <Text style={styles.errorMessage}>
            Ошибка: {'\n'} {error}
          </Text>
        </View>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        style={styles.artistList}
        data={albumsData}
        renderItem={renderItem}
        ListEmptyComponent={EmptyList}
      />
    </View>
  );
};

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
  artistItem: {
    width: '100%',
    height: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
    borderRadius: 10,
    padding: 5,
    backgroundColor: 'lightgrey',
  },
  arrow: {
    fontSize: 30,
  },
  errorMessage: {
    padding: 20,
    textAlign: 'center',
    fontSize: 18,
    color: 'tomato',
  },
  searchNote: {
    marginTop: 10,
  },
});

export default SelectedArtistScreen;
