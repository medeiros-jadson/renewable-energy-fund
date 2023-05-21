import 'react-native-gesture-handler';

import { AppRegistry, LogBox } from 'react-native';
import { name as appName } from './app.json';
import AppContainer from './src';

LogBox.ignoreLogs([
  'Non-serializable values were found in the navigation state',
]);

AppRegistry.registerComponent(appName, () => AppContainer);
