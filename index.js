/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import Login from './Login';
import Drawer from './Drawer';

AppRegistry.registerComponent(appName, () => Drawer);
