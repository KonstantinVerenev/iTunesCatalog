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

const instance = axios.create({
  baseURL: 'https://itunes.apple.com',
});

export const artistAPI = {
  async getArtistsByName(name: string): Promise<ArtistResponceData[]> {
    const response = await instance.get(`/search?term=${name}&entity=musicArtist`);
    return response.data.results;
  },
  async getArtistAlbumsById(id: number): Promise<AlbumsResponseData[]> {
    const response = await instance.get(`/lookup?id=${id}&entity=album`);
    return response.data.results.slice(1);
  },
  async getTracksById(id: number): Promise<TrackResponseData[]> {
    const response = await instance.get(`/lookup?id=${id}&entity=song`);
    return response.data.results.slice(1);
  },
};

export const albumAPI = {
  async getAlbumsByName(name: string): Promise<AlbumsResponseRecord[]> {
    const response = await instance.get(`/search?term=${name}&attribute=albumTerm&entity=album`);
    return response.data.results;
  },
  async getTracksById(id: number): Promise<TrackResponseRecord[]> {
    const response = await instance.get(`/lookup?id=${id}&entity=song`);
    return response.data.results.slice(1);
  },
};
