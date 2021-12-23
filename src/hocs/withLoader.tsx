import React from 'react';
import { View, ActivityIndicator } from 'react-native';
import { NavigationComponentProps, NavigationFunctionComponent } from 'react-native-navigation';
import { useSelector } from 'react-redux';
import { selectAlbumsIsLoading } from '../features/albums/selectors/selectors';
import { selectArtistIsLoading } from '../features/artists/selectors/selectors';

const LoadingScreen: React.FC = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <ActivityIndicator size="large" />
    </View>
  );
};

const WithLoading = <Props extends NavigationComponentProps>(
  Component: NavigationFunctionComponent<Props>
): NavigationFunctionComponent<Props> => {
  return function WithLoadingComponent(props: Props) {
    const artistIsLoading = useSelector(selectArtistIsLoading);
    const albumsIsLoading = useSelector(selectAlbumsIsLoading);

    if (!artistIsLoading && !albumsIsLoading) return <Component {...props} />;
    return <LoadingScreen />;
  };
};

export default WithLoading;
