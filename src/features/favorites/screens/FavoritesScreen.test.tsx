import React from 'react';
import { shallow } from 'enzyme';

import * as favoritesSelectorsModule from '../selectors/index';
import FavoritesScreen from './FavoritesScreen';
import { instance } from '../../../services/instance';
import { albumsMock } from '../../../mocks';
import { act } from 'react-test-renderer';
import { ListRenderItem } from 'react-native';
import { AlbumsResponseData } from '../types';

jest.mock('../../../services/instance');
const instanceMock = instance as jest.Mocked<typeof instance>;
instanceMock.get.mockReturnValue(Promise.resolve({ data: { results: albumsMock } }));

describe('FavoritesScreen', () => {
  it('should render flatList with correct data that comes from useEffect ', async () => {
    jest.spyOn(favoritesSelectorsModule, 'selectFavoriteAlbums').mockReturnValue([]);

    const wrapper = shallow(<FavoritesScreen componentId="" />);

    await act(async () => {
      wrapper.update();
    });

    expect(wrapper.find('FlatList').prop('data')).toEqual(albumsMock);
  });

  it('renderItem put correct item properties', () => {
    const RenderItem: ListRenderItem<AlbumsResponseData> = shallow(
      <FavoritesScreen componentId="" />
    )
      .find('FlatList')
      .prop('renderItem');

    const wrapper = shallow(
      <RenderItem
        item={albumsMock[0]}
        index={0}
        separators={{
          highlight: () => {},
          unhighlight: () => {},
          updateProps: () => {},
        }}
      />
    );

    const { artistName, collectionName, artworkUrl100, collectionPrice } = albumsMock[0];

    expect(wrapper.find('AlbumItem').prop('artworkUrl100')).toEqual(artworkUrl100);
    expect(wrapper.find('AlbumItem').prop('collectionName')).toEqual(collectionName);
    expect(wrapper.find('AlbumItem').prop('artistName')).toEqual(artistName);
    expect(wrapper.find('AlbumItem').prop('collectionPrice')).toEqual(collectionPrice);
  });
});
