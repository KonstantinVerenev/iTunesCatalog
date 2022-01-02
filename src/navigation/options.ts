import { Platform } from 'react-native';
import { Options } from 'react-native-navigation';

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

export const getAlbumScreenOptions = (collectionName: string): Options => {
  return {
    topBar: {
      title: {
        text: collectionName,
      },
      rightButtons: [
        {
          id: 'addToFavButton',
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
