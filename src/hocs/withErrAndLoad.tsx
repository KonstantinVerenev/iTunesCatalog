import React from 'react';
import { View, Text, StyleSheet, Button, ActivityIndicator } from 'react-native';
import { NavigationComponentProps, NavigationFunctionComponent } from 'react-native-navigation';
import { useDispatch, useSelector } from 'react-redux';
import { resetError } from '../store/actions';

import { selectError, selectIsLoading } from '../store/selectors';
type errorScreen = {
  error: string | null;
};

const ErrorScreen: React.FC<errorScreen> = ({ error }) => {
  const dispatch = useDispatch();

  const setErrorToNull = () => {
    dispatch(resetError());
  };

  return (
    <View style={styles.container}>
      <View style={styles.container}>
        <Text style={styles.errorMessage}>
          Ошибка: {'\n'}
          {error}
        </Text>
        <Button title={'Назад'} onPress={setErrorToNull} />
      </View>
    </View>
  );
};

const LoadingScreen: React.FC = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <ActivityIndicator size="large" />
    </View>
  );
};

const WithErrAndLoad = <Props extends NavigationComponentProps>(
  Component: NavigationFunctionComponent<Props>
): NavigationFunctionComponent<Props> => {
  return function WithErrAndLoadComponent(props: Props) {
    const error = useSelector(selectError);
    const IsLoading = useSelector(selectIsLoading);

    if (IsLoading) return <LoadingScreen />;

    return (
      <>
        <Component {...props} />
        {error && <ErrorScreen error={error} />}
      </>
    );
  };
};

export default WithErrAndLoad;

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
    fontWeight: 'bold',
    fontSize: 18,
    color: 'white',
  },
});
