const basicURL = 'https://2itunes.apple.com/';

export const artistAPI = {
  getArtistsByName(name: string): Promise<Response> {
    return fetch(`${basicURL}search?term=${name}&entity=musicArtist`);
  },
  getArtistAlbumById(id: number): Promise<Response> {
    return fetch(`${basicURL}lookup?id=${id}&entity=album`);
  },
};

export const albumAPI = {
  getAlbumsByName(name: string): Promise<Response> {
    return fetch(`${basicURL}search?term=${name}&attribute=albumTerm&entity=album`);
  },
};
