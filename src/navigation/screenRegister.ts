import { Navigation } from 'react-native-navigation';

import { withProvider } from '../store/withProvider';
import ArtistsScreen from '../features/artists/screens/ArtistsScreen';
import SelectedArtistScreen from '../features/artists/screens/SelectedArtistScreen';
import SelectedAlbumsScreen from '../features/artists/screens/SelectedAlbumScreen';
import AlbumsScreen from '../features/albums/screens/AlbumsScreen';

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
Navigation.registerComponent(
  SELECTED_ALBUM_SCREEN,
  withProvider(SelectedAlbumsScreen),
  () => SelectedAlbumsScreen
);
