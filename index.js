/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './src/Main';
import {name as appName} from './app.json';
import notifee from '@notifee/react-native';

notifee.onBackgroundEvent(async () => { //Apenas para não mostrar mensagem de aviso
});

AppRegistry.registerComponent(appName, () => App);
