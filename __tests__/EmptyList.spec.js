import React from 'react';
import renderer from 'react-test-renderer';
import { shallow, mount } from 'enzyme';

import { EmptyList } from '../src/components/EmptyList';

describe('EmptyList', () => {
  it('should render EmptyList as expected', () => {
    const EmptyListTree = renderer.create(<EmptyList />).toJSON();
    expect(EmptyListTree).toMatchSnapshot();
  });

  it('should EmptyList contains only one view', () => {
    const tree = renderer.create(<EmptyList />).toJSON();
    expect(tree.children.length).toBe(1);
  });

  it('should EmptyList contains text', () => {
    const wrapper = shallow(<EmptyList />);

    expect(wrapper.find({ testID: 'empty-message' })).toHaveLength(1);

    //expect(wrapper.find({ testID: 'empty-message' }).contains('Ничего не найдено')).toBeTruthy();

    //expect(wrapper.find({ testID: 'empty-message' }).prop('children')).toEqual('Ничего не найдено');
  });
});
