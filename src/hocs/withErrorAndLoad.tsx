import React from 'react';
import { View, Text, StyleSheet, Button, ActivityIndicator } from 'react-native';
import { NavigationComponentProps, NavigationFunctionComponent } from 'react-native-navigation';
import { useDispatch, useSelector } from 'react-redux';
import Modal from 'react-native-modal';

import { resetError } from '../store/actions';
import { selectError, selectIsLoading } from '../store/selectors';

type ErrorModal = {
  error: string | null;
};

const ErrorModal: React.FC<ErrorModal> = ({ error }) => {
  const dispatch = useDispatch();

  const setErrorToNull = () => {
    dispatch(resetError());
  };

  return (
    <Modal isVisible={error ? true : false} animationIn={'zoomInUp'}>
      <View style={styles.modalContainer}>
        <View style={styles.modalWindow}>
          <Text style={styles.errorMessage}>
            Ошибка: {'\n'}
            {error}
          </Text>
          <Button title={'Назад'} onPress={setErrorToNull} />
        </View>
      </View>
    </Modal>
  );
};

const LoadingScreen: React.FC = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <ActivityIndicator size="large" />
    </View>
  );
};

const WithErrorAndLoad = <Props extends NavigationComponentProps>(
  Component: NavigationFunctionComponent<Props>
): NavigationFunctionComponent<Props> => {
  const WrappedComponent = (props: Props) => {
    const error = useSelector(selectError);
    const IsLoading = useSelector(selectIsLoading);

    if (IsLoading) return <LoadingScreen />;

    return (
      <>
        <ErrorModal error={error} />
        <Component {...props} />
      </>
    );
  };

  WrappedComponent.options = Component.options;

  return WrappedComponent;
};

export default WithErrorAndLoad;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorMessage: {
    padding: 20,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 18,
    color: 'tomato',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalWindow: {
    width: 300,
    maxWidth: '90%',
    height: 200,
    maxHeight: '90%',
    borderRadius: 20,
    borderWidth: 2,
    borderColor: 'tomato',
    backgroundColor: 'white',
  },
});
