export type artistStateDataType = {
  [key: number]: {
    artistId: number;
    artistName: string;
    primaryGenreName: string;
    albums: any; // может быть пустой
  };
};

export type artistResponceDataType = {
  artistName: string;
  artistId: number;
  primaryGenreName: string;
};
