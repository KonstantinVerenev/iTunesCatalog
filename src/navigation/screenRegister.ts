import { Navigation, NavigationFunctionComponent } from 'react-native-navigation';

import { withProvider } from '../store/withProvider';
import ArtistsScreen from '../features/artists/screens/ArtistsScreen';
import SelectedArtistScreen, {
  SelectedArtistScreenProps,
} from '../features/artists/screens/SelectedArtistScreen';
import SelectedAlbumsScreen from '../features/artists/screens/SelectedAlbumScreen';
import AlbumsScreen from '../features/albums/screens/AlbumsScreen';

export const ARTISTS_SCREEN = 'ArtistScreen';
export const ALBUMS_SCREEN = 'AlbumsScreen';
export const SELECTED_ARTIST_SCREEN = 'SelectedArtistScreen';
export const SELECTED_ALBUM_SCREEN = 'SelectedAlbumScreen';

type screens = {
  [key: string]: NavigationFunctionComponent<SelectedArtistScreenProps>;
};

export const screens = {
  [ARTISTS_SCREEN]: ArtistsScreen,
  [ALBUMS_SCREEN]: AlbumsScreen,
  [SELECTED_ARTIST_SCREEN]: SelectedArtistScreen,
  [SELECTED_ALBUM_SCREEN]: SelectedAlbumsScreen,
};

export const registerAllScreens = (screens: screens): void => {
  for (const key in screens) {
    Navigation.registerComponent(key, withProvider(screens[key]), () => screens[key]);
  }
};
