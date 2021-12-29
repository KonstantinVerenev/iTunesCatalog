import { useNetInfo } from '@react-native-community/netinfo';
import React, { useRef } from 'react';
import { Text, StyleSheet, Animated, TouchableOpacity, Alert } from 'react-native';
import { NavigationComponentProps, NavigationFunctionComponent } from 'react-native-navigation';

const NetInfoWarning: React.FC = () => {
  const value = useRef(new Animated.Value(0)).current;

  Animated.sequence([
    Animated.loop(
      Animated.sequence([
        Animated.timing(value, {
          toValue: 1,
          useNativeDriver: true,
          duration: 800,
        }),
        Animated.timing(value, {
          toValue: 0,
          useNativeDriver: true,
          duration: 800,
        }),
      ]),
      { iterations: 5 }
    ),
    Animated.timing(value, {
      toValue: 1,
      useNativeDriver: true,
      duration: 1000,
    }),
  ]).start();

  return (
    <Animated.View style={{ ...styles.warningContainer, opacity: value }}>
      <TouchableOpacity
        style={styles.warningButton}
        onPress={() => Alert.alert('Отсутствует соединение с интернетом')}
      >
        <Text style={styles.warningText}>Нет соединения</Text>
      </TouchableOpacity>
    </Animated.View>
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
        {netInfo.isInternetReachable == false && <NetInfoWarning />}
      </>
    );
  };

  WrappedComponent.options = Component.options;

  return WrappedComponent;
};

export default WithNetInfo;

const styles = StyleSheet.create({
  warningContainer: {
    position: 'absolute',
    top: 15,
    right: 15,
    backgroundColor: 'tomato',
    borderRadius: 50,
  },
  warningButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  warningText: {
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
  },
});
