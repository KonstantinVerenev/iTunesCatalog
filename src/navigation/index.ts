import { Platform } from 'react-native';
import { Navigation } from 'react-native-navigation';

import { ALBUMS_SCREEN, ARTISTS_SCREEN, registerAllScreens } from './screenRegister';

registerAllScreens();

export const rootNavigator = (): void => {
  Navigation.setRoot({
    root: {
      bottomTabs: {
        children: [
          {
            stack: {
              children: [
                {
                  component: {
                    name: ARTISTS_SCREEN,
                    options: {
                      topBar: {
                        title: {
                          text: 'Артисты',
                        },
                      },
                      bottomTab: {
                        text: 'Артисты',
                      },
                    },
                  },
                },
              ],
              options: {
                bottomTab:
                  Platform.OS === 'ios'
                    ? { icon: { uri: 'mic-outline', scale: 3 } }
                    : { icon: require('../../assets/icons/mic-outline.png') },
              },
            },
          },
          {
            stack: {
              children: [
                {
                  component: {
                    name: ALBUMS_SCREEN,
                    options: {
                      topBar: {
                        title: {
                          text: 'Альбомы',
                        },
                      },
                      bottomTab: {
                        text: 'Альбомы',
                      },
                    },
                  },
                },
              ],
              options: {
                bottomTab: {
                  icon:
                    Platform.OS === 'ios'
                      ? { uri: 'headphone-outline', scale: 3 }
                      : require('../../assets/icons/headphone-outline.png'),
                },
              },
            },
          },
        ],
      },
    },
  });
};

Navigation.setDefaultOptions({
  bottomTab: {
    fontSize: 12,
    iconColor: 'rgba(0, 0, 0, .3)',
    selectedIconColor: 'rgba(0, 0, 0, 1)',
    textColor: 'rgba(0, 0, 0, .3)',
    selectedTextColor: 'rgba(0, 0, 0, 1)',
  },
});
