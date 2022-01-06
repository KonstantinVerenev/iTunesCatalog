import { Platform } from 'react-native';
import { Options } from 'react-native-navigation';

export const FAV_BUTTON_ID = 'FAV_BUTTON_ID';

export const getArtistScreenOptions = (artistName: string): Options => {
  return {
    topBar: {
      title: {
        text: artistName,
      },
      backButton: {
        title: 'Назад',
      },
    },
  };
};

export const getAlbumScreenOptions = (screenName: string, collectionName: string): Options => {
  return {
    topBar: {
      title: {
        text: collectionName,
      },
      rightButtons: [
        {
          id: `${screenName}-${FAV_BUTTON_ID}`,
          text: 'add to fav',
          icon:
            Platform.OS === 'ios'
              ? { uri: 'star', scale: 3 }
              : require('../../assets/icons/star.png'),
        },
      ],
    },
  };
};

export const inFavoritesOptions = (screenName: string): Options => {
  return {
    topBar: {
      rightButtons: [
        {
          id: `${screenName}-${FAV_BUTTON_ID}`,
          icon:
            Platform.OS === 'ios'
              ? { uri: 'filled-star', scale: 3 }
              : require('../../assets/icons/filled-star.png'),
        },
      ],
    },
  };
};

export const notInFavoritesOptions = (screenName: string): Options => {
  return {
    topBar: {
      rightButtons: [
        {
          id: `${screenName}-${FAV_BUTTON_ID}`,
          icon:
            Platform.OS === 'ios'
              ? { uri: 'star', scale: 3 }
              : require('../../assets/icons/star.png'),
        },
      ],
    },
  };
};
