import { useEffect } from 'react';
import { Navigation } from 'react-native-navigation';

export const useButtonListener = (buttonId: string, onPress: () => void): void => {
  useEffect(() => {
    const subscriber = Navigation.events().registerNavigationButtonPressedListener(
      ({ buttonId: id }) => {
        if (id === buttonId) {
          onPress();
        }
      }
    );

    return () => {
      subscriber.remove();
    };
  }, [buttonId, onPress]);
};
