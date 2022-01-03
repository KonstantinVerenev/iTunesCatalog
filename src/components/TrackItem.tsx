import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import colors from '../constants/colors';

type TrackItemProps = {
  artistName: string;
  trackName: string;
  trackPrice: number;
  trackTimeMillis: number;
};

const TrackItem: React.FC<TrackItemProps> = ({
  artistName,
  trackName,
  trackPrice,
  trackTimeMillis,
}) => {
  return (
    <View style={styles.trackItem}>
      {/*<View>
        <Image
          style={styles.cover}
          source={{
            uri: artworkUrl100,
          }}
        />
      </View>*/}
      <View style={styles.trackName}>
        <Text numberOfLines={1}>{trackName}</Text>
        <Text style={styles.trackAuthor}>{artistName}</Text>
      </View>
      <View>
        <Text>{trackPrice} $ </Text>
      </View>
      {/*<View>
        <Text style={styles.arrow}>&gt;</Text>
      </View>*/}
    </View>
  );
};

export default TrackItem;

const styles = StyleSheet.create({
  trackItem: {
    width: '100%',
    height: 80,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginBottom: 10,
    borderRadius: 10,
    padding: 5,
    backgroundColor: colors.lightGrey,
  },
  //arrow: {
  //  fontSize: 30,
  //},
  //cover: {
  //  width: 70,
  //  height: 70,
  //  borderRadius: 5,
  //},
  trackName: {
    flex: 1,
    paddingHorizontal: 10,
  },
  trackAuthor: {
    fontWeight: '700',
  },
});
