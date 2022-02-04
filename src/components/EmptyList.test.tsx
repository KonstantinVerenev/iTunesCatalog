import React from 'react';
import renderer, { ReactTestRendererJSON } from 'react-test-renderer';
import { shallow } from 'enzyme';

import { EmptyList } from './EmptyList';

describe('EmptyList', () => {
  // samples of rendering (please ignore unnecessary it's)
  it('should render EmptyList as expected', () => {
    const EmptyListTree = renderer.create(<EmptyList />).toJSON();

    expect(EmptyListTree).toMatchSnapshot();
  });

  it('should EmptyList contains only one view', () => {
    const tree = renderer.create(<EmptyList />).toJSON() as ReactTestRendererJSON;

    expect(tree?.children?.length).toBe(1);
  });

  it('should EmptyList contains right text', () => {
    const wrapper = shallow(<EmptyList />);

    expect(wrapper.find({ testID: 'empty-message' }).contains('Ничего не найдено')).toBeTruthy();
  });
});
