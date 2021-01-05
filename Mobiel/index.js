/**
 * @format
 */

import {AppRegistry, YellowBox} from 'react-native';
import Splash from './src/screens/Splash';
import Provider from './src/providers/Provider';
import App from './App';
import {name as appName} from './app.json';

YellowBox.ignoreWarnings(['Warning: ...']);

console.disableYellowBox = true;

AppRegistry.registerComponent(appName, () => App);
