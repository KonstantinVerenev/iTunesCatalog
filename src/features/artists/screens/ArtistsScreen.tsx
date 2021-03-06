import React, { useEffect, useState, useCallback } from 'react';
import { View, StyleSheet, FlatList, ListRenderItem, Text, TouchableOpacity } from 'react-native';
import { Navigation, NavigationFunctionComponent } from 'react-native-navigation';
import { useDispatch, useSelector } from 'react-redux';
import SplashScreen from 'react-native-splash-screen';
import Geolocation from '@react-native-community/geolocation';

import colors from '../../../constants/colors';

import { EmptyList } from '../../../components/EmptyList';
import SearchInput from '../../../components/SearchInput';
import { getArtistScreenOptions } from '../../../navigation/options';
import { SELECTED_ARTIST_SCREEN } from '../../../navigation/constants';
import { selectArtists } from '../selectors';
import { thunkGetArtists } from '../thunks';
import { ArtistResponceData } from '../types';
import { useInitialURL } from '../../../hooks/useInitialURL';
import { decodeCoords } from '../../../utils/decodeCoords';
import { setCurrentCountry } from '../../../store/actions';

const ArtistsScreen: NavigationFunctionComponent = ({ componentId }) => {
  const artistsData = useSelector(selectArtists);
  const [lastSearch, setLastSearch] = useState<string | null>(null);
  const dispatch = useDispatch();

  useEffect(() => {
    SplashScreen.hide();
  }, []);

  useInitialURL();

  useEffect(() => {
    Geolocation.getCurrentPosition(
      async (pos) => {
        const country = await decodeCoords(pos.coords.latitude, pos.coords.longitude);
        dispatch(setCurrentCountry(country));
      },
      (error) => console.log(error),
      {
        enableHighAccuracy: true,
        timeout: 2000,
        maximumAge: 3600000,
      }
    );
  }, []);

  const onSubmitInput = useCallback((text: string) => {
    setLastSearch(text);
    dispatch(thunkGetArtists(text));
  }, []);

  const onOpenArtistScreen = useCallback((artistId: number, artistName: string): void => {
    Navigation.push(componentId, {
      component: {
        name: SELECTED_ARTIST_SCREEN,
        passProps: {
          artistId,
        },
        options: getArtistScreenOptions(artistName),
      },
    });
  }, []);

  const renderItem: ListRenderItem<ArtistResponceData> = ({
    item: { artistId, artistName, primaryGenreName },
  }) => {
    const onPressArtist = () => onOpenArtistScreen(artistId, artistName);

    return (
      <TouchableOpacity style={styles.artistItem} onPress={onPressArtist}>
        <View>
          <Text style={styles.artistName}>{artistName}</Text>
          <Text>{primaryGenreName}</Text>
        </View>
        <View>
          <Text style={styles.arrow}>{'>'}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.searchInput}>
        <SearchInput onSubmit={onSubmitInput} />
      </View>
      {!!lastSearch && (
        <Text style={styles.searchNote}>{`Search results for: "${lastSearch}"`}</Text>
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

export default ArtistsScreen;

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
  artistItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 5,
    backgroundColor: colors.lightGrey,
  },
  artistName: {
    fontWeight: '700',
  },
  arrow: {
    fontSize: 30,
  },
  searchNote: {
    marginVertical: 10,
    textAlign: 'center',
  },
});
