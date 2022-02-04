import React from 'react';
import { shallow } from 'enzyme';

import AlbumItem from './AlbumItem';
import { albumsMock } from '../mocks';
import { Animated } from 'react-native';

describe('AlbumItem', () => {
  it('should set corect album info, call useEffect and onOpenAlbum function', () => {
    const { artworkUrl100, collectionName, artistName, collectionPrice } = albumsMock[0];
    const onPressMock = jest.fn();
    const AnimatedTimingMock = jest.spyOn(Animated, 'timing');

    const wrapper = shallow(
      <AlbumItem
        onOpenAlbumScreen={onPressMock}
        artworkUrl100={artworkUrl100}
        collectionName={collectionName}
        artistName={artistName}
        collectionPrice={collectionPrice}
        index={1}
      />
    );

    wrapper.find('TouchableOpacity').simulate('press');

    expect(wrapper.find('Image').prop('source')).toEqual({ uri: artworkUrl100 });
    expect(wrapper.find({ testID: 'collection-name' }).prop('children')).toEqual(collectionName);
    expect(wrapper.find({ testID: 'artist-name' }).prop('children')).toEqual(artistName);
    expect(wrapper.find({ testID: 'price' }).prop('children')).toEqual([collectionPrice, ' $ ']);

    expect(AnimatedTimingMock).toHaveBeenCalledTimes(1);

    expect(onPressMock).toBeCalledTimes(1);
  });
});
