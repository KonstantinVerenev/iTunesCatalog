import axios, { AxiosResponse } from 'axios';

const instance = axios.create({
  baseURL: 'https://itunes.apple.com',
});

export const artistAPI = {
  getArtistsByName(name: string): Promise<AxiosResponse> {
    return instance.get(`/search?term=${name}&entity=musicArtist`);
  },
  getArtistAlbumById(id: number): Promise<AxiosResponse> {
    return instance.get(`/lookup?id=${id}&entity=album`);
  },
  getTracksById(id: number): Promise<AxiosResponse> {
    return instance.get(`/lookup?id=${id}&entity=song`);
  },
};

export const albumAPI = {
  getAlbumsByName(name: string): Promise<AxiosResponse> {
    return instance.get(`/search?term=${name}&attribute=albumTerm&entity=album`);
  },
  getTracksById(id: number): Promise<AxiosResponse> {
    return instance.get(`/lookup?id=${id}&entity=song`);
  },
};
