import React from 'react';
import { View, StyleSheet, ActivityIndicator } from 'react-native';
import { NavigationComponentProps, NavigationFunctionComponent } from 'react-native-navigation';
import { useDispatch, useSelector } from 'react-redux';

import { resetError } from '../store/actions';
import { selectError, selectIsLoading } from '../store/selectors';
import { ErrorModal } from '../components/ErrorModal';

const LoadingScreen: React.FC = () => {
  return (
    <View style={styles.loadingWrapper}>
      <ActivityIndicator size={'large'} color={'black'} style={styles.loadingIndicator} />
    </View>
  );
};

const WithErrorAndLoad = <Props extends NavigationComponentProps>(
  Component: NavigationFunctionComponent<Props>
): NavigationFunctionComponent<Props> => {
  const WrappedComponent = (props: Props) => {
    const error = useSelector(selectError);
    const IsLoading = useSelector(selectIsLoading);
    const dispatch = useDispatch();

    const onCloseError = () => {
      dispatch(resetError());
    };

    return (
      <>
        <ErrorModal error={error} onCloseError={onCloseError} />
        <Component {...props} />
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
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(255,255,255,0.5)',
  },
  loadingIndicator: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
