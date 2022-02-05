import React from 'react';
import { shallow } from 'enzyme';

import TrackItem from './TrackItem';
import { tracksMock } from '../mocks';
import { LayoutAnimation } from 'react-native';
import { formatMillisToMinAndSec } from '../utils/formatMillisToMinAndSec';

describe('SearchInput', () => {
  it('should set track info from props and open info when press', () => {
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
    const onPressMock = jest.spyOn(LayoutAnimation, 'configureNext');

    const wrapper = shallow(
      <TrackItem
        artistName={artistName}
        trackName={trackName}
        trackTimeMillis={trackTimeMillis}
        artworkUrl100={artworkUrl100}
        trackNumber={trackNumber}
        releaseDate={releaseDate}
        country={country}
        primaryGenreName={primaryGenreName}
      />
    );

    wrapper.find('TouchableOpacity').simulate('press');

    expect(onPressMock).toBeCalledTimes(1);
    expect(onPressMock).toBeCalledWith(LayoutAnimation.Presets.easeInEaseOut);
    expect(wrapper.find({ testID: 'add-info' })).toHaveLength(1);

    expect(wrapper.find({ testID: 'track-number' }).prop('children')).toEqual([
      ' ',
      trackNumber,
      '. ',
    ]);
    expect(wrapper.find('Image').prop('source')).toEqual({ uri: artworkUrl100 });
    expect(wrapper.find({ testID: 'track-name' }).prop('children')).toEqual(trackName);
    expect(wrapper.find({ testID: 'artist-name' }).prop('children')).toEqual(artistName);
    expect(wrapper.find({ testID: 'track-time' }).prop('children')).toEqual(
      formatMillisToMinAndSec(trackTimeMillis)
    );
  });
});
