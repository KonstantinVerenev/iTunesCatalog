import { Navigation } from 'react-native-navigation';

import { rootNavigator } from './navigation';

Navigation.events().registerAppLaunchedListener(rootNavigator);
