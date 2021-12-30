import { Options } from 'react-native-navigation';

export const options = {
  SelectedArtistScreen(artistName: string): Options {
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
  },
  SelectedAlbumScreen(collectionName: string): Options {
    return {
      topBar: {
        title: {
          text: collectionName,
        },
        rightButtons: [
          {
            id: 'addToFavButton',
            text: 'add to fav',
            icon: { uri: 'star', scale: 3 },
          },
        ],
      },
    };
  },
};
