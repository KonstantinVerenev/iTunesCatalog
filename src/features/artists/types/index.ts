export type ArtistStateData = {
  [key: number]: {
    artistId: number;
    artistName: string;
    primaryGenreName: string;
    albums: any; // can be empty
  };
};

export type ArtistResponceData = {
  artistName: string;
  artistId: number;
  primaryGenreName: string;
};
