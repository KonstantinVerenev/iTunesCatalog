import React from 'react';
import { shallow } from 'enzyme';
import { useNetInfo } from '@react-native-community/netinfo';

import withAppHandlers from './withAppHandlers';
import * as StoreSelectorsModule from '../store/selectors';

jest.mock('@react-native-community/netinfo', () => ({
  useNetInfo: jest.fn(() => ({ isInternetReachable: false })),
}));

const useNetInfoMock = useNetInfo as jest.Mocked<typeof useNetInfo>;

// ------ one with error ------
//const mockUseInfo = jest.fn(() => ({ isInternetReachable: false }));
//jest.mock('@react-native-community/netinfo', () => ({
//  useNetInfo: mockUseInfo,
//}));
// ------ but works with middle variable ------
//const useInfoMock = jest.fn(() => ({ isInternetReachable: false }));
//const middle = { useNetInfo: useInfoMock };
//jest.mock('@react-native-community/netinfo', () => middle);

//------
jest.mock('react-redux', () => ({
  useSelector: (func: any) => func(),
  useDispatch: () => {},
}));

jest.spyOn(StoreSelectorsModule, 'selectErrorMessage').mockReturnValue('error');
jest.spyOn(StoreSelectorsModule, 'selectIsLoading').mockReturnValue(true);

describe('withAppHandlers', () => {
  it('should add handlers', () => {
    const mockComponent = jest.fn(() => <React.Fragment />);

    const ComponentWithAppHandlers = withAppHandlers(mockComponent);

    const NetInfoWrapper = shallow(<ComponentWithAppHandlers componentId={''} />);
    const ErrorAndLoadWrapper = NetInfoWrapper.find('[componentId=""]').shallow();

    expect(NetInfoWrapper.find('NetInfoWarning')).toHaveLength(1);
    expect(ErrorAndLoadWrapper.find('ErrorModal')).toHaveLength(1);
    expect(ErrorAndLoadWrapper.find('LoadingScreen')).toHaveLength(1);
  });
});
