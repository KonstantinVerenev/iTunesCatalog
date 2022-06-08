import Reactotron from 'reactotron-react-native';
import AsyncStorage from 'react-native';
import { reactotronRedux } from 'reactotron-redux';

Reactotron.configure({ name: 'itunescatalog' })
  .setAsyncStorageHandler(AsyncStorage)
  .useReactNative()
  .use(reactotronRedux())
  .connect();

Reactotron.log('Reactotron ready!');

export default Reactotron;
