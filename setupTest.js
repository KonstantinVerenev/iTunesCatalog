import Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import enableHooks from 'jest-react-hooks-shallow';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

enableHooks(jest);

Enzyme.configure({ adapter: new Adapter() });

// ------ redux store mock ------
export const configureMockStore = configureStore([thunk]);
export const mockStore = configureMockStore({});

// ------ interceptors mock ------
jest.mock('./src/services/interceptors', () => ({ setupInterceptors: jest.fn() }));

// ------ react-redux mock ------
//export const mockDispatch = jest.fn();

jest.mock('react-redux', () => ({
  useSelector: (func) => func(),
  useDispatch: () => mockStore.dispatch,
}));

// ------ netInfo mock ------
export const mockNetInfo = jest.fn();

jest.mock('@react-native-community/netinfo', () => ({
  useNetInfo: mockNetInfo,
}));

// ------ Navigation mock ------
jest.mock('react-native-navigation', () => ({
  Navigation: {
    mergeOptions: jest.fn(),
    events: () => ({
      registerNavigationButtonPressedListener: jest.fn(),
    }),
    push: jest.fn(),
  },
}));

// ------ Native Animated mocks ------
jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');
jest.mock('react-native/Libraries/Animated/Easing');
jest.mock('react-native/Libraries/Animated/animations/TimingAnimation');
