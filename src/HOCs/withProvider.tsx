import React from 'react';
import { ComponentProvider } from 'react-native';
import { NavigationComponentProps, NavigationFunctionComponent } from 'react-native-navigation';
import { Provider } from 'react-redux';

import { Store } from '../store';

export const withProvider = (Component: NavigationFunctionComponent): ComponentProvider => {
  const wrappedComponent = (props: NavigationComponentProps) => (
    <Provider store={Store}>
      <Component {...props} />
    </Provider>
  );

  return () => wrappedComponent;
};
