import { Navigation } from 'react-native-navigation';

import { rootNavigator } from './src/navigation';

Navigation.events().registerAppLaunchedListener(rootNavigator);
