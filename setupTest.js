import Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import enableHooks from 'jest-react-hooks-shallow';

enableHooks(jest);

Enzyme.configure({ adapter: new Adapter() });

// ------ react-redux mock ------
jest.mock('react-redux', () => ({
  useSelector: (func) => func(),
  useDispatch: () => {},
}));

// ------ netinfo mock ------
jest.mock('@react-native-community/netinfo', () => ({
  useNetInfo: jest.fn(),
}));
