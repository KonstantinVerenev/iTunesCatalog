import { Platform, UIManager } from 'react-native';
import { Navigation } from 'react-native-navigation';

import { rootNavigator } from './src/navigation';

if (Platform.OS === 'android') {
  if (UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }
}

Navigation.events().registerAppLaunchedListener(rootNavigator);
