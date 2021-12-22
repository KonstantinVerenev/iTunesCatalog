export type artistStateDataType = {
  [key: number]: {
    name: string;
    artistGenre: string;
    albums: any | [];
  };
};

export type artistResponceDataType = {
  artistName: string;
  artistId: number;
  primaryGenreName: string;
};
