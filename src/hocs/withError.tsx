import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { NavigationComponentProps, NavigationFunctionComponent } from 'react-native-navigation';
import { useSelector } from 'react-redux';

import { selectAlbumsError } from '../features/albums/selectors/selectors';
import { selectArtistError } from '../features/artists/selectors/selectors';

type errorScreen = {
  error: string | null;
};

const setErrorToNull = () => {
  // тут  надо будет сетать ошибку в null
};

const ErrorScreen: React.FC<errorScreen> = ({ error }) => {
  return (
    <View style={styles.container}>
      <View style={styles.container}>
        <Text style={styles.errorMessage}>
          Ошибка: {'\n'}
          {error}
        </Text>
        <Button title={'Back'} onPress={setErrorToNull} />
      </View>
    </View>
  );
};

const WithError = <Props extends NavigationComponentProps>(
  Component: NavigationFunctionComponent<Props>
): NavigationFunctionComponent<Props> => {
  return function WithErrorComponent(props: Props) {
    const artistError = useSelector(selectArtistError);
    const albumError = useSelector(selectAlbumsError);

    return (
      <>
        <Component {...props} />
        {(artistError || albumError) && (
          <ErrorScreen error={artistError ? artistError : albumError} />
        )}
      </>
    );
  };
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(223, 66, 52, 0.2)',
  },
  errorMessage: {
    padding: 20,
    textAlign: 'center',
    fontSize: 18,
    color: 'tomato',
  },
});

export default WithError;
