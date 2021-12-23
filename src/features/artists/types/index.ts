export type artistStateDataType = {
  [key: number]: {
    name: string;
    artistGenre: string;
    albums: any | []; // может быть пустой
  };
};

export type artistResponceDataType = {
  artistName: string;
  artistId: number;
  primaryGenreName: string;
};
