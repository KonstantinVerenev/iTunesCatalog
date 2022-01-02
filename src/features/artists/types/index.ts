export type ArtistStateData = {
  [key: number]: {
    artistId: number;
    artistName: string;
    primaryGenreName: string;
    albums: AlbumStateData | Record<string, never>;
  };
};

export type AlbumStateData = {
  [key: number]: {
    collectionId: number;
    artistName: string;
    collectionName: string;
    artworkUrl100: string;
    collectionPrice: number;
    tracks: any; // temporaly
  };
};

export type ArtistResponceData = {
  artistName: string;
  artistId: number;
  primaryGenreName: string;
};

export type AlbumsResponseData = {
  collectionId: number;
  artistName: string;
  collectionName: string;
  artworkUrl100: string;
  collectionPrice: number;
};
