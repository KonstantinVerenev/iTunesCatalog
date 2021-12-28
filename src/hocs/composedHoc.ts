import { compose } from 'redux';

import WithNetInfo from './withNetInfo';
import WithErrorAndLoad from './withErrorAndLoad';
import { NavigationComponentProps, NavigationFunctionComponent } from 'react-native-navigation';

const allHocs = [WithNetInfo, WithErrorAndLoad];

const composedHOC = <Props extends NavigationComponentProps>(
  Component: NavigationFunctionComponent<Props>
): NavigationFunctionComponent<Props> => {
  return compose<NavigationFunctionComponent<Props>>(...allHocs)(Component);
};

export default composedHOC;
