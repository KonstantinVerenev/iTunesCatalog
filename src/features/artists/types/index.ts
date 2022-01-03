export type ArtistStateData = {
  [key: number]: {
    artistId: number;
    artistName: string;
    primaryGenreName: string;
    albums: AlbumStateData;
    //albums: AlbumStateData | Record<string, never>;
  };
};

export type AlbumStateData = {
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

export type TrackResponseData = {
  artistId: number;
  trackId: number;
  artistName: string;
  trackName: string;
  trackTimeMillis: number;
  artworkUrl100: string;
  trackNumber: number;
};

// RESPONSE EXAMPLE
//[
//  {
//    wrapperType: 'track',
//    kind: 'song',
//    artistId: 111051,
//    collectionId: 1425129724,
//    trackId: 1425130499,
//    artistName: 'Eminem',
//    collectionName: 'Encore (Deluxe Version)',
//    trackName: 'Curtains Up',
//    collectionCensoredName: 'Encore (Deluxe Version)',
//    trackCensoredName: 'Curtains Up',
//    artistViewUrl: 'https://music.apple.com/us/artist/eminem/111051?uo=4',
//    collectionViewUrl: 'https://music.apple.com/us/album/curtains-up/1425129724?i=1425130499&uo=4',
//    trackViewUrl: 'https://music.apple.com/us/album/curtains-up/1425129724?i=1425130499&uo=4',
//    previewUrl:
//      'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/ec/f1/4b/ecf14bd6-9f30-1f05-2483-7a1861ad3827/mzaf_12973384184370615073.plus.aac.p.m4a',
//    artworkUrl30:
//      'https://is3-ssl.mzstatic.com/image/thumb/Music118/v4/6d/95/02/6d950204-9e70-2b87-7790-84077d6f4d16/source/30x30bb.jpg',
//    artworkUrl60:
//      'https://is3-ssl.mzstatic.com/image/thumb/Music118/v4/6d/95/02/6d950204-9e70-2b87-7790-84077d6f4d16/source/60x60bb.jpg',
//    artworkUrl100:
//      'https://is3-ssl.mzstatic.com/image/thumb/Music118/v4/6d/95/02/6d950204-9e70-2b87-7790-84077d6f4d16/source/100x100bb.jpg',
//    collectionPrice: 11.99,
//    trackPrice: 1.29,
//    releaseDate: '2004-11-12T12:00:00Z',
//    collectionExplicitness: 'cleaned',
//    trackExplicitness: 'cleaned',
//    discCount: 2,
//    discNumber: 1,
//    trackCount: 20,
//    trackNumber: 1,
//    trackTimeMillis: 46680,
//    country: 'USA',
//    currency: 'USD',
//    primaryGenreName: 'Hip-Hop/Rap',
//    contentAdvisoryRating: 'Clean',
//    isStreamable: true,
//  },
//];
