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
                bottomTab: {
                  icon: { uri: 'mic-outline', scale: 3 },
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
                  icon: { uri: 'headphone-outline', scale: 3 },
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
    fontSize: 14,
    iconColor: 'rgba(0, 0, 0, .3)',
    selectedIconColor: 'rgba(0, 0, 0, 1)',
    textColor: 'rgba(0, 0, 0, .3)',
    selectedTextColor: 'rgba(0, 0, 0, 1)',
  },
});
