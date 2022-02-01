import React, { useState, useMemo } from 'react';
import {
  Alert,
  Button,
  Image,
  LayoutAnimation,
  Linking,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
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
  releaseDate: string;
  country: string;
  primaryGenreName: string;
  collectionViewUrl: string;
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
  collectionViewUrl,
}) => {
  const [expanded, setExpanded] = useState(false);
  const formattedTime = useMemo(() => formatMillisToMinAndSec(trackTimeMillis), [trackTimeMillis]);
  const fotmattedDate = releaseDate.slice(0, -10);

  const onOpenMoreInfo = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setExpanded(!expanded);
  };

  const onPressItunes = async () => {
    const itunesAppLink = 'itms-apps://';

    if (Platform.OS === 'ios') {
      const appSupported = await Linking.canOpenURL(itunesAppLink);

      if (appSupported) {
        await Linking.openURL(itunesAppLink);
        return;
      }
    }

    const webSupported = await Linking.canOpenURL(collectionViewUrl);

    if (webSupported) {
      await Linking.openURL(collectionViewUrl);
    } else {
      Alert.alert(`Error: Can't open iTunes link`);
    }
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
          <Text>{formattedTime}</Text>
        </View>
      </View>
      {expanded && (
        <View style={styles.trackMoreInfo}>
          <View>
            <Text>Дата релиза: {fotmattedDate}</Text>
            <Text>Страна: {country}</Text>
            <Text>Жанр: {primaryGenreName}</Text>
          </View>
          <View>
            <Button title="go to iTunes" onPress={onPressItunes} />
          </View>
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
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
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
