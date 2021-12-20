import { Navigation } from 'react-native-navigation';

import ArtistsScreen from '../screens/ArtistsScreen';
import AlbumsScreen from '../screens/AlbumsScreen';
import SelectedAlbumsScreen from '../screens/SelectedAlbumScreen';
import SelectedArtistScreen from '../screens/SelectedArtistScreen';
import { withProvider } from '../HOCs/withProvider';

export const ARTISTS_SCREEN = 'ArtistScreen';
export const ALBUMS_SCREEN = 'AlbumsScreen';
export const SELECTED_ARTIST_SCREEN = 'SelectedArtistScreen';
export const SELECTED_ALBUM_SCREEN = 'SelectedAlbumScreen';

Navigation.registerComponent(ARTISTS_SCREEN, withProvider(ArtistsScreen), () => ArtistsScreen);
Navigation.registerComponent(ALBUMS_SCREEN, withProvider(AlbumsScreen), () => AlbumsScreen);
Navigation.registerComponent(
  SELECTED_ARTIST_SCREEN,
  withProvider(SelectedArtistScreen),
  () => SelectedArtistScreen
);
Navigation.registerComponent(SELECTED_ALBUM_SCREEN, () => SelectedAlbumsScreen);

export const rootNavigator = (): void => {
  Navigation.setRoot({
    root: {
      bottomTabs: {
        children: [
          {
            stack: {
              children: [
                {
                  component: {
                    name: ARTISTS_SCREEN,
                  },
                },
              ],
              options: {
                bottomTab: {
                  icon: { uri: 'mic-outline', scale: 3 },
                },
              },
            },
          },
          {
            stack: {
              children: [
                {
                  component: {
                    name: ALBUMS_SCREEN,
                  },
                },
              ],
              options: {
                bottomTab: {
                  icon: { uri: 'headphone-outline', scale: 3 },
                },
              },
            },
          },
        ],
      },
    },
  });
};

Navigation.setDefaultOptions({
  bottomTab: {
    iconColor: 'rgba(0, 0, 0, .3)',
    selectedIconColor: 'rgba(0, 0, 0, 1)',
    textColor: 'rgba(0, 0, 0, .3)',
    selectedTextColor: 'rgba(0, 0, 0, 1)',
  },
});
