import { Navigation } from 'react-native-navigation';

import { rootNavigator } from './src/navigation/navigation';

Navigation.events().registerAppLaunchedListener(rootNavigator);
