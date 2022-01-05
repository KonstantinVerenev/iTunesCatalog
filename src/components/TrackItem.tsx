import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

import colors from '../constants/colors';
import { formatMillisToMinAndSec } from '../utils/formatMillisToMinAndSec';

type TrackItemProps = {
  artistName: string;
  trackName: string;
  trackTimeMillis: number;
  artworkUrl100: string;
  trackNumber: number;
};

const TrackItem: React.FC<TrackItemProps> = ({
  artistName,
  trackName,
  trackTimeMillis,
  artworkUrl100,
  trackNumber,
}) => {
  return (
    <View style={styles.trackItem}>
      <View>
        <Text> {trackNumber}. </Text>
      </View>
      <View>
        <Image
          style={styles.cover}
          source={{
            uri: artworkUrl100,
          }}
        />
      </View>
      <View style={styles.trackName}>
        <Text numberOfLines={1}>{trackName}</Text>
        <Text style={styles.trackAuthor}>{artistName}</Text>
      </View>
      <View>
        <Text>{formatMillisToMinAndSec(trackTimeMillis)}</Text>
      </View>
    </View>
  );
};

export default TrackItem;

const styles = StyleSheet.create({
  trackItem: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginBottom: 10,
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 15,
    backgroundColor: colors.lightGrey,
  },
  cover: {
    marginLeft: 10,
    width: 50,
    height: 50,
    borderRadius: 50,
  },
  trackName: {
    flex: 1,
    paddingHorizontal: 10,
  },
  trackAuthor: {
    fontWeight: '700',
  },
});
