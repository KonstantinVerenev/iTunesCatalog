import { thunkGetAlbums, thunkGetAlbumTracksById } from './index';
import { albumsMock, tracksMock } from '../../../mocks';
import { initialState as albumsState } from '../reducers/index';
import { instance } from '../../../services/instance';
import { getData, getDataSuccess, getDataError } from '../../../store/actions';
import { getAlbumsSuccess, getTracksByIdSuccess } from '../actions';

jest.mock('../../../services/instance');
const instanceMock = instance as jest.Mocked<typeof instance>;

describe('thunkGetAlbums', () => {
  it('with mocked dispatch', async () => {
    instanceMock.get.mockReturnValue(Promise.resolve({ data: { results: albumsMock } }));

    const dispatch = jest.fn();

    const thunk = thunkGetAlbums('artistName');
    await thunk(dispatch, () => albumsState, undefined);

    expect(dispatch).toHaveBeenCalledTimes(3);
    expect(dispatch).toHaveBeenNthCalledWith(1, getData());
    expect(dispatch).toHaveBeenNthCalledWith(2, getDataSuccess());
    expect(dispatch).toHaveBeenNthCalledWith(3, getAlbumsSuccess(albumsMock));
  });

  it('request error', async () => {
    instanceMock.get.mockReturnValue(Promise.reject());

    const dispatch = jest.fn();

    const thunk = thunkGetAlbums('artistName');
    await thunk(dispatch, () => albumsState, undefined);

    expect(dispatch).toHaveBeenCalledTimes(2);
    expect(dispatch).toHaveBeenNthCalledWith(1, getData());
    expect(dispatch).toHaveBeenNthCalledWith(
      2,
      getDataError('An error occurred while downloading data from the server')
    );
  });
});

describe('thunkGetAlbumTracksById', () => {
  it('with mocked dispatch', async () => {
    // first element in array is artist info, not track. so api service cuts it off
    instanceMock.get.mockReturnValue(Promise.resolve({ data: { results: [{}, ...tracksMock] } }));

    const collectionId = 12345;

    const dispatch = jest.fn();

    const thunk = thunkGetAlbumTracksById(collectionId);
    await thunk(dispatch, () => albumsState, undefined);

    expect(dispatch).toHaveBeenCalledTimes(3);
    expect(dispatch).toHaveBeenNthCalledWith(1, getData());
    expect(dispatch).toHaveBeenNthCalledWith(2, getDataSuccess());
    expect(dispatch).toHaveBeenNthCalledWith(3, getTracksByIdSuccess(tracksMock, collectionId));
  });

  it('request error', async () => {
    instanceMock.get.mockReturnValue(Promise.reject());

    const dispatch = jest.fn();

    const thunk = thunkGetAlbumTracksById(12345);
    await thunk(dispatch, () => albumsState, undefined);

    expect(dispatch).toHaveBeenCalledTimes(2);
    expect(dispatch).toHaveBeenNthCalledWith(1, getData());
    expect(dispatch).toHaveBeenNthCalledWith(
      2,
      getDataError('An error occurred while downloading data from the server')
    );
  });
});
