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
import { SELECTED_ARTIST_SCREEN } from '../../../navigation/screenRegister';

import { thunkGetArtists } from '../actions';
import {
  selectArtistsData,
  selectArtistError,
  selectArtistIsLoading,
} from '../selectors/selectors';
import { artistStateDataType } from '../types';

const ArtistsScreen: NavigationFunctionComponent = ({ componentId }) => {
  const artistsData = useSelector(selectArtistsData);
  const isLoading = useSelector(selectArtistIsLoading);
  const error = useSelector(selectArtistError);
  const [lastSearch, setLastSearch] = useState<string | null>(null);
  const dispatch = useDispatch();

  const onSubmitInput = (text: string) => {
    setLastSearch(text);
    dispatch(thunkGetArtists(text));
  };

  const renderItem: ListRenderItem<artistStateDataType> = ({ item }) => {
    const artistId = parseInt(Object.keys(item)[0]);
    const { name, artistGenre } = item[artistId];

    const onOpenArtistScreen = (): void => {
      Navigation.push(componentId, {
        component: {
          name: SELECTED_ARTIST_SCREEN,
          passProps: {
            artistId,
          },
          options: {
            topBar: {
              title: {
                text: name,
              },
            },
          },
        },
      });
    };

    return (
      <TouchableOpacity style={styles.artistItem} onPress={onOpenArtistScreen}>
        <View>
          <Text>{name}</Text>
          <Text>{artistGenre}</Text>
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
        data={artistsData}
        renderItem={renderItem}
        ListEmptyComponent={EmptyList}
      />
    </View>
  );
};

ArtistsScreen.options = {
  topBar: {
    title: {
      text: 'Артисты',
      //color: 'white',
    },
    background: {
      //color: 'blue',
    },
  },
  bottomTab: {
    text: 'Артисты',
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

export default ArtistsScreen;
