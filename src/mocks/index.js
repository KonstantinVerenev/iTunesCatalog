export const artistIdMock1 = 111222;
export const artistIdMock2 = 333444;
export const collectionIdMock1 = 555666;
export const collectionIdMock2 = 777888;
export const trackIdMock1 = 999000;
export const trackIdMock2 = 111999;

export const artistsMock = [
  {
    artistName: 'name',
    artistId: artistIdMock1,
    primaryGenreName: 'genreName',
  },
  {
    artistName: 'name2',
    artistId: artistIdMock2,
    primaryGenreName: 'genreName',
  },
];

export const albumsMock = [
  {
    collectionId: collectionIdMock1,
    artistName: 'name',
    collectionName: 'albumName',
    artworkUrl100: 'url',
    collectionPrice: 9.9,
  },
  {
    collectionId: collectionIdMock2,
    artistName: 'name2',
    collectionName: 'albumName',
    artworkUrl100: 'url',
    collectionPrice: 5.9,
  },
];

export const tracksMock = [
  {
    artistId: 1,
    trackId: trackIdMock1,
    artistName: 'name',
    trackName: 'trackName',
    trackTimeMillis: 2500,
    artworkUrl100: 'url',
    trackNumber: 1,
    releaseDate: 'releaseDate',
    country: 'country',
    primaryGenreName: 'genreName',
  },
  {
    artistId: 2,
    trackId: trackIdMock2,
    artistName: 'name2',
    trackName: 'trackName2',
    trackTimeMillis: 5000,
    artworkUrl100: 'url2',
    trackNumber: 2,
    releaseDate: 'releaseDate',
    country: 'country',
    primaryGenreName: 'genreName',
  },
];
