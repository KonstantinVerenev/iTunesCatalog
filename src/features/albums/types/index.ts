export type albumsStateDataType = {
  [key: number]: {
    collectionId: number;
    artistName: string;
    collectionName: string;
    artworkUrl100: string;
    collectionPrice: number;
    tracks: any;
  };
};

export type albumsResponseDataType = {
  collectionId: number;
  artistName: string;
  collectionName: string;
  artworkUrl100: string;
  collectionPrice: number;
};
