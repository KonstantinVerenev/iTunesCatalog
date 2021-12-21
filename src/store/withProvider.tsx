import React from 'react';
import { ComponentProvider } from 'react-native';
import { NavigationComponentProps } from 'react-native-navigation';
import { Provider } from 'react-redux';

import { Store } from '.';

export const withProvider = <Props extends NavigationComponentProps>(
  Component: React.FC<Props>
): ComponentProvider => {
  const wrappedComponent = (props: Props) => (
    <Provider store={Store}>
      <Component {...props} />
    </Provider>
  );

  return () => wrappedComponent;
};
