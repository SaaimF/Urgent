/**
 * @format
 */

import {AppRegistry, Touchable} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import Login from './src/screeens/Login';
import Route from './src/routes';
import Home from './Tes';
import ToggleScreen from './Tes';
import TwoScreensInOne from './Tes';
import TwoSliderScreens from './Tes';

AppRegistry.registerComponent(appName, () => Route);
