import { Navigation, NavigationFunctionComponent } from 'react-native-navigation';

import { withProvider } from '../hocs/withProvider';
import ArtistsScreen from '../features/artists/screens/ArtistsScreen';
import SelectedArtistScreen, {
  SelectedArtistScreenProps,
} from '../features/artists/screens/SelectedArtistScreen';
import SelectedAlbumsScreen from '../features/artists/screens/SelectedAlbumScreen';
import AlbumsScreen from '../features/albums/screens/AlbumsScreen';
import WithLoading from '../hocs/withLoader';
import WithError from '../hocs/withError';

export const ARTISTS_SCREEN = 'ArtistScreen';
export const ALBUMS_SCREEN = 'AlbumsScreen';
export const SELECTED_ARTIST_SCREEN = 'SelectedArtistScreen';
export const SELECTED_ALBUM_SCREEN = 'SelectedAlbumScreen';

type Screens = {
  [key: string]: NavigationFunctionComponent<SelectedArtistScreenProps>;
};

export const screens: Screens = {
  [ARTISTS_SCREEN]: WithLoading(WithError(ArtistsScreen)),
  [ALBUMS_SCREEN]: AlbumsScreen,
  [SELECTED_ARTIST_SCREEN]: SelectedArtistScreen,
  [SELECTED_ALBUM_SCREEN]: SelectedAlbumsScreen,
};

export const registerAllScreens = (): void => {
  for (const key in screens) {
    Navigation.registerComponent(key, withProvider(screens[key]), () => screens[key]);
  }
};
