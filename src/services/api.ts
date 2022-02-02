import axios from 'axios';

import {
  AlbumsResponseData,
  ArtistResponceData,
  TrackResponseData,
} from '../features/artists/types';
import {
  AlbumsResponseData as AlbumsResponseRecord,
  TrackResponseData as TrackResponseRecord,
} from '../features/albums/types';
import { AlbumsResponseData as FavoriteAlbumsData } from '../features/favorites/types';

type iTunesResponse<Items> = {
  results: Items;
};

const instance = axios.create({
  baseURL: 'https://itunes.apple.com',
});

// ---- Geolocation method ----
let country = 'us';

import Geolocation from '@react-native-community/geolocation';
import { decodeCoords } from '../utils/decodeCoords';

Geolocation.getCurrentPosition(
  async (pos) => {
    country = await decodeCoords(pos.coords.latitude, pos.coords.longitude);
  },
  // dispatch here
  (error) => console.log(error),
  {
    enableHighAccuracy: true,
    timeout: 2000,
    maximumAge: 3600000,
  }
);
// ---- ---- ---- move to start screen

export const artistAPI = {
  async getArtistsByName(name: string): Promise<ArtistResponceData[]> {
    const response = await instance.get<iTunesResponse<ArtistResponceData[]>>(
      `/search?term=${name}&entity=musicArtist&country=${country}`
    );
    console.log(country);
    return response.data.results;
  },
  async getArtistAlbumsById(id: number): Promise<AlbumsResponseData[]> {
    const response = await instance.get<iTunesResponse<AlbumsResponseData[]>>(
      `/lookup?id=${id}&entity=album&country=${country}`
    );
    return response.data.results.slice(1);
  },
  async getTracksById(id: number): Promise<TrackResponseData[]> {
    const response = await instance.get<iTunesResponse<TrackResponseData[]>>(
      `/lookup?id=${id}&entity=song&country=${country}`
    );
    return response.data.results.slice(1);
  },
};

export const albumAPI = {
  async getAlbumsByName(name: string): Promise<AlbumsResponseRecord[]> {
    const response = await instance.get<iTunesResponse<AlbumsResponseRecord[]>>(
      `/search?term=${name}&attribute=albumTerm&entity=album&country=${country}`
    );
    return response.data.results;
  },
  async getTracksById(id: number): Promise<TrackResponseRecord[]> {
    const response = await instance.get<iTunesResponse<TrackResponseRecord[]>>(
      `/lookup?id=${id}&entity=song&country=${country}`
    );
    return response.data.results.slice(1);
  },
};

export const favoritesAPI = {
  async getAlbumsByIds(ids: number[]): Promise<FavoriteAlbumsData[]> {
    const response = await instance.get<iTunesResponse<FavoriteAlbumsData[]>>(
      `/lookup?id=${ids.join()}&entity=album&country=${country}`
    );
    return response.data.results;
  },
};
