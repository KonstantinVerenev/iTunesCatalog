import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  FlatList,
  ListRenderItem,
  Text,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import { Navigation, NavigationFunctionComponent } from 'react-native-navigation';
import { useDispatch, useSelector } from 'react-redux';

import { EmptyList } from '../../../components/EmptyList';
import SearchInput from '../../../components/SearchInput';
import { SELECTED_ALBUM_SCREEN } from '../../../navigation/screenRegister';

import { thunkGetAlbums } from '../actions';
import { selectAlbumsData, selectError, selectIsLoading } from '../selectors/selectors';
import { albumsDataType } from '../types';

const AlbumsScreen: NavigationFunctionComponent = (props) => {
  const albumsData = useSelector(selectAlbumsData);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const [lastSearch, setLastSearch] = useState<string | null>(null);
  const dispatch = useDispatch();

  const onSubmitInput = (text: string) => {
    setLastSearch(text);
    dispatch(thunkGetAlbums(text));
  };

  const renderItem: ListRenderItem<albumsDataType> = ({ item: { collectionName, artistName } }) => {
    const onOpenAlbumScreen = (): void => {
      Navigation.push(props.componentId, {
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
        <View style={styles.searchInput}>
          <SearchInput onSubmit={onSubmitInput} />
        </View>
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

AlbumsScreen.options = {
  topBar: {
    title: {
      text: 'Альбомы',
      //color: 'white',
    },
    background: {
      //color: 'blue',
    },
  },
  bottomTab: {
    text: 'Альбомы',
  },
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

export default AlbumsScreen;
