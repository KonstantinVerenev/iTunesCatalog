import React, { useState, useMemo } from 'react';
import { Image, LayoutAnimation, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import colors from '../constants/colors';
import { formatMillisToMinAndSec } from '../utils/formatMillisToMinAndSec';

type TrackItemProps = {
  artistName: string;
  trackName: string;
  trackTimeMillis: number;
  artworkUrl100: string;
  trackNumber: number;
  releaseDate: string;
  country: string;
  primaryGenreName: string;
};

const TrackItem: React.FC<TrackItemProps> = ({
  artistName,
  trackName,
  trackTimeMillis,
  artworkUrl100,
  trackNumber,
  releaseDate,
  country,
  primaryGenreName,
}) => {
  const [expanded, setExpanded] = useState(false);
  const formattedTime = useMemo(() => formatMillisToMinAndSec(trackTimeMillis), [trackTimeMillis]);
  const fotmattedDate = releaseDate.slice(0, -10);

  const onOpenMoreInfo = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setExpanded(!expanded);
  };

  return (
    <TouchableOpacity style={styles.trackItem} onPress={onOpenMoreInfo}>
      <View style={styles.trackMainInfo}>
        <View>
          <Text testID="track-number"> {trackNumber}. </Text>
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
          <Text numberOfLines={1} testID="track-name">
            {trackName}
          </Text>
          <Text style={styles.trackAuthor} testID="artist-name">
            {artistName}
          </Text>
        </View>
        <View>
          <Text testID="track-time">{formattedTime}</Text>
        </View>
      </View>
      {expanded && (
        <View style={styles.trackMoreInfo} testID="add-info">
          <Text>Дата релиза: {fotmattedDate}</Text>
          <Text>Страна: {country}</Text>
          <Text>Жанр: {primaryGenreName}</Text>
        </View>
      )}
    </TouchableOpacity>
  );
};

export default TrackItem;

const styles = StyleSheet.create({
  trackItem: {
    marginBottom: 10,
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 15,
    backgroundColor: colors.lightGrey,
    overflow: 'hidden',
  },
  trackMainInfo: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  trackMoreInfo: {
    marginTop: 20,
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
