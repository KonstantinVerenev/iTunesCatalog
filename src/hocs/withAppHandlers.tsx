import { compose } from 'redux';
import { NavigationComponentProps, NavigationFunctionComponent } from 'react-native-navigation';

import WithNetInfo from './withNetInfo';
import WithErrorAndLoad from './withErrorAndLoad';

const whiteHocList = [WithNetInfo, WithErrorAndLoad];

const withAppHandlers = <Props extends NavigationComponentProps>(
  Component: NavigationFunctionComponent<Props>
): NavigationFunctionComponent<Props> => {
  return compose<NavigationFunctionComponent<Props>>(...whiteHocList)(Component);
};

export default withAppHandlers;
