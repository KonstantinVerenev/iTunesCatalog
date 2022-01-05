import React from 'react';
import { View, StyleSheet, ActivityIndicator } from 'react-native';
import { NavigationComponentProps, NavigationFunctionComponent } from 'react-native-navigation';
import { useDispatch, useSelector } from 'react-redux';

import colors from '../constants/colors';

import { resetError } from '../store/actions';
import { selectErrorMessage, selectIsLoading } from '../store/selectors';
import { ErrorModal } from '../components/ErrorModal';

const LoadingScreen: React.FC = () => {
  return (
    <View style={styles.loadingWrapper}>
      <ActivityIndicator size={'large'} color={colors.black} style={styles.loadingIndicator} />
    </View>
  );
};

const WithErrorAndLoad = <Props extends NavigationComponentProps>(
  Component: NavigationFunctionComponent<Props>
): NavigationFunctionComponent<Props> => {
  const WrappedComponent = (props: Props) => {
    const errorMessage = useSelector(selectErrorMessage);
    const IsLoading = useSelector(selectIsLoading);
    const dispatch = useDispatch();

    const onCloseError = () => {
      dispatch(resetError());
    };

    return (
      <>
        <Component {...props} />
        {errorMessage && <ErrorModal errorMessage={errorMessage} onCloseError={onCloseError} />}
        {IsLoading && <LoadingScreen />}
      </>
    );
  };

  return WrappedComponent;
};

export default WithErrorAndLoad;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingWrapper: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: colors.opacityGrey,
  },
  loadingIndicator: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
