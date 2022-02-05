import React from 'react';
import { shallow } from 'enzyme';

import { ListRenderItem } from 'react-native';
import AlbumsScreen from './AlbumsScreen';
import * as albumsSelectorsModule from '../selectors/index';
import * as albumsThunksModule from '../thunks/index';
import { albumsMock } from '../../../mocks';
import { mockStore } from '../../../../setupTest';
import { AlbumsResponseData } from '../types';
import { Navigation } from 'react-native-navigation';
import AlbumItem from '../../../components/AlbumItem';

describe('AlbumsScreen', () => {
  beforeEach(() => {
    mockStore.clearActions();
  });

  const componentId = '112233';
  const searchValue = 'test value';

  jest.spyOn(albumsSelectorsModule, 'selectAlbums').mockReturnValue(albumsMock);

  it('should render last search block after search submit', () => {
    const wrapper = shallow(<AlbumsScreen componentId={componentId} />);

    expect(wrapper.find({ testID: 'last-search' })).toHaveLength(0);

    wrapper.find({ testID: 'search-input' }).prop('onSubmit')?.(searchValue);

    expect(wrapper.find({ testID: 'last-search' })).toHaveLength(1);
    expect(wrapper.find({ testID: 'last-search' }).prop('children')).toEqual(
      `Результаты поиска по: "${searchValue}"`
    );
  });

  it('should dispatch thunk with correct value', async () => {
    const thunkGetAlbumsMock = jest.spyOn(albumsThunksModule, 'thunkGetAlbums');

    const wrapper = shallow(<AlbumsScreen componentId={componentId} />);

    wrapper.find({ testID: 'search-input' }).prop('onSubmit')?.(searchValue);

    expect(thunkGetAlbumsMock).toBeCalledWith(searchValue);
  });

  it('renderItem put correct item properties and call handler correct', () => {
    const index = 0;
    const RenderItem: ListRenderItem<AlbumsResponseData> = shallow(
      <AlbumsScreen componentId={componentId} />
    )
      .find('FlatList')
      .prop('renderItem');

    const wrapper = shallow(
      <RenderItem
        item={albumsMock[index]}
        index={index}
        separators={{
          highlight: () => {},
          unhighlight: () => {},
          updateProps: () => {},
        }}
      />
    );

    const { artworkUrl100, collectionName, artistName, collectionPrice } = albumsMock[index];

    expect(wrapper.find(AlbumItem).prop('artworkUrl100')).toEqual(artworkUrl100);
    expect(wrapper.find(AlbumItem).prop('collectionName')).toEqual(collectionName);
    expect(wrapper.find(AlbumItem).prop('artistName')).toEqual(artistName);
    expect(wrapper.find(AlbumItem).prop('collectionPrice')).toEqual(collectionPrice);
    expect(wrapper.find(AlbumItem).prop('index')).toEqual(index);

    wrapper.find(AlbumItem).prop('onOpenAlbumScreen')?.();

    const navigationPushMock = jest.spyOn(Navigation, 'push');

    expect(navigationPushMock.mock.calls[0][0]).toEqual(componentId);
  });
});
