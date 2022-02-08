import { useEffect } from 'react';
import { Alert, Linking } from 'react-native';

export const useInitialURL = (): void => {
  useEffect(() => {
    const getUrl = async () => {
      const initialUrl = await Linking.getInitialURL();

      if (initialUrl === null) {
        return;
      }

      Alert.alert(initialUrl);
    };

    getUrl();
  }, []);
};
