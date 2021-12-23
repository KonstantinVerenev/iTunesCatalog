import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { NavigationComponentProps, NavigationFunctionComponent } from 'react-native-navigation';
import { useSelector } from 'react-redux';

import { selectAlbumsError } from '../features/albums/selectors/selectors';
import { selectArtistError } from '../features/artists/selectors/selectors';

type errorScreen = {
  error: string | null;
};

const ErrorScreen: React.FC<errorScreen> = ({ error }) => {
  return (
    <View style={styles.container}>
      <View style={styles.container}>
        <Text style={styles.errorMessage}>
          Ошибка: {'\n'}
          {error}
        </Text>
        <Button title={'Back'} />
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

    //if (!artistError && !albumError) return <Component {...props} />;
    //return <ErrorScreen error={artistError ? artistError : albumError} />;
  };
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(123, 123, 123, 0.4)',
  },
  errorMessage: {
    padding: 20,
    textAlign: 'center',
    fontSize: 18,
    color: 'tomato',
  },
});

export default WithError;
