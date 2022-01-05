import { Navigation, NavigationFunctionComponent } from 'react-native-navigation';

import { withProvider } from '../hocs/withProvider';
import ArtistsScreen from '../features/artists/screens/ArtistsScreen';
import SelectedArtistScreen, {
  SelectedArtistScreenProps,
} from '../features/artists/screens/SelectedArtistScreen';
import AlbumsScreen from '../features/albums/screens/AlbumsScreen';
import withAppHandlers from '../hocs/withAppHandlers';
import ArtistsTracksScreen, {
  ArtistsTracksScreenProps,
} from '../features/artists/screens/ArtistsTracksScreen';
import AlbumsTracksScreen, {
  AlbumTracksScreenProps,
} from '../features/albums/screens/AlbumsTracksScreen';

export const ARTISTS_SCREEN = 'ArtistScreen';
export const ALBUMS_SCREEN = 'AlbumsScreen';
export const SELECTED_ARTIST_SCREEN = 'SelectedArtistScreen';
export const ARTISTS_TRACKS_SCREEN = 'ArtistsTracksScreen';
export const ALBUMS_TRACKS_SCREEN = 'AlbumsTracksScreen';

type Screens = {
  [key: string]: NavigationFunctionComponent<
    SelectedArtistScreenProps & ArtistsTracksScreenProps & AlbumTracksScreenProps
  >;
};

export const screens: Screens = {
  [ARTISTS_SCREEN]: withAppHandlers(ArtistsScreen),
  [ALBUMS_SCREEN]: withAppHandlers(AlbumsScreen),
  [SELECTED_ARTIST_SCREEN]: withAppHandlers(SelectedArtistScreen),
  [ARTISTS_TRACKS_SCREEN]: withAppHandlers(ArtistsTracksScreen),
  [ALBUMS_TRACKS_SCREEN]: withAppHandlers(AlbumsTracksScreen),
};

export const registerAllScreens = (): void => {
  for (const key in screens) {
    Navigation.registerComponent(key, withProvider(screens[key]));
  }
};
