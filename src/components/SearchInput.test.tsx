import React from 'react';
import { shallow } from 'enzyme';

import SearchInput from './SearchInput';

describe('SearchInput', () => {
  it('should submit with right text', () => {
    const onSubmitMock = jest.fn();
    const searchValue = 'test';

    const wrapper = shallow(<SearchInput onSubmit={onSubmitMock} />);

    wrapper.find('TextInput').simulate('changeText', searchValue);
    wrapper.find('TextInput').simulate('submitEditing');

    expect(onSubmitMock).toHaveBeenCalledTimes(1);
    expect(onSubmitMock).toHaveBeenCalledWith(searchValue);
  });
});
