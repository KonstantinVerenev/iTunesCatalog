export type AlbumsStateData = {
  [key: number]: {
    collectionId: number;
    artistName: string;
    collectionName: string;
    artworkUrl100: string;
    collectionPrice: number;
    tracks: TrackStateData;
  };
};

export type TrackStateData = {
  [key: number]: {
    trackId: number;
    artistId: number;
    artistName: string;
    trackName: string;
    trackPrice: number;
    trackTimeMillis: number;
  };
};

export type AlbumsResponseData = {
  collectionId: number;
  artistName: string;
  collectionName: string;
  artworkUrl100: string;
  collectionPrice: number;
};

export type TrackResponseData = {
  artistId: number;
  trackId: number;
  artistName: string;
  trackName: string;
  trackPrice: number;
  trackTimeMillis: number;
};
