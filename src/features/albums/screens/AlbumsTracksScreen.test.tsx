import React from 'react';
import { shallow } from 'enzyme';
import { Navigation } from 'react-native-navigation';

import * as albumsSelectorsModule from '../selectors/index';
import * as favoritesSelectorsModule from '../../favorites/selectors/index';
import * as albumsThunksModule from '../thunks/index';
import * as useButtonListenerModule from '../../../hooks/useButtonListener';
import AlbumsTracksScreen from './AlbumsTracksScreen';
import { tracksMock } from '../../../mocks';
import { mockStore } from '../../../../setupTest';
import { ALBUMS_TRACKS_SCREEN } from '../../../navigation/constants';
import { ListRenderItem } from 'react-native';
import { TrackResponseData } from '../types';
import { updateFavoriteAlbums } from '../../favorites/actions';
import { getData, getDataSuccess } from '../../../store/actions';
import { getTracksByIdSuccess } from '../actions';
import { filledStarOptions, nonFilledStarOptions } from '../../../navigation/options';

describe('AlbumsTracksScreen', () => {
  beforeEach(() => {
    mockStore.clearActions();
  });

  const collectionId = 54321;

  jest.spyOn(albumsSelectorsModule, 'selectTracksById').mockReturnValue(() => tracksMock);
  const selectFavoriteAlbumsMock = jest
    .spyOn(favoritesSelectorsModule, 'selectFavoriteAlbums')
    .mockReturnValue([]);
  const mergeOptionsMock = jest.spyOn(Navigation, 'mergeOptions');

  it('should dispatch get track thunk with correct value', async () => {
    await mockStore.dispatch(albumsThunksModule.thunkGetAlbumTracksById(collectionId));
    const actions = mockStore.getActions();

    expect(actions[0]).toEqual(getData());
    expect(actions[1]).toEqual(getDataSuccess());
    expect(actions[2]).toEqual(getTracksByIdSuccess([], collectionId));
  });

  it('useEffect should set non filled star', () => {
    selectFavoriteAlbumsMock.mockReturnValue([]);
    shallow(<AlbumsTracksScreen componentId="" collectionId={collectionId} />);

    expect(mergeOptionsMock).toBeCalledWith('', nonFilledStarOptions(ALBUMS_TRACKS_SCREEN));
  });

  it('useEffect should set filled star', () => {
    selectFavoriteAlbumsMock.mockReturnValue([collectionId]);
    shallow(<AlbumsTracksScreen componentId="" collectionId={collectionId} />);

    expect(mergeOptionsMock).toBeCalledWith('', filledStarOptions(ALBUMS_TRACKS_SCREEN));
  });

  it('useButtonListener should dispatch correct action', () => {
    jest
      .spyOn(useButtonListenerModule, 'useButtonListener')
      .mockImplementationOnce((_, onPress) => onPress());

    shallow(<AlbumsTracksScreen componentId="" collectionId={collectionId} />);

    const actions = mockStore.getActions();

    expect(actions[0]).toEqual(getData());
    expect(actions[1]).toEqual(updateFavoriteAlbums(collectionId));
  });

  it('renderItem put correct item properties ', () => {
    const RenderItem: ListRenderItem<TrackResponseData> = shallow(
      <AlbumsTracksScreen componentId="" collectionId={collectionId} />
    )
      .find('FlatList')
      .prop('renderItem');

    const wrapper = shallow(
      <RenderItem
        item={tracksMock[0]}
        index={1}
        separators={{
          highlight: () => {},
          unhighlight: () => {},
          updateProps: () => {},
        }}
      />
    );

    const {
      artistName,
      trackName,
      trackTimeMillis,
      artworkUrl100,
      trackNumber,
      releaseDate,
      country,
      primaryGenreName,
    } = tracksMock[0];

    expect(wrapper.find('TrackItem').prop('artistName')).toEqual(artistName);
    expect(wrapper.find('TrackItem').prop('trackName')).toEqual(trackName);
    expect(wrapper.find('TrackItem').prop('trackTimeMillis')).toEqual(trackTimeMillis);
    expect(wrapper.find('TrackItem').prop('artworkUrl100')).toEqual(artworkUrl100);
    expect(wrapper.find('TrackItem').prop('trackNumber')).toEqual(trackNumber);
    expect(wrapper.find('TrackItem').prop('releaseDate')).toEqual(releaseDate);
    expect(wrapper.find('TrackItem').prop('country')).toEqual(country);
    expect(wrapper.find('TrackItem').prop('primaryGenreName')).toEqual(primaryGenreName);
  });
});
