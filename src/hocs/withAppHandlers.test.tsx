import React from 'react';
import { shallow } from 'enzyme';
import * as NetInfoModule from '@react-native-community/netinfo';

import withAppHandlers from './withAppHandlers';
import * as AppSelectorsModule from '../store/selectors';
import { mockNetInfo } from '../../setupTest';

describe('withAppHandlers', () => {
  it('should add handlers', () => {
    mockNetInfo.mockReturnValue({ isInternetReachable: false });

    jest.spyOn(AppSelectorsModule, 'selectErrorMessage').mockReturnValue('error');
    jest.spyOn(AppSelectorsModule, 'selectIsLoading').mockReturnValue(true);

    const mockComponent = jest.fn(() => <React.Fragment />);

    const ComponentWithAppHandlers = withAppHandlers(mockComponent);

    const NetInfoWrapper = shallow(<ComponentWithAppHandlers componentId={''} />);
    const ErrorAndLoadWrapper = NetInfoWrapper.find('[componentId=""]').shallow();

    expect(NetInfoWrapper.find('NetInfoWarning')).toHaveLength(1);
    expect(ErrorAndLoadWrapper.find('ErrorModal')).toHaveLength(1);
    expect(ErrorAndLoadWrapper.find('LoadingScreen')).toHaveLength(1);
  });
});
