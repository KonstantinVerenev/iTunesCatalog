import {
  ArtistResponceData,
  AlbumsResponseData,
  TrackResponseData,
} from '../features/artists/types';
import { RootReducer } from '../store/combineReducer';

export const rootState: RootReducer = {
  main: { isLoading: false },
  albums: { albumsData: {} },
  artists: { artistsData: {} },
  favorites: { favoritesAlbums: [] },
};

export const artistsMock: ArtistResponceData[] = [
  {
    artistName: 'name',
    artistId: 111222,
    primaryGenreName: 'genreName',
  },
  {
    artistName: 'name2',
    artistId: 333444,
    primaryGenreName: 'genreName',
  },
];

export const albumsMock: AlbumsResponseData[] = [
  {
    collectionId: 555666,
    artistName: 'name',
    collectionName: 'albumName',
    artworkUrl100: 'url',
    collectionPrice: 9.9,
  },
  {
    collectionId: 777888,
    artistName: 'name2',
    collectionName: 'albumName',
    artworkUrl100: 'url',
    collectionPrice: 5.9,
  },
];

export const tracksMock: TrackResponseData[] = [
  {
    artistId: 1,
    trackId: 999000,
    artistName: 'name',
    trackName: 'trackName',
    trackTimeMillis: 2500,
    artworkUrl100: 'url',
    trackNumber: 1,
    releaseDate: 'releaseDate',
    country: 'country',
    primaryGenreName: 'genreName',
  },
  {
    artistId: 2,
    trackId: 111999,
    artistName: 'name2',
    trackName: 'trackName2',
    trackTimeMillis: 5000,
    artworkUrl100: 'url2',
    trackNumber: 2,
    releaseDate: 'releaseDate',
    country: 'country',
    primaryGenreName: 'genreName',
  },
];
