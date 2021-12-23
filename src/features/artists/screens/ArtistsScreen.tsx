import React, { useState } from 'react';
import { View, StyleSheet, FlatList, ListRenderItem, Text, TouchableOpacity } from 'react-native';
import { Navigation, NavigationFunctionComponent } from 'react-native-navigation';
import { useDispatch, useSelector } from 'react-redux';

import { EmptyList } from '../../../components/EmptyList';
import SearchInput from '../../../components/SearchInput';
import WithError from '../../../hocs/withError';
import WithLoading from '../../../hocs/withLoader';
import { SELECTED_ARTIST_SCREEN } from '../../../navigation/screenRegister';
import { selectArtistsData } from '../selectors/selectors';
import { thunkGetArtists } from '../thunks';
import { artistResponceDataType } from '../types';

const ArtistsScreen: NavigationFunctionComponent = ({ componentId }) => {
  const artistsData = useSelector(selectArtistsData);
  const [lastSearch, setLastSearch] = useState<string | null>(null);
  const dispatch = useDispatch();

  const onSubmitInput = (text: string) => {
    setLastSearch(text);
    dispatch(thunkGetArtists(text));
  };

  const renderItem: ListRenderItem<artistResponceDataType> = ({
    item: { artistId, artistName, primaryGenreName },
  }) => {
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
                text: artistName,
              },
            },
          },
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
        data={Object.values(artistsData)}
        renderItem={renderItem}
        ListEmptyComponent={EmptyList}
      />
    </View>
  );
};

export default WithLoading(WithError(ArtistsScreen));

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
  searchNote: {
    marginTop: 10,
  },
});
