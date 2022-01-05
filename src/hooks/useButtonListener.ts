import { useEffect } from 'react';
import { Navigation } from 'react-native-navigation';

export const useButtonListener = (
  screenName: string,
  id: string,
  collectionId: number,
  onPress: () => void
): void => {
  useEffect(() => {
    const subscriber = Navigation.events().registerNavigationButtonPressedListener(
      ({ buttonId }) => {
        if (buttonId === `${screenName}-${id}`) {
          onPress();
        }
      }
    );

    return () => {
      subscriber.remove();
    };
  }, [collectionId, id, onPress, screenName]);
};
