import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { NavigationComponentProps, NavigationFunctionComponent } from 'react-native-navigation';
import { useSelector } from 'react-redux';

import { selectError } from '../store/selectors';

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
    const error = useSelector(selectError);

    return (
      <>
        <Component {...props} />
        {error && <ErrorScreen error={error} />}
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
    color: 'white',
  },
});

export default WithError;
