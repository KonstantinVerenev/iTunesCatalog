import { useNetInfo } from '@react-native-community/netinfo';
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { NavigationComponentProps, NavigationFunctionComponent } from 'react-native-navigation';

const NetInfoWarning: React.FC = () => {
  return (
    <View style={styles.networkWarning}>
      <Text style={styles.warningText}>Нет соединения</Text>
    </View>
  );
};

const WithNetInfo = <Props extends NavigationComponentProps>(
  Component: NavigationFunctionComponent<Props>
): NavigationFunctionComponent<Props> => {
  const WrappedComponent = (props: Props) => {
    const netInfo = useNetInfo();

    return (
      <>
        <Component {...props} />
        {!netInfo.isInternetReachable && <NetInfoWarning />}
      </>
    );
  };

  WrappedComponent.options = Component.options;

  return WrappedComponent;
};

export default WithNetInfo;

const styles = StyleSheet.create({
  networkWarning: {
    position: 'absolute',
    top: 15,
    right: 15,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: 100,
    height: 100,
    backgroundColor: 'tomato',
    borderRadius: 50,
  },
  warningText: {
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
  },
});
