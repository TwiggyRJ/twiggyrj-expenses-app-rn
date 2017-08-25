/* eslint-disable import/prefer-default-export */
import { Navigation } from 'react-native-navigation';
import Login from '../routes/login/index'

export function registerScreens(store, Provider) {
  Navigation.registerComponent('expensesApp.Login', () => Login, store, Provider);
}
