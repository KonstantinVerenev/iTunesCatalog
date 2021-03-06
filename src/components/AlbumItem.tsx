import React, { useEffect, useRef } from 'react';
import { Animated, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import colors from '../constants/colors';

type AlbumItemProps = {
  onOpenAlbumScreen?: () => void;
  artworkUrl100: string;
  collectionName: string;
  artistName: string;
  collectionPrice: number;
  index: number;
};

const AlbumItem: React.FC<AlbumItemProps> = ({
  onOpenAlbumScreen,
  artworkUrl100,
  collectionName,
  artistName,
  collectionPrice,
  index,
}) => {
  const value = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    value.setValue(-400);
    Animated.timing(value, {
      toValue: 0,
      useNativeDriver: true,
      duration: 600 + index * 80,
    }).start();
  }, [collectionName, index, value]);

  return (
    <TouchableOpacity onPress={onOpenAlbumScreen}>
      <Animated.View
        style={{ ...styles.artistItem, transform: [{ translateX: value }] }}
        testID={'animated-view'}
      >
        <View>
          <Image
            style={styles.cover}
            source={{
              uri: artworkUrl100,
            }}
          />
        </View>
        <View style={styles.albumName}>
          <Text numberOfLines={1} testID={'collection-name'}>
            {collectionName}
          </Text>
          <Text style={styles.albumAuthor} testID={'artist-name'}>
            {artistName}
          </Text>
        </View>
        <Text testID={'price'}>{collectionPrice} $ </Text>
        <View>
          <Text style={styles.arrow}>&gt;</Text>
        </View>
      </Animated.View>
    </TouchableOpacity>
  );
};

export default AlbumItem;

const styles = StyleSheet.create({
  artistItem: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginBottom: 10,
    borderRadius: 10,
    padding: 5,
    backgroundColor: colors.lightGrey,
  },
  arrow: {
    fontSize: 30,
  },
  cover: {
    width: 70,
    height: 70,
    borderRadius: 5,
  },
  albumName: {
    flex: 1,
    paddingHorizontal: 10,
  },
  albumAuthor: {
    fontWeight: '700',
  },
});
