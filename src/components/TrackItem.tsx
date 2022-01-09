import React, { useState } from 'react';
import {
  Image,
  LayoutAnimation,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  UIManager,
  View,
} from 'react-native';

import colors from '../constants/colors';
import { formatMillisToMinAndSec } from '../utils/formatMillisToMinAndSec';

type TrackItemProps = {
  artistName: string;
  trackName: string;
  trackTimeMillis: number;
  artworkUrl100: string;
  trackNumber: number;
};

if (Platform.OS === 'android') {
  if (UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }
}

const TrackItem: React.FC<TrackItemProps> = ({
  artistName,
  trackName,
  trackTimeMillis,
  artworkUrl100,
  trackNumber,
}) => {
  const [expanded, setExpanded] = useState(false);

  const onOpenMoreInfo = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setExpanded(!expanded);
  };

  return (
    <TouchableOpacity style={styles.trackItem} onPress={onOpenMoreInfo}>
      <View style={styles.trackMainInfo}>
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
      {expanded && (
        <View style={styles.trackMoreInfo}>
          <Text>Тут дополнительная информация</Text>
          <Text>Еще дополнительная информация</Text>
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
