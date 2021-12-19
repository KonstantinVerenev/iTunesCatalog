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
import { EmptyList } from '../components/EmptyList';

import SearchInput from '../components/SearchInput';
import { SELECTED_ARTIST_SCREEN } from '../navigation/navigation';
import { thunkGetArtists } from '../store/actions';
import { selectStateData } from '../store/selectors';
import { artistDataType } from '../store/types';

const ArtistsScreen: NavigationFunctionComponent = (props) => {
  const { artistsData, isLoading, error } = useSelector(selectStateData);
  const [lastSearch, setLastSearch] = useState<string | null>(null);
  const dispatch = useDispatch();

  const onSubmitInput = (text: string) => {
    setLastSearch(text);
    dispatch(thunkGetArtists(text));
  };

  const renderItem: ListRenderItem<artistDataType> = ({
    item: { artistName, primaryGenreName },
  }) => {
    const onOpenArtistScreen = (): void => {
      Navigation.push(props.componentId, {
        component: {
          name: SELECTED_ARTIST_SCREEN,
        },
      });
    };

    return (
      <TouchableOpacity style={styles.artistItem} onPress={onOpenArtistScreen}>
        <View>
          <Text>{artistName}</Text>
          <Text>{primaryGenreName}</Text>
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
