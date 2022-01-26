import { thunkGetAlbumsById, thunkGetArtists, thunkGetTracksById } from './index';
import { albumsMock, artistsMock, tracksMock } from '../../../mocks';
import { initialState as albumsState } from '../reducers/index';
import { instance } from '../../../services/instance';
import { getData, getDataSuccess, getDataError } from '../../../store/actions';
import { getAlbumsByIdSuccess, getArtistSuccess, getTracksByIdSuccess } from '../actions';

jest.mock('../../../services/instance');
const instanceMock = instance as jest.Mocked<typeof instance>;

const collectionId = albumsMock[0].collectionId;
const artistId = artistsMock[0].artistId;

describe('thunkGetArtists', () => {
  it('with mocked dispatch', async () => {
    instanceMock.get.mockReturnValue(Promise.resolve({ data: { results: artistsMock } }));

    const dispatch = jest.fn();

    const thunk = thunkGetArtists('artistName');
    await thunk(dispatch, () => albumsState, undefined);

    expect(dispatch).toHaveBeenCalledTimes(3);
    expect(dispatch).toHaveBeenNthCalledWith(1, getData());
    expect(dispatch).toHaveBeenNthCalledWith(2, getDataSuccess());
    expect(dispatch).toHaveBeenNthCalledWith(3, getArtistSuccess(artistsMock));
  });

  it('request error', async () => {
    instanceMock.get.mockReturnValue(Promise.reject());

    const dispatch = jest.fn();

    const thunk = thunkGetArtists('artistName');
    await thunk(dispatch, () => albumsState, undefined);

    expect(dispatch).toHaveBeenCalledTimes(2);
    expect(dispatch).toHaveBeenNthCalledWith(1, getData());
    expect(dispatch).toHaveBeenNthCalledWith(
      2,
      getDataError('Произошла ошибка при загрузке данных с сервера')
    );
  });
});

describe('thunkGetAlbumsById', () => {
  it('with mocked dispatch', async () => {
    instanceMock.get.mockReturnValue(Promise.resolve({ data: { results: [{}, ...albumsMock] } }));
    // first element in array is artist info, not album. so api service cuts it off

    const dispatch = jest.fn();

    const thunk = thunkGetAlbumsById(collectionId);
    await thunk(dispatch, () => albumsState, undefined);

    expect(dispatch).toHaveBeenCalledTimes(3);
    expect(dispatch).toHaveBeenNthCalledWith(1, getData());
    expect(dispatch).toHaveBeenNthCalledWith(2, getDataSuccess());
    expect(dispatch).toHaveBeenNthCalledWith(3, getAlbumsByIdSuccess(albumsMock, collectionId));
  });

  it('request error', async () => {
    instanceMock.get.mockReturnValue(Promise.reject());

    const dispatch = jest.fn();

    const thunk = thunkGetAlbumsById(collectionId);
    await thunk(dispatch, () => albumsState, undefined);

    expect(dispatch).toHaveBeenCalledTimes(2);
    expect(dispatch).toHaveBeenNthCalledWith(1, getData());
    expect(dispatch).toHaveBeenNthCalledWith(
      2,
      getDataError('Произошла ошибка при загрузке данных с сервера')
    );
  });
});

describe('thunkGetTracksById', () => {
  it('with mocked dispatch', async () => {
    instanceMock.get.mockReturnValue(Promise.resolve({ data: { results: [{}, ...tracksMock] } }));

    const dispatch = jest.fn();

    const thunk = thunkGetTracksById(artistId, collectionId);
    await thunk(dispatch, () => albumsState, undefined);

    expect(dispatch).toHaveBeenCalledTimes(3);
    expect(dispatch).toHaveBeenNthCalledWith(1, getData());
    expect(dispatch).toHaveBeenNthCalledWith(2, getDataSuccess());
    expect(dispatch).toHaveBeenNthCalledWith(
      3,
      getTracksByIdSuccess(tracksMock, artistId, collectionId)
    );
  });

  it('request error', async () => {
    instanceMock.get.mockReturnValue(Promise.reject());

    const dispatch = jest.fn();

    const thunk = thunkGetTracksById(artistId, collectionId);
    await thunk(dispatch, () => albumsState, undefined);

    expect(dispatch).toHaveBeenCalledTimes(2);
    expect(dispatch).toHaveBeenNthCalledWith(1, getData());
    expect(dispatch).toHaveBeenNthCalledWith(
      2,
      getDataError('Произошла ошибка при загрузке данных с сервера')
    );
  });
});
