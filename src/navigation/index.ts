import { Platform } from 'react-native';
import { Navigation } from 'react-native-navigation';

import colors from '../constants/colors';
import { registerAllScreens } from './screenRegister';
import { ALBUMS_SCREEN, ARTISTS_SCREEN, FAVORITES_SCREEN } from './constants';

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
                          text: 'Artists',
                        },
                      },
                      bottomTab: {
                        text: 'Artists',
                      },
                    },
                  },
                },
              ],
              options: {
                bottomTab: {
                  icon:
                    Platform.OS === 'ios'
                      ? { uri: 'mic-outline', scale: 3 }
                      : require('../../assets/icons/mic-outline.png'),
                },
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
                          text: 'Albums',
                        },
                      },
                      bottomTab: {
                        text: 'Albums',
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
          {
            stack: {
              children: [
                {
                  component: {
                    name: FAVORITES_SCREEN,
                    options: {
                      topBar: {
                        title: {
                          text: 'Favorites',
                        },
                      },
                      bottomTab: {
                        text: 'Favorites',
                      },
                    },
                  },
                },
              ],
              options: {
                bottomTab: {
                  icon:
                    Platform.OS === 'ios'
                      ? { uri: 'star', scale: 3 }
                      : require('../../assets/icons/star.png'),
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
    iconColor: colors.black03,
    selectedIconColor: colors.black,
    textColor: colors.black03,
    selectedTextColor: colors.black,
  },
});
