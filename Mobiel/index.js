/**
 * @format
 */

import {AppRegistry, LogBox} from 'react-native';
import Splash from './src/screens/Splash';
import Provider from './src/providers/Provider';
import App from './App';
import {name as appName} from './app.json';

LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
LogBox.ignoreAllLogs();//Ignore all log notifications

AppRegistry.registerComponent(appName, () => App);
