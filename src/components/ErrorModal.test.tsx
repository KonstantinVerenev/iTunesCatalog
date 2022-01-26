import React from 'react';
import { shallow } from 'enzyme';

import { ErrorModal } from './ErrorModal';

describe('ErrorModal', () => {
  it('modal should be visible with correct message and call correct onPress', () => {
    const testMessage = 'test message';

    const onPressMock = jest.fn();

    const wrapper = shallow(<ErrorModal errorMessage={testMessage} onCloseError={onPressMock} />);

    wrapper.find('Button').simulate('press');

    expect(wrapper.find({ testID: 'error-modal' }).prop('isVisible')).toEqual(true);
    expect(wrapper.find({ testID: 'error-message' }).prop('children')).toEqual(testMessage);
    expect(wrapper.find('Button').prop('onPress')).toBe(onPressMock);
    expect(onPressMock).toBeCalledTimes(1);
  });

  it('modal should not be visible with empty message', () => {
    const wrapper = shallow(<ErrorModal errorMessage={''} onCloseError={() => {}} />);

    expect(wrapper.find({ testID: 'error-modal' }).prop('isVisible')).toEqual(false);
  });
});
